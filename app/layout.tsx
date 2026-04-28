import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import BodyLoader from "@/components/BodyLoader";
import PageLoader from "@/components/PageLoader";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Xcelarate Studio — Premium Branding Consultancy",
  description:
    "End-to-end branding consultancy. We build brands that win markets — strategy, identity, web, and marketing.",
  keywords: ["branding agency", "brand identity", "web design", "marketing strategy", "India branding"],
  openGraph: {
    title: "Xcelarate Studio — Premium Branding Consultancy",
    description: "We build brands that win markets — not just looks.",
    url: "https://agency.xcelaratestudio.space",
    siteName: "Xcelarate Studio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BodyLoader />
        <PageLoader />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
