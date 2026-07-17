import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Massage Center Dubai | Diamond Key Spa — Professional Massage Therapy",
  description:
    "Professional massage center in Dubai. Certified therapists offering deep tissue, Swedish, aromatherapy & hot stone massage. Al Qusais location, open daily until 12:30 AM.",
  keywords: [
    "massage center dubai", "massage therapy dubai", "professional massage dubai",
    "certified massage therapist dubai", "therapeutic massage dubai", "massage clinic dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/massage-center-dubai` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Massage Center — Dubai",
  description: "Professional massage center in Dubai. Certified therapists offering deep tissue, Swedish, aromatherapy and therapeutic massage in Al Qusais.",
  url: `${siteConfig.url}/massage-center-dubai`,
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

export default function MassageCenterDubaiPage() {
  return (
    <LocalSeoTemplate
      heading="Massage Center Dubai — Diamond Key Spa"
      subheading="Dubai's trusted professional massage center. Certified therapists, evidence-based techniques, and premium organic products — delivering real therapeutic results since opening."
      areaName="Dubai"
      distance="15 min from Dubai city centre"
      intro={[
        "Diamond Key Spa is Dubai's premier professional massage center — not a relaxation parlour, but a genuine therapeutic facility staffed by certified massage professionals. Our approach to massage is grounded in anatomy, physiology, and evidence-based practice.",
        "Every therapist at our Dubai massage center holds certification in their speciality modalities. They understand the musculoskeletal system, the mechanisms of soft tissue dysfunction, and the specific techniques required to address each client's unique condition. This clinical grounding is what separates us from the average relaxation spa.",
        "Our massage center in Al Qusais, Dubai serves clients from across the emirate — from professionals with chronic desk-related tension, to athletes with sports injuries, to Dubai residents simply in need of stress relief. We assess, we plan, we treat, and we get results.",
      ]}
      transitInfo={[
        "Al Qusais Metro Station (Green Line) — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "Dubai International Airport — 15 min drive",
        "Deira City Centre — 10 min drive",
        "Free client parking at our premises",
      ]}
      nearbyLandmarks={[
        "Al Qusais Metro Station — 5 min walk",
        "Dubai International Airport — 15 min drive",
        "City Centre Deira — 10 min drive",
        "Sharjah Border — 10 min drive",
        "Al Nahda — adjacent neighbourhood",
      ]}
      directions="Our Dubai massage center is located in Al Qusais Industrial Area 5. Take Al Ittihad Road east from Deira, turn into Al Qusais Industrial Area 5. From the Metro, it's a 5-minute walk south from Al Qusais Station."
      uniqueContent={[
        "What distinguishes a professional massage center from a standard spa? The depth of assessment. Before every session at Diamond Key, your therapist will conduct a brief consultation covering your medical history, current symptoms, lifestyle factors, and treatment goals. This information shapes the entire session.",
        "Our massage protocols are not generic — they are customised to each client. A client presenting with lower back pain from desk work will receive a different treatment sequence, technique, and pressure to a client with athletic muscle fatigue or anxiety-driven tension.",
        "We offer both individual massage sessions and course-based wellness programmes for clients with chronic conditions who benefit from regular, consistent treatment. Regular clients receive priority booking and loyalty rewards. Building an ongoing therapeutic relationship with a consistent therapist consistently delivers superior outcomes.",
      ]}
      faqs={[
        { question: "What makes Diamond Key a professional massage center rather than a regular spa?", answer: "Our therapists are certified professionals trained in therapeutic modalities. Every session begins with a health assessment. Our treatment protocols are evidence-based and condition-specific. We treat chronic pain, sports injuries, and stress conditions — not just provide relaxation." },
        { question: "Which massage is best for back pain at your Dubai center?", answer: "For back pain, we recommend Deep Tissue Massage as the primary treatment — targeting the deep muscle layers where chronic tension accumulates. We may also recommend Hot Stone Massage for heat-related muscle relaxation, and Foot Reflexology to stimulate lumbar reflex zones." },
        { question: "Do you offer regular massage programs at your Dubai center?", answer: "Yes. We recommend monthly or bi-weekly sessions for clients with chronic conditions. Regular clients receive priority booking, loyalty rewards (10 sessions = 1 free treatment), and the benefit of a therapist who knows their body over time." },
        { question: "What are your opening hours for the Dubai massage center?", answer: "We are open daily from 9:00 AM to 12:30 AM, including weekends. Our extended hours make us accessible for both morning sessions and late-night appointments after long work days." },
      ]}
      reviews={[
        { author: "Thomas Bergmann", rating: 5, text: "As a physiotherapy patient, I was looking for a massage center in Dubai that actually understood anatomy. Diamond Key delivers clinical-quality massage at spa prices. Exceptional.", service: "Deep Tissue Massage" },
        { author: "Layla Nasser", rating: 5, text: "I've been struggling with chronic neck pain for years. Three sessions at Diamond Key have done more than months of other treatments. These therapists really know what they're doing.", service: "Deep Tissue Massage" },
        { author: "Kevin O'Brien", rating: 5, text: "The pre-session consultation was the first thing that told me this wasn't an ordinary massage place. They asked real questions and adjusted the treatment accordingly. Brilliant.", service: "Aromatherapy Massage" },
        { author: "Mariam Al Rashidi", rating: 5, text: "Best massage center in Dubai for therapeutic treatment. I send all my colleagues here for their back and shoulder issues. Everyone reports the same thing: real results.", service: "Body Massage" },
      ]}
      breadcrumbs={[{ name: "Massage Center Dubai", href: "/massage-center-dubai" }]}
      schemaJson={schema}
      keywords={["massage center dubai", "massage therapy dubai", "professional massage dubai"]}
    />
  );
}
