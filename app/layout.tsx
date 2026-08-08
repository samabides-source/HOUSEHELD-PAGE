import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Haushaltsaufgaben im Griff`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: site.name,
    title: `${site.name} – Haushaltsaufgaben im Griff`,
    description: site.description,
    url: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
