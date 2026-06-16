import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "We started Xcelarate Studio because great branding shouldn't be a luxury. Meet the founders behind India's premium branding consultancy.",
  openGraph: {
    title: "About — Xcelarate Studio",
    description: "Meet the founders behind India's premium branding consultancy.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
