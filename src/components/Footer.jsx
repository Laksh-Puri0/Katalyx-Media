"use client";

import React, { useCallback } from "react";
import { Facebook, Instagram, Phone } from "lucide-react";
import { SiTiktok } from "react-icons/si";

/**
 * Footer — Royal Touch Auto Detailing
 * Light (white) theme with red accents
 * - Crisp contrast on white
 * - Smooth in-page scroll
 * - Fully responsive
 */

export default function Footer() {
  // Smooth in-page scrolling
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const year = new Date().getFullYear();

  const links = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Gallery", id: "gallery" },
    { label: "Book Now", id: "booking" },
    { label: "Contact", id: "booking" },
  ];

  return (
    <footer className="relative overflow-hidden bg-white text-slate-600">
      {/* Light red ambient accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-red-100 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rose-100 blur-3xl"
      />

      <div className="relative">
        {/* Upper: brand + nav + contact */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-4">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Royal <span className="text-red-600">Touch</span> Auto Detailing
              </h3>
              <p className="mt-3 max-w-sm text-sm text-slate-600">
                Premium interior & exterior detailing in Toronto. Showroom-level
                shine, every time.
              </p>

              {/* Phone CTA */}
              <a
                href="tel:+16479322928"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 transition hover:border-red-300 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                aria-label="Call Royal Touch Auto Detailing"
              >
                <Phone className="h-4 w-4" />
                +1 (647) 932-2928
              </a>
            </div>

            {/* Quick Links */}
            <nav className="md:col-span-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                Quick Links
              </h4>
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={() => scrollTo(l.id)}
                      className="rounded text-left text-sm text-slate-600 transition hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Socials */}
            <div className="md:col-span-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                Follow Us
              </h4>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/royal_touch.auto.detailing/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-200 text-red-600 transition hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61563899468930"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-200 text-red-600 transition hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@smma_lakshpuri"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-200 text-red-600 transition hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                >
                  <SiTiktok className="h-5 w-5" />
                </a>
              </div>

              {/* Service area */}
              <p className="mt-4 text-sm text-slate-600">
                Serving Toronto & GTA • Mon–Sat
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-red-100" />
        </div>

        {/* Lower: legal + back-to-top */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:text-sm">
            <p>© {year} Royal Touch Auto Detailing. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollTo("hero")}
                className="rounded-full border border-red-200 bg-white px-3 py-1 text-slate-700 transition hover:bg-red-50 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                aria-label="Back to top"
              >
                Back to top ↑
              </button>
              <button
                onClick={() => scrollTo("booking")}
                className="rounded-full bg-red-600 px-3.5 py-1.5 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                aria-label="Book your appointment"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
