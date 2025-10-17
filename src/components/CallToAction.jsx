"use client";

import React, { useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * CTA — Royal Touch Auto Detailing
 * - Matches red/rose premium theme used across the site
 * - Smooth scroll to #booking / #hero
 * - Subtle, reduced-motion–aware animations
 * - Fully responsive, accessible
 */

export default function CallToAction() {
  const reduceMotion = useReducedMotion();

  const smoothScroll = useCallback((targetId) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-[#1a1a1a] py-16 sm:py-20 text-white"
    >
      {/* Ambient accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-600/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-600/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      >
        <div className="h-px w-full bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6 }}
          className="text-center"
        >
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Ready for a <span className="text-red-500">Royal-Level Shine</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            Book your premium auto detailing now. Interior, exterior, or the
            full Royal package — we’ll revive that showroom glow.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0.2 : 0.5, delay: 0.1 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <button
            onClick={() => smoothScroll("booking")}
            className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 sm:w-auto md:text-base"
            aria-label="Book your detailing appointment"
          >
            Book Your Appointment
          </button>

          <a
            href="tel:+16479322928"
            className="inline-flex w-full items-center justify-center rounded-full bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto md:text-base"
            aria-label="Call Royal Touch Auto Detailing"
          >
            📞 Call: +1 (647) 932-2928
          </a>
        </motion.div>

        {/* Trust row */}
        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-xs text-gray-400 sm:flex-row sm:text-sm">
          <span className="rounded-full bg-white/5 px-3 py-1">
            Licensed & Insured
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-gray-500 sm:inline-block" />
          <span className="rounded-full bg-white/5 px-3 py-1">
            Premium, Eco-Safe Products
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-gray-500 sm:inline-block" />
          <span className="rounded-full bg-white/5 px-3 py-1">
            Satisfaction Guaranteed
          </span>
        </div>

        {/* Secondary link */}
        <div className="mt-8 text-center">
          <button
            onClick={() => smoothScroll("hero")}
            className="text-sm font-medium text-gray-300 underline-offset-4 transition hover:text-white hover:underline"
            aria-label="Scroll to top"
          >
            Learn more about our Royal services
          </button>
        </div>
      </div>
    </section>
  );
}
