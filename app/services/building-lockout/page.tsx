import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Building Lockout Seeb, Oman | Locked Out of Home or Office — Diamond Key",
  description:
    "Locked out of your home or office in Seeb, Muscat? Diamond Key opens doors without damage. Fast professional locksmith response from OMR 10. Call +968 9097 4040.",
  keywords: [
    "building lockout Seeb", "locked out home Muscat", "locksmith lockout Oman",
    "emergency lockout Seeb", "open door without key Muscat", "locked out office Oman",
  ],
  alternates: { canonical: `${siteConfig.url}/services/building-lockout` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Building Lockout",
  description: "Emergency building lockout service in Seeb, Muscat, Oman. Non-destructive entry for homes and offices.",
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

export default function BuildingLockoutPage() {
  return (
    <ServicePageTemplate
      name="Building Lockout"
      category="Emergency"
      tagline="Locked out of your home or office? We open doors without damage — fast, professional, and affordable."
      description={[
        "Being locked out of your home, apartment, or office is stressful. At Diamond Key, our locksmiths use professional non-destructive entry techniques to open your door quickly — without drilling, breaking, or damaging the lock, door, or frame.",
        "Our technicians carry a professional set of lock picks, bypass tools, and tension wrenches that allow us to open virtually all standard pin tumbler locks — the type used in most residential and commercial buildings in Oman. For deadbolts and padlocks, we have additional specialised tools.",
        "Contact us by phone or WhatsApp and describe your situation. We will advise you on the options and, where possible, attend your location in Seeb and surrounding Muscat areas during our opening hours.",
      ]}
      duration="15–30 min"
      priceFrom={10}
      priceTo={20}
      benefits={[
        "Non-destructive entry",
        "No lock or door damage",
        "All standard lock types",
        "Home, flat & office",
        "Fast response in Seeb",
        "Transparent pricing",
      ]}
      whatToExpect={[
        "Call or WhatsApp us immediately on +968 9097 4040. Describe the lock type and door situation.",
        "We confirm we can assist and advise on timing. You may need to visit our shop or we can attend your location.",
        "Our locksmith assesses the lock and selects the appropriate non-destructive entry method.",
        "Using professional picking tools, we open the lock without damaging it.",
        "We verify the lock is working correctly before leaving. You are then free to enter and, if needed, we can arrange to copy a spare key for you on the spot.",
      ]}
      whoIsItFor={[
        "Homeowners locked out of their property",
        "Tenants locked out of their apartment",
        "Office managers locked out of premises",
        "Landlords needing access to a locked property",
        "Property managers with vacant unit access issues",
      ]}
      preparation={[
        "Have your ID or proof of residence/ownership ready",
        "Know the address and lock type if possible",
        "Call us as early as possible during our opening hours",
        "Do not try to force the lock — this can cause costly damage",
      ]}
      aftercare={[
        "Once inside, check that the lock and door are functioning normally",
        "Consider getting a spare key cut immediately to prevent a repeat situation",
        "If the lock was damaged before we arrived, we can advise on repair or rekeying",
        "Store a spare key with a trusted neighbour, family member, or in a secure key safe",
      ]}
      faqs={[
        { question: "Can you open any door lock without a key?", answer: "We can open most standard residential and commercial pin tumbler locks non-destructively. Very high-security locks may require different handling — call us to discuss." },
        { question: "Will you damage my lock or door?", answer: "We use non-destructive entry techniques exclusively. In the vast majority of cases, your lock and door emerge completely undamaged." },
        { question: "How much does a building lockout service cost?", answer: "Building lockout service starts from OMR 10–20 depending on the lock type and complexity. We quote before starting." },
        { question: "Do you come to my location or do I need to come to your shop?", answer: "Call us to discuss. During opening hours (from 4:30 PM), we may be able to attend your location in Seeb and surrounding Muscat areas. Confirm with us before visiting." },
        { question: "What identification do I need to show?", answer: "We require valid ID (national ID or passport) and ideally proof of residence (utility bill, tenancy contract, etc.) before opening any property." },
      ]}
      relatedServices={[
        { name: "Lock Rekeying", href: "/services/lock-rekeying" },
        { name: "Building Key Copying", href: "/services/building-key-copying" },
        { name: "Car Lockout", href: "/services/car-lockout" },
        { name: "Car Key Copying", href: "/services/car-key-copying" },
      ]}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Building Lockout", href: "/services/building-lockout" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
