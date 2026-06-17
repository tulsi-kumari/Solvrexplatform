import { PricingPage } from "@/components/PricingPage";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, serviceLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Career Services Pricing | Solvrex",
  description:
    "Transparent Solvrex career services pricing — Essential, Professional, and Premium plans for managed applications, resume tailoring, LinkedIn, and interview prep.",
  path: "/pricing",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceLd({
          name: "Solvrex Career Services",
          description:
            "Managed job applications, resume tailoring, LinkedIn optimization, and interview preparation across Essential, Professional, and Premium plans.",
          path: "/pricing",
        })}
      />
      <PricingPage />
    </>
  );
}
