"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Check } from "lucide-react";

const CASE_STUDIES: Record<
  string,
  {
    name: string;
    year: string;
    category: string;
    summary: string;
    stat1: string;
    stat2: string;
    stat3: string;
    challenge: string;
    approach: string[];
    deliverables: string[];
    results: string[];
  }
> = {
  truspixel: {
    name: "TruPixel Studio",
    year: "2024",
    category: "Brand Identity + Web",
    summary:
      "Premium cinematic web presence for a visual production studio.",
    stat1: "2024",
    stat2: "Brand Identity + Web",
    stat3: "Completed in 12 Days",
    challenge:
      "TruPixel had world-class cinematography but a brand that didn't reflect their standard. Their old identity was generic — stock logo, no system, no guidelines.",
    approach: [
      "Conducted brand audit and competitor analysis",
      "Defined visual language around cinematic precision",
      "Built complete design system: logo, typography, colors, motion guidelines",
    ],
    deliverables: [
      "Primary + secondary logo suite",
      "Brand guidelines document (40+ pages)",
      "Website design + development",
      "Social media visual kit",
      "Business card + letterhead design",
    ],
    results: [
      "+300% social engagement",
      "Featured by 3 production houses",
      "Complete brand system delivered in 12 days",
    ],
  },
  "abstract-guitar": {
    name: "Abstract Guitar",
    year: "2024",
    category: "Brand Identity",
    summary: "Brand identity for an artist bridging Indian classical and modern rock.",
    stat1: "2024",
    stat2: "Brand Identity",
    stat3: "Completed in 10 Days",
    challenge:
      "An artist blending Indian classical ragas with electric guitar — no one had heard this before. The brand needed to communicate both worlds without diluting either.",
    approach: [
      "Deep dive into the artist's musical philosophy",
      "Explored visual language of Indian classical + rock aesthetics",
      "Created a system that works across digital and physical",
    ],
    deliverables: [
      "Artist logo + wordmark",
      "Album artwork template system",
      "Social media identity kit",
      "Merchandise design guidelines",
      "Press kit",
    ],
    results: [
      "Unique identity with no comparable reference",
      "Used across 3 music releases",
      "Press pickup from music publications",
    ],
  },
  ncetbuddy: {
    name: "NCETBuddy",
    year: "2024",
    category: "Brand Identity + Web",
    summary: "Complete brand system for India's student-first EdTech platform.",
    stat1: "2024",
    stat2: "Brand Identity + Web",
    stat3: "Completed in 14 Days",
    challenge:
      "An EdTech platform for competitive exam prep with no visual identity. Students didn't trust it. The platform needed to feel credible, approachable, and Indian.",
    approach: [
      "Research on student psychology + trust signals",
      "Competitor analysis of EdTech brands",
      "Mobile-first design system",
    ],
    deliverables: [
      "Platform logo + brand guidelines",
      "Website design + development",
      "App UI design system",
      "Marketing assets",
      "Social media kit",
    ],
    results: [
      "Launched to 1000+ students in first month",
      "Mobile-first, student-approved",
      "Full platform in 14 days",
    ],
  },
};

const PROJECT_ORDER = ["truspixel", "abstract-guitar", "ncetbuddy"];

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = CASE_STUDIES[slug];

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  if (!project) {
    return (
      <main style={{ paddingTop: 120, padding: "var(--section-padding-x)" }}>
        <h1 style={{ color: "#fff", fontFamily: "var(--font)" }}>Project not found</h1>
      </main>
    );
  }

  const currentIndex = PROJECT_ORDER.indexOf(slug);
  const nextProject = PROJECT_ORDER[(currentIndex + 1) % PROJECT_ORDER.length];

  return (
    <main style={{ background: "#0A0A0A" }}>
      <motion.div style={{ y: heroY, opacity: heroOpacity }}>
        <div
          className="section-pad"
          style={{
            paddingTop: 160,
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="label-sm"
          >
            {project.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font)",
              fontWeight: 900,
              fontSize: "clamp(72px, 10vw, 160px)",
              color: "#fff",
              lineHeight: 1.1,
              marginTop: 24,
            }}
          >
            {project.name}
          </motion.h1>

          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 14,
                color: "var(--text-muted)",
              }}
            >
              {project.year}
            </span>
            <span
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 14,
                color: "var(--text-muted)",
              }}
            >
              {project.category}
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              marginTop: 64,
              alignItems: "end",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font)",
                fontWeight: 300,
                fontSize: 20,
                color: "var(--text-muted)",
                lineHeight: 1.6,
              }}
            >
              {project.summary}
            </p>

            <div
              style={{
                display: "flex",
                gap: 32,
                flexWrap: "wrap",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "var(--text-dim)",
                    display: "block",
                  }}
                >
                  YEAR
                </span>
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 400,
                    fontSize: 15,
                    color: "#fff",
                  }}
                >
                  {project.stat1}
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "var(--text-dim)",
                    display: "block",
                  }}
                >
                  SCOPE
                </span>
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 400,
                    fontSize: 15,
                    color: "#fff",
                  }}
                >
                  {project.stat2}
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "var(--text-dim)",
                    display: "block",
                  }}
                >
                  TIMELINE
                </span>
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 400,
                    fontSize: 15,
                    color: "#fff",
                  }}
                >
                  {project.stat3}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          width: "100%",
          height: "80vh",
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
          {project.name}
        </span>
      </motion.div>

      <div
        className="section-pad"
        style={{ paddingTop: 120, paddingBottom: 120 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 64,
            marginBottom: 120,
          }}
        >
          <div>
            <span className="label-sm" style={{ color: "#fff" }}>
              THE CHALLENGE
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font)",
              fontWeight: 400,
              fontSize: 18,
              color: "var(--text-muted)",
              lineHeight: 1.8,
            }}
          >
            {project.challenge}
          </p>
        </div>

        <div style={{ marginBottom: 120 }}>
          <span className="label-sm" style={{ color: "#fff", display: "block", marginBottom: 48 }}>
            OUR APPROACH
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {project.approach.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 24,
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  paddingTop: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "var(--text-dim)",
                  }}
                >
                  0{i + 1}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 400,
                    fontSize: 16,
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 120 }}>
          <span className="label-sm" style={{ color: "#fff", display: "block", marginBottom: 48 }}>
            WHAT WE DELIVERED
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
            }}
          >
            {project.deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "16px 20px",
                  background: "#111111",
                  borderRadius: 4,
                }}
              >
                <Check size={14} color="#7C3AED" />
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 120 }}>
          <span className="label-sm" style={{ color: "#fff", display: "block", marginBottom: 48 }}>
            RESULTS
          </span>
          <div
            style={{
              display: "flex",
              gap: 48,
              flexWrap: "wrap",
            }}
          >
            {project.results.map((result, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3vw, 40px)",
                  color: "#fff",
                }}
              >
                {result}
              </motion.span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            marginBottom: 120,
          }}
        >
          {[1, 2, 3, 4].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: n * 0.1 }}
              style={{
                aspectRatio: n === 1 || n === 4 ? "2/1" : "1/1",
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
                  fontSize: "clamp(24px, 3vw, 40px)",
                  color: "rgba(255,255,255,0.05)",
                }}
              >
                IMAGE_0{n}
              </span>
            </motion.div>
          ))}
        </div>

        <Link
          href={`/work/${nextProject}`}
          style={{
            display: "block",
            textAlign: "center",
            padding: "120px 0",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font)",
              fontWeight: 400,
              fontSize: 14,
              color: "var(--text-muted)",
              display: "block",
              marginBottom: 16,
            }}
          >
            Next Project
          </span>
          <span
            style={{
              fontFamily: "var(--font)",
              fontWeight: 900,
              fontSize: "clamp(48px, 8vw, 120px)",
              color: "#fff",
              position: "relative",
              display: "inline-block",
            }}
          >
            {CASE_STUDIES[nextProject]?.name}
            <span
              style={{
                position: "absolute",
                bottom: -8,
                left: 0,
                right: 0,
                height: 2,
                background: "var(--purple)",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
                display: "block",
              }}
              className="next-underline"
            />
          </span>
        </Link>
      </div>

      <style>{`
        a:hover .next-underline {
          transform: scaleX(1) !important;
        }
        @media (max-width: 768px) {
          .section-pad {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}