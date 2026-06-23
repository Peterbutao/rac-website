<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';
  import logo from '$lib/assets/logo.png';
  import { BookOpen, Heart, Leaf, Users, ArrowRight } from 'lucide-svelte';

  export let form: ActionData & { error?: string };

  let submitting = false;

  // Form fields
  let full_name = form?.values?.full_name ?? '';
  let email     = form?.values?.email ?? '';
  let phone     = form?.values?.phone ?? '';
  let amount    = form?.values?.amount ?? '';
  let message   = form?.values?.message ?? '';

  // Quick amount buttons
  const quickAmounts = [5000, 10000, 25000, 50000, 100000];

  function setQuickAmount(val: number) {
    amount = String(val);
  }
</script>

<svelte:head>
  <title>Donate — Rotaract Club of Lilongwe</title>
  <meta name="description" content="Support the Rotaract Club of Lilongwe. Your donation helps fund community projects, youth leadership programs, and service initiatives across Malawi." />
</svelte:head>

<main>
  <!-- ─── HERO ─── -->
  <section class="donate-hero">
    <div class="hero-shade"></div>
    <div class="hero-inner">
      <div class="hero-copy">
        <div class="section-pill dark">DONATE</div>
        <h1>SUPPORT OUR<br /><span>MISSION</span></h1>
        <p>
          Your contribution empowers young leaders and transforms communities
          in Lilongwe and beyond. Every gift fuels service.
        </p>
      </div>
    </div>
  </section>

  <!-- ─── IMPACT SECTION ─── -->
  <section class="impact-section">
    <div class="impact-inner">
      <div class="impact-header">
        <div class="section-pill">YOUR IMPACT</div>
        <h2>WHERE YOUR<br /><span>GIFT GOES</span></h2>
      </div>

      <div class="impact-grid">
        <article class="impact-card">
          <BookOpen class="impact-icon" size={28} stroke-width={2.2} />
          <span class="impact-num">01</span>
          <h3>Basic Education</h3>
          <p>Funding school supplies and literacy programs for underserved communities.</p>
        </article>
        <article class="impact-card">
          <Heart class="impact-icon" size={28} stroke-width={2.2} />
          <span class="impact-num">02</span>
          <h3>Health & Wellness</h3>
          <p>Supporting health outreach camps, disease prevention, and maternal health.</p>
        </article>
        <article class="impact-card">
          <Leaf class="impact-icon" size={28} stroke-width={2.2} />
          <span class="impact-num">03</span>
          <h3>Environment</h3>
          <p>Planting trees, cleaning waterways, and promoting sustainable practices.</p>
        </article>
        <article class="impact-card">
          <Users class="impact-icon" size={28} stroke-width={2.2} />
          <span class="impact-num">04</span>
          <h3>Youth Leadership</h3>
          <p>Training the next generation of leaders through workshops and mentorship.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- ─── DONATION INFO ─── -->
  <section class="info-section">
    <div class="info-inner">
      <div class="info-header">
        <div class="section-pill dark">HOW TO DONATE</div>
        <h2>WAYS TO<br /><span>CONTRIBUTE</span></h2>
        <p>Choose the method that works best for you. All contributions go directly to community service projects.</p>
      </div>

      <div class="info-grid">
        <article class="donation-card">
          <h3>Bank Transfer</h3>
          <div class="donation-details">
            <div class="detail-row">
              <span>Account Name</span>
              <strong>Rotaract Club of Lilongwe</strong>
            </div>
            <div class="detail-row">
              <span>Bank</span>
              <strong>National Bank of Malawi</strong>
            </div>
            <div class="detail-row">
              <span>Account Number</span>
              <strong>[Available on request]</strong>
            </div>
          </div>
          <p class="donation-note">Contact us for direct deposit details.</p>
        </article>
        <article class="donation-card">
          <h3>Mobile Money</h3>
          <div class="donation-details">
            <div class="detail-row">
              <span>Airtel Money</span>
              <strong>+265 999 000 000</strong>
            </div>
            <div class="detail-row">
              <span>TNM Mpamba</span>
              <strong>+265 888 000 000</strong>
            </div>
          </div>
          <p class="donation-note">Please include your name as reference.</p>
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
          <div class="success-card__icon">💝</div>
          <h2>THANK<br /><span>YOU!</span></h2>
          <p>
            Thank you, <strong>{form.full_name}</strong>! Your interest in donating has been received.
          </p>
          <p class="success-card__copy">
            Our team will reach out to you at <strong>{form.email}</strong> shortly with details on how to complete your donation.
          </p>
          <a href="/" class="btn-primary">Back to Home</a>
        </div>
      {:else}
        <div class="form-header">
          <div class="section-pill dark">GET IN TOUCH</div>
          <h2>EXPRESS YOUR<br /><span>INTEREST</span></h2>
          <p>Let us know you'd like to donate and we'll guide you through the process.</p>
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
              <label class="form-label" for="full_name">Full Name *</label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                class="form-input"
                class:error={form?.fieldErrors?.full_name}
                bind:value={full_name}
                placeholder="e.g. Chisomo Banda"
                required
              />
              {#if form?.fieldErrors?.full_name}
                <span class="form-error">{form.fieldErrors.full_name}</span>
              {/if}
            </div>
            <div class="form-group">
              <label class="form-label" for="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                class="form-input"
                class:error={form?.fieldErrors?.email}
                bind:value={email}
                placeholder="chisomo@example.com"
                required
              />
              {#if form?.fieldErrors?.email}
                <span class="form-error">{form.fieldErrors.email}</span>
              {/if}
            </div>
          </div>

          <div class="form-row">
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
              <label class="form-label">Donation Amount (MWK) *</label>
              <div class="quick-amounts">
                {#each quickAmounts as qa}
                  <button
                    type="button"
                    class="quick-amount-btn"
                    class:active={amount === String(qa)}
                    on:click={() => setQuickAmount(qa)}
                  >
                    MWK {qa.toLocaleString()}
                  </button>
                {/each}
              </div>
              <div class="amount-input-wrapper">
                <span class="amount-currency">MWK</span>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  class="form-input amount-input"
                  class:error={form?.fieldErrors?.amount}
                  bind:value={amount}
                  placeholder="Enter custom amount"
                  min="1"
                  step="100"
                  required
                />
              </div>
              {#if form?.fieldErrors?.amount}
                <span class="form-error">{form.fieldErrors.amount}</span>
              {/if}
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="message">Message <span class="optional-label">(optional)</span></label>
              <textarea
                id="message"
                name="message"
                class="form-textarea"
                bind:value={message}
                placeholder="Any specific project you'd like to support? Leave a note..."
                rows="3"
              ></textarea>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-primary" disabled={submitting}>
              {submitting ? 'Sending…' : 'Submit Interest'}
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
          <h2>MAKE A<br /><span style="color: var(--orange); font-family:var( --font-cursive);">DIFFERENCE TODAY</span></h2>
          <p>
            Every contribution — big or small — helps us build a stronger, healthier,
            and more educated community in Lilongwe.
          </p>
        </div>
      </div>
       <a href="#contact" class="btn-white">Express your interest</a>
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
  .donate-hero {
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

  /* ─── Impact Section ─── */
  .impact-section {
    background: var(--cream);
    padding: 96px 5vw;
  }

  .impact-inner {
    width: min(1200px, 100%);
    margin: 0 auto;
  }

  .impact-header {
    text-align: center;
    margin-bottom: 52px;
  }

  .impact-header .section-pill {
    margin: 0 auto 22px;
  }

  h2 {
    color: var(--near-black);
    font-size: clamp(40px, 6vw, 72px);
    line-height: .95;
    margin-bottom: 28px;
  }

  .impact-header h2 {
    margin-bottom: 0;
  }

  .impact-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  .impact-card {
    background: white;
    border: 1px solid rgba(0, 0, 0, .06);
    border-radius: 4px;
    padding: 28px;
    min-height: 220px;
    transition: transform .2s ease, box-shadow .2s ease;
  }

  .impact-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
  .impact-num {
    display: block;
    color: rgba(232, 23, 93, .5);
    font-family: 'Anton', sans-serif;
    font-size: 13px;
    letter-spacing: 2px;
    margin-bottom: 12px;
  }

  .impact-card h3 {
    font-family: 'Anton', sans-serif;
    color: var(--near-black);
    font-size: 22px;
    line-height: 1.1;
    margin-bottom: 10px;
  }

  .impact-card p {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: rgba(26, 26, 26, .64);
    font-size: 13px;
    line-height: 1.65;
  }

  /* ─── Info Section (Donation Methods) ─── */
  .info-section {
    background: var(--near-black);
    padding: 96px 5vw;
  }

  .info-inner {
    width: min(1200px, 100%);
    margin: 0 auto;
  }

  .info-header {
    margin-bottom: 48px;
  }

  .info-header h2,
  .info-header p {
    color: white;
  }

  .info-header p {
    color: rgba(255, 255, 255, .6);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 15px;
    line-height: 1.8;
    margin-top: 12px;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  .donation-card {
    background: rgba(255, 255, 255, .05);
    border: 1px solid rgba(255, 255, 255, .09);
    border-radius: 4px;
    padding: 32px;
  }

  .donation-card h3 {
    font-family: 'Anton', sans-serif;
    color: white;
    font-size: 22px;
    margin-bottom: 24px;
    line-height: 1.1;
  }

  .donation-details {
    display: grid;
    gap: 12px;
  }

  .detail-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255, 255, 255, .08);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .detail-row:last-child {
    border-bottom: 0;
  }

  .detail-row span {
    color: rgba(255, 255, 255, .5);
    font-size: 13px;
  }

  .detail-row strong {
    color: white;
    font-size: 13px;
    text-align: right;
  }

  .donation-note {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: rgba(255, 255, 255, .4);
    font-size: 12px;
    font-style: italic;
    margin-top: 20px;
  }

  /* ─── Form Section ─── */
  .form-section {
    background: var(--cream);
    padding: 96px 5vw;
  }

  .form-inner {
    width: min(760px, 100%);
    margin: 0 auto;
  }

  .form-header {
    margin-bottom: 48px;
  }

  .form-header p {
    color: rgba(26, 26, 26, .6);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 15px;
    line-height: 1.8;
    margin-top: 12px;
  }

  .form {
    background: white;
    border: 1px solid rgba(0, 0, 0, .06);
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
    color: var(--text-muted);
  }

  .optional-label {
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0;
  }

  .form-input,
  .form-textarea {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    background: var(--white);
    border: 1px solid var(--border-dark);
    border-radius: 4px;
    color: var(--text);
    font-size: 0.9375rem;
    transition: border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease);
    outline: none;
  }

  .form-input::placeholder,
  .form-textarea::placeholder {
    color: var(--text-light);
  }

  .form-input:focus,
  .form-textarea:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(232, 23, 93, 0.12);
  }

  .form-input.error,
  .form-textarea {
    min-height: 120px;
    resize: vertical;
  }

  .form-error {
    font-size: 0.8125rem;
    color: var(--error);
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: var(--space-8);
    padding-top: var(--space-6);
    border-top: 1px solid var(--border);
  }

  .form-actions button {
    min-width: 180px;
  }

  .form-alert {
    margin-bottom: var(--space-5);
  }

  /* Quick Amount Buttons */
  .quick-amounts {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-3);
  }

  .quick-amount-btn {
    background: var(--cream-mid);
    border: 1px solid var(--border-dark);
    border-radius: 100px;
    padding: var(--space-2) var(--space-4);
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--text-muted);
    cursor: pointer;
    transition: all var(--duration) var(--ease);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .quick-amount-btn:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: rgba(232, 23, 93, 0.06);
  }

  .quick-amount-btn.active {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--white);
  }

  .amount-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .amount-currency {
    position: absolute;
    left: var(--space-4);
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--text-muted);
    pointer-events: none;
  }

  .amount-input {
    padding-left: 52px !important;
  }

  /* ─── Success ─── */
  .success-card {
    background: white;
    border: 1px solid rgba(0, 0, 0, .06);
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
    color: var(--near-black);
    margin-bottom: var(--space-4);
  }

  .success-card p {
    max-width: 520px;
    margin: 0 auto;
    color: rgba(26, 26, 26, .72);
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
    .impact-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .donate-hero {
      min-height: auto;
      padding: 108px 5vw 64px;
    }

    .impact-grid {
      grid-template-columns: repeat(2, 1fr);
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

    .impact-section,
    .info-section,
    .form-section {
      padding: 48px 5vw;
    }

    .form-actions button {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .impact-grid {
      grid-template-columns: 1fr;
    }
  }
</style>