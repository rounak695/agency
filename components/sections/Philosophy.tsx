"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BLOCKS = [
  {
    num: "01",
    title: "Good products die with bad branding.",
    body: "In a world of infinite scroll and zero attention, your brand has 3 seconds. Most businesses spend everything on the product and nothing on how it's perceived. That's where they lose.",
  },
  {
    num: "02",
    title: "A logo is not a brand. A system is.",
    body: "Every touchpoint you own — website, Instagram, pitch deck, email signature — must speak one language. Inconsistency destroys trust faster than any competitor can.",
  },
  {
    num: "03",
    title: "International quality. Accessible to everyone.",
    body: "The gap between a ₹500 Canva logo and a $50,000 agency brand is strategy — not just design. We bring the strategy. We close that gap.",
  },
];

const inViewOpts = { once: true, margin: "-80px" } as const;

function Block({ block, index }: { block: (typeof BLOCKS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, inViewOpts);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: 40,
        paddingBottom: index < BLOCKS.length - 1 ? 80 : 0,
      }}
    >
      <p
        className="label-sm"
        style={{ marginBottom: 20, color: "var(--text-dim)" }}
      >
        {block.num}
      </p>
      <h3
        style={{
          fontFamily: "var(--font)",
          fontWeight: 700,
          fontSize: "clamp(26px, 2.8vw, 42px)",
          color: "#fff",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          marginBottom: 20,
        }}
      >
        {block.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font)",
          fontWeight: 400,
          fontSize: 16,
          color: "var(--text-muted)",
          lineHeight: 1.8,
          maxWidth: 520,
        }}
      >
        {block.body}
      </p>
    </motion.div>
  );
}

export default function Philosophy() {
  return (
    <section
      style={{
        background: "var(--bg)",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "45% 55%",
          maxWidth: "100%",
        }}
        className="philosophy-grid"
      >
        {/* Left — STATIC sticky headline, no animation */}
        <div
          style={{
            paddingLeft: "var(--section-padding-x)",
            paddingRight: 48,
            position: "sticky",
            top: 120,
            alignSelf: "flex-start",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font)",
              fontWeight: 700,
              fontSize: "clamp(44px, 5vw, 80px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#fff",
            }}
          >
            We don&apos;t
            <br />
            make things
            <br />
            <em style={{ color: "var(--purple)", fontStyle: "italic" }}>pretty.</em>
            <br />
            We make them
            <br />
            powerful.
          </h2>
          <p
            style={{
              fontFamily: "var(--font)",
              fontWeight: 400,
              fontSize: 14,
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 280,
              marginTop: 32,
            }}
          >
            A brand is a business weapon. We engineer it that way.
          </p>
        </div>

        {/* Right — editorial blocks (scroll animated) */}
        <div
          style={{
            paddingRight: "var(--section-padding-x)",
            paddingTop: 8,
          }}
        >
          {BLOCKS.map((block, i) => (
            <Block key={i} block={block} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
          }
          .philosophy-grid > div:first-child {
            position: static !important;
            padding-right: var(--section-padding-x) !important;
            margin-bottom: 64px;
          }
        }
      `}</style>
    </section>
  );
}
