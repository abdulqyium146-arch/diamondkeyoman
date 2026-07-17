import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Spa Al Nahda Dubai | Diamond Key Spa — 8 Min Walk from Al Nahda Metro",
  description:
    "Best spa near Al Nahda, Dubai. Diamond Key Spa is 8 min from Al Nahda Metro Station. Massage, Moroccan bath, facials & packages from AED 130. Open daily until 12:30 AM.",
  keywords: [
    "spa al nahda", "spa al nahda dubai", "massage al nahda", "al nahda spa",
    "spa near al nahda", "body massage al nahda", "best spa al nahda dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-al-nahda` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Spa — Near Al Nahda Dubai",
  description: "Luxury spa serving Al Nahda residents. 8 minutes from Al Nahda Metro Station. Professional massage, Moroccan bath, and facials in Al Qusais.",
  url: `${siteConfig.url}/spa-al-nahda`,
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

export default function SpaAlNahdaPage() {
  return (
    <LocalSeoTemplate
      heading="Spa for Al Nahda Residents — Diamond Key Spa"
      subheading="Al Nahda's nearest luxury spa. Just 8 minutes from Al Nahda Metro Station — Diamond Key Spa is the community spa of choice for Al Nahda residents seeking world-class treatments."
      areaName="Al Nahda"
      distance="8 min walk from Al Nahda Metro"
      intro={[
        "Al Nahda is one of Dubai's most vibrant residential communities, home to a diverse population of families, professionals, and long-term residents. Diamond Key Spa in Al Qusais Industrial Area 5 is the closest luxury day spa to Al Nahda — just 8 minutes walk from Al Nahda Metro Station.",
        "Al Nahda residents choose Diamond Key Spa for their spa needs because of our convenient proximity, our outstanding 4.76-star Google rating, and our wide range of treatments to suit every preference and budget. From a quick 45-minute foot reflexology session after work to a full Royal Retreat Package on a day off — we have something for everyone in Al Nahda.",
        "Our extended hours (open daily until 12:30 AM) are particularly popular with Al Nahda's working professionals, who appreciate being able to book evening treatments without needing to rush from work.",
      ]}
      transitInfo={[
        "Al Nahda Metro Station (Green Line) — 8 min walk to Diamond Key Spa",
        "Al Qusais Metro Station (Green Line) — 5 min walk (one stop from Al Nahda)",
        "Bus routes connecting Al Nahda to Al Qusais Industrial Area",
        "Taxi or rideshare from Al Nahda — approximately 5–7 min drive",
        "Free parking available if driving from Al Nahda",
      ]}
      nearbyLandmarks={[
        "Al Nahda Metro Station — 8 min walk",
        "Al Qusais Metro Station — 5 min walk",
        "Al Nahda Park — adjacent neighbourhood",
        "City Centre Deira — 10 min drive",
        "Dubai International Airport — 15 min drive",
      ]}
      directions="From Al Nahda Metro Station, either walk north towards Al Qusais Industrial Area 5 (8 minutes) or take a short taxi/Careem ride (approximately 5 minutes). Alternatively, take the metro one stop to Al Qusais Station and walk 5 minutes. By car from Al Nahda, drive north on Al Nahda Road and turn into Industrial Area 5."
      uniqueContent={[
        "Al Nahda is a community that values quality and accessibility — which is exactly what Diamond Key Spa delivers. We serve a large number of regular clients from Al Nahda who have made their monthly visits to our spa part of their wellness routine.",
        "For Al Nahda residents, the walk or short taxi ride to Diamond Key Spa is genuinely worth it. You won't find better value for the quality of treatment anywhere closer. Our prices start from AED 130 — affordable for the working professionals and families of Al Nahda.",
        "We serve the full diversity of Al Nahda's population: Emirati families, South Asian professionals, Arab expatriates, and Western residents. Our team speaks multiple languages and our therapists include both male and female practitioners to accommodate all preferences.",
      ]}
      faqs={[
        { question: "How do I get to Diamond Key Spa from Al Nahda?", answer: "Walk 8 minutes from Al Nahda Metro Station, or take a taxi (approximately 5 minutes and AED 15–20). Alternatively, take the Metro one stop to Al Qusais Station and walk 5 minutes to our spa." },
        { question: "Is Diamond Key the closest quality spa to Al Nahda?", answer: "Yes — Diamond Key Spa in Al Qusais Industrial Area 5 is the nearest luxury day spa to Al Nahda that offers the full range of treatments (massage, hammam, facials, packages) at a 4.76-star quality standard." },
        { question: "Do Al Nahda residents get any special benefits?", answer: "All clients, including Al Nahda residents, benefit from our loyalty stamp card (10 visits = 1 free treatment) and referral rewards. Regular clients from nearby areas also receive priority booking." },
        { question: "What are your most popular treatments for Al Nahda clients?", answer: "Body Massage and Foot Reflexology are most popular for regular after-work visits. For special occasions, the Royal Retreat Package and Moroccan Bath are the most requested." },
      ]}
      reviews={[
        { author: "Aisha Khalid", rating: 5, text: "I live in Al Nahda and Diamond Key is my go-to spa. Eight minutes from my metro station and absolutely worth the walk. Best massage in the area by far.", service: "Body Massage" },
        { author: "Deepak Mohan", rating: 5, text: "Al Nahda resident here. Diamond Key is the only spa I've tried in this part of Dubai that actually delivers consistent quality. Monthly visits have become my routine.", service: "Deep Tissue Massage" },
        { author: "Fatima Al Nuaimi", rating: 5, text: "The Moroccan bath here is better than anything I've found nearer to Al Nahda. Worth the 10-minute commute every single time. Perfect skin after every visit.", service: "Moroccan Bath" },
        { author: "Vikram Singh", rating: 5, text: "Commute from Al Nahda to Diamond Key twice a month. The quality is so consistently excellent that I never consider going anywhere else even when something opens closer.", service: "Aromatherapy Massage" },
      ]}
      breadcrumbs={[{ name: "Spa Al Nahda", href: "/spa-al-nahda" }]}
      schemaJson={schema}
      keywords={["spa al nahda", "massage al nahda dubai", "spa near al nahda"]}
    />
  );
}
