"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const HEADLINE = ["Your brand is", "the first", "impression."];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const stats = [
  { num: "3+", label: "Brands Built" },
  { num: "100%", label: "Client Retention" },
  { num: "<14 Days", label: "Avg. Delivery" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Subtle purple glow — right side */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top label */}
      <motion.p
        className="label-sm"
        style={{ position: "absolute", top: 96, left: "clamp(24px, 6vw, 96px)" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Xcelarate Studio · Branding Consultancy
      </motion.p>

      {/* Headline */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          fontFamily: "var(--font)",
          fontWeight: 900,
          fontSize: "clamp(72px, 12vw, 180px)",
          lineHeight: 0.92,
          color: "#fff",
          letterSpacing: "-0.03em",
          marginBottom: "clamp(40px, 5vw, 64px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {HEADLINE.map((line, li) => (
          <div key={li} style={{ display: "block", overflow: "hidden" }}>
            {line.split(" ").map((word, wi) => (
              <motion.span
                key={wi}
                variants={wordVariant}
                style={{
                  display: "inline-block",
                  marginRight: "0.22em",
                  color: word === "impression." ? "var(--purple)" : "inherit",
                  fontStyle: word === "impression." ? "italic" : "normal",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.h1>

      {/* Body row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 40,
          position: "relative",
          zIndex: 1,
          flexWrap: "wrap",
        }}
      >
        {/* Left text */}
        <p
          style={{
            fontFamily: "var(--font)",
            fontWeight: 400,
            fontSize: 16,
            color: "var(--text-muted)",
            lineHeight: 1.75,
            maxWidth: 360,
          }}
        >
          End-to-end branding consultancy. We build brands that win markets — strategy, identity, web, marketing, and everything in between.
        </p>

        {/* Vertical divider */}
        <div
          aria-hidden="true"
          style={{
            width: 1,
            height: 64,
            background: "var(--text-dim)",
            alignSelf: "center",
            flexShrink: 0,
          }}
        />

        {/* CTA */}
        <a
          href="mailto:hello@xcelarate.studio"
          style={{
            fontFamily: "var(--font)",
            fontWeight: 500,
            fontSize: 15,
            color: "#fff",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            alignSelf: "center",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--purple-light)";
            const arrow = e.currentTarget.querySelector<HTMLSpanElement>(".cta-arrow");
            if (arrow) arrow.style.transform = "translateX(4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#fff";
            const arrow = e.currentTarget.querySelector<HTMLSpanElement>(".cta-arrow");
            if (arrow) arrow.style.transform = "translateX(0)";
          }}
        >
          Start Your Brand Journey
          <span
            className="cta-arrow"
            style={{ transition: "transform 0.2s ease", display: "inline-block" }}
          >
            →
          </span>
        </a>
      </motion.div>

      {/* Bottom stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hero-stats"
        style={{
          position: "absolute",
          bottom: 40,
          left: "clamp(24px, 6vw, 96px)",
          display: "flex",
          gap: 48,
          flexWrap: "wrap",
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
            style={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <span
              style={{
                fontFamily: "var(--font)",
                fontWeight: 700,
                fontSize: 28,
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 12,
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
              }}
            >
              {s.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-stats {
            position: static !important;
            margin-top: 48px;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
