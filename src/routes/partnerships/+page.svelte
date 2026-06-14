<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

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

<div class="page">
  <div class="page__hero">
    <div class="container">
      <h1>Partner With Us</h1>
      <p>Join forces with the Rotaract Club of Lilongwe to create lasting impact in our communities.</p>
    </div>
  </div>

  <div class="container container--narrow page__body">

    {#if form?.success}
      <!-- ─── SUCCESS STATE ─── -->
      <div class="success-card">
        <div class="success-card__icon">✓</div>
        <h2>Inquiry Submitted!</h2>
        <p>
          Thank you, <strong>{form.contact_name}</strong>! Your partnership inquiry for <strong>{form.organization_name}</strong> has been received.
        </p>
        <p class="success-card__copy">
          Our partnerships team will review your request and reach out to you at <strong>{form.email}</strong> within 3–5 business days.
        </p>
        <a href="/" class="btn btn--primary success-card__button">Back to Home</a>
      </div>

    {:else}
      <!-- ─── INFO SECTION ─── -->
      <div class="info-cards">
        <div class="info-card">
          <div class="info-card__icon">🤝</div>
          <h3>Corporate Sponsorship</h3>
          <p>Support our projects and events while aligning your brand with youth-led community development.</p>
        </div>
        <div class="info-card">
          <div class="info-card__icon">🌍</div>
          <h3>Community Collaboration</h3>
          <p>Work alongside us on initiatives that address health, education, environment, and economic development.</p>
        </div>
        <div class="info-card">
          <div class="info-card__icon">🎓</div>
          <h3>Skills & Mentorship</h3>
          <p>Share your expertise through workshops, training sessions, and mentorship programs for our members.</p>
        </div>
      </div>

      <div class="form-wrap">
        <h2 class="form-title">Get in Touch</h2>
        <p class="form-subtitle">Fill out the form below and we'll get back to you.</p>

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
            <button type="submit" class="btn btn--primary btn--lg" disabled={submitting}>
              {submitting ? 'Sending…' : 'Submit Inquiry'}
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

  /* ─── Info Cards ─── */
  .info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: var(--space-6);
    margin-bottom: var(--space-12);
  }
  .info-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-8);
    text-align: center;
    transition: transform var(--duration) var(--ease), box-shadow var(--duration) var(--ease);
  }
  .info-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
  .info-card__icon {
    font-size: 2.5rem;
    margin-bottom: var(--space-4);
  }
  .info-card h3 {
    font-family: var(--font-display);
    font-size: 1.2rem;
    color: var(--near-black);
    margin-bottom: var(--space-3);
  }
  .info-card p {
    font-size: 0.9375rem;
    color: var(--text-muted);
    line-height: 1.7;
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
    .info-cards {
      grid-template-columns: 1fr;
    }
  }
</style>