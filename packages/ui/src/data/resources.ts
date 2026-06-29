// Career resources — full article landing pages. Single source of truth for the
// Resources index, article pages, Resources mega-menu, sitemap, and internal links.

export interface ArticleSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string; // display title / H1
  seoTitle: string; // <title> (absolute)
  description: string; // 140–160 char meta description
  category: string; // topic tag (knowledge-base feel)
  readingTime: string; // e.g. "6 min read"
  primaryKeyword: string;
  secondaryKeywords: string[];
  summary: string; // intro summary (hero + index card)
  keyTakeaways: string[];
  sections: ArticleSection[];
  related: string[]; // related article slugs
}

export const RESOURCES: Article[] = [
  {
    slug: "resume-tailoring-guide",
    title: "How to Tailor Your Resume for Every Job Application",
    seoTitle: "How to Tailor Your Resume for Every Job Application | Solvrex",
    description:
      "A practical framework for adapting your resume to each job description — without rewriting it from scratch — so it gets past ATS and recruiter screening.",
    category: "Resume",
    readingTime: "6 min read",
    primaryKeyword: "how to tailor your resume",
    secondaryKeywords: ["ats friendly resume", "resume keywords", "resume optimization", "resume mistakes"],
    summary:
      "A practical framework for adapting your resume to specific job descriptions without rewriting it from scratch every time.",
    keyTakeaways: [
      "Why generic resumes fail",
      "How ATS systems work",
      "Matching keywords correctly",
      "Highlighting relevant experience",
      "Common resume mistakes",
    ],
    sections: [
      {
        heading: "Why generic resumes fall flat",
        paragraphs: [
          "A single, unchanged resume sent to every role is the most common reason strong candidates get filtered out. Recruiters and automated systems are both looking for evidence that you match this specific role — not a general sense that you're employable.",
          "Tailoring doesn't mean starting over each time. It means keeping one strong master resume and adjusting the top third, the wording, and the emphasis to mirror what each job actually asks for.",
        ],
      },
      {
        heading: "How applicant tracking systems (ATS) read your resume",
        paragraphs: [
          "Most mid-to-large employers run applications through an ATS before a human sees them. The system parses your text, matches it against the job description, and ranks candidates.",
        ],
        bullets: [
          "It extracts plain text — complex columns, tables, and graphics can break parsing.",
          "It looks for role-relevant terms: skills, tools, titles, and qualifications.",
          "It ranks you on how closely your language matches the posting.",
        ],
      },
      {
        heading: "Matching keywords the right way",
        bullets: [
          "Mirror the exact phrasing the job uses for skills and tools (e.g. 'project management', not just 'PM').",
          "Prioritise hard skills and qualifications that appear more than once in the posting.",
          "Use a clean, conventional job title near the top if yours is non-standard.",
          "Never keyword-stuff — every term should be backed by real experience.",
        ],
      },
      {
        heading: "Highlight the most relevant experience first",
        paragraphs: [
          "Recruiters skim the top third of your resume first. Reorder your bullets so the most relevant, highest-impact work for this role sits at the top.",
          "Lead each bullet with the outcome and quantify it where you can — numbers make impact legible at a glance.",
        ],
      },
      {
        heading: "Common resume mistakes to avoid",
        bullets: [
          "One resume for every application.",
          "Listing responsibilities instead of results.",
          "Burying relevant experience below unrelated roles.",
          "Dense formatting that an ATS can't parse.",
          "Typos and inconsistent tense or formatting.",
        ],
      },
    ],
    related: ["linkedin-optimization-guide", "job-search-planning-framework", "interview-preparation-checklist"],
  },
  {
    slug: "linkedin-optimization-guide",
    title: "LinkedIn Profile Optimization Checklist",
    seoTitle: "LinkedIn Profile Optimization Checklist | Solvrex",
    description:
      "Learn how recruiters discover candidates and how to improve your LinkedIn visibility, credibility, and response rates — a practical, section-by-section checklist.",
    category: "LinkedIn",
    readingTime: "6 min read",
    primaryKeyword: "linkedin profile optimization",
    secondaryKeywords: ["linkedin headline", "recruiter visibility", "linkedin keywords", "linkedin about section"],
    summary:
      "Learn how recruiters discover candidates and how to improve profile visibility, credibility, and response rates.",
    keyTakeaways: [
      "Headline optimization",
      "About section",
      "Experience section",
      "Skills strategy",
      "Recruiter visibility",
    ],
    sections: [
      {
        heading: "How recruiters actually find you",
        paragraphs: [
          "Recruiters search LinkedIn with keywords — titles, skills, and locations — and skim results quickly. Your profile's job is to surface in those searches and then earn the click and the message.",
        ],
      },
      {
        heading: "Headline optimization",
        bullets: [
          "Go beyond your job title — include what you do and the skills you want to be found for.",
          "Front-load the most important keywords; the headline is heavily weighted in search.",
          "Keep it readable, not a list of buzzwords.",
        ],
      },
      {
        heading: "Write an About section that builds trust",
        paragraphs: [
          "The About section is your pitch. Open with what you do and who you help, add a few concrete proof points, and close with what you're looking for.",
          "Write in the first person and keep it scannable — short paragraphs beat one dense block.",
        ],
      },
      {
        heading: "Experience section",
        bullets: [
          "Mirror your strongest resume bullets — outcomes first, quantified where possible.",
          "Use the same keywords recruiters search for.",
          "Add media or links where it demonstrates real work.",
        ],
      },
      {
        heading: "Skills strategy & recruiter visibility",
        bullets: [
          "Pin the skills most relevant to your target roles — they affect search ranking.",
          "Turn on 'Open to work' (recruiters-only if you're employed).",
          "Keep location and job preferences current.",
          "A complete profile with a photo and activity gets significantly more visibility than an incomplete one.",
        ],
      },
    ],
    related: ["resume-tailoring-guide", "referral-outreach-guide", "job-search-planning-framework"],
  },
  {
    slug: "referral-outreach-guide",
    title: "How to Ask for Referrals Without Sounding Desperate",
    seoTitle: "How to Ask for Referrals (Without Sounding Desperate) | Solvrex",
    description:
      "Practical approaches for networking and requesting referrals professionally — relationship-first outreach, message examples, and follow-up etiquette that works.",
    category: "Networking",
    readingTime: "5 min read",
    primaryKeyword: "how to ask for referrals",
    secondaryKeywords: ["referral outreach", "networking for jobs", "referral message template", "linkedin outreach"],
    summary:
      "Practical approaches for networking and requesting referrals professionally.",
    keyTakeaways: [
      "Building relationships first",
      "Outreach message examples",
      "Follow-up etiquette",
      "Common mistakes",
    ],
    sections: [
      {
        heading: "Build the relationship before the ask",
        paragraphs: [
          "Referrals convert far better than cold applications, but they work because of trust. Lead with genuine interest — engage with someone's work, ask a thoughtful question, or reconnect before you ask for anything.",
          "When you do ask, make it specific and easy to say yes to: name the role, share why you're a fit, and attach your resume so they don't have to chase details.",
        ],
      },
      {
        heading: "Outreach message examples",
        bullets: [
          "Warm contact: 'Hi [name], I saw [company] is hiring a [role]. Given my work on [X], I think I'd be a strong fit — would you be open to referring me, or pointing me to the right person?'",
          "Reconnect: 'Hi [name], it's been a while since [context]. I'm exploring [role type] roles — would you have 10 minutes to share how things are at [company]?'",
          "Always include the role link and your resume.",
        ],
      },
      {
        heading: "Follow-up etiquette",
        bullets: [
          "Give it 4–6 business days before a single, polite follow-up.",
          "Make the follow-up easy to ignore without guilt.",
          "Thank people regardless of outcome — and close the loop later.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Asking strangers for referrals with no context.",
          "Sending long, vague messages that create work for the other person.",
          "Following up too often or too aggressively.",
          "Never reciprocating or saying thanks.",
        ],
      },
    ],
    related: ["linkedin-optimization-guide", "job-search-planning-framework", "interview-preparation-checklist"],
  },
  {
    slug: "job-search-planning-framework",
    title: "Job Search Planning Framework",
    seoTitle: "Job Search Planning Framework | Solvrex",
    description:
      "Treat your job search like a structured project instead of a random activity — weekly targets, application tracking, referral tracking, and interview prep.",
    category: "Job Search",
    readingTime: "6 min read",
    primaryKeyword: "job search plan",
    secondaryKeywords: ["job search strategy", "weekly job search routine", "application tracker", "target companies"],
    summary:
      "Treat your job search like a structured project instead of a random activity.",
    keyTakeaways: ["Weekly targets", "Application tracking", "Referral tracking", "Interview preparation"],
    sections: [
      {
        heading: "Run your search like a project",
        paragraphs: [
          "An unstructured search feels busy but rarely compounds. Treating it like a project — with targets, tracking, and a weekly rhythm — turns scattered effort into steady progress you can actually measure and improve.",
        ],
      },
      {
        heading: "Set weekly targets",
        bullets: [
          "Define a realistic number of tailored applications per week (quality over volume).",
          "Set a target for outreach and referral conversations.",
          "Protect time blocks for applications, networking, and prep separately.",
        ],
      },
      {
        heading: "Track applications and referrals",
        bullets: [
          "Keep one tracker: company, role, date, status, contact, and next action.",
          "Log every referral conversation and follow-up so nothing slips.",
          "Review weekly — what's converting, where you're stalling.",
        ],
      },
      {
        heading: "Build interview prep into the plan",
        paragraphs: [
          "Don't start preparing only once an interview is booked. Keep a running set of stories and answers so each opportunity gets your best, not your most rushed.",
        ],
      },
    ],
    related: ["resume-tailoring-guide", "referral-outreach-guide", "interview-preparation-checklist"],
  },
  {
    slug: "interview-preparation-checklist",
    title: "Interview Preparation Checklist",
    seoTitle: "Interview Preparation Checklist | Solvrex",
    description:
      "A structured checklist covering preparation before, during, and after interviews — research, behavioral and technical prep, and follow-up communication.",
    category: "Interviews",
    readingTime: "7 min read",
    primaryKeyword: "interview preparation checklist",
    secondaryKeywords: ["behavioral interview preparation", "technical interview preparation", "STAR method", "interview follow up"],
    summary:
      "A structured checklist covering preparation before, during, and after interviews.",
    keyTakeaways: ["Research", "Behavioral questions", "Technical preparation", "Follow-up communication"],
    sections: [
      {
        heading: "Research before the interview",
        bullets: [
          "Understand the company's product, customers, and recent news.",
          "Re-read the job description and map your experience to each requirement.",
          "Know who you're meeting and their role where possible.",
        ],
      },
      {
        heading: "Prepare for behavioral questions",
        paragraphs: [
          "Most interviews lean on behavioral questions. Prepare 6–8 concise stories using the STAR method (Situation, Task, Action, Result) that you can adapt to many prompts.",
        ],
        bullets: [
          "Cover leadership, conflict, failure, impact, and teamwork.",
          "Lead with the result, then explain how you got there.",
          "Keep each story under two minutes.",
        ],
      },
      {
        heading: "Technical preparation",
        bullets: [
          "Review the fundamentals most relevant to the role.",
          "Practise out loud or on a whiteboard, not just in your head.",
          "Prepare to explain your reasoning, not just the answer.",
        ],
      },
      {
        heading: "Follow-up communication",
        paragraphs: [
          "A short, specific thank-you note within 24 hours reinforces your interest and reminds the interviewer of your strongest point. Reference something real from the conversation.",
        ],
      },
    ],
    related: ["resume-tailoring-guide", "linkedin-optimization-guide", "job-search-planning-framework"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return RESOURCES.find((a) => a.slug === slug);
}
