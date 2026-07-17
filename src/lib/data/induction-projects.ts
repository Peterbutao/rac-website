export interface ProjectDetails {
  date?: string;
  venue?: string;
  time?: string;
  areaOfFocus?: string;
  objective?: string;
  fullDescription: string;
  fullImpact: string;
  highlights?: string[];
  challenges?: string;
  callToAction?: string;
  keyLearnings?: string[];
  awards?: string[];
  activities?: string[];
}

export interface Project {
  id: string;
  quarter: string;
  title: string;
  desc: string;
  impact: string;
  note?: string;
  images: string[];
  details: ProjectDetails;
}

export const projects: Project[] = [
  // ---------------- Q1: JULY – SEPTEMBER 2025 ----------------
  { id:"project-1", quarter:"Q1", title:"\u201COnce Upon a Book\u201D \u2014 Book Donation Drive",
    desc:"Twelve members gathered and donated over 500 children\u2019s books to the Life Leadership Academy, under the theme \u201CGrowing a World of Stories, One Awesome Book at a Time.\u201D",
    impact:"Strengthened the academy\u2019s library and reinforced grassroots literacy and educational access.",
    images:["/PROJECTS/onceuponabook-1.jpg","/PROJECTS/onceuponabook-2.jpg","/PROJECTS/onceuponabook-3.jpg","/PROJECTS/onceuponabook-4.jpg","/PROJECTS/onceuponabook-5.jpg"],
    details:{
      date:"Saturday, 13th September 2025",
      venue:"Life Leadership Academy (Donation Recipient) - Mtsiliza",
      time:"08:00 - 12:00 hrs",
      areaOfFocus:"Basic Education & Literacy",
      fullDescription:"The club organized a community-driven book donation initiative titled 'Once Upon a Book,' with the inspiring theme, 'Growing a World of Stories, One Awesome Book at a Time!' 12 Club Members gathered and donated over 500 children's books to the Life Leadership Academy. The project aimed to bolster the academy's library resources, foster a love for reading, and support the educational foundation of young, aspiring minds.",
      fullImpact:"The initiative successfully provided essential educational materials to a local institution, directly enhancing the learning environment and opportunities for students. It reinforced the club's commitment to improving literacy rates and educational access at a grassroots level."
    }
  },
  { id:"project-2", quarter:"Q1", title:"Financial Literacy Info Session",
    desc:"Guest speakers from the Rotary Club of Lingadzi led an interactive session on budgeting, saving, investing and debt management.",
    impact:"Over 25 young adults equipped with practical skills for informed financial decisions.",
    images:[
      "/PROJECTS/financiallit-1.jpg",
      "/PROJECTS/financiallit-2.jpg",
      "/PROJECTS/financiallit-3.jpg",
      "/PROJECTS/financiallit-4.jpg"
    ],
    details:{
      date:"Saturday, 28th September 2025",
      venue:"Crossroads Hotel, Off Kamuzu Procession Road",
      time:"14:00 - 16:00 hrs",
      areaOfFocus:"Community Economic Development",
      fullDescription:"Recognizing the critical need for financial acumen among youth, the club hosted an empowering information session on financial literacy. The event, led by esteemed guest speakers Rotarian Michelle Msolomba and Rotarian Yankho Likongwe from the Rotary Club of Lingadzi, delved into practical topics such as budgeting, saving, investing, and debt management. The interactive format allowed attendees to ask questions and engage in meaningful discussions about their financial futures.",
      fullImpact:"The session equipped over 25 young adults with crucial knowledge to make informed financial decisions, promoting economic self-sufficiency and long-term community resilience. The collaboration with the Rotary Club of Lingadzi strengthened inter-club relations and mentorship opportunities."
    }
  },
  { id:"project-3", quarter:"Q1", title:"Youth Coffee & Connect \u2014 World Mental Health Day",
    desc:"A collaboration with Mental Health Matters and Meeplemania Games created a safe space with wellbeing exercises, music, poetry, and talks from mental health professionals.",
    impact:"Reached over 50 young people with coping tools, resources, and a supportive network.",
    images:["/PROJECTS/youthcoffee-1.jpg","/PROJECTS/youthcoffee-2.jpg"],
    details:{
      date:"Saturday, 11th October 2025",
      venue:"Malawi Assemblies of God University",
      time:"14:00 \u2013 16:30 hrs",
      areaOfFocus:"Disease Prevention and Treatment",
      fullDescription:"In a powerful collaboration with Mental Health Matters and Meeplemania Games, the club co-hosted 'Youth Coffee & Connect,' a safe and engaging space to commemorate World Mental Health Day 2025. The event featured a diverse program including interactive wellbeing exercises, creative music and poetry sessions, insightful talks from mental health professionals, and practical exam preparation tips. The atmosphere was designed to be uplifting, reducing stigma and encouraging open conversations about mental health.",
      fullImpact:"The event successfully reached over 50 young individuals, providing them with coping mechanisms, resources, and a supportive network. It played a vital role in promoting mental wellness as a key component of personal and community development."
    }
  },
  { id:"project-4", quarter:"Q1", title:"Climate Justice Workshop",
    desc:"Delivered with the SEED Program Spire (Norway\u2013Malawi), pairing Malawian and Norwegian facilitators to connect global climate policy with local, on-the-ground realities.",
    impact:"Raised awareness among 22 members on the ethical dimensions of environmentalism.",
    images:[
      "/PROJECTS/climate-1.jpg",
      "/PROJECTS/climate-2.jpg",
      "/PROJECTS/climate-3.jpg",
      "/PROJECTS/climate-4.jpg"],
    details:{
      date:"Saturday, 12th October 2025",
      venue:"Crossroads Hotel, Off Kamuzu Procession Road",
      time:"14:00 \u2013 16:00 hrs",
      areaOfFocus:"Environment",
      fullDescription:"The club conducted an insightful workshop on the critical topic of Climate Justice. The session moved beyond traditional environmental discourse to explore the intersection of climate change and social equity, emphasizing how vulnerable communities bear the heaviest burden of environmental degradation. Through presentations and group discussions, participants explored ways to advocate for fair and inclusive climate policies and actions. The workshop was significantly enriched by an international partnership with the SEED Program Spire, a youth exchange initiative connecting Norway and Malawi. The facilitators were Funani Matemba (Malawi), Signd Randen Mtaley (Norway), and Akuzike Phiri (Malawi). This partnership provided a dual-country perspective, knowledge and experience sharing, and empowered local solutions.",
      fullImpact:"The workshop raised awareness among 22 members about the ethical dimensions of environmentalism, inspiring a more holistic and justice-oriented approach to the club's future environmental projects.",
      highlights:[
        "Dual-Country Perspective: Malawian and Norwegian facilitators created a dynamic dialogue highlighting the interconnectedness of the climate crisis",
        "Knowledge and Experience Sharing: Insights into international climate policy paired with local Malawian context",
        "Empowering Local Solutions: A model of climate justice based on mutual learning and respect"
      ]
    }
  },
//   { id:"project-5", quarter:"Q1", title:"Rotary Youth Leadership Awards (RYLA) 2025",
//     desc:"Fourteen members attended this four-day regional programme, themed \u201CUnite, Uplift & Unleash Potential,\u201D covering leadership, entrepreneurship, wellness and networking with peers from four countries.",
//     impact:"Members returned with sharpened leadership skills and a broader regional network.",
//     images:["/PROJECTS/projects-(9).jpg","/PROJECTS/projects-(10).jpg"],
//     details:{
//       date:"September 4\u20137, 2025",
//       venue:"Mufasa Eco Lodge, Mangochi, Malawi",
//       objective:"Leadership Development & District Engagement",
//       fullDescription:"The Rotaract Club of Lilongwe was proud to participate and send 14 of its most dedicated and promising members to this prestigious regional event. The intensive, four-day program themed 'Unite, Uplift & Unleash Potential' was designed to empower young leaders. Our members participated in leadership training focused on advanced communication, teamwork, and problem-solving skills; financial literacy and entrepreneurship sessions; health and wellness discussions; and team-building and networking activities including bonfires, talent nights, and outdoor excursions like boat cruises, which facilitated deep connections with young leaders from Malawi, Zambia, Zimbabwe, and Mozambique.",
//       fullImpact:"The attendees returned with enhanced leadership capabilities, a broader network, and a renewed sense of purpose. They are now integrating their learnings into club projects, thereby multiplying the impact of RYLA within our community.",
//       highlights:[
//         "Leadership Training: Advanced communication, teamwork, and problem-solving skills",
//         "Financial Literacy & Entrepreneurship: Fostering innovation and business acumen",
//         "Health and Wellness: Mental health and personal wellbeing discussions",
//         "Team-Building & Networking: Connections with leaders from 4 countries"
//       ]
//     }
//   },

  // ---------------- Q2: OCTOBER – DECEMBER 2025 ----------------
  { id:"project-6", quarter:"Q2", title:"End Polio Awareness Walk/Run",
    desc:"Rotaractors, Rotarians and community members walked and ran together to advocate for immunisation and educate the public on vaccination.",
    impact:"Strengthened community support for Rotary\u2019s mission to eradicate polio worldwide.",
    images:["/PROJECTS/endpolio-1.jpg","/PROJECTS/endpolio-2.jpg"],
    details:{
      date:"Saturday, 25th October 2025",
      venue:"From Build Africa to Kamuzu Central Roundabout & Back",
      time:"06:00am - 9:00am",
      areaOfFocus:"Disease Prevention and Treatment",
      fullDescription:"The club organized an End Polio Awareness Walk/Run to raise awareness about Polio and support global efforts towards its eradication. The event brought together Rotaractors, Rotarians, and community members who participated in the walk/run to advocate for immunization and educate the public on the importance of vaccination. The activity also highlighted Rotary's commitment to a polio-free world through awareness, advocacy, and community engagement.",
      fullImpact:"The activity raised awareness about polio prevention and the importance of vaccination. It encouraged community participation in the fight against polio and strengthened support for Rotary's mission to eradicate the disease worldwide."
    }
  },
  { id:"project-7", quarter:"Q2", title:"Job Hunting & CV Building Skills Info Session",
    desc:"Facilitated by Eveline Sibindi Van Dam of the Rotary Club of Lingadzi, covering CV writing, job applications and interview skills.",
    impact:"Boosted participants\u2019 confidence and readiness for a competitive job market.",
    images:[
      "/PROJECTS/jobcv-1.jpg",
      "/PROJECTS/jobcv-2.jpg",
      "/PROJECTS/jobcv-3.jpg",
      "/PROJECTS/jobcv-4.jpg"
    ],
    details:{
      date:"Sunday, 26th October 2025",
      venue:"Crossroads Hotel, Off Kamuzu Procession Road",
      time:"14:00 - 16:00 hrs",
      areaOfFocus:"Community Economic Development",
      fullDescription:"Recognizing the challenges many young people face in securing employment, the club organized a Job Hunting and CV Building Skills Session. The session was led by Eveline Sibindi Van Dam from the Rotary Club of Lingadzi with practical guidance on preparing professional CVs, writing effective job applications, and developing interview skills. Through interactive discussions and hands-on activities, participants gained valuable insights into the job search process and learned strategies to improve their employability in a competitive job market.",
      fullImpact:"The session provided participants with essential job-seeking skills, enhanced their confidence in pursuing employment opportunities, and empowered them to take meaningful steps toward economic independence and career development."
    }
  },
  { id:"project-8", quarter:"Q2", title:"Membership Induction",
    desc:"A formal ceremony welcoming new members into the Rotaract family, introducing the values, mission and structure of Rotary and Rotaract.",
    impact:"New members left with a clearer sense of belonging and commitment to service.",
    images:["/PROJECTS/memberinduction-1.jpg","/PROJECTS/memberinduction-2.jpg","/PROJECTS/memberinduction-3.jpg","/PROJECTS/memberinduction-4.jpg","/PROJECTS/memberinduction-5.jpg"],
    details:{
      date:"Saturday, 16th November 2025",
      venue:"Crossroads Hotel, Off Kamuzu Procession Road",
      time:"14:30 \u2013 16:30 hrs",
      objective:"Club Service & Administration",
      fullDescription:"Recognizing the importance of strengthening and sustaining the club, a Member Induction Ceremony was conducted to officially welcome new members into the Rotaract family. The session introduced inductees to the values, mission, and structure of Rotary and Rotaract, while highlighting the responsibilities and opportunities that come with membership. Through presentations and interactions with club leaders, the new members gained a deeper understanding of service, fellowship, leadership, and professional development.",
      fullImpact:"The induction strengthened the club by officially welcoming new active members. It enhanced their understanding of Rotary and Rotaract principles, inspired active participation in service projects, and raised a sense of belonging and commitment to the club's mission of service above self."
    }
  },
//   { id:"project-9", quarter:"Q2", title:"Fundraising Activity at Family Fun Day",
//     desc:"A resource mobilisation drive held during the Family Fun Day to sustain club projects and operations.",
//     impact:"Strengthened the club\u2019s financial capacity to run ongoing and future service projects.",
//     images:["/PROJECTS/projects-(17).jpg","/PROJECTS/projects-(18).jpg"],
//     details:{
//       date:"Saturday, 29 November 2025",
//       venue:"Crossroads Hotel, Off Kamuzu Procession Road",
//       time:"14:00 \u2013 16:00 hrs",
//       objective:"Club Resource Mobilization",
//       fullDescription:"The club conducted a successful fundraising initiative during the Family Fun Day. The purpose of this effort was to mobilize financial resources to strengthen and sustain the club's community projects and administrative functions.",
//       fullImpact:"The initiative successfully contributed towards resource mobilization for the club, strengthening its ability to implement ongoing and future service projects. It also enhanced community engagement and participation in supporting the club's mission."
//     }
//   },
  { id:"project-10", quarter:"Q2", title:"Operation Secret Santa",
    desc:"A festive fellowship event closing the calendar year with a Secret Santa gift exchange among members.",
    impact:"Boosted member morale, unity and a stronger sense of belonging.",
    images:["/PROJECTS/secretsanta-1.jpg","/PROJECTS/secretsanta-2.jpg","/PROJECTS/secretsanta-3.jpg","/PROJECTS/secretsanta-4.jpg","/PROJECTS/secretsanta-5.jpg","/PROJECTS/secretsanta-6.jpg"],
    details:{
      date:"Saturday, 20 December 2025",
      venue:"Pa Mthuzi Lounge, (Area 49)",
      time:"14:00 \u2013 16:00 hrs",
      objective:"Club Service & Member Engagement",
      fullDescription:"Operation Secret Santa was organized as a fellowship and member engagement event to strengthen relationships among club members and promote a spirit of unity, appreciation, and friendship. The main focus was to end the calendar year in the true Rotaract spirit\u2014United for Good and Full of Cheer\u2014while celebrating the collective achievements and memories shared throughout the year. Members participated in a Secret Santa gift exchange, creating a festive atmosphere that encouraged networking.",
      fullImpact:"The initiative had a highly positive impact on club unity by enhancing fellowship and strengthening interpersonal relationships among members. It promoted a sense of belonging and appreciation within the club, boosting member morale and engagement while contributing to a stronger, more united, and connected club community."
    }
  },

  // ---------------- Q3: JANUARY – MARCH 2026 ----------------
  { id:"project-11", quarter:"Q3", title:"Rotary Foundation Info Session",
    desc:"Rtn. Jay Chikoya walked members through the Foundation\u2019s mission, funding mechanisms and grant opportunities across Rotary\u2019s Areas of Focus.",
    impact:"Deepened members\u2019 understanding of how Foundation grants translate into community impact.",
    images:["/PROJECTS/infosession-1.jpg"],
    details:{
      date:"Saturday, 25th January 2026",
      venue:"Crossroads Hotel, Off Kamuzu Procession Road",
      time:"14:00 \u2013 16:00 hrs",
      objective:"Club Service & Rotary Foundation Education",
      fullDescription:"The Rotaract Club of Lilongwe conducted a Rotary Foundation Information Session aimed at enhancing members' understanding of The Rotary Foundation and its role in transforming contributions into sustainable community impact. The session was facilitated by Rtn. Jay Chikoya from the Rotary Club of Lilongwe, who provided an overview of the Foundation's mission, funding mechanisms, grant opportunities, and the various Areas of Focus supported through Rotary projects worldwide.",
      fullImpact:"Participants learned how Rotary Foundation grants are used to support community development initiatives, promote sustainable solutions to societal challenges, and empower Rotary and Rotaract clubs to implement impactful projects. The session also highlighted the importance of member contributions and engagement in advancing Rotary's humanitarian goals."
    }
  },
  { id:"project-12", quarter:"Q3", title:"Tree Planting Activities",
    desc:"In partnership with the Rotary Club of Lilongwe, members planted trees in selected primary schools and taught pupils about environmental stewardship.",
    impact:"Increased tree cover and raised climate-action awareness among learners.",
    images:["/PROJECTS/treeplanting-1.jpg","/PROJECTS/treeplanting-2.jpg","/PROJECTS/treeplanting-3.jpg","/PROJECTS/treeplanting-4.jpg","/PROJECTS/treeplanting-5.jpg","/PROJECTS/treeplanting-6.jpg"],
    details:{
      date:"6th, 10th, and 13th February 2026",
      venue:"Chidzingwe, Bwemba L.E.A, & Lilongwe Demonstration Primary Schools",
      time:"Morning Sessions",
      areaOfFocus:"Environment",
      fullDescription:"In collaboration with Rotary Club of Lilongwe, the Rotaract Club of Lilongwe conducted extensive tree planting activities in selected primary schools across the city. The initiative aimed to promote environmental conservation, increase tree cover, and encourage environmental responsibility among learners and surrounding communities. Members worked together to plant trees and educate pupils on the importance of protecting the environment.",
      fullImpact:"The project strengthened collaboration between Rotaractors and Rotarians while contributing to environmental sustainability through increased tree planting. It helped raise awareness among learners about climate action and environmental stewardship, promoted greener school environments, and supported long-term efforts to contest the effects of climate change within the community."
    }
  },
  { id:"project-13", quarter:"Q3", title:"Rotary Refresher Info Session",
    desc:"Facilitated by Rtn. Mvaiwa Chigaru and Rtn. Simon Musopole, revisiting Rotary\u2019s values, structure and avenues for service.",
    impact:"Renewed members\u2019 sense of purpose and leadership capacity.",
    images:["/PROJECTS/infosession.jpg"],
    details:{
      date:"22 February 2026",
      venue:"Crossroads Hotel, Off Kamuzu Procession Road",
      time:"14:00 \u2013 16:00 hrs",
      areaOfFocus:"Supporting Education & Leadership Development",
      fullDescription:"The Rotary Refresher Info Session was designed to strengthen members' understanding of Rotary, its values, structure, and avenues for service. The session was facilitated by Rtn. Mvaiwa Chigaru and Rtn. Simon Musopole from the Rotary Club of Lingadzi. It provided an excellent opportunity for members to reconnect with the fundamentals of Rotary, enhance their leadership knowledge, and deepen their commitment to community service.",
      fullImpact:"The session improved members' knowledge of Rotary and its Areas of Focus, strengthened their sense of purpose and belonging within the organization, and inspired greater participation in club activities and service projects. Members left the session with renewed interest, improved leadership capacity, and a stronger commitment to creating positive change in their communities."
    }
  },
  { id:"project-14", quarter:"Q3", title:"WASH Project \u2014 Chadza Health Centre",
    desc:"Donated bins, hand wash, gloves and other sanitation supplies to improve hygiene standards for patients and staff.",
    impact:"Reduced infection risk and improved conditions for safer healthcare delivery.",
    note:"Planned as an ongoing initiative \u2014 the club is now raising funds to address gaps in mattresses and sterilisation equipment at the facility.",
    images:[
      "/PROJECTS/chadzahealth-1.jpg",
      "/PROJECTS/chadzahealth-2.jpg",
      "/PROJECTS/chadzahealth-3.jpg",
      "/PROJECTS/chadzahealth-4.jpg"
    ],
    details:{
      date:"Saturday, 21st March 2026",
      venue:"Chadza Health Centre (Donation Site)",
      time:"14:00 \u2013 16:00 hrs",
      areaOfFocus:"Water Sanitation and Hygiene",
      fullDescription:"The Rotaract Club of Lilongwe conducted a WASH (Water, Sanitation and Hygiene) outreach activity aimed at supporting Chadza Health Centre through the donation of essential hygiene supplies. These included bins, hand wash, gloves, and other sanitation materials intended to improve hygiene standards within the facility. The initiative focused on promoting a cleaner and safer environment for both patients and healthcare workers.",
      fullImpact:"The WASH project created both immediate and long-term benefits that include improving hygiene conditions at Chadza Health Centre, reducing the risk of infection and disease transmission among patients and staff, and enhancing the visibility of Rotaract's commitment to community health and service. Overall, it contributed to safer healthcare delivery and supported the broader goal of community well-being.",
      callToAction:"Aside from helping the facility with WASH items, the Club noted that the Facility did not have adequate facilities \u2014 lack of mattresses and a sterilizer (they send their medical equipment to be sterilized at Mitindu Health Centre). The Club plans to raise funds towards helping and rectifying these noted challenges."
    }
  },

  // ---------------- Q4: APRIL – JUNE 2026 ----------------
  { id:"project-15", quarter:"Q4", title:"The Rotaract Trail Escape",
    desc:"A fellowship and fitness outing at Lilongwe Wildlife Centre and Kuwala Gardens, featuring a guided nature walk and social bonding.",
    impact:"Strengthened teamwork and club unity through outdoor recreation.",
    images:["/PROJECTS/trail-2.jpg","/PROJECTS/trail-4.jpg","/PROJECTS/trail-3.jpg","/PROJECTS/trail-1.jpg"],
    details:{
      date:"Saturday, 18th April 2026",
      venue:"Lilongwe Wildlife Centre and Kuwala Gardens, Lilongwe",
      time:"01:00pm - 5:00pm",
      objective:"Fellowship",
      fullDescription:"The Rotaract Club of Lilongwe organized the Rotaract Trail Escape, a fellowship and fitness activity held at Lilongwe Wildlife Centre and Kuwala Gardens. Members participated in a guided nature walk, providing an opportunity to relax, reconnect with nature, strengthen friendships, and promote meaningful conversations in a relaxed environment. The activity concluded with social bonding and networking at Kuwala Gardens.",
      fullImpact:"The activity boosted member engagement, strengthened teamwork and club unity, reduced stress through outdoor recreation, and encouraged stronger connections among members, contributing to a more motivated and consistent club."
    }
  },
  { id:"project-16", quarter:"Q4", title:"District 9210 \u2014 The Umodzi DISCON 2026",
    desc:"Rotaractors and Rotarians from Malawi, Zambia, Zimbabwe and Mozambique gathered under the theme \u201CUnite for Good\u201D for leadership development and celebration of service.",
    impact:"Club honoured with Best Performing Club in Malawi, Best Storytelling & Media, Best Social Media Presence, and individual awards for President Timothy Sikelo and IPP Violet Odala.",
    images:[
      "/PROJECTS/discon26-1.jpg",
      "/PROJECTS/discon26-2.jpg",
      "/PROJECTS/discon26-3.jpg",
      "/PROJECTS/discon26-4.jpg"
    ],
    details:{
      date:"29th April to 3rd May 2026",
      venue:"Sunbird Waterfront Salima, Malawi",
      time:"Full-day Sessions",
      areaOfFocus:"Leadership Development & District Engagement",
      fullDescription:"The District Conference (DISCON) 2026 brought together Rotaractors and Rotarians from Malawi, Zambia, Zimbabwe, and Mozambique under the theme 'Unite for Good' for leadership development, networking, learning, and celebration of outstanding service. One of the major lessons drawn from the conference was the importance of Service Above Self as a continuous commitment rather than a one-time activity. Participants were reminded that impactful service is achieved through consistency, collaboration, and intentional plans associated with Rotary's Areas of Focus.",
      fullImpact:"Participation in DISCON improved members' leadership and professional development, strengthened collaboration with other clubs across District 9210, and promoted the exchange of innovative service ideas. The recognition received reflects the club's commitment to excellence, effective communication, impactful service, and consistent performance.",
      keyLearnings:[
        "Leadership Development and Personal Growth: Effective leadership begins with self-discipline, emotional intelligence, and the ability to inspire others",
        "Community-Centered Solutions: Sustainable projects are designed with direct input from the communities they aim to serve",
        "Partnerships And Networking: Collaboration between clubs, districts, and external stakeholders strengthens project impact",
        "Innovation and Adaptability: Embrace new ideas, digital tools, and creative approaches to meet evolving community needs"
      ],
      awards:[
        "Best Storytelling & Media",
        "Best Social Media Presence",
        "Best Performing Club in Malawi",
        "Outstanding Leadership Award \u2013 President Timothy Sikelo",
        "Best Event Organizer Award \u2013 IPP Violet Odala"
      ]
    }
  },
  { id:"project-17", quarter:"Q4", title:"Rotary Youth Leadership Awards \u2014 RYLA MOZ 2026",
    desc:"Five delegates joined this four-day programme themed \u201CLearn, Lead, Impact,\u201D covering ethical leadership, personal finance and social innovation.",
    impact:"Members returned with new tools now being integrated into club projects.",
    images:[
        "/PROJECTS/ryla26-2.jpg",
        "/PROJECTS/ryla26-1.jpg"
    ],
    details:{
      date:"Sunday, 25th to 28th June 2026",
      venue:"Moringa Bay, Tete, Mozambique",
      time:"Full Day sessions",
      areaOfFocus:"Leadership Development",
      fullDescription:"The Rotaract Club of Lilongwe was proud to participate and send 5 Delegates of 11 Delegates who went to RYLA MOZ 2026 from Malawi. The intensive, four-day program themed 'Learn, Lead, Impact' was designed to empower young leaders. They covered essential trainings including Emotional Balance and Mental Health in Leadership, Ethics, Volunteering and Purpose Driven Leadership, Personal Finance and Financial Stability, Social Innovation and Technology, and Authentic Leadership: Turning Ideas into Results.",
      fullImpact:"The attendees returned with enhanced leadership capabilities, a broader network, and a renewed sense of purpose. They are now integrating their learnings into club projects, thereby multiplying the impact of RYLA within our community.",
      highlights:[
        "Emotional Balance and Mental Health in Leadership",
        "Ethics, Volunteering and Purpose Driven Leadership",
        "Personal Finance and Financial Stability",
        "Social Innovation and Technology: Creating Impact with Digital Tools",
        "Authentic Leadership: Turning Ideas into Results"
      ]
    }
  },
  { id:"project-18", quarter:"Q4", title:"Empowering Girls Through Reusable Pads & Menstrual Health Education",
    desc:"With the Mutisunge Initiative, selected girls were trained as peer educators in making reusable sanitary pads, to later train classmates at Mkwichi Secondary School.",
    impact:"Built practical vocational skills and a peer-learning model for lasting menstrual health support.",
    note:"Some peer educators needed more time to master the technique \u2014 highlighting the value of planned follow-up mentorship.",
    images:["/PROJECTS/reusablepads-2.jpg","/PROJECTS/reusablepads-1.jpg","/PROJECTS/reusablepads-3.jpg","/PROJECTS/reusablepads-4.jpg"],
    details:{
      date:"Saturday, 16th November 2025",
      venue:"Mkwichi Secondary School",
      time:"11:00am \u2013 14:00pm",
      areaOfFocus:"Basic Education and Literacy",
      fullDescription:"Representatives from the Mutisunge Initiative and members of the Rotaract Club of Lilongwe, including Faith, facilitated practical sewing training for selected girls to train them on how to make reusable sanitary pads. The participants were purposely selected to become peer educators who would later train other girls at Mkwichi Secondary School who were unable to attend the session. This peer-learning approach was adopted to promote sustainability by ensuring that the knowledge and practical skills gained would be shared with more learners, thereby extending the project's impact beyond the initial training while contributing to improved menstrual hygiene management and supporting girls' continued participation in education.",
      fullImpact:"The training enhanced the participants' practical sewing skills, increased their confidence, and exposed them to a valuable vocational skill that can contribute to future self-reliance and income-generating opportunities. By adopting a peer-learning approach, the project also promoted leadership, teamwork, and knowledge sharing among the learners, while strengthening the school's capacity to continue skills development even after the activity had concluded.",
      challenges:"Some of the selected girls found it difficult to clutch the sewing techniques within the limited training period. As these girls were expected to train their peers who were not present during the session, there were concerns that they might face difficulties effectively transferring the knowledge and practical skills they had learned. This highlighted the need for additional follow-up training and mentorship to ensure successful knowledge transfer to other learners."
    }
  },
  { id:"project-19", quarter:"Q4", title:"Game Day Fundraiser",
    desc:"With the Lilongwe Leo Club, a full day of board games, face painting, tug of war, karaoke and vendor stalls in support of Children of the Nations (COTN).",
    impact:"Raised funds for COTN while strengthening community relationships and youth engagement.",
    images:["/PROJECTS/gundayfundraiser-1.jpg","/PROJECTS/gundayfundraiser-4.jpg","/PROJECTS/gundayfundraiser-2.jpg","/PROJECTS/gundayfundraiser-3.jpg"],
    details:{
      date:"Saturday, 06th June 2026",
      venue:"YGK Garden, Area 6",
      time:"10:00 \u2013 16:00 hrs",
      objective:"Fundraising",
      fullDescription:"The Lilongwe Leo Club in collaboration with the Rotaract Club of Lilongwe successfully organized a Game Day Fundraiser aimed at mobilizing resources in support of Children of the Nations (COTN). The event brought together families, young people, and community members for a full day of recreational activities, entertainment, and meaningful social interaction, all centered on fundraising for a charitable cause.",
      fullImpact:"The activity successfully raised funds for Children of the Nations (COTN), strengthened community relationships, promoted youth engagement and leadership, and increased awareness on supporting vulnerable children. It also contributed to local economic activity through vendor participation, making the event both socially and economically beneficial.",
      activities:[
        "Board games",
        "Musical chairs",
        "Face painting",
        "Tug of war",
        "Karaoke",
        "Sack races",
        "Scavenger hunt",
        "Trivia games",
        "Vendor stalls",
        "Food sales"
      ]
    }
  },
  { id:"project-20", quarter:"Q4", title:"A Visit to Children of the Nations",
    desc:"Members donated food, school materials, toiletries and clothing for children aged 1\u201318, alongside interaction and motivational sessions.",
    impact:"Improved daily living conditions for the children and boosted their confidence and sense of belonging.",
    images:["/PROJECTS/childrenofthenation-4.jpg","/PROJECTS/childrenofthenation-3.jpg","/PROJECTS/childrenofthenation-2.jpg","/PROJECTS/childrenofthenation-1.jpg"],
    details:{
      date:"Saturday, 20 June 2026",
      venue:"Children of the Nations",
      time:"8:30am \u2013 12:00hrs",
      areaOfFocus:"Basic Education and Literacy",
      fullDescription:"The activity was conducted to strengthen child welfare and address basic developmental needs of vulnerable children. Key areas of focus included child protection and welfare, food security and nutrition, education support, hygiene and sanitation, as well as clothing and basic needs. Through this initiative, essential food items were provided to support daily nutritional requirements. Educational support was prioritized through the donation of school materials. In addition, hygiene and sanitation needs were addressed through the provision of toiletries, and dignity was supported by donating clothing for children aged 1 to 18 years.",
      fullImpact:"The children benefited through improved access to essential needs which contributed to better living and learning conditions. The interaction sessions and motivational talks helped to boost their emotional wellbeing, confidence, hope, and sense of belonging. For the organizing clubs, the activity strengthened awareness of the real-life challenges faced by vulnerable children and extended the commitment to community service. It also strengthened collaboration between Rotaract and Leo Clubs, enhancing their capacity to deliver impactful service projects.",
      activities:[
        "Donation and distribution of collected items",
        "Interaction and engagement sessions",
        "Motivational and awareness talks",
        "Strengthening of partnerships between the clubs and the beneficiary institution"
      ]
    }
  },
  { id:"project-21", quarter:"Q4", title:"RAC Website Launch",
    desc:"The club launched its official website \u2014 a digital platform for membership registration, project showcases, donations, partnerships, and the annual report.",
    impact:"Established the club\u2019s online presence, enabling global visibility, streamlined membership, and transparent reporting.",
    images:["/PROJECTS/weblaunch-1.png"],
    details:{
      date:"30 June 2026",
      areaOfFocus:"Digital Transformation & Public Image",
      fullDescription:"The Rotaract Club of Lilongwe officially launched its comprehensive website, built with SvelteKit and powered by Supabase. The platform serves as the club's central digital hub, featuring online membership registration with automated approval, a project showcase with photo galleries, a donation portal, partnership applications, volunteer sign-ups, attendance tracking, dues management, and an integrated activity management system. The website also hosts the club's constitution, annual reports, and the 11th Presidential Induction Affair project showcase. This digital transformation enhances the club's operational efficiency, transparency, and global reach.",
      fullImpact:"The website establishes a professional online presence for the Rotaract Club of Lilongwe, enabling streamlined member management, transparent financial reporting through the donations portal, enhanced community engagement through digital applications, and improved public image. It positions the club for greater visibility within District 9210 and the wider Rotary network, supporting long-term growth and impact."
    }
  },
];

export const quarterLabels: Record<string, string> = {
  Q1: "Quarter 1 \u00B7 July \u2013 September 2025",
  Q2: "Quarter 2 \u00B7 October \u2013 December 2025",
  Q3: "Quarter 3 \u00B7 January \u2013 March 2026",
  Q4: "Quarter 4 \u00B7 April \u2013 June 2026"
};

export const byQuarter: Record<string, Project[]> = { Q1: [], Q2: [], Q3: [], Q4: [] };
projects.forEach((p: Project) => byQuarter[p.quarter].push(p));