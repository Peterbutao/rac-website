<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { enhance } from '$app/forms';
  import { invalidateAll } from '$app/navigation';
  import { page } from '$app/stores';
  import { user, member, loading } from '$lib/stores/auth';
  import { createClient } from '$lib/supabase';
  import { generateSEO, generateStructuredData } from '$lib/seo';
  import { FileText, Users, User, BookOpen, Handshake, Heart, UserPlus, LogIn, Info, Layers } from 'lucide-svelte';

  export let data;

  const supabase = createClient();
  
  $: seo = generateSEO();
  $: structuredData = generateStructuredData({ ...seo, url: $page.url.href });

  $: {
    $user = data.user ?? data.session?.user ?? null;
    $member = data.member ?? null;
    $loading = false;
  }

  onMount(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      $user = session?.user ?? null;
      if (!session) {
        $member = null;
        $loading = false;
        return;
      }
      if (!$member) {
        const { data: m } = await supabase
          .from('members')
          .select('*')
          .eq('user_id', session.user.id)
          .single();
        $member = m ?? null;
      }
      $loading = false;
    });

    return () => subscription.unsubscribe();
  });

  onMount(() => {
    try { document.body.classList.add('site-theme'); } catch (e) { /* noop */ }
  });

  let menuOpen = false;
  let scrolled = false;
  let committeePromptOpen = true;
  let committeePromptSaving = false;
  let committeePromptError = '';
  let selectedCommitteeIds: string[] = [];
  let selectedCommitteeMemberId: number | null = null;

  $: isPortal = $page.url.pathname.startsWith('/portal') || $page.url.pathname.startsWith('/admin');
  $: isAdmin  = $member?.is_admin ?? false;
  $: if (data.member?.id !== selectedCommitteeMemberId) {
    selectedCommitteeMemberId = data.member?.id ?? null;
    selectedCommitteeIds = (data.memberCommitteeIds ?? []).map((id: number) => String(id));
    committeePromptOpen = true;
    committeePromptError = '';
  }
  $: shouldShowCommitteePrompt =
    committeePromptOpen &&
    isPortal &&
    Boolean($member) &&
    (data.committees?.length ?? 0) > 0 &&
    !$member?.committee_onboarding_completed &&
    !$member?.committee_onboarding_skipped_at &&
    (data.memberCommitteeIds?.length ?? 0) < 3;

  onMount(() => {
    const handler = () => { scrolled = window.scrollY > 60; };
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  });

</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <meta name="keywords" content={seo.keywords?.join(', ')} />
  <meta name="robots" content={seo.robots} />
  <meta name="author" content="Rotaract Club of Lilongwe" />
  <meta name="theme-color" content="#E8175D" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={seo.type} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta property="og:image" content={seo.image} />
  <meta property="og:site_name" content={seo.siteName} />
  <meta property="og:locale" content={seo.locale} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={$page.url.href} />
  <meta name="twitter:title" content={seo.title} />
  <meta name="twitter:description" content={seo.description} />
  <meta name="twitter:image" content={seo.image} />
  {#if seo.twitterHandle}
    <meta name="twitter:site" content={seo.twitterHandle} />
  {/if}
  
  <!-- Canonical URL -->
  <link rel="canonical" href={$page.url.href} />
  
  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</svelte:head>

{#if !isPortal}
<header class="site-header" class:scrolled={scrolled}>
  <div class=" site-header__inner">
    <a href="/" class="site-logo">
      <span class="site-logo__wheel" aria-hidden="true">
        <img src="/logo.png" alt="logo">
      </span>
      <div>
        <span class="site-logo__name">Rotaract</span>
        <span class="site-logo__sub">Club of Lilongwe</span>
      </div>
    </a>

    <nav class="site-nav" class:navscrolled={scrolled}>
      <a href="/about"    class="mob site-nav__link nav-icon-link" on:click={() => menuOpen = false}>
        <Info size={15} stroke-width={2.4} />
        <span>About</span>
      </a>
      <a href="/projects" class="mob site-nav__link nav-icon-link" on:click={() => menuOpen = false}>
        <Layers size={15} stroke-width={2.4} />
        <span>Projects</span>
      </a>
      <a href="/partnerships" class="mob site-nav__link nav-icon-link" on:click={() => menuOpen = false}>
        <Handshake size={15} stroke-width={2.4} />
        <span>Partnerships</span>
      </a>
      <a href="/donate" class="mob site-nav__link nav-icon-link" on:click={() => menuOpen = false}>
        <Heart size={15} stroke-width={2.4} />
        <span>Donate</span>
      </a>
      <a href="/join"      class="mob site-nav__link nav-icon-link" on:click={() => menuOpen = false}>
        <UserPlus size={15} stroke-width={2.4} />
        <span>Join Us</span>
      </a>
      {#if $user}
        <a href="/portal"  class="site-nav__link site-nav__link--cta" on:click={() => menuOpen = false}>My Portal</a>
      {:else}
        <a href="/login"   class="site-nav__link site-nav__link--cta nav-icon-link" on:click={() => menuOpen = false}>
          <LogIn size={15} stroke-width={2.4} />
          <span>Login</span>
        </a>
      {/if}
    </nav>

  </div>
</header>
{:else}
<header class="portal-header nav_padding">
  <div class="container portal-header__inner">
    <a href="/" class="site-logo site-logo--light">
      <span class="site-logo__wheel" aria-hidden="true">
        <img src="/logo.png" alt="logo">
      </span>
      <div>
        <span class="site-logo__name">Rotaract</span>
        <span class="site-logo__sub">{isAdmin ? 'Admin Panel' : 'Member Portal'}</span>
      </div>
    </a>

    <nav class="portal-nav">
      {#if isAdmin}
        <a href="/admin/applications" class="portal-nav__link" class:active={$page.url.pathname.includes('applications')}>Applications</a>
        <a href="/admin/members"      class="portal-nav__link" class:active={$page.url.pathname.includes('/admin/members')}>Members</a>
      {/if}
      {#if isAdmin}
      <a href="/portal/profile" class="portal-nav__link" class:active={$page.url.pathname === '/portal/profile'}>Profile</a>
        <a href="/portal/members" class="portal-nav__link" class:active={$page.url.pathname === '/portal/members'}>Directory</a>
      {/if}
    </nav>

    <div class="portal-header__user">
      {#if $member}
        <span class="rac-number">{$member.rac_number}</span>
        <span class="portal-header__name">{$member.full_name.split(' ')[0]}</span>
      {:else if $user}
        <span class="portal-header__name" style="color:rgba(255,255,255,.68);font-size:0.875rem">{$user.email}</span>
      {/if}
      <form method="POST" action="/logout">
        <button class="sign_out btn btn--ghost btn--sm" type="submit">Sign out</button>
      </form>
    </div>
  </div>
</header>
{/if}

<main class:portal-main={isPortal} class:has-mobile-nav={isPortal && isAdmin}>
  <slot />
</main>

{#if isPortal && isAdmin}
<nav class="mobile-bottom-nav">
  <a href="/admin/applications" class="mobile-nav-item" class:active={$page.url.pathname.includes('applications')}>
    <FileText size={22} />
    <span>Applications</span>
  </a>
  <a href="/admin/members" class="mobile-nav-item" class:active={$page.url.pathname.includes('/admin/members')}>
    <Users size={22} />
    <span>Members</span>
  </a>
  <a href="/portal/profile" class="mobile-nav-item" class:active={$page.url.pathname === '/portal/profile'}>
    <User size={22} />
    <span>Profile</span>
  </a>
  <a href="/portal/members" class="mobile-nav-item" class:active={$page.url.pathname === '/portal/members'}>
    <BookOpen size={22} />
    <span>Directory</span>
  </a>
</nav>
{/if}

{#if shouldShowCommitteePrompt}
  <div class="committee-prompt-backdrop" role="presentation">
    <div class="committee-prompt" role="dialog" aria-modal="true" tabindex="-1">
      <div class="committee-prompt__header">
        <div>
          <h3>Select Your Committees</h3>
          <p>Choose at least 3 committees where you would like to contribute.</p>
        </div>
      </div>

      {#if committeePromptError}
        <div class="alert alert--error">{committeePromptError}</div>
      {/if}

      <form
        method="POST"
        action="/portal/profile?/updateCommittees"
        use:enhance={() => {
          committeePromptSaving = true;
          committeePromptError = '';
          return async ({ result, update }) => {
            committeePromptSaving = false;
            await update();

            if (result.type === 'failure') {
              committeePromptError = (result.data as any)?.error ?? 'Could not save committees.';
              return;
            }

            committeePromptOpen = false;
            await invalidateAll();
          };
        }}
      >
        <div class="committee-options">
          {#each data.committees ?? [] as committee}
            <label class="committee-option">
              <input
                type="checkbox"
                name="committee_ids"
                value={String(committee.id)}
                bind:group={selectedCommitteeIds}
              />
              <span>
                <strong>{committee.name}</strong>
                {#if committee.description}
                  <small>{committee.description}</small>
                {/if}
              </span>
            </label>
          {/each}
        </div>

        <div class="committee-prompt__footer">
          <span>{selectedCommitteeIds.length} selected</span>
          <div class="committee-prompt__actions">
            <button
              type="submit"
              name="intent"
              value="skip"
              class="btn btn--ghost"
              disabled={committeePromptSaving}
              formnovalidate
            >
              Later
            </button>
            <button
              type="submit"
              name="intent"
              value="save"
              class="btn btn--primary"
              disabled={committeePromptSaving || selectedCommitteeIds.length < 3}
            >
              {committeePromptSaving ? 'Saving...' : 'Save Committees'}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
{/if}


<style>
.nav_padding{
  padding: 0 10px;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}
.sign_out{
  color: var(--primary);
  background: rgba(275, 275, 275, 0.9);
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  z-index: 100;
  background: rgba(255,255,255,0);
  border-bottom: none;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  transition: background 200ms var(--ease), backdrop-filter 200ms var(--ease), border-color 200ms var(--ease);
}

.site-header.scrolled {
  background: rgba(217, 217, 217, 0.9);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

main { padding-top: 0; }
.portal-main { padding-top: 0; }
main.has-mobile-nav { padding-bottom: 70px; }
.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 5vw;
}

.nav-icon-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: var(--space-2) var(--space-3);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--white);
  border-radius: var(--radius-sm);
  transition: color var(--duration) var(--ease), background var(--duration) var(--ease);
  text-decoration: none;
  letter-spacing: 0.3px;
}

.navscrolled .nav-icon-link {
  color: var(--near-black) !important;
}

.nav-icon-link:hover {
  color: var(--primary) !important;
  background: var(--cream-mid);
}

.site-logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  flex-shrink: 0;
}
.site-logo__wheel {
  font-size: 1.6rem;
  color: var(--gold);
  line-height: 1;
  animation: spin 12s linear infinite;
  width: 30px;
}
.site-logo__wheel img {
  width: 100%;
}
@keyframes spin { to { transform: rotate(360deg); } }
.site-logo--light .site-logo__wheel { color: var(--gold-light); }
.site-logo__name {
  display: block;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
}
.site-logo--light .site-logo__name { color: var(--white); }
.site-logo__sub {
  display: block;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-light);
  line-height: 1;
  margin-top: 2px;
}
.site-logo--light .site-logo__sub { color: rgba(255,255,255,0.5); }

.site-nav {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-left: auto;
}
.site-nav__link {
  padding: var(--space-2) var(--space-3);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--white);
  border-radius: var(--radius-sm);
  transition: color var(--duration) var(--ease), background var(--duration) var(--ease);
  text-decoration: none;
}

.navscrolled .site-nav__link {
  color: var(--near-black) !important;
}


.site-nav__link:hover { color: var(--primary); background: var(--cream-mid); }
.site-nav__link--cta {
  background: var(--primary);
  color: var(--white) !important;
  padding: var(--space-2) var(--space-5);
  margin-left: var(--space-2);
}
.site-nav__link--cta:hover { background: var(--dark-magenta); background-color: var(--dark-magenta); }

.portal-header {
  background: rgba(26, 26, 26, .96);
  border-bottom: 1px solid rgba(232, 23, 93, .22);
  box-shadow: 0 10px 30px rgba(26, 26, 26, .14);
  position: sticky;
  top: 0;
  z-index: 100;
}
.portal-header__inner {
  display: flex;
  align-items: center;
  height: 64px;
  gap: var(--space-8);
}
.portal-nav {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  flex: 1;
}
.portal-nav__link {
  padding: var(--space-2) var(--space-4);
  font-size: 0.875rem;
  color: rgba(255,255,255,0.68);
  border-radius: var(--radius-sm);
  transition: all var(--duration) var(--ease);
  text-decoration: none;
  font-weight: 700;
}
.portal-nav__link:hover, .portal-nav__link.active {
  color: var(--white);
  background: rgba(232, 23, 93, .18);
}
.portal-nav__link.active { color: var(--gold-light); }
.portal-header__user {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-left: auto;
}
.portal-header__name {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.7);
}

.portal-main {
  background:
    linear-gradient(180deg, rgba(251, 245, 243, 1) 0%, rgba(245, 240, 235, 1) 100%);
  min-height: calc(100vh - 64px);
}

/* Mobile Bottom Navigation - Twitter Style */
.mobile-bottom-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(26, 26, 26, 0.98);
  border-top: 1px solid rgba(232, 23, 93, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 200;
  padding: 8px 0;
  padding-bottom: max(8px, env(safe-area-inset-bottom));
}

.mobile-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 8px 4px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;
  border-radius: 8px;
  gap: 4px;
}

.mobile-nav-item:hover {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(232, 23, 93, 0.1);
}

.mobile-nav-item.active {
  color: #E8175D;
}

.mobile-nav-item span {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.committee-prompt-backdrop {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: grid;
  place-items: center;
  padding: var(--space-6);
  background: rgba(26, 26, 26, 0.62);
}

.committee-prompt {
  width: min(760px, 100%);
  max-height: min(760px, calc(100vh - 48px));
  overflow: auto;
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--space-8);
}

.committee-prompt__header {
  margin-bottom: var(--space-6);
}

.committee-prompt__header p {
  margin-top: var(--space-2);
}

.committee-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-3);
  margin: var(--space-6) 0;
}

.committee-option {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-3);
  align-items: start;
  padding: var(--space-4);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--cream);
  cursor: pointer;
}

.committee-option:has(input:checked) {
  border-color: var(--gold);
  background: var(--gold-pale);
}

.committee-option input {
  margin-top: 4px;
}

.committee-option strong {
  display: block;
  color: var(--near-black);
  line-height: 1.35;
}

.committee-option small {
  display: block;
  margin-top: var(--space-1);
  color: var(--text-muted);
  line-height: 1.45;
}

.committee-prompt__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border);
}

.committee-prompt__footer > span {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.committee-prompt__actions {
  display: flex;
  gap: var(--space-3);
}

@media (max-width: 768px) {

  .mob{
    display: none;
  }
  .site-header__inner{
    padding: 0 20px;
  }

  .site-nav__link--cta { margin-left: 0; }
  .portal-header__user .rac-number,
  .portal-header__name { display: none; }
  .committee-prompt { padding: var(--space-6); }
  .committee-options { grid-template-columns: 1fr; }
  .committee-prompt__footer {
    align-items: stretch;
    flex-direction: column;
  }
  .committee-prompt__actions {
    flex-direction: column-reverse;
  }
  .committee-prompt__actions .btn {
    justify-content: center;
  }
  .portal-header__inner {
    align-items: flex-start;
    height: auto;
    padding: var(--space-4) 0;
  }
  .portal-nav {
    display: none;
  }
  .portal-nav__link {
    padding: var(--space-2) var(--space-3);
    font-size: 0.8125rem;
  }
  
  /* Show mobile bottom nav */
  .mobile-bottom-nav {
    display: flex;
  }
  .mobile-bottom-nav a span {
    font-size: 7px;
  }
}
</style>