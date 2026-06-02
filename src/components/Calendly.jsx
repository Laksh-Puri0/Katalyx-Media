"use client";

import React from "react";

export default function Calendly() {
  return (
    <section
      id="calendly"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      {/* Background Accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-100/60 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-100/60 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-xs font-semibold tracking-wide text-red-600 uppercase">
            Book A Free Consultation
          </span>
{/* 
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Schedule Your Call
          </h2>

          <p className="mt-4 text-slate-600">
            Choose a time that works for you. We'll discuss your with , answer
            your questions, and explore how we can help bring your vision to
            life.
          </p> */}
        </div>

        {/* Calendly Container */}
        <div className="overflow-hidden rounded-3xl border border-red-100 bg-white shadow-sm">
          <iframe
            src="https://calendly.com/puri-business200/30min"
            title="Book a Meeting"
            loading="lazy"
            className="
              w-full
              border-0
              h-[700px]
              sm:h-[750px]
              md:h-[800px]
              lg:h-[850px]
            "
          />
        </div>
      </div>
    </section>
  );
}
