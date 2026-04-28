"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "var(--section-padding-x)",
          paddingRight: "var(--section-padding-x)",
          background: menuOpen
            ? "#0A0A0A"
            : scrolled
            ? "rgba(10,10,10,0.92)"
            : "transparent",
          backdropFilter: scrolled && !menuOpen ? "blur(12px)" : "none",
          borderBottom:
            scrolled && !menuOpen
              ? "1px solid rgba(255,255,255,0.07)"
              : "1px solid transparent",
          transition:
            "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            zIndex: 101,
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
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
          }}
          className="nav-desktop"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: isActive ? "#fff" : "var(--text-muted)",
                  textDecoration: "none",
                  position: "relative",
                  transition: "color 0.2s ease",
                  paddingBottom: 2,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive
                    ? "#fff"
                    : "var(--text-muted)")
                }
              >
                {label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "var(--purple)",
                      borderRadius: 2,
                    }}
                  />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font)",
              fontWeight: 500,
              fontSize: 13,
              color: "#fff",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "8px 20px",
              borderRadius: 4,
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--purple)";
              e.currentTarget.style.background = "rgba(124,58,237,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Book a Call
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            display: "none",
            zIndex: 101,
            padding: 4,
          }}
          className="nav-hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "fixed",
              inset: 0,
              background: "#0A0A0A",
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "var(--section-padding-x)",
              paddingRight: "var(--section-padding-x)",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={href}
                    style={{
                      fontFamily: "var(--font)",
                      fontWeight: 700,
                      fontSize: "clamp(36px, 5vw, 56px)",
                      color: pathname === href ? "#fff" : "var(--text-muted)",
                      textDecoration: "none",
                      display: "block",
                      lineHeight: 1.2,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * NAV_LINKS.length + 0.1, duration: 0.4 }}
                style={{ marginTop: 32 }}
              >
                <Link
                  href="/contact"
                  style={{
                    fontFamily: "var(--font)",
                    fontWeight: 500,
                    fontSize: 15,
                    color: "#fff",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.2)",
                    padding: "12px 28px",
                    borderRadius: 4,
                    display: "inline-block",
                  }}
                >
                  Book a Call
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .nav-hamburger { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function XMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-label="X">
      <path
        d="M3 3L10 10M17 3L10 10M10 10L3 17M10 10L17 17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
