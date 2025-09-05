'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does your 30-day guarantee work?",
    a: "If we don’t deliver 10 qualified, booked quotation appointments within 30 days from your campaign start date, you don’t pay for that month. It’s that simple."
  },
  {
    q: "What exactly counts as a “qualified” lead?",
    a: `A lead is considered qualified if they meet all of these:
    • Full name & phone number provided
    • Project details (type, timeline, and budget) given
    • Date & time confirmed for a free consultation
    • Homeowner or decision-maker status confirmed
    • Address in your service area
    • Our team has spoken to them by phone
    • Lead is exclusive to your company (not shared with others)`
  },
  {
    q: "What happens if the lead cancels?",
    a: "If they cancel more than 24 hours before the appointment, it doesn’t count toward your 10. If they reschedule within 7 days, it still counts."
  },
  {
    q: "Do I need to provide anything for the campaign to start?",
    a: "Yes — we’ll need access to your ad accounts, a clear service area, your available appointment times, and quick approvals on ads and creatives."
  },
  {
    q: "How fast will I start getting leads?",
    a: "Most clients start seeing appointments booked within the first 7–10 days after launch, with the full 10 delivered within 30 days."
  },
  {
    q: "Are the leads exclusive to me?",
    a: "Yes — every lead is generated and booked specifically for your company only."
  },
  {
    q: "What if I can’t take all 10 appointments in a month?",
    a: "You’ll need to ensure your calendar has enough availability for us to book them. If you can’t take all 10, we can roll some into the next month."
  },
  {
    q: "Do you work with remodelers anywhere?",
    a: "We can run campaigns in most areas, but your business must operate in a defined local service area for the guarantee to apply."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">FAQ – Remodeling Leads Guarantee</h2>
        <p className="text-gray-600 mt-3">
          Everything you need to know about our 30-day, 10-appointment guarantee.
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
