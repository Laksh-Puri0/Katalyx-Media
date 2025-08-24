"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-8 space-y-20">
        {/* Founder Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Image
              src="/Images/Laksh.webp"
              alt="Laksh Puri"
              width={128} // w-32 in Tailwind (32 × 4px = 128px)
              height={128} // h-32 in Tailwind
              className="mx-auto mb-4 rounded-full object-cover shadow-lg"
              priority
            />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Meet <span className="text-primary">Laksh Puri</span>
            </h2>
            <h3 className="text-lg text-gray-600 font-semibold mt-2">
              Founder & CEO of Katalyx Media
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-10 max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <p>
              I’m Laksh, the founder and CEO of{" "}
              <span className="font-semibold text-gray-900">Katalyx Media</span>{" "}
              — a marketing agency focused on helping remodelers and local
              businesses grow through targeted SMS marketing. Our mission is
              simple: deliver consistent, high-quality homeowner consultations
              by using personalized text campaigns that cut through the noise,
              build trust, and drive real conversations — without the stress and
              uncertainty of traditional lead generation.
            </p>
            <p>
              I started Katalyx Media with a passion for creating marketing
              systems that actually work and deliver measurable results. Outside
              of business, I’m a big fan of chess, tennis, and soccer, and I
              value time with friends and family above all else. That same focus
              on strategy and genuine connection shapes the way we partner with
              our clients — building strong relationships and crafting SMS
              campaigns that put them ahead of the competition.
            </p>
            <p>
              At Katalyx Media, we specialize in using targeted SMS marketing to
              deliver real results for our clients. By combining data-driven
              outreach with personalized messaging, we help businesses
              consistently secure the appointments they need to grow. Our goal
              is always the same: provide every client with a reliable system
              that generates opportunities, strengthens their market presence,
              and drives long-term success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
