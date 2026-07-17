import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Spa Al Qusais Industrial Area Dubai | Diamond Key Spa — On-Site",
  description:
    "Diamond Key Spa is located directly in Al Qusais Industrial Area 5, Dubai. Premium massage, Moroccan bath & facials. Walk-in or book: +971 54 490 7283. Open 9AM–12:30AM.",
  keywords: [
    "spa al qusais industrial area", "spa al qusais industrial area 5",
    "massage al qusais industrial area", "spa industrial area dubai",
    "diamond key spa al qusais", "spa near industrial area al qusais",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-al-qusais-industrial-area` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Spa — Al Qusais Industrial Area 5, Dubai",
  description: "Premium day spa located directly in Al Qusais Industrial Area 5, Dubai. Massage, Moroccan bath, facials, and complete spa packages.",
  url: `${siteConfig.url}/spa-al-qusais-industrial-area`,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Qusais Industrial Area 5",
    addressLocality: "Al Qusais",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: { "@type": "GeoCoordinates", latitude: siteConfig.location.lat, longitude: siteConfig.location.lng },
  openingHoursSpecification: siteConfig.hours.schema,
  aggregateRating: { "@type": "AggregateRating", ratingValue: siteConfig.rating.value, reviewCount: siteConfig.rating.count },
};

export default function SpaAlQusaisIndustrialAreaPage() {
  return (
    <LocalSeoTemplate
      heading="Spa in Al Qusais Industrial Area — Diamond Key Spa"
      subheading="Diamond Key Spa is located directly in Al Qusais Industrial Area 5, Dubai. The spa destination for professionals, residents, and visitors in and around the industrial area."
      areaName="Al Qusais Industrial Area"
      distance="On-site in Industrial Area 5"
      intro={[
        "Diamond Key Spa is located directly in Al Qusais Industrial Area 5, Dubai — making us the only premium day spa in the industrial area itself. We serve professionals who work in the area, residents of the surrounding communities, and visitors to this part of Dubai.",
        "Our location in the industrial area is a hidden advantage. Ample free parking, no hotel lobby to navigate, no congestion — just a straightforward drive or metro walk to a world-class spa experience. We have turned an industrial location into a genuine wellness sanctuary.",
        "For the thousands of professionals who work daily in Al Qusais Industrial Area and its surrounding areas, Diamond Key Spa is the most convenient lunchtime or after-work wellness option in Dubai. We are open from 9:00 AM to 12:30 AM every day, with no appointment necessary for walk-ins based on availability.",
      ]}
      transitInfo={[
        "Located directly in Al Qusais Industrial Area 5 — no commute required",
        "Al Qusais Metro Station (Green Line) — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "Free on-site parking — ample space for clients",
        "Bus routes serving Al Qusais Industrial Area",
      ]}
      nearbyLandmarks={[
        "Al Qusais Metro Station — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "City Centre Deira — 10 min drive",
        "Dubai International Airport — 15 min drive",
        "Al Qusais Residential — adjacent community",
      ]}
      directions="Diamond Key Spa is located directly in Al Qusais Industrial Area 5. Enter Industrial Area 5 via the main road from Al Qusais Road. Our Google Plus Code is 7CR3+MXV. From Al Qusais Metro Station, walk south approximately 5 minutes into the industrial area."
      uniqueContent={[
        "Many people assume a spa located in an industrial area cannot be a luxury experience. Diamond Key Spa proves the opposite. Our interior was designed without compromise — private treatment suites, authentic Moroccan hammam with traditional tilework, premium organic products, and a team of certified professionals. Location does not define quality; our standards do.",
        "For the business and professional community of Al Qusais Industrial Area, we offer the ideal midday wellness break. A 60-minute massage or reflexology session during the lunch hour is a medically-evidenced way to reduce afternoon cortisol and improve afternoon productivity. Many of our industrial area clients book regular lunchtime slots.",
        "Our on-site parking means that professionals driving between sites in Dubai's industrial areas can easily stop in without parking hassle. Walk-ins during slower weekday hours are usually accommodated without delay. For busy weekend slots, we recommend advance booking.",
      ]}
      faqs={[
        { question: "Is Diamond Key Spa really located in Al Qusais Industrial Area?", answer: "Yes — Diamond Key Spa is located directly in Al Qusais Industrial Area 5. Our Plus Code is 7CR3+MXV. We are accessible by foot from Al Qusais Metro Station (5 minutes) or by car with free on-site parking." },
        { question: "Why is a luxury spa located in an industrial area?", answer: "Our location was chosen for accessibility and value — industrial area rents allow us to invest in premium therapist training, organic products, and superior treatment protocols rather than expensive real estate. The result: hotel spa quality at accessible prices." },
        { question: "Is parking easy to find at your Al Qusais Industrial Area location?", answer: "Parking is one of our biggest advantages. Free, ample parking is available directly outside our premises. You will never circle looking for a space — just park and walk straight in." },
        { question: "Can I visit on a lunch break from work nearby?", answer: "Absolutely. Our 60-minute treatments are designed for efficient, effective sessions. Many nearby professionals book lunchtime slots regularly. We are a 5-minute walk from the Metro and on-site for industrial area workers." },
      ]}
      reviews={[
        { author: "Tariq Al Shammari", rating: 5, text: "Work in Al Qusais Industrial Area. Diamond Key is literally 5 minutes from my office. Best lunch break decision I ever made — monthly massages have transformed my wellbeing.", service: "Body Massage" },
        { author: "Jessica Wong", rating: 5, text: "I was surprised to find such a luxurious spa in an industrial area. Diamond Key proves that location doesn't define quality. Absolutely world-class experience.", service: "Royal Retreat Package" },
        { author: "Mustafa Al Zaabi", rating: 5, text: "Our company team does quarterly wellness days at Diamond Key — it's on our doorstep in the industrial area. Therapists are outstanding and the facilities are genuinely impressive.", service: "Deep Tissue Massage" },
        { author: "Rekha Subramaniam", rating: 5, text: "The parking is what first attracted me — no stress, just park and walk in. Then the treatment itself blew me away. Diamond Key is a gem in the industrial area.", service: "Moroccan Bath" },
      ]}
      breadcrumbs={[{ name: "Spa Al Qusais Industrial Area", href: "/spa-al-qusais-industrial-area" }]}
      schemaJson={schema}
      keywords={["spa al qusais industrial area", "massage al qusais industrial area 5"]}
    />
  );
}
