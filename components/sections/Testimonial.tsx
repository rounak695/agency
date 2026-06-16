"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const QUOTE =
  "Working with Xcelarate was different from any agency experience we'd had before. They didn't just design — they thought. Every decision was strategic, every visual had a reason. Our brand went from forgettable to unforgettable.";

const WORDS = QUOTE.split(" ");

const containerVariant = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.02, delayChildren: 0.1 },
  },
};

const wordVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "120px clamp(24px, 6vw, 96px)",
      }}
    >
      <div
        ref={ref}
        style={{ maxWidth: 800, margin: "0 auto" }}
      >
        {/* Opening quotation mark */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
          style={{
            display: "block",
            fontFamily: "var(--font)",
            fontWeight: 300,
            fontSize: 140,
            color: "var(--purple)",
            lineHeight: 1,
            marginBottom: -20,
            userSelect: "none",
          }}
        >
          &ldquo;
        </motion.span>

        {/* Quote — word-by-word reveal */}
        <motion.p
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 300,
            fontSize: "clamp(20px, 2.2vw, 30px)",
            color: "#fff",
            lineHeight: 1.65,
          }}
        >
          {WORDS.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariant}
              style={{ display: "inline-block", marginRight: "0.28em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 48,
          }}
        >
          <div
            style={{
              width: 40,
              height: 1,
              background: "rgba(255,255,255,0.2)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font)",
              fontWeight: 500,
              fontSize: 13,
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            — Founder, TruPixel Studio
          </span>
        </motion.div>
      </div>
    </section>
  );
}
