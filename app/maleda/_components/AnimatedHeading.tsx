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
          {line.split(" ").map((word, wordIdx, words) => (
            <span key={`${lineIdx}-w${wordIdx}`}>
              {/* words stay intact; wrapping only happens at the spaces between them */}
              <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                {Array.from(word).map((ch, i) => {
                  const delay = charIndex * charDelay;
                  charIndex += 1;
                  return (
                    <span
                      key={`${lineIdx}-${wordIdx}-${i}`}
                      style={{
                        display: "inline-block",
                        opacity: started ? 1 : 0,
                        transform: started ? "translateX(0)" : "translateX(-18px)",
                        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
                        willChange: "opacity, transform",
                      }}
                    >
                      {ch}
                    </span>
                  );
                })}
              </span>
              {wordIdx < words.length - 1 ? " " : null}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
