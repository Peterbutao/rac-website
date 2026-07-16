<script>
  import logo from '$lib/assets/logo.png';
  import { Download, FileText, ChevronDown } from 'lucide-svelte';

  const reports = [
    {
      year: '2025/26',
      title: 'Comprehensive Annual Activity Report',
      filename: 'Annual-Activity-Report-Rotaract-Club-of-Lilongwe-25_26.docx',
      sections: [
        {
          label: 'OVERVIEW',
          id: 'overview',
          content: `
            <h2>Comprehensive Annual Activity Report</h2>
            <p>This report provides a detailed overview of the activities, membership status, and achievements of the Rotaract Club of Lilongwe for the 2025-2026 Rotary year.</p>
            <p>Aligned with the Rotary Areas of Focus, our club has demonstrated a strong commitment to service and leadership development through targeted projects in Basic Education and Literacy, Economic and Community Development, Peacebuilding and Conflict Prevention, and Environmental Sustainability. Furthermore, our active participation in the district 9210 Rotary Youth Leadership Awards (RYLA) underscores our investment in nurturing the next generation of leaders.</p>
            <p>These accomplishments, achieved through strategic partnerships and an active membership base, reflect our unwavering dedication to uniting for good and creating positive impact in our community.</p>
          `
        },
        {
          label: 'MEMBERSHIP & ADMINISTRATION',
          id: 'membership',
          content: `
            <h2>Active Membership Roster</h2>
            <p>The Rotaract Club of Lilongwe currently has a strong and engaged membership base. The following is our list of active members for the 2025-2026 year:</p>
            <ol class="member-list">
              <li>Timothy Sikelo</li>
              <li>Violet Odala</li>
              <li>Esther Bonyonga</li>
              <li>Vitumbiko Luhanga</li>
              <li>Phillip Juwaoh</li>
              <li>Wedson Kumwenda</li>
              <li>Reyshma Salim</li>
              <li>Michael Tembo</li>
              <li>Patrick Maluwa</li>
              <li>Benjamin Mtayela</li>
              <li>Ryamond Silungwe</li>
              <li>Blessings Mkandawire</li>
              <li>Menia Chaphamtengo</li>
              <li>Prince Mthikira</li>
              <li>Tadala Tenthani</li>
              <li>Jonathan Mtondo</li>
              <li>Tapiwa Dube</li>
              <li>Omega Mughogho</li>
              <li>Francisco Mijoni</li>
              <li>Peter Butao</li>
              <li>Umali Phiri</li>
              <li>Thembeka Khumalo</li>
              <li>Leonard Chaula</li>
              <li>Simbarashe Muphuwa</li>
              <li>Mirriam Zgambo</li>
              <li>Alexina Chimzimu</li>
              <li>Gloria Katema</li>
              <li>Newton Ngalamila</li>
              <li>Tadala Mwale</li>
              <li>Precious Chivunva</li>
              <li>Bridget Nthani</li>
              <li>Beatrice Likhwala</li>
              <li>Kondwani Mkaimba</li>
              <li>Lusungu Wowa</li>
              <li>Faith Mukwa</li>
              <li>Leah Malama</li>
            </ol>

            <h2>Membership Dues Status</h2>
            <p>The club has struggled with Membership dues with a few members having fulfilled their financial obligations for the current year, and Majority only paying their fees partially. The following members have paid their Partial/full dues for the 2025-2026 Rotary year:</p>
            <p>The club continues to encourage full compliance to sustain administrative operations and service project funding. All fees and dues must be paid before a member is considered in good standing, in accordance with the club constitution.</p>
          `
        },
        {
          label: 'QUARTERLY ACTIVITIES',
          id: 'quarterly',
          content: `
            <h2>Projects & Activities By Quarter</h2>
            <p>Below is a comprehensive breakdown of the club's projects, events, and activities undertaken throughout the 2025-2026 Rotary year, organised by quarter.</p>

            <h3>Quarter 1 (July - September 2025)</h3>
            <ul class="activity-list">
              <li><strong>Club Handover & Induction Ceremony</strong> — Official transition of leadership to the 2025/26 board and induction of new members.</li>
              <li><strong>Strategic Planning Session</strong> — Board and committee directors met to outline the year's roadmap, set goals, and assign committee responsibilities.</li>
              <li><strong>Membership Drive Campaign</strong> — Launched a targeted recruitment campaign across universities and professional networks, resulting in several new aspiring members.</li>
              <li><strong>Basic Education Support — School Supply Drive</strong> — Collected and distributed exercise books, pens, and other learning materials to under-resourced primary schools in Lilongwe.</li>
              <li><strong>Community Clean-Up Exercise</strong> — Members volunteered in a community clean-up campaign in Area 25, Lilongwe, promoting environmental sustainability.</li>
              <li><strong>Professional Development: Public Speaking Workshop</strong> — A workshop focused on building confidence and public speaking skills for members.</li>
            </ul>

            <h3>Quarter 2 (October - December 2025)</h3>
            <ul class="activity-list">
              <li><strong>Tree Planting Campaign</strong> — In partnership with local environmental groups, the club planted over 200 trees in selected communities as part of environmental conservation efforts.</li>
              <li><strong>International Service — Global Exchange Meetup</strong> — Held a virtual exchange session with Rotaract clubs from other districts to share service experiences and best practices.</li>
              <li><strong>Economic Empowerment — Skills Training Workshop</strong> — Organised a financial literacy and small business management workshop for community members in partnership with a local microfinance institution.</li>
              <li><strong>Rotary Youth Leadership Awards (RYLA) Preparation</strong> — Identified and prepared club members for participation in the District 9210 RYLA programme.</li>
              <li><strong>Festive Season Charity Visit</strong> — Visited a local orphanage, donating food items, clothes, and toiletries to support children during the holiday season.</li>
              <li><strong>Club Fellowship & Bonding Event</strong> — End-of-year fellowship to celebrate member contributions and strengthen team cohesion.</li>
            </ul>

            <h3>Quarter 3 (January - March 2026)</h3>
            <ul class="activity-list">
              <li><strong>District 9210 RYLA Participation</strong> — Club members attended the Rotary Youth Leadership Awards, gaining intensive training in leadership, teamwork, and project management.</li>
              <li><strong>Peacebuilding — Community Dialogue Session</strong> — Facilitated a peacebuilding dialogue in collaboration with a community-based organisation, addressing conflict resolution and social cohesion.</li>
              <li><strong>Basic Education — School Mentorship Programme</strong> — Launched a mentorship initiative at a local secondary school, with members guiding students on career choices and personal development.</li>
              <li><strong>Fundraising — Charity Car Wash</strong> — Organised a fundraising car wash event to generate funds for upcoming community service projects.</li>
              <li><strong>International Women's Day Celebration</strong> — Partnered with other organisations to celebrate women in leadership and entrepreneurship.</li>
              <li><strong>Professional Development — Career Planning Session</strong> — A session featuring guest speakers from various professions to guide members on career development.</li>
            </ul>

            <h3>Quarter 4 (April - June 2026)</h3>
            <ul class="activity-list">
              <li><strong>Environmental — Plastic Waste Recycling Drive</strong> — Launched a plastic waste collection and recycling awareness campaign in partnership with a local recycling company.</li>
              <li><strong>Community Service — Health Awareness Campaign</strong> — Organised a health talk on disease prevention and maternal health in collaboration with local health practitioners.</li>
              <li><strong>Economic Development — Village Savings & Loans Training</strong> — Trained community members on village savings and loan schemes to promote financial inclusion.</li>
              <li><strong>End-of-Year Review & Handover Preparation</strong> — Reviewed the year's achievements, documented lessons learned, and prepared for leadership transition.</li>
              <li><strong>Annual General Meeting & Awards Ceremony</strong> — Recognised outstanding members, presented the annual report, and officially closed the Rotary year.</li>
            </ul>
          `
        },
        {
          label: 'SERVICE PROJECTS',
          id: 'service',
          content: `
            <h2>Community Service Initiatives</h2>
            <p>The club undertook a series of impactful community service projects aligned with Rotary's Areas of Focus. Key projects included activities in Basic Education and Literacy, where members volunteered time and resources to support local schools, and Economic and Community Development initiatives aimed at empowering community members with practical skills.</p>
            <p>Environmental Sustainability remained a key priority, with the club organising clean-up campaigns and tree-planting exercises. Peacebuilding and Conflict Prevention activities were also integrated into club programming through partnerships with community-based organisations.</p>

            <h2>International Service</h2>
            <p>The club continued to foster international understanding through collaborative initiatives with Rotaract clubs across the district and beyond. These exchanges provided members with exposure to diverse cultures and service approaches, enriching the club's programming and broadening member perspectives.</p>
          `
        },
        {
          label: 'LEADERSHIP DEVELOPMENT',
          id: 'leadership',
          content: `
            <h2>District 9210 RYLA Participation</h2>
            <p>The Rotaract Club of Lilongwe actively participated in the District 9210 Rotary Youth Leadership Awards (RYLA), a flagship leadership development programme. Members who attended gained valuable training in leadership, teamwork, and project management, reinforcing the club's commitment to developing the next generation of leaders.</p>

            <h2>Professional Development</h2>
            <p>Throughout the year, the club organised professional development sessions covering topics such as public speaking, financial literacy, and career planning. These sessions were well-attended and contributed to the personal and professional growth of members.</p>
          `
        },
        {
          label: 'FINANCIAL REPORT',
          id: 'financial',
          content: `
            <h2>Revenue & Expenditure</h2>
            <p>The club maintained transparent financial records throughout the year, with all transactions audited in accordance with the club constitution. Funds were raised through membership dues, fundraising activities, and partnership contributions.</p>
            <p>Expenditure was directed primarily toward service projects, administrative costs, and leadership development activities. A detailed financial statement is available upon request from the club treasurer.</p>
          `
        },
        {
          label: 'CONCLUSION',
          id: 'conclusion',
          content: `
            <h2>Looking Ahead</h2>
            <p>The 2025-2026 Rotary year has been one of growth, service, and impact for the Rotaract Club of Lilongwe. With an active membership base, meaningful projects, and strong partnerships, the club is well-positioned for continued success.</p>
            <p>As we look ahead to the coming year, the club remains committed to uniting for good — expanding our reach, deepening our impact, and developing leaders who will make a difference in their communities and beyond.</p>
          `
        }
      ]
    }
  ];

  let selectedYear = '2025/26';

  $: currentReport = reports.find(r => r.year === selectedYear) ?? reports[0];

  /**
   * @param {{ year: string; title: string; filename: string; sections: Array<{label: string; id: string; content: string}> }} report
   */
  const downloadHref = (report) => `/documents/${report.filename}`;
</script>

<svelte:head>
  <title>Annual Reports - Rotaract Club of Lilongwe</title>
  <meta
    name="description"
    content="Browse annual activity reports from the Rotaract Club of Lilongwe by Rotary year."
  />
</svelte:head>

<main class="report-page">
  <section class="report-hero">
    <img class="hero-photo" src={logo} alt="Rotaract Club of Lilongwe logo" />
    <div class="hero-shade"></div>
    <div class="hero-inner">

      <div class="section-pill dark">ANNUAL REPORTS</div>
      <h1>ACTIVITY<br /><span>REPORTS</span></h1>
      <p>
        Browse annual activity reports documenting the projects, membership, and achievements
        of the Rotaract Club of Lilongwe across each Rotary year.
      </p>
    </div>
  </section>

  <section class="document-section">
    <div class="document-shell">

      <!-- Year filter -->
      <div class="year-filter">
        <label for="year-select" class="filter-label">Rotary Year</label>
        <div class="select-wrap">
          <select id="year-select" bind:value={selectedYear}>
            {#each reports as report}
              <option value={report.year}>{report.year}</option>
            {/each}
          </select>
          <ChevronDown class="select-chevron" size={16} />
        </div>
      </div>

      {#if currentReport}
        <!-- Sidebar -->
        <aside class="document-aside" aria-label="Report sections">
          <div class="aside-card">
            <FileText size={24} />
            <h2>{currentReport.year}</h2>
            {#each currentReport.sections as section}
              <a href="#{section.id}">{section.label}</a>
            {/each}
            <a href={downloadHref(currentReport)} download>Download original</a>
          </div>
        </aside>

        <!-- Document content -->
        <article class="document" aria-label="Rotaract Club of Lilongwe {currentReport.year} Annual Report">
          {#each currentReport.sections as section}
            <section id={section.id} class="document-part">
              <div class="part-label">{section.label}</div>
              {#if section.id === 'membership'}
                <h2>Active Membership Roster</h2>
                <p>The Rotaract Club of Lilongwe currently has a strong and engaged membership base. The following is our list of active members for the {currentReport.year} Rotary year:</p>
                <ol class="member-list">
                  <li>Timothy Sikelo</li>
                  <li>Violet Odala</li>
                  <li>Esther Bonyonga</li>
                  <li>Vitumbiko Luhanga</li>
                  <li>Phillip Juwaoh</li>
                  <li>Wedson Kumwenda</li>
                  <li>Reyshma Salim</li>
                  <li>Michael Tembo</li>
                  <li>Patrick Maluwa</li>
                  <li>Benjamin Mtayela</li>
                  <li>Ryamond Silungwe</li>
                  <li>Blessings Mkandawire</li>
                  <li>Menia Chaphamtengo</li>
                  <li>Prince Mthikira</li>
                  <li>Tadala Tenthani</li>
                  <li>Jonathan Mtondo</li>
                  <li>Tapiwa Dube</li>
                  <li>Omega Mughogho</li>
                  <li>Francisco Mijoni</li>
                  <li>Peter Butao</li>
                  <li>Umali Phiri</li>
                  <li>Thembeka Khumalo</li>
                  <li>Leonard Chaula</li>
                  <li>Simbarashe Muphuwa</li>
                  <li>Mirriam Zgambo</li>
                  <li>Alexina Chimzimu</li>
                  <li>Gloria Katema</li>
                  <li>Newton Ngalamila</li>
                  <li>Tadala Mwale</li>
                  <li>Precious Chivunva</li>
                  <li>Bridget Nthani</li>
                  <li>Beatrice Likhwala</li>
                  <li>Kondwani Mkaimba</li>
                  <li>Lusungu Wowa</li>
                  <li>Faith Mukwa</li>
                  <li>Leah Malama</li>
                </ol>
                <h2>Membership Dues Status</h2>
                <p>The club has struggled with membership dues with a few members having fulfilled their financial obligations for the current year, and the majority only paying their fees partially. Some members have paid their partial or full dues for the {currentReport.year} Rotary year.</p>
                <p>The club continues to encourage full compliance to sustain administrative operations and service project funding. All fees and dues must be paid before a member is considered in good standing, in accordance with the club constitution and by-laws.</p>
              {:else if section.id === 'overview'}
                <h2>Comprehensive Annual Activity Report</h2>
                <p>This report provides a detailed overview of the activities, membership status, and achievements of the Rotaract Club of Lilongwe for the {currentReport.year} Rotary year.</p>
                <p>Aligned with the Rotary Areas of Focus, our club has demonstrated a strong commitment to service and leadership development through targeted projects in Basic Education and Literacy, Economic and Community Development, Peacebuilding and Conflict Prevention, and Environmental Sustainability. Furthermore, our active participation in the district 9210 Rotary Youth Leadership Awards (RYLA) underscores our investment in nurturing the next generation of leaders.</p>
                <p>These accomplishments, achieved through strategic partnerships and an active membership base, reflect our unwavering dedication to uniting for good and creating positive impact in our community.</p>
              {:else if section.id === 'quarterly'}
                <h2>Projects & Activities By Quarter</h2>
                <p>Below is a comprehensive breakdown of the club's projects, events, and activities undertaken throughout the {currentReport.year} Rotary year, organised by quarter.</p>

                <h3>Quarter 1 (July - September 2025)</h3>
                <ul class="activity-list">
                  <li><strong>Club Handover & Induction Ceremony</strong> — Official transition of leadership to the 2025/26 board and induction of new members.</li>
                  <li><strong>Strategic Planning Session</strong> — Board and committee directors met to outline the year's roadmap, set goals, and assign committee responsibilities.</li>
                  <li><strong>Membership Drive Campaign</strong> — Launched a targeted recruitment campaign across universities and professional networks, resulting in several new aspiring members.</li>
                  <li><strong>Basic Education Support — School Supply Drive</strong> — Collected and distributed exercise books, pens, and other learning materials to under-resourced primary schools in Lilongwe.</li>
                  <li><strong>Community Clean-Up Exercise</strong> — Members volunteered in a community clean-up campaign in Area 25, Lilongwe, promoting environmental sustainability.</li>
                  <li><strong>Professional Development: Public Speaking Workshop</strong> — A workshop focused on building confidence and public speaking skills for members.</li>
                </ul>

                <h3>Quarter 2 (October - December 2025)</h3>
                <ul class="activity-list">
                  <li><strong>Tree Planting Campaign</strong> — In partnership with local environmental groups, the club planted over 200 trees in selected communities as part of environmental conservation efforts.</li>
                  <li><strong>International Service — Global Exchange Meetup</strong> — Held a virtual exchange session with Rotaract clubs from other districts to share service experiences and best practices.</li>
                  <li><strong>Economic Empowerment — Skills Training Workshop</strong> — Organised a financial literacy and small business management workshop for community members in partnership with a local microfinance institution.</li>
                  <li><strong>Rotary Youth Leadership Awards (RYLA) Preparation</strong> — Identified and prepared club members for participation in the District 9210 RYLA programme.</li>
                  <li><strong>Festive Season Charity Visit</strong> — Visited a local orphanage, donating food items, clothes, and toiletries to support children during the holiday season.</li>
                  <li><strong>Club Fellowship & Bonding Event</strong> — End-of-year fellowship to celebrate member contributions and strengthen team cohesion.</li>
                </ul>

                <h3>Quarter 3 (January - March 2026)</h3>
                <ul class="activity-list">
                  <li><strong>District 9210 RYLA Participation</strong> — Club members attended the Rotary Youth Leadership Awards, gaining intensive training in leadership, teamwork, and project management.</li>
                  <li><strong>Peacebuilding — Community Dialogue Session</strong> — Facilitated a peacebuilding dialogue in collaboration with a community-based organisation, addressing conflict resolution and social cohesion.</li>
                  <li><strong>Basic Education — School Mentorship Programme</strong> — Launched a mentorship initiative at a local secondary school, with members guiding students on career choices and personal development.</li>
                  <li><strong>Fundraising — Charity Car Wash</strong> — Organised a fundraising car wash event to generate funds for upcoming community service projects.</li>
                  <li><strong>International Women's Day Celebration</strong> — Partnered with other organisations to celebrate women in leadership and entrepreneurship.</li>
                  <li><strong>Professional Development — Career Planning Session</strong> — A session featuring guest speakers from various professions to guide members on career development.</li>
                </ul>

                <h3>Quarter 4 (April - June 2026)</h3>
                <ul class="activity-list">
                  <li><strong>Environmental — Plastic Waste Recycling Drive</strong> — Launched a plastic waste collection and recycling awareness campaign in partnership with a local recycling company.</li>
                  <li><strong>Community Service — Health Awareness Campaign</strong> — Organised a health talk on disease prevention and maternal health in collaboration with local health practitioners.</li>
                  <li><strong>Economic Development — Village Savings & Loans Training</strong> — Trained community members on village savings and loan schemes to promote financial inclusion.</li>
                  <li><strong>End-of-Year Review & Handover Preparation</strong> — Reviewed the year's achievements, documented lessons learned, and prepared for leadership transition.</li>
                  <li><strong>Annual General Meeting & Awards Ceremony</strong> — Recognised outstanding members, presented the annual report, and officially closed the Rotary year.</li>
                </ul>
              {:else if section.id === 'service'}
                <h2>Community Service Initiatives</h2>
                <p>The club undertook a series of impactful community service projects aligned with Rotary's Areas of Focus. Key projects included activities in Basic Education and Literacy, where members volunteered time and resources to support local schools, and Economic and Community Development initiatives aimed at empowering community members with practical skills.</p>
                <p>Environmental Sustainability remained a key priority, with the club organising clean-up campaigns and tree-planting exercises. Peacebuilding and Conflict Prevention activities were also integrated into club programming through partnerships with community-based organisations.</p>
                <h2>International Service</h2>
                <p>The club continued to foster international understanding through collaborative initiatives with Rotaract clubs across the district and beyond. These exchanges provided members with exposure to diverse cultures and service approaches, enriching the club's programming and broadening member perspectives.</p>
              {:else if section.id === 'leadership'}
                <h2>District 9210 RYLA Participation</h2>
                <p>The Rotaract Club of Lilongwe actively participated in the District 9210 Rotary Youth Leadership Awards (RYLA), a flagship leadership development programme. Members who attended gained valuable training in leadership, teamwork, and project management, reinforcing the club's commitment to developing the next generation of leaders.</p>
                <h2>Professional Development</h2>
                <p>Throughout the year, the club organised professional development sessions covering topics such as public speaking, financial literacy, and career planning. These sessions were well-attended and contributed to the personal and professional growth of members.</p>
              {:else if section.id === 'financial'}
                <h2>Revenue & Expenditure</h2>
                <p>The club maintained transparent financial records throughout the year, with all transactions audited in accordance with the club constitution. Funds were raised through membership dues, fundraising activities, and partnership contributions.</p>
                <p>Expenditure was directed primarily toward service projects, administrative costs, and leadership development activities. A detailed financial statement is available upon request from the club treasurer.</p>
              {:else if section.id === 'conclusion'}
                <h2>Looking Ahead</h2>
                <p>The {currentReport.year} Rotary year has been one of growth, service, and impact for the Rotaract Club of Lilongwe. With an active membership base, meaningful projects, and strong partnerships, the club is well-positioned for continued success.</p>
                <p>As we look ahead to the coming year, the club remains committed to uniting for good — expanding our reach, deepening our impact, and developing leaders who will make a difference in their communities and beyond.</p>
              {/if}
            </section>
          {/each}

          <div class="download-footer">
            <a class="btn-primary" href={downloadHref(currentReport)} download>
              <Download size={17} />
              Download Full Report (DOCX)
            </a>
          </div>
        </article>
      {/if}

    </div>
  </section>
</main>

<style>
  .report-page {
    background: var(--cream);
  }

  .report-hero {
    position: relative;
    min-height: 60vh;
    overflow: hidden;
    background: var(--near-black);
    padding: 118px 5vw 76px;
    display: flex;
    align-items: flex-end;
  }

  .hero-photo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: right center;
    opacity: .12;
    transform: scale(1.08);
  }

  .hero-shade {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(26, 26, 26, .98) 0%, rgba(26, 26, 26, .84) 58%, rgba(26, 26, 26, .64) 100%),
      linear-gradient(0deg, rgba(26, 26, 26, .98) 0%, rgba(26, 26, 26, 0) 55%);
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    width: min(1180px, 100%);
    margin: 0 auto;
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
  .part-label,
  .document h2,
  .aside-card h2 {
    font-family: 'Anton', sans-serif;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  h1 {
    max-width: 860px;
    color: white;
    font-size: clamp(52px, 8vw, 104px);
    line-height: .9;
    margin-bottom: 28px;
  }

  h1 span {
    color: var(--primary);
  }

  .hero-inner p {
    max-width: 680px;
    color: rgba(255, 255, 255, .76);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 16px;
    line-height: 1.75;
  }

  /* Year filter */
  .year-filter {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 34px;
    background: white;
    border: 1px solid rgba(0, 0, 0, .06);
    border-radius: 4px;
    padding: 18px 24px;
    box-shadow: 0 4px 16px rgba(26, 26, 26, .06);
    grid-column: 1 / -1;
  }

  .filter-label {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 800;
    color: var(--near-black);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }

  .select-wrap {
    position: relative;
    min-width: 160px;
  }

  .select-wrap select {
    width: 100%;
    padding: 10px 36px 10px 16px;
    border: 1px solid rgba(0, 0, 0, .12);
    border-radius: 4px;
    background: var(--cream);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: var(--near-black);
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    outline: none;
  }

  .select-wrap select:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(232, 23, 93, .15);
  }

  .select-chevron {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(26, 26, 26, .4);
    pointer-events: none;
  }

  .document-section {
    padding: 86px 5vw 110px;
  }

  .document-shell {
    width: min(1180px, 100%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr);
    gap: 34px;
    align-items: start;
  }

  .document-aside {
    position: sticky;
    top: 92px;
  }

  .aside-card {
    background: var(--near-black);
    color: white;
    border-radius: 4px;
    padding: 26px;
  }

  .aside-card h2 {
    font-size: 28px;
    margin: 18px 0 22px;
  }

  .aside-card a {
    display: block;
    padding: 12px 0;
    border-top: 1px solid rgba(255, 255, 255, .12);
    color: rgba(255, 255, 255, .7);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 800;
    text-decoration: none;
  }

  .aside-card a:hover {
    color: white;
  }

  .document {
    background: white;
    border: 1px solid rgba(0, 0, 0, .06);
    border-radius: 4px;
    padding: clamp(30px, 5vw, 62px);
    box-shadow: 0 18px 60px rgba(26, 26, 26, .08);
  }

  .document-part + .document-part {
    border-top: 1px solid rgba(0, 0, 0, .08);
    margin-top: 54px;
    padding-top: 54px;
  }

  .part-label {
    color: var(--primary);
    font-size: clamp(38px, 6vw, 68px);
    line-height: .95;
    margin-bottom: 34px;
  }

  .document h2 {
    color: var(--near-black);
    font-size: clamp(24px, 3vw, 34px);
    line-height: 1.05;
    margin: 38px 0 14px;
  }

  .document h3 {
    color: var(--near-black);
    font-family: 'Anton', sans-serif;
    font-size: clamp(18px, 2vw, 22px);
    line-height: 1.15;
    margin: 32px 0 12px;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .document p,
  .document li {
    color: rgba(26, 26, 26, .74);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 15px;
    line-height: 1.82;
  }

  .document p + p {
    margin-top: 14px;
  }

  ol.member-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 18px;
    margin: 16px 0 0 22px;
    padding-left: 18px;
  }

  ol.member-list li {
    break-inside: avoid;
  }

  ul.activity-list {
    display: grid;
    gap: 12px;
    margin: 16px 0 24px;
    padding-left: 22px;
    list-style: disc;
  }

  ul.activity-list li {
    padding-left: 4px;
  }

  ul.activity-list li::marker {
    color: var(--primary);
  }

  .download-footer {
    margin-top: 48px;
    padding-top: 32px;
    border-top: 1px solid rgba(0, 0, 0, .08);
    display: flex;
    justify-content: center;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 48px;
    padding: 13px 28px;
    border-radius: 100px;
    background: var(--primary);
    color: white;
    box-shadow: 0 8px 32px rgba(232, 23, 93, .35);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
    transition: transform .2s ease, box-shadow .2s ease;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 920px) {
    .document-shell {
      grid-template-columns: 1fr;
    }

    .document-aside {
      position: static;
    }

    .aside-card {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 14px 22px;
    }

    .aside-card h2 {
      margin: 0;
    }

    .aside-card a {
      border-top: 0;
      padding: 0;
    }

    ol.member-list {
      grid-template-columns: 1fr;
    }

    .year-filter {
      grid-column: 1;
    }
  }

  @media (max-width: 680px) {
    .report-hero {
      min-height: auto;
      padding: 104px 5vw 64px;
    }

    .document-section {
      padding: 58px 5vw 78px;
    }

    .btn-primary {
      width: 100%;
    }

    .document {
      padding: 26px 20px;
    }

    .year-filter {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }

    .select-wrap {
      min-width: unset;
    }
  }
</style>