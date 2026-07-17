import type { Metadata } from "next";
import Link from "next/link";
import { Check, Crown, Heart, Gem } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { packages } from "@/config/services";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Luxury Spa Packages Dubai | Royal Retreat, Couples Spa & VIP Gold | Diamond Key Spa",
  description:
    "Discover Diamond Key Spa's exclusive spa packages in Dubai. Royal Retreat (AED 750), Couples Bliss (AED 1,100), and VIP Gold Experience (AED 1,200). All-inclusive luxury spa journeys in Al Qusais.",
  keywords: [
    "spa packages dubai", "luxury spa package dubai", "couples spa package dubai",
    "vip spa dubai", "royal spa dubai", "full day spa dubai", "spa deal dubai",
    "spa package al qusais", "all inclusive spa dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-packages` },
};

const packageIcons = [Crown, Heart, Gem];
const packageColors = [
  { card: "bg-luxury-dark text-white border border-gold-500/30 shadow-gold-lg", btn: "bg-gold-500 text-white hover:bg-gold-400", accent: "text-gold-300", sub: "text-gray-400", divider: "border-white/10", include: "text-gray-300", label: "text-gold-400", tag: "bg-gold-500 text-white" },
  { card: "bg-white border border-gray-100 shadow-luxury text-gray-900", btn: "border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white", accent: "text-gold-500", sub: "text-gray-500", divider: "border-gray-100", include: "text-gray-600", label: "text-gray-400", tag: "bg-gray-900 text-white" },
  { card: "bg-white border border-gray-100 shadow-luxury text-gray-900", btn: "border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white", accent: "text-gold-500", sub: "text-gray-500", divider: "border-gray-100", include: "text-gray-600", label: "text-gray-400", tag: "bg-purple-600 text-white" },
];

const includedAlways = [
  "Private consultation with your therapist",
  "Premium certified organic products",
  "Complimentary herbal refreshments & dates",
  "Luxury bathrobe & slippers",
  "Free on-site parking",
  "Post-treatment relaxation lounge",
];

const packageFaqs = [
  {
    q: "What is included in every spa package?",
    a: "Every Diamond Key Spa package includes a private pre-treatment consultation, premium organic products, complimentary refreshments and dates, luxury bathrobe and slippers, free parking, and access to our post-treatment relaxation lounge.",
  },
  {
    q: "Can I customize a package or swap treatments?",
    a: "Absolutely. We can accommodate substitutions in most packages — for example, swapping the aromatherapy massage for a deep tissue massage. Please call us on +971 54 490 7283 or WhatsApp before booking to discuss your preferences.",
  },
  {
    q: "Are spa packages available as gift vouchers?",
    a: "Yes! All our packages are available as beautifully presented gift vouchers — perfect for birthdays, anniversaries, and special occasions. Call or WhatsApp us to arrange your voucher.",
  },
  {
    q: "Do I need to book packages in advance?",
    a: "We strongly recommend booking packages at least 24–48 hours in advance to ensure availability, especially for the Couples Bliss package which requires a private suite. Last-minute bookings may be available subject to therapist availability.",
  },
  {
    q: "What is the cancellation policy for packages?",
    a: "We require 24 hours notice for cancellations. Packages cancelled with less than 24 hours notice may be subject to a 50% cancellation fee. No-shows will be charged in full. We understand emergencies — please call us as early as possible if your plans change.",
  },
];

export default function SpaPackagesPage() {
  const breadcrumbs = [{ name: "Spa Packages", href: "/spa-packages" }];
  const schema = generateBreadcrumbSchema([{ name: "Home", href: "/" }, ...breadcrumbs]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <SectionLabel centered={false}>Spa Packages</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 mb-4">
            Complete Spa Journeys <span className="block text-gold-400">for Every Occasion</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Curated all-inclusive packages that combine our finest treatments for a seamlessly
            restorative experience — from 2.5 hours to a full 4-hour luxury immersion.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {packages.map((pkg, idx) => {
              const Icon = packageIcons[idx];
              const colors = packageColors[idx];
              return (
                <AnimatedItem key={pkg.id} direction="up">
                  <div className={cn("relative rounded-2xl overflow-hidden flex flex-col h-full", colors.card)}>
                    {pkg.tag && (
                      <div className={cn("absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full z-10", colors.tag)}>
                        {pkg.tag}
                      </div>
                    )}
                    <div className="p-7 pb-5">
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gold-500/10")}>
                        <Icon className="w-6 h-6 text-gold-400" />
                      </div>
                      <h2 className="text-xl font-serif font-bold mb-2">{pkg.name}</h2>
                      <p className={cn("text-sm leading-relaxed mb-5", colors.sub)}>{pkg.description}</p>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className={cn("text-3xl font-serif font-bold", colors.accent)}>
                          AED {pkg.price.toLocaleString()}
                        </span>
                      </div>
                      <p className={cn("text-xs", colors.sub)}>
                        {pkg.duration} · All inclusive
                      </p>
                    </div>
                    <div className={cn("px-7 py-5 flex-1 border-t", colors.divider)}>
                      <p className={cn("text-xs font-bold uppercase tracking-widest mb-3", colors.label)}>
                        Includes
                      </p>
                      <ul className="space-y-2.5">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <Check className={cn("w-4 h-4 mt-0.5 flex-shrink-0", colors.accent)} />
                            <span className={cn("text-sm", colors.include)}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-7 pt-4">
                      <Link
                        href={`/spa-packages/${pkg.slug}`}
                        className={cn("block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-300", colors.btn)}
                      >
                        Book This Package
                      </Link>
                    </div>
                  </div>
                </AnimatedItem>
              );
            })}
          </AnimatedGroup>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel>Included in Every Package</SectionLabel>
            <h2 className="text-3xl font-serif font-bold">What Every Package Includes</h2>
          </AnimatedSection>
          <AnimatedGroup className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto" staggerDelay={0.08}>
            {includedAlways.map((item) => (
              <AnimatedItem key={item}>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <Check className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-serif font-bold">Package Questions Answered</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {packageFaqs.map((faq, i) => (
              <details key={i} className="border border-gray-200 rounded-2xl overflow-hidden group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 text-sm list-none">
                  {faq.q}
                  <span className="w-6 h-6 rounded-full bg-gray-100 group-open:bg-gold-500 group-open:text-white flex items-center justify-center flex-shrink-0 ml-4 transition-colors text-xs">+</span>
                </summary>
                <p className="px-5 pb-5 pt-2 text-sm text-gray-500 leading-relaxed border-t border-gray-100">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-luxury-dark text-white text-center">
        <div className="container-custom max-w-2xl">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Want a <span className="text-gold-400">Custom Package?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              We create bespoke spa journeys for special occasions, corporate events, and unique needs.
              Call or WhatsApp us to design your perfect experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971544907283" className="gold-btn">Call: +971 54 490 7283</a>
              <a href="https://wa.me/971544907283?text=Hi!%20I%27d%20like%20to%20enquire%20about%20a%20custom%20spa%20package."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:border-gold-400 transition-all">
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
