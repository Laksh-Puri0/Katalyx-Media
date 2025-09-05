"use client";
import React from "react";

export default function ClientReferences() {
  const clients = [
    {
      name: "Malazgirt Tiles & Renovations",
      phone: "+1 (437) 230-7940",
      location: "GTA, Ontario",
    },
    {
      name: "Sk Ethical Painting & Renovations",
      phone: "604-300-2245",
      location: "Vancouver, British Columbia",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Video */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            An Offer from Katalyx
          </h2>
          <div className="w-full relative pb-[56.25%] rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/d9xTYpHp4gc?si=2jtWcE51arA4Yleq"
              title="Owner's Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Client References */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Hear From Our Clients
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            We believe in transparency. You can contact our past clients to hear about their experience working with us.
          </p>
          <ul className="space-y-5">
            {clients.map((client, idx) => (
              <li
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {client.name}
                </span>
                <span className="block text-sm text-gray-500">
                  {client.location}
                </span>
                <a
                  href={`tel:${client.phone}`}
                  className="mt-2 inline-block text-primary font-medium hover:underline"
                >
                  {client.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
