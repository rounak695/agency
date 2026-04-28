"use client";

import { useEffect } from "react";

export default function BodyLoader() {
  useEffect(() => {
    // Prevent FOUC — body fades in after DOM is ready
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.35s ease";
    const t = requestAnimationFrame(() => {
      document.body.style.opacity = "1";
    });
    return () => cancelAnimationFrame(t);
  }, []);

  return null;
}
