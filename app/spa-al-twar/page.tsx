import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Spa Al Twar Dubai | Diamond Key Spa — Luxury Treatments Near Al Twar",
  description:
    "Best spa near Al Twar, Dubai. Diamond Key Spa in Al Qusais offers massage, Moroccan bath, facials & spa packages from AED 130. Open daily 9AM–12:30AM. Free parking.",
  keywords: [
    "spa al twar", "spa al twar dubai", "massage al twar", "al twar spa",
    "spa near al twar", "body massage al twar", "luxury spa al twar dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-al-twar` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Spa — Near Al Twar Dubai",
  description: "Luxury day spa serving Al Twar residents. Professional massage, Moroccan bath, and facial treatments in nearby Al Qusais.",
  url: `${siteConfig.url}/spa-al-twar`,
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

export default function SpaAlTwarPage() {
  return (
    <LocalSeoTemplate
      heading="Spa Near Al Twar — Diamond Key Spa Dubai"
      subheading="Al Twar's nearest luxury day spa. Diamond Key Spa in Al Qusais offers premium massage, Moroccan hammam, and facial treatments just minutes from Al Twar 1, 2, and 3."
      areaName="Al Twar"
      distance="10 min from Al Twar"
      intro={[
        "Al Twar — encompassing Al Twar 1, Al Twar 2, and Al Twar 3 — is a quiet, established residential community in Dubai, and Diamond Key Spa in nearby Al Qusais is the nearest luxury spa for Al Twar residents seeking professional spa treatments.",
        "Our spa is approximately 10 minutes by taxi from Al Twar, or accessible via Al Qusais Metro Station which connects easily from Al Twar. We serve many regular clients from Al Twar who appreciate the short journey for access to one of Dubai's highest-rated independent day spas.",
        "Whether you need a targeted Deep Tissue Massage for chronic neck pain from desk work, an indulgent Moroccan Bath to reset your skin, or a complete spa day in our Royal Retreat Package — Diamond Key Spa has exactly what Al Twar residents are looking for.",
      ]}
      transitInfo={[
        "Taxi from Al Twar to Diamond Key — approximately 10 min, AED 15–25",
        "Al Qusais Metro Station (Green Line) — 5 min walk from spa",
        "Bus routes connecting Al Twar to Al Qusais area",
        "Careem / Uber available throughout Al Twar",
        "Free parking at our Al Qusais premises",
      ]}
      nearbyLandmarks={[
        "Al Twar 1, 2 & 3 — 10 min drive",
        "Al Qusais Metro Station — 5 min walk from spa",
        "Al Nahda Metro Station — 8 min walk from spa",
        "City Centre Deira — 10 min drive",
        "Dubai Frame — 15 min drive",
      ]}
      directions="From Al Twar, take Al Nahda Road or use maps navigation to Al Qusais Industrial Area 5. Diamond Key Spa is approximately 10 minutes from Al Twar 1 and 2. Free parking is available on site."
      uniqueContent={[
        "Al Twar is known as one of Dubai's more peaceful residential communities, and our spa matches that energy perfectly. Our quiet, private treatment rooms and relaxation facilities are designed for clients who value genuine tranquility — not a busy, high-traffic spa environment.",
        "Al Twar residents who visit Diamond Key often comment on how the short journey to Al Qusais feels like arriving in a different world — away from the bustle of their daily lives, in a professional spa environment where they are completely looked after for the duration of their visit.",
        "We are especially popular with Al Twar's community of families and working couples. Our Couples Bliss Package is frequently booked by Al Twar couples celebrating anniversaries and special occasions, and our family-friendly approach makes us a popular choice for mothers who want to bring adult daughters for shared spa days.",
      ]}
      faqs={[
        { question: "How far is Diamond Key Spa from Al Twar?", answer: "Diamond Key Spa is approximately 10 minutes by taxi from Al Twar 1, 2, and 3. Taxi fare is typically AED 15–25. We are in Al Qusais Industrial Area 5." },
        { question: "Is there a spa in Al Twar itself?", answer: "Al Twar does not have a luxury day spa within the neighbourhood itself. Diamond Key Spa in adjacent Al Qusais is the nearest quality spa option, just a short taxi or bus ride away." },
        { question: "What are your most popular treatments for Al Twar clients?", answer: "Body Massage and Moroccan Bath are most popular among our Al Twar clients. The Royal Retreat Package is a favourite for special occasions and spa day experiences." },
        { question: "Can I book a spa appointment for a group from Al Twar?", answer: "Yes — we accommodate groups. For parties of 5 or more, please call us to discuss group arrangements and rates. We can arrange a complete spa day experience for groups celebrating birthdays, hen parties, or corporate wellness events." },
      ]}
      reviews={[
        { author: "Mariam Al Hamdan", rating: 5, text: "I live in Al Twar and Diamond Key is my regular spa. Ten minutes by taxi and I'm in another world. The Moroccan bath here is exceptional.", service: "Moroccan Bath" },
        { author: "Sanjay Kumar", rating: 5, text: "Al Twar resident for 5 years. Diamond Key is the best discovery I've made near our neighbourhood. Monthly deep tissue sessions have transformed my back pain situation.", service: "Deep Tissue Massage" },
        { author: "Nora Al Said", rating: 5, text: "Brought my mother from Al Twar for her birthday. The Royal Retreat package was perfect — she was treated like royalty. Already planning our next visit.", service: "Royal Retreat Package" },
        { author: "Bernard Osei", rating: 5, text: "Quick taxi from Al Twar 3 to Diamond Key. Every single time I arrive I feel welcomed and every time I leave I feel incredible. Consistent quality is rare in Dubai.", service: "Hot Stone Massage" },
      ]}
      breadcrumbs={[{ name: "Spa Al Twar", href: "/spa-al-twar" }]}
      schemaJson={schema}
      keywords={["spa al twar", "massage al twar dubai", "spa near al twar"]}
    />
  );
}
