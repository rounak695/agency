import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: "Brand strategy, marketing insights, and lessons from building real brands in India. Read articles from Xcelarate Studio.",
  openGraph: {
    title: "Insights — Xcelarate Studio",
    description: "Brand strategy, marketing insights, and lessons from building real brands in India.",
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
