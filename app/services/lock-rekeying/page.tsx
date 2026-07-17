import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Lock Rekeying Seeb, Oman | Rekey Home & Office Locks — Diamond Key Muscat",
  description:
    "Professional lock rekeying in Seeb, Muscat. Invalidate old keys and get new ones without replacing the lock. All residential and commercial locks. From OMR 10.",
  keywords: [
    "lock rekeying Seeb", "rekey lock Muscat", "lock rekeying Oman",
    "change lock Seeb", "new keys old lock Muscat", "residential lock rekeying Oman",
  ],
  alternates: { canonical: `${siteConfig.url}/services/lock-rekeying` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lock Rekeying",
  description: "Professional lock rekeying service in Seeb, Muscat, Oman. Invalidate old keys without replacing the lock.",
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
  offers: { "@type": "Offer", price: 10, priceCurrency: "OMR", availability: "https://schema.org/InStock" },
};

export default function LockRekeyingPage() {
  return (
    <ServicePageTemplate
      name="Lock Rekeying"
      category="Locksmith"
      tagline="Instantly invalidate old keys and get a new set — without replacing your lock. Secure and cost-effective."
      description={[
        "Lock rekeying is the process of reconfiguring the internal pin tumblers of an existing lock so that it operates with a different key. The result is that all previously cut keys for that lock no longer work — while a new key does. The lock cylinder, housing, and hardware remain in place.",
        "Rekeying is the recommended solution when you have moved into a new property and don't know who else has a copy of your key. It is also ideal after a break-in attempt, after an employee or tenant leaves with a key, or when you want to reduce the number of different keys you carry by standardising multiple locks to one key.",
        "At Diamond Key in Seeb, our locksmiths carry a professional rekeying kit that handles all standard residential and commercial lock brands. Rekeying is significantly cheaper than replacing the entire lock, while providing the same security upgrade.",
      ]}
      duration="20–45 min"
      priceFrom={10}
      priceTo={25}
      benefits={[
        "Old keys immediately deactivated",
        "More affordable than lock replacement",
        "Works on all standard lock brands",
        "New keys provided on the spot",
        "Ideal after moving home",
        "Rekey multiple locks to one key",
      ]}
      whatToExpect={[
        "Contact us to confirm your lock brand and type so we can bring the right tools.",
        "Our locksmith dismantles the lock cylinder without damaging the door or frame.",
        "The internal pin tumblers are rearranged to a new configuration.",
        "A new key code is cut to match the new pin configuration.",
        "The lock is reassembled and tested with the new key. All old keys no longer work. Total time: 20–45 minutes per lock.",
      ]}
      whoIsItFor={[
        "New homeowners or tenants",
        "Landlords after a tenant moves out",
        "Office managers after employee resignation",
        "Anyone who lost a key and doesn't want to change the lock",
        "Those who want all their locks on one key",
      ]}
      preparation={[
        "Have a working key available for the lock you want rekeyed",
        "Call us to confirm lock brand and type",
        "List all the locks you want rekeyed in one visit to save time",
        "Visit us at our Seeb shop or ask about on-site service",
      ]}
      aftercare={[
        "Test the new key in all rekeyed locks before the technician leaves",
        "Collect and destroy all old copies of the invalidated key",
        "Keep a note of how many new copies you have and who holds them",
        "If anyone returns an old key, it no longer works — no action needed",
      ]}
      faqs={[
        { question: "What is the difference between rekeying and changing a lock?", answer: "Rekeying changes the internal pins so a new key works — the lock mechanism stays. Changing a lock replaces the entire cylinder or lock unit. Rekeying is cheaper and equally secure." },
        { question: "How much does lock rekeying cost in Oman?", answer: "Rekeying starts from OMR 10 per lock. Multiple locks in one visit may attract a reduced rate — call us to discuss." },
        { question: "Can you rekey any lock brand?", answer: "We rekey all standard pin tumbler locks (Yale, Schlage, Kwikset types and similar brands). High-security locks and disc detainer locks may require different handling — contact us to confirm." },
        { question: "How many new keys do I get after rekeying?", answer: "We cut as many new keys as you need — typically 2–3 is standard. Additional copies are charged at standard key cutting prices." },
        { question: "Can multiple locks be rekeyed to the same key?", answer: "Yes. If your locks are compatible brands, we can rekey them all to work on one key — ideal for homes and offices." },
      ]}
      relatedServices={[
        { name: "Building Key Copying", href: "/services/building-key-copying" },
        { name: "Building Lockout", href: "/services/building-lockout" },
        { name: "Car Key Copying", href: "/services/car-key-copying" },
        { name: "Car Lockout", href: "/services/car-lockout" },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Lock Rekeying", href: "/services/lock-rekeying" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
