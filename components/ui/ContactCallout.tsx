import { C } from "@/lib/theme";
import { PrimaryLink } from "./PrimaryLink";

/**
 * Shared "reach out directly" callout used on the services overview and each
 * service detail page.
 */
export function ContactCallout({ borderTop = false }: { borderTop?: boolean }) {
  return (
    <section style={{ padding: "72px 0", ...(borderTop ? { borderTop: `1px solid ${C.border}` } : {}) }}>
      <div className="sx-container">
        <div
          className="sx-row"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px" }}
        >
          <p style={{ fontSize: "17px", color: C.textMuted, lineHeight: 1.65, maxWidth: "500px" }}>
            To discuss your situation, reach out directly.
          </p>
          <PrimaryLink href="/contact" style={{ flexShrink: 0, padding: "11px 22px" }}>
            Contact us →
          </PrimaryLink>
        </div>
      </div>
    </section>
  );
}
