"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Calendar,
  MessageCircle,
  Star,
  MapPin,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { generateWhatsAppUrl, cn } from "@/lib/utils";

const LOGO_SVG = (
  <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
    <path d="M8 25 L18 10 L28 25 L18 40 Z" fill="#C89B3C" opacity="0.9" />
    <path d="M13 25 L18 16 L23 25 L18 34 Z" fill="#f9f0d5" />
    <text x="36" y="22" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" fill="#1A1A1A" letterSpacing="1">DIAMOND KEY</text>
    <text x="36" y="38" fontFamily="Georgia, serif" fontSize="9" fontWeight="400" fill="#C89B3C" letterSpacing="3">SPA · DUBAI</text>
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (name: string) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      <div className="hidden lg:block bg-luxury-dark text-white py-2">
        <div className="container-custom flex items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-gray-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-gold-400" />
              Al Qusais Industrial Area 5, Dubai, UAE
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-gold-400" />
              Open Daily · Closes 12:30 AM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gold-400">
              <Star className="w-3 h-3 fill-gold-400" />
              <span className="font-semibold">4.76</span>
              <span className="text-gray-500">Google Rating</span>
            </span>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1.5 text-gray-400 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3 h-3" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white py-3"
        )}
        role="banner"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between gap-4" ref={menuRef}>
            <Link
              href="/"
              aria-label="Diamond Key Spa — Home"
              className="flex-shrink-0"
            >
              {LOGO_SVG}
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-1"
            >
              {navigation.main.map((item) =>
                item.children ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={cn(
                        "nav-link flex items-center gap-1 px-3 py-2 rounded-lg",
                        activeMenu === item.name && "text-gold-500 bg-gold-50"
                      )}
                      aria-expanded={activeMenu === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeMenu === item.name && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {activeMenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-luxury border border-gray-100 py-3 min-w-[280px] z-50"
                          onMouseEnter={() => handleMouseEnter(item.name)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="grid gap-1 px-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setActiveMenu(null)}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gold-50 group transition-colors"
                              >
                                <div className="w-2 h-2 rounded-full bg-gold-300 mt-1.5 flex-shrink-0 group-hover:bg-gold-500 transition-colors" />
                                <div>
                                  <div className="text-sm font-semibold text-gray-800 group-hover:text-gold-600 transition-colors">
                                    {child.name}
                                  </div>
                                  {"description" in child && (
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="nav-link px-3 py-2 rounded-lg hover:bg-gold-50 hover:text-gold-500"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#25D366] hover:text-[#25D366] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>

              <Link
                href="/book-appointment"
                className="gold-btn !py-2.5 !px-5 text-sm hidden md:flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </Link>

              <button
                className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="container-custom py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                <div className="flex gap-3 pb-4 border-b border-gray-100 mb-2">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-xl text-sm font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <Link
                    href="/book-appointment"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 gold-btn !py-3 !px-4 !rounded-xl text-sm text-center flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </Link>
                </div>

                {navigation.main.map((item) => (
                  <MobileNavItem
                    key={item.name}
                    item={item}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}

                <div className="pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-500">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    Al Qusais Industrial Area 5, Dubai
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-400" />
                    Open Daily · Closes 12:30 AM
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function MobileNavItem({
  item,
  onClose,
}: {
  item: { name: string; href: string; children?: { name: string; href: string; description?: string }[] };
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gold-50 hover:text-gold-600 transition-colors"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
          isOpen ? "bg-gold-50 text-gold-600" : "text-gray-700 hover:bg-gray-50"
        )}
      >
        {item.name}
        <ChevronDown
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden ml-4 border-l-2 border-gold-100 pl-3 mt-1 space-y-1"
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className="block py-2 px-3 text-sm text-gray-600 hover:text-gold-500 rounded-lg hover:bg-gold-50 transition-colors"
              >
                {child.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
