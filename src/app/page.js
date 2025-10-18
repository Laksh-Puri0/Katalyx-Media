"use client";
import React from "react";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/components/Banner"), {
  ssr: false,
  loading: () => <SectionSkeleton height={400} />,
});
const Services = dynamic(() => import("@/components/Services"), {
  ssr: false,
  loading: () => <SectionSkeleton height={400} />,
});
const Gallery = dynamic(() => import("@/components/Gallery"), {
  ssr: false,
  loading: () => <SectionSkeleton height={500} />,
});
const Reviews = dynamic(() => import("@/components/Reviews"), {
  ssr: false,
  loading: () => <SectionSkeleton height={400} />,
});

// Simple placeholder skeleton
function SectionSkeleton({ height }) {
  return (
    <div
      style={{
        height,
        background:
          "linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%)",
        backgroundSize: "200% 100%",
        animation: "loading 1.5s infinite",
      }}
    />
  );
}

export default function Page() {
  return (
    <div>
      <Banner />
      <Services />
      <Reviews />
      <Gallery />
    </div>
  );
}
