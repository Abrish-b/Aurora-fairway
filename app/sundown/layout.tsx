import type { ReactNode } from "react";
import type { Metadata } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";

/* Sundown design system type stack — Cinzel engraved display,
   Cormorant editorial serif, IBM Plex Sans UI, IBM Plex Mono data. */
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sd-display",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sd-serif",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sd-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-sd-mono",
});

export const metadata: Metadata = {
  title: "Sundown — Open identity & compliance layer for P2P credit on Cardano",
  description:
    "Sundown is an open-source metadata standard and off-chain indexer for peer-to-peer credit markets on Cardano. It adds identity proofs, compliance indexing, and lender-side filtering around existing lending contracts. Base contracts remain unchanged.",
  openGraph: {
    title: "Sundown — Open identity & compliance layer for P2P credit on Cardano",
    description:
      "An open-source metadata standard and off-chain indexer for verified discovery in Cardano credit markets. Apache-2.0.",
    siteName: "Sundown by Fairway",
    type: "website",
  },
};

export default function SundownLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${cinzel.variable} ${cormorant.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      style={{
        background: "#07080B",
        color: "#F4F0E6",
        fontFamily: "var(--font-sd-sans), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {children}
    </div>
  );
}
