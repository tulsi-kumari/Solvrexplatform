import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const HOME_TITLE = "Solvrex | Career Services, Technology Consulting & Business Support";
const HOME_DESCRIPTION =
  "Human-led career services from Solvrex — resume reviews, LinkedIn optimization, job search support, and interview prep — plus technology consulting and enablement.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: HOME_TITLE, template: `%s | ${siteConfig.name}` },
  description: HOME_DESCRIPTION,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: `${siteConfig.url}/`,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sx-bg" aria-hidden="true" />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "transparent",
          }}
        >
          <Navbar />
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
