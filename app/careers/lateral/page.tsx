import { CategoryPage } from "@/components/CategoryPage";
import { getLevelBySlug } from "@/data/roles";

export const metadata = { title: "Lateral Roles" };

export default function Page() {
  return <CategoryPage level={getLevelBySlug("lateral")!} />;
}
