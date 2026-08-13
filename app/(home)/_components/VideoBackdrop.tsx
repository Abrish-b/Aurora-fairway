"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative video backdrop: autoplays, loops, never plays audio and never
 * shows controls.
 *
 * Two behaviours are kept for cost and accessibility rather than for the UI:
 *  - it pauses whenever it scrolls out of view, so it costs nothing off-screen
 *  - it stays on the poster frame under `prefers-reduced-motion`
 */
export default function VideoBackdrop({
  src,
  poster,
  className = "",
  overlay,
  objectPosition = "center",
}: {
  src: string;
  poster: string;
  className?: string;
  overlay?: React.ReactNode;
  objectPosition?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const tryPlay = () => {
      if (reduced.matches || !video.paused) return;
      video.play().catch(() => {
        /* autoplay refused — the poster frame stands in */
      });
    };

    // Visibility is recomputed from the live rect: a fast scroll can deliver a
    // batch of already-stale observer records.
    const sync = () => {
      const r = video.getBoundingClientRect();
      const visible = r.bottom > 0 && r.top < window.innerHeight && r.width > 0;
      if (visible) {
        tryPlay();
      } else if (!video.paused) {
        video.pause();
      }
    };

    const io = new IntersectionObserver(sync, { threshold: [0, 0.05, 0.5] });
    io.observe(video);
    sync();

    const onReducedChange = () => {
      if (reduced.matches) video.pause();
      else tryPlay();
    };
    reduced.addEventListener("change", onReducedChange);

    return () => {
      io.disconnect();
      reduced.removeEventListener("change", onReducedChange);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
      />
      {overlay}
    </div>
  );
}
