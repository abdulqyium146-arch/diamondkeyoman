"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import { generateFAQSchema } from "@/lib/schema";

const faqs = [
  {
    question: "What types of massages does Diamond Key Spa offer in Dubai?",
    answer:
      "Diamond Key Spa offers a comprehensive range of therapeutic and luxury massage treatments including Swedish body massage, deep tissue massage, hot stone massage, aromatherapy massage, and our signature full-body spa massage experience. Each treatment is customized to your specific needs and preferences.",
  },
  {
    question: "Where is Diamond Key Spa located in Dubai?",
    answer:
      "We are located in Al Qusais Industrial Area 5, Dubai, UAE. We are conveniently accessible from Al Qusais Metro Station (Green Line, just 5 minutes walk), Dubai International Airport (15 minutes), and Deira City Centre (10 minutes). Free parking is available on-site.",
  },
  {
    question: "What is the price range for spa treatments at Diamond Key Spa?",
    answer:
      "Our treatments start from AED 130 for Foot Reflexology and range up to AED 1,200 for our VIP Gold Experience package. Body massages start from AED 150, Moroccan Bath from AED 200, and facial treatments from AED 180. We offer packages that combine multiple treatments for excellent value.",
  },
  {
    question: "What is a Moroccan Bath (Hammam) and how long does it take?",
    answer:
      "The Moroccan Bath, also known as Hammam, is an ancient North African cleansing ritual. It begins with steam to open pores, followed by a traditional black soap (beldi) application and vigorous kessa glove exfoliation to remove dead skin cells. A rich ghassoul clay mask is then applied. The treatment takes 60–90 minutes and leaves your skin silky smooth and deeply cleansed.",
  },
  {
    question: "Do I need to make an appointment in advance?",
    answer:
      "While we do welcome walk-in clients based on availability, we strongly recommend booking in advance to secure your preferred time and therapist. You can book by calling +971 54 490 7283, via WhatsApp, or through our online booking form. Last-minute bookings are often possible, especially on weekdays.",
  },
  {
    question: "What should I do to prepare for my spa treatment?",
    answer:
      "Arrive 10–15 minutes early to complete your consultation form and relax before your treatment. Avoid heavy meals 1–2 hours before your appointment. Remove jewellery before treatments. Communicate any health conditions, injuries, allergies, or areas of focus to your therapist. For the Moroccan Bath, it's recommended to avoid shaving 24 hours prior.",
  },
  {
    question: "Are Diamond Key Spa's therapists certified and qualified?",
    answer:
      "Yes, all our therapists hold internationally recognized certifications and undergo rigorous training before joining our team. We have therapists specialized in various modalities including traditional Moroccan hammam, therapeutic massage, reflexology, and advanced skincare treatments.",
  },
  {
    question: "What are Diamond Key Spa's opening hours?",
    answer:
      "Diamond Key Spa is open every day of the week. Our hours are 9:00 AM to 12:30 AM (midnight), giving you the flexibility to visit after work or on weekends. We are closed only on very few public holidays — please call ahead during Eid or national holidays.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const schema = generateFAQSchema(faqs);

  return (
    <section
      className="section-padding bg-white"
      aria-label="Frequently asked questions about Diamond Key Spa"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="right" className="lg:sticky lg:top-32">
            <SectionLabel centered={false}>FAQ</SectionLabel>
            <h2 className="section-heading text-left">
              Frequently Asked
              <span className="block text-gold-500">Questions</span>
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Everything you need to know about Diamond Key Spa — our treatments,
              location, pricing, and what to expect from your visit.
            </p>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Can&apos;t find your answer? Our team is available daily from 9 AM to midnight.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+971544907283"
                className="gold-btn !py-3 !px-6 text-sm flex items-center justify-center gap-2"
              >
                Call & Ask Us
              </a>
              <Link
                href="/faq"
                className="ghost-btn !py-3 !px-6 text-sm flex items-center justify-center gap-2"
              >
                All FAQs
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gold-200 transition-colors"
                >
                  <button
                    onClick={() => setOpen(open === idx ? null : idx)}
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                    aria-expanded={open === idx}
                  >
                    <span className="font-semibold text-gray-900 text-sm leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        open === idx ? "bg-gold-500 text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {open === idx ? (
                        <Minus className="w-3 h-3" />
                      ) : (
                        <Plus className="w-3 h-3" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {open === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
