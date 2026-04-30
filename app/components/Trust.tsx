"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "GST Registered",
    desc: "Fully compliant under Goods and Services Tax ensuring transparent and legal trading operations.",
    icon: "📜",
  },
  {
    title: "IEC Certified",
    desc: "Authorized Import Export Code enabling global trade across international markets.",
    icon: "🌍",
  },
  {
    title: "BIS Hallmark Approved",
    desc: "Certified for gold and silver trading with official Bureau of Indian Standards assurance.",
    icon: "💎",
  },
  {
    title: "Government Authorized",
    desc: "Registered private limited company with verified operations under government authorities.",
    icon: "🏛️",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="relative py-24 px-6 bg-[#0B0B0F] overflow-hidden"
    >
      {/* ANIMATED GLOW */}
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full top-[-100px] right-[-100px]"
      />

      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            Trusted & Certified
          </span>
        </motion.h2>

        {/* SEO TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          As a leading gold import export company in India, we operate with full
          GST registration, IEC certification, BIS approval, and government
          authorization ensuring secure and compliant global trading.
        </motion.p>

        {/* CARDS */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {certifications.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.2)] transition relative"
            >
              {/* ICON */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                className="text-3xl mb-4"
              >
                {item.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* CARD GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/5 blur-xl rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* TRUST STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
        >
          <span>✔ Secure Transactions</span>
          <span>✔ Verified Business</span>
          <span>✔ Global Trade Compliance</span>
          <span>✔ 100% Transparency</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <a
            href="https://wa.me/919290934388"
            target="_blank"
            className="relative px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl font-semibold hover:scale-110 transition"
          >
            Verify & Connect Now

            {/* GLOW */}
            <span className="absolute inset-0 bg-yellow-400 blur-xl opacity-20"></span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}