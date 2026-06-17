// Career resources / articles. Slug, display title, SEO title, and meta description are
// live now (homepage Resources section, Resources mega-menu, sitemap, internal links).
// Article bodies are added later (the optional `body` field).

export interface ArticleSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string; // display title (cards, H1)
  seoTitle: string; // <title> (absolute)
  description: string; // 140–160 char meta description
  body?: ArticleSection[];
}

export const RESOURCES: Article[] = [
  {
    slug: "how-to-tailor-your-resume",
    title: "How to Tailor Your Resume for Every Job Application",
    seoTitle: "How to Tailor Your Resume for Every Job Application | Solvrex",
    description:
      "A practical guide to customizing your resume for each role — keywords, structure, and ATS-friendly formatting that helps you get past screening.",
  },
  {
    slug: "linkedin-profile-optimization-checklist",
    title: "LinkedIn Profile Optimization Checklist",
    seoTitle: "LinkedIn Profile Optimization Checklist | Solvrex",
    description:
      "A step-by-step LinkedIn checklist — headline, About, experience, and keywords — to improve recruiter visibility and make your profile easy to trust.",
  },
  {
    slug: "how-to-ask-for-referrals",
    title: "How to Ask for Referrals Without Sounding Desperate",
    seoTitle: "How to Ask for Referrals (Without Sounding Desperate) | Solvrex",
    description:
      "Referral outreach scripts and etiquette — how to ask for job referrals in a way that's genuine, specific, and easy for the other person to say yes to.",
  },
  {
    slug: "job-search-planning-framework",
    title: "Job Search Planning Framework",
    seoTitle: "Job Search Planning Framework | Solvrex",
    description:
      "A simple framework to run your job search like a project — targets, channels, weekly cadence, and tracking — so your effort actually compounds.",
  },
  {
    slug: "interview-preparation-checklist",
    title: "Interview Preparation Checklist",
    seoTitle: "Interview Preparation Checklist | Solvrex",
    description:
      "What to prepare before, during, and after an interview — research, stories, questions, and follow-up — in one practical, repeatable checklist.",
  },
  {
    slug: "why-job-applications-get-rejected",
    title: "Why Job Applications Get Rejected",
    seoTitle: "Why Job Applications Get Rejected | Solvrex",
    description:
      "The real reasons applications get rejected — from ATS filtering to generic resumes — and practical fixes that lead to more interview callbacks.",
  },
  {
    slug: "how-recruiters-read-resumes",
    title: "How Recruiters Actually Read Resumes",
    seoTitle: "How Recruiters Actually Read Resumes | Solvrex",
    description:
      "How recruiters really scan resumes — the six-second skim, what they look for first, and how to structure yours so the right things stand out.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return RESOURCES.find((a) => a.slug === slug);
}
