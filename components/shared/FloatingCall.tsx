"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FloatingCall() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 z-50 no-print"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        >
          <motion.a
            href={`tel:${siteConfig.contact.phone}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Call Diamond Key Spa at ${siteConfig.contact.phoneDisplay}`}
            className="relative w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center shadow-gold group hover:bg-gold-600 transition-colors duration-300"
          >
            <span className="absolute inset-0 rounded-full bg-gold-500 animate-ping opacity-30" />
            <motion.div
              animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              <Phone className="w-6 h-6 text-white fill-white" />
            </motion.div>
            <span className="absolute left-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {siteConfig.contact.phoneDisplay}
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
