"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Global Clients" },
  { value: 20, suffix: "+", label: "Countries Served" },
  { value: 1000, suffix: "+", label: "Successful Transactions" },
  { value: 100, suffix: "%", label: "Compliance & Trust" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 px-6 bg-[#0B0B0F] overflow-hidden">

      {/* ANIMATED GLOW */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full top-0 left-0"
      />

      <div className="max-w-6xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.2)] transition relative"
            >
              {/* VALUE */}
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                <Counter value={item.value} suffix={item.suffix} />
              </h3>

              {/* LABEL */}
              <p className="mt-2 text-gray-400 text-sm">
                {item.label}
              </p>

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/5 blur-xl rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}