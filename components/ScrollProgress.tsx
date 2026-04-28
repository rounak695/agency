"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const bar = barRef.current;
      if (!bar) return;
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background: "rgba(255,255,255,0.06)",
        zIndex: 100,
        pointerEvents: "none",
      }}
    >
      <div
        ref={barRef}
        style={{
          height: "100%",
          background: "var(--purple)",
          width: "0%",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
