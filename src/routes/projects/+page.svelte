<script>
  import { onMount } from 'svelte';
  import logo from "$lib/assets/logo.png";

  /** @type {import('./$types').PageData} */
  export let data;

  $: PROJECTS = data.PROJECTS ?? [];

  // --- Seven Areas of Focus (canonical values match About page) ---
  const FOCUS_AREAS = [
    { label: 'Peace & Conflict', value: 'Peace and Conflict Prevention/Resolution', icon: '/AOF_peace_color_no_title.png' },
    { label: 'Disease Prevention', value: 'Disease Prevention and Treatment', icon: '/AOF_disease_color_no_title.png' },
    { label: 'Water & Sanitation', value: 'Water and Sanitation', icon: '/AOF_water_color_no_title.png' },
    { label: 'Maternal & Child Health', value: 'Maternal and Child Health', icon: '/AOF_maternal_color_no_title.png' },
    { label: 'Basic Education', value: 'Basic Education and Literacy', icon: '/AOF_education_color_no_title.png' },
    { label: 'Community Development', value: 'Economic and Community Development', icon: '/AOF_economic_color_no_title.png' },
    { label: 'Environment', value: 'Environment', icon: '/AOF_environment_color_no_title.png' }
  ];

  // alias -> canonical (normalized keys)
  const ALIAS_MAP = new Map([
    // Peace
    ['peace and conflict prevention resolution', 'Peace and Conflict Prevention/Resolution'],
    ['peace and conflict prevention', 'Peace and Conflict Prevention/Resolution'],
    ['peace conflict prevention', 'Peace and Conflict Prevention/Resolution'],
    ['peace', 'Peace and Conflict Prevention/Resolution'],
    // Disease
    ['disease prevention and treatment', 'Disease Prevention and Treatment'],
    ['disease prevention', 'Disease Prevention and Treatment'],
    // Water
    ['water and sanitation', 'Water and Sanitation'],
    ['water sanitation and hygiene', 'Water and Sanitation'],
    ['water sanitation', 'Water and Sanitation'],
    ['wash', 'Water and Sanitation'],
    // Maternal
    ['maternal and child health', 'Maternal and Child Health'],
    ['maternal child health', 'Maternal and Child Health'],
    // Education
    ['basic education and literacy', 'Basic Education and Literacy'],
    ['basic education literacy', 'Basic Education and Literacy'],
    ['basic education', 'Basic Education and Literacy'],
    ['education and literacy', 'Basic Education and Literacy'],
    ['supporting education and leadership development', 'Basic Education and Literacy'],
    // Economic
    ['economic and community development', 'Economic and Community Development'],
    ['community economic development', 'Economic and Community Development'],
    ['community and economic development', 'Economic and Community Development'],
    ['economic development', 'Economic and Community Development'],
    // Environment
    ['environment', 'Environment']
  ]);

  function normalizeArea(raw) {
    if (!raw) return null;
    const n = String(raw)
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9 ]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (!n) return null;
    if (ALIAS_MAP.has(n)) return ALIAS_MAP.get(n);
    // direct canonical check case-insensitive
    for (const a of FOCUS_AREAS) {
      const canonNorm = a.value.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
      if (n === canonNorm) return a.value;
    }
    return null;
  }

  function normalizeName(raw) {
    return String(raw ?? '')
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Fallback mapping by project name (normalized name -> canonical)
  // Covers current sheet rows which have no areaOfFocus column.
  const PROJECT_AREA_BY_NAME = new Map([
    [normalizeName('Once Upon a Book - Book Donation Drive'), 'Basic Education and Literacy'],
    [normalizeName('"Once Upon a Book" — Book Donation Drive'), 'Basic Education and Literacy'],
    [normalizeName('"Once Upon a Book" - Book Donation Drive'), 'Basic Education and Literacy'],
    [normalizeName('Once Upon a Book — Book Donation Drive'), 'Basic Education and Literacy'],
    [normalizeName('End Polio Campaign'), 'Disease Prevention and Treatment'],
    [normalizeName('End Polio Awareness Walk/Run'), 'Disease Prevention and Treatment'],
    [normalizeName('Tree Planting Initiative'), 'Environment'],
    [normalizeName('Tree Planting Activities'), 'Environment'],
    [normalizeName('Climate Justice Workshop'), 'Environment'],
    [normalizeName('Hospital Equipment Donation'), 'Disease Prevention and Treatment'],
    [normalizeName('Youth Coffee & Connect - World Mental Health Day'), 'Disease Prevention and Treatment'],
    [normalizeName('Youth Coffee & Connect — World Mental Health Day'), 'Disease Prevention and Treatment'],
    [normalizeName('Financial Literacy Info Session'), 'Economic and Community Development'],
    [normalizeName('Job Hunting & CV Building Skills Info Session'), 'Economic and Community Development'],
    [normalizeName('WASH Project - Chadza Health Centre'), 'Water and Sanitation'],
    [normalizeName('WASH Project — Chadza Health Centre'), 'Water and Sanitation'],
    [normalizeName('Empowering Girls Through Reusable Pads & Menstrual Health Education'), 'Basic Education and Literacy'],
    [normalizeName('A Visit to Children of the Nations'), 'Basic Education and Literacy'],
    [normalizeName('Rotary Refresher Info Session'), 'Basic Education and Literacy'],
    [normalizeName('Game Day Fundraiser'), 'Economic and Community Development']
    // internal / fellowship projects intentionally left unmapped -> visible only under "All"
  ]);

  function getRawArea(project) {
    // look for any key that suggests area of focus (case-insensitive)
    for (const k of Object.keys(project)) {
      const lk = k.toLowerCase().replace(/[^a-z]/g, '');
      if (lk.includes('area') || lk.includes('focus') || lk === 'category' || lk === 'aof') {
        const v = project[k];
        if (v && String(v).trim()) return v;
      }
    }
    // also common explicit headers
    return project.areaOfFocus ?? project['Area of Focus'] ?? project.focusArea ?? project.Focus ?? project.category ?? null;
  }

  function resolveArea(project) {
    const raw = getRawArea(project);
    const fromSheet = normalizeArea(raw);
    if (fromSheet) return fromSheet;
    const key = normalizeName(project.name ?? project.title ?? '');
    if (PROJECT_AREA_BY_NAME.has(key)) return PROJECT_AREA_BY_NAME.get(key);
    return null;
  }

  let selected = 'All';
  let scrolled = false;

  $: filteredProjects = selected === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => resolveArea(p) === selected);

  $: counts = (() => {
    const m = { All: PROJECTS.length };
    for (const a of FOCUS_AREAS) m[a.value] = 0;
    for (const p of PROJECTS) {
      const area = resolveArea(p);
      if (area && m[area] !== undefined) m[area] += 1;
    }
    return m;
  })();

  function selectArea(value) {
    selected = value;
    // scroll grid into view on mobile after selection (optional)
  }

  onMount(() => {
    const handler = () => { scrolled = window.scrollY > 60; };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });
</script>

<svelte:head>
  <title>Projects — Rotaract Club of Lilongwe</title>
  <meta
    name="description"
    content="Explore the community service projects of the Rotaract Club of Lilongwe — from disease prevention and education to water and economic development initiatives across Malawi."
  />
</svelte:head>

<!-- PROJECTS GRID -->
<section class="projects-section">
  <div class="projects-container">
    <div class="projects-header">
      <h1 class="section-title">Our Projects</h1>
      <p class="section-subtitle">Our ongoing and completed initiatives making a difference in communities</p>
    </div>

    <!-- Filters -->
    {#if PROJECTS.length > 0}
      <div class="filters-wrap">
        <div class="filters-bar" role="toolbar" aria-label="Filter projects by Rotary Area of Focus">
          <button
            class="filter-btn"
            class:active={selected === 'All'}
            on:click={() => selectArea('All')}
            aria-pressed={selected === 'All'}
          >
            All <span class="filter-count">{counts['All']}</span>
          </button>
          {#each FOCUS_AREAS as area}
            <button
              class="filter-btn"
              class:active={selected === area.value}
              on:click={() => selectArea(area.value)}
              aria-pressed={selected === area.value}
              title={area.value}
            >
              <img src={area.icon} alt="" width="18" height="18" aria-hidden="true" />
              {area.label}
              <span class="filter-count">{counts[area.value]}</span>
            </button>
          {/each}
        </div>
        <div class="filters-meta">
          <span class="filters-results" aria-live="polite">
            {#if selected === 'All'}
              Showing all {filteredProjects.length} projects
            {:else}
              Showing {filteredProjects.length} of {PROJECTS.length} — {selected}
            {/if}
          </span>
          {#if selected !== 'All'}
            <button class="clear-filter" on:click={() => selectArea('All')}>Clear filter ✕</button>
          {/if}
        </div>
      </div>
    {/if}

    <div class="projects-grid">
      {#if PROJECTS.length === 0}
        <!-- Skeleton loading state -->
        {#each Array(6) as _}
          <div class="project-card skeleton">
            <div class="project-image skel-img"></div>
            <div class="project-content">
              <div class="skel-badge"></div>
              <div class="skel-title"></div>
              <div class="skel-desc"></div>
              <div class="skel-desc short"></div>
              <div class="skel-impact"></div>
            </div>
          </div>
        {/each}
      {:else if filteredProjects.length === 0}
        <div class="empty-state">
          <img src="/AOF_peace_color_no_title.png" alt="" width="48" height="48" />
          <h3>No projects in this area yet</h3>
          <p>No projects tagged under <strong>{selected}</strong>. Try another Area of Focus or view all.</p>
          <button class="btn-primary" on:click={() => selectArea('All')}>Show all projects</button>
        </div>
      {:else}
        {#each filteredProjects as project (project.name + project.img)}
          {@const area = resolveArea(project)}
          <div class="project-card">
            <div class="project-image">
              <img src="https://kwwvmkszattobpgisslt.supabase.co/storage/v1/object/public/RAC/PROJECTS/{project.img}" alt="{project.name}" />
            </div>
            <div class="project-content">
              <div class="project-status-row">
                <span class="project-badge" class:ongoing={project.status === 'Ongoing'}>{project.status}</span>
                {#if area}
                  <span class="project-area-badge" title={area}>
                    {#each FOCUS_AREAS as fa}
                      {#if fa.value === area}
                        <img src={fa.icon} alt="" width="16" height="16" />
                      {/if}
                    {/each}
                    {area}
                  </span>
                {/if}
              </div>
              <h3 class="project-name">{project.name}</h3>
              <p class="project-desc">{project.desc}</p>
              <div class="project-impact">{project.impact}</div>
              <div class="project-impact-label">Impact</div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>

<!-- CTA SECTION -->
<section class="cta-section">
  <div class="cta-content">
    <h2 class="cta-title">Want to Get Involved?</h2>
    <p class="cta-sub">Join us in making a difference. Apply to become a member or volunteer for our upcoming projects.</p>
    <div class="cta-buttons">
      <a href="/join" class="btn-primary">Apply to Join</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="logo-wrap">
        <div class="image-logo"><img src={logo} alt="roteract logo"></div>
        <div>
          <div class="logo-tagline">CREATE LASTING IMPACT</div>
          <div class="logo-name">Rotaract Club of Lilongwe</div>
        </div>
      </div>
      <p class="footer-about">
        Empowering young leaders and transforming communities in Lilongwe, Malawi. Part of Rotary International's global family.
      </p>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 Rotaract Club of Lilongwe. All rights reserved.</span>
    </div>
  </div>
</footer>

<style>
  /* Skeleton shimmer */
  .skel {
    border-radius: 6px;
    background: linear-gradient(90deg, rgba(0,0,0,0.07) 25%, rgba(0,0,0,0.13) 50%, rgba(0,0,0,0.07) 75%);
    background-size: 600px 100%;
    animation: shimmer 1.6s infinite linear;
  }
  @keyframes shimmer { 0% { background-position: -600px 0; } 100% { background-position: 600px 0; } }
  .skel-img { height: 250px; }
  .skel-badge { width: 70px; height: 20px; margin-bottom: 12px; }
  .skel-title { width: 80%; height: 24px; margin-bottom: 10px; }
  .skel-desc { width: 95%; height: 13px; margin-bottom: 6px; }
  .skel-desc.short { width: 65%; }
  .skel-impact { width: 90px; height: 32px; margin-top: 16px; }

  /* Projects Section */
  .projects-section {
    padding: 80px 5vw;
    background: var(--cream);
  }
  .projects-container {
    max-width: 1200px; margin: 0 auto;
  }
  .projects-header {
    text-align: center; margin-bottom: 32px;
  }
  .section-title {
    font-family: 'Anton', sans-serif; font-size: 48px;
    color: var(--near-black); margin-bottom: 16px;
  }
  .section-subtitle {
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 16px;
    color: #666; max-width: 600px; margin: 0 auto;
  }

  /* Filters */
  .filters-wrap {
    margin-bottom: 40px;
  }
  .filters-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  .filter-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: white;
    border: 1.5px solid rgba(0,0,0,.08);
    color: var(--near-black);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    padding: 9px 16px;
    border-radius: 100px;
    cursor: pointer;
    transition: all .2s ease;
    line-height: 1;
    white-space: nowrap;
  }
  .filter-btn:hover {
    border-color: rgba(232,23,93,.35);
    transform: translateY(-1px);
  }
  .filter-btn.active {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
    box-shadow: 0 6px 20px rgba(232,23,93,.28);
  }
  .filter-btn.active .filter-count {
    background: rgba(255,255,255,.22);
    color: white;
  }
  .filter-btn img {
    width: 18px; height: 18px; object-fit: contain;
  }
  .filter-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 100px;
    background: rgba(0,0,0,.06);
    color: #666;
    font-size: 11px;
    font-weight: 800;
  }
  .filters-meta {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 14px;
    flex-wrap: wrap;
  }
  .filters-results {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    color: #888;
    font-weight: 600;
  }
  .clear-filter {
    background: none;
    border: none;
    color: var(--primary);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .clear-filter:hover { opacity: .8; }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 32px;
  }
  .empty-state {
    grid-column: 1 / -1;
    text-align: center;
    background: white;
    border: 1px dashed rgba(0,0,0,.12);
    border-radius: 12px;
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .empty-state h3 {
    font-family: 'Anton', sans-serif;
    font-size: 22px;
    color: var(--near-black);
  }
  .empty-state p {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    color: #666;
    max-width: 420px;
    line-height: 1.6;
  }
  .empty-state .btn-primary {
    margin-top: 8px;
    border: none;
    cursor: pointer;
  }

  .project-card {
    background: white;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,.06);
    transition: transform .3s, box-shadow .3s;
  }
  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0,0,0,.12);
  }
  .project-image {
    height: 250px;
    overflow: hidden;
  }
  .project-image img {
    width: 100%; height: 100%; object-fit: cover;
  }
  .project-content {
    padding: 32px;
  }
  .project-status-row {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .project-badge {
    display: inline-block;
    background: rgba(42,157,143,.1); color: #2A9D8F;
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px;
    font-weight: 700; padding: 6px 14px; border-radius: 100px;
  }
  .project-badge.ongoing {
    background: rgba(232,23,93,.1); color: var(--primary);
  }
  .project-area-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: rgba(0,0,0,.04);
    border: 1px solid rgba(0,0,0,.06);
    color: #555;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 100px;
    letter-spacing: .2px;
  }
  .project-area-badge img {
    width: 14px; height: 14px; object-fit: contain;
  }
  .project-name {
    font-family: 'Anton', sans-serif; font-size: 24px;
    color: var(--near-black); margin-bottom: 12px; line-height: 1.2;
  }
  .project-desc {
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px;
    color: #666; line-height: 1.6; margin-bottom: 20px;
  }
  .project-impact {
    font-family: 'Anton', sans-serif; font-size: 28px;
    color: var(--primary); margin-bottom: 4px;
  }
  .project-impact-label {
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px;
    color: #999; font-weight: 600; letter-spacing: .5px;
  }

  /* CTA Section */
  .cta-section {
    background: var(--near-black);
    padding: 80px 5vw;
    text-align: center;
  }
  .cta-content {
    max-width: 600px; margin: 0 auto;
  }
  .cta-title {
    font-family: 'Anton', sans-serif; font-size: 48px;
    color: white; margin-bottom: 16px;
  }
  .cta-sub {
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 16px;
    color: rgba(255,255,255,.7); line-height: 1.7; margin-bottom: 32px;
  }
  .cta-buttons {
    display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
  }
  .btn-primary {
    background: var(--primary); color: white;
    padding: 14px 36px; border-radius: 100px;
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px;
    font-weight: 800; text-decoration: none; letter-spacing: .3px;
    box-shadow: 0 8px 32px rgba(232,23,93,.4);
    transition: transform .2s;
    display: inline-flex; align-items: center; justify-content: center;
  }
  .btn-primary:hover { transform: translateY(-2px); }
 
  /* Footer */
  footer {
    background: var(--near-black);
    padding: 60px 5vw 40px;
  }
  .footer-inner {
    max-width: 1200px; margin: 0 auto;
  }
  .footer-brand {
    text-align: center; margin-bottom: 40px;
  }
  .footer-brand .logo-wrap {
    justify-content: center; margin-bottom: 20px;
  }
  .footer-about {
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px;
    color: rgba(255,255,255,.5); line-height: 1.6;
    max-width: 400px; margin: 0 auto;
  }
  .footer-bottom {
    text-align: center; padding-top: 40px;
    border-top: 1px solid rgba(255,255,255,.1);
  }
  .footer-copy {
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px;
    color: rgba(255,255,255,.4);
  }

  @media (max-width: 768px) {
    .projects-grid { grid-template-columns: 1fr; }
    .filters-bar { justify-content: flex-start; overflow-x: auto; flex-wrap: nowrap; padding-bottom: 8px; scrollbar-width: none; }
    .filters-bar::-webkit-scrollbar { display: none; }
  }
</style>
