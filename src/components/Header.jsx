"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

export default function HeaderHero() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "How it Works", id: "how-it-works" },
    { label: "Guarantee", id: "guarantee" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header className="bg-white w-[95%] md:w-[90%] mx-auto text-black shadow-lg py-4 px-6 md:px-10 rounded-full fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && scrollToSection("/")}
          className="cursor-pointer flex-shrink-0"
          aria-label="Go to top"
        >
          <Image
            src="/Images/Logo.webp"
            alt="Katalyx Media Logo"
            width={36}
            height={36}
            className="h-auto"
            priority
          />
        </div>

        {/* Centered Nav + Social Icons */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 font-medium cursor-pointer">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Book Now Button */}
        <div className="hidden md:flex items-center space-x-8">
          {/* <button
            onClick={() => scrollToSection("book-now")}
            className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-all shadow-md"
          >
            Book Now
          </button> */}
          <div className="flex space-x-4 text-lg text-gray-600">
            <a
              href="https://www.instagram.com/katalyx.media/"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-primary"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61563899468930"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-primary"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@smma_lakshpuri"
              target="_blank"
              aria-label="TikTok"
              className="hover:text-primary"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.linkedin.com/in/laksh-puri-655a53287/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-primary"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="md:hidden text-black hover:text-primary transition-colors"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full px-4 mt-2"
          >
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              <ul className="flex flex-col py-4 space-y-3 font-medium text-center">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-primary transition-colors duration-300 py-2"
                  >
                    {link.label}
                  </li>
                ))}
                <li className="flex justify-center space-x-6 text-lg py-2 text-gray-600">
                  <a
                    href="https://www.instagram.com/katalyx.media/"
                    target="_blank"
                    aria-label="Instagram"
                    className="hover:text-primary"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61563899468930"
                    target="_blank"
                    aria-label="Facebook"
                    className="hover:text-primary"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.tiktok.com/@smma_lakshpuri"
                    target="_blank"
                    aria-label="TikTok"
                    className="hover:text-primary"
                  >
                    <FaTiktok />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/laksh-puri-655a53287/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="hover:text-primary"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                {/* <li>
                  <button
                    onClick={() => scrollToSection("book-now")}
                    className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-all shadow-md"
                  >
                    Book Now
                  </button>
                </li> */}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
