import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";

import SunStage from "./_components/SunStage";
import ScrollProgress from "./_components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-maleda-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-maleda-display",
});

export const metadata = {
  title: "Maleda — Morning-sun infrastructure for productive business finance",
  description:
    "Maleda helps regulated financial institutions deliver trusted local-currency financing to SMEs, traders, farmers, women-led enterprises, and growing businesses.",
};

export default function MaledaLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${inter.variable} ${playfair.variable} relative bg-white text-neutral-900 antialiased`}
      style={{ fontFamily: "var(--font-maleda-sans), sans-serif" }}
    >
      <ScrollProgress />
      <SunStage />
      {children}
    </div>
  );
}
