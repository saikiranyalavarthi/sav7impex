"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0F] via-[#121218] to-black" />

      {/* FLOATING GOLD BLOBS */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-yellow-500/20 blur-[150px] rounded-full top-[-100px] left-[-100px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-yellow-400/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"
      />

      {/* PARTICLES */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "-100%", opacity: [0, 1, 0] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative max-w-6xl text-center">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent animate-pulse">
            Gold & Silver Import Export
          </span>

          <span className="block text-white mt-4">
            SAV7 IMPEX PRIVATE LIMITED
          </span>
        </motion.h1>

        {/* SUBTEXT (SEO BOOSTED) */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Leading gold import export company in India specializing in precious
          metals trading, silver exports, and global commodity supply. Based in
          Hyderabad with GST, IEC & BIS certified operations for international
          trade.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="https://wa.me/919290934388"
            target="_blank"
            className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-black font-semibold hover:scale-110 transition"
          >
            WhatsApp Now

            {/* GLOW */}
            <span className="absolute inset-0 bg-green-400 blur-xl opacity-20"></span>
          </a>

          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 hover:scale-105 transition"
          >
            Explore Services
          </a>
        </motion.div>

        {/* TRUST TAGS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          <span>✔ GST Certified</span>
          <span>✔ IEC Registered</span>
          <span>✔ BIS Hallmark Approved</span>
          <span>✔ Global Trade Authorized</span>
        </motion.div>
      </div>

      {/* SCROLL */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-sm"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}