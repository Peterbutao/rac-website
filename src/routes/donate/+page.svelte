<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

  export let form: ActionData;

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

<div class="page">
  <div class="page__hero">
    <div class="container">
      <h1>Support Our Mission</h1>
      <p>Your contribution empowers young leaders and transforms communities in Lilongwe and beyond.</p>
    </div>
  </div>

  <div class="container container--narrow page__body">

    {#if form?.success}
      <!-- ─── SUCCESS STATE ─── -->
      <div class="success-card">
        <div class="success-card__icon">💝</div>
        <h2>Thank You!</h2>
        <p>
          Thank you, <strong>{form.full_name}</strong>! Your interest in donating has been received.
        </p>
        <p class="success-card__copy">
          Our team will reach out to you at <strong>{form.email}</strong> shortly with details on how to complete your donation.
        </p>
        <a href="/" class="btn btn--primary success-card__button">Back to Home</a>
      </div>

    {:else}
      <!-- ─── IMPACT INFO ─── -->
      <div class="impact-section">
        <h2>Your Donation Makes a Difference</h2>
        <div class="impact-grid">
          <div class="impact-item">
            <span class="impact-item__icon">📚</span>
            <h3>Basic Education</h3>
            <p>Funding school supplies and literacy programs for underserved communities.</p>
          </div>
          <div class="impact-item">
            <span class="impact-item__icon">🏥</span>
            <h3>Health & Wellness</h3>
            <p>Supporting health outreach camps, disease prevention, and maternal health.</p>
          </div>
          <div class="impact-item">
            <span class="impact-item__icon">🌱</span>
            <h3>Environment</h3>
            <p>Planting trees, cleaning waterways, and promoting sustainable practices.</p>
          </div>
          <div class="impact-item">
            <span class="impact-item__icon">🧑‍🤝‍🧑</span>
            <h3>Youth Leadership</h3>
            <p>Training the next generation of leaders through workshops and mentorship.</p>
          </div>
        </div>
      </div>

      <!-- ─── DONATION INFO ─── -->
      <div class="donation-info">
        <div class="donation-info__card">
          <h3>🏦 Bank Transfer</h3>
          <p><strong>Account Name:</strong> Rotaract Club of Lilongwe</p>
          <p><strong>Bank:</strong> National Bank of Malawi</p>
          <p><strong>Account Number:</strong> [Available on request]</p>
          <p class="donation-info__note">Contact us for direct deposit details.</p>
        </div>
        <div class="donation-info__card">
          <h3>📞 Mobile Money</h3>
          <p><strong>Airtel Money:</strong> +265 999 000 000</p>
          <p><strong>TNM Mpamba:</strong> +265 888 000 000</p>
          <p class="donation-info__note">Please include your name as reference.</p>
        </div>
      </div>

      <div class="form-wrap">
        <h2 class="form-title">Express Your Interest</h2>
        <p class="form-subtitle">Let us know you'd like to donate and we'll guide you through the process.</p>

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
              <label class="form-label" for="message">Message <span style="font-weight:400;text-transform:none;letter-spacing:0">(optional)</span></label>
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
            <button type="submit" class="btn btn--primary btn--lg" disabled={submitting}>
              {submitting ? 'Sending…' : 'Submit Interest'}
            </button>
          </div>
        </form>
      </div>
    {/if}
  </div>
</div>

<style>
  .page__hero {
    background: linear-gradient(180deg, rgba(232,23,93,0.96), rgba(220,48,109,0.92));
    color: var(--white);
    padding: var(--space-16) 0 var(--space-12);
  }
  .page__hero .container {
    margin: 0 auto;
    max-width: 720px;
  }
  .page__hero h1 {
    margin-bottom: var(--space-4);
    margin-top: var(--space-4);
    line-height: 1.05;
  }
  .page__hero p {
    color: rgba(255,255,255,0.88);
    max-width: 620px;
    font-size: 1rem;
  }

  .page__body {
    margin: var(--space-10) auto 0;
    padding: var(--space-12) var(--space-6);
  }

  /* ─── Impact Section ─── */
  .impact-section {
    margin-bottom: var(--space-10);
  }
  .impact-section h2 {
    font-family: var(--font-display);
    font-size: 1.75rem;
    color: var(--near-black);
    text-align: center;
    margin-bottom: var(--space-8);
  }
  .impact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--space-5);
  }
  .impact-item {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    text-align: center;
    transition: transform var(--duration) var(--ease), box-shadow var(--duration) var(--ease);
  }
  .impact-item:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
  .impact-item__icon {
    font-size: 2rem;
    display: block;
    margin-bottom: var(--space-3);
  }
  .impact-item h3 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    color: var(--near-black);
    margin-bottom: var(--space-2);
  }
  .impact-item p {
    font-size: 0.875rem;
    color: var(--text-muted);
    line-height: 1.6;
  }

  /* ─── Donation Info ─── */
  .donation-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--space-6);
    margin-bottom: var(--space-10);
  }
  .donation-info__card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
  }
  .donation-info__card h3 {
    font-family: var(--font-display);
    font-size: 1.15rem;
    color: var(--primary);
    margin-bottom: var(--space-4);
  }
  .donation-info__card p {
    font-size: 0.9375rem;
    color: var(--text);
    margin-bottom: var(--space-2);
    line-height: 1.6;
  }
  .donation-info__note {
    font-size: 0.8125rem !important;
    color: var(--text-light) !important;
    font-style: italic;
    margin-top: var(--space-2);
  }

  /* ─── Success ─── */
  .success-card {
    background: var(--white);
    border: 1px solid var(--success-bg);
    border-radius: var(--radius-xl);
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
    margin-bottom: var(--space-4);
  }
  .success-card p {
    max-width: 520px;
    margin: 0 auto;
    color: var(--text);
    line-height: 1.8;
  }
  .success-card p + p {
    margin-top: var(--space-3);
  }
  .success-card__button {
    display: inline-flex;
    margin-top: var(--space-6);
  }

  /* ─── Form ─── */
  .form-wrap {
    background: var(--white);
    border: 1px solid var(--border);
    padding: var(--space-10);
    box-shadow: var(--shadow-md);
    max-width: 760px;
    margin: 0 auto;
  }
  .form-title {
    font-family: var(--font-display);
    font-size: 1.75rem;
    color: var(--near-black);
    margin-bottom: var(--space-2);
  }
  .form-subtitle {
    color: var(--text-muted);
    margin-bottom: var(--space-8);
  }
  .form-row {
    margin-bottom: var(--space-5);
  }
  .form-row--2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-5);
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
    border-radius: var(--radius-full);
    padding: var(--space-2) var(--space-4);
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--text-muted);
    cursor: pointer;
    transition: all var(--duration) var(--ease);
  }
  .quick-amount-btn:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: rgba(232,23,93,0.06);
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

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-4);
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

  @media (max-width: 600px) {
    .form-row--2 {
      grid-template-columns: 1fr;
    }
    .form-wrap {
      padding: var(--space-6);
    }
    .impact-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>