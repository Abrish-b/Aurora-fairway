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
  title: "Maleda — A new dawn for Ethiopia's SME lending ecosystem",
  description:
    "Maleda helps SACCOs and lending institutions expand local-currency financing for Ethiopian SMEs through trusted digital lending infrastructure.",
};

export default function MaledaLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${inter.variable} ${ethiopic.variable} relative antialiased`}
      style={{
        fontFamily: "var(--font-maleda-en), Inter, system-ui, sans-serif",
        background: "#0A0A0A",
        color: "rgba(242,237,223,0.78)",
      }}
    >
      {/* Keep overscroll dark while this route is mounted */}
      <style>{`html, body { background: #0A0A0A; }`}</style>
      <ScrollProgress />
      {children}
    </div>
  );
}
