import { createSupabaseServerClient, createSupabaseServiceClient } from '$lib/server/supabase';
import { syncAllSheets } from '$lib/server/sheets-sync';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient(event.cookies);

  // Cache for member data to avoid repeated queries
  let memberCache: any = null;
  let memberCacheUserId: string | null = null;

  event.locals.getSession = async () => {
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession();
    return session;
  };

  event.locals.getUser = async () => {
    const {
      data: { user },
      error
    } = await event.locals.supabase.auth.getUser();
    if (error) {
      return null;
    }
    return user;
  };

  event.locals.getMember = async () => {
    const user = await event.locals.getUser();
    if (!user) {
      return null;
    }

    // Return cached member if it's for the same user
    if (memberCache && memberCacheUserId === user.id) {
      return memberCache;
    }

    try {
      const serviceSupabase = createSupabaseServiceClient();
      let { data, error } = await serviceSupabase
        .from('members')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (!data && user.email) {
        const result = await serviceSupabase
          .from('members')
          .select('*')
          .eq('email', user.email.toLowerCase())
          .maybeSingle();

        data = result.data;
        error = result.error;
      }

      if (error) {
        return null;
      }

      if (!data) {
        return null;
      }

      // Cache the result
      memberCache = data;
      memberCacheUserId = user.id;

      // Trigger Google Sheets sync for admin users (non-blocking)
      if (data.is_admin) {
        syncAllSheets().catch(err => {
          console.error('[SYNC] Background sync failed:', err);
        });
      }

      return data;
    } catch (err) {
      return null;
    }
  };

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range' || name === 'x-supabase-api-version';
    }
  });
};