"use client";
import React from "react";

const resultsData = [
  {
    img: "/Images/result-1.webp",
    alt: "21 leads in 4 weeks",
    caption: "11 Qualified BOOKED Appointments in 30 Days",
  },
  {
    img: "/Images/result-2.webp",
    alt: "26 Leads in 4 Weeks",
    caption: "13 Qualified BOOKED Appointments in 30 Days",
  },
  {
    img: "/Images/result-3.webp",
    alt: "24 Leads in 4 Weeks",
    caption: "15 Qualified BOOKED Appointments in 30 Days",
  },
];

export default function Results() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Real Results from Our Campaigns
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
          We don’t just promise results — we deliver them. Here’s a glimpse at the
          kind of growth our clients see in just weeks.
        </p>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {resultsData.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <a href={result.img} target="_blank" rel="noopener noreferrer">
                <img
                  src={result.img}
                  alt={result.alt}
                  className="w-full h-auto object-cover transform hover:scale-104 transition-transform duration-300"
                />
              </a>
              <div className="p-6 text-center">
                <p className="font-semibold text-lg">{result.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
