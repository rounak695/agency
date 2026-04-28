"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      style={{
        background: "#111111",
        paddingTop: 160,
        paddingBottom: 160,
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div ref={ref} style={{ position: "relative", zIndex: 1 }}>
        {/* Label */}
        <motion.p
          className="label-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 32 }}
        >
          Start a Project
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 900,
            fontSize: "clamp(48px, 7vw, 110px)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: 48,
            maxWidth: "14ch",
          }}
        >
          Ready to build a brand that actually wins?
        </motion.h2>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 400,
            fontSize: 16,
            color: "var(--text-muted)",
            lineHeight: 1.8,
            maxWidth: 440,
            marginBottom: 48,
          }}
        >
          Whether you&apos;re launching something new or rebranding — let&apos;s
          talk. No templates. No shortcuts. Just real brand building.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap" }}
        >
          <a
            href="mailto:hello@xcelarate.studio"
            id="cta-book-call"
            style={{
              display: "inline-block",
              background: "#7C3AED",
              color: "#fff",
              padding: "16px 36px",
              borderRadius: 4,
              fontFamily: "var(--font)",
              fontWeight: 500,
              fontSize: 15,
              textDecoration: "none",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#9461F7";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#7C3AED";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Book a Discovery Call
          </a>
          <a
            href="mailto:hello@xcelarate.studio"
            id="cta-send-message"
            style={{
              display: "inline-block",
              background: "none",
              border: "none",
              color: "var(--text-muted)",
              padding: "16px 0",
              marginLeft: 32,
              fontFamily: "var(--font)",
              fontWeight: 500,
              fontSize: 15,
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Send a message →
          </a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
            marginTop: 64,
            flexWrap: "wrap",
          }}
        >
          {[
            {
              icon: <Mail size={14} />,
              text: "hello@xcelarate.studio",
              href: "mailto:hello@xcelarate.studio",
            },
            {
              icon: <MapPin size={14} />,
              text: "India · Remote-first",
              href: undefined,
            },
            {
              icon: <MessageCircle size={14} />,
              text: "WhatsApp",
              href: "https://wa.me/91",
            },
          ].map((item, i) => {
            const inner = (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 13,
                  color: "var(--text-muted)",
                  transition: item.href ? "color 0.2s ease" : undefined,
                }}
              >
                <span style={{ color: "var(--text-dim)" }}>{item.icon}</span>
                {item.text}
              </span>
            );

            return item.href ? (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("https") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("https")
                    ? "noopener noreferrer"
                    : undefined
                }
                style={{ textDecoration: "none" }}
                onMouseEnter={(e) =>
                  (
                    e.currentTarget.querySelector("span") as HTMLElement
                  ).style.color = "#fff"
                }
                onMouseLeave={(e) =>
                  (
                    e.currentTarget.querySelector("span") as HTMLElement
                  ).style.color = "var(--text-muted)"
                }
              >
                {inner}
              </a>
            ) : (
              <span key={i}>{inner}</span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
