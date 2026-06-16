"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    client: "TruPixel Studio",
    tag: "Web Design · Branding",
    title: "Premium Cinematic Web",
    desc: "End-to-end brand identity and website for a premium visual production studio.",
    chips: ["→ +300% Engagement", "→ Brand System"],
    img: "/work/trupixel.jpg",
  },
  {
    client: "Abstract Guitar",
    tag: "Music · Brand Identity",
    title: "Raga Meets Rock",
    desc: "Brand identity for an artist blending Indian classical with modern rock aesthetics.",
    chips: ["→ Unique Identity", "→ Social Kit"],
    img: "/work/abstract-guitar.jpg",
  },
  {
    client: "NCETBuddy",
    tag: "EdTech · Platform",
    title: "India's Prep Buddy",
    desc: "Complete brand system, website, and digital presence for a student-first EdTech platform.",
    chips: ["→ Full Platform", "→ Mobile-Optimized"],
    img: "/work/ncetbuddy.jpg",
  },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="workcarousel-card"
      style={{
        width: 480,
        height: 600,
        flexShrink: 0,
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 4,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
      }}
    >
      {/* Image area — 60% */}
      <div
        style={{
          height: 360,
          background: "#161616",
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <img
          src={project.img}
          alt={project.client}
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const fb = e.currentTarget.nextElementSibling as HTMLElement;
            if (fb) fb.style.display = "flex";
          }}
        />
        {/* Watermark fallback */}
        <div
          style={{
            display: "none",
            position: "absolute",
            inset: 0,
            alignItems: "center",
            justifyContent: "center",
            background: "#161616",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font)",
              fontWeight: 900,
              fontSize: "clamp(32px, 5vw, 60px)",
              color: "rgba(255,255,255,0.035)",
              textAlign: "center",
              padding: 24,
            }}
          >
            {project.client}
          </span>
        </div>
      </div>

      {/* Text area — 40% */}
      <div
        style={{
          flex: 1,
          padding: 28,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Top */}
        <div>
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
              marginBottom: 16,
            }}
          >
            {project.tag}
          </span>
          <h3
            style={{
              fontFamily: "var(--font)",
              fontWeight: 700,
              fontSize: 28,
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font)",
              fontWeight: 400,
              fontSize: 14,
              color: "var(--text-muted)",
              lineHeight: 1.6,
              marginTop: 8,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.desc}
          </p>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {project.chips.map((chip, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 500,
                  fontSize: 12,
                  color: "var(--text-dim)",
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
              gap: 4,
              fontFamily: "var(--font)",
              fontWeight: 500,
              fontSize: 13,
              color: "#fff",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--purple-light)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
          >
            View Case Study
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

function PlaceholderCard() {
  return (
    <div
      className="workcarousel-card"
      style={{
        width: 480,
        height: 600,
        flexShrink: 0,
        background: "rgba(124,58,237,0.05)",
        border: "1px solid rgba(124,58,237,0.2)",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        userSelect: "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font)",
          fontWeight: 300,
          fontSize: 72,
          color: "rgba(124,58,237,0.4)",
          lineHeight: 1,
        }}
      >
        +
      </span>
      <span
        style={{
          fontFamily: "var(--font)",
          fontWeight: 500,
          fontSize: 16,
          color: "var(--text-muted)",
        }}
      >
        Your project
      </span>
      <span
        style={{
          fontFamily: "var(--font)",
          fontWeight: 400,
          fontSize: 13,
          color: "var(--text-dim)",
        }}
      >
        We&apos;re accepting new clients
      </span>
    </div>
  );
}

export default function WorkCarousel() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Drag scroll
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const onMouseEnd = useCallback(() => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }, []);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const pct =
      (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
    setProgress(isNaN(pct) ? 0 : pct);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <section id="work" style={{ background: "#0A0A0A", paddingTop: 140 }}>
      {/* Header */}
      <div
        ref={headRef}
        style={{
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
          marginBottom: 64,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <motion.p
            className="label-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 16 }}
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              fontFamily: "var(--font)",
              fontWeight: 900,
              fontSize: "clamp(48px, 7vw, 120px)",
              color: "#fff",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Brands we&apos;ve built.
          </motion.h2>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={headInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 400,
            fontSize: 12,
            color: "var(--text-dim)",
            letterSpacing: "0.05em",
            alignSelf: "flex-end",
            paddingBottom: 8,
          }}
        >
          ← Drag to explore →
        </motion.span>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseEnd}
        onMouseLeave={onMouseEnd}
        onTouchStart={(e) => {
          const touch = e.touches[0];
          isDragging.current = true;
          startX.current = touch.pageX - (scrollRef.current?.offsetLeft ?? 0);
          scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
        }}
        onTouchMove={(e) => {
          if (!isDragging.current || !scrollRef.current) return;
          const touch = e.touches[0];
          const x = touch.pageX - scrollRef.current.offsetLeft;
          const walk = (x - startX.current) * 1.5;
          scrollRef.current.scrollLeft = scrollLeft.current - walk;
        }}
        onTouchEnd={onMouseEnd}
        className="workcarousel-track"
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          cursor: "grab",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
          gap: 24,
          paddingBottom: 40,
        }}
      >
        <style>{`
          #work-carousel::-webkit-scrollbar, .workcarousel-track::-webkit-scrollbar { display: none; }
          @media (max-width: 768px) {
            .workcarousel-track { gap: 12px !important; }
            .workcarousel-card { width: 320px !important; height: 500px !important; }
          }
          @media (max-width: 480px) {
            .workcarousel-card { width: 280px !important; height: 460px !important; }
          }
        `}</style>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
        <PlaceholderCard />
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "100%",
          height: 1,
          background: "#1A1A1A",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "var(--purple)",
            width: `${progress}%`,
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </section>
  );
}
