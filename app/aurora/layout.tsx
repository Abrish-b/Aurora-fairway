import type { ReactNode } from "react";

export default function AuroraProposalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {/* Scoped to this route: keeps overscroll and paint gaps dark instead
          of the site-wide bone background flashing behind a dark page. */}
      <style>{`html, body { background: #050B14; } ::selection { background: #F6B84B; color: #130b02; }`}</style>
      {children}
    </>
  );
}
