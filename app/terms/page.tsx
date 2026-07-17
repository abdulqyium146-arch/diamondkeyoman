import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service | Diamond Key Oman",
  description:
    "Terms of service for Diamond Key, Al Khair Street, Seeb, Muscat, Oman. Service terms, payment conditions, and business policies.",
  alternates: { canonical: `${siteConfig.url}/terms` },
  robots: { index: false },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By booking an appointment, visiting Diamond Key, or using our website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.",
      "These Terms constitute the entire agreement between you and Diamond Key regarding our services and supersede any prior agreements. We reserve the right to modify these Terms at any time. Changes are effective upon posting to our website.",
    ],
  },
  {
    title: "2. Booking & Appointments",
    content: [
      "**Making a Booking:** Appointments can be made by telephone, WhatsApp, or our online booking form. A booking is confirmed only when you receive explicit confirmation from our team (by call, WhatsApp, or email). Online booking requests are not confirmed until acknowledged by our staff.",
      "**Accuracy of Information:** You are responsible for providing accurate contact information, health details, and treatment preferences when booking. Diamond Key is not responsible for issues arising from incorrect information.",
      "**Walk-In Appointments:** Walk-in clients are welcome subject to therapist availability. We cannot guarantee immediate availability for walk-in clients, particularly during peak hours (evenings and weekends).",
      "**Group Bookings:** For groups of 5 or more, a minimum 72-hour advance booking is required. Group bookings may require a deposit to secure the reservation.",
    ],
  },
  {
    title: "3. Cancellation & Rescheduling Policy",
    content: [
      "We understand that plans change. Our cancellation policy is designed to be fair to both clients and therapists who reserve time for your appointments.",
      "**24+ Hours Notice:** Cancellations or rescheduling made at least 24 hours before your appointment: No charge. Your appointment will be rescheduled to a mutually convenient time at no penalty.",
      "**Less Than 24 Hours Notice:** Cancellations or rescheduling made within 24 hours of the scheduled appointment: A cancellation fee of 50% of the booked treatment price may be charged.",
      "**No-Show:** Failure to attend a confirmed appointment without any prior contact will result in a no-show fee equal to 100% of the booked treatment price. Repeated no-shows may result in a requirement to prepay future bookings.",
      "**Exceptions:** We exercise discretion for genuine emergencies, including medical emergencies, hospitalisation, or bereavement. Please contact us as early as possible if circumstances prevent you from attending.",
      "**How to Cancel:** Please call or WhatsApp us at " + siteConfig.contact.phoneDisplay + " to cancel or reschedule.",
    ],
  },
  {
    title: "4. Payment Terms",
    content: [
      "**Payment Methods:** We accept cash (AED), Visa, Mastercard, debit cards, and bank transfer. Payment is due at the time of service unless a pre-payment arrangement has been made.",
      "**Deposits:** For spa packages, couples treatments, and VIP experiences, we may require a 50% deposit at the time of booking, particularly for weekend and peak-hour slots. Deposits are fully refundable with 24+ hours notice.",
      "**Gift Vouchers:** Gift vouchers are valid for 6 months from the date of purchase and are non-refundable but transferable. The monetary value of a gift voucher may be redeemed against any treatment or package.",
      "**Pricing:** All prices are quoted in UAE Dirhams (AED) and are inclusive of applicable taxes. Prices are subject to change without notice. The price confirmed at the time of booking will be honoured for that appointment.",
      "**No Hidden Charges:** There are no additional mandatory charges beyond the quoted treatment price. Optional add-ons (additional products, extended time) are offered but not required.",
    ],
  },
  {
    title: "5. Health & Safety Requirements",
    content: [
      "**Health Questionnaire:** All clients are required to complete a brief health questionnaire before their first treatment and when health circumstances change. This information is used to ensure your safety and tailor the treatment appropriately.",
      "**Contraindications:** Certain medical conditions may contraindicate specific treatments. Our therapists reserve the right to modify or decline a treatment if they believe it presents a risk to the client's health. Common contraindications include active skin infections, fever, certain blood disorders, recent surgery, and acute cardiovascular conditions.",
      "**Pregnancy:** Prenatal massage is available from the second trimester. We do not perform massage during the first trimester. Please inform us of your pregnancy when booking.",
      "**Age Requirement:** You must be 18 years or older to receive spa treatments without parental consent. Clients aged 16–17 require written parental consent and a parent or guardian must be present.",
      "**Hygiene:** Clients are expected to arrive with a reasonable standard of personal hygiene. For body treatments, a shower is provided if required.",
      "**Disclosure Obligation:** You are responsible for disclosing any relevant medical conditions, allergies, medications, or recent surgeries before treatment. Diamond Key is not liable for adverse reactions resulting from undisclosed conditions.",
    ],
  },
  {
    title: "6. Client Conduct",
    content: [
      "Diamond Key is a professional therapeutic environment. All clients are expected to conduct themselves respectfully toward staff and other clients.",
      "**Zero Tolerance:** We have a zero-tolerance policy for sexual harassment, inappropriate requests, aggressive or threatening behaviour, discrimination, or intoxication. Any client exhibiting such behaviour will be asked to leave immediately and may be charged the full treatment fee.",
      "**Mobile Devices:** We ask that mobile phones be silenced or switched off in treatment areas and relaxation lounges to preserve the peaceful environment for all clients.",
      "**Punctuality:** Please aim to arrive 10 minutes before your scheduled appointment to complete any health forms and prepare for treatment. Late arrivals may result in a reduced treatment time, with full treatment charges still applicable.",
    ],
  },
  {
    title: "7. Liability",
    content: [
      "**Personal Belongings:** Diamond Key is not responsible for loss or damage to personal belongings brought onto the premises. We recommend leaving valuables at home.",
      "**Treatment Outcomes:** Spa treatments are not a substitute for medical treatment. While we strive to deliver the highest quality treatments, individual results and experiences may vary. Diamond Key does not guarantee specific health outcomes from treatments.",
      "**Allergic Reactions:** While we take every precaution to avoid allergic reactions and we review all known allergies during consultation, Diamond Key cannot be held liable for reactions to products used in treatments if you have not disclosed known allergies prior to your treatment.",
      "**Force Majeure:** We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, government-imposed restrictions, or public health emergencies.",
    ],
  },
  {
    title: "8. Intellectual Property",
    content: [
      "All content on this website, including text, images, graphics, logos, and design, is the property of Diamond Key and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content from this website without our prior written consent.",
    ],
  },
  {
    title: "9. Governing Law",
    content: [
      "These Terms of Service are governed by and construed in accordance with the laws of the Sultanate of Oman. Any disputes arising from these Terms shall be subject to the jurisdiction of the courts of Muscat, Oman.",
    ],
  },
  {
    title: "10. Contact",
    content: [
      "For questions about these Terms of Service, please contact us:",
      `Diamond Key · Al Khair Street, Seeb 522, Muscat, Oman\nPhone / WhatsApp: ${siteConfig.contact.phoneDisplay}`,
    ],
  },
];

export default function TermsPage() {
  const breadcrumbs = [{ name: "Terms of Service", href: "/terms" }];

  const renderContent = (text: string) => {
    if (text.includes("**")) {
      const parts = text.split(/\*\*(.*?)\*\*/g);
      return (
        <>
          {parts.map((part, i) =>
            i % 2 === 1 ? <strong key={i}>{part}</strong> : part
          )}
        </>
      );
    }
    return text;
  };

  return (
    <>
      <div className="bg-luxury-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <SectionLabel centered={false}>Legal</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mt-2 mb-3">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: January 2025 · Diamond Key, Seeb, Muscat, Oman</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="luxury-card p-6 mb-10 border-l-4 border-gold-400">
              <p className="text-gray-600 leading-relaxed text-sm">
                Please read these Terms of Service carefully before booking an appointment or using Diamond Key&apos;s services.
                These terms govern your use of our spa services and website. By proceeding with a booking,
                you acknowledge that you have read, understood, and agreed to these terms.
              </p>
            </div>

            <nav className="mb-10 p-5 bg-gray-50 rounded-2xl">
              <h2 className="font-bold text-gray-800 mb-3 text-sm">Contents</h2>
              <ol className="space-y-1">
                {sections.map((s) => (
                  <li key={s.title}>
                    <a href={`#${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-sm text-gold-600 hover:text-gold-700 hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title} id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                  <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">{section.title}</h2>
                  <div className="space-y-3">
                    {section.content.map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                        {renderContent(para)}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400">Governed by the laws of the Sultanate of Oman.</p>
              <div className="flex gap-3">
                <Link href="/privacy-policy" className="text-sm text-gold-500 hover:text-gold-600 font-medium">Privacy Policy</Link>
                <Link href="/contact" className="text-sm text-gold-500 hover:text-gold-600 font-medium">Contact Us</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
