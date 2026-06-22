<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';
  import logo from '$lib/assets/logo.png';
  import { Handshake, Globe, GraduationCap, ArrowRight } from 'lucide-svelte';

  export let form: ActionData;

  let submitting = false;

  // Form fields
  let organization_name = form?.values?.organization_name ?? '';
  let contact_name      = form?.values?.contact_name ?? '';
  let email             = form?.values?.email ?? '';
  let phone             = form?.values?.phone ?? '';
  let partnership_type  = form?.values?.partnership_type ?? '';
  let message           = form?.values?.message ?? '';
</script>

<svelte:head>
  <title>Partnerships — Rotaract Club of Lilongwe</title>
  <meta name="description" content="Partner with the Rotaract Club of Lilongwe. Join us in making a difference through corporate sponsorships, community collaborations, and more." />
</svelte:head>

<main>
  <!-- ─── HERO ─── -->
  <section class="partnerships-hero">
    <div class="hero-shade"></div>
    <div class="hero-inner">
      <div class="hero-copy">
        <div class="section-pill dark">PARTNERSHIPS</div>
        <h1>PARTNER<br /><span>WITH US</span></h1>
        <p>
          Join forces with the Rotaract Club of Lilongwe to create lasting impact in our communities.
          Together we can achieve more.
        </p>
      </div>
    </div>
  </section>

  <!-- ─── INFO CARDS ─── -->
  <section class="info-section">
    <div class="info-inner">
      <div class="info-header">
        <div class="section-pill">WHY PARTNER</div>
        <h2>WAYS TO<br /><span>COLLABORATE</span></h2>
      </div>

      <div class="info-grid">
        <article class="info-card">
          <Handshake class="info-card__icon" size={28} stroke-width={2.2} />
          <div>
            <span class="info-card__num">01</span>
            <h3>Corporate Sponsorship</h3>
            <p>Support our projects and events while aligning your brand with youth-led community development.</p>
          </div>
        </article>
        <article class="info-card">
          <Globe class="info-card__icon" size={28} stroke-width={2.2} />
          <div>
            <span class="info-card__num">02</span>
            <h3>Community Collaboration</h3>
            <p>Work alongside us on initiatives that address health, education, environment, and economic development.</p>
          </div>
        </article>
        <article class="info-card">
          <GraduationCap class="info-card__icon" size={28} stroke-width={2.2} />
          <div>
            <span class="info-card__num">03</span>
            <h3>Skills & Mentorship</h3>
            <p>Share your expertise through workshops, training sessions, and mentorship programs for our members.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ─── FORM SECTION ─── -->
  <section class="form-section" id="contact">
    <div class="form-inner">
      {#if form?.success}
        <!-- ─── SUCCESS STATE ─── -->
        <div class="success-card">
          <div class="success-card__icon">✓</div>
          <h2>INQUIRY<br /><span>SUBMITTED</span></h2>
          <p>
            Thank you, <strong>{form.contact_name}</strong>! Your partnership inquiry for <strong>{form.organization_name}</strong> has been received.
          </p>
          <p class="success-card__copy">
            Our partnerships team will review your request and reach out to you at <strong>{form.email}</strong> within 3–5 business days.
          </p>
          <a href="mailto:info@rotaractlilongwe.org?subject=Partnership%20Inquiry%20-{form.organization_name}&body=Organization:%20{form.organization_name}%0AContact:%20{form.contact_name}%0AEmail:%20{form.email}%0APhone:%20{phone}%0AType:%20{partnership_type}%0AMessage:%20{message}" class="btn-primary">Send via Email</a>
          <a href="/" class="btn-primary" style="margin-left: 12px;">Back to Home</a>
        </div>
      {:else}
        <div class="form-header">
          <div class="section-pill dark">GET IN TOUCH</div>
          <h2>START A<br /><span>CONVERSATION</span></h2>
          <p>Fill out the form below and we'll get back to you within 3–5 business days.</p>
        </div>

        {#if form?.error}
          <div class="alert alert--error form-alert">
            ⚠️ {form.error}
          </div>
        {/if}

        <form
          method="POST"
          use:enhance={() => {
            submitting = true;
            return async ({ update }) => {
              submitting = false;
              await update();
            };
          }}
          class="form"
          novalidate
        >
          <div class="form-row form-row--2">
            <div class="form-group">
              <label class="form-label" for="organization_name">Organization Name *</label>
              <input
                id="organization_name"
                name="organization_name"
                type="text"
                class="form-input"
                class:error={form?.fieldErrors?.organization_name}
                bind:value={organization_name}
                placeholder="e.g. Malawi Telecom Ltd"
                required
              />
              {#if form?.fieldErrors?.organization_name}
                <span class="form-error">{form.fieldErrors.organization_name}</span>
              {/if}
            </div>
            <div class="form-group">
              <label class="form-label" for="contact_name">Contact Person *</label>
              <input
                id="contact_name"
                name="contact_name"
                type="text"
                class="form-input"
                class:error={form?.fieldErrors?.contact_name}
                bind:value={contact_name}
                placeholder="e.g. Jane Mwale"
                required
              />
              {#if form?.fieldErrors?.contact_name}
                <span class="form-error">{form.fieldErrors.contact_name}</span>
              {/if}
            </div>
          </div>

          <div class="form-row form-row--2">
            <div class="form-group">
              <label class="form-label" for="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                class="form-input"
                class:error={form?.fieldErrors?.email}
                bind:value={email}
                placeholder="jane@example.com"
                required
              />
              {#if form?.fieldErrors?.email}
                <span class="form-error">{form.fieldErrors.email}</span>
              {/if}
            </div>
            <div class="form-group">
              <label class="form-label" for="phone">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                class="form-input"
                class:error={form?.fieldErrors?.phone}
                bind:value={phone}
                placeholder="+265 999 000 000"
                required
              />
              {#if form?.fieldErrors?.phone}
                <span class="form-error">{form.fieldErrors.phone}</span>
              {/if}
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="partnership_type">Partnership Type *</label>
              <select
                id="partnership_type"
                name="partnership_type"
                class="form-input"
                class:error={form?.fieldErrors?.partnership_type}
                bind:value={partnership_type}
                required
              >
                <option value="" disabled>Select a partnership type</option>
                <option value="corporate_sponsorship">Corporate Sponsorship</option>
                <option value="community_collaboration">Community Collaboration</option>
                <option value="skills_mentorship">Skills & Mentorship</option>
                <option value="in_kind">In-Kind Donation</option>
                <option value="other">Other</option>
              </select>
              {#if form?.fieldErrors?.partnership_type}
                <span class="form-error">{form.fieldErrors.partnership_type}</span>
              {/if}
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                class="form-textarea"
                class:error={form?.fieldErrors?.message}
                bind:value={message}
                placeholder="Tell us about your organization, how you'd like to partner, and any ideas you have in mind..."
                rows="6"
                required
              ></textarea>
              {#if form?.fieldErrors?.message}
                <span class="form-error">{form.fieldErrors.message}</span>
              {/if}
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-primary" disabled={submitting}>
              {submitting ? 'Sending…' : 'Submit Inquiry'}
            </button>
          </div>
        </form>
      {/if}
    </div>
  </section>

  <!-- ─── CTA SECTION ─── -->
  <section class="cta-section">
    <div class="cta-inner">
      <div class="cta-note">
        <div>
          <div class="section-pill dark">GET INVOLVED</div>
          <h2>READY TO<br /><span>MAKE AN IMPACT?</span></h2>
          <p>
            Whether you're an organization looking to sponsor, a community group seeking collaboration,
            or a professional offering mentorship — we'd love to hear from you.
          </p>
        </div>
      </div>
       <a href="mailto:info@rotaractlilongwe.org?subject=Partnership%20Inquiry" class="btn-white">Email Us Directly</a>
       <a href="#contact" class="btn-white" style="margin-left: 12px;">Start the conversation</a>
     </div>
   </section>
 </main>

<!-- ─── FOOTER ─── -->
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="logo-wrap">
        <div class="image-logo"><img src={logo} alt="Rotaract Club of Lilongwe logo" /></div>
        <div>
          <div class="logo-tagline">UNITE FOR GOOD</div>
          <div class="logo-name">Rotaract Club of Lilongwe</div>
        </div>
      </div>
      <p class="footer-about">
        Chartered in 2015 and committed to building goodwill, friendship, and service in Lilongwe.
      </p>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">&copy; 2025 Rotaract Club of Lilongwe. All rights reserved.</span>
      <span class="footer-tagline">UNITE FOR GOOD</span>
    </div>
  </div>
</footer>

<style>
  /* ─── Hero ─── */
  .partnerships-hero {
    position: relative;
    min-height: 60vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 120px 5vw 72px;
    background-image: linear-gradient(90deg, rgba(26, 26, 26, .94) 0%, rgba(26, 26, 26, .72) 52%, rgba(26, 26, 26, .35) 100%), linear-gradient(180deg, rgba(232, 23, 93, .15) 0%, transparent 100%), url("https://kwwvmkszattobpgisslt.supabase.co/storage/v1/object/public/RAC/BACKGROUND/bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .hero-shade {
    display: none;
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    width: min(1200px, 100%);
    margin: 0 auto;
  }

  .hero-copy {
    max-width: 760px;
  }

  .section-pill {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    background: rgba(232, 23, 93, .1);
    color: var(--primary);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.5px;
    padding: 5px 14px;
    border-radius: 100px;
    margin-bottom: 22px;
    text-transform: uppercase;
  }

  .section-pill.dark {
    background: rgba(232, 23, 93, .18);
    border: 1px solid rgba(232, 23, 93, .42);
  }

  h1,
  h2 {
    font-family: 'Anton', sans-serif;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  h1 {
    color: white;
    font-size: clamp(52px, 8vw, 104px);
    line-height: .9;
    margin-bottom: 28px;
  }

  h1 span,
  h2 span {
    color: var(--primary);
  }

  .hero-copy p {
    max-width: 650px;
    color: rgba(255, 255, 255, .76);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 16px;
    line-height: 1.75;
  }

  /* ─── Info Section ─── */
  .info-section {
    background: var(--cream);
    padding: 96px 5vw;
  }

  .info-inner {
    width: min(1200px, 100%);
    margin: 0 auto;
  }

  .info-header {
    text-align: center;
    margin-bottom: 52px;
  }

  .info-header .section-pill {
    margin: 0 auto 22px;
  }

  h2 {
    color: var(--near-black);
    font-size: clamp(40px, 6vw, 72px);
    line-height: .95;
    margin-bottom: 28px;
  }

  .info-header h2 {
    margin-bottom: 0;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .info-card {
    background: white;
    border: 1px solid rgba(0, 0, 0, .06);
    border-radius: 4px;
    padding: 32px;
    min-height: 220px;
    transition: transform .2s ease, box-shadow .2s ease;
  }

  .info-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }

  .info-card__icon {
    color: var(--primary);
    margin-bottom: 24px;
  }

  .info-card__num {
    display: block;
    color: rgba(232, 23, 93, .5);
    font-family: 'Anton', sans-serif;
    font-size: 13px;
    letter-spacing: 2px;
    margin-bottom: 12px;
  }

  .info-card h3 {
    font-family: 'Anton', sans-serif;
    color: var(--near-black);
    font-size: 22px;
    line-height: 1.1;
    margin-bottom: 10px;
  }

  .info-card p {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: rgba(26, 26, 26, .64);
    font-size: 13px;
    line-height: 1.65;
  }

  /* ─── Form Section ─── */
  .form-section {
    background: var(--near-black);
    padding: 60px 5vw;
  }

  .form-inner {
    width: min(760px, 100%);
    margin: 0 auto;
  }

  .form-header {
    margin-bottom: 48px;
  }

  .form-header h2,
  .form-header p {
    color: white;
  }

  .form-header p {
    color: rgba(255, 255, 255, .6);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 15px;
    line-height: 1.8;
    margin-top: 12px;
  }

  .form {
    background: rgba(255, 255, 255, .05);
    border: 1px solid rgba(255, 255, 255, .09);
    border-radius: 4px;
    padding: 28px;
  }

  .form-row {
    margin-bottom: var(--space-5);
  }

  .form-row--2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-5);
  }

  .form-label {
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, .5);
  }

  .form-input,
  .form-textarea {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    background: rgba(255, 255, 255, .06);
    border: 1px solid rgba(255, 255, 255, .12);
    border-radius: 4px;
    color: white;
    font-size: 0.9375rem;
    transition: border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease);
    outline: none;
  }

  .form-input::placeholder,
  .form-textarea::placeholder {
    color: rgba(255, 255, 255, .3);
  }

  .form-input:focus,
  .form-textarea:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(232, 23, 93, 0.15);
  }

  .form-input.error,
  .form-textarea.error {
    border-color: var(--error);
  }

  .form-textarea {
    min-height: 120px;
    resize: vertical;
  }

  .form-error {
    font-size: 0.8125rem;
    color: #f5a5a5;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: var(--space-8);
    padding-top: var(--space-6);
    border-top: 1px solid rgba(255, 255, 255, .1);
  }

  .form-actions button {
    min-width: 180px;
  }

  .form-alert {
    margin-bottom: var(--space-5);
  }

  /* ─── Success ─── */
  .success-card {
    background: rgba(255, 255, 255, .05);
    border: 1px solid rgba(255, 255, 255, .09);
    border-radius: 4px;
    padding: var(--space-10);
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .success-card__icon {
    width: 64px;
    height: 64px;
    background: var(--success);
    color: var(--white);
    font-size: 1.8rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin: 0 auto var(--space-6);
  }

  .success-card h2 {
    color: white;
    margin-bottom: var(--space-4);
  }

  .success-card p {
    max-width: 520px;
    margin: 0 auto;
    color: rgba(255, 255, 255, .72);
    font-family: 'Plus Jakarta Sans', sans-serif;
    line-height: 1.8;
    font-size: 15px;
  }

  .success-card p + p {
    margin-top: var(--space-3);
  }

  .success-card :global(.btn-primary) {
    display: inline-flex;
    margin-top: var(--space-6);
  }

  /* ─── CTA Section ─── */
  .cta-section {
    background: var(--primary);
    padding: 76px 5vw;
    color: white;
  }

  .cta-inner {
    width: min(1200px, 100%);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
  }

  .cta-note {
    max-width: 760px;
  }

  .cta-note .section-pill {
    background: rgba(255, 255, 255, .15);
    border: 1px solid rgba(255, 255, 255, .3);
    color: white;
  }

  .cta-note h2,
  .cta-note p {
    color: white;
  }

  .cta-note p {
    color: rgba(255, 255, 255, .78);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 0;
  }

  .btn-primary,
  .btn-white {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 48px;
    padding: 13px 28px;
    border-radius: 100px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
    transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
  }

  .btn-primary {
    background: var(--primary);
    color: white;
    box-shadow: 0 8px 32px rgba(232, 23, 93, .35);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
  }

  .btn-primary:disabled {
    opacity: .55;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .btn-white {
    background: white;
    color: var(--primary);
    box-shadow: 0 8px 32px rgba(0, 0, 0, .16);
  }

  .btn-white:hover {
    transform: translateY(-2px);
  }

  /* ─── Footer ─── */
  footer {
    background: var(--near-black);
    padding: 60px 5vw 34px;
  }

  .footer-inner {
    width: min(1200px, 100%);
    margin: 0 auto;
  }

  .footer-brand {
    max-width: 420px;
    margin-bottom: 44px;
  }

  .logo-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
  }

  .image-logo {
    display: inline-flex;
    width: 30px;
  }

  .image-logo img {
    width: 100%;
  }

  .logo-tagline {
    font-family: 'Anton', sans-serif;
    font-size: 13px;
    color: var(--primary);
    letter-spacing: 2px;
    line-height: 1;
  }

  .logo-name {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 11px;
    color: rgba(255, 255, 255, .72);
    font-weight: 600;
    letter-spacing: .5px;
  }

  .footer-about {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: rgba(255, 255, 255, .5);
    font-size: 14px;
    line-height: 1.7;
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, .08);
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    gap: 18px;
    flex-wrap: wrap;
  }

  .footer-copy {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: rgba(255, 255, 255, .34);
    font-size: 12px;
  }

  .footer-tagline {
    font-family: 'Anton', sans-serif;
    color: var(--primary);
    letter-spacing: 2px;
    font-size: 14px;
  }

  @media (max-width: 1120px) {
    .info-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .partnerships-hero {
      min-height: auto;
      padding: 108px 5vw 64px;
    }

    .info-grid {
      grid-template-columns: 1fr;
    }

    .form-row--2 {
      grid-template-columns: 1fr;
    }

    .form {
      padding: 24px;
    }

    .cta-inner {
      flex-direction: column;
      align-items: stretch;
    }

    .btn-white,
    .btn-primary {
      width: 100%;
    }

    .info-section,
    .form-section {
      padding: 48px 5vw;
    }

    .form-actions button {
      width: 100%;
    }
  }
</style>