"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    client: "TruPixel Studio",
    tag: "Web Design · Branding",
    title: "Premium Cinematic Web",
    desc: "End-to-end brand identity and website for a premium visual production studio.",
    chips: ["→ +300% Engagement", "→ Production-Ready", "→ Brand System"],
    img: "/work/trupixel.jpg",
  },
  {
    client: "Abstract Guitar",
    tag: "Music · Brand Identity",
    title: "Raga Meets Rock",
    desc: "Brand identity for an artist blending Indian classical with modern rock aesthetics.",
    chips: ["→ Unique Identity", "→ Full Asset Suite", "→ Social Kit"],
    img: "/work/abstract-guitar.jpg",
  },
  {
    client: "NCETBuddy",
    tag: "EdTech · Platform",
    title: "India's Prep Buddy",
    desc: "Complete brand system, website, and digital presence for a student-first EdTech platform.",
    chips: ["→ Full Platform", "→ Student-First Design", "→ Mobile-Optimized"],
    img: "/work/ncetbuddy.jpg",
  },
];

function CaseRow({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      className="case-row case-study-item"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        gridTemplateColumns: isEven ? "1fr 1fr" : "1fr 1fr",
        direction: isEven ? "rtl" : "ltr",
      }}
    >
      {/* Image side */}
      <div className="case-img-wrap" style={{ direction: "ltr" }}>
        {/* Try real image */}
        <img
          src={project.img}
          alt={project.client}
          className="case-img-inner"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const sibling = e.currentTarget.nextElementSibling as HTMLElement;
            if (sibling) sibling.style.display = "flex";
          }}
        />
        {/* Fallback placeholder */}
        <div className="case-img-placeholder" style={{ display: "none" }}>
          <span className="case-watermark">{project.client}</span>
        </div>
      </div>

      {/* Text side */}
      <div className="case-text-side" style={{ direction: "ltr" }}>
        {/* Top tag */}
        <span
          style={{
            display: "inline-block",
            padding: "4px 12px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 100,
            fontFamily: "var(--font)",
            fontSize: 11,
            fontWeight: 400,
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
            alignSelf: "flex-start",
          }}
        >
          {project.tag}
        </span>

        {/* Middle */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font)",
              fontWeight: 700,
              fontSize: "clamp(28px, 3vw, 52px)",
              color: "#fff",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font)",
              fontWeight: 400,
              fontSize: 15,
              color: "var(--text-muted)",
              lineHeight: 1.8,
            }}
          >
            {project.desc}
          </p>
        </div>

        {/* Bottom */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
            {project.chips.map((chip, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 500,
                  fontSize: 13,
                  color: "#fff",
                }}
              >
                {chip}
              </span>
            ))}
          </div>
          <a
            href="mailto:hello@xcelarate.studio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font)",
              fontWeight: 500,
              fontSize: 14,
              color: "#fff",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
          >
            View Case Study
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="work" style={{ background: "var(--bg)", paddingTop: 140 }}>
      {/* Header */}
      <div ref={headRef} style={{ paddingLeft: "clamp(24px, 6vw, 96px)", marginBottom: 48 }}>
        <motion.p
          className="label-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 16 }}
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 900,
            fontSize: "clamp(52px, 7vw, 120px)",
            color: "#fff",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
          }}
        >
          Brands we&apos;ve built.
        </motion.h2>
      </div>

      {/* Cases */}
      <div>
        {PROJECTS.map((p, i) => (
          <CaseRow key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
