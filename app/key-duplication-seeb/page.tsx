import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Key Duplication Seeb | Car & Building Key Copying — Diamond Key Muscat",
  description:
    "Professional key duplication in Seeb, Muscat. Car keys from OMR 2, building keys from OMR 0.5. All key types. Fast turnaround. Diamond Key on Al Khair Street, Seeb. Call +968 9097 4040.",
  keywords: [
    "key duplication Seeb", "key copying Seeb", "car key duplicate Seeb",
    "house key copy Muscat", "spare key Seeb Oman", "key cutting Seeb",
  ],
  alternates: { canonical: `${siteConfig.url}/key-duplication-seeb` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Key Duplication Seeb",
  description: "Professional car and building key duplication service in Seeb, Muscat, Oman.",
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
  areaServed: { "@type": "City", name: "Seeb, Muscat, Oman" },
};

export default function KeyDuplicationSeebPage() {
  return (
    <LocalSeoTemplate
      heading="Key Duplication in Seeb, Muscat"
      subheading="Car keys from OMR 2 · Building keys from OMR 0.5 · Ready in minutes · All key types"
      areaName="Seeb"
      intro={[
        "Diamond Key is Seeb's go-to key duplication shop — located on Al Khair Street, Seeb 522. We cut car keys, building keys, house keys, office keys, padlock keys, and all standard and security key profiles while you wait.",
        "Our professional CNC key-cutting machines deliver sub-millimetre accuracy. Most standard keys are duplicated in 5–10 minutes. Car key copies take 10–20 minutes. Bring the original key and walk out with a perfect duplicate.",
        "We are open daily from 4:30 PM. No appointment needed for key copying — just walk in with your original key.",
      ]}
      distance="5 min"
      transitInfo={[
        "Central Seeb — 5 min drive",
        "Seeb souq area — 8 min drive",
        "Muscat International Airport — 18 min drive",
        "Al Khuwair — 20 min drive",
      ]}
      nearbyLandmarks={[
        "Central Seeb — 5 min",
        "Seeb Souq — 8 min",
        "Airport Road — 10 min",
        "Bausher — 15 min",
      ]}
      directions="Diamond Key is on Al Khair Street, Seeb 522, Muscat. From central Seeb, head towards Al Khair Street — we are easily accessible by car with parking available outside the shop."
      uniqueContent={[
        "Seeb is one of Muscat's largest residential areas, and Diamond Key has been serving Seeb residents for over 7 years. Whether you need a spare car key, a copy of your home or office key, or a security key duplicate, we handle it all from our Al Khair Street shop.",
        "We stock a comprehensive range of key blanks for all standard and security key profiles common in Oman — brass, nickel, steel, and aluminum. Our machines handle both standard and laser-cut key profiles.",
      ]}
      faqs={[
        { question: "How much does key duplication cost in Seeb?", answer: "Car keys cost OMR 2–5 depending on type. Building and house keys cost OMR 0.5–2. We quote before cutting." },
        { question: "How long does key cutting take?", answer: "Building keys take 5–10 minutes. Car keys take 10–20 minutes. We cut keys while you wait." },
        { question: "Can you duplicate security keys?", answer: "Yes. We handle most security key profiles. Call +968 9097 4040 with your key brand to confirm." },
        { question: "Do you need the original key to make a copy?", answer: "Yes, bring the original. For some car keys we may be able to cut by code — call to discuss." },
      ]}
      reviews={[
        { author: "Ahmed Al Balushi", rating: 5, service: "Car Key Copying", text: "Fast and accurate key cutting in Seeb. Spare key for my Toyota ready in 10 minutes at OMR 3. Highly recommended." },
        { author: "Fatima Al Maamari", rating: 4, service: "Building Key Copying", text: "Three house keys copied perfectly. Open in the evening which suits my schedule." },
        { author: "Yousuf Al Saadi", rating: 4, service: "Car Key Copying", text: "Good service, accurate key, honest price. Will return." },
        { author: "Hamed Al Busaidi", rating: 5, service: "Building Key Copying", text: "Quick and professional. Keys work perfectly in all my doors." },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Key Duplication Seeb", href: "/key-duplication-seeb" },
      ]}
      schemaJson={schemaJson}
      keywords={["key duplication Seeb", "key copying Muscat", "spare key Oman"]}
    />
  );
}
