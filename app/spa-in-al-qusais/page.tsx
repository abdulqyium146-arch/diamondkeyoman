import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Spa in Al Qusais Dubai | Diamond Key Spa — Luxury Treatments from AED 130",
  description:
    "Best spa in Al Qusais, Dubai. Diamond Key Spa offers massage, Moroccan bath, facials & spa packages. 5 min from Al Qusais Metro. Open daily 9AM–12:30AM. Book now: +971 54 490 7283.",
  keywords: [
    "spa in al qusais", "spa al qusais dubai", "massage al qusais", "al qusais spa",
    "best spa al qusais", "luxury spa al qusais dubai", "moroccan bath al qusais",
  ],
  alternates: { canonical: `${siteConfig.url}/spa-in-al-qusais` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Spa — Spa in Al Qusais Dubai",
  description: "Premier luxury day spa in Al Qusais Industrial Area 5, Dubai. Professional massage, Moroccan bath, facial treatments and spa packages.",
  url: `${siteConfig.url}/spa-in-al-qusais`,
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

export default function SpaInAlQusaisPage() {
  return (
    <LocalSeoTemplate
      heading="Spa in Al Qusais — Diamond Key Spa"
      subheading="Al Qusais's premier luxury day spa. Professional massage therapy, authentic Moroccan hammam, and premium facial treatments — right in your neighbourhood."
      areaName="Al Qusais"
      distance="Walking distance from Al Qusais Metro"
      intro={[
        "Diamond Key Spa is Al Qusais's most trusted luxury day spa, located right in the heart of Al Qusais Industrial Area 5. Whether you live in Al Qusais or work nearby, we offer convenient access to world-class spa treatments without the need to travel to hotel spas or more distant parts of Dubai.",
        "As the neighbourhood spa of choice for thousands of Al Qusais residents and professionals, we understand the local community's needs. We offer flexible hours (open daily until 12:30 AM), competitive pricing starting from AED 130, and a team of certified therapists with years of clinical experience.",
        "Our spa features private treatment rooms, an authentic Moroccan hammam, dedicated facial studios, and a peaceful relaxation lounge — all designed to provide a true luxury experience in a convenient Al Qusais location.",
      ]}
      transitInfo={[
        "Al Qusais Metro Station (Green Line) — 5 minutes walk",
        "Al Nahda Metro Station (Green Line) — 8 minutes walk",
        "Bus route 31, C9, C21 — stop adjacent to Industrial Area 5",
        "Taxi and Careem / Uber available from Metro stations",
        "Free on-site parking for clients with vehicles",
      ]}
      nearbyLandmarks={[
        "Al Qusais Metro Station — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "City Centre Deira — 10 min drive",
        "Dubai International Airport — 15 min drive",
        "Lulu Hypermarket Al Qusais — 3 min drive",
      ]}
      directions="Diamond Key Spa is located in Al Qusais Industrial Area 5. From Al Qusais Metro Station, walk south for approximately 5 minutes. If driving, enter Al Qusais Industrial Area 5 via the main entrance road. Free parking is available directly outside our spa."
      uniqueContent={[
        "Al Qusais is one of Dubai's most vibrant mixed residential and commercial communities, home to a diverse population of Emirati nationals and expatriates from across South Asia, the Arab world, and beyond. Diamond Key Spa was established here to serve this community with world-class treatments at accessible prices.",
        "Our Al Qusais location gives us a unique advantage: we are conveniently accessible by metro, affordable parking is always available, and our extended hours (until 12:30 AM) accommodate even the busiest professional schedules in the area.",
        "We are proud to be part of the Al Qusais community and serve clients who return month after month. Our loyalty program rewards regular visitors, and our staff — many of whom also live locally — bring genuine warmth and familiarity to every interaction.",
      ]}
      faqs={[
        { question: "Where exactly is Diamond Key Spa in Al Qusais?", answer: "We are located in Al Qusais Industrial Area 5, Dubai. Our Google Plus Code is 7CR3+MXV. We are approximately 5 minutes walk from Al Qusais Metro Station on the Green Line." },
        { question: "What are your hours in Al Qusais?", answer: "We are open daily from 9:00 AM to 12:30 AM, including weekends and public holidays. No appointment necessary for walk-ins, though booking ahead is recommended." },
        { question: "Do you offer parking at your Al Qusais spa?", answer: "Yes, free on-site parking is available for all clients. There is ample space in the adjacent industrial area car park directly outside our premises." },
        { question: "What is the cheapest treatment at your Al Qusais spa?", answer: "Our Foot Reflexology treatment starts from AED 130 for a 45-minute session. Body Massage starts from AED 150. We offer treatments for every budget." },
        { question: "Can I walk in without an appointment?", answer: "Walk-ins are welcome based on therapist availability. For guaranteed service at your preferred time, we recommend booking 24 hours in advance by calling or WhatsApp." },
      ]}
      reviews={[
        { author: "Khalid Al Mansoori", rating: 5, text: "Diamond Key is the best spa in Al Qusais. I've been coming here every month for two years. The deep tissue massage is exceptional — better than any hotel spa I've tried in Dubai.", service: "Deep Tissue Massage" },
        { author: "Rekha Nair", rating: 5, text: "Finally a proper luxury spa in our neighbourhood! The Moroccan bath here is absolutely authentic. My skin has never felt so smooth. Worth every dirham.", service: "Moroccan Bath" },
        { author: "Abdullah Hassan", rating: 5, text: "Convenient location, superb therapists, and open late — exactly what Al Qusais needed. I recommend Diamond Key Spa to everyone I know in the area.", service: "Body Massage" },
        { author: "Sunita Pillai", rating: 5, text: "I work in Al Qusais Industrial Area and pop in here after work. The fact that they're open until 12:30 AM is a game changer. Excellent aromatherapy massage.", service: "Aromatherapy Massage" },
      ]}
      breadcrumbs={[{ name: "Spa in Al Qusais", href: "/spa-in-al-qusais" }]}
      schemaJson={schema}
      keywords={["spa in al qusais", "al qusais spa dubai", "massage al qusais"]}
    />
  );
}
