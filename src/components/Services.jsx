"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/* ---------- Tiny inline check icon (no extra deps) ---------- */
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

/* ---------- Countdown hook (10-minute promo) ---------- */
function useCountdown(totalSeconds) {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [timeLeft]);

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");
  return { timeLeft, label: `${mm}:${ss}`, total: totalSeconds };
}

/* ---------- Screenshot helper (lazy, client-only) ---------- */
async function takeScreenshot(node, fileName = "services-offer.png") {
  try {
    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(node, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      ignoreElements: (el) => el.hasAttribute("data-hide-in-screenshot"),
    });
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  } catch (err) {
    console.error("Screenshot failed:", err);
    alert("Unable to create screenshot. Please try again.");
  }
}

/* ---------- Motion variants ---------- */
const sectionVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * i },
  }),
};

/* ---------- Reusable class to pin CTAs to card bottoms ---------- */
/* Tailwind does the heavy lifting via mt-auto; this class name helps you target it if you ever add custom CSS */
const CTA_BOTTOM_CLASS = "cta-bottom mt-auto";

export default function Services() {
  const prefersReducedMotion = useReducedMotion();
  const captureRef = useRef(null);

  // 10 minutes = 600 seconds
  const { timeLeft, label } = useCountdown(600);

  const bookingUrl = "https://calendly.com/puri-business7/15min";

  const services = useMemo(
    () => [
      {
        title: "Royal Premium Interior + Exterior Detail",
        priceOld: "$250",
        priceNew: "$180",
        time: "Estimated Time: 3 Hours",
        description:
          "Complete signature package — interior deep clean + exterior gloss & protection for a showroom-level refresh.",
        image: "/Images/service3.jpg",
        features: [
          "Deep shampoo & steam clean",
          "Deep Stain Removal",
          "Dash & console detail",
          "Windows & mirrors crystal-clear",
          "Hand wash & dry",
          "Wheels, tires & tire shine",
          "Wax/sealant for lasting protection",
        ],
      },
      {
        title: "Royal Premium Interior Detail",
        priceOld: "$180",
        priceNew: "$140",
        time: "Estimated Time: 2 Hours",
        description:
          "Cabin restoration with precision cleaning, odor reduction, and conditioning for a like-new feel.",
        image: "/Images/service1.jpg",
        features: [
          "Deep Stain Removal",
          "Vacuuming floors/mats",
          "Shampoo seats & carpets",
          "Leather/vinyl clean & condition",
          "Vents, pockets & compartments",
          "Headliner spot clean",
          "Windows & mirrors",
        ],
      },
      {
        title: "Royal Premium Exterior Detail",
        priceOld: "$100",
        priceNew: "$70",
        time: "Estimated Time: 1 Hour",
        description:
          "Professional exterior refresh — removes dust & road film, revives gloss, and protects your paint.",
        image: "/Images/service2.jpg",
        features: [
          "Foam wash & hand dry",
          "Bug/tar removal",
          "Clean windows & mirrors",
          "Dress exterior trims",
          "Light polish (if needed)",
          "Tire shine application",
        ],
      },
    ],
    []
  );

  const handleScreenshot = useCallback(async () => {
    if (!captureRef.current) return;
    await takeScreenshot(
      captureRef.current,
      `royal-services-${Date.now()}.png`
    );
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      {/* soft red corners */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-100/60 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* ----- Heading row ----- */}
        <div className="mb-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center sm:text-left"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our <span className="text-red-600">Royal Services</span>
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Choose a package tailored to your needs—crafted with care,
              precision, and the Royal Touch promise.
            </p>
          </motion.div>
        </div>

        {/* ----- Screenshot capture area ----- */}
        <div ref={captureRef}>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-red-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Media */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    priority={false}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {service.title}
                  </h3>

                  {/* Price row */}
                  <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-3xl font-extrabold text-red-600">
                      {service.priceNew}
                    </span>
                    <span className="text-sm font-semibold text-slate-400 line-through">
                      {service.priceOld}
                    </span>
                    <span className="rounded-full bg-red-50 px-3 py-1 text-[11px] font-semibold text-red-700 sm:text-xs">
                      {service.time}
                    </span>
                  </div>

                  <p className="mt-3 text-slate-600">{service.description}</p>

                  <ul
                    className="mt-5 mb-4 space-y-2.5"
                    aria-label={`${service.title} features`}
                  >
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600/10 text-red-600">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA pinned at the bottom */}
                  <div className={CTA_BOTTOM_CLASS}>
                    <motion.a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                      className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      aria-label={`Book ${service.title} (opens Calendly in a new tab)`}
                    >
                      Book Now
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
