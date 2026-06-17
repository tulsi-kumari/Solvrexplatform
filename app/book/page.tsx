import { BookPage } from "@/components/BookPage";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, professionalServiceLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Free Career Consultation | Solvrex",
  description:
    "Book a free consultation with Solvrex. Share your goals and we'll review your profile and recommend practical next steps for your job search and career.",
  path: "/book",
});

export default function Page() {
  return (
    <>
      <JsonLd data={professionalServiceLd()} />
      <BookPage />
    </>
  );
}
