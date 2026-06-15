// Single source of truth for the Careers page.
// Add or edit roles here — the Open Roles section renders from this file.

import { siteConfig } from "@/lib/site";

export type Track =
  | "Tech"
  | "Sales & Business Development"
  | "Marketing"
  | "Career Services";

export interface Role {
  id: string;
  title: string;
  tagline: string;
  track: Track;
  location: string;
  type: string;
  openings: number;
  about: string;
  responsibilities: string[];
  requirements: string[];
  eligibility: string[];
  offer: string[];
}

// Filter pill order. "All" is prepended in the UI.
export const TRACKS: Track[] = [
  "Tech",
  "Sales & Business Development",
  "Marketing",
  "Career Services",
];

// Identical for every role — defined once, reused on each role's `offer`.
// Stipend/CTC figures come from siteConfig so the numbers live in one place.
export const SHARED_OFFER: string[] = [
  "Months 1–3 — Foundation phase: hands-on work on real client projects with close mentorship",
  `Next 6 months — Paid internship with a monthly stipend of ${siteConfig.internship.stipend}, based on performance`,
  `Exceptional performers — Pre-Placement Offer (PPO): full-time role with annual CTC of ${siteConfig.internship.ctc}`,
  "Real ownership and the chance to grow with an early-stage startup",
  "Certificate of Internship on completion",
  "Letter of Recommendation for outstanding interns",
];

export const ROLES: Role[] = [
  {
    id: "tech",
    title: "Tech Intern",
    tagline:
      "Build real software for real clients — and grow as an engineer from day one.",
    track: "Tech",
    location: "India",
    type: "Internship · 3+ months",
    openings: 10,
    about:
      "As a Tech Intern at Solvrex, you will work on live technology projects that we deliver for clients across different industries. You will get exposure to the full journey of a project — from understanding what a client needs to building, testing, and shipping a working solution. This is a hands-on role for students who genuinely enjoy technology and want to learn by doing. We do not expect you to know everything on day one; we care that you have strong fundamentals, a curious mind, and the drive to figure things out.",
    responsibilities: [
      "Contribute to web development work as part of real client solutions",
      "Take part in client engagement — understanding what clients actually need",
      "Help gather and translate requirements into clear, workable tasks",
      "Work the way real teams do, following agile practices such as sprints, stand-ups, and iterative delivery",
      "Build, test, and debug features and internal tools as part of client deliverables",
      "Support the deployment of solutions and help keep them running smoothly afterwards",
      "Use modern AI and GenAI tools to work faster and solve problems more effectively",
      "Document your work, decisions, and outcomes so others can follow them easily",
      "Collaborate with the sales and marketing teams to provide technical input when needed",
    ],
    requirements: [
      "Strong fundamentals in programming and problem-solving",
      "An open, curious mind — genuinely eager to learn, explore, and pick up new tools quickly",
      "Real excitement about technology and a desire to build things that work",
      "Basic exposure to AI / GenAI tools and comfort using them in day-to-day work",
      "Good attention to detail and a logical, structured way of approaching problems",
      "Clear written and verbal communication",
      "No prior professional experience required — your attitude and aptitude matter most",
      "Good to have (not required): personal or academic projects, hackathons, or any hands-on tinkering with technology",
    ],
    eligibility: [
      "Currently pursuing B.Tech / B.Sc. (CS / IT) / BCA / MCA or an equivalent degree",
      "2027 or 2028 graduating batch (second- and third-year students encouraged to apply)",
      "Minimum 6.0 CGPA",
      "No active backlogs",
      "Available for a minimum of 3 months, with the opportunity to continue based on performance",
    ],
    offer: SHARED_OFFER,
  },
  {
    id: "sales",
    title: "Sales & Business Development Intern",
    tagline: "Be the voice of Solvrex — and play a direct role in our growth.",
    track: "Sales & Business Development",
    location: "India",
    type: "Internship · 3+ months",
    openings: 10,
    about:
      "As a Sales & Business Development Intern, you will help drive Solvrex's growth across two fronts. First, you will reach out to businesses to bring in IT consulting projects. Second, you will connect with international students and working professionals who need our Career Services. You will learn the full sales cycle in a fast-paced startup environment and see the direct impact of your work on our revenue. No prior sales experience is needed — we will teach you what you need to know.",
    responsibilities: [
      "Research and identify two types of prospects: businesses that need IT services, and international students and professionals who need career support",
      "Reach out via calls, emails, and LinkedIn to introduce Solvrex and the right offering",
      "Clearly explain our IT consulting services to business decision-makers",
      "Clearly explain our Career Services to students and working professionals abroad",
      "Generate qualified leads and schedule discovery calls for the core team",
      "Maintain and update a CRM or outreach tracker with prospect details and follow-ups",
      "Help prepare pitch decks, proposals, and client presentations",
      "Gather feedback from prospects to help refine our offerings",
      "Work towards weekly outreach and lead-generation goals across both tracks",
    ],
    requirements: [
      "Clear and confident verbal and written communication in English",
      "A persuasive, resilient attitude — comfortable with calls, follow-ups, and the occasional rejection",
      "Comfortable speaking with an international audience of students and professionals",
      "A willingness to learn the basics of IT services quickly",
      "Ability to research companies and people and find the right contact",
      "Goal-oriented and self-motivated, with strong follow-through",
      "An open mind and curiosity about technology and how businesses use it",
      "No prior experience required — good to have (not required): any exposure to sales, tele-calling, or business development, or comfort with LinkedIn, cold emailing, CRM, or AI tools",
    ],
    eligibility: [
      "Currently pursuing any undergraduate or postgraduate degree (B.Tech / BBA / MBA students especially encouraged)",
      "2027 or 2028 graduating batch (second- and third-year students encouraged to apply)",
      "Minimum 6.0 CGPA",
      "No active backlogs",
      "Available for a minimum of 3 months, with the opportunity to continue based on performance",
    ],
    offer: SHARED_OFFER,
  },
  {
    id: "marketing",
    title: "Marketing Intern",
    tagline: "Build the Solvrex brand — and run marketing for our clients too.",
    track: "Marketing",
    location: "India",
    type: "Internship · 3+ months",
    openings: 10,
    about:
      "As a Marketing Intern at Solvrex, you will work on two exciting fronts. First, you will help grow Solvrex's own brand and digital presence from the ground up. Second, you will run marketing for our clients — the businesses our sales team brings on board. From social media and content to full campaigns, you will play a direct role in how Solvrex and our clients are seen and grow. No prior experience is needed — bring your creativity and we will help you build the rest.",
    responsibilities: [
      "Manage and grow Solvrex's presence on LinkedIn, Instagram, and other relevant platforms",
      "Plan and run marketing campaigns for client brands once they come on board through our sales team",
      "Create engaging content — posts, carousels, short videos, and infographics — for Solvrex and clients",
      "Develop and execute content calendars for social media and email campaigns",
      "Conduct market and competitor research to spot opportunities and trends",
      "Support the creation of pitch decks, brochures, case studies, and marketing collateral",
      "Track and analyse campaign performance such as reach, engagement, and leads generated",
      "Coordinate with the sales team to align messaging and onboard new client accounts",
      "Help build Solvrex's employer brand to attract great intern and hiring talent",
    ],
    requirements: [
      "Strong written communication and content-creation skills in English",
      "Comfort with design tools such as Canva, Adobe Express, or similar",
      "An understanding of social media platforms, especially LinkedIn for B2B marketing",
      "Creative thinking and an eye for visual aesthetics and branding",
      "An analytical mindset — comfortable looking at metrics and drawing simple insights",
      "An open, curious mind, eager to learn and explore new tools (including AI / GenAI tools for content and ideas)",
      "No prior experience required — good to have (not required): basics of digital marketing (SEO, email, paid ads), video editing, Google Analytics, or email tools such as Mailchimp",
    ],
    eligibility: [
      "Currently pursuing any undergraduate or postgraduate degree (B.Tech / BBA / BMM / MBA (Marketing) students especially encouraged)",
      "2027 or 2028 graduating batch (second- and third-year students encouraged to apply)",
      "Minimum 6.0 CGPA",
      "No active backlogs",
      "Available for a minimum of 3 months, with the opportunity to continue based on performance",
    ],
    offer: SHARED_OFFER,
  },
  {
    id: "career",
    title: "Career Success Associate",
    tagline:
      "Help jobseekers land the roles they deserve through careful, real, human work.",
    track: "Career Services",
    location: "India",
    type: "Internship · 3+ months",
    openings: 10,
    about:
      "Solvrex Career Services helps job-seekers — mainly international students and working professionals — succeed in their job search. As a Career Success Associate, you will do the day-to-day work that gets our clients in front of recruiters: tailoring their resumes, optimising their LinkedIn profiles, and applying to jobs on their behalf. Your accuracy and care directly shape whether a client gets interview calls, so this role is perfect for someone detail-oriented who takes pride in doing things right. No prior experience is required — we will train you on our process.",
    responsibilities: [
      "Tailor resumes and cover letters for each client using our approved processes",
      "Apply to jobs that match each client's preferences and target roles",
      "Optimise client LinkedIn profiles for better visibility and recruiter reach",
      "Maintain accurate application trackers and client records",
      "Prepare clear weekly progress reports for clients and the Career Success Lead",
      "Research companies and openings that fit each client's goals",
      "Communicate with clients in a professional, friendly, and empathetic way",
      "Always keep client information private and secure",
      "Flag and escalate any issues or unusual cases to the Lead",
    ],
    requirements: [
      "Strong written communication skills in English",
      "Excellent attention to detail — accurate, careful, and consistent work",
      "Comfortable working with resumes, LinkedIn, and online job portals",
      "Well-organised and able to manage multiple clients without missing details",
      "Reliable and responsible, with the ability to meet deadlines",
      "Comfortable communicating with international students and working professionals",
      "An open mind and willingness to learn, including comfort with AI tools",
      "No prior experience required — good to have (not required): any exposure to resume writing, HR, or recruitment",
    ],
    eligibility: [
      "Currently pursuing any undergraduate or postgraduate degree (students from any stream are welcome)",
      "2027 or 2028 graduating batch (second- and third-year students encouraged to apply)",
      "Minimum 6.0 CGPA",
      "No active backlogs",
      "Available for a minimum of 3 months, with the opportunity to continue based on performance",
    ],
    offer: SHARED_OFFER,
  },
];
