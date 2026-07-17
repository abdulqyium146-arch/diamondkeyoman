import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Locksmith Muscat | Professional Locksmith Services — Diamond Key Seeb",
  description:
    "Trusted locksmith services in Muscat, Oman. Lock rekeying, car lockout, building lockout, key programming. Diamond Key on Al Khair Street, Seeb. 4.0★ Google. Call +968 9097 4040.",
  keywords: [
    "locksmith Muscat", "locksmith Oman", "emergency locksmith Muscat",
    "lock rekeying Muscat", "lockout service Muscat", "professional locksmith Oman",
  ],
  alternates: { canonical: `${siteConfig.url}/locksmith-muscat` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Locksmith Muscat",
  description: "Professional locksmith services across Muscat, Oman — Diamond Key, Seeb.",
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
  areaServed: { "@type": "City", name: "Muscat, Oman" },
};

export default function LocksmithMuscatPage() {
  return (
    <LocalSeoTemplate
      heading="Locksmith Services in Muscat, Oman"
      subheading="Lock rekeying · Car lockout · Building lockout · Key programming · 4.0★ Google rated"
      areaName="Muscat"
      intro={[
        "Diamond Key is Muscat's trusted locksmith — serving the entire Muscat governorate from our shop on Al Khair Street, Seeb. We handle all professional locksmith work: lock rekeying, non-destructive lockout entry, car key programming, and key fob creation.",
        "With over 7 years in business and 51+ Google reviews, we have built a reputation across Muscat for honest pricing, professional tools, and reliable results. Our locksmiths use professional-grade equipment — not improvised methods — for every job.",
        "Whether you are locked out of your car in Bausher, need locks rekeyed in Al Khuwair, or want a new key programmed in Seeb — call Diamond Key on +968 9097 4040.",
      ]}
      distance="15–20 min"
      transitInfo={[
        "Seeb — 5 min from our shop",
        "Bausher — 15 min drive",
        "Al Khuwair — 20 min drive",
        "Mawaleh — 12 min drive",
      ]}
      nearbyLandmarks={[
        "Bausher — 15 min",
        "Al Khuwair — 20 min",
        "Mawaleh — 12 min",
        "Muscat Airport — 20 min",
      ]}
      directions="Diamond Key is at Al Khair Street, Seeb 522, Muscat. Seeb is easily reached from all areas of the Muscat governorate via the main highways. Parking available outside the shop."
      uniqueContent={[
        "Muscat's growing population needs reliable, professional locksmith services. Diamond Key fills that gap — offering everything from a simple OMR 0.5 key copy to full OBD car key programming and emergency lockout services.",
        "We serve all areas of Muscat including Seeb, Bausher, Mawaleh, Al Khuwair, Ghubrah, Wattayah, Qurm, and Ruwi. Call us to confirm availability for on-site service, or visit our Seeb shop directly from 4:30 PM.",
      ]}
      faqs={[
        { question: "Do you offer locksmith services across all of Muscat?", answer: "We are based in Seeb and serve customers across Muscat. Visit our shop or call to arrange on-site service in specific areas." },
        { question: "What locksmith services do you offer in Muscat?", answer: "Lock rekeying, car lockout, building lockout, car key programming, key fob creation, and all key duplication services." },
        { question: "How much does a locksmith call cost in Muscat?", answer: "Lockout service starts from OMR 10 (building) and OMR 15 (car). Rekeying from OMR 10. We quote before starting." },
        { question: "Are you available in the evenings in Muscat?", answer: "Yes. We open daily from 4:30 PM. Call +968 9097 4040 to confirm availability for your area." },
      ]}
      reviews={[
        { author: "Mohammed Al Hinai", rating: 5, service: "Car Lockout", text: "Locked my keys in my car in Muscat. Diamond Key opened it without a single scratch. Very professional." },
        { author: "Khalid Al Rawahi", rating: 5, service: "Car Key Programming", text: "New key programmed for my Nissan in Muscat — fraction of the dealer price. Works perfectly." },
        { author: "Nasser Al Shanfari", rating: 4, service: "Building Lockout", text: "Professional lockout service. Opened my office door without damage. Reasonable charge." },
        { author: "Ibrahim Al Amri", rating: 5, service: "Lock Rekeying", text: "Rekeyed my flat in Muscat after moving in. Fast, professional, and affordable." },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Locksmith Muscat", href: "/locksmith-muscat" },
      ]}
      schemaJson={schemaJson}
      keywords={["locksmith Muscat", "locksmith Oman", "professional locksmith Muscat"]}
    />
  );
}
