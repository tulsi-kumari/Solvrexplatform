import type { CSSProperties } from "react";
import { C, eyebrow, pageH1, metaLabel } from "@/lib/theme";
import { BulletList } from "@/components/ui/BulletList";
import { ContactCallout } from "@/components/ui/ContactCallout";
import type { Service } from "@/data/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const labelStyle: CSSProperties = {
  ...metaLabel,
  flexShrink: 0,
  width: "180px",
  paddingTop: "3px",
};

function Row({ label, children, last }: { label: React.ReactNode; children: React.ReactNode; last?: boolean }) {
  return (
    <div className="sx-row" style={{ display: "flex", gap: "48px", marginBottom: last ? 0 : "40px" }}>
      <div style={{ ...labelStyle, lineHeight: 1.5 }}>{label}</div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}

export function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <div style={{ backgroundColor: C.bg }}>
      {/* Page header */}
      <section style={{ padding: "80px 0 64px", borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />
          <p style={eyebrow}>{service.title}</p>
          <h1 style={{ ...pageH1, maxWidth: "560px" }}>{service.h1}</h1>
        </div>
      </section>

      {/* Detail */}
      <section style={{ padding: "72px 0", borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <Row label="Overview">
            <p style={{ fontSize: "16px", color: C.textBody, lineHeight: 1.78, maxWidth: "600px" }}>
              {service.overview}
            </p>
          </Row>
          <Row label={<>Typical<br />Engagements</>}>
            <BulletList items={service.typicalEngagements} />
          </Row>
          <Row label={<>Expected<br />Outcomes</>} last>
            <BulletList items={service.expectedOutcomes} />
          </Row>
        </div>
      </section>

      <ContactCallout />
    </div>
  );
}
