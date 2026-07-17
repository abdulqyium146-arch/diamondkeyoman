import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Car Lockout Seeb, Oman | Keys Locked in Car — Diamond Key Muscat",
  description:
    "Keys locked inside your car in Seeb, Muscat? We open vehicles without damage. All car brands. Professional tools. From OMR 15. Call Diamond Key: +968 9097 4040.",
  keywords: [
    "car lockout Seeb", "keys locked in car Muscat", "car lockout service Oman",
    "locked keys in car Seeb", "open car door Muscat", "emergency car lockout Oman",
  ],
  alternates: { canonical: `${siteConfig.url}/services/car-lockout` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Car Lockout",
  description: "Emergency car lockout service in Seeb, Muscat, Oman. Professional vehicle entry without damage.",
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
  offers: { "@type": "Offer", price: 15, priceCurrency: "OMR", availability: "https://schema.org/InStock" },
};

export default function CarLockoutPage() {
  return (
    <ServicePageTemplate
      name="Car Lockout"
      category="Emergency"
      tagline="Keys locked inside your car? Don't break a window — call Diamond Key. We open vehicles safely without damage."
      description={[
        "Accidentally locking your keys inside your car is more common than you think. Before you resort to breaking a window — which causes expensive damage — call Diamond Key. Our technicians use professional automotive entry tools to open your car door without causing any damage to the glass, paint, weatherstripping, or interior.",
        "We use a set of specialised tools including long-reach rods, wedge sets, and air bag systems to safely create just enough gap at the door frame to reach the internal lock mechanism or control buttons. This technique is used by professional auto locksmiths worldwide and leaves zero visible damage.",
        "We handle all vehicle types: sedans, SUVs, 4x4s, vans, pickups, and commercial vehicles from all major manufacturers. If your car is in Seeb or the surrounding Muscat areas, contact us during our opening hours.",
      ]}
      duration="15–30 min"
      priceFrom={15}
      priceTo={30}
      benefits={[
        "Zero damage to car body or glass",
        "All vehicle makes and models",
        "Professional automotive tools",
        "Sedans, SUVs, vans & trucks",
        "Quick 15–30 minute service",
        "Transparent flat pricing",
      ]}
      whatToExpect={[
        "Call or WhatsApp Diamond Key immediately on +968 9097 4040 and explain the situation.",
        "We confirm your vehicle location and ask for your car make and model to select the right tools.",
        "Our technician arrives or asks you to bring the vehicle to our Seeb shop.",
        "Using wedge and long-reach tools, we create a safe gap in the door frame to reach the internal lock.",
        "The door is opened without damage. We verify the car is undamaged before finishing. Total service time: 15–30 minutes.",
      ]}
      whoIsItFor={[
        "Anyone who accidentally locked keys inside the car",
        "Parents who have locked keys inside with the engine running",
        "Those whose key broke in the car door lock",
        "Fleet operators with locked company vehicles",
        "Drivers whose remote key fob failed to unlock the car",
      ]}
      preparation={[
        "Call us immediately on +968 9097 4040",
        "Stay with the vehicle and keep it in a safe, accessible location",
        "Have your car registration or ID ready",
        "Do not attempt to force the door or break a window",
      ]}
      aftercare={[
        "Check the door seals and frame are undamaged before driving off",
        "If your key fob failed and caused the lockout, consider a battery replacement or fob repair",
        "Get a spare key cut to prevent future lockouts — we can do it at our Seeb shop",
        "Consider a magnetic key box attached under the chassis as a backup for emergencies",
      ]}
      faqs={[
        { question: "Can you open any car without damaging it?", answer: "We can open virtually all standard car models non-destructively using professional automotive entry tools. In rare cases of very unusual vehicle configurations, alternatives may be discussed." },
        { question: "How much does a car lockout service cost?", answer: "Car lockout service starts from OMR 15–30 depending on vehicle type and lock complexity. We provide an upfront price before starting." },
        { question: "How long does it take to open a locked car?", answer: "Typically 15–30 minutes from arrival. We work methodically to ensure no damage is caused to your vehicle." },
        { question: "Do I need to come to your shop or will you come to me?", answer: "Call us on +968 9097 4040 to arrange. We can advise based on your location and our availability during opening hours." },
        { question: "What if my key is broken inside the lock?", answer: "A broken key inside the lock is a separate issue — it's called key extraction. We handle this too. Call us to discuss your specific situation." },
      ]}
      relatedServices={[
        { name: "Car Key Copying", href: "/services/car-key-copying" },
        { name: "Car Key Programming", href: "/services/car-key-programming" },
        { name: "Key Fob Creation", href: "/services/key-fob-creation" },
        { name: "Building Lockout", href: "/services/building-lockout" },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Car Lockout", href: "/services/car-lockout" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
