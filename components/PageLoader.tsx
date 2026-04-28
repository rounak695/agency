"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

export default function PageLoader() {
  const [show, setShow] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only play once per session
    if (sessionStorage.getItem("xcel-loaded")) {
      setShow(false);
      return;
    }

    const el = loaderRef.current;
    if (!el) return;

    // Lock scroll
    document.body.style.overflow = "hidden";

    // Step 1: fade in logo (0–0.4s)
    // Step 2: slide loader up off screen (0.5–1.3s)
    const timer = setTimeout(() => {
      animate(
        el,
        { clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"] },
        {
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
          onComplete: () => {
            setShow(false);
            document.body.style.overflow = "";
            sessionStorage.setItem("xcel-loaded", "1");
          },
        }
      );
    }, 750);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      ref={loaderRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0A0A0A",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        clipPath: "inset(0 0 0 0)",
      }}
    >
      <XMark />
    </div>
  );
}

function XMark() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{
        animation: "xFadeIn 0.4s ease forwards",
      }}
    >
      <style>{`
        @keyframes xFadeIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <path
        d="M3 3L10 10M17 3L10 10M10 10L3 17M10 10L17 17"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
