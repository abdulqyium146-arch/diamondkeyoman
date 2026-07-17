import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Star, Crown, Phone, Calendar } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Royal Retreat Luxury Spa Package Dubai | AED 750 | Diamond Key Spa Al Qusais",
  description:
    "The ultimate luxury spa day in Dubai. Royal Retreat Package (AED 750) — 60-min Moroccan Bath + 75-min Aromatherapy Massage + 60-min Luxury Facial + Herbal Foot Ritual. All inclusive at Diamond Key Spa, Al Qusais.",
  keywords: [
    "luxury spa package dubai", "royal retreat spa dubai", "full day spa dubai",
    "best spa package dubai", "all inclusive spa dubai", "moroccan bath facial massage package",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-packages/luxury-packages` },
};

const includes = [
  "Moroccan Hammam Bath (60 min) — traditional kessa exfoliation + ghassoul clay",
  "Full Body Aromatherapy Massage (75 min) — bespoke essential oil blend",
  "Luxury Facial Treatment (60 min) — skin analysis + deep cleansing + mask",
  "Herbal Foot Ritual (30 min) — soak, exfoliation, and moisturisation",
  "Welcome refreshments, dates & herbal tea",
  "Luxury bathrobe, slippers & toiletries",
  "Complimentary steam room access",
  "Post-treatment relaxation lounge",
];

const occasions = [
  { title: "Birthday Treat", desc: "Celebrate your special day with the ultimate luxury experience." },
  { title: "Post-Burnout Recovery", desc: "Reset your body and mind after an intense work period." },
  { title: "Dubai Visitor", desc: "The perfect introduction to Dubai's finest spa culture." },
  { title: "Anniversary Gift", desc: "Pamper your partner or yourself as a milestone celebration." },
  { title: "Milestone Achievement", desc: "Reward yourself for reaching an important goal." },
  { title: "Seasonal Self-Care", desc: "Quarterly deep wellness reset recommended by our therapists." },
];

const faqs = [
  { q: "How long does the Royal Retreat Package take in total?", a: "The Royal Retreat Package takes approximately 3.5 hours including transition time between treatments and your pre-treatment consultation. We recommend arriving 15 minutes early to complete your health questionnaire and settle into the spa." },
  { q: "Can I split the package across two visits?", a: "Unfortunately the Royal Retreat is designed as a single-session experience where treatments build on each other sequentially. The Moroccan Bath prepares your skin for the aromatherapy massage, and the facial follows to lock in hydration. However, we can discuss alternative arrangements — call us to talk through your options." },
  { q: "Is the Royal Retreat available for men?", a: "Absolutely. The Royal Retreat Package is available for all genders. Our therapists are experienced in adapting treatments appropriately. We have both male and female therapists available — please specify your preference when booking." },
  { q: "Can I gift the Royal Retreat Package to someone?", a: "Yes! The Royal Retreat makes an exceptional gift. We create beautifully presented gift cards (digital or physical) valid for 6 months. Call +971 54 490 7283 or WhatsApp us to arrange a gift card." },
  { q: "What if I have skin allergies or sensitivities?", a: "We conduct a thorough consultation before every treatment and check for allergies, sensitivities, and medical conditions. Our estheticians will adjust products accordingly — we have hypoallergenic alternatives for all products used in the facial and aromatherapy treatments." },
];

export default function LuxuryPackagesPage() {
  const breadcrumbs = [
    { name: "Spa Packages", href: "/spa-packages" },
    { name: "Royal Retreat", href: "/spa-packages/luxury-packages" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Royal Retreat Luxury Spa Package",
    description: "The ultimate luxury spa day combining Moroccan Bath, Aromatherapy Massage, Luxury Facial, and Herbal Foot Ritual.",
    offers: { "@type": "Offer", price: 750, priceCurrency: "AED", availability: "https://schema.org/InStock" },
    brand: { "@type": "Brand", name: "Diamond Key Spa" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: 4.76, reviewCount: 200 },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <div className="flex items-center gap-2 mb-4">
            <Crown className="w-5 h-5 text-gold-400" />
            <span className="tag">Most Popular Package</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Royal Retreat <span className="block text-gold-400">Luxury Package</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light mb-8">
            3.5 hours of pure luxury — our most complete spa journey combining four premium treatments
            into one seamlessly restorative experience.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-baseline gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-2.5">
              <span className="text-gold-300 font-bold text-2xl font-serif">AED 750</span>
              <span className="text-gray-400 text-sm">all inclusive</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium">3.5 hours</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/book-appointment" className="gold-btn flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Book This Package
            </Link>
            <a href="tel:+971544907283" className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/20 text-white font-semibold hover:border-gold-400 transition-all">
              <Phone className="w-4 h-4" /> Call to Book
            </a>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection direction="right">
                <SectionLabel centered={false}>About This Package</SectionLabel>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  The Ultimate <span className="text-gold-500">Spa Day Experience</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The Royal Retreat Package is Diamond Key Spa's flagship experience — a carefully sequenced journey through four of our most transformative treatments designed to deliver results that far exceed what any single treatment could achieve alone. Over 3.5 hours, you will be guided from one expertly delivered treatment to the next, each building on the last to create a cumulative effect of deep healing and complete renewal.
                  </p>
                  <p>
                    The journey begins with our authentic Moroccan Hammam, where steam opens your pores before traditional beldi black soap and kessa glove exfoliation removes dead skin cells accumulated over weeks. This prepares your skin to absorb the therapeutic essential oils of the aromatherapy massage with up to three times greater efficacy than untreated skin. The 75-minute aromatherapy massage uses a bespoke oil blend chosen specifically for your body and emotional needs during your pre-treatment consultation.
                  </p>
                  <p>
                    Your Luxury Facial follows — with your pores already open and skin primed from the hammam, the facial's active ingredients penetrate at maximum depth, delivering visible transformation. Our esthetician performs a skin analysis, deep cleanse, exfoliation, mask, serum application, and moisturisation tailored to your skin type and climate challenges. Finally, the Herbal Foot Ritual completes your journey with a soothing warm soak, exfoliation, and moisturisation — a perfect conclusion that grounds and relaxes.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <h2 className="text-2xl font-serif font-bold mb-5">Everything Included</h2>
                <ul className="space-y-3">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gold-50 border border-gold-100">
                      <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.15}>
                <h2 className="text-2xl font-serif font-bold mb-5">Perfect For</h2>
                <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.07}>
                  {occasions.map((o) => (
                    <AnimatedItem key={o.title}>
                      <div className="p-5 rounded-xl border border-gray-200 hover:border-gold-300 hover:bg-gold-50 transition-all">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm">{o.title}</h3>
                        <p className="text-xs text-gray-500">{o.desc}</p>
                      </div>
                    </AnimatedItem>
                  ))}
                </AnimatedGroup>
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
                  <Crown className="w-8 h-8 text-gold-400 mb-4" />
                  <h3 className="font-bold text-white text-lg mb-1">Royal Retreat</h3>
                  <div className="text-3xl font-serif font-bold text-gold-300 mb-1">AED 750</div>
                  <p className="text-gray-400 text-sm mb-6">3.5 hours · All inclusive</p>
                  <div className="space-y-3">
                    <Link href="/book-appointment" className="gold-btn !py-3 block text-center text-sm flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" /> Book Now
                    </Link>
                    <a href="tel:+971544907283" className="block text-center py-3 px-6 rounded-full border border-white/20 text-white text-sm font-semibold hover:border-gold-400 transition-all">
                      Call: +971 54 490 7283
                    </a>
                    <a href={generateWhatsAppUrl("Hi! I'd like to book the Royal Retreat Package at Diamond Key Spa.")}
                      target="_blank" rel="noopener noreferrer"
                      className="block text-center py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/20 transition-all">
                      WhatsApp to Book
                    </a>
                  </div>
                </div>
                <div className="luxury-card p-5">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />)}
                    <span className="ml-1 font-bold text-sm">{siteConfig.rating.value}</span>
                  </div>
                  <p className="text-xs text-gray-500">Rated {siteConfig.rating.value} by {siteConfig.rating.count}+ verified clients on Google</p>
                </div>
                <div className="luxury-card p-5">
                  <h3 className="font-bold text-sm text-gray-900 mb-3">Other Packages</h3>
                  <div className="space-y-2">
                    <Link href="/spa-packages/couples-spa" className="block text-sm text-gray-600 hover:text-gold-500 py-1 transition-colors">→ Couples Bliss — AED 1,100</Link>
                    <Link href="/spa-packages/vip-spa" className="block text-sm text-gray-600 hover:text-gold-500 py-1 transition-colors">→ VIP Gold Experience — AED 1,200</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
