'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do you qualify leads?",
    a: "We take the time to understand your specific criteria for what counts as a qualified lead. From there, we only book leads that meet those exact requirements."
  },
  {
    q: "What happens if a lead cancels or reschedules?",
    a: "If a lead cancels, we immediately follow up consistently for up to 7 days to rebook them — taking full responsibility for the process."
  },
  {
    q: "How fast can I expect to start getting my first leads?",
    a: "Most clients start seeing their first couple of booked phone consultations within 5 days of the campaign launch."
  },
  {
    q: "What companies do you work with?",
    a: "We work with any business that sells local services. Each SMS campaign is customized to your industry and needs so we can deliver the best results possible."
  },
  {
    q: "How much does it cost?",
    a: "Pricing is discussed during our 15-minute consultation call, but we require business owners to have at least $500 CAD to invest in marketing."
  },
  {
    q: "How can I start working with you?",
    a: "Simply book a consultation call above and we’ll be happy to see if we’re a good fit to work together."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">FAQ – SMS Marketing & Lead Booking</h2>
        <p className="text-gray-600 mt-3">
          Everything you need to know about how we qualify, book, and deliver leads.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="font-semibold text-gray-800">{faq.q}</span>
              <ChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600 whitespace-pre-line">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
