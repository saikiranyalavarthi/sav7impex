"use client";

import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* WHATSAPP BUTTON */}
      <motion.a
        href="https://wa.me/919290934388"
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg"
      >
        {/* ICON */}
        <span className="text-2xl">💬</span>

        {/* GLOW */}
        <span className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-30"></span>
      </motion.a>

      {/* CALL BUTTON */}
      <motion.a
        href="tel:+919290934388"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg"
      >
        {/* ICON */}
        <span className="text-2xl">📞</span>

        {/* GLOW */}
        <span className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-30"></span>
      </motion.a>

    </div>
  );
}