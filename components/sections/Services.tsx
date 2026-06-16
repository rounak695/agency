"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    name: "Brand Identity & Strategy",
    desc: "Logo, color systems, typography, brand voice, and comprehensive brand guidelines.",
  },
  {
    num: "02",
    name: "Website Design & Development",
    desc: "High-converting, production-ready websites. React/Next.js. Custom design. No templates.",
  },
  {
    num: "03",
    name: "Marketing Strategy",
    desc: "Go-to-market plans, campaign creative, and performance frameworks that drive real growth.",
  },
  {
    num: "04",
    name: "Social Media Presence",
    desc: "Content strategy, visual identity for platforms, post design, and growth systems.",
  },
  {
    num: "05",
    name: "Tech Stack & Digital Setup",
    desc: "Domain, hosting, analytics, CRM, and your complete digital infrastructure.",
  },
  {
    num: "06",
    name: "Content & Copywriting",
    desc: "Brand storytelling, website copy, pitch decks, and campaign messaging.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const rowVariant = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function ServiceRow({ s }: { s: (typeof SERVICES)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={rowVariant}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr 1fr 24px",
        alignItems: "center",
        gap: 24,
        padding: "28px 0",
        paddingLeft: "var(--section-padding-x)",
        paddingRight: "var(--section-padding-x)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        cursor: "pointer",
        transition: "background 0.2s ease",
        background: hovered ? "rgba(124,58,237,0.04)" : "transparent",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          color: hovered ? "#7C3AED" : "#3A3A3A",
          letterSpacing: "0.15em",
          transition: "color 0.2s ease",
          fontFamily: "var(--font)",
        }}
      >
        {s.num}
      </span>
      <span
        style={{
          fontFamily: "var(--font)",
          fontWeight: 600,
          fontSize: "clamp(18px, 1.8vw, 26px)",
          color: "white",
        }}
      >
        {s.name}
      </span>
      <span
        style={{
          fontFamily: "var(--font)",
          fontSize: "14px",
          color: "#666666",
          maxWidth: "380px",
          lineHeight: 1.7,
        }}
      >
        {s.desc}
      </span>
      <ArrowRight
        size={16}
        style={{
          color: hovered ? "#7C3AED" : "#3A3A3A",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          transition: "color 0.2s ease, transform 0.2s ease",
          flexShrink: 0,
        }}
      />
    </motion.div>
  );
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });
  const listRef = useRef<HTMLDivElement>(null);
  const listInView = useInView(listRef, { once: true, margin: "-60px" });

  return (
    <section
      id="services"
      style={{
        background: "var(--bg-2)",
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
      }}
    >
      {/* Top header row */}
      <div
        ref={headRef}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingLeft: "var(--section-padding-x)",
          paddingRight: "var(--section-padding-x)",
          marginBottom: 32,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <motion.p
          className="label-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.p>
        <motion.p
          style={{
            fontFamily: "var(--font)",
            fontWeight: 400,
            fontSize: 15,
            color: "var(--text-muted)",
            maxWidth: 400,
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Everything your brand needs, managed by one team.
        </motion.p>
      </div>

      {/* Full-width divider */}
      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.1)",
          marginBottom: 0,
        }}
      />

      {/* Services list */}
      <motion.div
        ref={listRef}
        variants={containerVariants}
        initial="hidden"
        animate={listInView ? "show" : "hidden"}
      >
        {SERVICES.map((s) => (
          <ServiceRow key={s.num} s={s} />
        ))}
      </motion.div>

      {/* Mobile layout override */}
      <style>{`
        @media (max-width: 768px) {
          .service-row-inner {
            grid-template-columns: 40px 1fr 20px !important;
          }
        }
        @media (max-width: 640px) {
          .service-row-desc { display: none; }
        }
      `}</style>
    </section>
  );
}
