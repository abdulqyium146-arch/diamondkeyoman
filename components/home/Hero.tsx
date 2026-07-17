"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Phone, Star, MapPin, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

const slides = [
  {
    headline: "Discover True Luxury",
    subheadline: "at Diamond Key Spa",
    tagline: "Dubai's Premier Day Spa Experience",
    cta: "Book Your Escape",
    bg: "from-[#0a0a0a] via-[#1a1208] to-[#0a0a0a]",
  },
  {
    headline: "Authentic Moroccan",
    subheadline: "Hammam Ritual",
    tagline: "Ancient Traditions · Modern Luxury · Al Qusais, Dubai",
    cta: "Explore Hammam",
    bg: "from-[#0d0a06] via-[#1a1108] to-[#0d0a06]",
  },
  {
    headline: "Therapeutic Massage",
    subheadline: "by Expert Therapists",
    tagline: "Body · Mind · Soul · Renewal",
    cta: "View Services",
    bg: "from-[#06090d] via-[#0a1018] to-[#06090d]",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Diamond Key Spa — Luxury Day Spa in Dubai"
    >
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-blob w-96 h-96 bg-gold-500 -top-20 -right-20 opacity-[0.06]" />
        <div className="floating-blob w-80 h-80 bg-gold-300 bottom-20 -left-20 opacity-[0.08]" />
        <div className="floating-blob w-64 h-64 bg-gold-600 top-1/2 left-1/2 opacity-[0.05]" />

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(200,155,60,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container-custom text-center text-white pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
            ))}
          </div>
          <span className="text-gold-300 font-semibold text-sm">
            {siteConfig.rating.value} Google Rating
          </span>
          <span className="text-white/40">·</span>
          <span className="text-white/60 text-sm flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            Al Qusais, Dubai
          </span>
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.span
            key={`label-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-gold-400 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-2"
          >
            {slide.tagline}
          </motion.span>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            key={`h1-${currentSlide}`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-none mb-2"
          >
            <span className="block">{slide.headline}</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 mt-2">
              {slide.subheadline}
            </span>
          </motion.h1>
        </div>

        <motion.p
          key={`desc-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Surrender to the art of luxury wellness. Expert therapists, premium organic products,
          and an atmosphere of pure tranquility await you in the heart of Dubai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book-appointment"
            className="gold-btn flex items-center gap-2 text-base"
          >
            <Calendar className="w-5 h-5" />
            {slide.cta}
          </Link>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="ghost-btn flex items-center gap-2 text-base border-white/30 text-white hover:bg-white/10 hover:border-white/50"
          >
            <Phone className="w-5 h-5" />
            Call: {siteConfig.contact.phoneDisplay}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "5000+", label: "Happy Clients" },
            { value: "9+", label: "Expert Services" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-300">
                {stat.value}
              </div>
              <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentSlide ? "w-8 bg-gold-400" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
