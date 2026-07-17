import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | Diamond Key Spa Dubai — All Your Spa Questions Answered",
  description:
    "Complete FAQ for Diamond Key Spa, Al Qusais, Dubai. 30+ answers about treatments, prices, booking, location, hours, hygiene, and what to expect. Open daily 9AM–12:30AM.",
  keywords: [
    "diamond key spa faq", "spa questions dubai", "massage faq dubai", "spa booking questions",
    "spa dubai price faq", "how to book spa dubai", "spa hygiene standards dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/faq` },
};

const faqCategories = [
  {
    name: "Booking & Reservations",
    faqs: [
      { q: "How do I book an appointment at Diamond Key Spa?", a: "You can book in three ways: call us directly at +971 54 490 7283, send a WhatsApp message to the same number, or use the online booking form on our website. We recommend calling or WhatsApp for same-day or next-day bookings to confirm availability immediately." },
      { q: "Do I need to book in advance or can I walk in?", a: "Walk-ins are welcome based on therapist availability, but we strongly recommend booking at least 24 hours in advance to guarantee your preferred time, treatment, and therapist. For spa packages and couples treatments, please book 48–72 hours ahead." },
      { q: "What is your cancellation policy?", a: "We kindly request 24 hours notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may incur a 50% charge. No-shows are charged in full. We understand emergencies — please call us as early as possible if your plans change." },
      { q: "Can I book a spa treatment for a group or hen party?", a: "Absolutely! We accommodate groups for corporate wellness events, hen parties, birthday celebrations, and team building. Please call us to discuss your group size and requirements. We can arrange special group rates for parties of 5 or more." },
      { q: "Are gift vouchers available for spa treatments?", a: "Yes! Gift vouchers are available for any treatment, package, or monetary amount. We offer beautifully presented digital or physical gift cards, valid for 6 months. Perfect for birthdays, anniversaries, and special occasions. Call or WhatsApp to arrange." },
      { q: "Do you offer membership or loyalty programs?", a: "We offer a loyalty program for regular clients. Ask our reception about our stamp card program and referral rewards when you visit. Regular clients also receive priority booking access and first notification of special promotions." },
    ],
  },
  {
    name: "Treatments & Services",
    faqs: [
      { q: "Which treatment is best for lower back pain?", a: "For lower back pain, we recommend Deep Tissue Massage as the primary treatment — it targets the deep muscle layers where chronic tension accumulates. Hot Stone Massage is excellent for heat-related muscle relaxation. Foot Reflexology can also help by stimulating the lumbar reflex zones. Our therapists will conduct a health assessment before your session to make the most appropriate recommendation." },
      { q: "How long do treatments take?", a: "Treatment duration varies: Foot Reflexology (45–60 min), Body Scrub (45–60 min), Facial Treatments (45–90 min), Body Massage (60–120 min), Moroccan Bath (60–90 min), Aromatherapy Massage (60–90 min), Deep Tissue Massage (60–90 min), Hot Stone Massage (75–90 min), Massage Spa Experience (90–120 min). Add 15 minutes for consultation." },
      { q: "Can I combine multiple treatments in one visit?", a: "Yes! Many treatments complement each other beautifully. Popular combinations: Moroccan Bath + Massage (the bath primes your skin for maximum oil absorption), Body Scrub + Facial, Foot Reflexology + Aromatherapy Massage. We can help you design a custom session schedule. Note that our packages (Royal Retreat, Couples Bliss, VIP Gold) already incorporate the best treatment combinations." },
      { q: "What products do you use?", a: "We use certified organic, premium products sourced from Morocco (traditional beldi black soap, ghassoul clay, argan oil), Europe (essential oil blends, botanical serums), and Asia (reflexology oils, herbal preparations). All products are paraben-free, sulfate-free, and cruelty-free. We can provide full ingredient lists on request." },
      { q: "Can I request a male or female therapist?", a: "Yes. We have both male and female therapists on our team. Please specify your preference when booking. We always aim to accommodate preferences, though availability may vary by time slot. Female clients are always paired with female therapists by default unless you specifically request otherwise." },
      { q: "What if I need to ask my therapist to adjust the pressure during treatment?", a: "Please communicate freely during your treatment! Our therapists actively encourage this. Simply say 'a little firmer please' or 'could you go a bit lighter?' at any point. Ongoing communication between client and therapist is the key to a perfect treatment outcome. Never suffer in silence." },
      { q: "Can massage help with my chronic stress and anxiety?", a: "Yes — this is one of the best-evidenced benefits of therapeutic massage. Studies published in the Journal of Alternative and Complementary Medicine demonstrate that a single 45-minute massage reduces cortisol (stress hormone) levels by an average of 31% and increases serotonin levels. Regular monthly treatments show cumulative benefits including improved sleep, reduced anxiety scores, and better emotional regulation." },
      { q: "Are there any conditions that prevent me from receiving a massage?", a: "Most people can safely receive massage therapy. However, we advise against treatment during fever, active skin infections, certain blood clotting disorders, immediately after surgery, or if you have certain cardiovascular conditions. During your pre-treatment consultation, we will review your health questionnaire and identify any modifications needed. When in doubt, consult your doctor before booking." },
    ],
  },
  {
    name: "Location & Facilities",
    faqs: [
      { q: "Where exactly is Diamond Key Spa located?", a: "We are located at Al Qusais Industrial Area 5, Dubai, United Arab Emirates. Our Plus Code is 7CR3+MXV. We are 5 minutes walk from Al Qusais Metro Station (Green Line), 15 minutes from Dubai International Airport, and 10 minutes from Deira City Centre." },
      { q: "Is parking available?", a: "Yes — free on-site parking is available for all clients. There is ample space in the industrial area car park immediately adjacent to our premises. No parking stress!" },
      { q: "Which metro station is closest to Diamond Key Spa?", a: "Al Qusais Metro Station on the Green Line is the closest, approximately 5 minutes walk from our spa. Al Nahda Metro Station is also nearby (8–10 minutes walk). From either station, you can also take a short taxi or rideshare to our door." },
      { q: "Is Diamond Key Spa accessible for people with disabilities?", a: "We are committed to accessibility. Our ground-floor reception and treatment rooms are wheelchair accessible. Please call ahead if you have specific access requirements so we can prepare appropriately and assist upon your arrival." },
      { q: "Are treatment rooms private?", a: "Yes. Every treatment at Diamond Key Spa is conducted in a dedicated private room. Couples treatments have a private suite. The Moroccan Hammam has a private steam and treatment area. We never conduct treatments in shared or open spaces." },
    ],
  },
  {
    name: "Pricing & Payment",
    faqs: [
      { q: "What is the price range for treatments at Diamond Key Spa?", a: "Our treatments range from AED 130 (Foot Reflexology, 45 min) to AED 450 (Massage Spa Experience, 120 min). Spa packages range from AED 750 (Royal Retreat) to AED 1,200 (VIP Gold Experience). Full pricing is available on each service page or by calling us." },
      { q: "What payment methods do you accept?", a: "We accept cash (AED), major credit cards (Visa, Mastercard), debit cards, and bank transfer. Payment is due at the time of service. For packages and gift vouchers purchased in advance, we accept online transfer details provided at booking." },
      { q: "Do I need to pay a deposit?", a: "For standard individual treatments, no deposit is required. For spa packages (especially Couples and VIP), we may request a 50% deposit to secure your booking, particularly for weekend and evening slots. The deposit is fully refundable with 24 hours notice." },
      { q: "Do you offer discounts for groups or regulars?", a: "We offer group discounts for parties of 5 or more — please call to discuss rates. Regular clients benefit from our loyalty stamp card (10 visits earns a complimentary treatment). Refer a friend and both of you receive a discount on your next visit." },
    ],
  },
  {
    name: "Health & Safety",
    faqs: [
      { q: "What hygiene standards does Diamond Key Spa maintain?", a: "We maintain hospital-grade hygiene standards throughout our spa. All treatment beds are covered with fresh linen for every client. Towels are laundered after each use at high temperatures. Kessa gloves and disposable items are single-use only. Hard surfaces and equipment are disinfected between clients. Our therapists wash and sanitize hands before every treatment." },
      { q: "Can I get a massage if I am pregnant?", a: "Prenatal massage is available and beneficial during pregnancy, but with important precautions. We do not perform massage during the first trimester. From the second trimester onwards, our therapists use pregnancy-safe techniques and positioning. Please inform us of your pregnancy when booking and consult your OB/GYN beforehand if you have any complications." },
      { q: "I have a medical condition — can I still visit?", a: "Most medical conditions do not prevent spa visits with appropriate modifications. Common conditions we regularly accommodate include diabetes, hypertension, fibromyalgia, arthritis, and cancer (in remission). Our pre-treatment health questionnaire identifies any areas requiring modification. For serious conditions, we recommend medical clearance from your doctor before booking." },
      { q: "Is there an age requirement for spa treatments?", a: "Clients must be 18 years or older to receive spa treatments at Diamond Key Spa without parental consent. Minors aged 16–17 may receive certain treatments (body massage, reflexology) with a parent or guardian present and written consent. We do not offer treatments to children under 16." },
      { q: "I have sensitive skin or allergies — is that okay?", a: "Absolutely. Please disclose any known allergies or sensitivities when booking and again during your consultation. We will review the products intended for use and substitute hypoallergenic alternatives where needed. We stock fragrance-free, nut-free, and latex-free alternatives for most treatments." },
      { q: "What COVID-19 precautions do you maintain?", a: "We continue to maintain enhanced hygiene protocols established during the pandemic as permanent standards. This includes thorough sanitization of all surfaces between clients, enhanced ventilation in treatment rooms, regular testing of therapists, and availability of hand sanitizer throughout the spa." },
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
            Everything you need to know about Diamond Key Spa — treatments, booking, location,
            pricing, and what to expect from your visit.
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
              Our team is available daily from 9:00 AM to 12:30 AM. Call, WhatsApp, or email us
              and we&apos;ll respond promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971544907283" className="gold-btn">Call: +971 54 490 7283</a>
              <Link href="/contact" className="ghost-btn">Contact Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
