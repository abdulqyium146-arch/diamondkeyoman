"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    const tooltipTimer = setTimeout(() => {
      if (!tooltipDismissed) setShowTooltip(true);
    }, 5000);
    const hideTooltip = setTimeout(() => setShowTooltip(false), 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltip);
    };
  }, [tooltipDismissed]);

  const whatsappUrl = generateWhatsAppUrl(
    "Hello Diamond Key Spa! I'd like to inquire about your spa services and book an appointment."
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 no-print">
          <AnimatePresence>
            {showTooltip && !tooltipDismissed && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                className="relative bg-white rounded-2xl shadow-luxury border border-gray-100 p-4 max-w-xs"
              >
                <button
                  onClick={() => {
                    setShowTooltip(false);
                    setTooltipDismissed(true);
                  }}
                  className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition-colors"
                  aria-label="Close tooltip"
                >
                  <X size={12} />
                </button>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  💬 Chat with us on WhatsApp!
                </p>
                <p className="text-xs text-gray-500">
                  Book your appointment or ask about our services. We reply instantly!
                </p>
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat with Diamond Key Spa on WhatsApp"
            className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">1</span>
            </span>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            <MessageCircle className="w-7 h-7 text-white fill-white" />
            <span className="absolute right-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Chat on WhatsApp
            </span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
