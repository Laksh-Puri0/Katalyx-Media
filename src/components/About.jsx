"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* tiny inline check (no extra deps) */
const Check = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function About() {
  const reduceMotion = useReducedMotion();

  const fadeUp = useMemo(
    () =>
      reduceMotion
        ? {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.2 },
            viewport: { once: true },
          }
        : {
            initial: { opacity: 0, y: 18 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: "easeOut" },
            viewport: { once: true },
          },
    [reduceMotion]
  );

  const stagger = useMemo(
    () =>
      reduceMotion
        ? {}
        : { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
    [reduceMotion]
  );

  const features = [
    "Licensed, insured & trusted",
    "Premium, eco-safe products",
    "Attention to every seam & surface",
    "Satisfaction-first, no rush service",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Decorative background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* soft blobs */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-rose-100/60 blur-3xl" />
        {/* dotted texture with radial mask for premium feel */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_60%)] [mask-image:radial-gradient(closest-side,black,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(#f3f4f6_1px,transparent_1px),linear-gradient(90deg,#f3f4f6_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 [mask-image:radial-gradient(ellipse_at_right,black,transparent_70%)]" />
      </div>

      <div className="container mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          {...fadeUp}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            About{" "}
            <span className="text-red-600">Royal Touch Auto Detailing</span>
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Where precision meets passion — redefining car-care excellence.
          </p>
        </motion.div>

        {/* Content grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-12"
        >
          {/* Text column */}
          <motion.div
            {...fadeUp}
            className="md:col-span-7 lg:col-span-8 space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg"
          >
            <p>
              At{" "}
              <span className="font-semibold text-gray-900">
                Royal Touch Auto Detailing
              </span>
              , we believe detailing is more than cleaning — it’s craftsmanship.
              Every vehicle we work on is treated like our own, with care,
              precision, and a passion for excellence.
            </p>
            <p>
              From deep interior rejuvenation to exterior perfection, we restore
              that fresh, showroom-level brilliance while protecting your car’s
              long-term beauty. Our professional-grade products and meticulous
              process deliver results you can feel proud of.
            </p>
            <p>
              We’re more than a detailing service — we’re your car’s personal
              restoration experts. Our mission is simple: elevate every vehicle
              we touch using modern techniques and an obsession for perfection.
            </p>
            <p className="pt-2 text-lg font-semibold text-gray-900">
              Every detail matters — because your car deserves nothing less than
              royal treatment.
            </p>
          </motion.div>

          {/* Highlights / badge card */}
          <motion.aside {...fadeUp} className="md:col-span-5 lg:col-span-4">
            <div className="rounded-2xl border border-red-100 bg-white/80 p-5 shadow-md backdrop-blur">
              <h3 className="text-lg font-bold text-gray-900">
                Why drivers choose us
              </h3>
              <ul className="mt-4 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600/10 text-red-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>

              {/* subtle ribbon */}
              <div className="mt-5 rounded-xl bg-gradient-to-r from-red-600 to-rose-500 px-4 py-3 text-center text-sm font-semibold text-white shadow">
                Premium care • Honest pricing • Guaranteed satisfaction
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
