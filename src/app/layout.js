import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * SEO-first metadata for Royal Touch Auto Detailing (Toronto, Canada)
 * - Strong, keyword-rich titles & descriptions
 * - OG/Twitter cards
 * - Canonical, locale, robots, theme-color
 * - JSON-LD for LocalBusiness (Auto detailing), + WebSite
 */
const SITE_URL = "https://www.royaltouchautodetailing.ca";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Royal Touch Auto Detailing | Interior & Exterior Car Detailing in Toronto",
    template: "%s | Royal Touch Auto Detailing",
  },
  description:
    "Premium interior and exterior car detailing in Toronto & GTA. Deep interior clean, paint-safe exterior wash, protection, and showroom gloss. Mobile & in-shop appointments. Call +1 (647) 932-2928 or book online.",
  keywords: [
    "auto detailing Toronto",
    "car detailing Toronto",
    "interior detailing Toronto",
    "exterior detailing Toronto",
    "mobile detailing Toronto",
    "car wash Toronto",
    "auto spa Toronto",
    "auto detailing GTA",
    "ceramic wax Toronto",
    "Royal Touch Auto Detailing",
  ],
  applicationName: "Royal Touch Auto Detailing",
  authors: [{ name: "Royal Touch Auto Detailing" }],
  creator: "Royal Touch Auto Detailing",
  publisher: "Royal Touch Auto Detailing",
  openGraph: {
    title:
      "Royal Touch Auto Detailing | Interior & Exterior Car Detailing in Toronto",
    description:
      "Showroom-level shine with premium interior & exterior detailing. Serving Toronto & the GTA. Book your detailing session today.",
    url: SITE_URL,
    siteName: "Royal Touch Auto Detailing",
    images: [
      {
        url: "/Images/og-royal.jpg", // replace with your best 1200x630 image
        width: 1200,
        height: 630,
        alt: "Royal Touch Auto Detailing — Toronto",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Royal Touch Auto Detailing | Toronto Interior & Exterior Car Detailing",
    description:
      "Premium car detailing in Toronto & GTA. Deep clean, polish and long-lasting protection. Book online today.",
    images: ["/Images/og-royal.jpg"],
    creator: "@royal_touch.auto.detailing",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
    { color: "#ffffff" },
  ],
  category: "Automotive",
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: "Royal Touch Auto Detailing",
    url: SITE_URL,
    image: `${SITE_URL}/Images/og-royal.jpg`,
    telephone: "+1-647-932-2928",
    areaServed: ["Toronto", "GTA", "Ontario"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.instagram.com/royal_touch.auto.detailing/",
      "https://www.facebook.com/profile.php?id=61563899468930",
      "https://www.tiktok.com/@smma_lakshpuri",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Royal Touch Auto Detailing",
    url: SITE_URL,
    potentialAction: {
      "@type": "ReserveAction",
      target: `${SITE_URL}/#booking`,
      result: {
        "@type": "Reservation",
        name: "Detailing Appointment",
      },
    },
  };

  return (
    <html lang="en-CA">
      <head>
        {/* Performance: preconnect to third-party origins used across the site */}
        <link
          rel="preconnect"
          href="https://assets.calendly.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        {/* Canonical (extra safety if middleware alters paths) */}
        <link rel="canonical" href={SITE_URL} />
        {/* JSON-LD: Local Business + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Vercel Insights and Analytics */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
