"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const scrollable = h.scrollHeight - h.clientHeight;
        if (scrollable <= 0) return setPct(0);
        const next = Math.min(100, Math.max(0, (h.scrollTop / scrollable) * 100));
        setPct(next);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
    >
      <div
        className="h-full origin-left"
        style={{
          width: `${pct}%`,
          background:
            "linear-gradient(90deg, rgba(200,146,61,0.6) 0%, #C8923D 50%, rgba(200,146,61,0.6) 100%)",
          boxShadow: "0 0 12px rgba(200,146,61,0.55)",
          transition: "width 90ms linear",
        }}
      />
    </div>
  );
}
