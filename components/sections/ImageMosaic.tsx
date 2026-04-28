"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function ImagePlaceholder({
  label,
  height,
  delay = 0,
}: {
  label: string;
  height: number | string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 1.02 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      style={{
        background: "#161616",
        height,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font)",
          fontWeight: 900,
          fontSize: "clamp(32px, 6vw, 72px)",
          color: "rgba(255,255,255,0.04)",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.03em",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function ImageMosaic() {
  const textRef = useRef<HTMLDivElement>(null);
  const textInView = useInView(textRef, { once: true, margin: "-60px" });

  return (
    <section style={{ background: "#0A0A0A" }}>
      {/* ROW 1: Full-width image placeholder */}
      <div
        style={{
          height: 480,
          background: "#161616",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font)",
            fontWeight: 900,
            fontSize: "15vw",
            color: "rgba(255,255,255,0.03)",
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            letterSpacing: "-0.04em",
          }}
        >
          Our Work
        </span>
      </div>

      {/* ROW 2: Three equal columns */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
        className="mosaic-row2"
      >
        {/* Column 1: editorial text block */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 20 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          style={{
            background: "#111111",
            height: 320,
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderLeft: "2px solid #7C3AED",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font)",
              fontWeight: 600,
              fontSize: 22,
              color: "#fff",
              lineHeight: 1.4,
            }}
          >
            Our work speaks for itself.
          </p>
          <a
            href="#work"
            style={{
              fontFamily: "var(--font)",
              fontWeight: 400,
              fontSize: 14,
              color: "#666666",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
          >
            View all work →
          </a>
        </motion.div>

        {/* Column 2: image placeholder */}
        <ImagePlaceholder label="TruPixel" height={320} delay={0.1} />

        {/* Column 3: image placeholder */}
        <ImagePlaceholder label="Abstract" height={320} delay={0.2} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mosaic-row2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
