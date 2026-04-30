"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-[#0B0B0F] overflow-hidden"
    >
      {/* ANIMATED GLOW */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full top-0 right-0"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              About SAV7 IMPEX
            </span>
          </h2>

          {/* SEO TEXT */}
          <p className="mt-6 text-gray-300 leading-relaxed">
            SAV7 IMPEX PRIVATE LIMITED is a leading gold import export company in
            India, established in 2021 and headquartered in Hyderabad. We
            specialize in precious metals trading including gold and silver,
            along with global commodity exports and international supply chain
            solutions.
          </p>

          <p className="mt-4 text-gray-400">
            As a GST registered, IEC certified, and BIS approved company, we
            ensure secure, transparent, and legally compliant global trade
            operations. Our focus is to deliver reliable international trading
            services across multiple countries.
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-8 grid grid-cols-2 gap-4">

            {[
              { title: "Founded", value: "2021" },
              { title: "Location", value: "Hyderabad, India" },
              { title: "Business", value: "Import & Export" },
              { title: "Industry", value: "Gold & Commodities" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition"
              >
                <h3 className="text-yellow-400 font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#contact"
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-lg font-semibold relative"
          >
            Contact Us
            <span className="absolute inset-0 bg-yellow-400 blur-xl opacity-20"></span>
          </motion.a>
        </motion.div>

        {/* RIGHT SIDE - STATS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { value: "500+", label: "Global Clients" },
            { value: "20+", label: "Countries Served" },
            { value: "1000+", label: "Transactions" },
            { value: "100%", label: "Compliance" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition"
            >
              <h3 className="text-3xl font-bold text-yellow-400">
                {item.value}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}