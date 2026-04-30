"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* WHATSAPP */}
      <motion.a
        href="https://wa.me/919290934388"
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg"
      >
        <MessageCircle size={26} />

        {/* PULSE */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></span>

        {/* TOOLTIP */}
        <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-3 py-1 rounded-md">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* CALL */}
      <motion.a
        href="tel:+919290934388"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.15 }}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-yellow-500 text-black shadow-lg"
      >
        <Phone size={24} />

        {/* PULSE */}
        <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-30 animate-ping"></span>

        {/* TOOLTIP */}
        <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-3 py-1 rounded-md">
          Call Now
        </span>
      </motion.a>

    </div>
  );
}