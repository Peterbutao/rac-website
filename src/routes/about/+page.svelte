<script>
  import { onMount } from 'svelte';
  import logo from '$lib/assets/logo.png';
  import { ArrowRight, Briefcase, Clock, FileText, Globe, Globe2, Handshake, MapPin } from 'lucide-svelte';

  const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Events', href: '/#Events' },
    { label: 'Blog', href: '/' },
    { label: 'Join Us', href: '/join' }
  ];

  const highlights = [
    {
      value: '2015',
      label: 'Chartered',
      text: 'The club was chartered on February 13, 2015 by the Rotary Club of Lilongwe.'
    },
    {
      value: '42',
      label: 'Active members',
      text: 'A growing membership base with 30 inducted and 12 uninducted members.'
    },
    {
      value: '2 weeks',
      label: 'Meeting rhythm',
      text: 'Regular meetings happen every two weeks, supported by fellowships and assemblies.'
    }
  ];

  
  const focusAreas = [
    { title: 'Peace and Conflict Prevention/Resolution', icon: '/AOF_peace_color_no_title.png', alt: 'Peace and conflict prevention icon' },
    { title: 'Disease Prevention and Treatment', icon: '/AOF_disease_color_no_title.png', alt: 'Disease prevention and treatment icon' },
    { title: 'Water and Sanitation', icon: '/AOF_water_color_no_title.png', alt: 'Water and sanitation icon' },
    { title: 'Maternal and Child Health', icon: '/AOF_maternal_color_no_title.png', alt: 'Maternal and child health icon' },
    { title: 'Basic Education and Literacy', icon: '/AOF_education_color_no_title.png', alt: 'Basic education and literacy icon' },
    { title: 'Economic and Community Development', icon: '/AOF_economic_color_no_title.png', alt: 'Economic and community development icon' },
    { title: 'Environment', icon: '/AOF_environment_color_no_title.png', alt: 'Environment icon' }
  ];
  
   const rotaryObjects = [
    {
      test: "is it the truth?",
      title: 'Encourage acquaintance',
      text: 'See friendship as a pathway to serve society.'
    },
    {
      test: "is it fair to all concerned?",
      title: 'Promote high ethics',
      text: "Recognize the worthiness of all occupations and dignify each person's work as service."
    },
    {
      test: "will it build goodwill and good friendships ?",
      title: 'Apply service',
      text: "Use service in personal, business, and community life."
    },
    {
      test: "will it be beneficial to all concerned ?",
      title: 'Advance understanding',
      text: 'Build goodwill and peace through a worldwide fellowship united by service.'
    }
  ];

  const currentLeadership = [
    { role: 'Current President', name: 'Timothy Sikelo', term: '2025/26' },
    { role: 'President Elect', name: 'Menia Chaphamtengo', term: '2026/27' },
    { role: 'President Nominee', name: 'Tadala Tenthani', term: '2027/28' }
  ];

  const boardMembers = [
    ['Secretary', 'Francisco Mijoni'],
    ['Treasurer', 'Prince Mthikira'],
    ['Sergeant At Arms', 'Tapiwa Dube'],
    ['Club Service Committee Director', 'Menia Chaphamtengo'],
    ['Community Service Committee Director', 'Jonathan Mtondo'],
    ['Vice Community Service Committee Director', 'Beatrice Likhwala'],
    ['International Service Director', 'Phillip Juwaoh'],
    ['Professional and Leadership Committee Director', 'Omega Mughogho'],
    ['The Rotary Foundation Committee', 'Tadala Tenthani'],
    ['Public Image Committee', 'Vitumbiko Luhanga'],
    ['Fundraising Committee', 'Wedson Kumwenda']
  ];

  const pastPresidents = [
    ['Chifundo Chilera', 'Charter President, 2015/16'],
    ["Dominic Mang'anda", '2015/16'],
    ['Isabel Kumwembe', '2016/17'],
    ['Mayamiko Tembo', '2017/18'],
    ['Pius Kanyengambeta', '2018/19'],
    ['Mvaiwa Chigaru', '2018/19'],
    ['Helena Mnthinda', '2019/20'],
    ['Mphanda Kabwazi', '2020/21'],
    ['Mike Jambawe', '2022/23'],
    ['Esther Bonyonga', '2023/24'],
    ['Violet Odala', '2024/25']
  ];

  let scrolled = false;

  onMount(() => {
    const handler = () => {
      scrolled = window.scrollY > 60;
    };

    handler();
    window.addEventListener('scroll', handler);

    return () => window.removeEventListener('scroll', handler);
  });
</script>

<svelte:head>
  <title>About RAC Lilongwe - Rotaract Club of Lilongwe</title>
  <meta
    name="description"
    content="Learn about the Rotaract Club of Lilongwe, its Rotary values, leadership, members, and meeting rhythm."
  />
</svelte:head>


<main>
  <section class="about-hero">
    <img class="hero-photo" src="{logo}" alt="Rotaract Club of Lilongwe members at a club event" />
    <div class="hero-shade"></div>
    <div class="hero-inner">
      <div class="hero-copy">
        <div class="section-pill dark">ABOUT THE CLUB</div>
        <h1>ROTARACT CLUB<br /><span>OF LILONGWE</span></h1>
        <p>
          A community service organization chartered on February 13, 2015 by the Rotary Club of Lilongwe,
          built around fellowship, leadership, and practical service.
        </p>

      </div>
    </div>
  </section>
  
  <section class="overview-section">
    <div class="overview-inner">
      <div class="overview-copy">
        <div class="section-pill">WHO WE ARE</div>
        <h2>FELLOWSHIP<br /><span>IN ACTION</span></h2>
        <p>
          The Rotaract Club of Lilongwe brings together people who believe service should be practical,
          ethical, and grounded in friendship. As part of the Rotary family, the club creates space for
          members to serve communities, grow as leaders, and build professional relationships that matter.
        </p>
        <p>
          Club life is shaped by regular meetings, fellowships, club assemblies, professional and leadership
          trainings, and bonding sessions agreed upon by the board and members.
        </p>
        <a class="constitution-link" href="/about/constitution">
          <FileText size={20} stroke-width={2.2} />
          <span>
            <strong>Club Constitution &amp; By-Laws</strong>
            <small>Read the governance document for membership, meetings, officers, and committees.</small>
          </span>
          <ArrowRight size={16} stroke-width={2.4} />
        </a>
      </div>
      
      <div class="highlight-grid" aria-label="Club highlights">
        {#each highlights as item}
        <article class="highlight-card">
          <div class="highlight-value">{item.value}</div>
          <h3>{item.label}</h3>
          <p>{item.text}</p>
        </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="principles-section">
    <div class="principles-inner">
      <div class="principles-header">
        <div>
          <div class="section-pill dark">ROTARY VALUES</div>
          <h2>THE 4-WAY<br /><span>TEST</span></h2>
        </div>
        <p>The Four-Way Test guides the things Rotarians and Rotaractors think, say, and do.</p>
      </div>
      
      <div class="test-grid">
        {#each rotaryObjects as object, index}
        <article class="test-card">
          <span>0{index + 1}</span>
          <p>{object.test}</p>
          
        </article>
        {/each}
      </div>
      <div class="principles-header">
        <div>
          <div class="section-pill dark">ROTARY OBJECTS</div>
        </div>
        <p>The Objects guide the things Rotarians and Rotaractors think, say, and do.</p>
      </div>

      <div class="test-grid">
        {#each rotaryObjects as object, index}
        <div class="objects-grid">
            <article class="object-card">
              <Handshake class="object-icon" size={28} stroke-width={2.2} />
              <h3>{object.title}</h3>
              <p>{object.text}</p>
            </article>
        </div>
 
        {/each}
      </div>

      </div>
  </section>
  
  <section class="focus-section">
    <div class="focus-inner">
      <div class="focus-header">
        <div class="section-pill">AREAS OF FOCUS</div>
        <h2>SEVEN WAYS<br /><span>WE SERVE</span></h2>
      </div>

      <div class="focus-grid">
        {#each focusAreas as area, index}
        <article class="focus-card">
          <div class="focus-icon">
            <img src={area.icon} alt={area.alt} width="48" height="48" />
          </div>
          <span>0{index + 1}</span>
          <h3>{area.title}</h3>
        </article>
        {/each}
      </div>
    </div>
  </section>
  
  <section class="leadership-section" id="leadership">
    <div class="leadership-inner">
      <div class="leadership-header">
        <div>
          <div class="section-pill">LEADERSHIP</div>
          <h2>THE PEOPLE<br /><span>STEERING THE CLUB</span></h2>
        </div>
        <p>
          The club is led by elected officers and committee directors who guide service, fellowship,
          administration, public image, and fundraising.
        </p>
      </div>
      
      <div class="current-grid">
        {#each currentLeadership as leader}
        <article class="leader-card">
          <div class="leader-term">{leader.term}</div>
          <h3>{leader.name}</h3>
          <p>{leader.role}</p>
        </article>
        {/each}
      </div>
      
      <div class="leadership-lists">
        <section class="board-panel" aria-labelledby="board-heading">
          <h3 id="board-heading">Board Members</h3>
          <div class="role-list">
            {#each boardMembers as [role, name]}
            <div class="role-row">
              <span>{role}</span>
              <strong>{name}</strong>
            </div>
            {/each}
          </div>
        </section>

        <section class="past-panel" aria-labelledby="past-heading">
          <h3 id="past-heading">Past Presidents</h3>
          <div class="past-list">
            {#each pastPresidents as [name, term]}
            <div class="past-row">
              <strong>{name}</strong>
              <span>{term}</span>
            </div>
            {/each}
          </div>
        </section>
      </div>
    </div>
  </section>
  
  <section class="meetings-section">
    <div class="meetings-inner">
      <div class="meeting-note">
        <Clock size={30} stroke-width={2.2} />
        <div>
          <div class="section-pill dark">CLUB MEETINGS</div>
          <h2>EVERY TWO WEEKS</h2>
          <p>
            Members gather every two weeks for regular meetings, with additional fellowships, club assemblies,
            trainings, and bonding sessions scheduled through the board and club membership.
          </p>
        </div>
      </div>
      <a href="/join" class="btn-white">Apply to join</a>
    </div>
  </section>
</main>


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
  .about-hero {
    position: relative;
    min-height: 74vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 120px 5vw 72px;
    background-image: linear-gradient(90deg, rgba(26, 26, 26, .94) 0%, rgba(26, 26, 26, .72) 52%, rgba(26, 26, 26, .35) 100%), linear-gradient(180deg, rgba(232, 23, 93, .15) 0%, transparent 100%), url("https://kwwvmkszattobpgisslt.supabase.co/storage/v1/object/public/RAC/BACKGROUND/bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .hero-photo {
    display: none;
  }

  .hero-shade {
    display: none;
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    width: min(1200px, 100%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) 340px;
    gap: 56px;
    align-items: end;
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



  .btn-white {
    background: white;
    color: var(--primary);
    box-shadow: 0 8px 32px rgba(0, 0, 0, .16);
  }

  .btn-white:hover {
    transform: translateY(-2px);
  }

  .overview-section,
  .focus-section,
  .leadership-section {
    background: var(--cream);
    padding: 96px 5vw;
  }

  .overview-inner,
  .focus-inner,
  .leadership-inner,
  .principles-inner,
  .meetings-inner,
  .footer-inner {
    width: min(1200px, 100%);
    margin: 0 auto;
  }

  .overview-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px;
    align-items: start;
  }

  .overview-copy h2,
  .focus-header h2,
  .leadership-header h2,
  .principles-header h2,
  .meeting-note h2 {
    color: var(--near-black);
    font-size: clamp(40px, 6vw, 72px);
    line-height: .95;
    margin-bottom: 28px;
  }

  .overview-copy p,
  .leadership-header p,
  .principles-header p,
  .meeting-note p {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: rgba(26, 26, 26, .68);
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 18px;
  }

  .constitution-link {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 16px;
    align-items: center;
    margin-top: 28px;
    padding: 18px 20px;
    background: white;
    border: 1px solid rgba(0, 0, 0, .08);
    border-radius: 4px;
    color: var(--near-black);
    font-family: 'Plus Jakarta Sans', sans-serif;
    text-decoration: none;
    transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
  }

  .constitution-link:hover {
    border-color: rgba(232, 23, 93, .32);
    box-shadow: 0 16px 44px rgba(26, 26, 26, .08);
    transform: translateY(-2px);
  }

  .constitution-link :global(svg) {
    color: var(--primary);
  }

  .constitution-link strong,
  .constitution-link small {
    display: block;
  }

  .constitution-link strong {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .constitution-link small {
    color: rgba(26, 26, 26, .58);
    font-size: 12px;
    line-height: 1.55;
  }

  .highlight-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .highlight-card,
  .test-card,
  .object-card,
  .focus-card,
  .leader-card,
  .board-panel,
  .past-panel {
    border-radius: 4px;
  }

  .highlight-card {
    background: white;
    border: 1px solid rgba(0, 0, 0, .06);
    padding: 28px;
    min-height: 220px;
  }

  .highlight-value {
    font-family: 'Anton', sans-serif;
    color: var(--primary);
    font-size: 38px;
    line-height: 1;
    margin-bottom: 18px;
  }

  .highlight-card h3,
  .object-card h3,
  .focus-card h3,
  .leader-card h3,
  .board-panel h3,
  .past-panel h3 {
    font-family: 'Anton', sans-serif;
    color: var(--near-black);
    font-size: 22px;
    line-height: 1.1;
    margin-bottom: 10px;
  }

  .highlight-card p,
  .object-card p,
  .leader-card p {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: rgba(26, 26, 26, .64);
    font-size: 13px;
    line-height: 1.65;
  }

  .principles-section {
    background: var(--near-black);
    padding: 96px 5vw;
  }

  .principles-header,
  .leadership-header {
    display: grid;
    grid-template-columns: 1fr minmax(260px, 440px);
    gap: 48px;
    align-items: end;
    margin-bottom: 48px;
  }

  .principles-header h2,
  .principles-header p {
    color: white;
  }

  .principles-header p {
    color: rgba(255, 255, 255, .6);
  }

  .test-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 26px;
  }

  .test-card {
    background: rgba(255, 255, 255, .05);
    border: 1px solid rgba(255, 255, 255, .09);
    padding: 26px;
    min-height: 190px;
  }

  .test-card span,
  .focus-card span {
    display: block;
    color: rgba(232, 23, 93, .7);
    font-family: 'Anton', sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
    margin-bottom: 24px;
  }

  .test-card p {
    font-family: 'Anton', sans-serif;
    color: white;
    font-size: 26px;
    line-height: 1.15;
  }

  .objects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
    margin-top: 28px;
  }

  .object-card {
    background: var(--cream);
    padding: 26px;
    border: 1px solid rgba(0, 0, 0, .06);
    min-height: 180px;
    display: grid;
    gap: 18px;
  }

  .object-card h3 {
    margin: 0;
    font-size: 18px;
    color: var(--near-black);
  }

  .object-card p {
    margin: 0;
    color: rgba(26, 26, 26, .64);
    line-height: 1.7;
  }

  :global(.object-icon) {
    color: var(--primary);
    margin-bottom: 22px;
  }

  .focus-header {
    text-align: center;
    margin-bottom: 52px;
  }

  .focus-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 14px;
  }

  .focus-card {
    background: white;
    border: 1px solid rgba(0, 0, 0, .06);
    min-height: 210px;
    padding: 24px;
  }

  .focus-icon {
    display: inline-flex;
    color: var(--primary);
    margin-bottom: 20px;
  }

  .focus-card h3 {
    font-size: 19px;
  }

  .leadership-section {
    background: white;
  }

  .current-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-bottom: 26px;
  }

  .leader-card {
    background: var(--near-black);
    padding: 28px;
  }

  .leader-card h3 {
    color: white;
    font-size: 28px;
  }

  .leader-card p {
    color: rgba(255, 255, 255, .55);
    font-weight: 700;
  }

  .leader-term {
    display: inline-flex;
    color: var(--primary);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 22px;
  }

  .leadership-lists {
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    gap: 26px;
  }

  .board-panel,
  .past-panel {
    background: var(--cream);
    padding: 30px;
    border: 1px solid rgba(0, 0, 0, .06);
  }

  .role-list,
  .past-list {
    display: grid;
    gap: 10px;
  }

  .role-row,
  .past-row {
    display: grid;
    gap: 6px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .08);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .role-row {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr);
    align-items: start;
  }

  .role-row:last-child,
  .past-row:last-child {
    border-bottom: 0;
  }

  .role-row span,
  .past-row span {
    color: rgba(26, 26, 26, .56);
    font-size: 13px;
    line-height: 1.5;
  }

  .role-row strong,
  .past-row strong {
    color: var(--near-black);
    font-size: 13px;
    line-height: 1.5;
  }

  .meetings-section {
    background: var(--primary);
    padding: 76px 5vw;
    color: white;
  }

  .meetings-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
  }

  .meeting-note {
    display: flex;
    gap: 24px;
    align-items: flex-start;
    max-width: 760px;
  }

  .meeting-note h2,
  .meeting-note p {
    color: white;
  }

  .meeting-note p {
    color: rgba(255, 255, 255, .78);
    margin-bottom: 0;
  }

  footer {
    background: var(--near-black);
    padding: 60px 5vw 34px;
  }

  .footer-brand {
    max-width: 420px;
    margin-bottom: 44px;
  }

  .footer-brand .logo-wrap {
    margin-bottom: 18px;
  }

  .footer-brand .logo-name,
  footer .logo-name {
    color: rgba(255, 255, 255, .72);
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
    .hero-inner,
    .overview-inner,
    .principles-header,
    .leadership-header,
    .leadership-lists {
      grid-template-columns: 1fr;
    }

    .highlight-grid,
    .current-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .test-grid,
    .objects-grid,
    .focus-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 760px) {
    .about-hero {
      min-height: auto;
      padding: 108px 5vw 64px;
    }

    .hero-inner,
    .overview-inner,
    .principles-header,
    .leadership-header {
      gap: 34px;
    }

    .meetings-inner,
    .meeting-note {
      align-items: stretch;
      flex-direction: column;
    }

    .btn-white {
      width: 100%;
    }

    .overview-section,
    .focus-section,
    .leadership-section,
    .principles-section {
      padding: 72px 5vw;
    }

    .highlight-grid,
    .test-grid,
    .objects-grid,
    .focus-grid,
    .current-grid {
      grid-template-columns: 1fr;
    }

    .role-row {
      grid-template-columns: 1fr;
    }
  }
</style>
