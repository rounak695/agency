"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link, ExternalLink } from "lucide-react";

const founders = [
  {
    name: "Rounak",
    role: "Co-Founder · Brand Strategist",
    bio: "Obsessed with the intersection of brand psychology and visual craft. Builds brands that outlast trends.",
    imgSrc: "/founders/rounak.svg",
    imgAlt: "Rounak — Co-Founder",
    initials: "R",
    linkedIn: "#",
    twitter: "#",
  },
  {
    name: "Ravi",
    role: "Co-Founder · Creative Director",
    bio: "Turns brand strategy into systems that scale. Believes every pixel has a purpose.",
    imgSrc: "/founders/ravi.svg",
    imgAlt: "Ravi — Co-Founder",
    initials: "R",
    linkedIn: "#",
    twitter: "#",
  },
];

function FounderCard({
  founder,
  index,
}: {
  founder: (typeof founders)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      {/* Image */}
      <div ref={cardRef} className="relative mb-8">
        <motion.div style={{ y }} className="relative">
          {/* Spinning ring */}
          <div className="absolute -inset-1 rounded-full founder-ring opacity-80 pointer-events-none" />
          {/* Image container */}
          <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-2 border-[#7C3AED] bg-[#1A1A1A] flex items-center justify-center">
            {/* Try real image, fallback to initials */}
            <img
              src={founder.imgSrc}
              alt={founder.imgAlt}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (
                  e.currentTarget.nextElementSibling as HTMLElement
                ).style.display = "flex";
              }}
            />
            {/* Fallback initials */}
            <div
              className="hidden absolute inset-0 items-center justify-center bg-[rgba(124,58,237,0.15)]"
              id={`initials-${index}`}
            >
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: "72px",
                  color: "#7C3AED",
                  lineHeight: 1,
                }}
              >
                {founder.initials}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Info */}
      <h3
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontWeight: 600,
          fontSize: "28px",
          color: "#ffffff",
          marginBottom: "6px",
        }}
      >
        {founder.name}
      </h3>
      <p className="label mb-4" style={{ fontSize: "10px" }}>
        {founder.role}
      </p>
      <p
        className="text-[#A1A1AA] text-sm leading-relaxed max-w-xs"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {founder.bio}
      </p>

      {/* Social */}
      <div className="flex items-center gap-4 mt-6">
        <a
          href={founder.linkedIn}
          className="w-9 h-9 rounded-lg border border-[#2A2A2A] flex items-center justify-center text-[#52525B] hover:text-[#9461F7] hover:border-[#7C3AED] transition-all duration-200"
          aria-label={`${founder.name} LinkedIn`}
        >
          <Link size={16} />
        </a>
        <a
          href={founder.twitter}
          className="w-9 h-9 rounded-lg border border-[#2A2A2A] flex items-center justify-center text-[#52525B] hover:text-[#9461F7] hover:border-[#7C3AED] transition-all duration-200"
          aria-label={`${founder.name} Twitter`}
        >
          <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default function About() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 md:py-40 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headRef} className="mb-20 text-center">
          <motion.p
            className="label mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Who We Are
          </motion.p>
          <motion.h2
            className="text-section-heading text-white mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Built by founders, for founders.
          </motion.h2>
          <motion.div
            className="max-w-2xl mx-auto text-[#A1A1AA] text-sm leading-loose space-y-3"
            style={{ fontFamily: "var(--font-inter)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <p>We&apos;re Rounak and Ravi — the founders of Xcelarate Studio.</p>
            <p>
              We started as a branding agency helping real businesses get world-class brands.
              That hands-on experience showed us one truth: great branding should never be out of reach.
            </p>
            <p>
              Every brand we&apos;ve built has been manually crafted, strategically positioned, and
              designed to compete at an international level. We don&apos;t outsource. We don&apos;t use
              templates. We build.
            </p>
          </motion.div>
        </div>

        {/* Founders */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-16 md:gap-32">
          {founders.map((f, i) => (
            <FounderCard key={i} founder={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
