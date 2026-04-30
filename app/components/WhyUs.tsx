"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Global Trade Network",
    desc: "Strong international connections enabling seamless gold import export and commodity trading across multiple countries.",
    icon: "🌍",
  },
  {
    title: "Certified & Compliant",
    desc: "GST registered, IEC certified, and BIS approved ensuring secure and legally compliant business operations.",
    icon: "📜",
  },
  {
    title: "Secure Transactions",
    desc: "End-to-end secure payment systems with verified partners ensuring safe and transparent global trading.",
    icon: "🔒",
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Efficient logistics and supply chain ensuring timely delivery across domestic and international markets.",
    icon: "🚚",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 px-6 bg-[#111116] overflow-hidden">

      {/* ANIMATED GLOW */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full top-0 left-0"
      />

      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            Why Choose SAV7 IMPEX
          </span>
        </motion.h2>

        {/* SEO TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          We are a trusted gold import export company in India offering certified
          trading services, secure transactions, and reliable global supply solutions.
        </motion.p>

        {/* GRID */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.2)] transition relative"
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
              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/5 blur-xl rounded-2xl"></div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}