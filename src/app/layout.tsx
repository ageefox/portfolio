import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Anastasia Galkova · Applied ML and data systems",
    template: "%s · Anastasia Galkova",
  },
  description:
    "Selected machine-learning and data projects by Anastasia Galkova, with a focus on careful evaluation and reproducible results.",
  openGraph: {
    type: "website",
    title: "Anastasia Galkova · Applied ML and data systems",
    description:
      "Selected machine-learning and data projects, with a focus on careful evaluation and reproducible results.",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
