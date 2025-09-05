'use client';
import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      before: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", // before kitchen
      after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", // after kitchen
      quote:
        "Katalyx Media helped us get more projects in 30 days than we had in the previous 6 months. The leads were qualified and ready to book!",
      name: "Sarah Thompson",
      project: "Kitchen Remodel",
    },
    {
      before: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353", // before bathroom
      after: "https://images.unsplash.com/photo-1595526114035-0f4d52f1a6b9", // after bathroom
      quote:
        "The system works! Every appointment was solid and we closed over 70% of them. Highly recommended.",
      name: "David Rodriguez",
      project: "Bathroom Renovation",
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Proven Results. Happy Clients.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See the transformations and hear from remodelers who grew their
          business with us.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-card rounded-xl shadow-lg overflow-hidden border border-border"
          >
            {/* Before/After */}
            <div className="grid grid-cols-2">
              <div className="relative">
                <img
                  src={t.before}
                  alt="Before"
                  className="h-48 w-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  Before
                </span>
              </div>
              <div className="relative">
                <img
                  src={t.after}
                  alt="After"
                  className="h-48 w-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  After
                </span>
              </div>
            </div>

            {/* Quote */}
            <div className="p-6 space-y-3">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="italic text-muted-foreground">“{t.quote}”</p>
              <p className="font-semibold">
                — {t.name}, {t.project}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Testimonial */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Watch a Success Story</h3>
        <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://youtu.be/OHIiwtCP9LY?si=rqfBs-VU_RDtM8tC" // Replace with real testimonial link
            title="Client Testimonial"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
