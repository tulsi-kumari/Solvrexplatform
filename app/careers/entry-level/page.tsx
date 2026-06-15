import { CategoryPage } from "@/components/CategoryPage";
import { getLevelBySlug } from "@/data/roles";

export const metadata = { title: "Entry Level Roles" };

export default function Page() {
  return <CategoryPage level={getLevelBySlug("entry-level")!} />;
}
