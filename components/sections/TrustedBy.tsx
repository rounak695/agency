"use client";

const CLIENTS = [
  { name: "TruPixel Studio", cta: false },
  { name: "Abstract Guitar", cta: false },
  { name: "NCETBuddy", cta: false },
  { name: "Your Brand Here", cta: true },
];

export default function TrustedBy() {
  return (
    <section
      style={{
        background: "#0A0A0A",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "48px clamp(24px, 6vw, 96px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(24px, 4vw, 64px)",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font)",
            fontWeight: 400,
            fontSize: 12,
            color: "var(--text-dim)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          Trusted by
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(24px, 4vw, 48px)",
            flexWrap: "wrap",
          }}
        >
          {CLIENTS.map((c) => (
            <span
              key={c.name}
              style={{
                fontFamily: "var(--font)",
                fontWeight: 500,
                fontSize: 15,
                color: c.cta ? "var(--purple)" : "#2A2A2A",
                transition: "color 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                if (!c.cta)
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
              }}
              onMouseLeave={(e) => {
                if (!c.cta) e.currentTarget.style.color = "#2A2A2A";
              }}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
