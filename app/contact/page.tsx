import { ContactPage } from "@/components/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Solvrex | Career Services & Consulting",
  description:
    "Get in touch with Solvrex for career services, technology consulting, or business enablement. Tell us about your situation and we'll respond promptly.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
