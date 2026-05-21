import type { ReactNode } from "react";
import { Geist } from "next/font/google";

import ScrollProgress from "./_components/ScrollProgress";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-maleda-sans",
});

export const metadata = {
  title: "Maleda — Morning-sun infrastructure for productive business finance",
  description:
    "Maleda helps regulated financial institutions deliver trusted local-currency financing to SMEs, traders, farmers, women-led enterprises, and growing businesses.",
};

export default function MaledaLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${geist.variable} relative antialiased`}
      style={{
        fontFamily: "var(--font-maleda-sans), Geist, system-ui, sans-serif",
        background: "#0A1612",
        color: "rgba(242,237,223,0.78)",
      }}
    >
      <ScrollProgress />
      {children}
    </div>
  );
}
