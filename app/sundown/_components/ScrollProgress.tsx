"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const next = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(1, Math.max(0, next)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
    >
      <div
        className="h-full origin-left"
        style={{
          transform: `scaleX(${progress})`,
          transition: "transform 80ms linear",
          background:
            "linear-gradient(90deg, #f6b84b 0%, #ffcc73 40%, #d99a2b 100%)",
          boxShadow: "0 0 12px rgba(246, 184, 75, 0.55)",
        }}
      />
    </div>
  );
}
