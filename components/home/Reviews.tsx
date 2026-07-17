"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import { siteConfig } from "@/config/site";

const reviews = [
  {
    id: "1",
    author: "Ahmed Al Balushi",
    rating: 5,
    text: "Very fast service! I needed a spare car key for my Toyota Corolla and they had it cut and ready in 10 minutes. Price was fair and the key works perfectly. Highly recommend Diamond Key in Seeb.",
    date: "2024-12-01",
    service: "Car Key Copying",
    avatar: "A",
  },
  {
    id: "2",
    author: "Khalid Al Rawahi",
    rating: 5,
    text: "I lost the only key to my Nissan Patrol. Diamond Key programmed a brand-new key including the remote — saved me a huge amount compared to the dealership. Professional and knowledgeable team.",
    date: "2024-11-20",
    service: "Car Key Programming",
    avatar: "K",
  },
  {
    id: "3",
    author: "Fatima Al Maamari",
    rating: 4,
    text: "Good service and reasonable prices. I had the lock on my apartment door rekeyed after moving in. Quick turnaround and the technician was friendly and professional. Will come back.",
    date: "2024-11-10",
    service: "Lock Rekeying",
    avatar: "F",
  },
  {
    id: "4",
    author: "Rashid Al Siyabi",
    rating: 5,
    text: "Excellent! Locked myself out of my car in Seeb and called Diamond Key. They opened it without any damage in under 20 minutes. Really relieved. Trustworthy and professional.",
    date: "2024-10-28",
    service: "Car Lockout",
    avatar: "R",
  },
  {
    id: "5",
    author: "Mohammed Al Wahaibi",
    rating: 4,
    text: "Got duplicate keys cut for my home and office — both work perfectly. The shop is easy to find on Al Khair Street in Seeb. Prices are very reasonable. Solid, reliable service.",
    date: "2024-10-15",
    service: "Building Key Copying",
    avatar: "M",
  },
  {
    id: "6",
    author: "Saif Al Kindi",
    rating: 5,
    text: "They programmed a new key fob for my Honda and it works like the original. Way cheaper than going to the dealer. The team clearly knows their stuff with car key systems. 5 stars.",
    date: "2024-09-30",
    service: "Key Fob Creation",
    avatar: "S",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;

  const next = () => setCurrent((p) => (p + 1) % (reviews.length - visibleCount + 1));
  const prev = () => setCurrent((p) => Math.max(0, p - 1));
  const visible = reviews.slice(current, current + visibleCount);

  return (
    <section
      className="section-padding bg-white"
      aria-label="Customer reviews for Diamond Key locksmith Seeb Oman"
    >
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Customer Reviews</SectionLabel>
          <h2 className="section-heading">
            What Our Customers
            <span className="block text-gold-500">Say About Us</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-2xl font-serif font-bold text-gray-900">
              {siteConfig.rating.value}
            </span>
            <span className="text-gray-500">
              ({siteConfig.rating.count} Google Reviews)
            </span>
          </div>
        </AnimatedSection>

        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="wait">
            {visible.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: idx * 0.08 }}
                className="review-card flex flex-col"
              >
                <Quote className="w-8 h-8 text-gold-200 mb-4 flex-shrink-0" />
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center font-bold text-gold-600 text-sm flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {review.author}
                    </p>
                    <p className="text-xs text-gray-400">{review.service}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5 flex-shrink-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="md:hidden space-y-4 mb-8">
          <motion.div
            key={reviews[current].id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="review-card"
          >
            <Quote className="w-8 h-8 text-gold-200 mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed">
              &ldquo;{reviews[current].text}&rdquo;
            </p>
            <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center font-bold text-gold-600 text-sm">
                {reviews[current].avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{reviews[current].author}</p>
                <p className="text-xs text-gray-400">{reviews[current].service}</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-gold-400 hover:text-gold-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-1.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(Math.min(i, reviews.length - visibleCount))}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i >= current && i < current + visibleCount
                    ? "w-6 bg-gold-500"
                    : "w-1.5 bg-gray-200"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current >= reviews.length - visibleCount}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-gold-400 hover:text-gold-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <AnimatedSection className="text-center mt-10">
          <a
            href={siteConfig.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold-500 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Read all reviews on Google Maps
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
