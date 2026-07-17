import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Best Spa in Dubai 2025 | Diamond Key Spa — Rated 4.76★ by 200+ Clients",
  description:
    "Dubai's best-rated independent day spa. Diamond Key Spa in Al Qusais has 200+ verified 5-star Google reviews. Massage, Moroccan bath, facials & VIP packages. Book today.",
  keywords: [
    "best spa dubai", "top rated spa dubai", "best massage dubai", "top spa dubai",
    "best day spa dubai", "highest rated spa dubai 2025", "recommended spa dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/best-spa-dubai` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Spa — Best Spa in Dubai",
  description: "Dubai's best-rated day spa with 4.76★ from 200+ Google reviews. Massage, Moroccan bath, facials, and VIP packages in Al Qusais.",
  url: `${siteConfig.url}/best-spa-dubai`,
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
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.76, reviewCount: 200, bestRating: 5 },
};

export default function BestSpaDubaiPage() {
  return (
    <LocalSeoTemplate
      heading="Best Spa in Dubai — Diamond Key Spa"
      subheading="Dubai's best-rated independent day spa. 4.76 stars from 200+ verified Google reviews. Not marketing — real clients, real experiences, real results."
      areaName="Dubai"
      distance="15 min from Dubai city centre"
      intro={[
        "What makes a spa the best? Not advertising spend. Not a hotel brand name. Not interior decor. The best spa in Dubai is the one that consistently delivers exceptional results, earns real 5-star reviews from real clients, and keeps people coming back month after month. By that definition, Diamond Key Spa has earned the title.",
        "With a 4.76-star rating from over 200 verified Google reviews, Diamond Key Spa is one of the highest-rated independent day spas in Dubai. Our clients are long-term Dubai residents, professionals, tourists, and wellness enthusiasts who know what a good spa looks like — and they consistently choose us.",
        "We don't compete on price alone. We compete on therapist expertise, treatment quality, product standards, and the consistency of the experience we deliver. Every therapist on our team is certified and experienced. Every product we use is premium organic. Every treatment protocol has been refined through thousands of client sessions.",
      ]}
      transitInfo={[
        "Al Qusais Metro Station (Green Line) — 5 min walk from our spa",
        "Al Nahda Metro Station (Green Line) — 8 min walk",
        "15 minutes from Dubai International Airport by taxi",
        "10 minutes from City Centre Deira",
        "Free parking available at our premises",
      ]}
      nearbyLandmarks={[
        "Al Qusais Metro Station — 5 min walk",
        "Dubai International Airport — 15 min drive",
        "City Centre Deira (Mall) — 10 min drive",
        "Al Mamzar Beach Park — 15 min drive",
        "Sharjah Border — 10 min drive",
      ]}
      directions="Diamond Key Spa is located in Al Qusais Industrial Area 5, Dubai. Take Al Qusais Road and enter Industrial Area 5. Free parking is available on site. From the metro, walk 5 minutes south of Al Qusais Metro Station."
      uniqueContent={[
        "Our 4.76-star Google rating isn't achieved by asking clients to leave reviews — it's earned by delivering treatments that genuinely exceed expectations, session after session. We read every review carefully and use feedback to continuously improve.",
        "What sets Diamond Key apart from other highly-reviewed Dubai spas? Three things: therapist quality (all certified, all experienced), product standards (premium organic, paraben-free, certified), and consistency (the same high standard whether it's a Monday morning or a Friday midnight).",
        "We are particularly proud of our 5-star reviews from clients who describe Diamond Key as better than hotel spas they have visited. These independent assessments from experienced spa-goers are the most meaningful endorsement we could receive.",
      ]}
      faqs={[
        { question: "Why is Diamond Key Spa rated as the best spa in Dubai?", answer: "Our 4.76-star rating from 200+ verified Google reviews reflects consistently excellent service across all treatments. Our clients highlight therapist expertise, product quality, and the consistency of their experience as key reasons they rate us so highly." },
        { question: "How do you compare to hotel spas in Dubai?", answer: "Many of our 5-star reviewers specifically mention that we compare favourably to hotel spas they have visited. We offer equivalent therapist quality and product standards at lower prices, with the added convenience of being open until 12:30 AM daily." },
        { question: "What is your most popular treatment?", answer: "Our Deep Tissue Massage and Moroccan Bath are consistently our most booked treatments. For packages, the Royal Retreat (AED 750) is most popular for first-time visitors wanting the full Diamond Key experience." },
        { question: "How can I read your reviews?", answer: "You can find all our reviews on our Google Business Profile. Search 'Diamond Key Spa Al Qusais Dubai' on Google Maps to see our full review listing." },
      ]}
      reviews={[
        { author: "Priya Sharma", rating: 5, text: "Hands down the best spa experience I've had in Dubai. I've tried the big hotel spas and they don't come close for value. The Royal Retreat Package was worth every dirham.", service: "Royal Retreat Package" },
        { author: "Mohammed Al Rashid", rating: 5, text: "I've been researching the best spas in Dubai for months. Diamond Key comes up repeatedly in every forum and review site. After visiting, I understand why. Exceptional.", service: "Deep Tissue Massage" },
        { author: "Elena Carvalho", rating: 5, text: "Four-and-a-half stars on Google with 200 reviews says everything. This isn't a spa that bought its ratings. These are real clients giving real feedback. Absolutely the best.", service: "Moroccan Bath" },
        { author: "Raj Menon", rating: 5, text: "My wife and I tried five different Dubai spas before finding Diamond Key. We haven't been anywhere else in two years. The quality and consistency is unmatched.", service: "Couples Bliss Package" },
      ]}
      breadcrumbs={[{ name: "Best Spa Dubai", href: "/best-spa-dubai" }]}
      schemaJson={schema}
      keywords={["best spa dubai", "top rated spa dubai", "highest rated spa dubai"]}
    />
  );
}
