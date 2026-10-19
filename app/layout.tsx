import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://jackmiller825.github.io/JPMD";
const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "JPM COIN ($JPMD) | An Independent Ethereum Meme",
  description:
    "A cinematic Ethereum meme token concept exploring the collision of Wall Street and blockchain culture. Independent and not affiliated with JPMorgan.",
  applicationName: "JPM COIN",
  icons: { icon: `${assetBase}/images/favicon.png`, apple: `${assetBase}/images/favicon.png` },
  alternates: { canonical: "/" },
  openGraph: {
    title: "JPM COIN ($JPMD) — The Money Never Sleeps",
    description:
      "An independent Ethereum community meme inspired by finance entering the on-chain era. Not affiliated with any bank.",
    type: "website",
    url: "/",
    siteName: "JPM COIN ($JPMD)",
    images: [
      {
        url: "/images/social-banner.webp",
        width: 1500,
        height: 500,
        alt: "JPM COIN $JPMD independent meme token banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JPM COIN ($JPMD) — The Money Never Sleeps",
    description:
      "An independent Ethereum community meme. Not affiliated with JPMorgan Chase or any bank.",
    images: ["/images/social-banner.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
