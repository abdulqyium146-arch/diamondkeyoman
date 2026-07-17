import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Car Key Copying in Seeb, Oman | Diamond Key — Duplicate Car Keys While You Wait",
  description:
    "Precision car key duplication in Seeb, Muscat. All makes and models. Fast 10-minute service starting from OMR 2. Spare car key cut while you wait at Diamond Key on Al Khair Street, Seeb.",
  keywords: [
    "car key copying Seeb", "car key duplication Muscat", "spare car key Oman",
    "duplicate car key Seeb", "car key cutting Muscat", "car key copy near me",
  ],
  alternates: { canonical: `${siteConfig.url}/services/car-key-copying` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Car Key Copying",
  description: "Professional car key duplication service in Seeb, Muscat, Oman. Precision-cut spare keys for all makes and models.",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
    },
  },
  areaServed: { "@type": "City", name: "Muscat, Oman" },
  offers: { "@type": "Offer", price: 2, priceCurrency: "OMR", availability: "https://schema.org/InStock" },
};

export default function CarKeyCopyingPage() {
  return (
    <ServicePageTemplate
      name="Car Key Copying"
      category="Key Duplication"
      tagline="Precision-cut duplicate car keys for all makes and models — ready in 10 minutes in Seeb, Oman."
      description={[
        "Our car key copying service uses high-precision CNC key-cutting machines to produce duplicate keys that are dimensionally identical to your original. We stock key blanks for all major manufacturers including Toyota, Nissan, Honda, Hyundai, Kia, Mitsubishi, Suzuki, and more.",
        "A car key duplicate is essential for any vehicle owner — whether you need a spare for a family member, want a backup in case you lose your primary key, or simply want the peace of mind of having an extra. Standard car key copies (mechanical/non-transponder) take under 10 minutes.",
        "Note: Modern cars use transponder (chip) keys that require programming in addition to cutting. If your car was manufactured after the mid-1990s, contact us to confirm whether your key requires programming — this is a separate service at an additional cost.",
      ]}
      duration="10–20 min"
      priceFrom={2}
      priceTo={5}
      benefits={[
        "All car makes and models",
        "Precision CNC key cutting",
        "Ready while you wait",
        "Affordable OMR 2–5",
        "Spare key for emergencies",
        "Quality key blanks stocked",
      ]}
      whatToExpect={[
        "Bring your original car key to our shop on Al Khair Street, Seeb. No appointment needed.",
        "Our technician checks your key type and selects the correct blank from our stock.",
        "The key is cut on our precision CNC machine in under 5 minutes.",
        "We test the cut key in a reference lock or check the profile against the original before handing it over.",
        "You pay and leave with a working duplicate — the whole process takes 10–20 minutes.",
      ]}
      whoIsItFor={[
        "Car owners who want a spare key",
        "Families sharing a vehicle",
        "Anyone who has worn down their original key",
        "Landlords managing rental cars",
        "Those who have misplaced one of their keys",
      ]}
      preparation={[
        "Bring your original car key",
        "Know your vehicle make, model, and year",
        "No appointment necessary — walk in",
        "If your car has a chip key, tell us when you call",
      ]}
      aftercare={[
        "Test the new key in the door and ignition before leaving",
        "Keep the duplicate in a safe, separate location from the original",
        "Label it so you can identify which is the original and which is the spare",
        "Return to us if you notice any issues — we guarantee our cuts",
      ]}
      faqs={[
        { question: "How long does car key copying take?", answer: "Most standard car keys are cut in under 10 minutes. If your key requires programming (transponder/chip keys), add 30–60 minutes." },
        { question: "Can you copy all car key types?", answer: "We copy all standard mechanical car keys. For transponder/chip keys or remote keys, additional programming is required — ask us when you visit." },
        { question: "How much does car key copying cost in Oman?", answer: "Standard car key copying starts from OMR 2 and goes up to OMR 5 depending on the key blank type." },
        { question: "Do I need an appointment?", answer: "No appointment needed. Walk into our shop on Al Khair Street, Seeb, and we will serve you on the spot." },
        { question: "What if my new key doesn't work?", answer: "We test every key before you leave. If there is an issue, we will re-cut or adjust it at no extra charge." },
      ]}
      relatedServices={[
        { name: "Car Key Programming", href: "/services/car-key-programming" },
        { name: "Key Fob Creation", href: "/services/key-fob-creation" },
        { name: "Building Key Copying", href: "/services/building-key-copying" },
        { name: "Car Lockout", href: "/services/car-lockout" },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Car Key Copying", href: "/services/car-key-copying" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
