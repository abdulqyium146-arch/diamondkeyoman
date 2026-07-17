import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Spa Muhaisnah Dubai | Diamond Key Spa — Nearest Luxury Spa to Muhaisnah",
  description:
    "Best spa near Muhaisnah, Dubai. Diamond Key Spa in Al Qusais is minutes from Muhaisnah. Massage, Moroccan bath, facials from AED 130. Open daily 9AM–12:30AM.",
  keywords: [
    "spa muhaisnah", "spa muhaisnah dubai", "massage muhaisnah", "muhaisnah spa",
    "spa near muhaisnah", "body massage muhaisnah", "best spa muhaisnah",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-muhaisnah` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Spa — Near Muhaisnah Dubai",
  description: "Luxury spa serving Muhaisnah residents. Professional massage, Moroccan bath, and facial treatments minutes from Muhaisnah in Al Qusais.",
  url: `${siteConfig.url}/spa-muhaisnah`,
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

export default function SpaMuhaisnahPage() {
  return (
    <LocalSeoTemplate
      heading="Spa for Muhaisnah Residents — Diamond Key Spa"
      subheading="Muhaisnah's closest luxury day spa. Diamond Key Spa in Al Qusais is minutes away — bringing world-class spa treatments, certified therapists, and 4.76★ quality to your doorstep."
      areaName="Muhaisnah"
      distance="Short drive from Muhaisnah"
      intro={[
        "Muhaisnah is a large, established residential community in Dubai, and Diamond Key Spa in Al Qusais is its closest luxury spa option. A short drive or taxi ride from any part of Muhaisnah brings you to one of Dubai's highest-rated day spas.",
        "Muhaisnah residents have been among our most loyal clients since Diamond Key Spa opened. The community's diverse population — from Emirati families to South Asian, Arab, and Western expatriates — finds that our range of treatments, our pricing, and our therapist team caters perfectly to their varied needs.",
        "We offer everything from quick 45-minute reflexology sessions to full 4-hour VIP spa journeys. With prices starting from AED 130 and extended opening hours (until 12:30 AM daily), we fit into even the busiest Muhaisnah lifestyle.",
      ]}
      transitInfo={[
        "Al Qusais Metro Station (Green Line) — accessible from Muhaisnah by bus or taxi",
        "Short taxi or Careem ride from central Muhaisnah — 5–10 min",
        "Bus route from Muhaisnah to Al Qusais available",
        "Free parking available for clients driving from Muhaisnah",
        "Approximately 3 km from Muhaisnah 4 to our spa",
      ]}
      nearbyLandmarks={[
        "Muhaisnah 4 — 5 min drive",
        "Al Qusais Metro Station — 5 min walk from spa",
        "Al Nahda Metro Station — 8 min walk from spa",
        "City Centre Deira — 10 min drive",
        "Dubai International Airport — 15 min drive",
      ]}
      directions="From Muhaisnah, take Al Nahda Road or Al Qusais Road north/east towards Al Qusais Industrial Area 5. Google Maps search 'Diamond Key Spa Dubai' for precise directions. Free parking is available on arrival."
      uniqueContent={[
        "Many Muhaisnah residents tell us they were surprised to find a spa of Diamond Key's quality so close to home. Our location in Al Qusais Industrial Area 5 is just minutes from Muhaisnah's residential streets — making us genuinely the neighbourhood spa for Muhaisnah.",
        "We regularly serve families from Muhaisnah who book multiple treatments during a single visit — perhaps a massage for one partner while the other enjoys a facial, then finishing together in our relaxation area. Our spa is designed to accommodate these extended, multi-treatment visits comfortably.",
        "Our female clients from Muhaisnah particularly appreciate our policy of female-therapist-by-default for female clients. Our team of certified female therapists is available for all standard treatments, and our female-only treatment rooms provide complete privacy.",
      ]}
      faqs={[
        { question: "How far is Diamond Key Spa from Muhaisnah?", answer: "Diamond Key Spa is approximately 3–5 km from central Muhaisnah, a 5–10 minute drive or taxi ride. We are in Al Qusais Industrial Area 5, easily accessible from all parts of Muhaisnah." },
        { question: "Is there a spa closer to Muhaisnah than Diamond Key?", answer: "While there may be basic massage facilities in the broader area, Diamond Key Spa is the nearest luxury day spa offering the full range of treatments (hammam, facials, packages) at our 4.76-star quality standard." },
        { question: "Can I walk from Muhaisnah to your spa?", answer: "Muhaisnah is approximately 3 km from our spa — walkable in about 35 minutes, though most clients from Muhaisnah prefer to take a taxi (AED 15–25) or the bus. Alternatively, the metro from nearby stations is convenient." },
        { question: "What is your most popular service for Muhaisnah clients?", answer: "Body Massage, Moroccan Bath, and Foot Reflexology are the most popular treatments among our Muhaisnah clients. Families visiting together often book the Couples Bliss Package." },
      ]}
      reviews={[
        { author: "Saeed Al Rashdi", rating: 5, text: "We're from Muhaisnah and Diamond Key is our family spa. My wife does the Moroccan bath, I do the deep tissue massage. Five-star experience every time.", service: "Deep Tissue Massage" },
        { author: "Preethi Nair", rating: 5, text: "Found Diamond Key while looking for a spa near Muhaisnah. The drive is worth it — I've never had a massage this good anywhere in Dubai.", service: "Aromatherapy Massage" },
        { author: "Mohammed Al Shaeri", rating: 5, text: "Muhaisnah resident for 10 years. Diamond Key is the best thing to happen to our spa scene. Quality rivals hotel spas at a fraction of the cost.", service: "Royal Retreat Package" },
        { author: "Sunitha Raj", rating: 5, text: "Short taxi from Muhaisnah to this spa was the best AED 20 I've ever spent. Immediately booked my next appointment on leaving. Incredible facial treatment.", service: "Facial Treatment" },
      ]}
      breadcrumbs={[{ name: "Spa Muhaisnah", href: "/spa-muhaisnah" }]}
      schemaJson={schema}
      keywords={["spa muhaisnah", "massage muhaisnah dubai", "spa near muhaisnah"]}
    />
  );
}
