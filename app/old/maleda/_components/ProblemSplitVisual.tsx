"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Coins, Sun } from "lucide-react";

const GOLD = "#D6A84F";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.62)";

type Labels = {
  leftEyebrow: string;
  leftTitle: string;
  leftChips: string[];
  middleLabel: string;
  rightEyebrow: string;
  rightTitle: string;
  rightChips: string[];
};

export default function ProblemSplitVisual({ labels }: { labels: Labels }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && entry.intersectionRatio > 0.3 && setVisible(true),
      { threshold: [0, 0.3, 0.7] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-16">
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <Side
          icon={Building2}
          eyebrow={labels.leftEyebrow}
          title={labels.leftTitle}
          chips={labels.leftChips}
        />
        <Middle label={labels.middleLabel} visible={visible} />
        <Side
          icon={Coins}
          eyebrow={labels.rightEyebrow}
          title={labels.rightTitle}
          chips={labels.rightChips}
          alignRight
        />
      </div>
    </div>
  );
}

function Side({
  icon: Icon,
  eyebrow,
  title,
  chips,
  alignRight = false,
}: {
  icon: typeof Sun;
  eyebrow: string;
  title: string;
  chips: string[];
  alignRight?: boolean;
}) {
  return (
    <div className={alignRight ? "lg:text-right" : ""}>
      <div className={`flex items-center gap-3 ${alignRight ? "lg:justify-end" : ""}`}>
        <Icon size={16} strokeWidth={1.5} style={{ color: GOLD }} />
        <p className="text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
          {eyebrow}
        </p>
      </div>
      <h3 className="mt-3 text-[20px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
        {title}
      </h3>
      <div className={`mt-4 flex flex-wrap gap-x-3 gap-y-1 ${alignRight ? "lg:justify-end" : ""}`}>
        {chips.map((c) => (
          <span key={c} className="text-[12px] font-light" style={{ color: IVORY_DIM }}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function Middle({ label, visible }: { label: string; visible: boolean }) {
  return (
    <div className="relative flex flex-col items-center px-2">
      <div
        aria-hidden
        className="h-px w-24 lg:w-32"
        style={{
          background: "repeating-linear-gradient(90deg, rgba(214,168,79,0.7) 0 6px, transparent 6px 12px)",
          opacity: visible ? 1 : 0.2,
          transition: "opacity 800ms ease",
        }}
      />
      <div
        className="my-3 flex h-[64px] w-[64px] items-center justify-center"
        style={{
          border: `1px solid ${GOLD}`,
          background: "#0A1612",
          boxShadow: visible ? `0 0 0 6px rgba(214,168,79,0.10)` : "none",
          transition: "box-shadow 700ms ease",
        }}
      >
        <Sun size={22} strokeWidth={1.5} style={{ color: GOLD }} />
      </div>
      <p
        className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em]"
        style={{ color: GOLD }}
      >
        {label}
      </p>
      <div
        aria-hidden
        className="mt-3 h-px w-24 lg:w-32"
        style={{
          background: "repeating-linear-gradient(90deg, rgba(214,168,79,0.7) 0 6px, transparent 6px 12px)",
          opacity: visible ? 1 : 0.2,
          transition: "opacity 800ms ease",
        }}
      />
    </div>
  );
}
