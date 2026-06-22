import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createSupabaseServiceClient } from '$lib/server/supabase';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const organization_name = (data.get('organization_name') as string)?.trim();
    const contact_name      = (data.get('contact_name') as string)?.trim();
    const email             = (data.get('email') as string)?.trim().toLowerCase();
    const phone             = (data.get('phone') as string)?.trim();
    const partnership_type  = (data.get('partnership_type') as string)?.trim();
    const message           = (data.get('message') as string)?.trim();

    const values = { organization_name, contact_name, email, phone, partnership_type, message };

    // Validate
    const fieldErrors: Record<string, string> = {};

    if (!organization_name || organization_name.length < 2)
      fieldErrors.organization_name = 'Please enter your organization name.';

    if (!contact_name || contact_name.length < 2)
      fieldErrors.contact_name = 'Please enter your contact name.';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      fieldErrors.email = 'Please enter a valid email address.';

    if (!phone || phone.length < 7)
      fieldErrors.phone = 'Please enter a valid phone number.';

    if (!partnership_type)
      fieldErrors.partnership_type = 'Please select a partnership type.';

    if (!message || message.length < 10)
      fieldErrors.message = 'Please tell us more about your interest (at least 10 characters).';

    if (Object.keys(fieldErrors).length > 0) {
      return fail(422, { fieldErrors, values });
    }

    // Save to database
    const supabase = createSupabaseServiceClient();
    const { error } = await supabase.from('partnership_inquiries').insert({
      organization_name,
      contact_name,
      email,
      phone,
      partnership_type,
      message,
    } as any);

    if (error) {
      console.error('Failed to save partnership inquiry:', error);
      return fail(500, { error: 'Something went wrong saving your inquiry. Please try again.', values });
    }

    return {
      success: true,
      organization_name,
      contact_name,
      email,
    };
  }
};