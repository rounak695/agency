"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, MapPin, CheckCircle } from "lucide-react";

const SERVICE_OPTIONS = [
  "Brand Identity & Strategy",
  "Website Design & Development",
  "Marketing Strategy",
  "Social Media",
  "Full Brand Package",
  "Not sure yet",
];

const BUDGET_OPTIONS = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000+",
  "Prefer not to say",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    project: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#111111",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 4,
    padding: "14px 16px",
    color: "#fff",
    fontFamily: "var(--font)",
    fontWeight: 400,
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font)",
    fontWeight: 400,
    fontSize: 13,
    color: "var(--text-muted)",
    marginBottom: 8,
  };

  return (
    <main>
      <div
        className="section-pad"
        style={{
          paddingTop: 160,
          paddingBottom: 120,
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          gap: 64,
        }}
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="label-sm"
          >
            START A PROJECT
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "var(--font)",
              fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 56px)",
              color: "#fff",
              lineHeight: 1.1,
              marginTop: 16,
            }}
          >
            Let's build something worth remembering.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginTop: 48 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <Mail size={18} color="var(--text-muted)" />
              <a
                href="mailto:hello@xcelarate.studio"
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                }}
              >
                hello@xcelarate.studio
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <MessageCircle size={18} color="var(--text-muted)" />
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                }}
              >
                WhatsApp us
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <MapPin size={18} color="var(--text-muted)" />
              <span
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "var(--text-muted)",
                }}
              >
                India · Remote-first · Global clients
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ marginTop: 64 }}
          >
            <span
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 11,
                color: "var(--text-dim)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              RESPONSE TIME
            </span>
            <p
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 15,
                color: "var(--text-muted)",
                marginTop: 4,
              }}
            >
              We respond within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ marginTop: 32 }}
          >
            <span
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 11,
                color: "var(--text-dim)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              AVAILABILITY
            </span>
            <p
              style={{
                fontFamily: "var(--font)",
                fontWeight: 400,
                fontSize: 15,
                color: "#fff",
                marginTop: 4,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22C55E",
                  marginRight: 8,
                }}
              />
              Currently accepting new clients.
            </p>
          </motion.div>
        </div>

        <div>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "80px 40px",
                  background: "#111111",
                  borderRadius: 8,
                }}
              >
                <CheckCircle size={32} color="#7C3AED" />
                <h3
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 700,
                    fontSize: 24,
                    color: "#fff",
                    marginTop: 24,
                  }}
                >
                  Message sent.
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 400,
                    fontSize: 15,
                    color: "var(--text-muted)",
                    marginTop: 8,
                  }}
                >
                  We'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <div>
                  <label style={labelStyle}>Your name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    style={{
                      ...inputStyle,
                      color: formData.name ? "#fff" : undefined,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Your email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@company.com"
                    style={{
                      ...inputStyle,
                      color: formData.email ? "#fff" : undefined,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Company / Brand name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Acme Inc."
                    style={{
                      ...inputStyle,
                      color: formData.company ? "#fff" : undefined,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>What do you need?</label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    style={{
                      ...inputStyle,
                      color: formData.service ? "#fff" : "var(--text-dim)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  >
                    <option value="" disabled style={{ color: "var(--text-dim)" }}>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option} style={{ color: "#fff" }}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Tell us about your project</label>
                  <textarea
                    value={formData.project}
                    onChange={(e) =>
                      setFormData({ ...formData, project: e.target.value })
                    }
                    placeholder="Describe your project, goals, and timeline..."
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 120,
                      color: formData.project ? "#fff" : undefined,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Budget range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    style={{
                      ...inputStyle,
                      color: formData.budget ? "#fff" : "var(--text-dim)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#7C3AED")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  >
                    <option value="" disabled style={{ color: "var(--text-dim)" }}>
                      Select a budget range
                    </option>
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option} value={option} style={{ color: "#fff" }}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleSubmit}
                  style={{
                    width: "100%",
                    background: "#7C3AED",
                    border: "none",
                    borderRadius: 4,
                    padding: 16,
                    fontFamily: "var(--font)",
                    fontWeight: 500,
                    fontSize: 15,
                    color: "#fff",
                    cursor: "pointer",
                    transition: "background 0.2s ease, transform 0.2s ease",
                    marginTop: 8,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#9461F7";
                    e.currentTarget.style.transform = "scale(1.01)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#7C3AED";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Send Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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