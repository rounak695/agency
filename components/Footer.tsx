"use client";

import { ExternalLink } from "lucide-react";

const footerLinks: Record<
  string,
  { label: string; href: string; external?: boolean }[]
> = {
  Agency: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ],
  Connect: [
    { label: "Book a Call", href: "mailto:hello@xcelarate.studio" },
    { label: "Email", href: "mailto:hello@xcelarate.studio" },
    { label: "WhatsApp", href: "https://wa.me/91" },
  ],
  Platform: [
    {
      label: "xcelaratestudio.space",
      href: "https://xcelaratestudio.space",
      external: true,
    },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        paddingTop: 64,
        paddingBottom: 40,
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark wordmark */}
      <span className="footer-watermark" aria-hidden="true">
        Xcelarate
      </span>
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 64,
          flexWrap: "wrap",
          gap: 40,
        }}
      >
        {/* Brand */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <XMark />
          <span
            style={{
              fontFamily: "var(--font)",
              fontWeight: 500,
              fontSize: 15,
              color: "#fff",
            }}
          >
            Xcelarate Studio
          </span>
        </a>

        {/* Nav columns */}
        <div
          style={{
            display: "flex",
            gap: "clamp(32px, 5vw, 80px)",
            flexWrap: "wrap",
          }}
        >
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <p
                className="label-sm"
                style={{ marginBottom: 20, fontSize: 10 }}
              >
                {col}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      style={{
                        fontFamily: "var(--font)",
                        fontWeight: 400,
                        fontSize: 14,
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      {link.label}
                      {link.external && <ExternalLink size={11} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font)",
            fontWeight: 400,
            fontSize: 12,
            color: "var(--text-dim)",
          }}
        >
          &copy; 2026 Xcelarate Studio. Built in India 🇮🇳 by Rounak &amp; Ravi.
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          {[{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }].map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 12,
                color: "var(--text-dim)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-dim)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function XMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-label="Xcelarate"
    >
      <path
        d="M3 3L10 10M17 3L10 10M10 10L3 17M10 10L17 17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
