"use client";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero"; // Load instantly

// Lazy-loaded sections with placeholders
const About = dynamic(() => import("@/components/About"), {
  ssr: false,
  loading: () => <SectionSkeleton height={500} />,
});
const ClientReferences = dynamic(() => import("@/components/ClientReferences"), {
  ssr: false,
  loading: () => <SectionSkeleton height={400} />,
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  ssr: false,
  loading: () => <SectionSkeleton height={500} />,
});
const Guarantee = dynamic(() => import("@/components/Guarantee"), {
  ssr: false,
  loading: () => <SectionSkeleton height={400} />,
});
const BrandsShowcase = dynamic(() => import("@/components/BrandShowcase"), {
  ssr: false,
  loading: () => <SectionSkeleton height={300} />,
});
const FAQSection = dynamic(() => import("@/components/FAQ"), {
  ssr: false,
  loading: () => <SectionSkeleton height={500} />,
});
const Results = dynamic(() => import("@/components/Result"), {
  ssr: false,
  loading: () => <SectionSkeleton height={500} />,
});
const CallToAction = dynamic(() => import("@/components/CallToAction"), {
  ssr: false,
  loading: () => <SectionSkeleton height={400} />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <SectionSkeleton height={200} />,
});

// Simple placeholder skeleton
function SectionSkeleton({ height }) {
  return (
    <div
      style={{
        height,
        background: "linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%)",
        backgroundSize: "200% 100%",
        animation: "loading 1.5s infinite",
      }}
    />
  );
}

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <ClientReferences />
      <HowItWorks />
      <Guarantee />
      <BrandsShowcase />
      <FAQSection />
      <Results />
      <CallToAction />
      <Footer />
    </div>
  );
}
