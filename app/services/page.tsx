"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    name: "Brand Identity & Strategy",
    desc: "The foundation everything else is built on. We define who you are, what you stand for, and how that looks, sounds, and feels across every touchpoint.",
    deliverables: [
      "Brand positioning & messaging",
      "Logo design (primary + variations)",
      "Color system & typography",
      "Brand voice & tone guidelines",
      "Comprehensive brand guidelines document",
      "Competitor differentiation strategy",
    ],
  },
  {
    num: "02",
    name: "Website Design & Development",
    desc: "Your website is your 24/7 salesperson. We design and build production-ready websites that convert visitors into clients — no templates, no shortcuts.",
    deliverables: [
      "Custom UI/UX design",
      "React / Next.js development",
      "Mobile-first responsive build",
      "SEO foundation setup",
      "Analytics integration",
      "Performance optimization",
    ],
  },
  {
    num: "03",
    name: "Marketing Strategy",
    desc: "Strategy without execution is just a document. We build go-to-market plans you can actually execute — with the creative assets to back them up.",
    deliverables: [
      "Go-to-market strategy",
      "Target audience definition",
      "Channel strategy (paid + organic)",
      "Campaign creative direction",
      "Content calendar framework",
      "Performance metrics setup",
    ],
  },
  {
    num: "04",
    name: "Social Media Presence",
    desc: "Your social channels are where your brand lives day-to-day. We build systems that make showing up consistently actually possible.",
    deliverables: [
      "Platform-specific visual identity",
      "Post design templates (Figma)",
      "Content strategy & pillars",
      "Caption & hashtag frameworks",
      "Story + Reel design templates",
      "Monthly content calendar",
    ],
  },
  {
    num: "05",
    name: "Tech Stack & Digital Setup",
    desc: "The infrastructure your brand needs to operate professionally online — from domain to CRM to analytics, all set up correctly from day one.",
    deliverables: [
      "Domain & hosting setup",
      "Email (professional domain email)",
      "Analytics & tracking setup",
      "CRM configuration",
      "WhatsApp Business setup",
      "Digital asset organisation",
    ],
  },
  {
    num: "06",
    name: "Content & Copywriting",
    desc: "Words that work as hard as your visuals. Brand storytelling, website copy, pitch decks — every word written with strategy, not just style.",
    deliverables: [
      "Website copywriting",
      "Brand story & manifesto",
      "Pitch deck design + copy",
      "Email sequence writing",
      "Social media captions",
      "About Us & team bios",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <div className="section-pad" style={{ paddingTop: 160 }}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label-sm"
        >
          WHAT WE DO
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 900,
            fontSize: "clamp(56px, 7vw, 110px)",
            color: "#fff",
            lineHeight: 1.1,
            marginTop: 16,
          }}
        >
          We don't just design. We build brand engines.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 300,
            fontSize: 18,
            color: "var(--text-muted)",
            maxWidth: 560,
            marginTop: 24,
          }}
        >
          Six interconnected practices. One unified team. All focused on making your
          brand impossible to ignore.
        </motion.p>
      </div>

      <div style={{ marginTop: 120 }}>
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="service-section"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 3fr",
              gap: 64,
              padding: "64px 0",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 300,
                  fontSize: 11,
                  color: "var(--text-dim)",
                }}
              >
                {service.num}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 700,
                  fontSize: "clamp(32px, 3.5vw, 52px)",
                  color: "#fff",
                  marginTop: 12,
                  lineHeight: 1.2,
                }}
              >
                {service.name}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 15,
                  color: "var(--text-muted)",
                  marginTop: 16,
                }}
              >
                Custom pricing
              </p>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 16,
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                }}
              >
                {service.desc}
              </p>

              <div style={{ marginTop: 32 }}>
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 500,
                    fontSize: 12,
                    color: "var(--text-dim)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  What's included:
                </span>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px 24px",
                    marginTop: 16,
                  }}
                >
                  {service.deliverables.map((item, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <Check size={14} color="#7C3AED" />
                      <span
                        style={{
                          fontFamily: "var(--font)",
                          fontWeight: 400,
                          fontSize: 14,
                          color: "var(--text-muted)",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font)",
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#fff",
                  textDecoration: "none",
                  marginTop: 32,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--purple)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
              >
                See related work <span>→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className="section-pad"
        style={{
          paddingTop: 120,
          paddingBottom: 120,
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font)",
            fontWeight: 400,
            fontSize: 18,
            color: "var(--text-muted)",
            maxWidth: 480,
            margin: "0 auto 32px",
          }}
        >
          Not sure which service you need? Most clients start with Brand Identity +
          Website.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            fontFamily: "var(--font)",
            fontWeight: 500,
            fontSize: 15,
            color: "#fff",
            textDecoration: "none",
            background: "var(--purple)",
            padding: "16px 32px",
            borderRadius: 4,
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#9461F7";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#7C3AED";
          }}
        >
          Book a free discovery call
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-section {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </main>
  );
}