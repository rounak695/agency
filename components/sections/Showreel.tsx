"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Showreel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#0A0A0A" }}>
      {/* Label */}
      <div
        style={{
          textAlign: "center",
          padding:
            "clamp(64px, 8vw, 100px) var(--section-padding-x) 32px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font)",
            fontWeight: 400,
            fontSize: 11,
            color: "var(--text-dim)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          — Our Work in Motion —
        </span>
      </div>

      {/* Video placeholder — no iframe, no external calls */}
      <motion.div
        ref={containerRef}
        initial={{ scale: 0.97, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: "100%",
          aspectRatio: "16/9",
          background: "#111111",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          cursor: "pointer",
        }}
      >
        {/* Play button circle */}
        <div
          style={{
            width: "72px",
            height: "72px",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "border-color 0.3s ease, background 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--purple)";
            e.currentTarget.style.background = "rgba(124,58,237,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="white"
          >
            <polygon points="6,4 16,10 6,16" />
          </svg>
        </div>
        <p
          style={{
            fontFamily: "var(--font)",
            fontSize: "12px",
            color: "#3A3A3A",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Brand Reel — Coming Soon
        </p>
      </motion.div>

      {/* Caption row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "32px var(--section-padding-x)",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font)",
            fontWeight: 300,
            fontSize: 18,
            color: "var(--text-muted)",
            lineHeight: 1.5,
          }}
        >
          Every brand we build. Every story we tell.
        </p>
        <a
          href="mailto:hello@xcelarate.studio"
          style={{
            fontFamily: "var(--font)",
            fontWeight: 500,
            fontSize: 14,
            color: "#fff",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--purple-light)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          Watch how we work →
        </a>
      </div>
    </section>
  );
}
