"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Inline SVGs — lucide-react v1.x removed Twitter and Linkedin icons
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const founders = [
  {
    name: "Rounak",
    role: "Co-Founder · Brand Strategist",
    bio: "Obsessed with the intersection of brand psychology and visual craft. Builds brands that outlast trends.",
    imgSrc: "/founders/rounak.jpg",
    initials: "R",
    linkedIn: "#",
    twitter: "#",
  },
  {
    name: "Ravi",
    role: "Co-Founder · Creative Director",
    bio: "Turns brand strategy into systems that scale. Every pixel has a purpose.",
    imgSrc: "/founders/ravi.jpg",
    initials: "R",
    linkedIn: "#",
    twitter: "#",
  },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function FounderItem({
  founder,
  index,
}: {
  founder: (typeof founders)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease }}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        paddingTop: 40,
        paddingBottom: index < founders.length - 1 ? 48 : 0,
        display: "flex",
        gap: 28,
        alignItems: "flex-start",
      }}
    >
      {/* Image */}
      <div
        style={{
          width: 160,
          height: 160,
          borderRadius: 4,
          flexShrink: 0,
          background: "#161616",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={founder.imgSrc}
          alt={founder.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        {/* Fallback initials */}
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
              fontWeight: 700,
              fontSize: 28,
              color: "#fff",
            }}
          >
            {founder.initials}
          </span>
        </div>
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font)",
            fontWeight: 700,
            fontSize: 24,
            color: "#fff",
            lineHeight: 1.2,
          }}
        >
          {founder.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font)",
            fontWeight: 400,
            fontSize: 13,
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            marginTop: 4,
            textTransform: "uppercase",
          }}
        >
          {founder.role}
        </p>
        <p
          style={{
            fontFamily: "var(--font)",
            fontWeight: 400,
            fontSize: 15,
            color: "var(--text-muted)",
            lineHeight: 1.7,
            marginTop: 16,
            maxWidth: 360,
          }}
        >
          {founder.bio}
        </p>
        {/* Social */}
        <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
          <a
            href={founder.linkedIn}
            aria-label={`${founder.name} LinkedIn`}
            style={{ color: "var(--text-dim)", transition: "color 0.2s ease" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#fff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-dim)")
            }
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={founder.twitter}
            aria-label={`${founder.name} Twitter`}
            style={{ color: "var(--text-dim)", transition: "color 0.2s ease" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#fff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-dim)")
            }
          >
            <XIcon size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Founders() {
  const leftRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      style={{
        background: "var(--bg)",
        paddingTop: 140,
        paddingBottom: 140,
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
      }}
    >
      {/* Label */}
      <p
        className="label-sm"
        style={{ marginBottom: 64 }}
      >
        Who We Are
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40% 60%",
          gap: "clamp(48px, 6vw, 96px)",
          alignItems: "start",
        }}
        className="founders-grid"
      >
        {/* Left — editorial paragraph */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -40 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <p
            style={{
              fontFamily: "var(--font)",
              fontWeight: 300,
              fontSize: "clamp(20px, 2.2vw, 32px)",
              color: "#fff",
              lineHeight: 1.6,
            }}
          >
            We&apos;re Rounak and Ravi.
            <br />
            <br />
            We started Xcelarate Studio because we saw the same story repeat
            itself — great products with broken brands, losing to inferior
            competitors with better stories.
            <br />
            <br />
            We&apos;ve manually built every brand in our portfolio. No
            outsourcing. No templates. No shortcuts.
            <br />
            <br />
            We build brands the way we&apos;d want ours built.
          </p>
        </motion.div>

        {/* Right — founder items */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          {founders.map((f, i) => (
            <FounderItem key={i} founder={f} index={i} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founders-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
