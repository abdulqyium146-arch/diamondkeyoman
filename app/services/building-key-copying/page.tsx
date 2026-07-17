import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Building Key Copying Seeb, Oman | Home & Office Key Duplication — Diamond Key",
  description:
    "Fast, accurate home, office, and building key duplication in Seeb, Muscat. All standard and security key types. Starting from OMR 0.5. Walk-in at Diamond Key, Al Khair Street, Seeb.",
  keywords: [
    "building key copying Seeb", "home key duplication Muscat", "office key copy Oman",
    "door key duplicate Seeb", "key cutting Muscat", "spare key Seeb Oman",
  ],
  alternates: { canonical: `${siteConfig.url}/services/building-key-copying` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Building Key Copying",
  description: "Home, office, and building key duplication service in Seeb, Muscat, Oman.",
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
  offers: { "@type": "Offer", price: 0.5, priceCurrency: "OMR", availability: "https://schema.org/InStock" },
};

export default function BuildingKeyCopyingPage() {
  return (
    <ServicePageTemplate
      name="Building Key Copying"
      category="Key Duplication"
      tagline="Duplicate home, office, and building keys for all standard and security lock types — starting from OMR 0.5."
      description={[
        "Our building key copying service covers all types of residential and commercial keys: standard door keys, padlock keys, mailbox keys, cabinet keys, gate keys, high-security keys, and more. We stock a comprehensive range of key blanks in brass, nickel, aluminium, and steel.",
        "For standard domestic door keys, the duplication process takes under 5 minutes. We can cut multiple copies in one visit, so you can distribute spares to family members, trusted employees, or property managers.",
        "We also handle high-security key types such as Mul-T-Lock, Abloy, and dimple keys — though these may require advance notice to source the correct blank. Call ahead to confirm availability for less common key profiles.",
      ]}
      duration="5–10 min"
      priceFrom={0.5}
      priceTo={2}
      benefits={[
        "Home, office & commercial keys",
        "Standard & high-security types",
        "Fast 5-minute turnaround",
        "Multiple copies in one visit",
        "Quality branded blanks",
        "Sub-millimetre precision",
      ]}
      whatToExpect={[
        "Bring your original key to our shop on Al Khair Street, Seeb — no appointment needed.",
        "Our technician identifies the key profile and selects the matching blank from our stock.",
        "The key is cut on precision machinery in under 5 minutes.",
        "We file and deburr the copy if needed, then test it for accuracy.",
        "You leave with a working duplicate — typically the entire visit takes under 15 minutes.",
      ]}
      whoIsItFor={[
        "Homeowners who want spare keys for family",
        "Landlords managing multiple properties",
        "Office managers needing employee key sets",
        "Airbnb hosts needing guest key copies",
        "Anyone who lost or wants an extra door key",
      ]}
      preparation={[
        "Bring your original key (we cannot copy without it)",
        "Let us know how many copies you need",
        "For high-security keys, call ahead to confirm blank availability",
        "No appointment required for standard keys",
      ]}
      aftercare={[
        "Test the new key in your lock before leaving the shop",
        "If the key feels stiff, return to us — we may need to fine-tune the cut",
        "Label each copy clearly if distributing to multiple people",
        "Keep one backup in a secure location separate from your main key",
      ]}
      faqs={[
        { question: "Can you copy any type of door key?", answer: "We copy all standard and most high-security door keys. For Mul-T-Lock, Abloy, or unusual profiles, call us first so we can confirm blank availability." },
        { question: "How much does it cost to copy a door key in Oman?", answer: "Standard building key copying starts from OMR 0.5. High-security key types may cost up to OMR 2 depending on the blank." },
        { question: "Can I get multiple copies in one visit?", answer: "Yes. We can cut as many copies as you need from a single original in one visit." },
        { question: "Do I need to bring my original key?", answer: "Yes. We require the original key to make a duplicate. We cannot cut a key from a description or photo alone." },
        { question: "What if the copied key doesn't fit my lock?", answer: "We test every key before handing it over. If there is a fit issue, we adjust at no extra charge. Our cuts carry a quality guarantee." },
      ]}
      relatedServices={[
        { name: "Car Key Copying", href: "/services/car-key-copying" },
        { name: "Lock Rekeying", href: "/services/lock-rekeying" },
        { name: "Building Lockout", href: "/services/building-lockout" },
        { name: "Car Key Programming", href: "/services/car-key-programming" },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Building Key Copying", href: "/services/building-key-copying" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
