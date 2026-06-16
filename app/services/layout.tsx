import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Brand Identity & Strategy, Website Design & Development, Marketing Strategy, Social Media, and more. End-to-end branding services by Xcelarate Studio.",
  openGraph: {
    title: "Services — Xcelarate Studio",
    description: "End-to-end branding services — strategy, identity, web, and marketing.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
