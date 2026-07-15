import type { ReactNode } from "react";
import { Inter, Noto_Sans_Ethiopic } from "next/font/google";

import ScrollProgress from "./_components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-maleda-en",
});

const ethiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-maleda-am",
});

export const metadata = {
  title: "Aurora — Access global digital capital for productive lending",
  description:
    "Aurora is structured capital access infrastructure for regulated lending institutions. Lenders continue lending; Aurora connects them with global digital capital participation.",
};

export default function MaledaLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${inter.variable} ${ethiopic.variable} relative antialiased`}
      style={{
        fontFamily: "var(--font-maleda-en), Inter, system-ui, sans-serif",
        background: "#0A1612",
        color: "rgba(242,237,223,0.78)",
      }}
    >
      <ScrollProgress />
      {children}
    </div>
  );
}
