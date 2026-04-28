"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const stats = [
  { value: 3, suffix: "+", label: "Brands Launched" },
  { value: 100, suffix: "%", label: "Client Retention" },
  { value: 14, prefix: "< ", suffix: " Days", label: "Average Delivery" },
  { value: 1000, suffix: "+", label: "Assets Generated" },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1600;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * end);
      setCount(start);
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef}>
          <motion.p
            className="label text-center mb-12"
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            By the Numbers
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-7 text-center"
            >
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: "clamp(36px, 4vw, 52px)",
                  color: "#ffffff",
                  lineHeight: 1,
                  marginBottom: "10px",
                  letterSpacing: "-0.03em",
                }}
              >
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p
                className="label"
                style={{ fontSize: "10px", letterSpacing: "0.14em" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
