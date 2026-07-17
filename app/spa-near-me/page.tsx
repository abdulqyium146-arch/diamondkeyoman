import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Spa Near Me Dubai | Diamond Key Spa — Al Qusais, 5 Min from Metro",
  description:
    "Looking for a spa near you in Dubai? Diamond Key Spa in Al Qusais is 5 min from the metro, has free parking, and is open daily until 12:30 AM. Book now: +971 54 490 7283.",
  keywords: [
    "spa near me dubai", "spa nearby dubai", "spa close to me dubai", "nearest spa dubai",
    "spa open near me dubai", "spa dubai near metro", "spa al qusais near me",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-near-me` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Spa — Near You in Dubai",
  description: "Luxury day spa in Al Qusais, Dubai. 5 minutes from Al Qusais Metro Station. Free parking. Open daily 9AM–12:30AM.",
  url: `${siteConfig.url}/spa-near-me`,
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

export default function SpaNearMePage() {
  return (
    <LocalSeoTemplate
      heading="Spa Near You — Diamond Key Spa Dubai"
      subheading="Centrally located in Al Qusais — Dubai's most accessible luxury spa. 5 min from the metro. Free parking. Open until 12:30 AM. No matter where you are in Dubai, we're closer than you think."
      areaName="Al Qusais"
      distance="5 min from Al Qusais Metro"
      intro={[
        "When you search for a spa near you in Dubai, proximity matters — but so does quality. Diamond Key Spa in Al Qusais Industrial Area 5 combines exceptional accessibility with genuine luxury spa standards.",
        "Our location in Al Qusais puts us within easy reach of Dubai's most populated residential and commercial areas. Whether you're in Al Nahda, Muhaisnah, Deira, Al Mamzar, Al Twar, or anywhere along the Green Metro Line, Diamond Key Spa is your nearest quality spa option.",
        "We are 5 minutes walk from Al Qusais Metro Station, 8 minutes from Al Nahda Metro Station, 15 minutes from Dubai International Airport, and 10 minutes from City Centre Deira. If you're driving, free parking is available directly at our premises with no stress.",
      ]}
      transitInfo={[
        "Al Qusais Metro Station (Green Line) — 5 min walk from our door",
        "Al Nahda Metro Station (Green Line) — 8 min walk",
        "Bus routes 31, C9, C21 — stops in Al Qusais Industrial Area",
        "Careem / Uber — 5–10 min from most of North Dubai",
        "Free on-site parking for driving clients",
      ]}
      nearbyLandmarks={[
        "Al Qusais Metro Station — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "City Centre Deira — 10 min drive",
        "Dubai International Airport — 15 min drive",
        "Al Mamzar Beach Park — 15 min drive",
      ]}
      directions="From Al Qusais Metro (Green Line), exit towards Al Qusais Industrial Area and walk south for 5 minutes. By car from Deira, take Al Ittihad Road east and follow signs for Al Qusais Industrial Area 5. Google Plus Code: 7CR3+MXV."
      uniqueContent={[
        "Location is only one part of what makes a spa 'the best near you.' We believe the best spa near you is also the one that delivers the best experience — and that's where Diamond Key consistently outperforms alternatives with similar proximity.",
        "Our 4.76-star rating from over 200 verified Google reviews reflects the experience of Dubai residents who live and work across the city. They come from Deira, Al Nahda, Muhaisnah, Al Mamzar, Sharjah, and as far as Downtown Dubai and Dubai Marina — and they return because the quality of experience justifies the journey.",
        "Open every day of the year from 9:00 AM to 12:30 AM, we're almost certainly open when you need us. Whether you want a morning session before work, an afternoon appointment during a free day, or a late-night treatment after a busy evening, Diamond Key Spa is available.",
      ]}
      faqs={[
        { question: "How close is Diamond Key Spa to Al Qusais Metro?", answer: "Diamond Key Spa is approximately 5 minutes walk from Al Qusais Metro Station on the Green Line. Exit at Al Qusais Station and walk south towards Industrial Area 5." },
        { question: "Is there parking at the spa?", answer: "Yes — free on-site parking is available for all clients in the adjacent car park. No parking stress, no meters, no charges." },
        { question: "What are the nearest areas to Diamond Key Spa?", answer: "We are closest to Al Qusais, Al Nahda, Muhaisnah, Al Twar, and Deira. We are also convenient for residents of Al Mamzar, Sharjah, and anyone along the Green Metro Line." },
        { question: "Are you open late? I need a spa near me in the evening.", answer: "Yes — we are open daily until 12:30 AM. Last treatment bookings are accepted approximately 30 minutes before closing. We are one of the few quality spas in Dubai with such extended hours." },
      ]}
      reviews={[
        { author: "Habiba Al Marzooqi", rating: 5, text: "Was searching for a spa near me in Deira and found Diamond Key. Even though it's technically in Al Qusais, it's a 10-minute taxi ride. Worth every minute of the journey.", service: "Moroccan Bath" },
        { author: "Nikhil Patel", rating: 5, text: "Live in Al Nahda and this is my local spa. 10 minutes walk, open late, superb quality. Couldn't ask for more in a neighbourhood spa.", service: "Body Massage" },
        { author: "Reem Al Shamsi", rating: 5, text: "The closest quality spa to my Al Qusais home. I walk here. The fact that it's also one of Dubai's best-rated spas makes it a double win.", service: "Aromatherapy Massage" },
        { author: "Greg Williams", rating: 5, text: "Drove from Marina for this spa after seeing the reviews. Worth the drive. But honestly if I lived anywhere near Al Qusais I'd be here every week.", service: "Deep Tissue Massage" },
      ]}
      breadcrumbs={[{ name: "Spa Near Me Dubai", href: "/spa-near-me" }]}
      schemaJson={schema}
      keywords={["spa near me dubai", "nearest spa dubai", "spa near al qusais"]}
    />
  );
}
