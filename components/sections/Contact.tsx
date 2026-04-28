"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Purple radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center, rgba(124,58,237,0.14) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.p
          className="label mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Work Together
        </motion.p>

        {/* Headline */}
        <motion.h2
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            marginBottom: "24px",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to build a brand
          <br />
          that actually wins?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          style={{ fontFamily: "var(--font-inter)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          Whether you&apos;re launching something new or rebranding an existing business —
          let&apos;s have a conversation. No templates. No shortcuts. Just real brand building.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          <a
            href="mailto:hello@xcelarate.studio"
            className="inline-flex items-center px-8 py-4 bg-[#7C3AED] hover:bg-[#9461F7] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(124,58,237,0.45)] text-sm tracking-wide"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Book a Discovery Call
          </a>
          <a
            href="mailto:hello@xcelarate.studio"
            className="inline-flex items-center px-8 py-4 border border-[#2A2A2A] text-[#A1A1AA] hover:text-white hover:border-[#7C3AED] rounded-lg transition-all duration-300 text-sm font-medium"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Send us a message
          </a>
        </motion.div>

        {/* Contact info row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.4 }}
        >
          <a
            href="mailto:hello@xcelarate.studio"
            className="flex items-center gap-2 text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-200 text-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <Mail size={14} className="text-[#7C3AED]" />
            hello@xcelarate.studio
          </a>
          <span className="flex items-center gap-2 text-[#52525B] text-sm"
            style={{ fontFamily: "var(--font-inter)" }}>
            <MapPin size={14} className="text-[#7C3AED]" />
            India (Remote-first)
          </span>
          <a
            href="https://wa.me/91"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#52525B] hover:text-[#A1A1AA] transition-colors duration-200 text-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <MessageCircle size={14} className="text-[#7C3AED]" />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
