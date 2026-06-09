import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const title =
  "Solvrex | Technology Consulting, Career Support & Business Solutions";
const description =
  "Solvrex helps professionals and businesses achieve measurable outcomes through technology consulting, career support, operational guidance, and practical business solutions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://solvrex.in"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://solvrex.in/",
    title,
    description,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#0d0e14",
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
