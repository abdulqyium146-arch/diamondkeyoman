import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Diamond Key Spa Dubai",
  description:
    "Read Diamond Key Spa's privacy policy. Learn how we collect, use, and protect your personal information in accordance with UAE data protection laws.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
  robots: { index: false },
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "When you book an appointment, contact us, or use our website, we may collect the following types of personal information:",
      "**Contact Information:** Your full name, phone number (including WhatsApp), email address, and any other contact details you provide when making a booking or sending an enquiry.",
      "**Health Information:** Details about medical conditions, allergies, sensitivities, or physical conditions that you voluntarily disclose during the pre-treatment health consultation. This information is collected solely to ensure your safety and tailor treatments appropriately.",
      "**Booking Records:** Details of treatments booked, dates, times, therapist preferences, and payment records.",
      "**Website Usage Data:** When you visit our website, we may collect technical data including your IP address, browser type, pages visited, time spent on pages, and referring website. This data is collected automatically and used only in aggregate for analytics purposes.",
      "**Communications:** The content of any messages, emails, WhatsApp communications, or reviews you send to us.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use your personal information for the following purposes:",
      "**Appointment Management:** To confirm, manage, modify, and follow up on spa appointments and bookings.",
      "**Health and Safety:** To review your health questionnaire before treatments and make appropriate modifications to ensure your safety and comfort.",
      "**Customer Service:** To respond to enquiries, resolve complaints, and provide customer support.",
      "**Service Improvement:** To understand how our services are used and to improve the quality of treatments and client experience.",
      "**Marketing Communications:** With your explicit consent only, to send promotional offers, newsletters, and special event notifications. You may opt out at any time.",
      "**Legal Compliance:** To comply with applicable UAE laws and regulations, including data retention requirements.",
    ],
  },
  {
    title: "3. How We Share Your Information",
    content: [
      "Diamond Key Spa does not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:",
      "**Service Providers:** We may share data with trusted third-party service providers (such as payment processors or booking software providers) who assist us in operating our business. These providers are contractually bound to protect your information and use it only for the purposes we specify.",
      "**Legal Requirements:** We may disclose your information if required to do so by law, court order, or governmental authority in the United Arab Emirates.",
      "**Business Transfer:** In the event of a merger, acquisition, or sale of business assets, client information may be transferred as part of that transaction, subject to equivalent privacy protections.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We take the security of your personal information seriously. We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration, disclosure, or destruction.",
      "Health information is stored securely and access is restricted to the therapists and management who require it for your care. We do not store complete payment card details — payment processing is handled by secure, PCI-compliant payment providers.",
      "While we take reasonable precautions, no method of data transmission or storage is 100% secure. We cannot guarantee absolute security of information transmitted to or stored on our systems.",
    ],
  },
  {
    title: "5. Health Information",
    content: [
      "We treat health information you provide during consultations with the highest level of confidentiality. This information is:",
      "Collected only for the purpose of ensuring safe and appropriate treatment.",
      "Accessed only by the therapists involved in your care and relevant management personnel.",
      "Stored securely and not disclosed to any third party without your explicit consent, except where required by law.",
      "You have the right to decline to provide health information. However, if you choose not to complete our health questionnaire, we may be unable to perform certain treatments for your safety.",
    ],
  },
  {
    title: "6. Cookies and Website Analytics",
    content: [
      "Our website uses cookies and similar tracking technologies to improve your browsing experience and analyse site traffic. Cookies are small text files stored on your device.",
      "**Essential Cookies:** Required for the website to function correctly. These cannot be disabled.",
      "**Analytics Cookies:** We use anonymous analytics tools (such as Google Analytics) to understand how visitors use our website. These cookies collect information in aggregate form that does not identify you personally.",
      "**Marketing Cookies:** With your consent, we may use cookies to deliver relevant advertising and track the effectiveness of our marketing campaigns.",
      "You can control or disable cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of our website.",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "Under applicable UAE data protection principles and international best practice, you have the following rights regarding your personal information:",
      "**Right of Access:** You may request a copy of the personal information we hold about you.",
      "**Right of Rectification:** You may ask us to correct any inaccurate or incomplete information.",
      "**Right of Erasure:** You may request that we delete your personal information, subject to any legal obligations we have to retain certain data.",
      "**Right to Restrict Processing:** You may request that we limit how we use your information in certain circumstances.",
      "**Right to Object:** You may object to the processing of your information for direct marketing purposes at any time.",
      "To exercise any of these rights, please contact us using the details provided in Section 10 of this policy.",
    ],
  },
  {
    title: "8. Data Retention",
    content: [
      "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy and to comply with applicable legal obligations.",
      "Booking records and health questionnaires are typically retained for 3 years from your last visit, unless you request earlier deletion and legal requirements permit it.",
      "Website analytics data is retained in aggregate form for up to 26 months.",
      "Communications (emails, WhatsApp messages) may be retained for up to 2 years for customer service and dispute resolution purposes.",
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      "Our spa services are intended for adults aged 18 and over. Clients aged 16–17 may receive certain treatments with parental or guardian consent and supervision. We do not knowingly collect personal information from children under 16.",
      "If you believe we have inadvertently collected information from a child under 16, please contact us immediately and we will take steps to delete that information.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us:",
      `**Diamond Key Spa**\nAl Qusais Industrial Area 5\nDubai, United Arab Emirates`,
      `**Phone / WhatsApp:** ${siteConfig.contact.phoneDisplay}`,
      `**Email:** ${siteConfig.contact.email}`,
      "We will respond to all data protection enquiries within 10 business days.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ name: "Privacy Policy", href: "/privacy-policy" }];

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
          <h1 className="text-3xl md:text-5xl font-serif font-bold mt-2 mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: January 2025 · Diamond Key Spa, Dubai, UAE</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="luxury-card p-6 mb-10 border-l-4 border-gold-400">
              <p className="text-gray-600 leading-relaxed">
                Diamond Key Spa (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information
                when you visit our spa, use our website, or contact us. Please read this policy carefully.
                By using our services, you agree to the practices described in this policy.
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
              <p className="text-xs text-gray-400">This policy is governed by the laws of the United Arab Emirates.</p>
              <div className="flex gap-3">
                <Link href="/terms" className="text-sm text-gold-500 hover:text-gold-600 font-medium">Terms of Service</Link>
                <Link href="/contact" className="text-sm text-gold-500 hover:text-gold-600 font-medium">Contact Us</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
