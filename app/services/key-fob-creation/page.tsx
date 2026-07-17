import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Key Fob Creation Seeb, Oman | New Remote Key Fob — Diamond Key Muscat",
  description:
    "Lost your car remote key fob? We create brand-new key fobs and programme them to your vehicle in Seeb, Muscat. All major brands. From OMR 20 — same day service.",
  keywords: [
    "key fob creation Seeb", "key fob replacement Muscat", "new car remote key Oman",
    "lost key fob Seeb", "remote key fob programming Muscat", "car remote key Oman",
  ],
  alternates: { canonical: `${siteConfig.url}/services/key-fob-creation` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "New Key Fob Creation",
  description: "Brand-new remote key fob creation and programming for vehicles in Seeb, Muscat, Oman.",
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
  offers: { "@type": "Offer", price: 20, priceCurrency: "OMR", availability: "https://schema.org/InStock" },
};

export default function KeyFobCreationPage() {
  return (
    <ServicePageTemplate
      name="Key Fob Creation"
      category="Key Programming"
      tagline="Brand-new remote key fobs created and programmed to your vehicle — a fraction of dealership prices."
      description={[
        "A remote key fob combines a mechanical blade key with an electronic remote control unit that operates your car's central locking, alarm, and boot release. If you have lost your fob or it has been damaged, getting a replacement from the official dealership can be very expensive.",
        "At Diamond Key, we source OEM-compatible fob shells and electronic components and programme them directly to your vehicle. This covers all standard remote functions: lock/unlock, boot release, alarm arm/disarm, and remote start (where supported by your vehicle).",
        "We handle most major brands including Toyota, Nissan, Honda, Hyundai, Kia, Mitsubishi, Chevrolet, Land Rover, and more. Our fob creation service is typically 60–80% cheaper than the dealership for equivalent quality.",
      ]}
      duration="45–90 min"
      priceFrom={20}
      priceTo={60}
      benefits={[
        "Full remote functions restored",
        "OEM-compatible components",
        "60–80% cheaper than dealers",
        "Lock, unlock & boot release",
        "Alarm integration included",
        "Same-day service available",
      ]}
      whatToExpect={[
        "Contact us before visiting to confirm we have the right fob shell and components for your vehicle make and model.",
        "Bring your vehicle and any remaining key or documentation to our Seeb shop.",
        "We fit the correct blade blank and programme the electronic transponder chip using OEM diagnostic tools.",
        "The remote buttons are programmed and tested for all functions: lock, unlock, boot, alarm.",
        "We hand over a fully functional fob and verify it works at range. Total time: 45–90 minutes.",
      ]}
      whoIsItFor={[
        "Anyone who has lost their car key fob completely",
        "Owners whose fob was stolen",
        "Second-hand car buyers with no fob",
        "Those with damaged fob shells",
        "Fleet owners needing multiple fobs",
      ]}
      preparation={[
        "Call or WhatsApp us with your car make, model, year, and fob type",
        "Bring your vehicle to our Seeb shop (key programming requires the car)",
        "Bring your vehicle registration and valid ID",
        "If you have any remaining key or fob, bring it along",
      ]}
      aftercare={[
        "Test all remote functions before leaving: lock, unlock, boot, alarm",
        "Replace the internal battery if the range seems short after a few months",
        "Avoid exposing the fob to water or extreme heat",
        "Keep it away from strong magnets or other electronic key fobs to avoid interference",
      ]}
      faqs={[
        { question: "Which car brands can you make a new fob for?", answer: "We create fobs for Toyota, Nissan, Honda, Hyundai, Kia, Mitsubishi, Chevrolet, Land Rover, BMW, and many more. Call us with your specific model to confirm." },
        { question: "How much does a new key fob cost?", answer: "New key fob creation ranges from OMR 20–60 depending on vehicle brand, model, and fob complexity. We provide an upfront quote before starting." },
        { question: "Is your fob quality as good as the dealership?", answer: "We use OEM-compatible components that match the specification of the original fob. The programming is done using the same diagnostic protocols used by authorised workshops." },
        { question: "What if I still have my car's original fob?", answer: "If you have an existing fob, we may be able to clone it rather than create a new one from scratch. This can be faster and cheaper — ask us when you contact us." },
        { question: "Do you need the car to make a new fob?", answer: "Yes. The key fob must be programmed in the presence of the vehicle to pair with the car's ECU and immobiliser system." },
      ]}
      relatedServices={[
        { name: "Car Key Programming", href: "/services/car-key-programming" },
        { name: "Car Key Copying", href: "/services/car-key-copying" },
        { name: "Car Lockout", href: "/services/car-lockout" },
        { name: "Lock Rekeying", href: "/services/lock-rekeying" },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Key Fob Creation", href: "/services/key-fob-creation" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
