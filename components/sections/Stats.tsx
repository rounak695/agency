"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// "<14 Days" handled as split: number part is "<14", label is "Days · Avg. Delivery"
const STATS = [
  { number: "3+",   label: "Brands Built" },
  { number: "100%", label: "Client Retention" },
  { number: "<14",  label: "Days · Avg. Delivery" },
  { number: "1000+",label: "Assets Delivered" },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function StatItem({
  stat,
  index,
  isActive,
}: {
  stat: (typeof STATS)[0];
  index: number;
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease }}
      style={{
        flex: 1,
        padding: "0 clamp(32px, 4vw, 64px)",
        borderRight:
          index < STATS.length - 1
            ? "1px solid rgba(255,255,255,0.07)"
            : "none",
      }}
    >
      {/* Big number */}
      <div
        style={{
          fontFamily: "var(--font)",
          fontWeight: 900,
          fontSize: "clamp(52px, 6vw, 88px)",
          color: "#FFFFFF",
          lineHeight: 1,
          letterSpacing: "-0.04em",
        }}
      >
        {stat.number}
      </div>

      {/* Label */}
      <p
        style={{
          fontFamily: "var(--font)",
          fontWeight: 400,
          fontSize: "12px",
          color: "#666666",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginTop: "12px",
        }}
      >
        {stat.label}
      </p>

      {/* Purple accent line */}
      <div
        style={{
          width: "32px",
          height: "1px",
          background: "#7C3AED",
          marginTop: "16px",
        }}
      />
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      <div
        ref={ref}
        style={{ display: "flex", alignItems: "flex-start" }}
        className="stats-row"
      >
        {STATS.map((stat, i) => (
          <StatItem key={i} stat={stat} index={i} isActive={inView} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-row {
            flex-direction: column !important;
            gap: 48px;
            padding: 0 var(--section-padding-x);
          }
          .stats-row > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            padding: 0 0 48px !important;
          }
          .stats-row > div:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
