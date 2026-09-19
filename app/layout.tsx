import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/data/content";
import { publishBlocked } from "@/lib/publishGate";
import { siteUrl } from "@/lib/siteUrl";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "../public/fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/inter-600.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-inter",
});

const lora = localFont({
  src: [
    { path: "../public/fonts/lora-regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/lora-italic.woff2", weight: "400", style: "italic" },
  ],
  display: "swap",
  variable: "--font-lora",
});

const description =
  "Kendinizi güvenle anlatabileceğiniz bir alan. Psikolojik danışman Buse Sarıdaş ile online bireysel danışma ve LGS–YKS eğitim danışmanlığı.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `Demo | ${site.documentHeading}`,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: site.documentHeading,
    title: `Demo | ${site.documentHeading}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `Demo | ${site.documentHeading}`,
    description,
  },
  robots: publishBlocked
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F5F0EB",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${lora.variable}`}>
      <body>
        {children}
        
      </body>
    </html>
  );
}
