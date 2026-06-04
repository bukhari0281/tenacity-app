"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.3 }}
          href="https://wa.me/6285117116753?text=Halo%20Tenacity,%20saya%20ingin%20konsultasi%20tugas"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-40 hidden md:flex items-center gap-3 group cursor-pointer"
        >
          {/* Hover text label */}
          <div className="bg-white border border-slate-100 text-slate-800 text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
            Konsultasi Gratis via WhatsApp
          </div>

          {/* Button circle */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300 relative">
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping opacity-75" />
            <MessageCircle className="w-7 h-7 relative z-10 fill-white/10" />
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
