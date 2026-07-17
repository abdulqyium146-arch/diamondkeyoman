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
    author: "Sarah Al Mansouri",
    rating: 5,
    text: "Absolutely the best spa experience I've had in Dubai. The Moroccan Bath was extraordinary — my skin felt like velvet afterwards. The therapists were incredibly professional and made me feel completely at ease. I'll be coming back every month!",
    date: "2024-11-15",
    service: "Moroccan Bath",
    avatar: "S",
  },
  {
    id: "2",
    author: "Mohammed Al Rashid",
    rating: 5,
    text: "I came in with severe back pain and left feeling 10 years younger. The deep tissue massage therapist was exceptional — she knew exactly where to work and the pressure was perfect. Diamond Key Spa is genuinely one of the best therapeutic massage centers in the UAE.",
    date: "2024-11-08",
    service: "Deep Tissue Massage",
    avatar: "M",
  },
  {
    id: "3",
    author: "Priya Sharma",
    rating: 5,
    text: "A hidden gem in Al Qusais! The Royal Retreat Package was worth every dirham. Four hours of pure bliss — hammam, massage, facial — all absolutely top-tier. The facility is immaculate, the atmosphere is so peaceful. I've recommended Diamond Key to all my friends.",
    date: "2024-10-28",
    service: "Royal Retreat Package",
    avatar: "P",
  },
  {
    id: "4",
    author: "Elena Petrov",
    rating: 5,
    text: "My husband and I did the Couples Bliss Package for our anniversary and it was magical. The private suite was beautifully set up, the synchronized massage was deeply relaxing. Staff were attentive without being intrusive. Perfect luxury experience.",
    date: "2024-10-20",
    service: "Couples Spa Package",
    avatar: "E",
  },
  {
    id: "5",
    author: "Tariq Al Zaabi",
    rating: 5,
    text: "Professional service at its finest. I've tried many spas across Dubai and Abu Dhabi, and Diamond Key consistently delivers the best aromatherapy experience. The essential oil blends they use are truly therapeutic. Great location, great team.",
    date: "2024-10-12",
    service: "Aromatherapy Massage",
    avatar: "T",
  },
  {
    id: "6",
    author: "Fatima Al Nuaimi",
    rating: 5,
    text: "The facial treatment I received completely transformed my skin. The therapist analyzed my skin type and customized the entire treatment. Two weeks later, people keep asking what I'm doing differently! Exceptional knowledge and skill.",
    date: "2024-09-30",
    service: "Facial Treatment",
    avatar: "F",
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
      aria-label="Customer reviews for Diamond Key Spa"
    >
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Client Reviews</SectionLabel>
          <h2 className="section-heading">
            What Our Clients
            <span className="block text-gold-500">Say About Us</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-2xl font-serif font-bold text-gray-900">
              {siteConfig.rating.value}
            </span>
            <span className="text-gray-500">
              ({siteConfig.rating.count}+ Google Reviews)
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
