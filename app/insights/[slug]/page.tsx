"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FileText, Clock } from "lucide-react";

const ARTICLES: Record<string, { title: string; category: string; fullContent?: string }> = {
  "why-indian-brands-struggle": {
    title: "Why Most Indian Businesses Look Like They Don't Take Themselves Seriously",
    category: "Brand Strategy",
    fullContent: `The Canva logo problem. The stock photo website. The generic tagline. Here's why this happens — and how to fix it before it kills your business.`,
  },
  "brand-vs-logo": {
    title: "Your Logo Is Not Your Brand. Here's What Is.",
    category: "Brand Education",
  },
  "website-conversion": {
    title: "Why Your Website Isn't Converting (And It's Not the Design)",
    category: "Web & Marketing",
  },
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = ARTICLES[slug];

  if (!article) {
    return (
      <main style={{ paddingTop: 120, padding: "var(--section-padding-x)" }}>
        <h1 style={{ color: "#fff", fontFamily: "var(--font)" }}>Article not found</h1>
      </main>
    );
  }

  const hasContent = slug === "why-indian-brands-struggle";

  return (
    <main>
      <div className="section-pad" style={{ paddingTop: 160, paddingBottom: 80 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}
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
          <span style={{ color: "var(--text-dim)" }}>·</span>
          <span
            style={{
              fontFamily: "var(--font)",
              fontWeight: 400,
              fontSize: 12,
              color: "var(--text-dim)",
            }}
          >
            April 2026
          </span>
          <span style={{ color: "var(--text-dim)" }}>·</span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Clock size={12} color="var(--text-dim)" />
            <span
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 12,
                color: "var(--text-dim)",
              }}
            >
              5 min read
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font)",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 56px)",
            color: "#fff",
            lineHeight: 1.15,
            maxWidth: 800,
          }}
        >
          {article.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 32 }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#161616",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FileText size={18} color="var(--text-dim)" />
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font)",
                fontWeight: 500,
                fontSize: 14,
                color: "#fff",
                display: "block",
              }}
            >
              Xcelarate Studio
            </span>
            <span
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 12,
                color: "var(--text-muted)",
              }}
            >
              Branding & Strategy
            </span>
          </div>
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
          {article.title.split(" ").slice(0, 3).join(" ")}
        </span>
      </motion.div>

      <div className="section-pad" style={{ paddingTop: 80, paddingBottom: 120 }}>
        {hasContent ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ maxWidth: 680, margin: "0 auto" }}
            >
              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#CCCCCC",
                  lineHeight: 1.9,
                }}
              >
                The moment a founder decides to start a business, there's a spark. A vision. Something that deserves to be seen, heard, and remembered. And then — almost immediately — something goes wrong.
              </p>

              <h2
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "#fff",
                  marginTop: 48,
                  marginBottom: 24,
                }}
              >
                The Canva Trap
              </h2>

              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#CCCCCC",
                  lineHeight: 1.9,
                }}
              >
                It starts with Canva. A free logo, pulled from a template. Maybe they've tweaked the colors, changed the font. It looks fine. It looks like something.
              </p>

              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#CCCCCC",
                  lineHeight: 1.9,
                  marginTop: 24,
                }}
              >
                But here's what founders don't realize: that logo says something. It says "we didn't invest in this." It says "we're figuring it out as we go." And in a market where trust is everything, that's a problem.
              </p>

              <blockquote
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 300,
                  fontSize: 28,
                  color: "#fff",
                  borderLeft: "2px solid var(--purple)",
                  paddingLeft: 32,
                  marginTop: 48,
                  marginBottom: 48,
                }}
              >
                "Your logo is the hello of your brand. Would you hand out a crumbled business card at your first meeting?"
              </blockquote>

              <h2
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "#fff",
                  marginTop: 48,
                  marginBottom: 24,
                }}
              >
                The Stock Photo Default
              </h2>

              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#CCCCCC",
                  lineHeight: 1.9,
                }}
              >
                Then comes the website. And because the budget was spent on product, the website gets the free WordPress theme. The generic stock photos. The "contact us" form that goes nowhere.
              </p>

              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#CCCCCC",
                  lineHeight: 1.9,
                  marginTop: 24,
                }}
              >
                The site doesn't reflect the founder's ambition. It doesn't tell the story. It exists because every business "needs a website." That's not a strategy. That's a checkbox.
              </p>

              <h2
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "#fff",
                  marginTop: 48,
                  marginBottom: 24,
                }}
              >
                The Generic Tagline
              </h2>

              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#CCCCCC",
                  lineHeight: 1.9,
                }}
              >
                Innovation. Excellence. Beyond expectations. These words mean nothing. They're noise. And in a noisy market, being generic is the fastest way to be invisible.
              </p>

              <h2
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "#fff",
                  marginTop: 48,
                  marginBottom: 24,
                }}
              >
                What Great Brands Do Differently
              </h2>

              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#CCCCCC",
                  lineHeight: 1.9,
                }}
              >
                Great brands don't start with a logo. They start with a question: Why does this exist? Who is it for? What problem do we solve that no one else solves?
              </p>

              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#CCCCCC",
                  lineHeight: 1.9,
                  marginTop: 24,
                }}
              >
                Once you have those answers, everything else follows. The name, the look, the voice — it all becomes an expression of strategy, not decoration.
              </p>

              <h2
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "#fff",
                  marginTop: 48,
                  marginBottom: 24,
                }}
              >
                The Fix Is Simpler Than You Think
              </h2>

              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#CCCCCC",
                  lineHeight: 1.9,
                }}
              >
                You don't need a million rupees. You need intention. You need something worth saying, and a way to say it that makes people listen.
              </p>

              <p
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#CCCCCC",
                  lineHeight: 1.9,
                  marginTop: 24,
                }}
              >
                Start with why you exist. Then build the rest.
              </p>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}
          >
            <p
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 18,
                color: "var(--text-muted)",
              }}
            >
              Full article coming soon. Sign up for our newsletter to be notified.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: 680,
            margin: "80px auto 0",
            padding: 32,
            background: "rgba(124,58,237,0.1)",
            borderRadius: 8,
            border: "1px solid rgba(124,58,237,0.2)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font)",
              fontWeight: 400,
              fontSize: 16,
              color: "var(--text-muted)",
              marginBottom: 16,
            }}
          >
            Found this useful? Book a free brand audit.
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
              background: "var(--purple)",
              padding: "12px 24px",
              borderRadius: 4,
            }}
          >
            Get your brand audit →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}