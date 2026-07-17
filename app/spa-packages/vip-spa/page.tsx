import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Gem, Calendar, Star, Shield } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "VIP Gold Spa Experience Dubai | AED 1,200 | Diamond Key Spa Al Qusais",
  description:
    "Diamond Key Spa's most exclusive VIP Gold Experience (AED 1,200). 4 hours: 24K Gold Body Treatment, Diamond Facial, Deep Tissue Therapy, Rose Gold Moroccan Bath, Hot Stone Therapy. White-glove service.",
  keywords: [
    "vip spa dubai", "gold spa treatment dubai", "luxury vip spa", "24k gold facial dubai",
    "exclusive spa dubai", "most expensive spa dubai", "premium spa package dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-packages/vip-spa` },
};

const includes = [
  "24K Gold Body Treatment — gold-infused oil, heated stone roller, luminizing mask",
  "Diamond Facial Rejuvenation — diamond-tip exfoliation, collagen serum, LED therapy",
  "Deep Tissue Therapy (90 min) — full body therapeutic release",
  "Rose Gold Moroccan Hammam — infused with rose water and pink clay",
  "Hot Stone Therapy (30 min) — volcanic basalt finishing ritual",
  "Personal spa concierge from arrival to departure",
  "Priority booking — your preferred time guaranteed",
  "Premium refreshments — sparkling water, fresh juices, artisanal dates",
  "Luxury gift bag with Diamond Key spa products",
  "Complimentary robe, slippers & amenity kit to take home",
];

const vipFeatures = [
  { icon: Shield, title: "Personal Spa Concierge", desc: "A dedicated wellness concierge handles every detail from arrival to departure — no waiting, no transitions, just seamless luxury." },
  { icon: Star, title: "Priority & Exclusive Access", desc: "VIP clients receive priority booking across all time slots, including our late-night sessions. Your preferred therapist is reserved for you." },
  { icon: Gem, title: "Gold & Diamond Treatments", desc: "24-karat gold leaf and diamond micro-powder are scientifically validated for anti-aging and skin luminosity. Only in the VIP package." },
  { icon: Clock, title: "4 Hours of Pure Luxury", desc: "The longest and most comprehensive treatment we offer. Unhurried, deeply transformative, and utterly indulgent." },
];

const faqs = [
  { q: "What makes the VIP Gold Experience different from other packages?", a: "The VIP Gold Experience includes gold-infused and diamond treatments not available in any other package, a personal spa concierge, priority booking rights, a luxury gift bag with take-home products, and significantly more treatment time (4 hours vs 3.5 for Royal Retreat). It is our ultimate offering." },
  { q: "What are the 24K Gold and Diamond treatments?", a: "Our 24K Gold Body Treatment uses genuine gold-infused oil and a heated gold stone roller — gold has been scientifically shown to stimulate collagen, reduce inflammation, and create a luminous skin appearance. Our Diamond Facial uses diamond-tip microdermabrasion technology combined with a collagen serum and LED therapy for cellular rejuvenation." },
  { q: "Is the VIP package available for couples?", a: "Yes — we can create a VIP Couples Experience at AED 2,200 with two personal concierges and a private double VIP suite. This is available by advance arrangement only. Please call +971 54 490 7283 to arrange." },
  { q: "How far in advance should I book the VIP Gold Experience?", a: "We recommend booking at least 48–72 hours in advance for the VIP Experience to ensure therapist availability and suite preparation. For special occasions, booking 1–2 weeks ahead is advisable." },
  { q: "What is included in the luxury gift bag?", a: "Your gift bag includes Diamond Key Spa signature products: a 50ml bottle of our bespoke aromatherapy massage oil, a luxury body butter, a mini Moroccan black soap (beldi), and an aftercare guide for maintaining your results at home." },
];

export default function VipSpaPage() {
  const breadcrumbs = [
    { name: "Spa Packages", href: "/spa-packages" },
    { name: "VIP Gold Experience", href: "/spa-packages/vip-spa" },
  ];

  return (
    <>
      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-5" />
        </div>
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <div className="flex items-center gap-2 mb-4">
            <Gem className="w-5 h-5 text-gold-400" />
            <span className="tag">VIP Exclusive</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            VIP Gold <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300">Experience</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light mb-8">
            4 hours of gold-infused luxury — Diamond Key Spa&apos;s most exclusive offering, featuring
            24K gold treatments, diamond facials, and white-glove concierge service.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-baseline gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-2.5">
              <span className="text-gold-300 font-bold text-2xl font-serif">AED 1,200</span>
              <span className="text-gray-400 text-sm">all inclusive</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium">4 hours</span>
            </div>
          </div>
          <Link href="/book-appointment" className="gold-btn animate-glow-pulse inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Book VIP Experience
          </Link>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection direction="right">
                <SectionLabel centered={false}>The VIP Difference</SectionLabel>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Where True Luxury <span className="text-gold-500">Has No Compromise</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>The VIP Gold Experience was created for those who demand the absolute best — a 4-hour journey through Diamond Key Spa&apos;s most exclusive treatments, enhanced with genuine gold and diamond technologies, and accompanied by a personal spa concierge who ensures every detail of your experience is flawlessly executed. This is not simply a series of treatments — it is a curated wellness ritual at the highest level available in Dubai.</p>
                  <p>Gold has been revered for its healing properties since ancient Egypt, and modern science has validated what ancients observed intuitively: 24-karat gold stimulates collagen production, reduces inflammation, and creates an unparalleled luminosity. Our 24K Gold Body Treatment uses a warm gold-infused oil applied with a heated gold stone roller, followed by a gold leaf body mask. The effect is immediately visible — skin appears brighter, firmer, and radiantly alive. The Diamond Facial employs genuine diamond-tip microdermabrasion for the most precise exfoliation possible, followed by a medical-grade collagen serum and LED therapy that stimulates cellular renewal at the deepest level.</p>
                  <p>What sets the VIP Experience apart from our other premium packages is the white-glove concierge service. From the moment you arrive, a dedicated concierge accompanies you throughout your journey — coordinating transitions between treatment rooms, ensuring your refreshments and preferences are always met, and handling every logistical detail so you never need to think about anything other than surrendering to the experience.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <h2 className="text-2xl font-serif font-bold mb-5">VIP Features</h2>
                <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.07}>
                  {vipFeatures.map((f) => {
                    const Icon = f.icon;
                    return (
                      <AnimatedItem key={f.title}>
                        <div className="p-5 rounded-xl border border-gold-100 bg-gold-50">
                          <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center mb-3">
                            <Icon className="w-5 h-5 text-gold-500" />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.title}</h3>
                          <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                        </div>
                      </AnimatedItem>
                    );
                  })}
                </AnimatedGroup>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.15}>
                <h2 className="text-2xl font-serif font-bold mb-5">Everything Included</h2>
                <ul className="space-y-3">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-gold-50 to-white border border-gold-100">
                      <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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
                <div className="rounded-2xl p-6 bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-gold-lg">
                  <Gem className="w-8 h-8 text-white mb-4" />
                  <h3 className="font-bold text-white text-lg mb-1">VIP Gold Experience</h3>
                  <div className="text-3xl font-serif font-bold text-white mb-1">AED 1,200</div>
                  <p className="text-gold-100 text-sm mb-6">4 hours · White-glove · All inclusive</p>
                  <div className="space-y-3">
                    <Link href="/book-appointment" className="block text-center py-3 bg-luxury-dark text-gold-300 rounded-full font-semibold text-sm hover:bg-black transition-colors">Book VIP Now</Link>
                    <a href="tel:+971544907283" className="block text-center py-3 border-2 border-white/40 text-white rounded-full font-semibold text-sm hover:border-white transition-all">Call: +971 54 490 7283</a>
                    <a href={generateWhatsAppUrl("Hi! I'd like to book the VIP Gold Experience at Diamond Key Spa.")}
                      target="_blank" rel="noopener noreferrer"
                      className="block text-center py-3 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/20 transition-all">
                      WhatsApp Us
                    </a>
                  </div>
                </div>
                <div className="luxury-card p-5">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />)}
                    <span className="ml-1 font-bold text-sm">{siteConfig.rating.value}</span>
                  </div>
                  <p className="text-xs text-gray-500">Rated {siteConfig.rating.value}/5 by {siteConfig.rating.count}+ clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
