"use client";

const ITEMS = [
  "END-TO-END BRANDING",
  "LOGO & IDENTITY",
  "WEB DESIGN & DEV",
  "SOCIAL MEDIA",
  "MARKETING STRATEGY",
  "CONTENT CREATION",
  "BRAND GUIDELINES",
  "GROWTH SYSTEMS",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <section
      style={{
        height: 56,
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="marquee-track">
        {track.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 20,
              paddingRight: 20,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font)",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: "0.25em",
                color: "var(--text-dim)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--purple)", fontSize: 8, lineHeight: 1 }}>·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
