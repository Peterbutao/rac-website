<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { browser } from '$app/environment';
  import { projects, quarterLabels, byQuarter } from '$lib/data/induction-projects';
  import type { Project } from '$lib/data/induction-projects';

  let activeQuarter: string = 'all';
  let carouselStates: Record<string, number> = {};
  let selectedProject: Project | null = null;
  let modalImageIndex = 0;
  let tensDigit = 0;
  let onesDigit = 0;
  let counterStarted = false;
  const TARGET_TENS = 2;
  const TARGET_ONES = 1;
  const DURATION = 1800; // ms
  const TENS_START = 9; // counts down from 9
  const ONES_START = 0; // counts up from 0

  // Lazy-loaded modal component
  let ProjectModal: any = null;
  let modalLoaded = false;

  function initCarousels() {
    if (!browser) return;
    document.querySelectorAll('.carousel').forEach(car => {
      const carEl = car as HTMLElement;
      const id = carEl.dataset.id;
      if (!id) return;
      const slides = [...car.querySelectorAll('.slide')] as HTMLElement[];
      const dots = [...car.querySelectorAll('.dots span')] as HTMLElement[];
      let idx = carouselStates[id] ?? 0;
      const go = (n: number) => {
        idx = (n + slides.length) % slides.length;
        slides.forEach((s,i) => s.classList.toggle('active', i===idx));
        dots.forEach((d,i) => d.classList.toggle('active', i===idx));
        carouselStates[id] = idx;
      };
      go(0);
      car.querySelector('.prev')?.addEventListener('click', () => go(idx - 1));
      car.querySelector('.next')?.addEventListener('click', () => go(idx + 1));
      dots.forEach(d => d.addEventListener('click', () => go(parseInt(d.dataset.i || '0', 10))));
    });
  }

  function handleHash() {
    if (!browser) return;
    const id = location.hash.replace('#','');
    if (!id) return;
    activeQuarter = 'all';
    setTimeout(() => {
      const card = document.getElementById(id);
      if (!card) return;
      card.scrollIntoView({behavior:'smooth', block:'center'});
      card.classList.add('highlight');
      setTimeout(() => card.classList.remove('highlight'), 3200);
    }, 80);
  }

  async function openModal(project: Project) {
    selectedProject = project;
    modalImageIndex = 0;
    // Lazy load the modal component on first use
    if (!modalLoaded) {
      const mod = await import('$lib/components/ProjectModal.svelte');
      ProjectModal = mod.default;
      modalLoaded = true;
    }
  }

  function closeModal() {
    selectedProject = null;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeModal();
  }

  function animateCounter() {
    if (!browser || counterStarted) return;
    counterStarted = true;
    const startTime = performance.now();
    const tensRange = TENS_START - TARGET_TENS; // 9 → 2 = 7 steps down
    const onesRange = TARGET_ONES - ONES_START; // 0 → 1 = 1 step up

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      // easeOutExpo for smoother stop
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      tensDigit = Math.round(TENS_START - eased * tensRange);
      onesDigit = Math.round(ONES_START + eased * onesRange);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        tensDigit = TARGET_TENS;
        onesDigit = TARGET_ONES;
      }
    }
    requestAnimationFrame(step);
  }

  // Lazy image loading with IntersectionObserver
  function setupLazyImages() {
    if (!browser) return;
    if (!('IntersectionObserver' in window)) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const bg = el.dataset.src;
          if (bg) {
            el.style.backgroundImage = `url('${bg}')`;
            el.removeAttribute('data-src');
          }
          observer.unobserve(el);
        }
      });
    }, { rootMargin: '200px 0px' }); // Start loading 200px before visible

    document.querySelectorAll('.slide[data-src]').forEach(el => observer.observe(el));
  }

  onMount(() => {
    if (!browser) return;
    initCarousels();
    handleHash();
    setupLazyImages();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('keydown', handleKeydown);

    // Start the counter animation after a short delay
    setTimeout(animateCounter, 600);

    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  $: if (browser) {
    setTimeout(() => {
      initCarousels();
      setupLazyImages();
    }, 50);
  }

  function filterProjects(quarter: string) {
    activeQuarter = quarter;
    setTimeout(() => {
      initCarousels();
      setupLazyImages();
    }, 50);
    return true;
  }
</script>

<svelte:head>
  <title>11th Presidential Induction Affair — Project Showcase | Rotaract Club of Lilongwe</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Montserrat:wght@600;900&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="induction-page">

<div class="hero-wrap">
  <div class="hero-card">
    <div class="impact-tag">Create Lasting Impact</div>
    <div style="height:16px;"></div>
    <div class="hero-title">Welcome To The 11th Presidential Induction Affair</div>
    <div class="hero-sub">Year In Review</div>
    <p class="hero-desc">
      From service projects and fellowships to socials, trainings, and celebrations—relive the moments that made the 2025–2026 Rotary Year unforgettable
    </p>
    <div class="hero-meta">
      <div class="hero-image">
        <img src="/bg.png" alt="club members" loading="lazy" />
      </div>
      
      <div class="counter-wrap"><b><span class="digit">{tensDigit}</span><span class="digit">{onesDigit}</span></b>Signature Moments.</div>
    </div>
    <div class="hero-count"> 
      <div>2025 – 2026 Rotary Year</div>
    </div>
  </div>
</div>

<div class="swatch-strip">
  <span class="sw-sage"></span><span class="sw-olive"></span><span class="sw-olive2"></span>
  <span class="sw-terracotta"></span><span class="sw-blush"></span><span class="sw-sand"></span>
</div>

<div class="nav-wrap">
  <div class="nav-inner">
    <button class="qbtn" class:active={activeQuarter === 'all'} on:click={() => filterProjects('all')}>All Projects</button>
    <button class="qbtn" class:active={activeQuarter === 'Q1'} on:click={() => filterProjects('Q1')}>Q1 · Jul–Sep</button>
    <button class="qbtn" class:active={activeQuarter === 'Q2'} on:click={() => filterProjects('Q2')}>Q2 · Oct–Dec</button>
    <button class="qbtn" class:active={activeQuarter === 'Q3'} on:click={() => filterProjects('Q3')}>Q3 · Jan–Mar</button>
    <button class="qbtn" class:active={activeQuarter === 'Q4'} on:click={() => filterProjects('Q4')}>Q4 · Apr–Jun</button>
  </div>
</div>

<main class="projects-main">
  {#each Object.keys(byQuarter) as qKey}
    {#if activeQuarter === 'all' || activeQuarter === qKey}
      <section class="quarter-block">
        <div class="quarter-heading">
          <h2>{quarterLabels[qKey]}</h2>
          <span>{byQuarter[qKey].length} project{byQuarter[qKey].length === 1 ? '' : 's'}</span>
        </div>
        <div class="grid">
          {#each byQuarter[qKey] as project}
            <!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
            <article class="card" id={project.id} on:click={() => openModal(project)} on:keydown={(e) => e.key === 'Enter' && openModal(project)} tabindex="0" role="button" aria-label="View details for {project.title}">
              <!-- Carousel -->
              <div class="carousel" data-id={project.id}>
                {#if project.images && project.images.length > 0}
                  {#each project.images as img, i}
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <div class="slide" class:active={i === 0} data-src={img} style="background-image:url('{i === 0 ? img : ''}')"></div>
                  {/each}
                  {#if project.images.length > 1}
                    <button class="nav-arrow prev" aria-label="Previous photo">‹</button>
                    <button class="nav-arrow next" aria-label="Next photo">›</button>
                    <div class="dots">
                      {#each project.images as _, i}
                        <span data-i={i} class:active={i === 0}></span>
                      {/each}
                    </div>
                  {/if}
                {:else}
                  <div class="placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="M21 16l-4.5-4.5a1 1 0 0 0-1.4 0L9 18"/><path d="M8 6l1-2h6l1 2"/></svg>
                    <div class="ph-title">Photos coming soon</div>
                    <div class="ph-sub">Add filenames to this project's images array to fill this carousel.</div>
                  </div>
                {/if}
              </div>
              <!-- Card body -->
              <div class="card-body">
                <div class="card-top">
                  <span class="card-tag">{project.quarter}</span>
                  <span class="card-id">{project.id}</span>
                </div>
                <h3 class="card-title">{project.title}</h3>
                <p class="card-desc">{project.desc}</p>
                <div class="card-impact"><b>Impact —</b>{project.impact}</div>
                {#if project.note}
                  <div class="card-note">{project.note}</div>
                {/if}
                <div class="card-click-hint">Click for full details →</div>
              </div>
            </article>
          {/each}
        </div>
      </section>
    {/if}
  {/each}
</main>

<footer class="induction-footer">
  <div class="fh script" style="font-size:1.6rem;">Uniting for Good</div>
  <div>Rotaract Club of Lilongwe &middot; District 9210 &middot; Malawi</div>
  <div class="handles">Instagram · TikTok · Facebook · X &nbsp;—&nbsp; @RotaractLilongwe</div>
</footer>

</div>

<!-- Lazy-loaded Modal -->
{#if selectedProject && ProjectModal}
  <svelte:component this={ProjectModal} bind:selectedProject bind:modalImageIndex />
{/if}

<style>
  :root{
    --ink:#221d16;
    --ink-soft:#4a4238;
    --cream:#f2ead9;
    --cream-deep:#e7dabd;
    --card:#fffcf5;
    --pink:#c4276b;
    --pink-deep:#9c1c54;
    --gold:#dd9a3b;
    --sage:#93a78f;
    --olive:#6c6a3d;
    --olive2:#a6a066;
    --terracotta:#c97462;
    --blush:#e7c7b7;
    --sand:#e9d8bc;
    --line:rgba(34,29,22,.14);
    --radius:0;
  }
  .induction-page *{box-sizing:border-box;}
  .induction-page{
    background:var(--cream);
    color:var(--ink);
    font-family:'Poppins',sans-serif;
    -webkit-font-smoothing:antialiased;
    min-height:100vh;
  }
  .induction-page img{max-width:100%;display:block;}

  :global(.script){
    font-family:'Alex Brush',cursive;
    color:var(--gold);
    font-weight:400;
  }
  /* svelte-ignore css_unused_selector */
  .induction-page h1,.induction-page h2,.induction-page h3{
    font-family:'Montserrat',sans-serif;
    margin:0;
    letter-spacing:.2px;
  }
  .eyebrow{
    font-size:.72rem;
    letter-spacing:.18em;
    text-transform:uppercase;
    font-weight:600;
    color:var(--pink-deep);
    font-family:'Poppins',sans-serif;
  }

  /* swatch strip */
  .swatch-strip{
    display:flex;
    height:10px;
    width:100%;
  }
  .swatch-strip span{flex:1;}
  .sw-sage{background:var(--sage);}
  .sw-olive{background:var(--olive);}
  .sw-olive2{background:var(--olive2);}
  .sw-terracotta{background:var(--terracotta);}
  .sw-blush{background:var(--blush);}
  .sw-sand{background:var(--sand);}

  /* hero */
  .hero-wrap{
    background:
      radial-gradient(120% 90% at 50% -10%, #a9622b 0%, #7a3f1c 42%, #4a2410 100%);
    padding:100px 16px 60px;
     background-image: linear-gradient(var(--cream) 30%, var(--primary) 70%),url("https://kwwvmkszattobpgisslt.supabase.co/storage/v1/object/public/RAC/BACKGROUND/bg.jpg");
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 
    background-blend-mode: multiply;
  }
  .hero-card{
    max-width:760px;
    margin:0 auto;
    background:var(--card);
    border-radius:var(--radius);
    padding:44px 30px 34px;
    text-align:center;
    box-shadow:0 30px 60px -20px rgba(0,0,0,.45);
    position:relative;
  }
  .brand-row{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    margin-bottom:26px;
  }
  .impact-tag{
    background:var(--pink);
    color:#fff;
    font-family:'Montserrat',sans-serif;
    font-weight:900;
    font-size:.72rem;
    letter-spacing:.06em;
    text-transform:uppercase;
    padding:8px 12px;
    border-radius:0;
    line-height:1.2;
  }
  .wheel{
    width:34px;height:34px;border-radius:50%;
    border:3px solid var(--pink);
    display:flex;align-items:center;justify-content:center;
    color:var(--pink);font-weight:800;font-family:'Poppins',sans-serif;
    font-size:.85rem;
  }
  .club-name{
    font-family:'Montserrat',sans-serif;
    color:var(--pink);
    font-size:1rem;
    font-weight:600;
  }
  .hero-title{
    font-size:clamp(2.1rem, 6vw, 2.9rem);
    color:var(--gold);
    font-family:'Alex Brush',cursive;
    font-weight:400;
    line-height:1.08;
    margin-bottom:6px;
    animation: fadeInUp 0.6s ease-out 0.2s both, glitch 3s ease 1.1s infinite;
  }
  .hero-sub{
    font-size:clamp(1.6rem, 4.2vw, 2.1rem);
    background:linear-gradient(90deg, var(--ink) 30%, var(--pink) 70%);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    font-family:'Montserrat',sans-serif;
    font-weight:900;
    text-transform:uppercase;
    letter-spacing:.02em;
    margin-bottom:14px;
    animation: fadeInUp 0.1s ease-out 0.1s both, glitch 2s ease 1.1s infinite;
  }
  .hero-desc{
    color:var(--ink-soft);
    max-width:480px;
    margin:0 auto 22px;
    font-size:.98rem;
    line-height:1.55;
    animation: fadeInUp 0.8s ease-out 0.3s both, glitch 4s ease 1.1s infinite;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glitch {
    0%, 7.5%, 100% { 
      transform: translateX(0); 
      opacity: 1;
      text-shadow: none;
    }
    2% { 
      transform: translateX(-3px); 
      opacity: 0.8;
      text-shadow: -2px 0 #ff0080;
    }
    4% { 
      transform: translateX(3px); 
      opacity: 0.9;
      text-shadow: 2px 0 #00ffff;
    }
    6% { 
      transform: translateX(-2px); 
      opacity: 0.85;
      text-shadow: -2px 0 #ffff00;
    }
  }

  .hero-meta{
    display:inline-flex;
    flex-wrap:wrap;
    gap:10px;
    justify-content:center;
    border-radius:0;
    animation: fadeInUp 0.8s ease-out 0.45s both;
  }
  .hero-meta div{
    font-size:.82rem;
    color:var(--ink-soft);
    padding:0 8px;
  }
  .hero-meta b{display:block;color:var(--ink);font-size:.95rem;font-family:'Poppins',sans-serif;font-weight:700;}
  .hero-count{
    font-size:.7rem;
    text-decoration: wavy;
    font-style: italic;
    color:var(--olive);
    letter-spacing:.05em;
  }

  /* sticky quarter nav */
  .nav-wrap{
    position:sticky; top:0; z-index:100;
    background:var(--cream);
    border-bottom:1px solid var(--line);
  }
  .nav-inner{
    max-width:1080px;margin:0 auto;
    display:flex; gap:8px; overflow-x:auto;
    padding:12px 16px;
    scrollbar-width:none;
  }
  .nav-inner::-webkit-scrollbar{display:none;}
  .qbtn{
    border:1.5px solid var(--ink);
    background:transparent;
    color:var(--ink);
    font-family:'Poppins',sans-serif;
    font-weight:600;
    font-size:.82rem;
    padding:8px 16px;
    border-radius:0;
    white-space:nowrap;
    cursor:pointer;
    transition:.15s ease;
  }
  .qbtn:hover{background:var(--sand);}
  .qbtn.active{background:var(--pink);border-color:var(--pink);color:#fff;}

  /* project grid */
  .projects-main{max-width:1080px;margin:0 auto;padding:38px 16px 20px;}
  .quarter-block{margin-bottom:44px;}
  .quarter-heading{
    display:flex;align-items:baseline;gap:14px;
    margin-bottom:18px;
  }
  .quarter-heading h2{
    font-size:1.5rem; color:var(--pink-deep); font-weight:700;
  }
  .quarter-heading span{
    font-size:.8rem;color:var(--ink-soft);
  }
  .grid{
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(320px,1fr));
    gap:22px;
  }
  .card{
    background:var(--card);
    border-radius:0;
    overflow:hidden;
    border:1px solid var(--line);
    box-shadow:0 10px 26px -18px rgba(34,29,22,.35);
    scroll-margin-top:90px;
    transition:box-shadow .4s ease, transform .4s ease;
    padding: 2px !important;
    cursor:pointer;
    content-visibility: auto;
    contain-intrinsic-size: 420px;
  }
  .card:hover{
    box-shadow:0 0 0 2px var(--pink), 0 20px 40px -18px rgba(34,29,22,.45);
    transform:translateY(-3px);
  }
  .card:focus-visible{
    outline:2px solid var(--pink);
    outline-offset:2px;
  }
  .card.highlight{
    box-shadow:0 0 0 3px var(--pink), 0 20px 40px -18px rgba(34,29,22,.45);
    transform:translateY(-2px);
  }
  .card-click-hint{
    margin-top:10px;
    font-size:.75rem;
    color:var(--pink);
    font-weight:600;
    letter-spacing:.03em;
    text-align:right;
    opacity:0;
    transition:opacity .3s ease;
  }
  .card:hover .card-click-hint{
    opacity:1;
  }

  /* carousel */
  .carousel{
    position:relative;
    aspect-ratio:4/3;
    background:linear-gradient(135deg,var(--sand),var(--blush));
    overflow:hidden;
  }
  .carousel .slide{
    position:absolute;inset:0;
    background-size:cover;background-position:center;
    opacity:0;
    transition:opacity .5s ease;
  }
  .carousel .slide.active{opacity:1;}
  .carousel .placeholder{
    position:absolute;inset:10px;
    border:2px dashed rgba(34,29,22,.35);
    border-radius:0;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    gap:8px;color:var(--ink-soft);text-align:center;padding:14px;
  }
  .carousel .placeholder svg{width:34px;height:34px;opacity:.55;}
  .carousel .placeholder .ph-title{font-family:'Montserrat',sans-serif;font-weight:600;color:var(--ink);font-size:.95rem;}
  .carousel .placeholder .ph-sub{font-size:.72rem;max-width:200px;}
  .carousel .nav-arrow{
    position:absolute;top:50%;transform:translateY(-50%);
    width:34px;height:34px;border-radius:50%;
    background:rgba(255,255,255,.85);
    border:none;display:flex;align-items:center;justify-content:center;
    cursor:pointer;color:var(--ink);font-size:1rem;
    box-shadow:0 4px 10px rgba(0,0,0,.15);
  }
  .carousel .nav-arrow.prev{left:10px;}
  .carousel .nav-arrow.next{right:10px;}
  .carousel .dots{
    position:absolute;bottom:10px;left:0;right:0;
    display:flex;justify-content:center;gap:6px;
  }
  .carousel .dots span{
    width:6px;height:6px;border-radius:50%;
    background:rgba(255,255,255,.6);
    cursor:pointer;
  }
  .carousel .dots span.active{background:#fff;width:16px;border-radius:4px;}

  .card-body{padding:20px 20px 22px;}
  .card-top{
    display:flex;justify-content:space-between;align-items:flex-start;gap:10px;
    margin-bottom:8px;
  }
  .card-tag{
    font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;
    color:#fff;background:var(--olive);
    padding:4px 9px;border-radius:6px;font-weight:600;
  }
  .card-id{font-size:.68rem;color:var(--ink-soft);opacity:.6;}
  .card-title{
    font-size:1.18rem;font-weight:700;line-height:1.28;margin-bottom:8px;
    color:var(--ink);font-family:'Poppins',sans-serif;
  }
  .card-desc{font-size:.9rem;color:var(--ink-soft);line-height:1.55;margin-bottom:12px;font-family:'Poppins',sans-serif;font-weight:400;}
  .card-impact{
    display:flex;gap:8px;
    background:var(--cream);
    border-left:3px solid var(--pink);
    border-radius:0;
    padding:10px 12px;
    font-size:.84rem;color:var(--ink);
    line-height:1.45;font-family:'Poppins',sans-serif;
  }
  .card-impact b{color:var(--pink-deep);}
  .card-note{
    margin-top:10px;font-size:.8rem;color:var(--ink-soft);
    background:var(--blush);
    border-radius:0;padding:8px 10px;font-family:'Poppins',sans-serif;
  }

  .induction-footer{
    text-align:center;padding:44px 16px 50px;color:var(--ink-soft);
    font-size:.85rem;
  }
  .induction-footer .fh{
    font-family:'Alex Brush',cursive;color:var(--pink);
    font-size:1.6rem;margin-bottom:6px;
  }
  .induction-footer .handles{margin-top:10px;letter-spacing:.05em;font-size:.75rem;}

  @media (max-width:480px){
    .hero-card{padding:32px 18px 26px;}
    .hero-meta{gap:2px;padding:0;}
  }
</style>