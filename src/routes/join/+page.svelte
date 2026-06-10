<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

  export let form: ActionData;

  let submitting = false;
  let step = 1;

  const totalSteps = 2;

  // Form fields
  let full_name = form?.values?.full_name ?? '';
  let email     = form?.values?.email ?? '';
  let phone     = form?.values?.phone ?? '';
  let age       = form?.values?.age ?? '';
  let occupation = form?.values?.occupation ?? '';
  let motivation = form?.values?.motivation ?? '';
  let skills    = form?.values?.skills ?? '';

  function nextStep() {
    if (step < totalSteps) step++;
  }
  function prevStep() {
    if (step > 1) step--;
  }
</script>

<svelte:head>
  <title>Apply to Join — Rotaract Club of Lilongwe</title>
  <meta name="description" content="Apply to become a member of the Rotaract Club of Lilongwe." />
</svelte:head>

<div class="join-page">
  <div class="join-page__hero">
    <div class="container">
      <h1>Join Our Club</h1>
      <p>We welcome applications from people who are ready to serve, lead, and grow together.</p>
    </div>
  </div>

  <div class="container container--narrow join-page__body">

    {#if form?.success}
      <!-- ─── SUCCESS STATE ─── -->
      <div class="success-card">
        <div class="success-card__icon">✓</div>
        <h2>Application Submitted!</h2>
        <p>
          Thank you, <strong>{form.full_name}</strong>! Your application has been received.
          Our membership committee will review it and contact you at <strong>{form.email}</strong> within two weeks.
        </p>
        <p class="success-card__copy">
          Keep an eye on your inbox. We look forward to welcoming you to the Rotaract Club of Lilongwe.
        </p>
        <a href="/" class="btn btn--primary success-card__button">Back to Home</a>
      </div>

    {:else}
      <!-- ─── FORM ─── -->
      <div class="join-form-wrap">
        <!-- Progress -->
        <div class="form-progress">
          {#each Array(totalSteps) as _, i}
            <div class="form-progress__step" class:active={step === i + 1} class:done={step > i + 1}>
              <span class="form-progress__num">{step > i + 1 ? '✓' : i + 1}</span>
              <span class="form-progress__label">{i === 0 ? 'Your Details' : 'Motivation'}</span>
            </div>
            {#if i < totalSteps - 1}
              <div class="form-progress__line" class:done={step > i + 1}></div>
            {/if}
          {/each}
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
          class="join-form"
          novalidate
        >
          <!-- ─── STEP 1 ─── -->
          {#if step === 1}
            <div class="form-section">
              <h3>Personal Information</h3>
              <p class="form-section__sub">Tell us a bit about yourself.</p>

              <div class="form-row">
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
                    placeholder="chisomo@example.com"
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

              <div class="form-row form-row--2">
                <div class="form-group">
                  <label class="form-label" for="age">Age *</label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    class="form-input"
                    class:error={form?.fieldErrors?.age}
                    bind:value={age}
                    placeholder="e.g. 24"
                    required
                  />
                  {#if form?.fieldErrors?.age}
                    <span class="form-error">{form.fieldErrors.age}</span>
                  {/if}
                </div>
                <div class="form-group">
                  <label class="form-label" for="occupation">Occupation *</label>
                  <input
                    id="occupation"
                    name="occupation"
                    type="text"
                    class="form-input"
                    class:error={form?.fieldErrors?.occupation}
                    bind:value={occupation}
                    placeholder="e.g. Software Engineer"
                    required
                  />
                  {#if form?.fieldErrors?.occupation}
                    <span class="form-error">{form.fieldErrors.occupation}</span>
                  {/if}
                </div>
              </div>

              <div class="form-actions">
                <span></span>
                <button type="button" class="btn btn--primary" on:click={nextStep}>
                  Continue →
                </button>
              </div>
            </div>

          <!-- ─── STEP 2 ─── -->
          {:else if step === 2}
            <!-- Hidden fields from step 1 -->
            <input type="hidden" name="full_name"   value={full_name} />
            <input type="hidden" name="email"       value={email} />
            <input type="hidden" name="phone"       value={phone} />
            <input type="hidden" name="age"         value={age} />
            <input type="hidden" name="occupation"  value={occupation} />

            <div class="form-section">
              <h3>Your Motivation</h3>
              <p class="form-section__sub">Help us understand why you want to join and what you bring to the club.</p>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="motivation">Why do you want to join? *</label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    class="form-textarea"
                    class:error={form?.fieldErrors?.motivation}
                    bind:value={motivation}
                    placeholder="Tell us about your passion for community service, what draws you to Rotaract, and what you hope to contribute and gain as a member..."
                    rows="6"
                    required
                  ></textarea>
                  {#if form?.fieldErrors?.motivation}
                    <span class="form-error">{form.fieldErrors.motivation}</span>
                  {/if}
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="skills">Skills &amp; Expertise <span style="font-weight:400;text-transform:none;letter-spacing:0">(optional)</span></label>
                  <textarea
                    id="skills"
                    name="skills"
                    class="form-textarea"
                    bind:value={skills}
                    placeholder="e.g. Web development, graphic design, public speaking, accounting, project management..."
                    rows="3"
                  ></textarea>
                  <span class="form-hint">Skills that could benefit the club's projects and activities.</span>
                </div>
              </div>

              <div class="form-actions">
                <button type="button" class="btn btn--ghost" on:click={prevStep}>← Back</button>
                <button type="submit" class="btn btn--gold btn--lg" disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Submit Application'}
                </button>
              </div>
            </div>
          {/if}
        </form>
      </div>
    {/if}
  </div>
</div>

<style>
.join-page__hero {
  background: linear-gradient(180deg, rgba(232,23,93,0.96), rgba(220,48,109,0.92));
  color: var(--white);
  padding: var(--space-16) 0 var(--space-12);
}
.join-page__hero .container {
  margin: 0 auto;
  max-width: 720px;
}
.join-page__hero h1 {
  margin-bottom: var(--space-4);
  margin-top: var(--space-4);
  line-height: 1.05;
}
.join-page__hero p {
  color: rgba(255,255,255,0.88);
  max-width: 620px;
  font-size: 1rem;
}



.join-page__body {
  margin: var(--space-10) auto 0;
  padding: var(--space-12) var(--space-6);
}

/* ─── Success ─── */
.success-card {
  background: var(--white);
  border: 1px solid var(--success-bg);
  border-radius: var(--radius-xl);
  padding: var(--space-10);
  text-align: center;
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

/* ─── Progress ─── */
.form-progress {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
}
.form-progress__step {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-shrink: 0;
}
.form-progress__num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--cream-mid);
  border: 2px solid var(--border-dark);
  display: grid;
  place-items: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-muted);
  transition: all var(--duration) var(--ease);
}
.form-progress__step.active .form-progress__num {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}
.form-progress__step.done .form-progress__num {
  background: var(--success);
  border-color: var(--success);
  color: var(--white);
}
.form-progress__label {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 600;
}
.form-progress__step.active .form-progress__label {
  color: var(--near-black);
}
.form-progress__line {
  flex: 1;
  height: 2px;
  background: var(--border-dark);
  margin: 0 var(--space-3);
  transition: background var(--duration);
}
.form-progress__line.done {
  background: var(--success);
}

/* ─── Form ─── */
.join-form-wrap {
  background: var(--white);
  border: 1px solid var(--border);
  /* border-radius: var(--radius-xl); */
  padding: var(--space-10);
  box-shadow: var(--shadow-md);
  max-width: 760px;
  margin: 0 auto;
}
.join-form-wrap .form-section {
  padding: 0;
}
.form-section h3 {
  margin-bottom: var(--space-3);
  font-size: 1.5rem;
  color: var(--near-black);
}
.form-section__sub {
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
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.form-input,
.form-textarea {
  border: 1px solid var(--border-dark);
  border-radius: var(--radius-md);
  background: var(--white);
  color: var(--text);
  box-shadow: inset 0 1px 2px rgba(15, 23, 36, 0.04);
}
.form-input:focus,
.form-textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(232, 23, 93, 0.08);
}
.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-light);
}
.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: 1px solid var(--border);
}
.form-actions button {
  min-width: 160px;
}
.form-actions span {
  min-width: 32px;
}
.form-alert {
  margin-bottom: var(--space-5);
}

@media (max-width: 800px) {
  .form-progress {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .form-row--2 {
    grid-template-columns: 1fr;
  }
  .join-form-wrap {
    padding: var(--space-6);
  }
}
</style>
