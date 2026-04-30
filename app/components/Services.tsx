"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Gold & Silver Trading",
    desc: "Certified sourcing and supply of gold and silver with BIS hallmark standards, ensuring secure international trading.",
    icon: "💰",
  },
  {
    title: "Import & Export Solutions",
    desc: "Complete import export services including procurement, logistics, customs clearance, and global delivery.",
    icon: "🌍",
  },
  {
    title: "Commodity Supply",
    desc: "Global distribution of agricultural goods, food products, and essential commodities with reliable supply chains.",
    icon: "📦",
  },
  {
    title: "Wholesale Distribution",
    desc: "Bulk trading network providing competitive pricing and fast delivery across domestic and international markets.",
    icon: "🚚",
  },
  {
    title: "Trade Consulting",
    desc: "Expert advisory on international trade laws, export compliance, and global market expansion strategies.",
    icon: "📊",
  },
  {
    title: "Secure Transactions",
    desc: "Verified partners, transparent processes, and safe transactions ensuring risk-free global trading.",
    icon: "🔒",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 bg-[#111116] overflow-hidden"
    >
      {/* ANIMATED GLOW */}
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full bottom-0 left-0"
      />

      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            Our Premium Services
          </span>
        </motion.h2>

        {/* SEO TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          We provide gold import export services, silver trading, commodity supply,
          and global logistics solutions with certified compliance and secure transactions.
        </motion.p>

        {/* GRID */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.2)] transition relative text-left"
            >
              {/* ICON */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                className="text-4xl mb-4"
              >
                {service.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* CARD GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/5 blur-xl rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <a
            href="https://wa.me/919290934388"
            target="_blank"
            className="relative px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl font-semibold hover:scale-110 transition"
          >
            Start Trading Now

            {/* GLOW */}
            <span className="absolute inset-0 bg-yellow-400 blur-xl opacity-20"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}