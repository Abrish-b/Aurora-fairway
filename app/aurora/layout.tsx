import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurora for SACCOs — Institutional liquidity for member lending",
  description:
    "Aurora is Fairway's verified liquidity and settlement rail for Ethiopian SACCOs. Request institutional liquidity, disburse approved funds to members and SMEs, and track repayment from one workspace — your SACCO remains the lender.",
  openGraph: {
    title: "Aurora for SACCOs — Institutional liquidity for member lending",
    description:
      "A verified liquidity and settlement rail for Ethiopian SACCOs. Your SACCO remains the lender; Aurora provides the capital rail, the workspace, and the audit trail.",
    siteName: "Aurora by Fairway",
    type: "website",
  },
};

export default function AuroraLayout({ children }: { children: ReactNode }) {
  return <div className="antialiased">{children}</div>;
}
