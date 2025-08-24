"use client";
import React from "react";

export default function Testimonials() {
  const videos = [
    "https://www.youtube.com/embed/nDbYIMF5DB8?si=AqQcWvEd6nZqtemA",
    "https://www.youtube.com/embed/9EZIr0lXsxc?si=RCAyZZdukj61CNPj",
    "https://www.youtube.com/embed/0G5g2-oHt_o?si=vV6RWoECn6d7l2SZ",
  ];

  return (
    <section className="container mx-auto px-4 md:px-8 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hear From Our Clients
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Watch real testimonials from our clients and see how we’ve helped
          transform their businesses.
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((src, idx) => (
          <div
            key={idx}
            className="aspect-video rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src={src}
              title={`Client Testimonial ${idx + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}
