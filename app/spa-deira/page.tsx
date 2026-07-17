import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Spa Deira Dubai | Diamond Key Spa — 10 Min from Deira City Centre",
  description:
    "Premium spa near Deira, Dubai. Diamond Key Spa in Al Qusais is 10 min from Deira City Centre. Massage, Moroccan bath, facials & packages from AED 130. Open daily.",
  keywords: [
    "spa deira", "spa deira dubai", "massage deira dubai", "deira spa",
    "best spa deira", "spa near deira city centre", "luxury spa deira",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-deira` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Spa — Near Deira Dubai",
  description: "Premium spa serving Deira residents and visitors. 10 minutes from Deira City Centre. Professional massage, Moroccan bath, and facials in Al Qusais.",
  url: `${siteConfig.url}/spa-deira`,
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

export default function SpaDeiраPage() {
  return (
    <LocalSeoTemplate
      heading="Spa Near Deira — Diamond Key Spa Dubai"
      subheading="Deira's premium spa destination. Just 10 minutes from Deira City Centre, Diamond Key Spa in Al Qusais offers the luxury spa experience that Deira's vibrant community deserves."
      areaName="Deira"
      distance="10 min from Deira City Centre"
      intro={[
        "Deira is one of Dubai's oldest and most dynamic districts — a bustling commercial and residential hub that is home to a huge diversity of Dubai residents and visitors. Diamond Key Spa in Al Qusais is just 10 minutes from the heart of Deira, making us the nearest luxury day spa for Deira's community.",
        "Deira's residents know quality — this is a community with high expectations for service and value. Diamond Key Spa delivers on both counts. Our 4.76-star rating from 200+ verified reviews reflects the genuine satisfaction of clients, many of whom live or work in Deira and have made us their regular spa destination.",
        "Whether you're a long-term Deira resident looking for a reliable neighbourhood spa, or a visitor staying in one of Deira's hotels who wants to experience a genuine Dubai spa beyond the hotel offering — Diamond Key Spa is your best option.",
      ]}
      transitInfo={[
        "From Deira City Centre — 10 min drive, AED 15–20 by taxi",
        "From Gold Souk area — 12–15 min by taxi",
        "Green Metro Line: Salah Al Din or BaniYas Square → Al Qusais Station",
        "Bus connections from multiple Deira bus stops to Al Qusais",
        "Free parking at Diamond Key Spa on arrival",
      ]}
      nearbyLandmarks={[
        "Deira City Centre — 10 min drive",
        "Gold Souk, Deira — 12 min drive",
        "Spice Souk, Deira — 12 min drive",
        "Al Rigga Metro Station — connected by Metro to us",
        "Dubai International Airport — 15 min drive",
      ]}
      directions="From Deira City Centre, take the road towards Al Qusais (approximately 10 minutes). From the Gold Souk area, take Al Ittihad Road east towards Al Qusais. Alternatively, take the Metro (Green Line) to Al Qusais Station and walk 5 minutes to our spa."
      uniqueContent={[
        "Deira's character — diverse, authentic, community-oriented — is reflected in our client base. We serve Deira's Indian, Pakistani, Bangladeshi, Emirati, Arab, and Filipino communities with equal warmth and professionalism. Our therapist team represents this diversity, and our team speaks multiple languages.",
        "Deira is particularly strong in the authentic hammam tradition — with many clients familiar with traditional bathing rituals from their countries of origin. Our Moroccan Hammam at Diamond Key is as authentic as any in Dubai: traditional black soap, kessa exfoliation, ghassoul clay, and proper steam. No shortcuts, no tourist versions.",
        "Our proximity to Dubai International Airport makes us especially convenient for Deira-area hotel guests — business travellers staying in Deira can visit us for a jet-lag massage or post-flight recovery treatment. We are only 15 minutes from the airport and accept bookings with short notice.",
      ]}
      faqs={[
        { question: "How close is Diamond Key Spa to Deira City Centre?", answer: "Diamond Key Spa is approximately 10 minutes by taxi from Deira City Centre. Taxi fare is typically AED 15–20. By Metro, take the Green Line to Al Qusais Station (a few stops) and walk 5 minutes." },
        { question: "Do you serve hotel guests from Deira?", answer: "Yes — many of our clients are business travellers and tourists staying in Deira's hotels. We are 15 minutes from Dubai International Airport and offer short-notice bookings for arriving guests." },
        { question: "Is the Moroccan Bath at Diamond Key authentic?", answer: "Our Moroccan Hammam uses traditional beldi black soap from Morocco, a genuine kessa exfoliation glove, ghassoul clay mask, and authentic steam. Many Moroccan and North African clients from Deira confirm that our hammam matches the experience they know from home." },
        { question: "What is the best way to reach you from Deira?", answer: "By taxi or Careem (10–15 min, AED 15–25) is most convenient. Alternatively, take the Green Metro Line from any Deira station to Al Qusais Station and walk 5 minutes." },
      ]}
      reviews={[
        { author: "Ali Hassan Al Nabulsi", rating: 5, text: "Deira local here. Diamond Key is my regular spa — 10 minutes from home and the best value for money in Dubai. The deep tissue massage is particularly outstanding.", service: "Deep Tissue Massage" },
        { author: "Meena Joseph", rating: 5, text: "I stay in a hotel in Deira for business trips. Always visit Diamond Key for their Moroccan bath. It's become my decompression ritual after long flights and busy meetings.", service: "Moroccan Bath" },
        { author: "Abdullah Al Maktoumi", rating: 5, text: "The best spa accessible from Deira. Short taxi ride for a world-class experience. The team is professional, welcoming, and consistently excellent.", service: "Royal Retreat Package" },
        { author: "Renu Sharma", rating: 5, text: "Based in Deira for 8 years. Diamond Key opened near us and transformed my spa options. Finally a luxury spa that's actually nearby and actually worth the price.", service: "Facial Treatment" },
      ]}
      breadcrumbs={[{ name: "Spa Deira", href: "/spa-deira" }]}
      schemaJson={schema}
      keywords={["spa deira", "massage deira dubai", "best spa deira"]}
    />
  );
}
