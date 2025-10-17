"use client";

import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * GallerySection (optimized)
 * - Mobile snap carousel + responsive grid (sm+)
 * - Subtle animations that respect prefers-reduced-motion
 * - Next/Image sizing for zero CLS + better LCP
 * - Smooth scroll buttons (keyboard + a11y)
 * - Lightweight lightbox viewer with keyboard arrows/Esc
 */

export default function GallerySection() {
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef(null);

  const images = useMemo(
    () => [
      "/Images/detailing1.jpg",
      "/Images/detailing2.jpg",
      "/Images/detailing3.jpg",
      "/Images/detailing4.jpg",
      "/Images/detailing5.jpg",
      "/Images/detailing6.jpg",
      "/Images/detailing7.jpg",
      "/Images/detailing8.jpg",
    ], 
    []
  );

  // Smooth scroll on mobile scroller
  const scrollByAmount = useCallback((dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.85) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

  const open = useCallback((idx) => {
    setActive(idx);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % images.length),
    [images.length]
  );

  // Keyboard controls + scroll lock while lightbox open
  useEffect(() => {
    const original = document.body.style.overflow;
    const onKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [isOpen, close, prev, next]);

  // Motion tokens
  const headingMotion = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduceMotion ? 0.2 : 0.45 },
  };

  const cardMotion = {
    initial: { opacity: 0, scale: reduceMotion ? 1 : 0.98 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: reduceMotion ? 0.2 : 0.35 },
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-14 md:py-16"
    >
      {/* Soft theme halos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-red-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-red-100/60 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <motion.div {...headingMotion} className="mb-8 text-center md:mb-10">
          <h2 className="text-[28px] font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Our <span className="text-red-600">Work Gallery</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
            Experience the shine — a glimpse of our premium auto detailing
            transformations.
          </p>
        </motion.div>

        {/* Mobile Carousel (snap) */}
        <div className="relative sm:hidden">
          {/* Faded edges for a premium look */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"
          />

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-1.5 touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {images.map((src, i) => (
              <motion.button
                key={src}
                onClick={() => open(i)}
                {...cardMotion}
                className="group snap-center shrink-0 basis-[86%] overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-sm outline-none transition hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label={`Open image ${i + 1}`}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={src}
                    alt={`Auto detailing ${i + 1}`}
                    fill
                    sizes="90vw"
                    priority={i < 1}
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100"
                />
              </motion.button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => scrollByAmount(-1)}
              aria-label="Scroll left"
              className="rounded-full bg-red-600 p-3 text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollByAmount(1)}
              aria-label="Scroll right"
              className="rounded-full bg-red-600 p-3 text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Grid (sm and up) */}
        <motion.ul
          initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduceMotion ? 0.2 : 0.4 }}
          className="mt-2 hidden grid-cols-2 gap-4 sm:grid md:grid-cols-3 lg:grid-cols-4"
        >
          {images.map((src, i) => (
            <li
              key={`grid-${src}`}
              className="group relative overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <button
                onClick={() => open(i)}
                className="block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label={`Open image ${i + 1}`}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={src}
                    alt={`Auto detailing ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </button>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition group-hover:opacity-100"
              />
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Gallery viewer"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
              initial={{ scale: reduceMotion ? 1 : 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: reduceMotion ? 1 : 0.97, opacity: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0.15 }
                  : { type: "spring", stiffness: 240, damping: 24 }
              }
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute -top-10 right-0 rounded-full bg-white/95 p-2 text-slate-800 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src={images[active]}
                  alt={`Selected auto detailing ${active + 1}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-3 flex items-center justify-center gap-2.5">
                <button
                  onClick={prev}
                  className="rounded-full bg-red-600 p-3 text-white shadow transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="rounded-full bg-red-600 p-3 text-white shadow transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-2 flex justify-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to image ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition",
                      i === active
                        ? "bg-red-600"
                        : "bg-white/60 hover:bg-white",
                    ].join(" ")}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
