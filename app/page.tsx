import { Home } from "@/components/Home";
import { JsonLd } from "@/components/JsonLd";
import { organizationLd } from "@/lib/seo";

export default function Page() {
  return (
    <>
      <JsonLd data={organizationLd()} />
      <Home />
    </>
  );
}
