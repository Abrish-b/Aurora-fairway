"use client";

import { useState, type ComponentType, type CSSProperties } from "react";

import { FAINT, GOLD, GOLD_HAIR, GOLD_LIGHT, HAIR, INK } from "./theme";

type IconType = ComponentType<{ className?: string; strokeWidth?: number; style?: CSSProperties }>;

export type ExplorerItem = {
  /** Optional short badge (e.g. "M1") shown instead of the running index. */
  badge?: string;
  icon: IconType;
  title: string;
  detail: string;
};

/**
 * A compact tile grid where only the selected item's description is shown.
 * Keeps the full content on the page without printing all of it at once.
 */
export default function ExplorerGrid({
  items,
  cols = "lg:grid-cols-4",
}: {
  items: ExplorerItem[];
  cols?: string;
}) {
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <div>
      <div
        className={`grid gap-px overflow-hidden rounded-[16px] border sm:grid-cols-2 ${cols}`}
        style={{ borderColor: HAIR, background: HAIR }}
      >
        {items.map((it, i) => {
          const on = i === active;
          return (
            <button
              key={it.title}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-pressed={on}
              className="group relative flex cursor-pointer flex-col items-start gap-2.5 p-4 text-left transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#ffcc73] sm:p-5"
              style={{ background: on ? "rgba(246,184,75,0.09)" : "#060d18" }}
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] transition duration-300"
                style={{
                  background: `linear-gradient(90deg, ${GOLD}, transparent)`,
                  opacity: on ? 0.85 : 0,
                }}
              />
              <span className="flex w-full items-center justify-between gap-2">
                <it.icon
                  className="h-4 w-4 transition duration-300"
                  strokeWidth={1.5}
                  style={{ color: on ? GOLD_LIGHT : "rgba(244,239,227,0.5)" }}
                />
                <span
                  className="font-mono text-[9.5px] font-bold tracking-[0.14em] transition duration-300"
                  style={{ color: on ? GOLD : "rgba(244,239,227,0.22)" }}
                >
                  {it.badge ?? String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <span
                className="text-[12.5px] font-semibold leading-[1.35] transition duration-300"
                style={{ color: on ? INK : "rgba(244,239,227,0.72)" }}
              >
                {it.title}
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={active}
        className="aurora-fade-in mt-2 flex items-start gap-3 rounded-[14px] border px-4 py-3"
        style={{ borderColor: GOLD_HAIR, background: "rgba(246,184,75,0.045)" }}
      >
        <span
          className="mt-px shrink-0 font-mono text-[9.5px] font-bold tracking-[0.14em]"
          style={{ color: GOLD }}
        >
          {item.badge ?? String(active + 1).padStart(2, "0")}
        </span>
        <p className="text-[12.5px] leading-[1.6]" style={{ color: "rgba(244,239,227,0.78)" }}>
          <span className="font-semibold" style={{ color: INK }}>
            {item.title}.
          </span>{" "}
          {item.detail}
        </p>
        <span
          aria-hidden
          className="ml-auto hidden shrink-0 self-center font-mono text-[9px] uppercase tracking-[0.14em] sm:block"
          style={{ color: FAINT }}
        >
          {active + 1}/{items.length}
        </span>
      </div>
    </div>
  );
}
