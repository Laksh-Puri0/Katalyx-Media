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
              — a marketing agency dedicated to helping remodelers consistently
              book more high-quality projects. Our mission is simple: connect
              construction and renovation businesses with real homeowners ready
              to move forward, while removing the stress and guesswork from lead
              generation.
            </p>
            <p>
              I started Katalyx Media with a passion for building systems that
              actually work and produce results. Outside of business, I’m a big
              fan of chess, tennis, and soccer, and I value time with friends
              and family above all else. That same focus on connection and
              strategy carries into the way we work with our clients — building
              strong relationships and crafting marketing campaigns that put
              them ahead of the competition.
            </p>
            <p>
              At Katalyx Media, we use proven strategies and modern tools to
              bring our clients the appointments they need to grow. The goal is
              always the same: give every business the opportunities and systems
              they need to thrive, establish a strong market presence, and make
              a lasting impact.
            </p>
          </motion.div>
        </div>

        {/* Head Director Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <img
              src="/Images/Don.webp" // <-- Replace with actual image path
              alt="Don Agrahari"
              className="w-32 h-32 mx-auto mb-4 rounded-full object-cover shadow-lg"
            />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Meet <span className="text-primary">Don Agrahari</span>
            </h2>
            <h3 className="text-lg text-gray-600 font-semibold mt-2">
              Head Director at Katalyx Media
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
              I’m Don Agrahari, Head Director here at Katalyx Media. My job?
              Making sure every project we take on delivers real results for our
              clients — high-quality jobs at prices that make sense. I handle
              complete service delivery, which means I’m involved in everything
              from strategy to making sure the final results actually hit the
              mark.
            </p>
            <p>
              I’ve worked with a ton of remodelers and construction companies,
              which has given me a clear picture of what works, what doesn’t,
              and how to avoid the headaches that slow growth. I like to keep
              things fast-moving, focused on strategy, and always
              relationship-driven — because I believe success is built on trust
              just as much as it is on smart marketing.
            </p>
            <p>
              Outside of work, you’ll probably find me playing basketball,
              following sports, geeking out over the latest tech, or getting
              competitive in a game. That drive to win? I bring it into every
              campaign we run.
            </p>
            <p>
              At Katalyx Media, my goal is simple: help our clients stand out,
              land more of the right jobs, and keep growing — one success story
              at a time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
