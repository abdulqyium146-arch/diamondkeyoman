import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Luxury Spa Dubai | Diamond Key Spa — Premium Treatments from AED 130",
  description:
    "Dubai's finest luxury day spa in Al Qusais. Diamond Key Spa offers premium massage, Moroccan hammam, gold facials & VIP packages. Rated 4.76★. Open daily 9AM–12:30AM.",
  keywords: [
    "luxury spa dubai", "premium spa dubai", "5 star spa dubai", "vip spa dubai",
    "luxury day spa dubai", "exclusive spa dubai", "best luxury spa dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/luxury-spa-dubai` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Spa — Luxury Spa Dubai",
  description: "Dubai's premier luxury day spa. Premium massage, Moroccan hammam, gold facials & VIP spa packages in Al Qusais.",
  url: `${siteConfig.url}/luxury-spa-dubai`,
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

export default function LuxurySpaDubaiPage() {
  return (
    <LocalSeoTemplate
      heading="Luxury Spa in Dubai — Diamond Key Spa"
      subheading="Experience world-class luxury spa treatments without hotel prices. Diamond Key Spa delivers 5-star experiences with genuine therapeutic expertise — rated 4.76★ by 200+ clients."
      areaName="Dubai"
      distance="15 min from Downtown Dubai"
      intro={[
        "When Dubai residents think of luxury spa experiences, they often assume they need to visit a hotel spa or pay AED 600–1,200 for a single treatment. Diamond Key Spa has redefined what luxury means in Dubai's spa market — delivering premium, 5-star-quality experiences at fair, transparent prices.",
        "Our luxury spa in Al Qusais Industrial Area 5 features private treatment suites, certified and experienced therapists, premium organic products sourced from Morocco and Europe, authentic Moroccan hammam with traditional black marble, and exclusive VIP and couples packages. Every detail has been considered to create an environment of genuine luxury.",
        "Rated 4.76 stars by over 200 verified Google reviewers, Diamond Key Spa has earned its reputation as Dubai's most loved independent luxury spa — delivering outstanding results that speak louder than any five-star hotel brand name.",
      ]}
      transitInfo={[
        "Al Qusais Metro Station (Green Line) — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "15 minutes from Downtown Dubai by taxi/rideshare",
        "15 minutes from Dubai International Airport",
        "Free on-site parking available for all clients",
      ]}
      nearbyLandmarks={[
        "Al Qusais Metro Station — 5 min walk",
        "Dubai International Airport — 15 min drive",
        "City Centre Deira — 10 min drive",
        "Al Mamzar Beach Park — 15 min drive",
        "Downtown Dubai — 20 min drive",
      ]}
      directions="Diamond Key Spa is located in Al Qusais Industrial Area 5, easily accessible from all parts of Dubai. From Downtown Dubai, take Sheikh Zayed Road north, then Al Ittihad Road east to Al Qusais. Free parking is available on arrival."
      uniqueContent={[
        "True luxury is not defined by hotel branding or inflated price tags — it's defined by the quality of care, the skill of the therapists, and the effectiveness of the treatments. At Diamond Key Spa, we have invested in every element that actually matters for your spa experience.",
        "Our therapists are certified professionals with years of clinical training, many specialising in therapeutic modalities including deep tissue, lymphatic drainage, prenatal massage, and advanced facial techniques. The products we use are premium organic formulations — the same quality used at leading hotel spas, without the hotel markup.",
        "Our VIP Gold Experience (AED 1,200) and Royal Retreat Package (AED 750) offer multi-hour luxury journeys that rival the very best spa packages available anywhere in Dubai — at prices that represent extraordinary value compared to hotel alternatives.",
      ]}
      faqs={[
        { question: "Is Diamond Key Spa really comparable to hotel spas in Dubai?", answer: "Many of our clients who regularly visit hotel spas rate Diamond Key Spa as their preferred alternative. Our therapists have equivalent or superior training, our products are equally premium, and our private treatment rooms match hotel-spa standards — but without the premium pricing or hotel membership requirement." },
        { question: "What makes Diamond Key Spa a luxury spa?", answer: "We offer private treatment suites, certified therapists, premium organic products (argan oil, ghassoul clay, botanical serums), authentic Moroccan hammam with traditional tilework, VIP packages up to AED 1,200, and a 4.76-star rating from 200+ verified reviews." },
        { question: "What is your most luxurious treatment?", answer: "Our VIP Gold Experience at AED 1,200 is our most exclusive offering — a 4-hour journey including a gold facial, full-body massage, Moroccan hammam, and premium aftercare ritual with complimentary refreshments throughout." },
        { question: "Do you offer couples luxury spa packages?", answer: "Yes. Our Couples Bliss Package (AED 1,100) includes synchronized massages, Moroccan bath, facial treatments, and a romantic setup in our private couples suite. Popular for anniversaries and honeymoons." },
      ]}
      reviews={[
        { author: "Natasha Ivanova", rating: 5, text: "I've been to spa treatments at Atlantis, Burj Al Arab, and several DIFC hotel spas. Diamond Key genuinely matches that quality — at a fraction of the price. The therapists are exceptional.", service: "VIP Gold Experience" },
        { author: "Ahmad Al Mansouri", rating: 5, text: "The Royal Retreat package was the most indulgent experience I've had in Dubai. Four hours of pure luxury — the hammam, the massage, the facial. Absolutely worth every dirham.", service: "Royal Retreat Package" },
        { author: "Meera Krishnan", rating: 5, text: "I was skeptical that a spa in an industrial area could be luxurious. I was completely wrong. The interior, the products, and the treatments are world-class.", service: "Moroccan Bath" },
        { author: "James Whitfield", rating: 5, text: "As a long-term Dubai resident, I've tried dozens of spas. Diamond Key consistently delivers the best value for a genuinely premium spa experience. My monthly ritual.", service: "Deep Tissue Massage" },
      ]}
      breadcrumbs={[{ name: "Luxury Spa Dubai", href: "/luxury-spa-dubai" }]}
      schemaJson={schema}
      keywords={["luxury spa dubai", "premium spa dubai", "vip spa dubai"]}
    />
  );
}
