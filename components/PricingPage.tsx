import { C, eyebrow, pageH1 } from "@/lib/theme";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryLink, ArrowRight } from "@/components/ui/PrimaryLink";
import { PRICING_TIERS, PRICING_IS_PLACEHOLDER } from "@/lib/pricing";

const styles = `
  .sx-tier-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
  @media (max-width: 860px) { .sx-tier-grid { grid-template-columns: 1fr; } }
`;

export function PricingPage() {
  return (
    <div style={{ backgroundColor: C.bg }}>
      <style>{styles}</style>

      {/* Header */}
      <section style={{ padding: "80px 0 56px", borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <p style={eyebrow}>Pricing</p>
          <h1 style={{ ...pageH1, maxWidth: "560px", marginBottom: "18px" }}>Simple, transparent plans.</h1>
          <p style={{ fontSize: "16px", color: C.textMuted, lineHeight: 1.7, maxWidth: "620px" }}>
            Three ways to work with us on your career search. Not sure which fits? Book a free
            consultation and we&apos;ll recommend the right starting point.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section style={{ padding: "56px 0 88px" }}>
        <div className="sx-container">
          <div className="sx-tier-grid">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.slug} style={{ display: "flex", flexDirection: "column", padding: "28px 24px", borderRadius: "12px", background: tier.highlighted ? C.bgSurface : "transparent" }}>
                {tier.highlighted && (
                  <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.blueLight, marginBottom: "12px" }}>
                    Most popular
                  </span>
                )}
                <h2 style={{ fontSize: "20px", fontWeight: 600, color: C.text, letterSpacing: "-0.015em", marginBottom: "8px" }}>{tier.name}</h2>
                <p style={{ fontSize: "14px", color: C.textMuted, lineHeight: 1.6, marginBottom: "20px" }}>{tier.blurb}</p>

                <div style={{ marginBottom: "22px" }}>
                  {PRICING_IS_PLACEHOLDER ? (
                    <span style={{ fontSize: "14.5px", color: C.textBody }}>Pricing shared on consultation</span>
                  ) : (
                    <span style={{ fontSize: "24px", fontWeight: 600, color: C.text }}>
                      From {tier.priceFrom}
                      <span style={{ fontSize: "13px", fontWeight: 400, color: C.textMuted }}> {tier.billing}</span>
                    </span>
                  )}
                </div>

                <div style={{ flex: 1, marginBottom: "24px" }}>
                  <BulletList items={tier.features} />
                </div>

                <PrimaryLink href="/book" variant={tier.highlighted ? "solid" : "outline"} style={{ width: "100%", justifyContent: "center" }}>
                  Schedule Consultation
                  <ArrowRight />
                </PrimaryLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
