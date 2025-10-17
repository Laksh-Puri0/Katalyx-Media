"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import HeaderHero from "@/components/Header";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const bookingRef = useRef(null); // ✅ no TS generic in .jsx
  const calendlyParentRef = useRef(null); // where the iframe will mount
  const [shouldLoad, setShouldLoad] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // ---- motion variants ----
  const fadeInLeft = useMemo(
    () =>
      prefersReducedMotion
        ? {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.2 },
            viewport: { once: true },
          }
        : {
            initial: { x: -50, opacity: 0 },
            whileInView: { x: 0, opacity: 1 },
            transition: { duration: 0.8, ease: "easeOut" },
            viewport: { once: true },
          },
    [prefersReducedMotion]
  );
  const fadeInRight = useMemo(
    () =>
      prefersReducedMotion
        ? {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.2 },
            viewport: { once: true },
          }
        : {
            initial: { x: 50, opacity: 0 },
            whileInView: { x: 0, opacity: 1 },
            transition: { duration: 0.8, ease: "easeOut" },
            viewport: { once: true },
          },
    [prefersReducedMotion]
  );

  // ---- Lazy trigger when the card is near the viewport ----
  useEffect(() => {
    if (!bookingRef.current) return;
    const el = bookingRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "300px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ---- Ensure the script exists, then (re)init the widget every time shouldLoad flips true ----
  useEffect(() => {
    if (!shouldLoad || !calendlyParentRef.current) return;

    const WIDGET_URL = "https://calendly.com/puri-business7/15min";

    const init = () => {
      // Clear previous iframe(s) to avoid duplicates on HMR / re-entry
      calendlyParentRef.current.innerHTML = "";
      // Calendly API present? init inline widget.
      if (window.Calendly?.initInlineWidget) {
        window.Calendly.initInlineWidget({
          url: WIDGET_URL,
          parentElement: calendlyParentRef.current,
          // prefill / utm options could be added here if needed
        });
      }
    };

    // If the script is already on the page, init immediately.
    const existing = document.querySelector(
      'script[src*="assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) {
      init();
      return;
    }

    // Otherwise, add it and init on load.
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);

    // keep the script for subsequent navigations
  }, [shouldLoad]);

  const scrollToBooking = useCallback((e) => {
    const href = (e.currentTarget.getAttribute("href") || "").replace("#", "");
    const target = href && document.getElementById(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      {/* BG */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/Images/new.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.65),transparent_80%),linear-gradient(to_right,rgba(0,0,0,0.75),rgba(0,0,0,0.4),rgba(127,29,29,0.45))]" />
      </div>

      <HeaderHero />

      <section className="container mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-28 md:grid-cols-2 md:px-8 lg:px-10 mt-10">
        {/* Left */}
        <motion.div
          {...fadeInLeft}
          className="space-y-6 text-center text-white md:text-left"
        >
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Experience <span className="text-red-500">Royal-Level Shine</span> —
            Premium Auto Detailing You Deserve
          </h1>
          <p className="mx-auto max-w-xl text-base text-gray-200 sm:text-lg md:mx-0">
            At{" "}
            <span className="font-semibold text-white">
              Royal Touch Auto Detailing
            </span>
            , we revive your car with a deep clean, polish, and finish that
            feels brand new. Book your appointment today and give your car the
            royal treatment.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:items-start">
            <a
              href="#booking"
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 md:text-base"
            >
              Book Your Appointment
            </a>
            <a
              href="tel:+16479322928"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:text-base"
            >
              📞 Call: +1 (647) 932-2928
            </a>
          </div>
        </motion.div>

        {/* Right: Calendly */}
        <motion.div
          {...fadeInRight}
          id="booking"
          ref={bookingRef}
          className="relative"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-red-500/40 to-red-700/40 blur-2xl"
          />
          <div className="relative rounded-2xl border border-white/10 bg-white/90 p-4 shadow-2xl backdrop-blur-md sm:p-5 md:p-6">
            <h2 className="mb-4 text-center text-xl font-bold text-gray-900 sm:text-2xl">
              Schedule Your Detailing Session
            </h2>

            {/* Calendly mounts here */}
            <div
              ref={calendlyParentRef}
              className="w-full"
              style={{ minWidth: 280, height: 520 }}
              aria-busy={!shouldLoad}
              aria-live="polite"
            />

            {/* Skeleton while we wait to load/initialize */}
            {!shouldLoad && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl">
                <div className="w-full max-w-sm animate-pulse space-y-3 px-6">
                  <div className="h-4 w-3/5 rounded bg-gray-300/80" />
                  <div className="h-3 w-11/12 rounded bg-gray-300/60" />
                  <div className="h-3 w-10/12 rounded bg-gray-300/60" />
                  <div className="h-40 w-full rounded-lg bg-gray-300/70" />
                  <div className="h-10 w-32 rounded-full bg-gray-300/80" />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
