import Link from "next/link";
import { C } from "@/lib/theme";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: C.bgFooter, borderTop: `1px solid ${C.border}` }}>
      <div
        className="sx-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "22px 0",
        }}
      >
        <p style={{ fontSize: "13px", color: C.textSubtle }}>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <a href={`mailto:${siteConfig.contactEmail}`} style={{ fontSize: "13px", color: C.textMuted }}>
            {siteConfig.contactEmail}
          </a>
          <Link href="/contact" style={{ fontSize: "13px", color: C.blueLight, fontWeight: 500 }}>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
