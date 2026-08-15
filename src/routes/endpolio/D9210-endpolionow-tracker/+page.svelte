<script>
  import { onMount } from 'svelte';
  import './tracker.css';
  import { createClient } from '$lib/supabase';

  const supabase = createClient();
  const DEVICE_KEY_STORAGE = "polioDeviceKey_v1";

  // ---------- DATA ----------
  // type: education | visual | awareness | campaign
  const DATA = [
  {
    id:"2026-09", label:"Sep 2026", title:"SEPTEMBER 2026: Understanding Polio & Immunization",
    newsletter:"Why Polio Still Matters in 2026",
    infographic:"Polio at a Glance — Transmission, Symptoms, Prevention",
    weeks:[
      {label:"Week 1 (7–13 Sep)", mon:{t:"Education: What is polio?",type:"education"}, wed:{t:"Did You Know? Polio can cause permanent paralysis.",type:"visual"}, fri:{t:"Awareness: Why polio prevention still matters.",type:"awareness"}},
      {label:"Week 2 (14–20 Sep)", mon:{t:"Education: How poliovirus spreads.",type:"education"}, wed:{t:"Poster: Common symptoms of polio.",type:"visual"}, fri:{t:"Myth vs Fact: Common misconceptions about polio.",type:"awareness"}},
      {label:"Week 3 (21–27 Sep)", mon:{t:"Polio History #1: Polio before vaccines.",type:"education"}, wed:{t:"Education: How polio vaccines work.",type:"education"}, fri:{t:"Story: Why every child needs protection.",type:"awareness"}},
      {label:"Week 4 (28 Sep–4 Oct)", mon:{t:"Did You Know? Many infections show no symptoms.",type:"visual"}, wed:{t:"Infographic: Polio at a glance.",type:"visual"}, fri:{t:"Awareness: Every child deserves protection.",type:"awareness"}}
    ]
  },
  {
    id:"2026-10", label:"Oct 2026", title:"OCTOBER 2026: World Polio Day — End Polio Now",
    newsletter:"World Polio Day Special — The Road to a Polio-Free World",
    infographic:"Polio Eradication — From 1988 to Today",
    campaignNote:"World Polio Day — 24 Oct. Biggest polio-focused campaign month.",
    weeks:[
      {label:"Week 1 (5–11 Oct)", mon:{t:"Polio History #2: Launch of GPEI in 1988.",type:"education"}, wed:{t:"Did You Know? Polio has been reduced by more than 99%.",type:"visual"}, fri:{t:"GPEI Explained: Who is involved?",type:"education"}},
      {label:"Week 2 (12–18 Oct)", mon:{t:"Education: What is polio surveillance?",type:"education"}, wed:{t:"Poster: Every child. Every dose. Every time.",type:"visual"}, fri:{t:"Interview: Frontline health worker.",type:"awareness"}},
      {label:"Week 3 (19–25 Oct)", mon:{t:"Countdown to World Polio Day.",type:"campaign"}, wed:{t:"Why World Polio Day matters.",type:"campaign"}, fri:{t:"24 OCT — WORLD POLIO DAY: Hero campaign post.",type:"campaign"}},
      {label:"Week 4 (26 Oct–1 Nov)", mon:{t:"World Polio Day recap.",type:"campaign"}, wed:{t:"Statistics: Global progress toward eradication.",type:"visual"}, fri:{t:"Call to action: What can you do to help end polio?",type:"awareness"}}
    ]
  },
  {
    id:"2026-11", label:"Nov 2026", title:"NOVEMBER 2026: Children, Communities & the Right to Health",
    newsletter:"Protecting Every Child — Immunization as a Right",
    infographic:"Children & Immunization — Why Every Dose Matters",
    campaignNote:"World Children's Day — 20 Nov.",
    weeks:[
      {label:"Week 1 (2–8 Nov)", mon:{t:"Education: Why children are the focus of eradication.",type:"education"}, wed:{t:"Did You Know? About polio transmission.",type:"visual"}, fri:{t:"Awareness: A healthy childhood begins with prevention.",type:"awareness"}},
      {label:"Week 2 (9–15 Nov)", mon:{t:"Polio History #3: Major eradication milestones.",type:"education"}, wed:{t:"Poster: The importance of community immunity.",type:"visual"}, fri:{t:"Interview: Parent/caregiver perspective.",type:"awareness"}},
      {label:"Week 3 (16–22 Nov)", mon:{t:"Education: Children's right to health.",type:"education"}, wed:{t:"20 NOV — WORLD CHILDREN'S DAY.",type:"campaign"}, fri:{t:"Story: A community protecting its children.",type:"awareness"}},
      {label:"Week 4 (23–29 Nov)", mon:{t:"Statistics: Children reached through immunization.",type:"visual"}, wed:{t:"Myth vs Fact: Vaccination misconceptions.",type:"awareness"}, fri:{t:"Quote: Child/health/protection themed quote.",type:"visual"}}
    ]
  },
  {
    id:"2026-12", label:"Dec 2026", title:"DECEMBER 2026: Polio Survivors, Disability & Inclusion",
    newsletter:"2026 Polio & Immunization Year in Review",
    infographic:"2026 — The Numbers That Tell the Story",
    weeks:[
      {label:"Week 1 (30 Nov–6 Dec)", mon:{t:"Education: Understanding polio paralysis.",type:"education"}, wed:{t:"Did You Know? About polio survivors.",type:"visual"}, fri:{t:"Awareness: Prevention and lifelong impact.",type:"awareness"}},
      {label:"Week 2 (7–13 Dec)", mon:{t:"Polio History #4: Major historical outbreaks.",type:"education"}, wed:{t:"Poster: Prevention is better than lifelong disability.",type:"visual"}, fri:{t:"Story: Life as a polio survivor.",type:"awareness"}},
      {label:"Week 3 (14–20 Dec)", mon:{t:"Education: Disability and inclusion.",type:"education"}, wed:{t:"Quote: Resilience and hope.",type:"visual"}, fri:{t:"Interview: Polio survivor/disability advocate.",type:"awareness"}},
      {label:"Week 4 (21–27 Dec)", mon:{t:"Awareness: Protect children during gatherings/travel.",type:"awareness"}, wed:{t:"Statistics: Year-to-date impact.",type:"visual"}, fri:{t:"Year-end message: Commitment to a polio-free world.",type:"campaign"}},
      {label:"Week 5 (28 Dec–3 Jan)", mon:{t:"2026 in Review: Major milestones.",type:"education"}, wed:{t:"Statistics: 2026 in numbers.",type:"visual"}, fri:{t:"2027 teaser: What comes next?",type:"awareness"}}
    ]
  },
  {
    id:"2027-01", label:"Jan 2027", title:"JANUARY 2027: A New Year, A Renewed Commitment",
    newsletter:"Surveillance — The Eyes and Ears of Polio Eradication",
    infographic:"How Polio Surveillance Works",
    weeks:[
      {label:"Week 1 (4–10 Jan)", mon:{t:"New Year message: A polio-free future.",type:"campaign"}, wed:{t:"Did You Know? Surveillance helps prevent outbreaks.",type:"visual"}, fri:{t:"Goal-setting: Reach every child.",type:"awareness"}},
      {label:"Week 2 (11–17 Jan)", mon:{t:"Education: What is polio surveillance?",type:"education"}, wed:{t:"Infographic teaser: Sample to laboratory confirmation.",type:"visual"}, fri:{t:"Behind the scenes: Surveillance teams.",type:"awareness"}},
      {label:"Week 3 (18–24 Jan)", mon:{t:"Polio History #5: Evolution of eradication strategies.",type:"education"}, wed:{t:"Statistics: Current global polio situation.",type:"visual"}, fri:{t:"Interview: Surveillance expert.",type:"awareness"}},
      {label:"Week 4 (25–31 Jan)", mon:{t:"Education: Why environmental surveillance matters.",type:"education"}, wed:{t:"Did You Know? Wastewater can detect poliovirus.",type:"visual"}, fri:{t:"Awareness: We cannot stop watching until polio stops circulating.",type:"awareness"}}
    ]
  },
  {
    id:"2027-02", label:"Feb 2027", title:"FEBRUARY 2027: The People Behind Polio Eradication",
    newsletter:"The People Behind the Fight to End Polio",
    infographic:"Everyone Has a Role in Polio Eradication",
    weeks:[
      {label:"Week 1 (1–7 Feb)", mon:{t:"Education: Who are frontline vaccinators?",type:"education"}, wed:{t:"Did You Know? How campaigns reach communities.",type:"visual"}, fri:{t:"Frontline worker story.",type:"awareness"}},
      {label:"Week 2 (8–14 Feb)", mon:{t:"Polio History #6: People who shaped eradication.",type:"education"}, wed:{t:"Quote: Leadership and commitment.",type:"visual"}, fri:{t:"High-level interview: GPEI partner.",type:"awareness"}},
      {label:"Week 3 (15–21 Feb)", mon:{t:"Education: Role of community leaders.",type:"education"}, wed:{t:"Poster: Trust saves lives.",type:"visual"}, fri:{t:"Community leader interview.",type:"awareness"}},
      {label:"Week 4 (22–28 Feb)", mon:{t:"Statistics: Campaign reach and vaccination coverage.",type:"visual"}, wed:{t:"Did You Know? Why missed children matter.",type:"visual"}, fri:{t:"Awareness: Reaching the last child.",type:"awareness"}}
    ]
  },
  {
    id:"2027-03", label:"Mar 2027", title:"MARCH 2027: Community Action & Vaccine Confidence",
    newsletter:"Building Vaccine Confidence in Communities",
    infographic:"The Immunization Gap — Who Are We Missing?",
    weeks:[
      {label:"Week 1 (1–7 Mar)", mon:{t:"Education: What is vaccine confidence?",type:"education"}, wed:{t:"Myth vs Fact: Common vaccine questions.",type:"awareness"}, fri:{t:"Community voice: Why I vaccinate.",type:"awareness"}},
      {label:"Week 2 (8–14 Mar)", mon:{t:"Polio History #7: Women in eradication.",type:"education"}, wed:{t:"Did You Know? Role of women health workers.",type:"visual"}, fri:{t:"Women frontline workers interview.",type:"awareness"}},
      {label:"Week 3 (15–21 Mar)", mon:{t:"Education: How communities can prevent outbreaks.",type:"education"}, wed:{t:"Poster: Ask. Learn. Vaccinate.",type:"visual"}, fri:{t:"Q&A: Ask a health professional.",type:"awareness"}},
      {label:"Week 4 (22–28 Mar)", mon:{t:"Statistics: Immunization coverage and missed children.",type:"visual"}, wed:{t:"Infographic: What happens when children miss vaccines?",type:"visual"}, fri:{t:"Awareness: Closing immunity gaps.",type:"awareness"}},
      {label:"Week 5 (29 Mar–4 Apr)", mon:{t:"History: Major eradication milestones.",type:"education"}, wed:{t:"Quote: Community action.",type:"visual"}, fri:{t:"Call to action: Prepare for Immunization Week.",type:"campaign"}}
    ]
  },
  {
    id:"2027-04", label:"Apr 2027", title:"APRIL 2027: Immunization for All — Major Campaign Month",
    newsletter:"World Immunization Week Special",
    infographic:"Vaccines Save Lives — The Power of Immunization",
    campaignNote:"World Health Day — 7 Apr · African Vaccination Week / World Immunization Week — 24–30 Apr. Biggest immunization campaign month.",
    weeks:[
      {label:"Week 1 (5–11 Apr)", mon:{t:"Education: Why immunization is a public health success story.",type:"education"}, wed:{t:"7 APR — WORLD HEALTH DAY.",type:"campaign"}, fri:{t:"Did You Know? How vaccines protect communities.",type:"visual"}},
      {label:"Week 2 (12–18 Apr)", mon:{t:"Polio History #8: The Expanded Programme on Immunization.",type:"education"}, wed:{t:"Poster: Vaccines work when everyone participates.",type:"visual"}, fri:{t:"Interview: Immunization programme expert.",type:"awareness"}},
      {label:"Week 3 (19–25 Apr)", mon:{t:"Countdown to World Immunization Week.",type:"campaign"}, wed:{t:"Infographic: Vaccines across the life course.",type:"visual"}, fri:{t:"World Immunization Week preview.",type:"campaign"}},
      {label:"Week 4 (26 Apr–2 May)", mon:{t:"WORLD IMMUNIZATION WEEK: Campaign post.",type:"campaign"}, wed:{t:"AFRICAN VACCINATION WEEK: Vaccination in Africa.",type:"campaign"}, fri:{t:"Campaign recap: Every child, every community.",type:"campaign"}}
    ]
  },
  {
    id:"2027-05", label:"May 2027", title:"MAY 2027: The Final Mile",
    newsletter:"The Final Mile — What Will It Take to End Polio?",
    infographic:"From Vaccination to Eradication",
    campaignNote:"Focus: eradication, sustainability, reaching every last child.",
    weeks:[
      {label:"Week 1 (3–9 May)", mon:{t:"Education: What does eradication mean?",type:"education"}, wed:{t:"Did You Know? Elimination vs eradication.",type:"visual"}, fri:{t:"Poster: Ending transmission protects generations.",type:"visual"}},
      {label:"Week 2 (10–16 May)", mon:{t:"Polio History #9: From first vaccines to eradication era.",type:"education"}, wed:{t:"Statistics: Progress toward a polio-free world.",type:"visual"}, fri:{t:"High-level interview: Where are we now?",type:"awareness"}},
      {label:"Week 3 (17–23 May)", mon:{t:"Education: Why the final mile is difficult.",type:"education"}, wed:{t:"Poster: We are close — but not finished.",type:"visual"}, fri:{t:"Story: Reaching the last child.",type:"awareness"}},
      {label:"Week 4 (24–30 May)", mon:{t:"Did You Know? Why vaccination must continue.",type:"visual"}, wed:{t:"Quote: The last child matters.",type:"visual"}, fri:{t:"Awareness: Keep immunity high.",type:"awareness"}}
    ]
  },
  {
    id:"2027-06", label:"Jun 2027", title:"JUNE 2027: Looking Forward — Impact, Learning & the Future",
    newsletter:"Looking Back, Moving Forward — The Road to a Polio-Free Future",
    infographic:"September 2026–June 2027 — Content & Impact in Numbers",
    weeks:[
      {label:"Week 1 (31 May–6 Jun)", mon:{t:"6-month review: What we have learned.",type:"education"}, wed:{t:"Statistics: September–June in numbers.",type:"visual"}, fri:{t:"Community appreciation: Thank you to everyone fighting polio.",type:"awareness"}},
      {label:"Week 2 (7–13 Jun)", mon:{t:"Polio History #10: The road ahead.",type:"education"}, wed:{t:"Did You Know? Eradication requires sustained commitment.",type:"visual"}, fri:{t:"Interview: Vision for a polio-free future.",type:"awareness"}},
      {label:"Week 3 (14–20 Jun)", mon:{t:"Education: What happens after eradication?",type:"education"}, wed:{t:"Poster: A polio-free world is a shared responsibility.",type:"visual"}, fri:{t:"Community story: Why the work must continue.",type:"awareness"}},
      {label:"Week 4 (21–27 Jun)", mon:{t:"Year-in-review: Key messages from the calendar.",type:"education"}, wed:{t:"Infographic: 10 months of polio & immunization advocacy.",type:"visual"}, fri:{t:"Audience poll: Which topics should we cover next?",type:"awareness"}},
      {label:"Week 5 (28 Jun–4 Jul)", mon:{t:"Did You Know? Final campaign facts.",type:"visual"}, wed:{t:"Quote: Hope and collective action.",type:"visual"}, fri:{t:"Closing message: From awareness to action.",type:"campaign"}}
    ]
  }
  ];

  // ---------- CAMPAIGN MOMENTS ----------
  const CAMPAIGN_EVENTS = [
    {
      title:"World Polio Day",
      date:"2026-10-24",
      endDate:null,
      desc:"October 2026 — biggest polio-focused campaign month."
    },
    {
      title:"World Children's Day",
      date:"2026-11-20",
      endDate:null,
      desc:"November 2026 — connect polio prevention with children's health and protection."
    },
    {
      title:"World Health Day",
      date:"2027-04-07",
      endDate:null,
      desc:"April 2027 — opens the biggest immunization/vaccine-confidence campaign month."
    },
    {
      title:"World Immunization Week",
      date:"2027-04-24",
      endDate:"2027-04-30",
      desc:"April 2027 — African Vaccination Week / World Immunization Week."
    },
    {
      title:"The Final Mile",
      date:"2027-05-01",
      endDate:"2027-05-31",
      desc:"May 2027 — focus on eradication, sustainability and reaching every last child."
    }
  ];

  // ---------- STATE ----------
  const STORAGE_KEY = "polioCalendarProgress_v1";
  let progress = {};
  let activeMonth = DATA[0].id;
  let activeFilter = "all";
  let searchTerm = "";

  function getDeviceKey(){
    try{
      let key = localStorage.getItem(DEVICE_KEY_STORAGE);
      if(!key){
        key = (typeof crypto !== "undefined" && crypto.randomUUID)
          ? crypto.randomUUID()
          : "device-" + Date.now() + "-" + Math.random().toString(36).slice(2);
        localStorage.setItem(DEVICE_KEY_STORAGE, key);
      }
      return key;
    }catch(e){
      return "local-only";
    }
  }

  function saveLocal(){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }catch(e){}
  }

  let persistTimer = null;
  function schedulePersist(){
    if(persistTimer) clearTimeout(persistTimer);
    persistTimer = setTimeout(persistToDb, 700);
  }

  async function persistToDb(){
    try{
      const { error } = await supabase
        .from("endpolio_progress")
        .upsert({ device_key: getDeviceKey(), progress, updated_at: new Date().toISOString() });
      if(error) console.warn("End Polio tracker: progress sync failed", error.message);
    }catch(e){
      /* offline or DB not configured — local progress still works */
    }
  }

  async function loadFromDb(){
    try{
      const { data, error } = await supabase
        .from("endpolio_progress")
        .select("progress")
        .eq("device_key", getDeviceKey())
        .maybeSingle();
      if(error) throw error;
      if(data && data.progress && typeof data.progress === "object"){
        progress = { ...progress, ...data.progress };
        saveLocal();
        render();
      }
    }catch(e){
      /* DB not set up yet — keep local-device progress */
    }
  }

  function saveProgress(){
    saveLocal();
    schedulePersist();
  }

  function allItems(){
    const items = [];
    DATA.forEach(m=>{
      m.weeks.forEach((w,wi)=>{
        ["mon","wed","fri"].forEach(day=>{
          const p = w[day];
          items.push({id:`${m.id}-w${wi}-${day}`, monthId:m.id, type:p.type, text:p.t});
        });
      });
      items.push({id:`${m.id}-newsletter`, monthId:m.id, type:"campaign", text:"Newsletter: "+m.newsletter});
      items.push({id:`${m.id}-infographic`, monthId:m.id, type:"visual", text:"Infographic: "+m.infographic});
    });
    return items;
  }

  function updateOverallProgress(){
    const items = allItems();
    const done = items.filter(i=>progress[i.id]).length;
    const pct = items.length ? Math.round((done/items.length)*100) : 0;
    document.getElementById("pctDone").innerHTML = pct+"%<span id=\"countDone\">"+done+" / "+items.length+" items</span>";
  }

  function monthDone(monthId){
    const items = allItems().filter(i=>i.monthId===monthId);
    const done = items.filter(i=>progress[i.id]).length;
    return {done, total: items.length};
  }

  function typeTag(type){
    const map = {
      education:{cls:"tag-education", label:"Education"},
      visual:{cls:"tag-visual", label:"Visual"},
      awareness:{cls:"tag-awareness", label:"Awareness"},
      campaign:{cls:"tag-campaign", label:"Campaign"}
    };
    const t = map[type] || map.education;
    return `<span class="tag ${t.cls}">${t.label}</span>`;
  }

  function matchesFilterAndSearch(type, text){
    if(activeFilter !== "all" && type !== activeFilter) return false;
    if(searchTerm && !text.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  }

  function orderedItems(){
    // full chronological order: weeks (mon/wed/fri) then newsletter + infographic per month
    const items = [];
    DATA.forEach(m=>{
      m.weeks.forEach((w,wi)=>{
        ["mon","wed","fri"].forEach(day=>{
          const p = w[day];
          items.push({id:`${m.id}-w${wi}-${day}`, monthId:m.id, monthLabel:m.label, type:p.type, text:p.t});
        });
      });
      items.push({id:`${m.id}-newsletter`, monthId:m.id, monthLabel:m.label, type:"campaign", text:"Newsletter: "+m.newsletter});
      items.push({id:`${m.id}-infographic`, monthId:m.id, monthLabel:m.label, type:"visual", text:"Infographic: "+m.infographic});
    });
    return items;
  }

  function nextGlobalItem(){
    return orderedItems().find(i=>!progress[i.id]) || null;
  }

  function renderCampaignMoments(){
    const wrap = document.getElementById("campaignList");
    if(!wrap) return;

    const today = new Date();
    today.setHours(0,0,0,0);

    const withMeta = CAMPAIGN_EVENTS.map(ev=>{
      const start = new Date(ev.date+"T00:00:00");
      const end = ev.endDate ? new Date(ev.endDate+"T00:00:00") : start;
      const isPast = end < today;
      const isOngoing = !isPast && start <= today && today <= end;
      const daysToStart = Math.ceil((start - today) / 86400000);
      return {...ev, start, end, isPast, isOngoing, daysToStart};
    });

    const upcoming = withMeta.filter(e=>!e.isPast);
    let nextId = null;
    if(upcoming.length){
      upcoming.sort((a,b)=> a.start - b.start);
      nextId = upcoming[0].date;
    }

    const dateFmt = (d)=> d.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});

    wrap.innerHTML = withMeta.map(ev=>{
      const isNext = ev.date === nextId;
      let cls = "ticket";
      if(ev.isPast) cls += " past";
      else if(ev.isOngoing) cls += " live";
      else if(isNext) cls += " next";

      let badge;
      if(ev.isPast) badge = `<span class="ticket-badge past">Completed</span>`;
      else if(ev.isOngoing) badge = `<span class="ticket-badge live">Happening now</span>`;
      else if(isNext) badge = `<span class="ticket-badge next">Up next</span>`;
      else badge = `<span class="ticket-badge upcoming">Planned</span>`;

      let countdown;
      if(ev.isPast){
        countdown = `Passed · ${dateFmt(ev.end)}`;
      } else if(ev.isOngoing){
        const daysLeft = Math.ceil((ev.end - today)/86400000);
        countdown = `${daysLeft} day${daysLeft===1?'':'s'} left`;
      } else {
        countdown = `Starts in ${ev.daysToStart} day${ev.daysToStart===1?'':'s'}`;
      }

      const dateLabel = ev.endDate
        ? `${dateFmt(ev.start)} – ${dateFmt(ev.end)}`
        : dateFmt(ev.start);

      const dayNum = ev.start.getDate();
      const monthName = ev.start.toLocaleDateString('en-GB',{month:'short'}).toUpperCase();

      return `<div class="${cls}">
        <div class="ticket-stub"><span class="num">${dayNum}</span><span class="unit">${monthName}</span></div>
        <div class="ticket-body">
          <div class="ticket-info">
            <div class="title">${ev.title}</div>
            <div class="date">${dateLabel}</div>
            <div class="desc">${ev.desc}</div>
          </div>
          <div class="ticket-side">${badge}<span class="countdown">${countdown}</span></div>
        </div>
      </div>`;
    }).join("");
  }

  function renderUpNext(){
    const wrap = document.getElementById("upNextBanner");
    if(!wrap) return;
    const next = nextGlobalItem();
    if(!next){
      wrap.innerHTML = `<div class="up-next all-done">
        <span class="un-flag">Done</span>
        <span class="un-text">Every post in the plan is checked off. Nice work.</span>
      </div>`;
      return;
    }
    wrap.innerHTML = `<div class="up-next" id="upNextClick" data-month="${next.monthId}" style="cursor:pointer">
      <span class="un-flag">Up next</span>
      <span class="un-text">${next.text}<span class="un-when">${next.monthLabel} — tap to open</span></span>
    </div>`;
    document.getElementById("upNextClick").addEventListener('click', ()=>{
      activeMonth = next.monthId;
      render();
    });
  }

  function renderDoseRow(){
    const wrap = document.getElementById("doseRow");
    if(!wrap) return;
    const firstIncomplete = DATA.find(m=>{
      const {done,total} = monthDone(m.id);
      return done < total;
    });
    const nextMonthId = firstIncomplete ? firstIncomplete.id : null;

    const segCount = DATA.length;

    wrap.innerHTML = DATA.map(m=>{
      const {done,total} = monthDone(m.id);
      const pct = total ? Math.round((done/total)*100) : 0;
      const isNext = m.id === nextMonthId;
      const isActive = m.id === activeMonth;
      return `<button class="dose-stamp ${isActive?'active':''} ${isNext?'next':''}" data-month="${m.id}" title="${m.label}: ${done}/${total} complete">
        <span class="seg-head"><span class="seg-name">${m.label.split(' ')[0]} ${m.label.split(' ')[1]}</span><span class="seg-val">${pct}%</span></span>
        <span class="seg-track"><span class="seg-fill" style="width:${pct}%"></span></span>
      </button>`;
    }).join("");

    wrap.style.setProperty('--seg-count', String(segCount));

    wrap.querySelectorAll('.dose-stamp').forEach(el=>{
      el.addEventListener('click', ()=>{
        activeMonth = el.dataset.month;
        render();
      });
    });
  }

  function renderTabs(){
    const wrap = document.getElementById("monthTabs");
    wrap.innerHTML = "";
    DATA.forEach(m=>{
      const {done,total} = monthDone(m.id);
      const btn = document.createElement("button");
      btn.className = "month-tab" + (m.id===activeMonth ? " active":"") + (done===total ? " complete":"");
      btn.innerHTML = `${m.label}<span class="mini-dot"></span>`;
      btn.title = `${done}/${total} complete`;
      btn.onclick = ()=>{ activeMonth = m.id; render(); };
      wrap.appendChild(btn);
    });
  }

  function dayCell(post, m, wi, day, nextItemId){
    const id = `${m.id}-w${wi}-${day}`;
    const visible = matchesFilterAndSearch(post.type, post.t);
    const checked = !!progress[id];
    const isNext = !checked && nextItemId === id;
    return `<label class="post-item ${checked?'done':''} ${isNext?'next-up':''} ${visible?'':'hidden'}" data-id="${id}">
      <input type="checkbox" ${checked?'checked':''}>
      <span class="stamp"></span>
      <span class="txt">${typeTag(post.type)}${post.t}</span>
    </label>`;
  }

  function renderMonth(){
    const m = DATA.find(x=>x.id===activeMonth);
    const container = document.getElementById("monthContainer");
    const {done,total} = monthDone(m.id);
    const next = nextGlobalItem();
    const nextItemId = next ? next.id : null;

    let rowsHtml = "";
    m.weeks.forEach((w,wi)=>{
      const weekNum = w.label.split(' (')[0];
      const rangeMatch = w.label.match(/\(([^)]+)\)/);
      const range = rangeMatch ? rangeMatch[1] : '';
      rowsHtml += `<tr>
        <td class="week-label">
          <span class="w-num">${weekNum}</span>
          <span class="w-range">${range}</span>
        </td>
        <td class="col-0">${dayCell(w.mon,m,wi,'mon',nextItemId)}</td>
        <td class="col-1">${dayCell(w.wed,m,wi,'wed',nextItemId)}</td>
        <td class="col-2">${dayCell(w.fri,m,wi,'fri',nextItemId)}</td>
      </tr>`;
    });

    const nlId = `${m.id}-newsletter`;
    const igId = `${m.id}-infographic`;
    const nlChecked = !!progress[nlId];
    const igChecked = !!progress[igId];
    const nlVisible = matchesFilterAndSearch("campaign", "Newsletter: "+m.newsletter);
    const igVisible = matchesFilterAndSearch("visual", "Infographic: "+m.infographic);
    const nlNext = !nlChecked && nextItemId === nlId;
    const igNext = !igChecked && nextItemId === igId;

    container.innerHTML = `
      <div class="month-card">
        <h2>${m.title}</h2>
        <div class="month-progress">${done} / ${total} items complete</div>
        ${m.campaignNote ? `<div class="campaign-note">${m.campaignNote}</div>` : ""}
        <table class="week-table">
          <thead><tr><th>Week</th><th>Monday</th><th>Wednesday</th><th>Friday</th></tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
        <div class="month-extra">
          <label class="post-item ${nlChecked?'done':''} ${nlNext?'next-up':''} ${nlVisible?'':'hidden'}" data-id="${nlId}">
            <input type="checkbox" ${nlChecked?'checked':''}>
            <span class="stamp"></span>
            <span class="txt"><span class="tag tag-campaign">Newsletter</span>${m.newsletter}</span>
          </label>
          <label class="post-item ${igChecked?'done':''} ${igNext?'next-up':''} ${igVisible?'':'hidden'}" data-id="${igId}">
            <input type="checkbox" ${igChecked?'checked':''}>
            <span class="stamp"></span>
            <span class="txt"><span class="tag tag-visual">Infographic</span>${m.infographic}</span>
          </label>
        </div>
      </div>
    `;

    container.querySelectorAll('input[type=checkbox]').forEach(cb=>{
      cb.addEventListener('change', (e)=>{
        const id = e.target.closest('.post-item').dataset.id;
        progress[id] = e.target.checked;
        saveProgress();
        render();
      });
    });
  }

  function render(){
    renderDoseRow();
    renderUpNext();
    renderTabs();
    renderMonth();
    updateOverallProgress();
    renderCampaignMoments();
  }

  onMount(()=>{
    try{ progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }catch(e){ progress = {}; }

    document.getElementById("searchBox").addEventListener("input",(e)=>{
      searchTerm = e.target.value;
      render();
    });

    document.querySelectorAll(".filter-chip").forEach(chip=>{
      chip.addEventListener("click",()=>{
        document.querySelectorAll(".filter-chip").forEach(c=>c.classList.remove("active"));
        chip.classList.add("active");
        activeFilter = chip.dataset.filter;
        render();
      });
    });

    render();
    loadFromDb();
  });
</script>

<svelte:head>
  <title>Polio & Immunization Facebook Content Calendar — Tracker</title>
</svelte:head>

<div class="polio-tracker">
  <header>
    <div class="inner">
      <p class="eyebrow">Content Calendar <b>·</b> Sep 2026 – Jun 2027</p>
      <h1>Polio &amp; <span class="accent">Immunization</span> Campaign Tracker</h1>
      <p class="sub">Every Child. Every Dose. Every Community. A Polio-Free Future.</p>
      <div class="goal-row">
        <div class="goal-chip"><span class="n">2–3×</span>posts / week</div>
        <div class="goal-chip"><span class="n">1×</span>newsletter / month</div>
        <div class="goal-chip"><span class="n">1×</span>infographic / month</div>
      </div>
    </div>
  </header>

  <div class="container">


    <div class="record-card">
      <div class="rc-top">
        <span class="rc-title">Overall progress — tap a month to jump there</span>
        <span class="rc-pct" id="pctDone">0%<span id="countDone">0 / 0 items</span></span>
      </div>
      <div class="dose-row" id="doseRow" style="--seg-count: 10"></div>
    </div>


    <div class="controls">
      <input type="text" class="search" id="searchBox" placeholder="Search a post, theme or keyword…">
      <button class="filter-chip active" data-filter="all">All types</button>
      <button class="filter-chip" data-filter="education">Education</button>
      <button class="filter-chip" data-filter="visual">Visual / Poster / Infographic</button>
      <button class="filter-chip" data-filter="awareness">Awareness / Story / Interview</button>
      <button class="filter-chip" data-filter="campaign">Campaign day</button>
    </div>

    <div id="upNextBanner"></div>

    <div class="month-tabs" id="monthTabs"></div>

    <div id="monthContainer"></div>

    <div class="campaign-panel">
      <h3>Major Campaign Moments</h3>
      <div class="campaign-list" id="campaignList"></div>
    </div>


  </div>
</div>