import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Emergency Locksmith Seeb | Car & Building Lockout — Diamond Key Muscat",
  description:
    "Emergency locksmith in Seeb, Muscat. Locked out of your car or home? Call Diamond Key: +968 9097 4040. Non-destructive entry. Car lockout from OMR 15. Building lockout from OMR 10.",
  keywords: [
    "emergency locksmith Seeb", "locked out Seeb", "car lockout Seeb Oman",
    "building lockout Muscat", "lockout service Seeb", "urgent locksmith Muscat",
  ],
  alternates: { canonical: `${siteConfig.url}/emergency-locksmith-seeb` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Locksmith Seeb",
  description: "Emergency locksmith and lockout service in Seeb, Muscat, Oman.",
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

export default function EmergencyLocksmithSeebPage() {
  return (
    <LocalSeoTemplate
      heading="Emergency Locksmith in Seeb, Muscat"
      subheading="Locked out of your car or home? Call +968 9097 4040 — non-destructive entry from OMR 10"
      areaName="Seeb"
      intro={[
        "If you are locked out of your car or property in Seeb, call Diamond Key immediately on +968 9097 4040. We use professional non-destructive entry techniques to open your car or building lock without causing damage.",
        "Car lockout service: our technicians use wedge sets and long-reach rods to safely create a gap in your car door frame to reach the internal lock — zero damage to paint, glass, or weatherstripping. Car lockout from OMR 15.",
        "Building lockout service: we use professional lock picking and bypass tools to open your home, flat, or office door without drilling or damaging the lock or frame. Building lockout from OMR 10. We require ID and proof of residence before opening any property.",
      ]}
      distance="5 min"
      transitInfo={[
        "Central Seeb — 5 min",
        "Seeb residential areas — 5–10 min",
        "Al Maabela — 10 min",
        "Muscat Airport area — 15 min",
      ]}
      nearbyLandmarks={[
        "Central Seeb — 5 min",
        "Al Maabela — 10 min",
        "Airport Road — 12 min",
        "Bausher — 15 min",
      ]}
      directions="Diamond Key is on Al Khair Street, Seeb 522, Muscat. We open from 4:30 PM daily. For emergencies, call +968 9097 4040 first — we will advise based on your location and availability."
      uniqueContent={[
        "Seeb is a large residential area and lockouts happen regularly. Diamond Key has handled hundreds of lockout situations across Seeb — car lockouts in car parks, home lockouts, flat lockouts, and office lockouts. We know the area and respond professionally.",
        "We do not drill locks unless absolutely necessary as a last resort. Our first approach is always non-destructive — saving you from expensive lock replacement. We verify your identity before opening any property.",
      ]}
      faqs={[
        { question: "What should I do if I am locked out of my car in Seeb?", answer: "Call +968 9097 4040 immediately. Stay with the vehicle. Do not break a window — call us first." },
        { question: "How much does emergency lockout cost in Seeb?", answer: "Car lockout from OMR 15–30. Building lockout from OMR 10–20. We quote before starting." },
        { question: "Can you come to my location in Seeb?", answer: "Call us on +968 9097 4040 to discuss. We may be able to attend your location during opening hours (from 4:30 PM). Confirm with us first." },
        { question: "Do you damage locks when opening them?", answer: "No. We use non-destructive techniques exclusively. In the vast majority of cases your lock and door emerge completely undamaged." },
      ]}
      reviews={[
        { author: "Mohammed Al Hinai", rating: 5, service: "Car Lockout", text: "Locked in Seeb. Diamond Key opened my car door without a scratch. Professional tools, zero damage." },
        { author: "Nasser Al Shanfari", rating: 4, service: "Building Lockout", text: "Locked out of my office in Seeb. Opened professionally without damage to the lock." },
        { author: "Saif Al Wahaibi", rating: 5, service: "Car Lockout", text: "Very helpful. Called Diamond Key and they guided me through the process. Quick and professional." },
        { author: "Ali Al Harthi", rating: 5, service: "Building Lockout", text: "Efficient service for home lockout in Seeb. Reasonable price and professional approach." },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Emergency Locksmith Seeb", href: "/emergency-locksmith-seeb" },
      ]}
      schemaJson={schemaJson}
      keywords={["emergency locksmith Seeb", "car lockout Seeb", "building lockout Muscat"]}
    />
  );
}
