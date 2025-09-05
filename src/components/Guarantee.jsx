"use client";
import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Guarantee() {
  const qualifications = [
    "Full Name & Phone Number",
    "Project Details",
    "Project Starts In 90 Days Or Less",
    "Maximum Budget",
    "Date & Time Booked On Your Calender",
    "Lead In Your Service Area",
    "Booked Consultations With Decision Makers Only",
    "Our Team Reschedules If Needed",
    "Lead is 100% Exclusive",
  ];

  return (
    <section
      id="guarantee"
      className="bg-gradient-to-b from-gray-50 to-white py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="text-primary w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Get{" "}
            <span className="text-primary">
              10 Qualified Quotation Appointments
            </span>{" "}
            in 30 Days — or You Don’t Pay.
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            If we don’t deliver{" "}
            <strong>10 qualified, booked quotation appointments</strong> in 30
            days, you don’t pay a cent to us.{" "}
            <span className="text-primary font-medium">
              Zero risk. All reward.
            </span>
          </p>
        </motion.div>

        {/* Qualifications */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 border-b pb-4">
            What Exactly A Qualified Booked Appointment Includes
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualifications.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4 hover:bg-primary/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
