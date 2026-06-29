import { Home } from "@solvrex/ui";
import { JsonLd } from "@solvrex/ui";
import { organizationLd } from "@solvrex/ui";

export default function Page() {
  return (
    <>
      <JsonLd data={organizationLd()} />
      <Home />
    </>
  );
}
