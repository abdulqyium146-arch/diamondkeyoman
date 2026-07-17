import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Car Key Programming Seeb, Oman | Transponder & Remote Key Programming — Diamond Key",
  description:
    "Professional car key programming in Seeb, Muscat. Toyota, Nissan, Honda, Hyundai, BMW, Land Rover & more. Digital transponder programming from OMR 15. Same-day service.",
  keywords: [
    "car key programming Seeb", "transponder key programming Muscat", "remote key programming Oman",
    "car key programming Oman", "chip key programming Muscat", "immobiliser programming Seeb",
  ],
  alternates: { canonical: `${siteConfig.url}/services/car-key-programming` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Car Key Programming",
  description: "Digital car key programming service in Seeb, Muscat, Oman. Covers Toyota, Nissan, Honda, Hyundai, BMW, Land Rover and more.",
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

export default function CarKeyProgrammingPage() {
  return (
    <ServicePageTemplate
      name="Car Key Programming"
      category="Key Programming"
      tagline="Digital transponder and remote key programming for all major vehicle brands — at a fraction of dealership cost."
      description={[
        "Modern vehicles manufactured from the mid-1990s onwards use transponder chips embedded in the key head. The car's ECU only allows the engine to start when it recognises the programmed chip — this is the immobiliser system. If you have a new key cut without programming, it will fit the lock but the engine won't start.",
        "At Diamond Key, we use OEM-grade diagnostic equipment and key programmer tools to pair new keys with your vehicle's immobiliser system. This covers chip programming, remote central locking, and boot/trunk release. We handle most major brands including Toyota, Nissan, Honda, Hyundai, Kia, Mitsubishi, Chevrolet, BMW, and Land Rover.",
        "Our prices are typically 60–80% lower than official dealership rates for the same quality and outcome. We program the key on-site at our Seeb shop — typically within 30–60 minutes.",
      ]}
      duration="30–60 min"
      priceFrom={15}
      priceTo={50}
      benefits={[
        "All major car brands supported",
        "OEM-grade programming equipment",
        "Engine start guaranteed",
        "Central locking programmed",
        "60–80% cheaper than dealers",
        "Same-day completion",
      ]}
      whatToExpect={[
        "Contact us by phone or WhatsApp with your car make, model, and year so we can confirm compatibility and prepare the right equipment.",
        "Bring your car (and at least one working key if you still have one) to our Seeb shop.",
        "Our technician connects OEM diagnostic tools to your car's OBD-II port to read the immobiliser configuration.",
        "We program the new transponder chip to match your car's ECU coding.",
        "We test the new key — engine start, central locking, boot release — before handing over. Total time: 30–60 minutes.",
      ]}
      whoIsItFor={[
        "Owners who need a spare programmed key",
        "Those who have a cut key that won't start the car",
        "Anyone who lost a key and needs a new one",
        "Second-hand car buyers needing fresh key programming",
        "Fleet managers needing multiple keys programmed",
      ]}
      preparation={[
        "Call or WhatsApp us with your car details before visiting",
        "Bring your vehicle registration and valid ID",
        "Bring at least one existing working key if you have one",
        "Bring the car — key programming must be done in the vehicle",
      ]}
      aftercare={[
        "Test engine start, all door locks, and boot release before leaving",
        "Keep the programmed key away from strong magnetic fields",
        "Do not submerge key fobs in water — keep the electronic components dry",
        "If the remote stops working after a few weeks, the battery may need replacing",
      ]}
      faqs={[
        { question: "Which car brands can you programme keys for?", answer: "We programme keys for Toyota, Nissan, Honda, Hyundai, Kia, Mitsubishi, Chevrolet, Land Rover, BMW, and more. Call us with your specific model to confirm." },
        { question: "Do I need to bring the car for key programming?", answer: "Yes. Key programming requires the vehicle to be present so our equipment can communicate with the car's ECU system." },
        { question: "How much does car key programming cost?", answer: "Programming ranges from OMR 15–50 depending on the vehicle make, model, and key type. We quote upfront before starting." },
        { question: "Can you programme a key if I have no original?", answer: "In most cases, yes — we can use the OBD port or other methods. However, some vehicles with very high-security systems may require the VIN and proof of ownership. Call us to discuss." },
        { question: "How long does it take?", answer: "Most key programming jobs take 30–60 minutes on-site at our Seeb shop. Complex vehicles may take slightly longer." },
      ]}
      relatedServices={[
        { name: "Key Fob Creation", href: "/services/key-fob-creation" },
        { name: "Car Key Copying", href: "/services/car-key-copying" },
        { name: "Car Lockout", href: "/services/car-lockout" },
        { name: "Lock Rekeying", href: "/services/lock-rekeying" },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Car Key Programming", href: "/services/car-key-programming" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
