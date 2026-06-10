<script>
  import logo from '$lib/assets/logo.png';
  import { ArrowLeft, Download, FileText } from 'lucide-svelte';

  const downloadHref = '/documents/rotaract-club-of-lilongwe-constitution-and-by-laws.docx';
</script>

<svelte:head>
  <title>Club Constitution - Rotaract Club of Lilongwe</title>
  <meta
    name="description"
    content="Read the Constitution and By-Laws of the Rotaract Club of Lilongwe."
  />
</svelte:head>

<main class="constitution-page">
  <section class="constitution-hero">
    <img class="hero-photo" src={logo} alt="Rotaract Club of Lilongwe logo" />
    <div class="hero-shade"></div>
    <div class="hero-inner">
      <a class="back-link" href="/about"><ArrowLeft size={16} /> About the club</a>
      <div class="section-pill dark">CLUB GOVERNANCE</div>
      <h1>CONSTITUTION<br /><span>&amp; BY-LAWS</span></h1>
      <p>
        The governing constitution and by-laws of the Rotaract Club of Lilongwe, including membership,
        meetings, officers, committees, fees, and amendment procedures.
      </p>
      <div class="hero-actions">
        <a class="btn-primary" href={downloadHref} download>
          <Download size={17} />
          Download DOCX
        </a>
      </div>
    </div>
  </section>

  <section class="document-section">
    <div class="document-shell">
      <aside class="document-aside" aria-label="Document sections">
        <div class="aside-card">
          <FileText size={24} />
          <h2>Document</h2>
          <a href="#constitution">Constitution</a>
          <a href="#by-laws">By-Laws</a>
          <a href={downloadHref} download>Download original</a>
        </div>
      </aside>

      <article class="document" aria-label="Rotaract Club of Lilongwe Constitution and By-Laws">
        <section id="constitution" class="document-part">
          <div class="part-label">CONSTITUTION</div>

          <h2>ARTICLE I - Name</h2>
          <p>The name of this organization shall be the Rotaract Club of Lilongwe.</p>

          <h2>ARTICLE II - Purpose and Goals</h2>
          <p>
            The purpose of Rotaract is to provide an opportunity for young men and women to enhance
            the knowledge and skills that will assist them in personal development, to address the
            physical and social needs of their communities, and to promote better relations between
            all people worldwide through a framework of friendship and service.
          </p>
          <p>The goals of Rotaract are:</p>
          <ol>
            <li>To develop professional and leadership skills.</li>
            <li>
              To emphasize respect for the rights of others, and to promote ethical standards and the
              dignity of all useful occupations.
            </li>
            <li>
              To provide opportunities for young people to address the needs and concerns of the
              community and our world.
            </li>
            <li>To provide opportunities for working in cooperation with sponsoring Rotary clubs.</li>
            <li>To motivate young people for eventual membership in Rotary.</li>
          </ol>

          <h2>ARTICLE III - Sponsorship</h2>
          <p>
            The sponsor and partner of this Rotaract club is the Rotary Club of Lilongwe which,
            through a committee of its Rotarians, the number of which shall be decided by the club,
            shall provide guidance and have supportive responsibility for this Rotaract club. The
            continued well-being of this club shall depend on the continued active personal
            participation of the sponsoring Rotary club.
          </p>
          <p>
            The basis of organization shall be young men and women living, employed, or studying
            anywhere in the vicinity of the sponsoring Rotary club. Within the vicinity of the
            sponsoring Rotary club. This club is not a part of, and neither this club nor its members
            have any rights or privileges with respect to, the sponsoring Rotary club.
          </p>
          <p>This club is a non-political, non-sectarian organization.</p>
          <p>
            In the event that the sponsoring Rotary club is terminated, the governor of the Rotary
            district will seek to install another sponsoring Rotary club; if one cannot be found within
            180 days, the Rotaract club will be terminated.
          </p>

          <h2>ARTICLE IV - Membership</h2>
          <p>
            The membership of this club shall consist of young men and women of good character and
            leadership potential between the ages of 18 and above.
          </p>
          <p>The method of electing members of this club shall be determined by this club.</p>
          <p>
            Each member of this Rotaract club shall attend at least 75% of the club's regularly
            scheduled meetings and activities annually, provided that absence from a regularly scheduled
            meeting of the club may be made up as follows: any member absent from a regular meeting of
            this club may make up such absence by attendance at a regular meeting of any other Rotaract
            club or any Rotary club on any day of the two weeks immediately preceding or following the
            day of the absence, or attendance and participation in a club service project or a
            club-sponsored community event or meeting authorized by the board.
          </p>
          <p>
            All Rotary Foundation scholars, who are within the age guidelines adopted by the board for
            the Rotaract program, shall be eligible for guest Rotaract club membership during the
            period of their study in another country.
          </p>
          <p>
            Membership shall automatically terminate (a) upon failure to meet attendance requirements
            unless excused by the board of directors of this club for good and sufficient reason or (b)
            by termination of the club or (c) by fulfilling the obligation to pay club membership dues
            and being reminded by the Club treasurer three consecutive times.
          </p>
          <p>
            Membership may be terminated (a) upon failure to continue to meet the qualifications for
            membership, or (b) for cause, as determined by this club by vote of not less than 2/3 of
            all the members in good standing.
          </p>

          <h2>ARTICLE V - Meetings</h2>
          <p>
            The club shall meet not less than twice per month, as provided in the by-laws, at a time
            and place suited to the convenience of the members.
          </p>
          <p>The board of directors shall meet as provided by the by-laws.</p>
          <p>
            Rotary International recommends each sponsoring Rotary club to designate one or more
            members of its club to attend the meeting(s) of its Rotaract club(s) at least once a month.
          </p>
          <p>
            Meetings of the club and of the board of directors may be cancelled during holiday or
            vacation periods at the discretion of the board of directors. The board may cancel a
            regular meeting if it falls on a legal holiday or in case of the death of a club member, an
            epidemic, a disaster affecting the whole community, or an armed conflict in the community
            that endangers the lives of the club members. The board may cancel not more than four
            regular meetings in a year for causes not otherwise specified herein provided that this
            club does not fail to meet for more than three consecutive meetings.
          </p>

          <h2>ARTICLE VI - Officers and Directors</h2>
          <p>
            The officers of this club shall be a president, immediate past president, secretary,
            treasurer, sergeant at arms and such additional officer(s) as may be provided in the
            by-laws.
          </p>
          <p>
            The governing body of this club shall be a board of directors composed of the president,
            immediate past president, secretary, treasurer, sergeant at arms and additional directors
            whose number shall be determined by this club, all to be elected from among the members in
            good standing. All decisions, policies, and actions of the board and of the club shall be
            subject to the provisions of this constitution and policy established by Rotary
            International and its members. The board of directors have general control over all
            officers and committees and may, for good reason, declare any office vacancy. It shall
            constitute a board of appeals from the rulings of all officers and actions of all
            committees.
          </p>
          <p>
            Election of the president nominee shall be held annually prior before the 30th of November
            by methods compatible with local customs and procedures, but in no case shall more than
            simple majority of the members present and in good standing be required for elections. The
            term of office of presidency shall be one year. No provisions shall be made for a term of
            office shorter than one year.
          </p>
          <p>
            All incoming Rotaract club officers, directors, and committee chairs shall be provided with
            leadership training from the district Rotaract committee* in conjunction with the RI
            district Rotaract committee.
          </p>

          <h2>ARTICLE VII - Activities and projects</h2>
          <p>
            Within the limits prescribed in Section 1 of Article III, this club shall be responsible
            for planning, organizing, financing, and conducting its own activities and shall itself
            supply money, manpower, and creative imagination necessary thereto, except in the case of
            joint projects or activities undertaken in cooperation with other organizations, such
            responsibility shall be shared with such other organization(s).
          </p>
          <p>
            This club shall undertake among its activities at least two major service projects annually,
            one to serve the community and the other to promote international understanding, and each
            shall involve all or most of the members of the club.
          </p>
          <p>This club shall provide for a professional development program for its members.</p>
          <p>
            It is the responsibility of the club to raise the funds necessary to conduct its program.
            It shall not solicit or accept more than occasional or incidental financial assistance from
            the sponsoring Rotary club, nor shall it make general solicitation from Rotary clubs other
            than its sponsoring Rotary club or from other Rotaract clubs; nor shall it solicit
            financial assistance from individuals, businesses, or organizations in the community
            without giving something of value in return. All funds raised for service projects must be
            expended for that purpose.
          </p>

          <h2>ARTICLE VIII - Committees</h2>
          <p>
            They shall be provided in the by-laws of this club with the following standing committees;
            club service, international service, community service, professional &amp; leadership
            development, fundraising, public relations, the rotary foundation and such other standing
            committees as may be deemed necessary or convenient for the administration of the club.
          </p>
          <p>
            The president, with the approval of the board, may appoint such special committees as
            he/she may deem necessary, citing their duties at the time of appointment. All such special
            committees shall lapse upon the completion of their duties, upon discharge by the
            appointing president, or with the end of his/her term of office, whichever occurs first.
          </p>

          <h2>ARTICLE XI - Fees</h2>
          <p>
            Any fees, dues, or assessments on the membership of the club shall be nominal and shall
            only be for the purpose of meeting the administrative costs of the club. Funds for
            activities and projects undertaken by the club shall be raised apart from such fees, dues,
            or assessments and shall be placed into a separate account. A thorough audit by a qualified
            person shall be made once each year of all the club's financial transactions.
          </p>

          <h2>ARTICLE X - Acceptance of Constitution and By-Laws</h2>
          <p>
            Every member of the club, by acceptance of membership, thereby accepts the principles of
            Rotaract as expressed in its purpose and goals and agrees to comply with the constitution
            and by-laws of this club, and on these conditions alone is entitled to the privileges of
            the club. No member shall be absolved from the observance of the Constitution and By-Laws
            on the plea that a copy of them has not been received.
          </p>

          <h2>ARTICLE XI - Standard By-Laws</h2>
          <p>
            The club shall adopt the "Standard Rotaract Club By-Laws," together with such amendments as
            are not inconsistent with this constitution and which may be deemed necessary or convenient
            for the government of the club, provided that such amendments are adopted in accordance
            with the amendment procedure prescribed in the "Standard Rotaract Club By-Laws."
          </p>

          <h2>ARTICLE XII - Rotaract Emblem</h2>
          <p>
            The Rotaract emblem shall be preserved for the exclusive use and benefit of Rotaract club
            members. Each member of this club shall be entitled to wear or otherwise display the
            Rotaract emblem in a dignified and appropriate manner during the period of membership. Such
            entitlement shall be relinquished upon termination of membership or termination of this
            club.
          </p>
          <p>
            When displayed by individual club members, the emblem may be used without further
            information. When the emblem is used to represent a club, the name of the club should
            appear with the emblem.
          </p>

          <h2>ARTICLE XIII - Duration</h2>
          <p>
            This club shall exist so long as it continues to function in accordance with the provisions
            of this constitution and policy relating to Rotaract established by Rotary International,
            or until it is terminated (a) by this club upon its own determination and action, (b) by
            the sponsoring Rotary club upon withdrawal of its sponsorship, after consultation with the
            district governor and district Rotaract representative, or (c) by Rotary International for
            failure to function in accordance with this constitution or for other cause. Upon
            termination of this club, all rights and privileges relating to the Rotaract name and
            emblem shall be relinquished by the club and by its members individually and collectively.
            The Rotaract club shall relinquish all financial assets to the sponsoring Rotary club.
          </p>

          <h2>ARTICLE XIV - Administration</h2>
          <p>
            The constitution may be amended only by the Board of Directors of the Club and all
            amendments to the "Standard Rotaract Club Constitution" adopted by the Board of Directors
            shall automatically amend the Constitution.
          </p>
        </section>

        <section id="by-laws" class="document-part">
          <div class="part-label">BY-LAWS</div>
          <p class="intro">By-Laws of the Rotaract Club of Lilongwe.</p>

          <h2>ARTCLE I - Elections</h2>
          <p>
            Election for the office of the President Nominee shall be held annually prior before 30
            November. A Rotaract club year is the same as a Rotary club year. Those elected shall take
            office on 1 July.
          </p>
          <p>
            Nominations shall be made in writing. Candidates shall be voted upon at the regular meeting
            following the meeting at which nominations are made. Voting shall be by secret ballot.
            Those candidates receiving a majority of the votes of the members present and in good
            standing shall be elected.
          </p>
          <p>
            In addition, the Incoming President which is the President shall choose and appoint his/her
            officers and committee directors prior to 1 march.
          </p>

          <h2>ARTICLE II - Duties of Officers</h2>
          <p>
            <strong>President.</strong> The president shall preside at all regular and special meetings
            of the club and the board of directors. He / She shall, with the approval of the board,
            appoint all standing and special committees and, in the event of a vacancy in the board of
            directors, shall, with the approval of the board, fill such vacancy by appointment until
            the next regular election of the club. He / She shall be an ex officio member of all
            committees. He shall maintain communication with the sponsor club and the district Rotaract
            representative to ensure they are continually informed of all actions taken by the club.
          </p>
          <p>
            <strong>Secretary.</strong> The secretary shall maintain all club records; He / She shall
            keep minutes of all the meetings of the club and board of directors and provide copies of
            such to the chair of the sponsor Rotary club's New generations committee.
          </p>
          <p>
            <strong>Treasurer.</strong> The treasurer shall have custody of all club funds, maintaining
            all necessary records and depositing all such funds in a bank approved by the board of
            directors. He shall report on the club's financial status at each meeting of the club and
            shall hold all records available for inspection by any club member. All disbursements shall
            be by check and with the signature of two authorized officers.
          </p>
          <p>
            <strong>Sergeant-At-Arms.</strong> The sergeant At Arms shall maintain order and decorum
            during meetings and events, assisting in the setup and organization of club meetings and
            events, ensuring timely start and smooth flow of meetings, upholding club traditions,
            flags, banners and equipment. Support in ushering guests and introducing visitors.
          </p>
          <p>
            <strong>IPP/Advisor.</strong> The Immediate Past President shall ensure continuity,
            stability and mentorship helping the new leadership succeed while staying engaged as a
            trusted advisor. He / She shall preside at all regular and special meetings of the club and
            the board of directors if the President is in absence.
          </p>

          <h2>ARTICLE III - Meetings</h2>
          <p>
            Meetings of the club shall be not less than twice a month, and meetings of the board not
            less than once a month, at a time and place suited to the convenience of the membership.
          </p>
          <p>
            A majority of the members (5) in good standing shall constitute a quorum at any regular or
            special meetings of the club. A quorum for any meeting of the board shall be any four
            members, one of whom shall be the president, secretary or immediate past president.
          </p>

          <h2>ARTICLE IV - Fees and Dues</h2>
          <p>
            Admission for the new members shall be subject to a 50% payment of the annual accrued fees
            of a Rotary Year being MK60,000.
          </p>
          <p>Monthly dues shall be Mk10,000 per member which adds up to MK120,000 for a Rotary year.</p>
          <p>
            All fees and dues must be paid before a member is considered in good standing. If a member
            fails to honor their monthly dues for over three months and the Treasurer reminded them to
            pay and do not act on such, their membership will be under review subject to termination.
          </p>
          <p>
            A member of the Club can never carry over dues amounting to over 50% to the other Rotary
            year or risk losing their membership status.
          </p>

          <h2>ARTICLE V - Membership</h2>
          <ol>
            <li>Get introduced by an Active/good standing member/Sponsor.</li>
            <li>Attend 3 meetings as a Guest/Aspiring Member to get the feel of the Club and what Rotary is all about.</li>
            <li>
              Submit a letter of intent/Application to the Club secretary and Club Service director
              for review. (The application letter should include your age, where you stay, why you are
              interested in joining the RAC Lilongwe family and what you do professionally as a person.)
            </li>
            <li>Call for nomination to be inducted by the Club Service director after review.</li>
            <li>Approval by the board to be Inducted into the Club.</li>
            <li>Fireside Chat - basically being orientated on what the club expects from you and etc.</li>
            <li>50% Membership fee to be paid before being officially inducted into the Club.</li>
            <li>
              Official membership Induction to take place with the attendance of the President, the
              Board members, Members in good standing and the Inductees relatives or close person's.
            </li>
          </ol>

          <h2>ARTICLE V - Committees</h2>
          <p>The president, with the approval of the board of directors, shall appoint the following standing committees:</p>
          <p>
            <strong>Club service.</strong> This committee shall be responsible for attendance,
            membership, programs, fellowship and such other matters as may be deemed appropriate.
          </p>
          <p>
            <strong>International service.</strong> This committee shall be charged with primary
            responsibility for enhancing knowledge and understanding of worldwide needs, problems, and
            opportunities and developing activities to give service for promoting international
            understanding and goodwill toward all people.
          </p>
          <p>
            <strong>Community service.</strong> This committee shall have responsibility for enhancing
            knowledge and understanding of community needs, problems and opportunities, and for
            formulating and developing appropriate activities for serving the community.
          </p>
          <p>
            <strong>Professional &amp; Leadership development.</strong> This committee shall be
            responsible for developing a program designed to provide information about a wide
            cross-section of businesses and professions and to stimulate awareness and acceptance of
            high ethical standards in business and professional life.
          </p>
          <p>
            <strong>Fundraising.</strong> This committee shall devise ways and means of financing any
            and all club activities requiring funds, in cooperation with the appropriate committee.
          </p>
          <p>
            <strong>Public Relations.</strong> This committee shall promote the club's activities
            through social media, posters, and press. Manage the club's online presence (Instagram,
            Facebook, LinkedIn, etc.). Create content (graphics, videos, write-ups) to highlight
            projects. Build relationships with media houses and community influencers. Ensure the
            club's branding aligns with Rotaract and Rotary standards.
          </p>
          <p>
            <strong>The Rotary Foundation.</strong> This committee shall educate members about The
            Rotary Foundation's mission and programs. Encourage members to contribute to TRF and
            participate in global efforts. Liaise with the sponsoring Rotary club regarding Foundation
            activities. Promote participation in global grants and Rotary's focus areas. Share stories
            and impacts of TRF-funded projects with the club.
          </p>
          <p>
            The international service and community service committees shall each have the duty of
            initiating and planning one major activity in its field each year which shall involve all
            or most of the club membership.
          </p>

          <h2>ARTICLE VI - Amendments</h2>
          <p>
            These by-laws may be amended by majority vote of the members in good standing at any
            regular or special meeting of the club at which a quorum is present, provided notice of
            intention to call such a vote is given at least fourteen days earlier at a meeting of the
            club at which a quorum is present.
          </p>
          <p>Nothing in these by-laws shall contravene any provision of this club's constitution.</p>
        </section>
      </article>
    </div>
  </section>
</main>

<style>
  .constitution-page {
    background: var(--cream);
  }

  .constitution-hero {
    position: relative;
    min-height: 66vh;
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

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, .72);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 800;
    text-decoration: none;
    margin-bottom: 28px;
  }

  .back-link:hover {
    color: white;
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

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 34px;
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

  .document .intro {
    color: rgba(26, 26, 26, .62);
    font-weight: 700;
  }

  .document ol {
    display: grid;
    gap: 10px;
    margin: 16px 0 0 22px;
    padding-left: 18px;
  }

  .document strong {
    color: var(--near-black);
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
  }

  @media (max-width: 680px) {
    .constitution-hero {
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
  }
</style>
