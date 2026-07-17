import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Spa Al Mamzar Dubai | Diamond Key Spa — Luxury Treatments Near Al Mamzar Beach",
  description:
    "Best spa near Al Mamzar, Dubai. Diamond Key Spa in Al Qusais is 15 min from Al Mamzar Beach Park. Massage, Moroccan bath, facials from AED 130. Open daily 9AM–12:30AM.",
  keywords: [
    "spa al mamzar", "spa al mamzar dubai", "massage al mamzar", "al mamzar spa",
    "spa near al mamzar beach", "body massage al mamzar", "luxury spa al mamzar",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-al-mamzar` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Spa — Near Al Mamzar Dubai",
  description: "Luxury spa serving Al Mamzar residents. Professional massage, Moroccan bath, and facials in nearby Al Qusais.",
  url: `${siteConfig.url}/spa-al-mamzar`,
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

export default function SpaAlMamzarPage() {
  return (
    <LocalSeoTemplate
      heading="Spa Near Al Mamzar — Diamond Key Spa Dubai"
      subheading="Al Mamzar's preferred luxury spa destination. Diamond Key Spa in Al Qusais is just 15 minutes from Al Mamzar Beach Park — the perfect complement to a beach day or a standalone luxury retreat."
      areaName="Al Mamzar"
      distance="15 min from Al Mamzar Beach Park"
      intro={[
        "Al Mamzar is one of Dubai's most beautiful residential areas — a beachside community known for its parks, waterfront, and relaxed lifestyle. Diamond Key Spa in nearby Al Qusais is the nearest luxury day spa to Al Mamzar, and we serve the area's community of families, professionals, and beach enthusiasts.",
        "Many Al Mamzar residents combine a morning at Al Mamzar Beach Park with an afternoon at Diamond Key Spa — creating a perfect wellness day that pairs outdoor relaxation with indoor rejuvenation. Our Moroccan Bath and Body Scrub treatments are particularly popular after beach days, removing sun damage, salt residue, and environmental exposure.",
        "Just 15 minutes from Al Mamzar by taxi or car, our spa offers everything Al Mamzar's community needs for complete wellness: massage, hammam, facials, reflexology, and comprehensive spa packages for individuals and couples.",
      ]}
      transitInfo={[
        "Taxi from Al Mamzar Beach Park — approximately 15 min, AED 20–30",
        "Taxi from Al Mamzar residential areas — approximately 10–15 min",
        "Green Metro Line from Al Mamzar area to Al Qusais Station",
        "Careem / Uber available throughout Al Mamzar",
        "Free parking at Diamond Key Spa on arrival",
      ]}
      nearbyLandmarks={[
        "Al Mamzar Beach Park — 15 min drive",
        "Al Mamzar Lake Park — 12 min drive",
        "Deira City Centre — 10 min drive",
        "Al Qusais Metro Station — 5 min walk from spa",
        "Sharjah Border — 10 min drive",
      ]}
      directions="From Al Mamzar Beach Park, head west on Al Mamzar Road, then take Al Ittihad Road towards Al Qusais. Turn into Al Qusais Industrial Area 5 and follow signs. Alternatively, take a taxi (approximately 15 minutes). Free parking available at our spa."
      uniqueContent={[
        "Al Mamzar residents have a particular appreciation for the skin benefits of our body treatments. After regular beach visits, sun exposure, salt water, and heat accumulate in the skin. Our Moroccan Bath — using traditional beldi black soap and kessa exfoliation — provides the deepest cleanse available in any Dubai spa, removing weeks of skin build-up in a single 60-minute session.",
        "Our Body Scrub treatments are equally popular for the Al Mamzar beach crowd. Coffee scrub, sea salt, and sugar scrub options are available, each providing intense exfoliation followed by nourishing oil application. The combination of beach lifestyle and regular body scrub treatments produces genuinely glowing skin.",
        "Al Mamzar is a community that values the finer things without excessive formality — which matches Diamond Key's atmosphere perfectly. We are professional but not pretentious. Luxury but accessible. Exclusive but welcoming. Exactly the spa culture that resonates with Al Mamzar's community.",
      ]}
      faqs={[
        { question: "How far is Diamond Key Spa from Al Mamzar Beach Park?", answer: "Diamond Key Spa is approximately 15 minutes by car from Al Mamzar Beach Park. Taxi fare is typically AED 20–30. We are located in Al Qusais Industrial Area 5." },
        { question: "Which treatment is best after a beach day at Al Mamzar?", answer: "We recommend our Moroccan Bath or Body Scrub after beach visits — these treatments remove salt, sunscreen, and environmental build-up while deeply nourishing and hydrating the skin. Many Al Mamzar clients book a Moroccan Bath + Body Massage combo for the ultimate post-beach recovery." },
        { question: "Do you have treatments that help with sun damage?", answer: "Our Facial Treatments include sun-damage-specific options with vitamin C serums, brightening masks, and hydrating treatments. Combined with our body scrubs, these treatments actively address the skin effects of regular sun exposure." },
        { question: "Can families from Al Mamzar book spa treatments together?", answer: "Absolutely. We accommodate family spa visits with multiple treatment rooms. Adult family members can enjoy concurrent treatments. Please call to arrange family bookings and discuss the best combination for your group." },
      ]}
      reviews={[
        { author: "Jassim Al Blooshi", rating: 5, text: "Al Mamzar resident. Discovered Diamond Key and it's become my post-beach ritual. The Moroccan bath after a day at the beach is perfection. Skin glows for a week.", service: "Moroccan Bath" },
        { author: "Vanessa Cruz", rating: 5, text: "Perfect combination: morning at Al Mamzar Beach, afternoon at Diamond Key Spa. The body scrub removed all the salt and sun in the most luxurious way possible.", service: "Body Scrub" },
        { author: "Khalid Mohammed", rating: 5, text: "Quick drive from Al Mamzar to one of Dubai's best spas. The Royal Retreat is worth the journey. We'll be making this a monthly tradition.", service: "Royal Retreat Package" },
        { author: "Puja Mehta", rating: 5, text: "The facial here is specifically designed for Dubai climate damage. After months of beach weekends, my skin needed serious help. Diamond Key's facial transformed it.", service: "Facial Treatment" },
      ]}
      breadcrumbs={[{ name: "Spa Al Mamzar", href: "/spa-al-mamzar" }]}
      schemaJson={schema}
      keywords={["spa al mamzar", "massage al mamzar dubai", "spa near al mamzar beach"]}
    />
  );
}
