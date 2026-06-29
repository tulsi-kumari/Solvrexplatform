// The six Career Services shown on the homepage.

export interface CareerService {
  title: string;
  description: string;
  outcome: string;
}

export const CAREER_SERVICES: CareerService[] = [
  {
    title: "Resume Review & Optimization",
    description:
      "A human review of your resume against the roles you're targeting — structure, wording, and ATS-friendliness.",
    outcome: "A sharper resume tailored to your target roles.",
  },
  {
    title: "LinkedIn Profile Review",
    description:
      "We optimize your headline, summary, and experience so recruiters can find and understand your value quickly.",
    outcome: "Greater recruiter visibility and a clearer story.",
  },
  {
    title: "Job Search Strategy",
    description:
      "A focused plan covering target roles, companies, channels, and a realistic weekly cadence.",
    outcome: "A clear, repeatable search plan.",
  },
  {
    title: "Application Support",
    description:
      "Help applying to the right roles — tailoring each application and tracking follow-ups so nothing slips.",
    outcome: "More relevant applications, consistently submitted.",
  },
  {
    title: "Interview Preparation",
    description:
      "Mock interviews and structured feedback on how you present your experience and answer common questions.",
    outcome: "More confidence and stronger interview answers.",
  },
  {
    title: "Career Direction & Planning",
    description:
      "Guidance on positioning, role fit, and next steps when you're deciding where to take your career.",
    outcome: "A clearer sense of direction and next moves.",
  },
];
