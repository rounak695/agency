"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const FOUNDERS = [
  {
    name: "Rounak Paul",
    role: "Founder & Creative Director",
    bio: [
      "Rounak has spent years studying why certain brands become cultural icons while others fade into noise. His answer: psychology. Every brand decision he makes is rooted in how people actually think, feel, and remember.",
      "Before Xcelarate, he worked with businesses across multiple industries, learning what works and what's just convention. He designs with conviction — not trends.",
      "Based in Northeast India, he believes the next wave of world-class creative work will come from unexpected places.",
    ],
    funFact: "He can recite brand guidelines from memory. Even his own.",
  },
  {
    name: "Ravi Kumar",
    role: "Tech Lead & Strategy",
    bio: [
      "Ravi is the person who takes a brand strategy and turns it into a system that actually works in the real world — across every screen, every format, every touchpoint.",
      "He's obsessed with the gap between what a brand says it is and what it actually looks like in practice. His job is to close that gap.",
      "He believes every pixel has a purpose. If it doesn't serve the brand, it doesn't belong.",
    ],
    funFact: "He once rebuilt an entire landing page in a single night. For fun.",
  },
];

const VALUES = [
  {
    num: "01",
    title: "Strategy before aesthetics.",
    desc: "A beautiful brand with no strategy is just expensive decoration. We always start with why.",
  },
  {
    num: "02",
    title: "Craft that doesn't cut corners.",
    desc: "We've never used a template. Every logo, every page, every word is made specifically for the brand it represents.",
  },
  {
    num: "03",
    title: "Speed without sacrifice.",
    desc: "Most agencies take months. We deliver in weeks — because we've built systems that don't waste time without compromising quality.",
  },
  {
    num: "04",
    title: "Clients become collaborators.",
    desc: "The best brands come from founders who are deeply involved. We work with you, not just for you.",
  },
];

const STUDIO_IMAGES = [
  "Research & Strategy",
  "Design in Progress",
  "Brand Delivery",
];

export default function AboutPage() {
  return (
    <main>
      <div className="section-pad" style={{ 
        paddingTop: 160, 
        paddingBottom: 120,
        minHeight: "80vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center",
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 700,
            fontSize: "clamp(40px, 5vw, 72px)",
            color: "#fff",
            lineHeight: 1.1,
          }}
        >
          We started Xcelarate because great branding shouldn't be a luxury.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p
            style={{
              fontFamily: "var(--font)",
              fontWeight: 400,
              fontSize: 17,
              color: "var(--text-muted)",
              lineHeight: 1.9,
            }}
          >
            We've seen too many incredible businesses fail — not because their product wasn't good, but because nobody knew about it, nobody trusted it, nobody remembered it.
            <br /><br />
            Branding is what bridges that gap. And for most Indian founders, world-class branding felt out of reach. We decided to change that.
            <br /><br />
            Xcelarate Studio exists for founders who refuse to settle for a Canva logo and a free WordPress theme. You're building something real. Your brand should say that.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          width: "100%",
          height: "60vh",
          background: "#161616",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font)",
            fontWeight: 900,
            fontSize: "clamp(40px, 6vw, 80px)",
            color: "rgba(255,255,255,0.05)",
          }}
        >
          OUR WORKSPACE
        </span>
      </motion.div>

      <div className="section-pad" style={{ textAlign: "center", padding: "48px var(--section-padding-x)" }}>
        <span
          style={{
            fontFamily: "var(--font)",
            fontWeight: 400,
            fontSize: 12,
            color: "var(--text-dim)",
          }}
        >
          Our workspace — wherever great brands are being built.
        </span>
      </div>

      <div className="section-pad" style={{ paddingTop: 80, paddingBottom: 120 }}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-sm"
          style={{ display: "block", marginBottom: 16 }}
        >
          WHAT WE BELIEVE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 56px)",
            color: "#fff",
            marginBottom: 64,
          }}
        >
          The principles behind every brand we build.
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {VALUES.map((value, i) => (
            <motion.div
              key={value.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 3fr",
                gap: 64,
                padding: "48px 0",
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 300,
                  fontSize: 13,
                  color: "var(--text-dim)",
                }}
              >
                {value.num}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 700,
                    fontSize: "clamp(20px, 2vw, 28px)",
                    color: "#fff",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 400,
                    fontSize: 16,
                    color: "var(--text-muted)",
                    marginTop: 12,
                    maxWidth: 560,
                  }}
                >
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-pad" style={{ paddingTop: 80, paddingBottom: 120 }}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-sm"
          style={{ display: "block", marginBottom: 64 }}
        >
          THE TEAM
        </motion.span>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          {FOUNDERS.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "#161616",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 32,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 900,
                    fontSize: "clamp(32px, 4vw, 56px)",
                    color: "rgba(255,255,255,0.05)",
                  }}
                >
                  {founder.name.split(" ")[0].toUpperCase()}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 2.5vw, 36px)",
                  color: "#fff",
                }}
              >
                {founder.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "var(--purple)",
                  marginTop: 4,
                }}
              >
                {founder.role}
              </p>

              <div style={{ marginTop: 24 }}>
                {founder.bio.map((paragraph, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: "var(--font)",
                      fontWeight: 400,
                      fontSize: 15,
                      color: "var(--text-muted)",
                      lineHeight: 1.8,
                      marginBottom: j < founder.bio.length - 1 ? 16 : 0,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 13,
                  color: "var(--text-dim)",
                  fontStyle: "italic",
                  marginTop: 16,
                }}
              >
                {founder.funFact}
              </p>

              <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
                <Linkedin size={18} color="var(--text-muted)" style={{ cursor: "pointer" }} />
                <Instagram size={18} color="var(--text-muted)" style={{ cursor: "pointer" }} />
                <Twitter size={18} color="var(--text-muted)" style={{ cursor: "pointer" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="section-pad"
        style={{
          paddingTop: 80,
          paddingBottom: 120,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font)",
              fontWeight: 700,
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#fff",
            }}
          >
            We take on a limited number of projects at a time. That's intentional.
          </h3>
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
            It means every client gets our full attention. Not a junior designer. Not an outsourced team. Rounak and Ravi, working directly on your brand.
          </p>
          <p
            style={{
              fontFamily: "var(--font)",
              fontWeight: 400,
              fontSize: 16,
              color: "#fff",
              marginTop: 32,
            }}
          >
            We're currently accepting 2 new clients for May 2026.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              fontFamily: "var(--font)",
              fontWeight: 500,
              fontSize: 14,
              color: "#fff",
              textDecoration: "none",
              marginTop: 16,
              borderBottom: "1px solid var(--purple)",
              paddingBottom: 4,
            }}
          >
            Check availability →
          </Link>
        </div>
      </div>

      <div className="section-pad" style={{ paddingBottom: 120 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
          }}
        >
          {STUDIO_IMAGES.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                height: 360,
                background: "#161616",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-pad {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .studio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}