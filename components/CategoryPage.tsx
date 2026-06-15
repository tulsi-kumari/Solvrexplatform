import Link from "next/link";
import { C, eyebrow, pageH1 } from "@/lib/theme";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getRolesByLevel, type LevelInfo } from "@/data/roles";

const styles = `
  .sx-rolegrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; grid-auto-rows: 1fr; }
  .sx-rolecard { display: flex; flex-direction: column; padding: 22px; border-radius: 10px; text-align: left; }
  .sx-rolecard:hover .sx-detail { text-decoration: underline; }
  .sx-rolecard:focus-visible { outline: 2px solid ${C.blueLight}; outline-offset: 2px; }
  @media (max-width: 620px) { .sx-rolegrid { grid-template-columns: 1fr; grid-auto-rows: auto; } }
`;

export function CategoryPage({ level }: { level: LevelInfo }) {
  const roles = getRolesByLevel(level.id);

  return (
    <div style={{ backgroundColor: C.bg }}>
      <style>{styles}</style>

      {/* Header */}
      <section style={{ padding: "80px 0 56px", borderBottom: `1px solid ${C.border}` }}>
        <div className="sx-container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers", href: "/careers" }, { label: level.name }]} />
          <p style={eyebrow}>Careers</p>
          <h1 style={{ ...pageH1, maxWidth: "600px", marginBottom: "18px" }}>{level.name} roles</h1>
          <p style={{ fontSize: "16px", color: C.textMuted, lineHeight: 1.7, maxWidth: "620px" }}>{level.description}</p>
        </div>
      </section>

      {/* Roles */}
      <section style={{ padding: "56px 0 88px" }}>
        <div className="sx-container">
          <div className="sx-rolegrid">
            {roles.map((role) => (
              <Link
                key={role.id}
                href={`/careers/${role.id}`}
                className="sx-rolecard"
                aria-label={`View details for ${role.title}`}
              >
                <h2 style={{ fontSize: "19px", fontWeight: 600, color: C.text, marginBottom: "10px", letterSpacing: "-0.015em", lineHeight: 1.3 }}>{role.title}</h2>
                <p style={{ fontSize: "14px", color: C.textMuted, lineHeight: 1.6, marginBottom: "20px", flex: 1 }}>{role.tagline}</p>
                <span className="sx-detail" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: 500, color: C.blueLight }}>
                  View details
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
