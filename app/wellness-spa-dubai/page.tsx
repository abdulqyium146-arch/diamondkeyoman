import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Wellness Spa Dubai | Diamond Key Spa — Holistic Health & Wellbeing",
  description:
    "Wellness spa in Dubai. Diamond Key Spa combines massage, reflexology, Moroccan bath & holistic treatments for complete physical and mental wellbeing. Al Qusais. Book today.",
  keywords: [
    "wellness spa dubai", "holistic spa dubai", "wellness center dubai", "wellbeing spa dubai",
    "health spa dubai", "holistic wellness dubai", "reflexology dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/wellness-spa-dubai` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "HealthAndBeautyBusiness", "LocalBusiness"],
  name: "Diamond Key Wellness Spa — Dubai",
  description: "Wellness spa in Dubai. Holistic treatments including massage, reflexology, Moroccan bath and aromatherapy for complete physical and mental wellbeing.",
  url: `${siteConfig.url}/wellness-spa-dubai`,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Qusais Industrial Area 5",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: { "@type": "GeoCoordinates", latitude: siteConfig.location.lat, longitude: siteConfig.location.lng },
  openingHoursSpecification: siteConfig.hours.schema,
  aggregateRating: { "@type": "AggregateRating", ratingValue: siteConfig.rating.value, reviewCount: siteConfig.rating.count },
};

export default function WellnessSpaDubaiPage() {
  return (
    <LocalSeoTemplate
      heading="Wellness Spa Dubai — Diamond Key Spa"
      subheading="A holistic approach to health and wellbeing. Diamond Key Spa integrates therapeutic massage, reflexology, Moroccan cleansing rituals, and aromatherapy into a complete wellness practice."
      areaName="Dubai"
      distance="15 min from Dubai city centre"
      intro={[
        "Wellness is not the absence of illness — it is the active cultivation of physical, mental, and emotional health. At Diamond Key Spa in Al Qusais, Dubai, our wellness philosophy is holistic: we treat the whole person, not isolated symptoms.",
        "Our wellness spa brings together the best of Eastern and Western therapeutic traditions. Moroccan hammam rituals that have been practiced for centuries. Aromatherapy using the proven chemistry of plant-derived essential oils. Foot reflexology connecting the body's reflex zones to systemic health. Deep tissue massage addressing the musculoskeletal foundations of physical wellbeing.",
        "Unlike single-modality wellness providers, Diamond Key offers the opportunity to integrate multiple treatments into a coherent wellness programme — one that addresses your specific health profile and builds lasting benefits over time.",
      ]}
      transitInfo={[
        "Al Qusais Metro Station (Green Line) — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "15 minutes from Dubai Marina / JBR",
        "15 minutes from Dubai International Airport",
        "Free client parking at our Al Qusais premises",
      ]}
      nearbyLandmarks={[
        "Al Qusais Metro Station — 5 min walk",
        "Dubai International Airport — 15 min drive",
        "City Centre Deira — 10 min drive",
        "Al Mamzar Beach Park — 15 min drive",
        "Al Nahda Park — 8 min drive",
      ]}
      directions="Diamond Key Spa is located in Al Qusais Industrial Area 5. Easily accessible by metro (5 min walk from Al Qusais Station) or by car (free parking). Open daily from 9AM to 12:30AM."
      uniqueContent={[
        "Our wellness approach recognises that the body is an interconnected system. Foot reflexology, for example, is not merely foot massage — it works on specific reflex zones that correspond to organs and body systems, producing effects felt well beyond the feet. Our reflexologists are trained in the full map of reflex zones and use their knowledge to create targeted therapeutic sequences.",
        "Aromatherapy at Diamond Key is equally systematic. We stock over 15 pure essential oils and create bespoke blends based on each client's health profile and goals. The chemistry of essential oils has been extensively studied — specific compounds demonstrably affect neurotransmitter levels, immune function, and tissue healing.",
        "For clients interested in a sustained wellness programme, we offer consultations with our head wellness therapist to design a personalised treatment schedule. Monthly sessions, combined with aftercare recommendations, typically show measurable improvements in sleep, energy levels, and stress management within three to four sessions.",
      ]}
      faqs={[
        { question: "What is a holistic wellness spa?", answer: "A holistic wellness spa addresses physical, mental, and emotional health through integrated therapeutic treatments. At Diamond Key, this means combining massage, reflexology, aromatherapy, and cleansing rituals (Moroccan bath) into coherent wellness programmes rather than isolated treatments." },
        { question: "Does reflexology really work?", answer: "Reflexology has a substantial evidence base for stress reduction, sleep improvement, and symptom relief in chronic conditions. Our reflexologists are certified and trained in the complete reflex zone map. Many clients experience effects well beyond the treatment session itself." },
        { question: "What wellness treatments do you offer in Dubai?", answer: "We offer Body Massage, Aromatherapy Massage, Foot Reflexology, Moroccan Bath, Facial Treatments, Body Scrub, Hot Stone Massage, Deep Tissue Massage, and complete wellness packages. All treatments can be combined into personalised wellness programmes." },
        { question: "Can spa treatments be part of a long-term wellness routine?", answer: "Absolutely. In fact, the evidence strongly supports regular spa treatment as preventive healthcare. Monthly massage reduces cortisol, improves sleep, boosts immune function, and prevents the accumulation of chronic tension that eventually requires more intensive intervention." },
      ]}
      reviews={[
        { author: "Dr. Fatima Al Zaabi", rating: 5, text: "As a healthcare professional, I look for evidence-based wellness services. Diamond Key Spa's approach — the consultation, the product quality, the therapist training — exceeds most wellness centers I've seen in the UAE.", service: "Foot Reflexology" },
        { author: "Mark Harrison", rating: 5, text: "I've been doing monthly wellness sessions at Diamond Key for 8 months. My sleep has improved dramatically, my chronic shoulder tension is finally under control, and I feel fundamentally better. This place genuinely works.", service: "Aromatherapy Massage" },
        { author: "Zara Ahmed", rating: 5, text: "The reflexology here is unlike anywhere I've tried in Dubai. The therapist explained each zone as she worked and I felt changes in my body throughout. Remarkable practice.", service: "Foot Reflexology" },
        { author: "Pierre Dumont", rating: 5, text: "A wellness spa that actually approaches health holistically. The therapist asked about my lifestyle, sleep, stress — and designed a treatment accordingly. This is proper wellness, not just relaxation.", service: "Body Massage" },
      ]}
      breadcrumbs={[{ name: "Wellness Spa Dubai", href: "/wellness-spa-dubai" }]}
      schemaJson={schema}
      keywords={["wellness spa dubai", "holistic spa dubai", "wellness center dubai"]}
    />
  );
}
