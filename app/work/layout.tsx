import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work from Xcelarate Studio. Brands we've built for TruPixel Studio, Abstract Guitar, NCETBuddy, and more.",
  openGraph: {
    title: "Work — Xcelarate Studio",
    description: "Brands we've built. See our portfolio of brand identity and web design projects.",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
