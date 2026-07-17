import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | Diamond Key Oman — Locksmith & Key Duplication Questions Answered",
  description:
    "Frequently asked questions about Diamond Key's locksmith and key services in Seeb, Muscat, Oman. Prices, services, car key programming, lockouts, and more. Call +968 9097 4040.",
  keywords: [
    "locksmith faq oman", "key duplication questions muscat", "car key programming faq seeb",
    "key fob cost oman", "lockout service faq muscat", "diamond key questions",
  ],
  alternates: { canonical: `${siteConfig.url}/faq` },
};

const faqCategories = [
  {
    name: "Key Duplication",
    faqs: [
      { q: "How much does car key copying cost in Oman?", a: "Car key copying starts from OMR 2–5 depending on the key type (standard metal, transponder, flip key). We cut keys while you wait — usually in 10–20 minutes. Call +968 9097 4040 to confirm the price for your specific key." },
      { q: "How much does building key copying cost?", a: "Building and house key copying starts from OMR 0.5–2 depending on the key profile (standard, security, high-security). Most standard keys are cut in 5–10 minutes. Bring the original key to our Seeb shop." },
      { q: "What types of keys can you duplicate?", a: "We duplicate virtually all standard and security key types: standard door keys, cylinder keys, deadbolt keys, padlock keys, car keys (standard metal blade), and most residential and commercial security key profiles. High-security keys (Mul-T-Lock, Abloy) are also available — call to confirm." },
      { q: "Can you cut a car key without the original?", a: "For cutting a standard car key blank by code, we may be able to in some cases. However, for chipped (transponder) keys, you typically need the original for copying, or we can use OBD programming to pair a new key. Call us to discuss your specific situation." },
      { q: "Do you make keys while I wait?", a: "Yes. Key cutting is done on-site while you wait. Standard key duplication takes 5–20 minutes. Key programming takes 30–90 minutes depending on the vehicle." },
    ],
  },
  {
    name: "Car Key Programming",
    faqs: [
      { q: "How much does car key programming cost in Oman?", a: "Car key programming costs OMR 15–50 depending on the vehicle make and model, and whether a new key blank is required. We provide a quote before starting — no hidden fees. Call +968 9097 4040 with your car make/model for an estimate." },
      { q: "Which car brands can you program?", a: "We program keys for all major brands available in Oman: Toyota, Nissan, Honda, Mitsubishi, Hyundai, Kia, Land Rover, GMC, Chevrolet, BMW, Mercedes-Benz, and more. Call us to confirm coverage for your specific model and year." },
      { q: "What is car key programming and why is it needed?", a: "Modern vehicles have an immobiliser system that requires the key's electronic chip to be matched to the car's ECU before the engine will start. Programming pairs a new key's transponder chip to your vehicle. Without programming, a new key will turn in the lock but the engine won't start." },
      { q: "How long does key programming take?", a: "Car key programming typically takes 30–60 minutes. Some vehicles require more time for complex OBD procedures. We recommend calling ahead so we can confirm the time for your specific vehicle." },
      { q: "Is your key programming quality as good as the dealership?", a: "Yes. We use OEM-grade diagnostic equipment — the same quality of tools used by dealerships — at a significantly lower cost. The programmed key is functionally identical to a dealer-issued key." },
    ],
  },
  {
    name: "Key Fob Creation",
    faqs: [
      { q: "How much does a new key fob cost compared to the dealer?", a: "Our key fob creation service costs OMR 20–60 depending on the vehicle — typically 70–80% less than dealership prices. Call +968 9097 4040 with your car make, model, and year for a specific quote." },
      { q: "Can you create a key fob if I have lost all my keys?", a: "In many cases yes, though the process is more complex. We may need to use specialized OBD equipment and a full key-learning procedure. This takes longer and costs more than adding a key when you have the original. Call us to discuss your specific situation." },
      { q: "Does the new fob include the key blade?", a: "Yes. Our key fob creation service includes both the electronic fob shell and the cut mechanical key blade (where applicable). Central locking, boot release, and all remote functions are programmed." },
    ],
  },
  {
    name: "Lock Rekeying",
    faqs: [
      { q: "What is lock rekeying and why do it?", a: "Rekeying changes the internal pin configuration of your existing lock so that all old keys no longer work — only new keys will. The lock hardware stays in place. It is the recommended action when you move into a new property, after an employee leaves with a key, or after a key is lost." },
      { q: "How much does lock rekeying cost?", a: "Lock rekeying costs OMR 10–25 per lock depending on the lock brand and type. Multiple locks can often be rekeyed in one visit. Call us to confirm pricing for your specific locks." },
      { q: "Can multiple locks be rekeyed to work on one key?", a: "Yes — if your locks are compatible, we can rekey them all to the same key code. This is ideal for home and office use where you want one key for all doors." },
    ],
  },
  {
    name: "Lockout Services",
    faqs: [
      { q: "I am locked out of my car. What should I do?", a: "Call us immediately on +968 9097 4040. Do not break a window. Our technicians use professional wedge and long-reach tools to open your car door without any damage to the paint, glass, or weatherstrips. Car lockout service costs OMR 15–30." },
      { q: "I am locked out of my home or office. Can you help?", a: "Yes. Call us on +968 9097 4040. We use professional non-destructive picking techniques to open most standard residential and commercial locks without damaging the lock or door frame. Building lockout service costs OMR 10–20." },
      { q: "What proof of ownership do you need for lockout service?", a: "For building lockouts, we require valid ID and ideally proof of residence or ownership (national ID, passport, tenancy contract, utility bill). For car lockouts, vehicle registration is helpful. We verify identity before opening any property." },
      { q: "Do you offer on-site lockout service or do I need to come to your shop?", a: "Call us on +968 9097 4040 to discuss. During our opening hours (from 4:30 PM), we may be able to attend your location in Seeb and surrounding Muscat areas, or you can bring the vehicle to our shop. Confirm with us based on your situation." },
    ],
  },
  {
    name: "General",
    faqs: [
      { q: "Where is Diamond Key located?", a: "We are on Al Khair Street, Seeb 522, Muscat, Sultanate of Oman. Search 'المفتاح الماسي Diamond Key' or 'Diamond Key Seeb' on Google Maps for directions." },
      { q: "What are your opening hours?", a: "We open daily from 4:30 PM. Call +968 9097 4040 to confirm we are available before visiting, especially for urgent or complex jobs." },
      { q: "What payment methods do you accept?", a: "We accept cash (OMR) and other common local payment methods. Call us to confirm current payment options when booking." },
      { q: "Can you help with both car keys and building locks?", a: "Yes. Diamond Key is a full-service locksmith and key duplication shop. We handle all types of keys and locks — automotive, residential, and commercial." },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((c) => c.faqs);
  const faqSchema = generateFAQSchema(allFaqs.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumbs = [{ name: "FAQ", href: "/faq" }];
  const bcSchema = generateBreadcrumbSchema([{ name: "Home", href: "/" }, ...breadcrumbs]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <SectionLabel centered={false}>FAQ</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 mb-4">
            Frequently Asked <span className="text-gold-400">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Everything you need to know about Diamond Key&apos;s locksmith and key duplication
            services in Seeb, Muscat, Oman.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((cat) => (
              <AnimatedSection key={cat.name} direction="right">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gold-500 rounded-full" />
                  <h2 className="text-2xl font-serif font-bold text-gray-900">{cat.name}</h2>
                </div>
                <div className="space-y-3">
                  {cat.faqs.map((faq, i) => (
                    <details key={i} className="border border-gray-200 rounded-2xl overflow-hidden group">
                      <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 text-sm leading-snug list-none">
                        <span className="pr-4">{faq.q}</span>
                        <span className="w-7 h-7 rounded-full bg-gray-100 group-open:bg-gold-500 group-open:text-white flex items-center justify-center flex-shrink-0 transition-colors text-xs font-bold">+</span>
                      </summary>
                      <p className="px-5 pb-5 pt-2 text-sm text-gray-500 leading-relaxed border-t border-gray-100">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gold-50">
        <div className="container-custom text-center max-w-2xl">
          <AnimatedSection>
            <SectionLabel>Still Have Questions?</SectionLabel>
            <h2 className="text-3xl font-serif font-bold mb-4">We&apos;re Here to Help</h2>
            <p className="text-gray-600 mb-8">
              Call or WhatsApp us on +968 9097 4040. We open daily from 4:30 PM from our
              shop on Al Khair Street, Seeb, Muscat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn">Call: {siteConfig.contact.phoneDisplay}</a>
              <Link href="/contact" className="ghost-btn">Contact Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
