import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Key Cutting Muscat | Car & Building Key Cutting Service — Diamond Key Seeb",
  description:
    "Professional key cutting in Muscat, Oman. Car keys from OMR 2, building keys from OMR 0.5. All key types. Fast, accurate, ready in minutes. Diamond Key Seeb. Call +968 9097 4040.",
  keywords: [
    "key cutting Muscat", "key cutting Oman", "key cutting Seeb",
    "car key cutting Muscat", "house key cutting Oman", "spare key Muscat",
  ],
  alternates: { canonical: `${siteConfig.url}/key-cutting-muscat` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Key Cutting Muscat",
  description: "Professional car and building key cutting in Muscat, Oman.",
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

export default function KeyCuttingMuscatPage() {
  return (
    <LocalSeoTemplate
      heading="Key Cutting Service in Muscat, Oman"
      subheading="Car keys from OMR 2 · Building keys from OMR 0.5 · All key types · Ready in minutes"
      areaName="Muscat"
      intro={[
        "Diamond Key provides professional precision key cutting for all car and building key types in Muscat. Our shop on Al Khair Street, Seeb is equipped with CNC key-cutting machines that deliver sub-millimetre accuracy on every cut.",
        "We cut standard door keys, deadbolt keys, cylinder keys, padlock keys, cabinet keys, car keys (standard blade), and most security key profiles. Bring the original key and we will have your duplicate ready in 5–20 minutes.",
        "Building key cutting from OMR 0.5. Car key cutting (blade only) from OMR 2. For car keys that also need chip programming, see our car key programming service.",
      ]}
      distance="10–20 min"
      transitInfo={[
        "From Seeb — 5 min",
        "From Bausher — 15 min",
        "From Mawaleh — 12 min",
        "From Muscat Airport — 20 min",
      ]}
      nearbyLandmarks={[
        "Seeb — 5 min",
        "Bausher — 15 min",
        "Mawaleh — 12 min",
        "Al Khuwair — 20 min",
      ]}
      directions="Our key cutting shop is at Al Khair Street, Seeb 522, Muscat. Open daily from 4:30 PM. Drive to Seeb and find us on Al Khair Street — parking available outside."
      uniqueContent={[
        "Muscat residents across Seeb, Bausher, Mawaleh, and other areas visit Diamond Key for reliable key cutting. We stock hundreds of key blank profiles for residential, commercial, and automotive applications.",
        "Precision matters in key cutting. An inaccurate cut results in a key that doesn't turn smoothly or wears down the lock. Our CNC machines ensure your duplicate key is an exact match to the original, every time.",
      ]}
      faqs={[
        { question: "How much does key cutting cost in Muscat?", answer: "Building keys from OMR 0.5–2. Car key blades from OMR 2–5. Prices depend on key type and blank required." },
        { question: "How long does key cutting take?", answer: "Building keys 5–10 minutes. Car key blades 10–15 minutes. We cut while you wait." },
        { question: "Do you cut security keys in Muscat?", answer: "Yes. We handle most security key profiles. Call +968 9097 4040 to confirm availability for your specific key." },
        { question: "What is the difference between key cutting and key programming?", answer: "Key cutting shapes the metal blade to match your lock. Key programming (for car keys) pairs the electronic chip to your vehicle's ECU. Many car keys need both — we handle both services." },
      ]}
      reviews={[
        { author: "Ahmed Al Balushi", rating: 5, service: "Car Key Copying", text: "Spare key for my Toyota Camry ready in 10 minutes. Accurate cut, honest price." },
        { author: "Fatima Al Maamari", rating: 4, service: "Building Key Copying", text: "Three house keys copied quickly. All work perfectly in my locks." },
        { author: "Yousuf Al Saadi", rating: 4, service: "Car Key Copying", text: "Good key cutting service in Muscat. Accurate and fast." },
        { author: "Hamed Al Busaidi", rating: 5, service: "Building Key Copying", text: "Perfect duplicate keys. Professional shop and reasonable prices." },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Key Cutting Muscat", href: "/key-cutting-muscat" },
      ]}
      schemaJson={schemaJson}
      keywords={["key cutting Muscat", "key cutting Oman", "spare key Muscat"]}
    />
  );
}
