"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-[#0B0B0F] to-black" />

      {/* ANIMATED GLOW */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-yellow-400/20 blur-[150px] rounded-full top-[-100px] left-[-100px]"
      />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* GLASS CARD */}
        <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(255,215,0,0.08)]">

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Start Gold & Silver Trading Today
            </span>
            <span className="block text-white mt-2">
              With SAV7 IMPEX
            </span>
          </motion.h2>

          {/* SUBTEXT (SEO BOOSTED) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-300 max-w-2xl mx-auto"
          >
            Partner with a trusted gold import export company in India. We provide
            secure international trading services, silver exports, and commodity
            supply with GST, IEC, and BIS certified compliance.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/919133633327"
              target="_blank"
              className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-black font-semibold hover:scale-110 transition"
            >
              Chat on WhatsApp

              {/* GLOW */}
              <span className="absolute inset-0 bg-green-400 blur-xl opacity-20"></span>
            </a>

            {/* QUOTE BUTTON */}
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 hover:scale-105 transition"
            >
              Request a Quote
            </a>
          </motion.div>

          {/* TRUST LINE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 text-sm text-gray-400 flex flex-wrap justify-center gap-6"
          >
            <span>✔ GST Registered</span>
            <span>✔ IEC Certified</span>
            <span>✔ BIS Hallmark Approved</span>
            <span>✔ Secure Global Transactions</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}