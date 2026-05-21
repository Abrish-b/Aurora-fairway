"use client";

import { useEffect, useRef, useState } from "react";

const GOLD = "#D6A84F";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.58)";
const IVORY_MUTED = "rgba(242,237,223,0.40)";

export default function ProblemGapDiagram() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
          timer = window.setTimeout(() => setResolved(true), 1200);
        }
      },
      { threshold: [0, 0.4, 0.7] },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={ref} className="mt-16">
      <div
        className="relative grid items-center gap-6"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        <Side
          eyebrow="Local credit demand"
          title="Businesses ready to grow"
          chips={["SMEs", "Farmers", "Traders", "Women-led"]}
        />

        <CenterGap resolved={resolved} />

        <Side
          eyebrow="Trusted capital"
          title="Institutional liquidity"
          chips={["Banks", "DFIs", "Capital partners", "Public bodies"]}
          alignRight
        />
      </div>

      <p
        className="mt-10 text-center text-[11px] font-medium uppercase tracking-[0.22em]"
        style={{ color: resolved ? GOLD : IVORY_MUTED, transition: "color 600ms ease" }}
      >
        {resolved ? "Maleda closes the gap" : "Fragmented infrastructure"}
      </p>
    </div>
  );
}

function Side({
  eyebrow,
  title,
  chips,
  alignRight = false,
}: {
  eyebrow: string;
  title: string;
  chips: string[];
  alignRight?: boolean;
}) {
  return (
    <div className={alignRight ? "text-right" : ""}>
      <p
        className="text-[10px] font-medium uppercase tracking-[0.22em]"
        style={{ color: GOLD }}
      >
        {eyebrow}
      </p>
      <h3
        className="mt-3 text-[20px] font-medium leading-snug tracking-tight"
        style={{ color: IVORY }}
      >
        {title}
      </h3>
      <div className={`mt-4 flex flex-wrap gap-x-3 gap-y-1 ${alignRight ? "justify-end" : ""}`}>
        {chips.map((c) => (
          <span
            key={c}
            className="text-[12px] font-light"
            style={{ color: IVORY_DIM }}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function CenterGap({ resolved }: { resolved: boolean }) {
  return (
    <div className="relative flex flex-col items-center">
      <div aria-hidden className="relative flex h-px w-full items-center justify-center">
        <span
          className="absolute left-0 h-px"
          style={{
            width: resolved ? "50%" : "36%",
            background:
              "repeating-linear-gradient(90deg, rgba(242,237,223,0.55) 0, rgba(242,237,223,0.55) 6px, transparent 6px, transparent 12px)",
            transition: "width 800ms cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <span
          className="absolute right-0 h-px"
          style={{
            width: resolved ? "50%" : "36%",
            background:
              "repeating-linear-gradient(90deg, rgba(242,237,223,0.55) 0, rgba(242,237,223,0.55) 6px, transparent 6px, transparent 12px)",
            transition: "width 800ms cubic-bezier(0.22,1,0.36,1)",
          }}
        />

        <div
          className="relative z-10 px-4 py-2 text-center transition-all duration-700"
          style={{
            borderTop: `1px solid ${resolved ? GOLD : "rgba(242,237,223,0.30)"}`,
            borderBottom: `1px solid ${resolved ? GOLD : "rgba(242,237,223,0.30)"}`,
            background: "#0A1612",
          }}
        >
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: resolved ? GOLD : IVORY_DIM }}
          >
            {resolved ? "Maleda" : "Gap"}
          </p>
        </div>
      </div>
    </div>
  );
}
