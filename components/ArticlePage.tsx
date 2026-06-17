import Link from "next/link";
import { C, eyebrow, pageH1 } from "@/lib/theme";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BulletList } from "@/components/ui/BulletList";
import { PrimaryLink, ArrowRight } from "@/components/ui/PrimaryLink";
import type { Article } from "@/data/resources";

export function ArticlePage({ article }: { article: Article }) {
  const hasBody = !!article.body && article.body.length > 0;

  return (
    <div style={{ backgroundColor: "transparent" }}>
      {/* Header */}
      <section style={{ padding: "80px 0 56px", borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: article.title }]} />
          <p style={eyebrow}>Guide</p>
          <h1 style={{ ...pageH1, maxWidth: "680px", marginBottom: "16px" }}>{article.title}</h1>
          <p style={{ fontSize: "16px", color: C.textMuted, lineHeight: 1.7, maxWidth: "640px" }}>{article.description}</p>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "56px 0 88px" }}>
        <div className="sx-container" style={{ maxWidth: "760px" }}>
          {hasBody ? (
            article.body!.map((section) => (
              <div key={section.heading} style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 600, color: C.text, letterSpacing: "-0.015em", marginBottom: "16px" }}>{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} style={{ fontSize: "15.5px", color: C.textBody, lineHeight: 1.75, marginBottom: "14px" }}>{p}</p>
                ))}
                {section.bullets && <BulletList items={section.bullets} />}
              </div>
            ))
          ) : (
            <p style={{ fontSize: "15.5px", color: C.textMuted, lineHeight: 1.75, marginBottom: "32px" }}>
              The full guide is on its way. In the meantime, book a free consultation and we&apos;ll
              walk you through this directly.
            </p>
          )}

          <div style={{ marginTop: "8px", paddingTop: "32px", borderTop: `1px solid ${C.border}` }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textSubtle, marginBottom: "16px" }}>
              Next steps
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "22px", alignItems: "center", marginBottom: "24px" }}>
              <Link href="/services/career-services" style={{ fontSize: "14px", color: C.blueLight, fontWeight: 500 }}>Career Services →</Link>
              <Link href="/pricing" style={{ fontSize: "14px", color: C.blueLight, fontWeight: 500 }}>Pricing →</Link>
            </div>
            <PrimaryLink href="/book">
              Book a consultation
              <ArrowRight />
            </PrimaryLink>
          </div>
        </div>
      </section>
    </div>
  );
}
