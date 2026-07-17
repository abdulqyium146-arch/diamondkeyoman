"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import { generateFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site";

const faqs = [
  {
    question: "What types of keys can Diamond Key duplicate in Seeb?",
    answer:
      "We duplicate virtually all key types: standard door and padlock keys, high-security keys (Mul-T-Lock, Abloy), car keys for all major brands (Toyota, Nissan, Honda, Hyundai, Kia, BMW, Land Rover, and more), mailbox keys, cabinet keys, and more. Bring your original key and we&apos;ll have a duplicate ready in minutes.",
  },
  {
    question: "Where is Diamond Key located in Muscat?",
    answer:
      "We are located on Al Khair Street, Seeb 522, Muscat, Oman. Seeb is conveniently close to Muscat International Airport (just 10 minutes away) and serves customers from Bausher, Mawaleh, Al Khuwair, Ghala, and across Muscat Governorate.",
  },
  {
    question: "How much does car key duplication or programming cost?",
    answer:
      "Standard car key cutting starts from OMR 2–5. Car key programming (transponder/chip keys) ranges from OMR 15–50 depending on the vehicle make and model. New key fob creation ranges from OMR 20–60. All prices are quoted upfront before any work begins — no hidden fees.",
  },
  {
    question: "Can you programme a key for my car without going to the dealership?",
    answer:
      "Yes. We use OEM-grade diagnostic equipment to programme transponder keys and remote key fobs for most modern vehicles. This covers chip programming, central locking, and immobiliser pairing. Our prices are typically 60–80% lower than dealership rates for the same quality of work.",
  },
  {
    question: "I lost all my car keys. Can you still help?",
    answer:
      "Yes, in most cases we can create a new key even if you have no original. We may need to access the vehicle&apos;s OBD port or lock cylinders to read the key code. Bring your car registration and valid ID. Call us on +968 9097 4040 to discuss your specific vehicle model first.",
  },
  {
    question: "What is lock rekeying and when should I do it?",
    answer:
      "Lock rekeying involves reconfiguring the internal pins of your existing lock so that old keys no longer work, while a new key is cut. This is ideal after moving into a new home, after losing a key, or after an employee leaves. It&apos;s more cost-effective than replacing the entire lock mechanism.",
  },
  {
    question: "Do you offer emergency lockout service in Seeb?",
    answer:
      "Yes. If you are locked out of your home, office, or car, call us on +968 9097 4040. Our technicians use professional non-destructive entry techniques — no damage to your door or vehicle. Visit us at our Seeb shop or contact us for on-site assistance.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "Diamond Key opens daily at 4:30 PM. We operate 7 days a week. For urgent enquiries outside opening hours, send us a WhatsApp message and we will respond as soon as we are available.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const schema = generateFAQSchema(faqs);

  return (
    <section
      className="section-padding bg-white"
      aria-label="Frequently asked questions about Diamond Key locksmith Seeb Oman"
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
              Everything you need to know about our key duplication and locksmith
              services in Seeb, Muscat — pricing, turnaround time, and what to bring.
            </p>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Can&apos;t find your answer? Call us directly — we&apos;re open daily from 4:30 PM.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
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
