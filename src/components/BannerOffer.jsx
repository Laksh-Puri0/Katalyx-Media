"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

/**
 * BannerOffer — refined promo banner with countdown + CTA
 * - Adds "View Packages & Pricing" button (scrolls to #services)
 * - Elegant, responsive layout for all devices
 * - Reduced-motion–aware entrance animation
 */

function useCountdown(totalSeconds = 600) {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [timeLeft]);
  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");
  return { timeLeft, mm, ss, total: totalSeconds };
}

export default function BannerOffer({ seconds = 600 }) {
  const reduceMotion = useReducedMotion();
  const { timeLeft, mm, ss, total } = useCountdown(seconds);

  const variants = useMemo(
    () =>
      reduceMotion
        ? {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.2 },
          }
        : {
            initial: { y: -10, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.5, ease: "easeOut" },
          },
    [reduceMotion]
  );

  const scrollToServices = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-red-600 via-red-500 to-rose-500"
      />
      {/* Texture bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-25 mix-blend-overlay [background-image:radial-gradient(ellipse_at_top,white_0%,transparent_60%)]"
      />

      <motion.div
        {...variants}
        className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 md:px-8"
      >
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md sm:flex-row sm:gap-6">
          {/* Left: Copy */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-extrabold leading-tight sm:text-2xl md:text-3xl">
              Limited-Time Offer:{" "}
              <span className="underline decoration-white/60">30% OFF</span>
            </h3>
            <p className="mt-1 text-sm text-white/95 sm:text-base">
              Book within the next{" "}
              <span className="font-semibold">
                {mm}:{ss}
              </span>{" "}
              to lock in the discount.
            </p>
          </div>

          {/* Center: Countdown block */}
          <div className="w-full max-w-sm sm:max-w-none sm:w-auto">
            <div
              className="mx-auto grid w-[16rem] grid-cols-3 gap-2 sm:mx-0"
              role="timer"
              aria-live="polite"
              aria-label="Time left on offer"
            >
              {/* Minutes */}
              <div className="flex flex-col items-center rounded-xl bg-white/15 px-3 py-2">
                <span className="text-lg font-bold tabular-nums sm:text-xl">
                  {mm}
                </span>
                <span className="text-[10px] uppercase tracking-wide text-white/80">
                  Minutes
                </span>
              </div>
              {/* Separator + Progress */}
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-xl font-extrabold">:</span>
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/25">
                  <div
                    className="h-full bg-white"
                    style={{
                      width: `${Math.max(0, (timeLeft / total) * 100)}%`,
                      transition: "width 1s linear",
                    }}
                    aria-hidden
                  />
                </div>
              </div>
              {/* Seconds */}
              <div className="flex flex-col items-center rounded-xl bg-white/15 px-3 py-2">
                <span className="text-lg font-bold tabular-nums sm:text-xl">
                  {ss}
                </span>
                <span className="text-[10px] uppercase tracking-wide text-white/80">
                  Seconds
                </span>
              </div>
            </div>
          </div>

          {/* Right: CTA + Socials */}
          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#services"
              onClick={scrollToServices}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-red-600 shadow-md transition hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:w-auto"
              aria-label="View packages and pricing"
            >
              View Packages &amp; Pricing
            </a>

            <nav
              className="flex items-center gap-3"
              aria-label="Follow Royal Touch Auto Detailing"
            >
              <a
                href="https://www.instagram.com/royal_touch.auto.detailing/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <FaInstagram size={17} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563899468930"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <FaFacebookF size={16} />
              </a>
            </nav>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
