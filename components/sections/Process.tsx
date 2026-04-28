"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    body: "Brief, audit, and deep understanding of your brand, market, and goals.",
    purple: true,
  },
  {
    num: "02",
    title: "Define",
    body: "Strategy, positioning, naming, and brand voice.",
    purple: false,
  },
  {
    num: "03",
    title: "Design",
    body: "Visual identity, web design, and all brand assets.",
    purple: false,
  },
  {
    num: "04",
    title: "Develop",
    body: "Website development, marketing assets, and tech setup.",
    purple: false,
  },
  {
    num: "05",
    title: "Deploy",
    body: "Launch across all channels. Fully live and tested.",
    purple: false,
  },
  {
    num: "06",
    title: "Grow",
    body: "Ongoing support, iteration, and brand evolution.",
    purple: false,
  },
];

function Step({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ display: "flex", flexDirection: "column", gap: 0 }}
    >
      <span
        style={{
          fontFamily: "var(--font)",
          fontWeight: 300,
          fontSize: 11,
          color: "var(--text-dim)",
          letterSpacing: "0.2em",
          marginBottom: 16,
        }}
      >
        {step.num}
      </span>

      {/* Vertical line accent */}
      <div
        style={{
          width: 1,
          height: 40,
          background: step.purple
            ? "var(--purple)"
            : "rgba(255,255,255,0.1)",
          marginBottom: 16,
        }}
      />

      <h3
        style={{
          fontFamily: "var(--font)",
          fontWeight: 600,
          fontSize: 16,
          color: "#fff",
          marginBottom: 10,
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font)",
          fontWeight: 400,
          fontSize: 13,
          color: "var(--text-muted)",
          lineHeight: 1.7,
        }}
      >
        {step.body}
      </p>
    </motion.div>
  );
}

export default function Process() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      style={{ background: "var(--bg-2)", paddingTop: 140, paddingBottom: 140 }}
    >
      <div className="section-pad">
        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 80 }}>
          <motion.p
            className="label-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 24 }}
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "var(--font)",
              fontWeight: 900,
              fontSize: "clamp(52px, 7vw, 100px)",
              color: "#fff",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            From brief to launch.
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 32,
          }}
          className="process-grid"
        >
          {STEPS.map((step, i) => (
            <Step key={i} step={step} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .process-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
