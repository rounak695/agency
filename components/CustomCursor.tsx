"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const pos = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouchDevice) return;

    const ring = ringRef.current;
    if (!ring) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      // Lerp toward mouse
      pos.current.x += (mouse.current.x - pos.current.x) * 0.14;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.14;

      ring.style.left = `${pos.current.x}px`;
      ring.style.top = `${pos.current.y}px`;

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Hover state management ──────────────────────
    const applyHover = () => {
      ring.classList.remove("hover", "case-study");
      ring.classList.add("hover");
    };

    const applyCaseStudy = () => {
      ring.classList.remove("hover");
      ring.classList.add("case-study");
    };

    const removeHover = () => {
      ring.classList.remove("hover", "case-study");
    };

    const attachListeners = () => {
      document.querySelectorAll(".case-study-item").forEach((el) => {
        el.addEventListener("mouseenter", applyCaseStudy);
        el.addEventListener("mouseleave", removeHover);
      });
      document.querySelectorAll("a, button").forEach((el) => {
        if (!el.closest(".case-study-item")) {
          el.addEventListener("mouseenter", applyHover);
          el.addEventListener("mouseleave", removeHover);
        }
      });
    };

    attachListeners();

    // Re-attach on DOM mutations
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="cursor-ring" ref={ringRef} aria-hidden="true">
      <span ref={labelRef} className="cursor-label">VIEW</span>
    </div>
  );
}
