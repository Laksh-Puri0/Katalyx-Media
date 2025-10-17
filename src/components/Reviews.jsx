"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

/* ——— Utilities ——— */
/** Breakpoint-aware items per page (1 / 2 / 3) */
function useItemsPerPage() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const calc = () => {
      if (window.innerWidth >= 1024) setCount(3); // lg+
      else if (window.innerWidth >= 640) setCount(2); // sm/md
      else setCount(1); // mobile
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return count;
}

const containerFade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardStagger = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
};

/* ——— Google G Icon (inline SVG, crisp & lightweight) ——— */
const GoogleG = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path
      fill="#FFC107"
      d="M43.61 20.083H42V20H24v8h11.303C33.88 31.91 29.32 35 24 35c-7.18 0-13-5.82-13-13s5.82-13 13-13c3.18 0 6.1 1.17 8.35 3.09l5.66-5.66C34.46 3.05 29.48 1 24 1 11.85 1 2 10.85 2 23s9.85 22 22 22c11 0 21-8 21-22 0-1.47-.16-2.9-.39-4.917z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.572 4.817C14.418 16.07 18.84 13 24 13c3.18 0 6.1 1.17 8.35 3.09l5.66-5.66C34.46 3.05 29.48 1 24 1 15.326 1 7.96 5.86 4.086 12.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 45c5.24 0 10.05-1.88 13.74-5.08l-6.34-5.37C29.17 35.48 26.77 36 24 36c-5.29 0-9.8-3.36-11.41-8.04l-6.55 5.05C8.77 40.37 15.78 45 24 45z"
    />
    <path
      fill="#1976D2"
      d="M43.61 20.083H42V20H24v8h11.303c-1.13 3.43-3.91 6.12-7.603 7.45l6.34 5.37C36.48 42.27 43 37 43 23c0-1.47-.16-2.9-.39-4.917z"
    />
  </svg>
);

/* ——— Review Card ——— */
function ReviewCard({ review, i }) {
  return (
    <motion.li
      id="reviews"
      custom={i}
      variants={cardStagger}
      initial="hidden"
      animate="show"
      className="flex h-full flex-col rounded-xl border border-slate-200/70 bg-white p-5 text-left shadow-sm transition
                 hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* Header */}
      <div className="mb-3 flex items-start gap-2">
        <GoogleG className="h-5 w-5 shrink-0" />
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-semibold text-slate-900">
            {review.name}
          </h3>
          <p className="text-xs text-slate-500">{review.time}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="mb-3 flex">
        {Array.from({ length: review.stars }).map((_, idx) => (
          <Star
            key={idx}
            className="h-4.5 w-4.5 mr-1 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm leading-relaxed text-slate-700">“{review.text}”</p>
    </motion.li>
  );
}

/* ——— Main Component ——— */
export default function Reviews() {
  const reviews = [
    {
      name: "Anum Patel",
      time: "3 months ago",
      text: "I couldn’t be happier with the detailing job done on my car! It looks and feels brand new—inside and out. Every little nook was cleaned, the paint is shining, and even the carpets smell fresh. The team was professional and friendly throughout the whole process. Highly recommend!",
      stars: 5,
    },
    {
      name: "Zaeem Naeem Mirza",
      time: "3 months ago",
      text: "Got a full paint correction and detail on my M4. The car looks absolutely flawless now. Haris is very professional and clearly knows his stuff. Highly recommended!",
      stars: 5,
    },
    {
      name: "Hamdi Hilal",
      time: "4 months ago",
      text: "I had my Lexus ES350 interior detailed by Haris and couldn’t be more impressed. He treated my car with great care, and it looks and smells brand new. Highly recommend Precision for top-notch detailing!",
      stars: 5,
    },
    {
      name: "RVWL",
      time: "4 months ago",
      text: "Shayan detailed my car so well that I was ready to sell it, but now I don’t even want to let it go. It looks brand new—inside and out—and I’ve completely fallen back in love with it!",
      stars: 5,
    },
    {
      name: "Sam Paul",
      time: "2 years ago",
      text: "I’ve used Royal Touch Detailing a few times and never been disappointed. Shayan is very professional and takes great pride in his work. Excellent service at very reasonable prices.",
      stars: 5,
    },
    {
      name: "Sema Balaban",
      time: "6 months ago",
      text: "My car looks absolutely amazing! Looks brand new — I’ve never had it detailed this good before. Highly recommend. Will be referring all family and friends to Royal Touch.",
      stars: 5,
    },
    {
      name: "N Grattan",
      time: "5 months ago",
      text: "Very pleased with our car detailing. Convenient home service. He was punctual, polite, and professional. Looking forward to another family car done soon.",
      stars: 5,
    },
    {
      name: "Hasnain Buttar",
      time: "1 year ago",
      text: "Royal Touch exceeded all expectations — professionalism and attention to detail were exceptional from start to finish.",
      stars: 5,
    },
    {
      name: "Yasmin",
      time: "2 years ago",
      text: "SO happy with the service. Shayan was punctual, professional, and knowledgeable. Gold interior + exterior packages made my used car feel brand new!",
      stars: 5,
    },
    {
      name: "Musa Ali",
      time: "4 months ago",
      text: "They did my interior and exterior detailing and it was excellent, efficient and amazing pricing. Totally recommend!",
      stars: 5,
    },
    {
      name: "Victoria Young",
      time: "5 months ago",
      text: "As a fellow entrepreneur, I was impressed from the moment I contacted Royal Touch Detailing. The owner was accommodating to my situation as I needed a last minute detail.",
      stars: 5,
    },
    {
      name: "Yousef",
      time: "1 day ago",
      text: "Great work. Great prices. These guys were professional, on time and very polite. Big points for coming to my work to do my car.",
      stars: 5,
    },
    {
      name: "Christmas Lights",
      time: "12 hours ago",
      text: "Great work would recommend!",
      stars: 5,
    },
    {
      name: "Antoine Aurelis",
      time: "1 year ago",
      text: "Great job, very knowledgeable and helpful.",
      stars: 5,
    },
    {
      name: "Bala Subramanian",
      time: "1 year ago",
      text: "Shayan did an amazing job of cleaning the car inside out. It looks beautiful, just like I got it first time. The best part is it is done at home without me going out and struggling to work from customer service area. Definitely worth it! Best wishes for success in this business!",
      stars: 5,
    },
    {
      name: "Khizr Shamsi",
      time: "8 months ago",
      text: "Such a good company and made me happy.",
      stars: 5,
    },
    {
      name: "Ashar Sid",
      time: "1 year ago",
      text: "If his prices were $5000 I would still be willing to pay for it! Best in the business.",
      stars: 5,
    },
    {
      name: "Elliott Williams",
      time: "5 months ago",
      text: "Very professional service and the car looks amazing afterwards. Would highly recommend if you’re looking to get your car detailed.",
      stars: 5,
    },
    {
      name: "Ali Chaudhry",
      time: "5 months ago",
      text: "Very pleased with our car detailing. It was very convenient to have the work done at home. He was punctual, polite and very professional.",
      stars: 5,
    },
  ];

  const itemsPerPage = useItemsPerPage();
  const totalPages = useMemo(
    () => Math.ceil(reviews.length / itemsPerPage),
    [reviews.length, itemsPerPage]
  );
  const [page, setPage] = useState(0);

  // Keep page in range when breakpoint changes
  useEffect(() => setPage((p) => Math.min(p, totalPages - 1)), [totalPages]);

  const visible = useMemo(() => {
    const start = page * itemsPerPage;
    return reviews.slice(start, start + itemsPerPage);
  }, [page, itemsPerPage, reviews]);

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-14 md:py-16"
    >
      {/* Soft accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-red-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-red-100/60 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <motion.div
          variants={containerFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-8 text-center md:mb-10"
        >
          <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
            Real stories from real customers — see why drivers trust{" "}
            <span className="font-semibold text-red-600">
              Royal Touch Detailing
            </span>
            .
          </p>
        </motion.div>

        {/* Carousel viewport */}
        <div className="relative">
          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.ul
              key={`${page}-${itemsPerPage}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((r, i) => (
                <ReviewCard key={`${r.name}-${r.time}`} review={r} i={i} />
              ))}
            </motion.ul>
          </AnimatePresence>

          {/* Navigation (pagination dots removed as requested) */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous reviews"
              className="rounded-full bg-red-600 p-3 text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next reviews"
              className="rounded-full bg-red-600 p-3 text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
