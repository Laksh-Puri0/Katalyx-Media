"use client";
import React from "react";
import { motion } from "framer-motion";
import { Megaphone, CheckCircle, Calendar, Handshake } from "lucide-react";

const steps = [
  {
    icon: Megaphone,
    title: "We Advertise for You",
    description: "We run targeted ads to attract homeowners who are ready to start their renovation projects.",
  },
  {
    icon: CheckCircle,
    title: "We Qualify Every Lead",
    description: "We collect full project details and verify they’re in your service area before you ever speak to them.",
  },
  {
    icon: Calendar,
    title: "We Book the Appointment",
    description: "We confirm the date and time directly in your calendar, so your schedule is always full.",
  },
  {
    icon: Handshake,
    title: "You Close the Sale",
    description: "You focus on quoting, delivering, and winning the job — we handle the rest.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-gray-600">
          We run personalized SMS campaigns in your service area with an attractive offer to gauge interest.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white via-white to-primary/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition group relative"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition">
                  <Icon className="text-primary w-8 h-8" />
                </div>
                
                {/* Step Number */}
                <span className="absolute top-4 right-6 text-5xl font-bold text-primary/10 select-none">
                  {index + 1}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
