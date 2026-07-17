import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Locksmith Bausher | Key Duplication & Locksmith Near Bausher — Diamond Key",
  description:
    "Locksmith and key duplication serving Bausher, Muscat, Oman. 15 min from Bausher to Diamond Key in Seeb. Car keys, lock rekeying, lockout service. Call +968 9097 4040.",
  keywords: [
    "locksmith Bausher", "key duplication Bausher", "locksmith near Bausher Oman",
    "car key Bausher Muscat", "lock rekeying Bausher", "lockout Bausher Oman",
  ],
  alternates: { canonical: `${siteConfig.url}/locksmith-bausher` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Locksmith Bausher",
  description: "Locksmith and key services for Bausher customers — Diamond Key, Seeb, Muscat.",
  provider: {
    "@type": "Locksmith",
    name: siteConfig.fullName,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      addressCountry: "OM",
    },
  },
  areaServed: [
    { "@type": "City", name: "Bausher, Muscat, Oman" },
    { "@type": "City", name: "Seeb, Muscat, Oman" },
  ],
};

export default function LocksmithBausherPage() {
  return (
    <LocalSeoTemplate
      heading="Locksmith Serving Bausher, Muscat"
      subheading="15 min from Bausher to Diamond Key · Key duplication, programming, lockout & rekeying"
      areaName="Bausher"
      intro={[
        "Diamond Key serves customers from Bausher at our professional locksmith and key shop on Al Khair Street, Seeb — approximately 15 minutes from Bausher by car. We provide all key and locksmith services: car key copying, building key copying, car key programming, key fob creation, lock rekeying, and lockout services.",
        "Many Bausher residents choose Diamond Key because we combine professional-grade equipment with honest, transparent pricing. We quote before we start — no surprises.",
        "Open daily from 4:30 PM. Call +968 9097 4040 to confirm your service before visiting from Bausher.",
      ]}
      distance="15 min"
      transitInfo={[
        "Bausher to Seeb — 15 min via main highway",
        "Al Khuwair to Seeb — 20 min",
        "Mawaleh to Seeb — 12 min",
        "Ghubrah to Seeb — 18 min",
      ]}
      nearbyLandmarks={[
        "Bausher — 15 min drive",
        "Al Khuwair — 20 min",
        "Mawaleh — 12 min",
        "Ghubrah — 18 min",
      ]}
      directions="From Bausher, head towards Seeb via the Sultan Qaboos Street or the main Muscat-Seeb highway. Diamond Key is on Al Khair Street, Seeb 522. The drive from Bausher takes approximately 15 minutes."
      uniqueContent={[
        "Bausher is one of Muscat's well-established residential and commercial districts. Diamond Key regularly serves Bausher residents for car key cutting, building key duplication, and car key programming — particularly for those who want professional service without dealership prices.",
        "If you are locked out of your car or home in Bausher, call us immediately on +968 9097 4040. We can advise the best course of action based on your situation and our availability during opening hours.",
      ]}
      faqs={[
        { question: "How far is Diamond Key from Bausher?", answer: "Approximately 15 minutes by car via the main Muscat-Seeb highway. Our address is Al Khair Street, Seeb 522, Muscat." },
        { question: "What services do Bausher customers use most?", answer: "Car key copying, car key programming, and lock rekeying are popular with Bausher customers. All our services are available to Bausher residents." },
        { question: "Do you offer on-site service in Bausher?", answer: "Call +968 9097 4040 to discuss. We may be able to attend your location in some cases during opening hours. Visiting our Seeb shop is often faster." },
        { question: "What are your prices for Bausher customers?", answer: "Same prices as all customers: car key copying from OMR 2, key programming from OMR 15, lock rekeying from OMR 10. We quote before starting." },
      ]}
      reviews={[
        { author: "Khalid Al Rawahi", rating: 5, service: "Car Key Programming", text: "Drove from Bausher to Diamond Key in Seeb. New Nissan key programmed perfectly. Worth the 15-minute drive." },
        { author: "Hamed Al Busaidi", rating: 5, service: "Lock Rekeying", text: "Came from Bausher to rekey my home locks. Fast, professional and affordable." },
        { author: "Ibrahim Al Amri", rating: 5, service: "Car Key Programming", text: "Short drive from Bausher. Key programming was excellent. Saved a lot compared to the dealer." },
        { author: "Omar Al Farsi", rating: 4, service: "Building Key Copying", text: "Easy drive from Bausher. Keys cut accurately. Good service." },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Locksmith Bausher", href: "/locksmith-bausher" },
      ]}
      schemaJson={schemaJson}
      keywords={["locksmith Bausher", "key duplication Bausher", "locksmith near Bausher"]}
    />
  );
}
