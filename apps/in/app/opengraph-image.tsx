import { ImageResponse } from "next/og";

export const alt = "Solvrex — Career Services, Technology Consulting & Business Enablement";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Site-wide Open Graph / Twitter card image (generated).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#f5f5f7",
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: 4, color: "#7a9dff", marginBottom: 28 }}>
          SOLVREX
        </div>
        <div style={{ fontSize: 62, fontWeight: 600, lineHeight: 1.12, maxWidth: 940 }}>
          Career services, technology consulting & business enablement.
        </div>
        <div style={{ fontSize: 27, color: "#a0a3b8", marginTop: 30 }}>
          Human-led. Technology-enabled.
        </div>
      </div>
    ),
    { ...size }
  );
}
