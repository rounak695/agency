import type { Metadata, Viewport } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import BodyLoader from "@/components/BodyLoader";
import PageLoader from "@/components/PageLoader";
import ScrollProgress from "@/components/ScrollProgress";

const SITE_URL = "https://agency.xcelaratestudio.space";
const SITE_NAME = "Xcelarate Studio";
const DEFAULT_DESC = "End-to-end branding consultancy. We build brands that win markets — strategy, identity, web, and marketing.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Premium Branding Consultancy`,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESC,
  keywords: ["branding agency", "brand identity", "web design", "marketing strategy", "India branding", "logo design", "brand consultancy"],
  openGraph: {
    title: `${SITE_NAME} — Premium Branding Consultancy`,
    description: "We build brands that win markets — not just looks.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Premium Branding Consultancy`,
    description: DEFAULT_DESC,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  description: DEFAULT_DESC,
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    "https://xcelaratestudio.space",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BodyLoader />
        <PageLoader />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
