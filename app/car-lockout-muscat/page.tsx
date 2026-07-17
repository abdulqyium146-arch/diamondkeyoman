import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Car Lockout Muscat | Keys Locked in Car Oman — Diamond Key +968 9097 4040",
  description:
    "Keys locked in your car in Muscat, Oman? Diamond Key opens vehicles without damage. All car brands. Professional tools. From OMR 15. Call +968 9097 4040 — Diamond Key, Seeb.",
  keywords: [
    "car lockout Muscat", "keys locked in car Oman", "car lockout Seeb",
    "open car door Muscat", "locked keys car Oman", "vehicle lockout Muscat",
  ],
  alternates: { canonical: `${siteConfig.url}/car-lockout-muscat` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Car Lockout Muscat",
  description: "Professional car lockout service in Muscat, Oman. Open vehicles without damage.",
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
  offers: { "@type": "Offer", price: 15, priceCurrency: "OMR" },
};

export default function CarLockoutMuscatPage() {
  return (
    <LocalSeoTemplate
      heading="Car Lockout Service in Muscat, Oman"
      subheading="Keys locked in your car? Call +968 9097 4040 — we open vehicles without damage from OMR 15"
      areaName="Muscat"
      intro={[
        "Locked your keys inside the car in Muscat? Before you break a window — which causes expensive damage — call Diamond Key on +968 9097 4040. We use professional automotive entry tools to open your vehicle without any damage to the paint, glass, weatherstripping, or interior.",
        "Our technicians use wedge sets, air bag tools, and long-reach rods to create a safe, controlled gap in the door frame to reach the internal lock or control buttons. This technique leaves zero visible damage and is used by professional auto locksmiths worldwide.",
        "We handle all vehicle types — sedans, SUVs, 4x4s, vans, and pickups from all major manufacturers. Car lockout service in Muscat costs OMR 15–30 depending on vehicle type.",
      ]}
      distance="10–20 min"
      transitInfo={[
        "Seeb — 5 min from our shop",
        "Bausher — 15 min drive",
        "Mawaleh — 12 min drive",
        "Al Khuwair — 20 min drive",
      ]}
      nearbyLandmarks={[
        "Seeb — 5 min",
        "Bausher — 15 min",
        "Mawaleh — 12 min",
        "Al Khuwair — 20 min",
      ]}
      directions="Diamond Key is at Al Khair Street, Seeb 522, Muscat. For car lockouts across Muscat, call +968 9097 4040 first — we can advise whether to bring the vehicle to our shop or whether on-site service is possible in your area."
      uniqueContent={[
        "Car lockouts happen all across Muscat — in car parks, outside homes, at petrol stations, and in shopping centre car parks. Diamond Key has handled car lockout situations in Seeb, Bausher, Mawaleh, Al Khuwair, Ghubrah, and other Muscat areas.",
        "Do not attempt to use a coat hanger or any improvised tool to open your car door — modern vehicles have sophisticated door mechanisms that can be damaged by incorrect tools. Call us instead and we will open it safely with the right equipment.",
      ]}
      faqs={[
        { question: "How much does car lockout service cost in Muscat?", answer: "OMR 15–30 depending on vehicle type. We quote before starting." },
        { question: "Will you damage my car opening it?", answer: "No. We use professional automotive entry tools that cause zero damage to paint, glass, or weatherstripping." },
        { question: "How long does it take to open a locked car?", answer: "Typically 15–30 minutes from when we attend to your vehicle." },
        { question: "Do you come to my location in Muscat?", answer: "Call +968 9097 4040 to discuss. We may attend certain locations during opening hours. Confirm first." },
      ]}
      reviews={[
        { author: "Mohammed Al Hinai", rating: 5, service: "Car Lockout", text: "Locked my keys in my car. Diamond Key opened it without a single scratch. Professional tools and zero damage. Very grateful." },
        { author: "Saif Al Wahaibi", rating: 5, service: "Car Lockout", text: "Quick and professional. Opened in Muscat without any damage. Reasonable charge." },
        { author: "Omar Al Farsi", rating: 4, service: "Car Lockout", text: "Good service. Technician knew what he was doing. Price was fair." },
        { author: "Yousuf Al Saadi", rating: 4, service: "Car Lockout", text: "Helpful team. Opened my car quickly and correctly." },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Car Lockout Muscat", href: "/car-lockout-muscat" },
      ]}
      schemaJson={schemaJson}
      keywords={["car lockout Muscat", "keys locked in car Oman", "vehicle lockout Seeb"]}
    />
  );
}
