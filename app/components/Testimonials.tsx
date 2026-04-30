"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Gold Trader, Mumbai",
    feedback:
      "SAV7 IMPEX provided consistent gold supply with transparent pricing. Highly professional and reliable for trading.",
  },
  {
    name: "Ahmed Khan",
    role: "Import Partner, UAE",
    feedback:
      "Smooth export process and excellent logistics. One of the most reliable global trading partners we’ve worked with.",
  },
  {
    name: "Priya Sharma",
    role: "Wholesale Buyer, Hyderabad",
    feedback:
      "Secure transactions and great communication. A trustworthy company for long-term business partnerships.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 bg-[#0B0B0F] overflow-hidden">

      {/* ANIMATED GLOW */}
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full bottom-0 right-0"
      />

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            What Our Clients Say
          </span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          Trusted globally for gold import export, silver trading, and secure
          commodity supply services.
        </motion.p>

        {/* CARDS */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.2)] transition text-left relative"
            >
              {/* STARS */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>

              {/* FEEDBACK */}
              <p className="text-gray-300 text-sm leading-relaxed">
                “{item.feedback}”
              </p>

              {/* USER */}
              <div className="mt-6">
                <h3 className="text-white font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-xs">{item.role}</p>
              </div>

              {/* CARD GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/5 blur-xl rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* TRUST LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-sm text-gray-500 flex flex-wrap justify-center gap-6"
        >
          <span>✔ Trusted by Global Clients</span>
          <span>✔ Verified Transactions</span>
          <span>✔ Long-Term Partnerships</span>
        </motion.div>

      </div>
    </section>
  );
}