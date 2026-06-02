"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you have a location or do you come to us?",
    answer: "We are fully mobile only and we come to you at no extra charge.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We are fully mobile and can work anywhere within our service area.",
  },
  {
    question: "Do you do exterior only?",
    answer:
      "No. We offer Interior-Only packages and Interior + Exterior packages.",
  },
  {
    question: "Can you come right now?",
    answer:
      "Yes. We offer same-day appointments when scheduled at least 2 hours in advance.",
  },
  {
    question: "Do you need water or electricity?",
    answer:
      "No. We arrive fully equipped with our own water tank and generator.",
  },
  {
    question: "What is required for the mobile service?",
    answer:
      "Simply provide a place to park our van and ensure the vehicle is unlocked.",
  },
  {
    question: "How long does a detail take?",
    answer:
      "Most details take approximately 2 hours depending on the vehicle's condition.",
  },
  {
    question: "Can we get the job done in a shop?",
    answer: "No. We are a fully mobile detailing company.",
  },
  {
    question: "I live in an apartment. Can you still service me?",
    answer:
      "Absolutely. We can detail your vehicle in parking garages, parking lots, or street parking locations.",
  },
  {
    question:
      "Do you clean engines, apply ceramic coatings, remove scratches, restore headlights, or install window tint?",
    answer:
      "No. Our team specializes exclusively in premium detailing services.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept E-Transfer and Cash.",
  },
  {
    question: "Can I cancel or reschedule?",
    answer:
      "Yes. Simply use the cancellation or rescheduling link in the confirmation email sent after booking.",
  },
  {
    question: "Do I need to empty my car?",
    answer:
      "Not necessarily. We carefully remove your belongings before detailing and place them back afterward.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      {/* Background Accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-100/60 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-100/60 blur-3xl"
      />

      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
    

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know before booking your Royal Detail.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-red-100 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-5 py-5 text-left"
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 text-red-600 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-red-50 px-5 py-4 text-slate-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
       
      </div>
    </section>
  );
}
