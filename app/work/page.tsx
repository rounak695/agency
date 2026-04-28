"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const WORK_ITEMS = [
  {
    id: "truspixel",
    name: "TruPixel Studio",
    tags: ["Branding", "Web Design"],
    desc: "Premium cinematic web presence for a visual production studio.",
  },
  {
    id: "abstract-guitar",
    name: "Abstract Guitar",
    tags: ["Identity", "Music"],
    desc: "Brand identity for an artist bridging Indian classical and modern rock.",
  },
  {
    id: "ncetbuddy",
    name: "NCETBuddy",
    tags: ["Branding", "Web Design", "EdTech"],
    desc: "Complete brand system for India's student-first EdTech platform.",
  },
];

const FILTERS = ["All", "Branding", "Web Design", "Identity", "EdTech", "Music"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredWork =
    activeFilter === "All"
      ? WORK_ITEMS
      : WORK_ITEMS.filter((item) => item.tags.includes(activeFilter));

  return (
    <main>
      <div className="section-pad" style={{ paddingTop: 160 }}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label-sm"
        >
          SELECTED WORK
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 900,
            fontSize: "clamp(64px, 8vw, 128px)",
            color: "#fff",
            lineHeight: 1.1,
            marginTop: 16,
          }}
        >
          Every brand tells a story.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 300,
            fontSize: 20,
            color: "var(--text-muted)",
            marginTop: 24,
          }}
        >
          Here are a few of ours.
        </motion.p>
      </div>

      <div
        className="section-pad"
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          marginTop: 64,
        }}
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 13,
                color: isActive ? "#fff" : "var(--text-muted)",
                background: isActive ? "var(--purple)" : "transparent",
                border: `1px solid ${
                  isActive ? "var(--purple)" : "rgba(255,255,255,0.1)"
                }`,
                padding: "8px 20px",
                borderRadius: 100,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }
              }}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1,
          marginTop: 64,
        }}
        className="work-grid"
      >
        {filteredWork.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            style={{ aspectRatio: "4/3", position: "relative", overflow: "hidden" }}
          >
            <Link href={`/work/${item.id}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#161616",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="work-img-placeholder"
              >
                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 900,
                    fontSize: "8vw",
                    color: "rgba(255,255,255,0.05)",
                  }}
                >
                  {item.name}
                </span>
              </div>

              <motion.div
                className="work-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 40,
                }}
              >
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font)",
                        fontWeight: 400,
                        fontSize: 11,
                        color: "#fff",
                        background: "rgba(255,255,255,0.1)",
                        padding: "4px 12px",
                        borderRadius: 100,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 700,
                    fontSize: "clamp(24px, 2.5vw, 36px)",
                    color: "#fff",
                    marginTop: 16,
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    marginTop: 8,
                  }}
                >
                  {item.desc}
                </p>

                <span
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 500,
                    fontSize: 13,
                    color: "#fff",
                    marginTop: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  View Case Study <span>→</span>
                </span>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      <style>{`
        .work-grid {
          margin-left: var(--section-padding-x);
          margin-right: var(--section-padding-x);
        }
        @media (max-width: 768px) {
          .work-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}