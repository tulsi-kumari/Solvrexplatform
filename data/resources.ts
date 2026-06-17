// Career resources / articles. Slugs + titles + descriptions are live now (used by the
// homepage Resources section and the Resources mega-menu). Article bodies are added in
// Phase 3 (the optional `body` field).

export interface ArticleSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body?: ArticleSection[];
}

export const RESOURCES: Article[] = [
  {
    slug: "resume-tailoring-guide",
    title: "Resume Tailoring Guide",
    description: "How to customize your resume for every application.",
  },
  {
    slug: "linkedin-optimization-guide",
    title: "LinkedIn Optimization Guide",
    description: "Make your profile easier for recruiters to find and trust.",
  },
  {
    slug: "referral-outreach-guide",
    title: "Referral Outreach Guide",
    description: "Practical strategies for reaching people who can refer you.",
  },
  {
    slug: "job-search-planning-framework",
    title: "Job Search Planning Framework",
    description: "A simple framework to run your search like a project.",
  },
  {
    slug: "interview-preparation-checklist",
    title: "Interview Preparation Checklist",
    description: "What to prepare before, during, and after an interview.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return RESOURCES.find((a) => a.slug === slug);
}
