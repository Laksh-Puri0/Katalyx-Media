"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  const scrollToHero = () => {
    const heroSection = document.getElementById("/");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#0f172a] via-[#16203a] to-[#1e293b] text-white text-center relative overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-cyan-500 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-blue-500 blur-3xl"
      />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Ready to get your{" "}
          <span className="text-cyan-400">10 qualified phone consultations?</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Take advantage of our affordable,{" "}
          <span className="font-semibold">personalized & lead exclusive SMS strategy</span> to start getting meetings within 3 days.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            onClick={scrollToHero}
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/30 transition-all transform hover:scale-105 hover:shadow-cyan-400/50"
          >
            Book My 30-Day Guarantee
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
