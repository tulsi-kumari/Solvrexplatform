import { CategoryPage } from "@solvrex/ui";
import { getLevelBySlug } from "@solvrex/ui";

export const metadata = { title: "Lateral Roles" };

export default function Page() {
  return <CategoryPage level={getLevelBySlug("lateral")!} />;
}
