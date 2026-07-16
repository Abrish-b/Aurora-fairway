"use client";

import { useEffect, useRef, useState } from "react";
import { Hourglass, Zap, Repeat } from "lucide-react";

const GOLD = "#C8F031";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.58)";
const IVORY_MUTED = "rgba(242,237,223,0.40)";
const DIVIDER = "rgba(242,237,223,0.10)";

type Labels = {
  slowLabel: string;
  slowEyebrow: string;
  slowSteps: string[];
  fastLabel: string;
  fastEyebrow: string;
  fastSteps: string[];
  footnote: string;
};

export default function SpeedComparisonVisual({ labels }: { labels: Labels }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && entry.intersectionRatio > 0.3 && setRun(true),
      { threshold: [0, 0.3, 0.7] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
      <Track
        eyebrow={labels.slowEyebrow}
        title={labels.slowLabel}
        steps={labels.slowSteps}
        run={run}
        slow
      />
      <Track
        eyebrow={labels.fastEyebrow}
        title={labels.fastLabel}
        steps={labels.fastSteps}
        run={run}
      />
      <p
        className="lg:col-span-2 border-t pt-6 text-[12px] font-light leading-[1.7]"
        style={{ borderColor: DIVIDER, color: IVORY_MUTED, maxWidth: "60ch" }}
      >
        {labels.footnote}
      </p>
    </div>
  );
}

function Track({
  eyebrow,
  title,
  steps,
  run,
  slow = false,
}: {
  eyebrow: string;
  title: string;
  steps: string[];
  run: boolean;
  slow?: boolean;
}) {
  const Icon = slow ? Hourglass : Zap;
  const total = steps.length;
  const totalDuration = slow ? 4200 : 1600;
  return (
    <div>
      <div className="flex items-center gap-3">
        <Icon size={16} strokeWidth={1.5} style={{ color: slow ? IVORY_DIM : GOLD }} />
        <p className="text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: slow ? IVORY_MUTED : GOLD }}>
          {eyebrow}
        </p>
      </div>
      <h3 className="mt-3 text-[18px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
        {title}
      </h3>

      <div className="mt-7">
        <div
          className="relative h-[6px] w-full overflow-hidden"
          style={{ background: "rgba(242,237,223,0.06)" }}
        >
          <div
            className="absolute left-0 top-0 h-full"
            style={{
              width: run ? "100%" : "0%",
              background: slow
                ? "rgba(242,237,223,0.30)"
                : `linear-gradient(90deg, ${GOLD} 0%, rgba(200,240,49,0.55) 100%)`,
              transition: `width ${totalDuration}ms cubic-bezier(0.22,1,0.36,1)`,
            }}
          />
        </div>

        <div className="mt-5 grid gap-3" style={{ gridTemplateColumns: `repeat(${total}, 1fr)` }}>
          {steps.map((s, i) => (
            <div key={s} className="text-[11px] leading-[1.5]" style={{ color: IVORY_DIM }}>
              <span
                className="mb-2 inline-block h-[3px] w-6"
                style={{
                  background: run && !slow ? GOLD : "rgba(242,237,223,0.30)",
                  transitionDelay: `${(totalDuration / total) * i}ms`,
                  transition: "background 400ms ease",
                }}
              />
              <p>{s}</p>
            </div>
          ))}
        </div>
      </div>

      {!slow && (
        <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: GOLD }}>
          <Repeat size={12} strokeWidth={1.6} />
          <span>Repeatable</span>
        </div>
      )}
    </div>
  );
}
