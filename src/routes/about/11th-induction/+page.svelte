<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  const projects = [
    // ---------------- Q1: JULY – SEPTEMBER 2025 ----------------
    { id:"project-1", quarter:"Q1", title:"\u201COnce Upon a Book\u201D — Book Donation Drive",
      desc:"Twelve members gathered and donated over 500 children's books to the Life Leadership Academy, under the theme \u201CGrowing a World of Stories, One Awesome Book at a Time.\u201D",
      impact:"Strengthened the academy's library and reinforced grassroots literacy and educational access.",
      images:["/PROJECTS/onceuponabook-1.jpg","/PROJECTS/onceuponabook-2.jpg","/PROJECTS/onceuponabook-3.jpg","/PROJECTS/onceuponabook-4.jpg","/PROJECTS/onceuponabook-5.jpg"] },
    { id:"project-2", quarter:"Q1", title:"Financial Literacy Info Session",
      desc:"Guest speakers from the Rotary Club of Lingadzi led an interactive session on budgeting, saving, investing and debt management.",
      impact:"Over 25 young adults equipped with practical skills for informed financial decisions.",
      images:["/PROJECTS/projects-(3).jpg","/PROJECTS/projects-(4).jpg"] },
    { id:"project-3", quarter:"Q1", title:"Youth Coffee & Connect — World Mental Health Day",
      desc:"A collaboration with Mental Health Matters and Meeplemania Games created a safe space with wellbeing exercises, music, poetry, and talks from mental health professionals.",
      impact:"Reached over 50 young people with coping tools, resources, and a supportive network.",
      images:["/PROJECTS/youthcoffee-1.jpg","/PROJECTS/youthcoffee-2.jpg"] },
    { id:"project-4", quarter:"Q1", title:"Climate Justice Workshop",
      desc:"Delivered with the SEED Program Spire (Norway–Malawi), pairing Malawian and Norwegian facilitators to connect global climate policy with local, on-the-ground realities.",
      impact:"Raised awareness among 22 members on the ethical dimensions of environmentalism.",
      images:["/PROJECTS/projects-(7).jpg","/PROJECTS/projects-(8).jpg"] },
    { id:"project-5", quarter:"Q1", title:"Rotary Youth Leadership Awards (RYLA) 2025",
      desc:"Fourteen members attended this four-day regional programme, themed \u201CUnite, Uplift & Unleash Potential,\u201D covering leadership, entrepreneurship, wellness and networking with peers from four countries.",
      impact:"Members returned with sharpened leadership skills and a broader regional network.",
      images:["/PROJECTS/projects-(9).jpg","/PROJECTS/projects-(10).jpg"] },

    // ---------------- Q2: OCTOBER – DECEMBER 2025 ----------------
    { id:"project-6", quarter:"Q2", title:"End Polio Awareness Walk/Run",
      desc:"Rotaractors, Rotarians and community members walked and ran together to advocate for immunisation and educate the public on vaccination.",
      impact:"Strengthened community support for Rotary's mission to eradicate polio worldwide.",
      images:["/PROJECTS/endpolio-1.jpg","/PROJECTS/endpolio-2.jpg"] },
    { id:"project-7", quarter:"Q2", title:"Job Hunting & CV Building Skills Info Session",
      desc:"Facilitated by Eveline Sibindi Van Dam of the Rotary Club of Lingadzi, covering CV writing, job applications and interview skills.",
      impact:"Boosted participants' confidence and readiness for a competitive job market.",
      images:["/PROJECTS/projects-(13).jpg","/PROJECTS/projects-(14).jpg"] },
    { id:"project-8", quarter:"Q2", title:"Membership Induction",
      desc:"A formal ceremony welcoming new members into the Rotaract family, introducing the values, mission and structure of Rotary and Rotaract.",
      impact:"New members left with a clearer sense of belonging and commitment to service.",
      images:["/PROJECTS/memberinduction-1.jpg","/PROJECTS/memberinduction-2.jpg","/PROJECTS/memberinduction-3.jpg","/PROJECTS/memberinduction-4.jpg","/PROJECTS/memberinduction-5.jpg"] },
    { id:"project-9", quarter:"Q2", title:"Fundraising Activity at Family Fun Day",
      desc:"A resource mobilisation drive held during the Family Fun Day to sustain club projects and operations.",
      impact:"Strengthened the club's financial capacity to run ongoing and future service projects.",
      images:["/PROJECTS/projects-(17).jpg","/PROJECTS/projects-(18).jpg"] },
    { id:"project-10", quarter:"Q2", title:"Operation Secret Santa",
      desc:"A festive fellowship event closing the calendar year with a Secret Santa gift exchange among members.",
      impact:"Boosted member morale, unity and a stronger sense of belonging.",
      images:["/PROJECTS/secretsanta-1.jpg","/PROJECTS/secretsanta-2.jpg","/PROJECTS/secretsanta-3.jpg","/PROJECTS/secretsanta-4.jpg","/PROJECTS/secretsanta-5.jpg","/PROJECTS/secretsanta-6.jpg"] },

    // ---------------- Q3: JANUARY – MARCH 2026 ----------------
    { id:"project-11", quarter:"Q3", title:"Rotary Foundation Info Session",
      desc:"Rtn. Jay Chikoya walked members through the Foundation's mission, funding mechanisms and grant opportunities across Rotary's Areas of Focus.",
      impact:"Deepened members' understanding of how Foundation grants translate into community impact.",
      images:["/PROJECTS/projects-(21).jpg","/PROJECTS/projects-(22).jpg"] },
    { id:"project-12", quarter:"Q3", title:"Tree Planting Activities",
      desc:"In partnership with the Rotary Club of Lilongwe, members planted trees in selected primary schools and taught pupils about environmental stewardship.",
      impact:"Increased tree cover and raised climate-action awareness among learners.",
      images:["/PROJECTS/treeplanting-1.jpg","/PROJECTS/treeplanting-2.jpg","/PROJECTS/treeplanting-3.jpg","/PROJECTS/treeplanting-4.jpg","/PROJECTS/treeplanting-5.jpg","/PROJECTS/treeplanting-6.jpg",] },
    { id:"project-13", quarter:"Q3", title:"Rotary Refresher Info Session",
      desc:"Facilitated by Rtn. Mvaiwa Chigaru and Rtn. Simon Musopole, revisiting Rotary's values, structure and avenues for service.",
      impact:"Renewed members' sense of purpose and leadership capacity.",
      images:["/PROJECTS/projects-(25).jpg","/PROJECTS/projects-(26).jpg"] },
    { id:"project-14", quarter:"Q3", title:"WASH Project — Chadza Health Centre",
      desc:"Donated bins, hand wash, gloves and other sanitation supplies to improve hygiene standards for patients and staff.",
      impact:"Reduced infection risk and improved conditions for safer healthcare delivery.",
      note:"Planned as an ongoing initiative — the club is now raising funds to address gaps in mattresses and sterilisation equipment at the facility.",
      images:["/PROJECTS/projects-(27).jpg","/PROJECTS/projects-(28).jpg"] },

    // ---------------- Q4: APRIL – JUNE 2026 ----------------
    { id:"project-15", quarter:"Q4", title:"The Rotaract Trail Escape",
      desc:"A fellowship and fitness outing at Lilongwe Wildlife Centre and Kuwala Gardens, featuring a guided nature walk and social bonding.",
      impact:"Strengthened teamwork and club unity through outdoor recreation.",
      images:["/PROJECTS/projects-(29).jpg","/PROJECTS/projects-(30).jpg"] },
    { id:"project-16", quarter:"Q4", title:"District 9210 — The Umodzi DISCON 2026",
      desc:"Rotaractors and Rotarians from Malawi, Zambia, Zimbabwe and Mozambique gathered under the theme \u201CUnite for Good\u201D for leadership development and celebration of service.",
      impact:"Club honoured with Best Performing Club in Malawi, Best Storytelling & Media, Best Social Media Presence, and individual awards for President Timothy Sikelo and IPP Violet Odala.",
      images:["/PROJECTS/projects-(31).jpg","/PROJECTS/projects-(32).jpg"] },
    { id:"project-17", quarter:"Q4", title:"Rotary Youth Leadership Awards — RYLA MOZ 2026",
      desc:"Five delegates joined this four-day programme themed \u201CLearn, Lead, Impact,\u201D covering ethical leadership, personal finance and social innovation.",
      impact:"Members returned with new tools now being integrated into club projects.",
      images:["/PROJECTS/projects-(33).jpg","/PROJECTS/projects-(34).jpg"] },
    { id:"project-18", quarter:"Q4", title:"Empowering Girls Through Reusable Pads & Menstrual Health Education",
      desc:"With the Mutisunge Initiative, selected girls were trained as peer educators in making reusable sanitary pads, to later train classmates at Mkwichi Secondary School.",
      impact:"Built practical vocational skills and a peer-learning model for lasting menstrual health support.",
      note:"Some peer educators needed more time to master the technique — highlighting the value of planned follow-up mentorship.",
      images:["/PROJECTS/projects-(35).jpg"] },
    { id:"project-19", quarter:"Q4", title:"Game Day Fundraiser",
      desc:"With the Lilongwe Leo Club, a full day of board games, face painting, tug of war, karaoke and vendor stalls in support of Children of the Nations (COTN).",
      impact:"Raised funds for COTN while strengthening community relationships and youth engagement.",
      images:["/PROJECTS/projects-(36).jpg"] },
    { id:"project-20", quarter:"Q4", title:"A Visit to Children of the Nations",
      desc:"Members donated food, school materials, toiletries and clothing for children aged 1\u201318, alongside interaction and motivational sessions.",
      impact:"Improved daily living conditions for the children and boosted their confidence and sense of belonging.",
      images:["/PROJECTS/projects-(27).jpg","/PROJECTS/projects-(28).jpg"] },
  ];

  const quarterLabels: Record<string, string> = {
    Q1:"Quarter 1 \u00B7 July \u2013 September 2025",
    Q2:"Quarter 2 \u00B7 October \u2013 December 2025",
    Q3:"Quarter 3 \u00B7 January \u2013 March 2026",
    Q4:"Quarter 4 \u00B7 April \u2013 June 2026"
  };

  let activeQuarter: string = 'all';
  let carouselStates: Record<string, number> = {};

  interface Project {
    id: string;
    quarter: string;
    title: string;
    desc: string;
    impact: string;
    note?: string;
    images: string[];
  }

  const byQuarter: Record<string, Project[]> = {Q1:[], Q2:[], Q3:[], Q4:[]};
  projects.forEach((p: Project) => byQuarter[p.quarter].push(p));

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

  onMount(() => {
    if (!browser) return;
    initCarousels();
    handleHash();
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  });

  $: if (browser) {
    // Reactive update when quarter changes
    setTimeout(initCarousels, 50);
  }

  function filterProjects(quarter: string) {
    activeQuarter = quarter;
    // Re-init carousels after DOM update
    setTimeout(initCarousels, 50);
    return true;
  }
</script>

<svelte:head>
  <title>11th Presidential Induction Affair — Project Showcase | Rotaract Club of Lilongwe</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Montserrat:wght@600;900&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="induction-page">

<div class="hero-wrap">
  <div class="hero-card">
    <div class="impact-tag">Create Lasting Impact</div>
    <div style="height:16px;"></div>
    <div class="hero-title">The 11th Presidential Induction Affair</div>
    <div class="hero-sub">Project Showcase</div>
    <p class="hero-desc">
      Twenty projects, four quarters, one club united for good. Relive that projects here,
      in pictures.
    </p>
    <div class="hero-meta">
      <div class="hero-image">
        <img src="/bg.png" alt="club members" />
      </div>
      <div><b>2025 – 2026</b>Rotary Year</div>
      <div><b>20</b>Projects Delivered</div>
      <!-- <div><b>4</b>Quarters</div> -->
    </div>
    <div class="hero-count"> ↓</div>
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
            <article class="card" id={project.id}>
              <!-- Carousel -->
              <div class="carousel" data-id={project.id}>
                {#if project.images && project.images.length > 0}
                  {#each project.images as img, i}
                    <div class="slide" class:active={i === 0} style="background-image:url('{img}')"></div>
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
    /* animation: fadeInUp 0.8s ease-out both; */
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
    /* animation: fadeInUp 0.8s ease-out 0.15s both; */
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
    /* border:1.5px solid var(--ink); */
    border-radius:0;
    /* padding:14px 22px; */
    /* margin-bottom:20px; */
    animation: fadeInUp 0.8s ease-out 0.45s both;
  }
  .hero-meta div{
    font-size:.82rem;
    color:var(--ink-soft);
    padding:0 8px;
  }
  .hero-meta b{display:block;color:var(--ink);font-size:.95rem;font-family:'Poppins',sans-serif;font-weight:700;}
  .hero-count{
    font-size:.85rem;
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
  }
  .card.highlight{
    box-shadow:0 0 0 3px var(--pink), 0 20px 40px -18px rgba(34,29,22,.45);
    transform:translateY(-2px);
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