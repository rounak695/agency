"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
    } | null = null;

    async function initLenis() {
      try {
        const { default: Lenis } = await import("lenis");
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
          if (lenis) lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch {
        // Lenis failed — native scroll fallback
      }
    }

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
