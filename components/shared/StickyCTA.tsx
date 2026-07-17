"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/utils";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden no-print bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-luxury"
        >
          <div className="flex items-center">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              aria-label="Call us"
              className="flex-1 flex flex-col items-center gap-1 py-3 text-gray-600 hover:text-gold-500 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-[10px] font-medium">Call</span>
            </a>

            <Link
              href="/book-appointment"
              className="flex-1 flex flex-col items-center gap-1 py-3 bg-gold-500 text-white"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-[10px] font-medium font-semibold">Book Now</span>
            </Link>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp us"
              className="flex-1 flex flex-col items-center gap-1 py-3 text-gray-600 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-[10px] font-medium">WhatsApp</span>
            </a>
          </div>
          <div className="h-safe-area-inset-bottom bg-inherit" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
