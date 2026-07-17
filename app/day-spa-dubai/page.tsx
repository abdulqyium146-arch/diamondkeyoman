import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Day Spa Dubai | Diamond Key Spa — Full Day & Half-Day Packages",
  description:
    "Day spa in Dubai with full-day and half-day packages. Diamond Key Spa offers massage, hammam, facials & complete spa journeys from AED 200. Open daily 9AM–12:30AM in Al Qusais.",
  keywords: [
    "day spa dubai", "full day spa dubai", "half day spa dubai", "spa day dubai",
    "spa packages dubai", "day spa experience dubai", "spa day out dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/day-spa-dubai` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Spa — Day Spa Dubai",
  description: "Day spa in Dubai offering full-day and half-day spa experiences, massage, hammam, facials and complete spa packages.",
  url: `${siteConfig.url}/day-spa-dubai`,
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

export default function DaySpaDubaiPage() {
  return (
    <LocalSeoTemplate
      heading="Day Spa in Dubai — Diamond Key Spa"
      subheading="Transform your day with a complete spa journey. From 2-hour revives to 4-hour luxury retreats — Diamond Key Spa offers day spa experiences designed for Dubai's pace of life."
      areaName="Dubai"
      distance="15 min from Dubai city centre"
      intro={[
        "A day spa experience is about more than a single treatment — it's about creating space in your life for genuine rest, renewal, and physical care. At Diamond Key Spa in Al Qusais, Dubai, we offer complete spa day experiences ranging from focused half-day sessions to full luxury retreats.",
        "Our day spa packages are structured to flow naturally from one treatment to the next, with the timing and sequence deliberately designed for maximum benefit. The Moroccan bath opens pores and removes dead skin, preparing your body for the maximum absorption of massage oils in the session that follows. The facial completes the experience by addressing the face and décolletage.",
        "Whether you choose our Royal Retreat Package (3 hours), Couples Bliss Package (2 hours for two), or our signature VIP Gold Experience (4 hours), you will spend your time in our peaceful, private spa environment — completely disconnected from Dubai's pace and pressure.",
      ]}
      transitInfo={[
        "Al Qusais Metro Station (Green Line) — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "15 minutes from Downtown Dubai",
        "15 minutes from Dubai Marina",
        "Free on-site parking available",
      ]}
      nearbyLandmarks={[
        "Al Qusais Metro Station — 5 min walk",
        "Dubai International Airport — 15 min drive",
        "City Centre Deira — 10 min drive",
        "Al Mamzar Beach Park — 15 min drive",
        "Dubai Frame — 20 min drive",
      ]}
      directions="Diamond Key Spa is located in Al Qusais Industrial Area 5, easily reachable from all parts of Dubai. From the Metro, it's a 5-minute walk. By car, free parking is available directly at our premises."
      uniqueContent={[
        "Our day spa concept is built around the idea that wellness is not a luxury — it's a necessity. Dubai's work culture and lifestyle demands create chronic stress, physical tension, and fatigue that accumulate over weeks and months. A properly structured spa day is one of the most effective ways to reset your body and mind.",
        "We recommend booking your day spa experience on a day you can fully commit to the experience — arriving without rushing, staying for aftercare, and giving yourself time to rest afterwards. The effects of a full-day spa experience can last for days when you allow your body time to integrate the benefits.",
        "Our day spa packages are also popular for special occasions — birthdays, anniversaries, promotions, and pre-wedding celebrations. We can arrange special setups including flowers, champagne, and personalized greetings for celebratory bookings. Please enquire at least 48 hours in advance for special arrangements.",
      ]}
      faqs={[
        { question: "What is included in a day spa experience at Diamond Key?", answer: "Our day spa packages include multiple complementary treatments (hammam + massage + facial), access to our relaxation lounge, complimentary herbal teas and infused water, and use of our shower and amenity facilities throughout your visit." },
        { question: "How long is a full day spa at Diamond Key?", answer: "Our Royal Retreat Package is approximately 3 hours. The VIP Gold Experience is 4 hours. We also offer bespoke longer sessions — call us to discuss custom full-day arrangements." },
        { question: "Can I book a day spa experience for two people?", answer: "Yes — our Couples Bliss Package (AED 1,100) is designed for two people and includes synchronized massage and Moroccan bath in our private couples suite. It's a 2-hour experience, and we can extend with additional treatments on request." },
        { question: "What should I bring for a day spa visit?", answer: "Just yourself! We provide all towels, robes, disposable spa essentials, and amenities. We recommend arriving in comfortable clothing and avoiding heavy meals for 1–2 hours before your visit." },
      ]}
      reviews={[
        { author: "Sophie Laurent", rating: 5, text: "Spent my birthday doing the Royal Retreat Package. Four blissful hours completely disconnected from the world. The hammam, massage, and facial flow perfectly together.", service: "Royal Retreat Package" },
        { author: "Amira Khalil", rating: 5, text: "The perfect Dubai day spa experience. Arrived stressed after a hectic week — left completely renewed. The staff made the whole day feel effortless.", service: "VIP Gold Experience" },
        { author: "David Chen", rating: 5, text: "My wife's birthday gift. We did the Couples Bliss package. The private suite was beautifully set up, the therapists were synchronized perfectly, and the whole experience was magical.", service: "Couples Bliss Package" },
        { author: "Rania Al Sayed", rating: 5, text: "Best day spa in Dubai by far. I've done the Royal Retreat three times now and it keeps getting better as the therapists get to know me. Highly recommend for a proper spa day.", service: "Royal Retreat Package" },
      ]}
      breadcrumbs={[{ name: "Day Spa Dubai", href: "/day-spa-dubai" }]}
      schemaJson={schema}
      keywords={["day spa dubai", "full day spa dubai", "spa day dubai"]}
    />
  );
}
