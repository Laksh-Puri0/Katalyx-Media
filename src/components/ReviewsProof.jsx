"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ReviewsShowcase (optimized)
 * - Mobile-first snap carousel + responsive grid on larger screens
 * - Lightweight motion that respects prefers-reduced-motion
 * - Accessible lightbox with keyboard controls & focus management
 * - Preloads adjacent images for snappy next/prev
 * - Only first images use `priority` to avoid CLS & bandwidth waste
 */

export default function ReviewsShowcase() {
  const reduceMotion = useReducedMotion();

  // ✅ Single source of truth for images
  const screenshots = useMemo(
    () => [
      { src: "/reviews/review-1.jpg", alt: "Review screenshot 1" },
      { src: "/reviews/review-2.jpg", alt: "Review screenshot 2" },
      { src: "/reviews/review-3.jpg", alt: "Review screenshot 3" },
      { src: "/reviews/review-4.jpg", alt: "Review screenshot 4" },
      { src: "/reviews/review-5.jpg", alt: "Review screenshot 5" },
      { src: "/reviews/review-6.jpg", alt: "Review screenshot 6" },
    ],
    []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const closeBtnRef = useRef(null);

  const open = useCallback((i) => {
    setActive(i);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + screenshots.length) % screenshots.length),
    [screenshots.length]
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % screenshots.length),
    [screenshots.length]
  );

  // Lock body scroll & key controls when modal open
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
      // move focus to close button for a11y
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [isOpen, close, prev, next]);

  // Preload adjacent images for smooth nav
  useEffect(() => {
    if (!isOpen) return;
    const neighbors = [
      screenshots[(active + 1) % screenshots.length],
      screenshots[(active - 1 + screenshots.length) % screenshots.length],
    ];
    neighbors.forEach((img) => {
      const preload = new window.Image();
      preload.src = img.src;
    });
  }, [active, isOpen, screenshots]);

  // Motion variants (respect reduced motion)
  const cardMotion = {
    initial: {
      opacity: 0,
      scale: reduceMotion ? 1 : 0.98,
      y: reduceMotion ? 0 : 6,
    },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: reduceMotion ? 0.2 : 0.35 },
  };

  const Card = React.memo(function Card({ img, i }) {
    return (
      <motion.button
        onClick={() => open(i)}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && open(i)}
        {...cardMotion}
        className="group relative w-full overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-sm outline-none transition
                   hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-red-500"
        aria-label={`Open ${img.alt}`}
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i < 2} // only first 2 for speed
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="bg-white object-contain p-3"
          />
        </div>

        <div className="border-t border-slate-200/70 bg-slate-50 px-4 py-2.5 text-left">
          <span className="text-[13px] font-semibold tracking-wide text-slate-700">
            Review Screenshot
          </span>
        </div>

        {/* Subtle hover veil */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        </div>
      </motion.button>
    );
  });

  return (
    <section className="bg-gradient-to-br from-red-50/50 via-white to-red-100/30 py-14 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-5 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0.2 : 0.45 }}
          className="mb-8 text-center md:mb-10"
        >
          <h2 className="text-[28px] font-extrabold leading-tight text-slate-900 sm:text-4xl">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
            Real review screenshots from happy customers — authentic results,
            every time.
          </p>
        </motion.div>

        {/* Mobile carousel (scroll-snap) */}
        <div className="sm:hidden">
          <div className="flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-1.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {screenshots.map((img, i) => (
              <div key={img.src} className="snap-center shrink-0 basis-[86%]">
                <Card img={img} i={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Grid for sm+ */}
        <div className="mt-3 hidden grid-cols-2 gap-3 sm:grid lg:grid-cols-3 lg:gap-4">
          {screenshots.map((img, i) => (
            <Card key={img.src} img={img} i={i} />
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Review screenshot viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={close}
          >
            <motion.div
              initial={{ scale: reduceMotion ? 1 : 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: reduceMotion ? 1 : 0.97, opacity: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0.15 }
                  : { type: "spring", stiffness: 240, damping: 24 }
              }
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeBtnRef}
                onClick={close}
                aria-label="Close"
                className="absolute -top-10 right-0 rounded-full bg-white/95 p-2 text-slate-800 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src={screenshots[active].src}
                  alt={screenshots[active].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Arrows */}
              <div className="mt-3 flex items-center justify-center gap-2.5">
                <button
                  onClick={prev}
                  className="rounded-full bg-red-600 p-3 text-white shadow transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black/20"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="rounded-full bg-red-600 p-3 text-white shadow transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black/20"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="mt-2 flex justify-center gap-1.5">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
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
