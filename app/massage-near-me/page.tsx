import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Massage Near Me Dubai | Diamond Key Spa — Professional Massage Al Qusais",
  description:
    "Looking for massage near you in Dubai? Diamond Key Spa offers professional massage therapy in Al Qusais — 5 min from Metro, open until 12:30 AM. From AED 130.",
  keywords: [
    "massage near me dubai", "body massage near me dubai", "massage nearby dubai",
    "closest massage dubai", "massage open near me dubai", "professional massage near me",
  ],
  alternates: { canonical: `${siteConfig.url}/massage-near-me` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Massage — Near You in Dubai",
  description: "Professional massage therapy near you in Dubai. Al Qusais location, 5 min from metro, open daily until 12:30 AM.",
  url: `${siteConfig.url}/massage-near-me`,
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

export default function MassageNearMePage() {
  return (
    <LocalSeoTemplate
      heading="Massage Near You — Diamond Key Spa Dubai"
      subheading="Professional massage therapy in Al Qusais, centrally located for all of North Dubai. Certified therapists, premium products, extended hours — and always open when you need us."
      areaName="Al Qusais"
      distance="5 min from Al Qusais Metro"
      intro={[
        "Finding a quality massage near you in Dubai means finding more than just the closest option — it means finding certified therapists, proper treatment protocols, and a professional environment where results are guaranteed. Diamond Key Spa in Al Qusais delivers all three.",
        "Our massage facility is located in Al Qusais Industrial Area 5, accessible from all of North Dubai by metro, taxi, or car. We offer all major massage modalities — Deep Tissue, Swedish, Aromatherapy, Hot Stone, Couples Massage, and Foot Reflexology — all delivered by certified professionals in private treatment rooms.",
        "Starting from AED 130 for a 45-minute Foot Reflexology session and AED 150 for a 60-minute Body Massage, we offer professional massage therapy at prices that make regular treatment accessible. Quality massage should not be a rare luxury — it should be a regular part of your health routine.",
      ]}
      transitInfo={[
        "Al Qusais Metro Station (Green Line) — 5 min walk to our door",
        "Al Nahda Metro Station — 8 min walk",
        "Multiple bus routes serving Al Qusais Industrial Area",
        "Careem/Uber — accessible from Deira, Muhaisnah, Al Nahda in under 10 min",
        "Free parking on site for driving clients",
      ]}
      nearbyLandmarks={[
        "Al Qusais Metro Station — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "City Centre Deira — 10 min drive",
        "Dubai International Airport — 15 min drive",
        "Sharjah Border — 10 min drive",
      ]}
      directions="Walk 5 minutes south from Al Qusais Metro Station (Green Line) to reach Diamond Key Spa in Industrial Area 5. By car, enter Al Qusais Industrial Area 5 from Al Qusais Road. Google search 'Diamond Key Spa Dubai' for live directions."
      uniqueContent={[
        "The quality of a massage near you in Dubai varies enormously. Some facilities offer fast, superficial treatments that address nothing below the surface. Others employ uncertified technicians with minimal training. At Diamond Key Spa, every therapist is certified, trained in specific modalities, and given the time to do the job properly.",
        "Our minimum appointment duration is 45 minutes. We do not offer rushed 30-minute treatments that cannot possibly address real physical needs. We believe in giving each client enough time to properly consult, prepare, treat, and recover — because therapeutic results require adequate time.",
        "Our extended hours (open daily until 12:30 AM) make us one of the most accessible professional massage facilities in Dubai. Morning commuters can book 9 AM sessions. Night-shift workers can access late evening treatments. There is almost no schedule that cannot accommodate a regular monthly visit to Diamond Key.",
      ]}
      faqs={[
        { question: "How close is Diamond Key massage to Al Qusais Metro?", answer: "Diamond Key Spa is approximately 5 minutes walk from Al Qusais Metro Station on the Green Line. This makes us the most accessible professional massage facility for residents along the Green Line." },
        { question: "What massage options are available near me at Diamond Key?", answer: "We offer Body Massage (Swedish), Deep Tissue Massage, Aromatherapy Massage, Hot Stone Massage, Foot Reflexology, Couples Massage, and the full Massage Spa Experience package. All by certified professional therapists." },
        { question: "How much does massage near me in Dubai cost at Diamond Key?", answer: "Foot Reflexology from AED 130 (45 min). Body Massage from AED 150 (60 min). Aromatherapy and Deep Tissue from AED 200–220 (60 min). Hot Stone from AED 250 (75 min). Full Massage Spa Experience from AED 280." },
        { question: "Do you offer same-day massage appointments?", answer: "Walk-ins are welcome based on therapist availability. For same-day guaranteed booking, we recommend calling or WhatsApp as early in the day as possible to check availability and reserve your time." },
      ]}
      reviews={[
        { author: "Omar Said", rating: 5, text: "Was looking for a massage near me in Al Nahda. Diamond Key came up on Google — 5-star rating, reasonable prices, open late. Visited once and now I'm a regular. Outstanding massage.", service: "Deep Tissue Massage" },
        { author: "Lakshmi Rao", rating: 5, text: "Closest quality massage to my home in Muhaisnah. The aromatherapy massage is exceptional. I've tried two other nearby places and Diamond Key is miles ahead.", service: "Aromatherapy Massage" },
        { author: "Hassan Shaikh", rating: 5, text: "Open until 12:30 AM is what first attracted me — I work late and needed massage near me that's open in the evening. Now I come every month regardless of time.", service: "Body Massage" },
        { author: "Yuki Tanaka", rating: 5, text: "Found Diamond Key searching for massage near Al Qusais. Best discovery I've made since moving to Dubai. Professional, calm, and genuinely effective treatment.", service: "Foot Reflexology" },
      ]}
      breadcrumbs={[{ name: "Massage Near Me Dubai", href: "/massage-near-me" }]}
      schemaJson={schema}
      keywords={["massage near me dubai", "body massage near me dubai", "closest massage dubai"]}
    />
  );
}
