/**
 * English dictionary — also defines the shape every other language must satisfy.
 * Source of truth for facts: the official "AI Innovation Leaders Program" proposal (v2.0).
 * Organisation and credential names are intentionally kept in English in all languages.
 */
export const en = {
  meta: {
    title: "AI Innovation Leaders Program — Prolync in academic partnership with Altis",
    description:
      "An 8-week paid professional diploma and certification program in applied AI, soft skills and entrepreneurship for Education, Medicine and Agriculture.",
  },

  brand: {
    programName: "AI Innovation Leaders Program",
    prolync: "PROLYNC",
    partnership: "In Academic Partnership with Altis",
    prolyncLogoAlt: "Prolync logo",
    altisLogoAlt: "Altis Training Center logo",
  },

  common: {
    skipToContent: "Skip to main content",
    applyNow: "Apply now",
    startApplication: "Start your application",
    learnMore: "Learn more",
    viewCurriculum: "View full curriculum",
    viewAdmissions: "Admissions & tuition",
    menu: "Menu",
    closeMenu: "Close menu",
    language: "Language",
    week: "Week",
    weeks: "Weeks",
    deliverable: "Deliverable",
    youWillStudy: "What you will study",
    backToHome: "Back to home",
  },

  nav: {
    home: "Home",
    program: "Program",
    admissions: "Admissions & Tuition",
    apply: "Apply",
  },

  hero: {
    eyebrow: "Paid Professional Diploma & Certification Program",
    title: "AI Innovation Leaders Program",
    subtitle:
      "Eight weeks to turn applied AI, leadership and entrepreneurship into a real, tested project in your own classroom, clinic or farm.",
    sectorsLine: "For Education • Medicine • Agriculture",
    primaryCta: "Apply now",
    secondaryCta: "Explore the curriculum",
    facts: [
      { value: "8", label: "weeks, blended learning" },
      { value: "3", label: "focus sectors" },
      { value: "10", label: "participants max per sector track" },
      { value: "3", label: "working languages" },
    ],
    visualLabel: "Applied AI at the centre of three sectors: Education, Medicine and Agriculture",
    core: "Applied AI",
    cohortNote: "Pilot cohort of 20–30 participants",
  },

  snapshot: {
    eyebrow: "Program snapshot",
    title: "A diploma track built around a project that is actually used",
    items: [
      { label: "Program type", value: "Paid Professional Diploma & Certification Program" },
      { label: "Target sectors", value: "Education • Medicine (Healthcare) • Agriculture" },
      {
        label: "Core subjects",
        value: "Applied AI • Soft Skills • Entrepreneurship, taught within every sector track",
      },
      { label: "Duration", value: "8 weeks (blended learning)" },
      { label: "Cohort size", value: "20–30 participants (pilot), max 10 per sector track" },
      { label: "Credential", value: "AI Innovation Leader Diploma + 4-tier certification" },
      { label: "Language", value: "Arabic / French / English (blended)" },
    ],
  },

  why: {
    eyebrow: "Why this program",
    title: "AI is reshaping classrooms, clinics and farms. Most professionals have no practical way in.",
    intro:
      "Generic AI courses are either too technical for non-developers or too shallow to produce anything usable. This program closes the gap by combining three elements rarely offered together.",
    items: [
      {
        title: "Sector depth",
        text: "Content and case studies built specifically for classrooms, clinics and farms — not generic “AI 101” material.",
      },
      {
        title: "Applied outcome",
        text: "Every participant builds a real project, not just a certificate of attendance.",
      },
      {
        title: "Professional credential",
        text: "A structured, multi-tier diploma and certification pathway that adds tangible value to a CV or professional profile.",
      },
    ],
    footnote:
      "Because the program is fee-based, class sizes stay intentionally small and instructor attention stays high.",
  },

  sectors: {
    eyebrow: "Who should apply",
    title: "Three focus sectors where AI adoption is urgent and practical",
    intro:
      "Entrepreneurship is not a separate sector: every participant studies it, along with AI and soft skills, within their own sector track.",
    items: [
      {
        id: "education",
        name: "Education",
        audience: [
          "Teachers & lecturers",
          "School and university administrators",
          "EdTech coordinators",
          "Education & EdTech students (final year / graduate)",
        ],
      },
      {
        id: "medicine",
        name: "Medicine (Healthcare)",
        audience: [
          "Doctors & nurses",
          "Public health officers",
          "Medical trainers",
          "Health data staff",
          "Medical, nursing & public health students (final year / graduate)",
        ],
      },
      {
        id: "agriculture",
        name: "Agriculture",
        audience: [
          "Farmers & farm managers",
          "Agronomists & agricultural engineers",
          "Agricultural extension officers & trainers",
          "Agri-business & cooperative staff",
          "Agri-tech & food processing professionals",
          "Agriculture & agronomy students (final year / graduate)",
        ],
      },
    ],
  },

  pillars: {
    eyebrow: "Program design",
    title: "Three integrated pillars, delivered together every week",
    intro:
      "Soft skills, entrepreneurship, project method and AI capability are learned in combination rather than in isolation.",
    items: [
      {
        number: "Pillar 1",
        title: "Applied Artificial Intelligence",
        points: ["AI fundamentals & ethics", "Prompt engineering", "Sector-specific AI tools", "No-code AI prototyping"],
      },
      {
        number: "Pillar 2",
        title: "Project & Innovation Method",
        points: ["Design thinking", "Problem framing", "Agile project planning", "Monitoring & evaluation basics"],
      },
      {
        number: "Pillar 3",
        title: "Leadership, Soft Skills & Entrepreneurship",
        points: [
          "Communication & facilitation",
          "Training design basics",
          "Adult learning principles",
          "Leading change in your team",
          "Opportunity spotting, business model & pitching",
          "Teamwork, critical thinking, time management",
        ],
      },
    ],
  },

  curriculum: {
    eyebrow: "8-week curriculum",
    title: "From foundations to a pilot in the real world",
    intro:
      "Each week combines a live online session, a hands-on workshop or lab, sector-specific readings, and progress on your individual (or team) AI project.",
    foundation: {
      title: "A required foundation, not an optional add-on",
      text: "Before anyone starts building, the program dedicates structured study time to how AI actually intersects with education, medicine or agriculture: the specific use cases, tools, limitations and risks in that field.",
    },
    tracks: {
      core: { name: "Core Diploma Track", range: "Weeks 1–6", text: "Classroom + prototype" },
      applied: {
        name: "Applied Practice Track",
        range: "Weeks 7–8",
        text: "The project is tested in a real environment",
      },
    },
    distinction:
      "Weeks 7–8 are what distinguish the program's projects from purely theoretical coursework.",
    weeks: [
      {
        theme: "Foundations of AI & Leadership",
        topics: [
          "AI fundamentals: what it is, what it isn't",
          "Responsible & ethical AI in your sector",
          "Leadership styles, soft skills and professional communication",
          "Diagnostic self-assessment and goal setting",
        ],
        deliverable: "Personal learning plan",
      },
      {
        theme: "How AI Mixes With Your Field (Required Foundation)",
        topics: [
          "Deep-dive study of AI applied to your track: teaching & learning (education) / clinical & patient care (medicine) / farming & agri-food systems (agriculture)",
          "Real case studies of AI already used in that field, including what worked and what failed",
          "Field-specific limitations, risks and data privacy rules (classroom, patient or farm data)",
          "Facilitation & training design skills",
          "Identifying a real problem in your workplace that AI can plausibly help with",
        ],
        deliverable: "“AI in my field” study brief + problem statement",
      },
      {
        theme: "Design Thinking & Needs Analysis",
        topics: [
          "Human-centered design and problem framing",
          "Stakeholder and needs analysis",
          "Prompt engineering fundamentals",
          "AI productivity tools for daily work",
          "Entrepreneurship basics: spotting opportunities and value proposition",
        ],
        deliverable: "Stakeholder map + prompt library",
      },
      {
        theme: "Applied AI Tools & Prototyping",
        topics: [
          "Sector-specific AI applications (e.g. lesson design, clinical documentation support, crop and farm resource planning)",
          "No-code / low-code AI prototyping tools",
          "AI assistants and automation basics",
          "Agile project planning",
        ],
        deliverable: "Working prototype v1",
      },
      {
        theme: "Mentoring & Refinement",
        topics: [
          "One-on-one mentoring with an AI + sector expert",
          "User testing and feedback collection",
          "Iteration on the prototype",
          "Basic monitoring & evaluation framework for your project",
          "Business model and sustainability plan for your project",
        ],
        deliverable: "Refined prototype v2",
      },
      {
        theme: "Showcase, Diploma & Certification",
        topics: [
          "Pitch coaching and public speaking",
          "Final project presentation to an evaluation panel",
          "AI Innovation Showcase (public event)",
          "Diploma and certificate awarding ceremony",
        ],
        deliverable: "Final presentation + Diploma",
      },
      {
        theme: "Real-World Piloting",
        topics: [
          "Piloting the AI solution in a real classroom, clinic or farm setting",
          "Peer coaching within your sector group",
          "Troubleshooting real deployment issues",
        ],
        deliverable: "Pilot implementation log",
      },
      {
        theme: "Impact Reporting & Alumni Launch",
        topics: [
          "Documenting results and lessons learned",
          "Preparing a short impact report",
          "Joining the alumni network and mentor pool for the next cohort",
        ],
        deliverable: "Impact report + Alumni membership",
      },
    ],
  },

  projects: {
    eyebrow: "Real-world projects",
    title: "Not just an exercise: a tested project and a documented result",
    intro:
      "What justifies the tuition investment is that each participant leaves with more than knowledge. The pathway is designed to be realistic and objective at every step.",
    cycleTitle: "Project development cycle",
    cycle: [
      {
        when: "Week 2",
        title: "Problem identification",
        text: "Choose a genuine challenge from your own classroom, clinic or farm — not a hypothetical case.",
      },
      {
        when: "Weeks 3–4",
        title: "Design & prototyping",
        text: "Build with accessible no-code or low-code AI tools, so the result is realistic for non-developers to use afterwards.",
      },
      {
        when: "Week 5",
        title: "Mentoring & refinement",
        text: "Sector experts and AI mentors review each project for feasibility, not just creativity.",
      },
      {
        when: "Weeks 7–8",
        title: "Real-world piloting",
        text: "Test in your actual workplace — a real class, a real patient workflow or a real farm operation — and document the results.",
      },
    ],
    examplesTitle: "Example projects by sector",
    examplesIntro:
      "Actual projects are chosen by participants based on a genuine problem in their own workplace. Each also includes an entrepreneurship component: value proposition, business model and pitch.",
    examples: [
      {
        id: "education",
        name: "Education",
        items: [
          "AI-assisted lesson planning tool for a specific subject",
          "Automated formative quiz generator from course material",
          "Chatbot for answering routine student/parent questions",
          "AI-supported feedback on student writing",
        ],
      },
      {
        id: "medicine",
        name: "Medicine",
        items: [
          "AI-assisted patient intake and triage checklist",
          "Clinical documentation / note summarization assistant",
          "Appointment reminder and follow-up automation",
          "Patient education material generator (plain language)",
        ],
      },
      {
        id: "agriculture",
        name: "Agriculture",
        items: [
          "AI-assisted crop disease identification and advice tool",
          "Weather-based irrigation and planting calendar assistant",
          "Chatbot answering farmers' routine questions",
          "Farm record keeping and yield report summarizer",
        ],
      },
    ],
    opportunitiesTitle: "Opportunities this creates",
    opportunities: [
      "A finished, testable prototype you can keep using or scale within your organization.",
      "Visibility at the AI Innovation Showcase in front of potential employers, investors and institutional partners.",
      "Eligibility for the Outstanding Innovation Award and priority access to future advanced cohorts.",
      "A documented case study that strengthens your professional portfolio and CV.",
    ],
    note: "Each example is deliberately scoped to be buildable with no-code or low-code AI tools within the program time frame, and testable in a real classroom, clinic or farm within Weeks 7–8.",
  },

  outcomes: {
    eyebrow: "Learning outcomes",
    title: "By the end of the 8 weeks, you will be able to",
    items: [
      "Explain core AI concepts, capabilities and limits in plain, sector-relevant language.",
      "Describe, with real examples, how AI is already being applied in education, medicine or agriculture, and judge where it genuinely fits your own field.",
      "Select and use AI tools appropriate to your profession, responsibly and ethically.",
      "Use soft skills — teamwork, communication and critical thinking — to lead an AI project.",
      "Apply design thinking and agile methods to frame problems and design solutions.",
      "Apply entrepreneurial thinking — value proposition, business model and pitching — to turn a project idea into a viable initiative.",
      "Build and pilot a working AI-based prototype addressing a real challenge in your workplace.",
      "Present and defend a project to a professional evaluation panel.",
      "Train or mentor colleagues on responsible AI adoption.",
    ],
  },

  credentials: {
    eyebrow: "Diploma & certification",
    title: "Four tiers, so achievement is recognized at every stage",
    intro:
      "Because participants are paying to build real, career-relevant credentials, the framework recognizes progress clearly.",
    requirementLabel: "Requirement",
    signalLabel: "What it signals",
    tiers: [
      {
        name: "Certificate of Participation",
        requirement: "Attendance at ≥75% of sessions (Weeks 1–6)",
        signal: "Engaged in the program",
      },
      {
        name: "Certificate of Completion",
        requirement: "Attendance + all module assessments passed",
        signal: "Mastered the core curriculum",
      },
      {
        name: "AI Innovation Leader Diploma",
        requirement: "Full 8-week completion + prototype + real-world pilot (Weeks 7–8) + Showcase presentation",
        signal: "The program's flagship credential: practical, sector-specific AI leadership",
        flagship: true,
      },
      {
        name: "Outstanding Innovation Award",
        requirement: "Top-rated projects, evaluated by an external jury",
        signal: "Distinction for the strongest projects in each sector",
      },
    ],
    verifiable: "Diploma and certificates are digitally verifiable and shareable.",
  },

  eligibility: {
    eyebrow: "Eligibility",
    title: "Two applicant tracks, one curriculum",
    intro:
      "The program welcomes working professionals already active in one of the three sectors, and students who want to enter the workforce AI-ready. Both tracks follow the same curriculum, projects and certification requirements.",
    tracks: [
      {
        title: "Professional track",
        text: "At least 2 years of professional experience and current employment or active practice in education, medicine or agriculture.",
      },
      {
        title: "Student track",
        text: "Currently enrolled (undergraduate or graduate level, preferably final year) in an education, medical/health sciences or agriculture/agronomy program, with a letter or proof of enrollment.",
      },
    ],
    commonTitle: "For both tracks",
    common: [
      "Basic digital literacy (comfortable with email, browsers and common productivity tools).",
      "Proficiency in Arabic, French or English (the program is delivered in a blended mix of all three).",
      "Ability to pay tuition or secure a discount. Students are eligible for the discounted student rate.",
    ],
  },

  tuition: {
    eyebrow: "Tuition & investment",
    title: "Tuition funds small cohorts, expert mentoring and a credential worth earning",
    intro:
      "Tuition funds expert instruction, mentoring, AI tool access and certification, and keeps cohorts small enough for real attention to each participant's project.",
    headers: { option: "Tuition option", fee: "Indicative fee", notes: "Notes" },
    rows: [
      {
        option: "Standard enrollment",
        fee: "35,000 to 40,000",
        notes: "Full 8-week program, all sessions and materials",
        amount: true,
      },
      { option: "Early bird (6+ weeks before start)", fee: "~15% discount", notes: "Applies to the standard fee" },
      {
        option: "Group / institutional (3+ from one organization)",
        fee: "~20% discount per seat",
        notes: "Employer pays or co-pays",
      },
      {
        option: "Sponsored / scholarship seats",
        fee: "Up to 20% of cohort",
        notes: "Merit or need based, funded by partner or sponsor budget",
      },
      {
        option: "Student rate (enrolled students, with proof of enrollment)",
        fee: "~30–40% discount",
        notes: "Applies to the standard fee; limited seats per cohort",
      },
      { option: "Payment plan", fee: "2–3 installments", notes: "Available on request, no interest" },
    ],
    indicative:
      "Figures are indicative for the pilot cohort and will be confirmed before enrollment opens.",
    includesTitle: "What tuition includes",
    includes: [
      "All live sessions, workshops and recorded materials for 8 weeks.",
      "Individual and small-group mentoring with AI and sector experts.",
      "Access to the AI tools and platforms used during the program.",
      "Participation in the AI Innovation Showcase and pitch coaching.",
      "Official Diploma and certification, digitally verifiable.",
      "Lifetime access to the alumni network and future events.",
    ],
  },

  admissions: {
    eyebrow: "Admissions process",
    title: "From application to onboarding in five steps",
    steps: [
      {
        title: "Online application",
        text: "A short motivational statement and a sector relevance question.",
      },
      {
        title: "Application review",
        text: "Reviewed by the selection committee (Prolync + Altis).",
      },
      { title: "Virtual interview", text: "A short virtual interview for shortlisted candidates." },
      {
        title: "Offer of a seat",
        text: "With the tuition invoice and payment plan options.",
      },
      {
        title: "Payment & onboarding",
        text: "Confirmation of payment and onboarding: platform access, welcome kit and pre-program orientation.",
      },
    ],
  },

  team: {
    eyebrow: "Partnership",
    title: "Two organizations, one program",
    intro:
      "Delivery responsibilities are divided so that technical AI expertise and sector and leadership facilitation are both represented at full strength.",
    prolync: {
      name: "Prolync",
      roles: [
        "Design and update the AI curriculum",
        "Deliver all applied AI technical sessions",
        "Assign and coordinate AI mentors",
        "Provide AI tools, platforms and licenses",
        "Develop assessment rubrics and evaluate projects",
        "Issue diplomas and certificates",
      ],
    },
    altis: {
      name: "Altis",
      roles: [
        "Lead recruitment, screening and admissions",
        "Facilitate leadership, soft skills and entrepreneurship modules",
        "Coordinate logistics, venues and scheduling",
        "Manage participant communications and support",
        "Lead monitoring, evaluation and reporting",
        "Manage the alumni network and sustainability",
      ],
    },
    facultyTitle: "Faculty & mentors",
    faculty: [
      {
        title: "AI Technical Trainers (Prolync)",
        text: "Lead all applied AI sessions: prompt engineering, tool selection and prototyping.",
      },
      {
        title: "Leadership Facilitators (Altis)",
        text: "Lead soft skills, entrepreneurship, communication, facilitation and training design sessions.",
      },
      {
        title: "Sector Mentors",
        text: "Senior education, medicine and agriculture professionals, together with experienced entrepreneurs, who review project feasibility and give one-on-one guidance.",
      },
      {
        title: "AI Mentors",
        text: "Provide at least three dedicated sessions per project cycle on tool selection and prototyping.",
      },
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "Frequently asked questions",
    items: [
      {
        q: "Do I need a technical or programming background?",
        a: "No. Projects are built with accessible no-code or low-code AI tools so they are realistic for non-developers to build and keep using. You only need basic digital literacy.",
      },
      {
        q: "In which language is the program taught?",
        a: "Arabic, French and English, in a blended mix. Applicants need proficiency in at least one of the three.",
      },
      {
        q: "Can students apply?",
        a: "Yes. Students currently enrolled in an education, medical/health sciences or agriculture/agronomy program (preferably final year) can apply with proof of enrollment and are eligible for the discounted student rate.",
      },
      {
        q: "How much is tuition, and can I pay in installments?",
        a: "The indicative standard fee is 35,000 to 40,000, with early-bird, group, student and scholarship options. A 2–3 installment payment plan with no interest is available on request. See the Admissions & Tuition page for the full table.",
      },
      {
        q: "What if I cannot arrange a real-world pilot in Weeks 7–8?",
        a: "Mentors help you identify a feasible pilot scope during Week 5. If a live pilot is not possible, simulated user testing is the fallback.",
      },
      {
        q: "What if my internet connection is unreliable?",
        a: "Materials are designed to be offline-friendly, and the recommended tools work on low bandwidth.",
      },
      {
        q: "What happens if I have to withdraw?",
        a: "Flexible scheduling and milestone check-ins are in place to help you stay on track. A partial refund policy tied to the timing of withdrawal applies.",
      },
    ],
  },

  cta: {
    title: "Ready to lead AI innovation in your sector?",
    text: "Seats are limited to 10 per sector track. Tell us about your work and the problem you want AI to help with.",
    button: "Start your application",
  },

  pages: {
    program: {
      title: "The Program",
      intro:
        "Three pillars, eight weeks, one real project. Here is exactly what you will study, build and earn.",
    },
    admissions: {
      title: "Admissions & Tuition",
      intro: "Who can apply, how selection works, and what the investment covers.",
    },
    apply: {
      title: "Apply to the program",
      intro:
        "This is step 1 of the admissions process. It takes about 10 minutes. Your answers go to the Prolync + Altis selection committee.",
      sidebarTitle: "What happens next",
      sidebar: [
        "The selection committee reviews your application.",
        "Shortlisted candidates are invited to a short virtual interview.",
        "Selected candidates receive an offer with the tuition invoice and payment plan options.",
      ],
      studentNote: "Student applicants will be asked for a letter or proof of enrollment at the interview stage.",
    },
    privacy: {
      title: "Privacy notice",
      intro: "How we handle the information you submit through the application form.",
      sections: [
        {
          title: "What we collect",
          text: "The details you enter in the application form: identity and contact information, professional or academic background, your motivational statement, and your tuition preferences. We also store a one-way hash of your network address and your browser's user-agent text, used only to detect abuse.",
        },
        {
          title: "Why we collect it",
          text: "To review your application, contact you about the admissions process, and organize the program. The selection committee consists of Prolync and Altis.",
        },
        {
          title: "How it is protected",
          text: "Submissions are sent over an encrypted connection, validated on our servers and stored in a private database. The database is never accessed from your browser.",
        },
        {
          title: "Your choices",
          text: "You can ask to see, correct or delete your application at any time by contacting the organizers.",
        },
      ],
      contactLead: "Contact the organizers at",
      draftNote: "Have this notice reviewed against your local data-protection obligations before launch.",
    },
  },

  form: {
    sections: {
      about: "About you",
      eligibility: "Eligibility & background",
      motivation: "Motivation",
      tuition: "Tuition & consent",
    },
    labels: {
      fullName: "Full name",
      email: "Email address",
      phone: "Phone number",
      country: "Country",
      city: "City",
      communicationLanguage: "Preferred language for communication",
      workingLanguages: "Languages you are proficient in",
      track: "Applicant track",
      sector: "Your sector",
      organization: "Employer / organization / farm",
      jobTitle: "Job title or role",
      yearsExperience: "Years of professional experience",
      institution: "University / institution",
      studyProgram: "Program of study",
      studyLevel: "Level of study",
      digitalLiteracy:
        "I am comfortable with email, web browsers and common productivity tools (basic digital literacy).",
      motivation: "Why do you want to join this program?",
      sectorProblem: "Which real problem in your workplace or field could AI help with?",
      feeCategory: "Tuition category you are applying under",
      paymentPlan: "I would like to pay in 2–3 installments (no interest).",
      heardFrom: "How did you hear about the program? (optional)",
      consent:
        "I confirm the information is accurate and I agree to it being processed for the admissions process, as described in the privacy notice.",
    },
    hints: {
      motivation: "A few sentences: your goals and what you hope to achieve. Minimum 80 characters.",
      sectorProblem: "Describe a genuine challenge you see day to day. Minimum 40 characters.",
      phone: "For example 05 55 00 00 00",
      yearsExperience: "At least 2 years for the professional track",
      workingLanguages: "Select at least one",
      feeCategory: "The final fee is confirmed in the offer.",
    },
    placeholders: { select: "Select…" },
    options: {
      languages: { ar: "Arabic", fr: "French", en: "English" },
      tracks: { professional: "Working professional", student: "Student" },
      sectors: { education: "Education", medicine: "Medicine (Healthcare)", agriculture: "Agriculture" },
      studyLevels: { undergraduate: "Undergraduate", graduate: "Graduate" },
      feeCategories: {
        standard: "Standard enrollment",
        student: "Student rate (proof of enrollment required)",
        group: "Group / institutional (3+ from one organization)",
        scholarship: "I would like to be considered for a scholarship seat",
      },
      heardFrom: {
        social: "Social media",
        colleague: "Colleague or friend",
        institution: "My institution",
        event: "Event",
        search: "Web search",
        other: "Other",
      },
    },
    submit: "Submit application",
    submitting: "Submitting…",
    draftSaved: "Your entries are kept while you switch language.",
    required: "required",
    success: {
      title: "Application received",
      text: "Thank you. Your application has been recorded and will be reviewed by the selection committee.",
      referenceLabel: "Your reference",
      keepReference: "Please keep this reference for any correspondence.",
      another: "Back to home",
    },
    errors: {
      generic: "Something went wrong. Please try again in a moment.",
      duplicate: "An application with this email address has already been submitted.",
      rateLimited: "Too many attempts. Please wait a while before trying again.",
      unavailable: "The application service is temporarily unavailable. Please try again later.",
      fixFields: "Please correct the highlighted fields.",
    },
  },

  validation: {
    required: "This field is required.",
    tooShort: "This is too short.",
    tooLong: "This is too long.",
    nameShort: "Please enter your full name.",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid phone number.",
    languagesRequired: "Select at least one language.",
    invalidNumber: "Please enter a valid number.",
    minExperience: "The professional track requires at least 2 years of experience.",
    digitalRequired: "Basic digital literacy is required to join.",
    motivationShort: "Please write at least 80 characters.",
    problemShort: "Please write at least 40 characters.",
    studentRateOnly: "The student rate is only available to the student track.",
    groupNeedsOrganization: "Please enter your organization for a group application.",
    groupProfessionalOnly: "The group rate is for professionals applying through an organization.",
    consentRequired: "You must agree to continue.",
    invalid: "This value is not valid.",
  },

  footer: {
    tagline: "A paid professional diploma and certification program in applied AI, soft skills and entrepreneurship.",
    explore: "Explore",
    program: "Program",
    legal: "Legal",
    privacy: "Privacy notice",
    contact: "Contact",
    rights: "All rights reserved.",
    partnerLine: "PROLYNC — In Academic Partnership with Altis",
    sectors: "Education • Medicine • Agriculture",
  },

  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has moved.",
  },
};

export type Dictionary = typeof en;
