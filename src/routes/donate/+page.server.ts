import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const full_name = (data.get('full_name') as string)?.trim();
    const email     = (data.get('email') as string)?.trim().toLowerCase();
    const phone     = (data.get('phone') as string)?.trim();
    const amount    = (data.get('amount') as string)?.trim();
    const message   = (data.get('message') as string)?.trim() || undefined;

    const values = { full_name, email, phone, amount, message };

    // Validate
    const fieldErrors: Record<string, string> = {};

    if (!full_name || full_name.length < 2)
      fieldErrors.full_name = 'Please enter your full name.';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      fieldErrors.email = 'Please enter a valid email address.';

    if (!phone || phone.length < 7)
      fieldErrors.phone = 'Please enter a valid phone number.';

    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0)
      fieldErrors.amount = 'Please enter a valid donation amount.';

    if (Object.keys(fieldErrors).length > 0) {
      return fail(422, { fieldErrors, values });
    }

    return {
      success: true,
      full_name,
      email,
    };
  }
};