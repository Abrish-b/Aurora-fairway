"use client";

import { useEffect, useState } from "react";

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  charDelay?: number;
  initialDelay?: number;
  duration?: number;
};

export default function AnimatedHeading({
  text,
  className = "",
  charDelay = 30,
  initialDelay = 200,
  duration = 500,
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), initialDelay);
    return () => clearTimeout(t);
  }, [initialDelay]);

  const lines = text.split("\n");
  let charIndex = 0;

  return (
    <h1 className={className}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {Array.from(line).map((ch, i) => {
            const delay = charIndex * charDelay;
            charIndex += 1;
            return (
              <span
                key={`${lineIdx}-${i}`}
                aria-hidden={false}
                style={{
                  display: "inline-block",
                  opacity: started ? 1 : 0,
                  transform: started ? "translateX(0)" : "translateX(-18px)",
                  transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
                  willChange: "opacity, transform",
                }}
              >
                {ch === " " ? " " : ch}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
