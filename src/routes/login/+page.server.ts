import { redirect, fail } from '@sveltejs/kit';
import { createSupabaseServiceClient } from '$lib/server/supabase';
import type { PageServerLoad, Actions } from './$types';

const MEMBER_EMAIL_DOMAIN = '@members.rotaractlilongwe.org';

export const load: PageServerLoad = async ({ locals }) => {
  console.log('🔐 [/login] Page load - checking for existing session...');
  const session = await locals.getSession();
  
  if (session) {
    console.log('✅ Active session found for user:', session.user?.email);
    const member = await locals.getMember();
    const redirectTo = member?.is_admin ? '/admin/applications' : '/portal';
    console.log('🔄 Redirecting to', redirectTo);
    throw redirect(302, redirectTo);
  }
  
  console.log('❌ No active session found - showing login form');
  return {};
};

export const actions: Actions = {
  login: async ({ request, locals }) => {
    const formData = await request.formData();
    const memberId = (formData.get('email') as string | null)?.trim().toLowerCase() ?? '';
    const password = formData.get('password') as string;

    if (!memberId || !password) {
      return fail(400, { error: 'RAC number and password are required.' });
    }

    const email = memberId.includes('@') ? memberId : `${memberId}${MEMBER_EMAIL_DOMAIN}`;

    console.log('🔐 [/login] Server-side login attempt for:', email);

    try {
      const { data, error } = await locals.supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.error('❌ Login error:', error.message);
        return fail(401, {
          error: error.message === 'Invalid login credentials'
            ? 'Incorrect email or password. Please try again.'
            : error.message
        });
      }

      console.log('✅ Login successful for:', email);
      const supabase = createSupabaseServiceClient();
      let { data: member, error: memberError } = await supabase
        .from('members')
        .select('is_admin')
        .eq('user_id', data.user.id)
        .maybeSingle();

      if (!member && data.user.email) {
        const result = await supabase
          .from('members')
          .select('is_admin')
          .eq('email', data.user.email.toLowerCase())
          .maybeSingle();

        member = result.data;
        memberError = result.error;
      }

      if (memberError) {
        console.error('❌ Member lookup error after login:', memberError.message);
      }

      throw redirect(302, member?.is_admin ? '/admin/applications' : '/portal');
    } catch (err: any) {
      if (err.status === 302) throw err; // Re-throw redirects
      console.error('❌ Unexpected error during login:', err);
      return fail(500, { error: 'An unexpected error occurred. Please try again.' });
    }
  },

  resetPassword: async ({ request }) => {
    const formData = await request.formData();
    const email = (formData.get('email') as string | null)?.trim().toLowerCase() ?? '';

    if (!email) {
      return fail(400, { error: 'Email is required.' });
    }

    console.log('🔐 [/login] Password reset requested for:', email);

    try {
      const supabase = createSupabaseServiceClient();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.ORIGIN || 'http://localhost:5173'}/auth/callback?type=recovery`
      });

      if (error) {
        console.error('❌ Password reset error:', error.message);
        // Don't reveal if email exists or not (security best practice)
        return { success: true, message: 'If an account exists with that email, you will receive a password reset link.' };
      }

      console.log('✅ Password reset email sent to:', email);
      return { success: true, message: 'Check your email for password reset instructions.' };
    } catch (err: any) {
      console.error('❌ Unexpected error during password reset:', err);
      return fail(500, { error: 'An error occurred. Please try again.' });
    }
  }
};
