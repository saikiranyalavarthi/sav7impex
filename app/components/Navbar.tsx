"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Trust", href: "#trust" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl shadow-[0_0_30px_rgba(255,215,0,0.1)]"
          : "bg-transparent"
      } border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold tracking-wide relative">
          <span className="text-white">SAV7</span>
          <span className="text-yellow-400"> IMPEX PRIVATE LIMITED</span>

          {/* GLOW */}
          <span className="absolute inset-0 blur-xl bg-yellow-400/20 opacity-0 hover:opacity-100 transition"></span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative group hover:text-yellow-400 transition"
            >
              {link.name}

              {/* UNDERLINE ANIMATION */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/919290934388"
            target="_blank"
            className="relative px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:scale-105 transition"
          >
            WhatsApp

            {/* GLOW */}
            <span className="absolute inset-0 bg-yellow-400 blur-xl opacity-20"></span>
          </a>
        </div>

        {/* MOBILE BTN */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
        >
          <div className="flex flex-col items-center gap-6 py-6 text-gray-300">
            {links.map((link, i) => (
              <a key={i} href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/919290934388"
              target="_blank"
              className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold"
            >
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}