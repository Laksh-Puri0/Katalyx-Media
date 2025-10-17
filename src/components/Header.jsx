"use client";

import React, { useCallback, useEffect, useId, useMemo, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function HeaderHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const dialogLabelId = useId();

  const navLinks = useMemo(
    () => [
      { label: "Home", id: "hero" }, // fixed from "/"
      { label: "About", id: "about" },
      { label: "Services", id: "services" },
      { label: "Reviews", id: "reviews" },
      { label: "Gallery", id: "gallery" },
      { label: "Contact", id: "contact" },
    ],
    []
  );

  const scrollToSection = useCallback((id) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
      setTimeout(() => el.removeAttribute("tabindex"), 500);
    }
  }, []);

  // Efficient scroll listener (rAF + passive)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock when menu open
  useEffect(() => {
    const cls = ["overflow-hidden", "md:overflow-auto"];
    if (menuOpen) {
      document.documentElement.classList.add(...cls);
      document.body.classList.add(...cls);
    } else {
      document.documentElement.classList.remove(...cls);
      document.body.classList.remove(...cls);
    }
  }, [menuOpen]);

  // Animations (respect reduced motion)
  const navVariants = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : -8 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.35,
        ease: "easeOut",
      },
    },
  };
  const menuVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.22 },
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -10,
      transition: { duration: prefersReducedMotion ? 0 : 0.18 },
    },
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Topbar */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-3 sm:px-4">
          <div className="flex flex-col items-center justify-between gap-2 py-2 sm:py-2.5 md:flex-row md:gap-4">
            {/* Left: Tagline (wraps nicely on small screens) */}
            <p className="w-full text-center text-[11px] xs:text-xs sm:text-sm font-medium md:w-auto md:text-left">
              🚗 Professional Auto Detailing in Toronto
            </p>

            {/* Right: Phone + Social (wraps on small screens, aligns right on md+) */}
            <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4 md:w-auto md:justify-end">
              <a
                href="tel:+16479322928"
                className="rounded font-semibold tracking-tight outline-none transition-opacity hover:opacity-90 focus:ring-2 focus:ring-white/60 text-[12px] sm:text-sm"
              >
                📞 +1 (647)-932-2928
              </a>

              <nav
                className="flex items-center gap-3 sm:gap-4"
                aria-label="Social"
              >
                <a
                  href="https://www.instagram.com/royal_touch.auto.detailing/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded p-1 outline-none transition-transform hover:scale-110 hover:opacity-90 focus:ring-2 focus:ring-white/60"
                >
                  <FaInstagram className="text-[14px] sm:text-[16px]" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61563899468930"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="rounded p-1 outline-none transition-transform hover:scale-110 hover:opacity-90 focus:ring-2 focus:ring-white/60"
                >
                  <FaFacebookF className="text-[14px] sm:text-[16px]" />
                </a>
                <a
                  href="https://www.tiktok.com/@smma_lakshpuri"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="rounded p-1 outline-none transition-transform hover:scale-110 hover:opacity-90 focus:ring-2 focus:ring-white/60"
                >
                  <FaTiktok className="text-[14px] sm:text-[16px]" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        variants={navVariants}
        initial="initial"
        animate="animate"
        className={[
          "mx-auto flex  items-center justify-between",
          "px-4 sm:px-6 lg:px-8 py-3 sm:py-4",
          "border transition-all duration-300 backdrop-blur-md",
          scrolled
            ? "bg-white/85 border-red-200 shadow-lg"
            : "bg-white/95 border-red-100 shadow-sm",
        ].join(" ")}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="group inline-flex items-center gap-2 outline-none"
          aria-label="Go to top"
        >
          <Image
            src="/Images/Logo.webp"
            alt="Royal Touch Auto Detailing Logo"
            width={44}
            height={44}
            priority
            sizes="(max-width:768px) 36px, 44px"
            className="select-none"
          />
          <span className="sr-only">Royal Touch Auto Detailing</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="group relative text-md font-semibold text-slate-700 outline-none transition-colors hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-300 rounded"
              >
                <span>{link.label}</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.button
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            onClick={() => scrollToSection("hero")}
            className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
          >
            BOOK NOW
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="md:hidden rounded p-2 text-slate-800 transition-colors hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogLabelId}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden border-t border-red-100 bg-white shadow-xl"
            onKeyDown={(e) => e.key === "Escape" && setMenuOpen(false)}
          >
            <h2 id={dialogLabelId} className="sr-only">
              Navigation menu
            </h2>

            <ul className="flex flex-col items-center gap-1 px-4 py-4 text-slate-700">
              {navLinks.map((link) => (
                <li key={link.id} className="w-full">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="w-full rounded-lg px-4 py-3 text-base font-medium text-center transition-colors hover:bg-red-50 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}

              <li className="mt-1 flex items-center justify-center gap-6 py-2 text-lg text-slate-600">
                <a
                  href="https://www.instagram.com/royal_touch.auto.detailing/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded p-2 transition-colors hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61563899468930"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="rounded p-2 transition-colors hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.tiktok.com/@smma_lakshpuri"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="rounded p-2 transition-colors hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                >
                  <FaTiktok />
                </a>
              </li>

              <li className="w-full pt-1">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="w-full rounded-full bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                >
                  BOOK NOW
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
