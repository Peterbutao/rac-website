import { fail } from '@sveltejs/kit';
import { createSupabaseServiceClient } from '$lib/server/supabase';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const me = await locals.getMember();
  if (!me?.is_admin) return { members: [], attendance: [] };

  const supabase = createSupabaseServiceClient();

  const { data: members } = await supabase
    .from('members')
    .select('*')
    .eq('status', 'active')
    .order('full_name');

  const { data: attendance } = await supabase
    .from('meeting_attendance')
    .select(`
      *,
      member:members(full_name, rac_number)
    `)
    .order('meeting_date', { ascending: false });

  return { members: members ?? [], attendance: attendance ?? [] };
};

export const actions: Actions = {
  addAttendance: async ({ request, locals }) => {
    const me = await locals.getMember();
    if (!me?.is_admin) return fail(403, { error: 'Unauthorized' });

    const data = await request.formData();
    const member_id = parseInt(data.get('member_id') as string);
    const meeting_date = data.get('meeting_date') as string;
    const attended = data.get('attended') === 'on';

    if (!member_id || !meeting_date) {
      return fail(400, { error: 'Member and meeting date are required' });
    }

    const supabase = createSupabaseServiceClient();
    const { error } = await supabase
      .from('meeting_attendance')
      .upsert(
        { member_id, meeting_date, attended },
        { onConflict: 'member_id,meeting_date' }
      );

    if (error) return fail(500, { error: error.message });
    return { success: true };
  },

  updateAttendance: async ({ request, locals }) => {
    const me = await locals.getMember();
    if (!me?.is_admin) return fail(403, { error: 'Unauthorized' });

    const data = await request.formData();
    const id = parseInt(data.get('id') as string);
    const attended = data.get('attended') === 'on';

    const supabase = createSupabaseServiceClient();
    const { error } = await supabase
      .from('meeting_attendance')
      .update({ attended })
      .eq('id', id);

    if (error) return fail(500, { error: error.message });
    return { success: true };
  },

  deleteAttendance: async ({ request, locals }) => {
    const me = await locals.getMember();
    if (!me?.is_admin) return fail(403, { error: 'Unauthorized' });

    const data = await request.formData();
    const id = parseInt(data.get('id') as string);

    const supabase = createSupabaseServiceClient();
    const { error } = await supabase.from('meeting_attendance').delete().eq('id', id);

    if (error) return fail(500, { error: error.message });
    return { success: true };
  },

  bulkAddAttendance: async ({ request, locals }) => {
    const me = await locals.getMember();
    if (!me?.is_admin) return fail(403, { error: 'Unauthorized' });

    const data = await request.formData();
    const meeting_date = data.get('meeting_date') as string;
    const attended_ids = data.getAll('attended_ids').map(Number);

    if (!meeting_date) {
      return fail(400, { error: 'Meeting date is required' });
    }

    const supabase = createSupabaseServiceClient();

    // Get all active members
    const { data: members } = await supabase
      .from('members')
      .select('id')
      .eq('status', 'active');

    if (!members) return fail(500, { error: 'Failed to fetch members' });

    // Create attendance records for all members
    const records = members.map((m: any) => ({
      member_id: m.id,
      meeting_date,
      attended: attended_ids.includes(m.id)
    }));

    const { error } = await supabase
      .from('meeting_attendance')
      .upsert(records, { onConflict: 'member_id,meeting_date' });

    if (error) return fail(500, { error: error.message });
    return { success: true };
  }
};