import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
});

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailParams) {
  const from = process.env.SMTP_FROM || 'Rotaract Club of Lilongwe <noreply@rotaractlilongwe.org>';

  try {
    const info = await transporter.sendMail({
      from,
      to,
      replyTo,
      subject,
      html,
    });
    console.log(`✅ Email sent successfully to ${to}: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    return { success: false, error: String(error) };
  }
}

export function buildPartnershipEmail(data: {
  organization_name: string;
  contact_name: string;
  email: string;
  phone: string;
  partnership_type: string;
  message: string;
}) {
  return {
    subject: `New Partnership Inquiry – ${data.organization_name}`,
    html: `
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; max-width: 600px; margin: 0 auto; background: #F5F0EB; padding: 32px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <img src="https://kwwvmkszattobpgisslt.supabase.co/storage/v1/object/public/RAC/BACKGROUND/logo.png" alt="Rotaract Club of Lilongwe" style="height: 60px;"/>
        </div>
        <div style="background: white; border-radius: 8px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
          <h1 style="font-family: 'Playfair Display', serif; color: #E8175D; font-size: 28px; margin-bottom: 24px; border-bottom: 2px solid #E8175D; padding-bottom: 12px;">
            🤝 New Partnership Inquiry
          </h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; font-weight: 700; color: #1A1A1A;">Organization:</td><td style="padding: 10px 0; color: rgba(26,26,26,0.7);">${data.organization_name}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #1A1A1A;">Contact Person:</td><td style="padding: 10px 0; color: rgba(26,26,26,0.7);">${data.contact_name}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #1A1A1A;">Email:</td><td style="padding: 10px 0; color: rgba(26,26,26,0.7);"><a href="mailto:${data.email}" style="color: #E8175D;">${data.email}</a></td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #1A1A1A;">Phone:</td><td style="padding: 10px 0; color: rgba(26,26,26,0.7);">${data.phone}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #1A1A1A;">Partnership Type:</td><td style="padding: 10px 0; color: rgba(26,26,26,0.7);">${data.partnership_type}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #F5F0EB; border-radius: 6px;">
            <h3 style="font-family: 'Playfair Display', serif; color: #E8175D; font-size: 16px; margin-bottom: 8px;">📝 Message</h3>
            <p style="color: rgba(26,26,26,0.7); line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
        <div style="text-align: center; margin-top: 24px; color: rgba(26,26,26,0.4); font-size: 12px;">
          <p>Rotaract Club of Lilongwe — Unite for Good</p>
        </div>
      </div>
    `,
  };
}

export function buildDonationEmail(data: {
  full_name: string;
  email: string;
  phone: string;
  amount: string;
  message?: string;
}) {
  return {
    subject: `New Donation Interest – ${data.full_name}`,
    html: `
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; max-width: 600px; margin: 0 auto; background: #F5F0EB; padding: 32px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <img src="https://kwwvmkszattobpgisslt.supabase.co/storage/v1/object/public/RAC/BACKGROUND/logo.png" alt="Rotaract Club of Lilongwe" style="height: 60px;"/>
        </div>
        <div style="background: white; border-radius: 8px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
          <h1 style="font-family: 'Playfair Display', serif; color: #E8175D; font-size: 28px; margin-bottom: 24px; border-bottom: 2px solid #E8175D; padding-bottom: 12px;">
            💝 New Donation Interest
          </h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; font-weight: 700; color: #1A1A1A;">Name:</td><td style="padding: 10px 0; color: rgba(26,26,26,0.7);">${data.full_name}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #1A1A1A;">Email:</td><td style="padding: 10px 0; color: rgba(26,26,26,0.7);"><a href="mailto:${data.email}" style="color: #E8175D;">${data.email}</a></td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #1A1A1A;">Phone:</td><td style="padding: 10px 0; color: rgba(26,26,26,0.7);">${data.phone}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: 700; color: #1A1A1A;">Donation Amount:</td><td style="padding: 10px 0; color: #E8175D; font-size: 20px; font-weight: 700;">${data.amount}</td></tr>
          </table>
          ${data.message ? `
          <div style="margin-top: 24px; padding: 16px; background: #F5F0EB; border-radius: 6px;">
            <h3 style="font-family: 'Playfair Display', serif; color: #E8175D; font-size: 16px; margin-bottom: 8px;">📝 Message</h3>
            <p style="color: rgba(26,26,26,0.7); line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
          </div>
          ` : ''}
        </div>
        <div style="text-align: center; margin-top: 24px; color: rgba(26,26,26,0.4); font-size: 12px;">
          <p>Rotaract Club of Lilongwe — Unite for Good</p>
        </div>
      </div>
    `,
  };
}