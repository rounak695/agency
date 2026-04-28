"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText } from "lucide-react";

const ARTICLES = [
  {
    slug: "why-indian-brands-struggle",
    title: "Why Most Indian Businesses Look Like They Don't Take Themselves Seriously",
    category: "Brand Strategy",
    date: "April 2026",
    preview:
      "The Canva logo problem. The stock photo website. The generic tagline. Here's why this happens and how to fix it.",
  },
  {
    slug: "brand-vs-logo",
    title: "Your Logo Is Not Your Brand. Here's What Is.",
    category: "Brand Education",
    date: "March 2026",
    preview:
      "95% of founders we speak to confuse a logo for a brand. The distinction matters more than you think.",
  },
  {
    slug: "website-conversion",
    title: "Why Your Website Isn't Converting (And It's Not the Design)",
    category: "Web & Marketing",
    date: "March 2026",
    preview:
      "Most website problems are copy problems. Most copy problems are strategy problems. Here's how to diagnose yours.",
  },
  {
    slug: "coming-soon",
    title: "5 Brands That Changed How India Shops — And What They Did Right",
    category: "Case Analysis",
    date: "Coming Soon",
    preview: "A deep dive into the brands that changed the game.",
    comingSoon: true,
  },
];

export default function InsightsPage() {
  return (
    <main>
      <div className="section-pad" style={{ paddingTop: 160 }}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label-sm"
        >
          OUR THINKING
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 900,
            fontSize: "clamp(56px, 7vw, 100px)",
            color: "#fff",
            lineHeight: 1.1,
            marginTop: 16,
          }}
        >
          Ideas that shape better brands.
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
            marginTop: 24,
            maxWidth: 560,
          }}
        >
          Brand strategy, marketing insights, and lessons from building real brands in
          India.
        </motion.p>
      </div>

      <div
        className="section-pad"
        style={{
          paddingTop: 80,
          paddingBottom: 120,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1,
        }}
      >
        {ARTICLES.map((article, i) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{
              background: article.comingSoon ? "#0A0A0A" : "#111111",
              padding: 40,
              cursor: article.comingSoon ? "default" : "pointer",
              opacity: article.comingSoon ? 0.5 : 1,
              transition: "opacity 0.2s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 11,
                  color: "var(--purple)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {article.category}
              </span>
              <span
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 12,
                  color: "var(--text-dim)",
                }}
              >
                {article.date}
              </span>
            </div>

            {article.comingSoon ? (
              <h3
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 700,
                  fontSize: "clamp(22px, 2vw, 32px)",
                  color: "#fff",
                }}
              >
                {article.title}
              </h3>
            ) : (
              <Link
                href={`/insights/${article.slug}`}
                style={{ textDecoration: "none" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 700,
                    fontSize: "clamp(22px, 2vw, 32px)",
                    color: "#fff",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--purple)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#fff";
                  }}
                >
                  {article.title}
                </h3>
              </Link>
            )}

            <p
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 14,
                color: "var(--text-muted)",
                marginTop: 16,
                lineHeight: 1.6,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {article.preview}
            </p>

            {!article.comingSoon && (
              <Link
                href={`/insights/${article.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font)",
                  fontWeight: 500,
                  fontSize: 13,
                  color: "#fff",
                  textDecoration: "none",
                  marginTop: 24,
                }}
              >
                Read more <span>→</span>
              </Link>
            )}

            {article.comingSoon && (
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 11,
                  color: "var(--text-dim)",
                  background: "rgba(255,255,255,0.05)",
                  padding: "4px 12px",
                  borderRadius: 4,
                  marginTop: 24,
                }}
              >
                Coming Soon
              </span>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 32,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#161616",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FileText size={14} color="var(--text-dim)" />
              </div>
              <span
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 12,
                  color: "var(--text-muted)",
                }}
              >
                Xcelarate Studio
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-pad {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}