import { C } from "@/lib/theme";
import { BulletList } from "./BulletList";

/**
 * An uppercase section heading followed by a dash-bulleted list.
 * Renders nothing when there are no items.
 */
export function DetailList({ heading, items }: { heading: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ marginTop: "32px" }}>
      <h3 style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.textSubtle, marginBottom: "14px" }}>
        {heading}
      </h3>
      <BulletList items={items} />
    </div>
  );
}
