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

export const metadata = {
  title: "Katalyx Media | Digital Marketing Agency in Canada",
  description:
    "Katalyx Media helps Canadian businesses generate more leads, grow their online presence, and scale with proven digital marketing strategies, tools, and systems that deliver measurable results.",
  keywords:
    "digital marketing agency Canada, Canadian marketing services, lead generation Canada, online business growth, SEO agency Canada, Katalyx Media, social media marketing Canada, PPC advertising Canada, digital strategy for businesses",
  authors: [
    { name: "Laksh", role: "Founder & CEO" },
  ],
  openGraph: {
    title: "Katalyx Media | Digital Marketing Agency in Canada",
    description:
      "We help Canadian businesses connect with real customers, generate consistent leads, and grow online with proven marketing systems.",
    url: "https://www.katalyxmedia.ca/",
    siteName: "Katalyx Media",
    images: [
      {
        url: "https://www.katalyxmedia.ca/Images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Katalyx Media - Digital Marketing Agency in Canada",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalyx Media | Canadian Digital Marketing Agency",
    description:
      "Helping Canadian businesses generate more leads and scale with proven digital marketing strategies.",
    images: ["https://www.katalyxmedia.ca/Images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://assets.calendly.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Vercel Insights and Analytics (runs on every page) */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
