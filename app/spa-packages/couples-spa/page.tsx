import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Heart, Calendar, Star } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Couples Spa Package Dubai | Romantic Spa for Two AED 1,100 | Diamond Key Spa",
  description:
    "Experience the ultimate romantic couples spa in Dubai. Couples Bliss Package (AED 1,100 for two) — synchronized massage, Moroccan Bath, private suite, rose petals & champagne at Diamond Key Spa Al Qusais.",
  keywords: [
    "couples spa dubai", "couples massage dubai", "romantic spa dubai",
    "anniversary spa dubai", "couple spa package dubai", "spa for two dubai",
    "valentine spa dubai", "couples hammam dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-packages/couples-spa` },
};

const includes = [
  "Synchronized couple's massage (90 min) in private suite",
  "Rose petal Moroccan Hammam Bath (60 min)",
  "Champagne & strawberries — served in the suite",
  "Private couple's treatment suite exclusively yours",
  "His & her luxury bathrobes and slippers",
  "Couple's herbal foot ritual",
  "Personalized aromatherapy oil selection",
  "Welcome dates, herbal tea & refreshments",
];

const occasions = [
  "Wedding anniversary celebration", "Valentine's Day romantic escape",
  "Engagement or honeymoon treat", "Birthday surprise for your partner",
  "\"Just because\" — no reason needed", "Pre-holiday relaxation ritual",
];

const faqs = [
  { q: "Can we choose different treatments from each other?", a: "Yes. While the Couples Bliss Package is designed for synchronized experiences, we can accommodate different massage styles — for example, one partner receiving deep tissue while the other has Swedish. Please let us know your preferences when booking." },
  { q: "Do we need to arrive at the same time?", a: "We recommend arriving together so your consultation and preparation can happen simultaneously. However, if needed, one partner can arrive slightly earlier for their consultation. Please call us if you need to make special arrangements." },
  { q: "Is champagne included, and can we have non-alcoholic alternatives?", a: "The package includes sparkling wine/champagne as standard. We happily substitute with premium sparkling grape juice, fresh juice, or any other non-alcoholic beverage of your preference — just mention this when booking." },
  { q: "Is the Couples Spa available as a gift?", a: "Absolutely! A couples spa gift card is one of our most popular gifts. We create beautifully presented gift cards (digital or physical) with a personal message. Valid for 6 months from purchase. Call +971 54 490 7283 to arrange." },
  { q: "Is there a minimum age for the Couples Spa Package?", a: "All guests must be 18 years or older for the Couples Bliss Package. We do not offer children's spa services. If one partner is under 18, please call us as certain non-massage elements may be adapted." },
];

export default function CouplsSpaPage() {
  const breadcrumbs = [
    { name: "Spa Packages", href: "/spa-packages" },
    { name: "Couples Spa", href: "/spa-packages/couples-spa" },
  ];

  return (
    <>
      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-gold-400 fill-gold-400" />
            <span className="tag">For Two</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Couples Bliss <span className="block text-gold-400">Spa Package</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light mb-8">
            Share an unforgettable spa journey in our private couple&apos;s suite — synchronized treatments,
            champagne, and pure romance for two.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-baseline gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-2.5">
              <span className="text-gold-300 font-bold text-2xl font-serif">AED 1,100</span>
              <span className="text-gray-400 text-sm">for two</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium">2.5 hours</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/book-appointment" className="gold-btn flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Book for Two
            </Link>
            <a href={generateWhatsAppUrl("Hi! I'd like to book the Couples Bliss Package at Diamond Key Spa.")}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:border-gold-400 transition-all">
              WhatsApp for Details
            </a>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection direction="right">
                <SectionLabel centered={false}>The Experience</SectionLabel>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Romance, Relaxation &amp; <span className="text-gold-500">Reconnection</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>Research consistently shows that couples who engage in shared novel experiences — particularly those involving touch and relaxation — report significantly deeper emotional connection, better communication, and higher relationship satisfaction. Our Couples Bliss Package is designed with this science at its core: every element is carefully chosen to create an environment where you and your partner can fully relax together, free from the distractions of everyday life.</p>
                  <p>The experience takes place entirely in our beautifully appointed private couple&apos;s suite — a sanctuary set apart from our regular treatment rooms, with ambient lighting, rose petals, and a curated playlist of relaxing music. Your synchronized massage begins with both therapists working in unison, ensuring you experience each technique simultaneously — a deeply bonding experience as you embark on the same therapeutic journey together.</p>
                  <p>Following the massage, you transition to the hammam together — a more interactive, social experience by nature. The Moroccan Bath, with its steam and exfoliation ritual, has been a social bonding tradition across North African and Middle Eastern cultures for centuries. Sharing this ancient ritual together creates a unique shared memory that lingers long after your visit. The package concludes with complimentary champagne and strawberries in the private suite — the perfect opportunity to reconnect and celebrate.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <h2 className="text-2xl font-serif font-bold mb-5">Everything Included</h2>
                <ul className="space-y-3">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-pink-50 border border-pink-100">
                      <Heart className="w-4 h-4 text-gold-500 fill-gold-200 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.15}>
                <h2 className="text-2xl font-serif font-bold mb-5">Perfect Occasions</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {occasions.map((o) => (
                    <div key={o} className="p-4 text-center rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 font-medium">
                      {o}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <h2 className="text-2xl font-serif font-bold mb-5">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <details key={i} className="border border-gray-200 rounded-2xl overflow-hidden group">
                      <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 text-sm list-none">
                        {faq.q}
                        <span className="w-6 h-6 rounded-full bg-gray-100 group-open:bg-gold-500 group-open:text-white flex items-center justify-center flex-shrink-0 ml-4 transition-colors text-xs">+</span>
                      </summary>
                      <p className="px-5 pb-5 pt-2 text-sm text-gray-500 leading-relaxed border-t border-gray-100">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div>
              <div className="sticky top-28 space-y-5">
                <div className="bg-luxury-dark text-white rounded-2xl p-6 border border-gold-500/30">
                  <Heart className="w-8 h-8 text-gold-400 fill-gold-400/20 mb-4" />
                  <h3 className="font-bold text-white text-lg mb-1">Couples Bliss</h3>
                  <div className="text-3xl font-serif font-bold text-gold-300 mb-1">AED 1,100</div>
                  <p className="text-gray-400 text-sm mb-6">2.5 hours · For two · Private suite</p>
                  <div className="space-y-3">
                    <Link href="/book-appointment" className="gold-btn !py-3 block text-center text-sm">Book for Two</Link>
                    <a href="tel:+971544907283" className="block text-center py-3 px-6 rounded-full border border-white/20 text-white text-sm font-semibold hover:border-gold-400 transition-all">Call: +971 54 490 7283</a>
                    <a href={generateWhatsAppUrl("Hi! I'd like to book the Couples Bliss Package.")}
                      target="_blank" rel="noopener noreferrer"
                      className="block text-center py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/20 transition-all">
                      WhatsApp Us
                    </a>
                  </div>
                </div>
                <div className="luxury-card p-5">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />)}
                    <span className="ml-1 font-bold text-sm">{siteConfig.rating.value}</span>
                  </div>
                  <p className="text-xs text-gray-500">Rated {siteConfig.rating.value}/5 by {siteConfig.rating.count}+ verified clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
