import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Xcelarate Studio. Book a discovery call or send us a message. We respond within 24 hours.",
  openGraph: {
    title: "Contact — Xcelarate Studio",
    description: "Start your brand journey. Book a discovery call with Xcelarate Studio.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
