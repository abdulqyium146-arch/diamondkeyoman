import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Car Key Programming Oman | All Brands — Diamond Key Seeb, Muscat",
  description:
    "Professional car key programming in Oman. Toyota, Nissan, Honda, BMW, Hyundai & more. OBD key pairing, transponder programming, remote key fob. From OMR 15. Call +968 9097 4040.",
  keywords: [
    "car key programming Oman", "car key programming Muscat", "transponder key Oman",
    "immobiliser key programming Seeb", "car key reprogramming Muscat", "OBD key Oman",
  ],
  alternates: { canonical: `${siteConfig.url}/car-key-programming-oman` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Car Key Programming Oman",
  description: "Professional car key and remote key programming for all brands in Oman.",
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
  areaServed: { "@type": "Country", name: "Oman" },
};

export default function CarKeyProgrammingOmanPage() {
  return (
    <LocalSeoTemplate
      heading="Car Key Programming in Oman"
      subheading="All major brands · OEM diagnostic tools · From OMR 15 · 80% cheaper than dealers"
      areaName="Muscat"
      intro={[
        "Diamond Key provides professional car key programming for all major vehicle brands available in Oman — Toyota, Nissan, Honda, Mitsubishi, Hyundai, Kia, Land Rover, GMC, Chevrolet, BMW, Mercedes-Benz, and more.",
        "Modern vehicles use immobiliser chips and transponders that must be electronically paired to the car's ECU before the engine will start. We use OEM-grade diagnostic equipment to perform this programming — the same quality tools used by dealerships — at a fraction of the cost.",
        "Car key programming costs OMR 15–50 depending on the vehicle make and model. Programming takes 30–60 minutes. Call us on +968 9097 4040 with your car make, model, and year for a specific quote.",
      ]}
      distance="varies"
      transitInfo={[
        "Seeb residents — 5 min to our shop",
        "Bausher customers — 15 min drive",
        "Mawaleh — 12 min drive",
        "Airport Road customers — 15 min",
      ]}
      nearbyLandmarks={[
        "Seeb — 5 min",
        "Bausher — 15 min",
        "Mawaleh — 12 min",
        "Muscat Airport — 20 min",
      ]}
      directions="Our shop is on Al Khair Street, Seeb 522, Muscat. Accessible from all areas of the Muscat governorate. Call +968 9097 4040 for directions from your location."
      uniqueContent={[
        "Dealer prices for key programming in Oman can be very high. Diamond Key offers the same quality programming at significantly lower cost — saving customers typically 70–80% compared to brand dealerships.",
        "We handle both key cutting and programming in one visit. Bring your new key blank or let us source the right blank for your vehicle. Full central locking, remote, and engine immobiliser functions are programmed and tested before you leave.",
      ]}
      faqs={[
        { question: "Which car brands can you program in Oman?", answer: "Toyota, Nissan, Honda, Mitsubishi, Hyundai, Kia, Land Rover, GMC, Chevrolet, BMW, Mercedes-Benz and more. Call to confirm your specific model." },
        { question: "How much does car key programming cost in Oman?", answer: "OMR 15–50 depending on the brand and model. We provide a quote before starting." },
        { question: "How long does programming take?", answer: "30–60 minutes typically. Some vehicles may require longer for complex OBD procedures." },
        { question: "Is your programming as good as the dealer?", answer: "Yes. We use OEM-grade diagnostic tools. The result is identical to a dealer-programmed key." },
      ]}
      reviews={[
        { author: "Khalid Al Rawahi", rating: 5, service: "Car Key Programming", text: "Lost my Nissan Patrol key. Diamond Key programmed a new one for much less than the dealer quoted. Works perfectly." },
        { author: "Ibrahim Al Amri", rating: 5, service: "Car Key Programming", text: "New key for my Land Cruiser — engine starts, remote works, everything perfect. Very happy." },
        { author: "Ali Al Harthi", rating: 5, service: "Key Fob Creation", text: "New fob for my GMC Yukon. All functions work. Affordable compared to dealer price." },
        { author: "Salim Al Kalbani", rating: 4, service: "Key Fob Creation", text: "Replacement fob for Mitsubishi Pajero. Good quality and professional service." },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Car Key Programming Oman", href: "/car-key-programming-oman" },
      ]}
      schemaJson={schemaJson}
      keywords={["car key programming Oman", "transponder key Muscat", "key fob programming Oman"]}
    />
  );
}
