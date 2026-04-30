"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B0F] text-gray-400 border-t border-white/10 overflow-hidden">

      {/* ANIMATED GLOW */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* COMPANY */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              SAV7 IMPEX
            </span>
          </h2>

          <p className="text-sm leading-relaxed">
            SAV7 IMPEX PRIVATE LIMITED is a leading gold import export company
            in India, specializing in precious metals trading, silver exports,
            and global commodity supply with certified international standards.
          </p>

          {/* SOCIAL */}
       
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["About", "Services", "Products", "Trust", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative hover:text-yellow-400 transition group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Gold Trading</li>
            <li>Silver Export</li>
            <li>Import & Export Services</li>
            <li>Commodity Supply</li>
            <li>Wholesale Distribution</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Hyderabad, Telangana, India</li>
            <li>Email: sav7impex@gmail.com</li>
            <li>Phone: +91 92909 34388</li>
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/919290934388"
            target="_blank"
            className="relative inline-block mt-4 px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-black rounded-lg font-semibold hover:scale-110 transition"
          >
            WhatsApp Now
            <span className="absolute inset-0 bg-green-400 blur-xl opacity-20"></span>
          </a>
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>✔ GST Certified</span>
          <span>✔ IEC Registered</span>
          <span>✔ BIS Hallmark Approved</span>
          <span>✔ Government Authorized</span>
          <span>✔ Global Trade Compliance</span>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SAV7 IMPEX PRIVATE LIMITED. All rights reserved.
      </div>
    </footer>
  );
}