import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Massage Spa Al Qusais Dubai | Diamond Key Spa — Book from AED 150",
  description:
    "Professional massage spa in Al Qusais, Dubai. Deep tissue, aromatherapy, hot stone & Swedish massage by certified therapists. 5 min from metro. Open daily until 12:30 AM.",
  keywords: [
    "massage spa al qusais", "massage al qusais dubai", "body massage al qusais",
    "deep tissue massage al qusais", "aromatherapy al qusais", "hot stone massage al qusais",
  ],
  alternates: { canonical: `${siteConfig.url}/massage-spa-al-qusais` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Massage Spa — Al Qusais Dubai",
  description: "Professional massage spa in Al Qusais, Dubai. Deep tissue, aromatherapy, hot stone & Swedish massage by certified therapists.",
  url: `${siteConfig.url}/massage-spa-al-qusais`,
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

export default function MassageSpaAlQusaisPage() {
  return (
    <LocalSeoTemplate
      heading="Massage Spa in Al Qusais — Diamond Key Spa"
      subheading="Al Qusais's specialist massage spa. Deep tissue, aromatherapy, hot stone, Swedish and therapeutic massage by certified professionals. Results that last beyond the treatment room."
      areaName="Al Qusais"
      distance="5 min walk from Al Qusais Metro"
      intro={[
        "Diamond Key Spa is Al Qusais's premier destination for professional massage therapy. We specialise in evidence-based massage modalities that address real physical and psychological needs — not just relaxation, but therapeutic results that last.",
        "Our massage therapists are certified professionals with years of clinical training in diverse techniques including Deep Tissue Massage, Aromatherapy Massage, Hot Stone Massage, Swedish Relaxation Massage, Couples Massage, and our signature Massage Spa Experience. Each session begins with a consultation to understand your specific needs and health conditions.",
        "Located just 5 minutes walk from Al Qusais Metro Station, our massage spa is easily accessible from anywhere in Dubai. We are open daily until 12:30 AM, making us the ideal option for after-work massage sessions.",
      ]}
      transitInfo={[
        "Al Qusais Metro Station (Green Line) — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "Bus stop adjacent to Al Qusais Industrial Area 5",
        "Taxi and rideshare available at metro exit",
        "Free parking for clients with vehicles",
      ]}
      nearbyLandmarks={[
        "Al Qusais Metro Station — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "Dubai International Airport — 15 min drive",
        "City Centre Deira — 10 min drive",
        "Al Qusais Park — 5 min drive",
      ]}
      directions="Our massage spa is in Al Qusais Industrial Area 5. From Al Qusais Metro, walk south approximately 5 minutes. If driving, enter Industrial Area 5 via the main access road. Parking is free and plentiful outside our premises."
      uniqueContent={[
        "Our massage services at Al Qusais are designed to address the most common health challenges faced by Dubai's working population: chronic neck and shoulder tension from desk work, lower back pain from long commutes, stress-related muscle tightness, and fatigue from the Dubai lifestyle.",
        "Every massage at Diamond Key begins with a health consultation. We ask about medical history, current conditions, areas of concern, and your specific goals — whether pain relief, stress reduction, or pure relaxation. This information guides the entire treatment, including pressure, technique, and oil selection.",
        "Our aromatherapy massage uses certified organic essential oil blends from European suppliers, selected based on your individual needs. Our deep tissue massage follows precise anatomical protocols developed in consultation with wellness experts. Our hot stone massage uses genuine basalt stones heated to therapeutic temperatures.",
      ]}
      faqs={[
        { question: "What types of massage do you offer in Al Qusais?", answer: "We offer Body Massage (Swedish/relaxation), Deep Tissue Massage, Aromatherapy Massage, Hot Stone Massage, Couples Massage, Foot Reflexology, and our full Massage Spa Experience package. All sessions include a pre-treatment health consultation." },
        { question: "How much does a massage cost in Al Qusais at Diamond Key?", answer: "Massage prices start from AED 130 (Foot Reflexology, 45 min) and AED 150 (Body Massage, 60 min). Deep Tissue and Aromatherapy start from AED 200–220. Hot Stone from AED 250. Full Massage Spa Experience from AED 280." },
        { question: "Are your Al Qusais massage therapists certified?", answer: "Yes, all therapists at Diamond Key Spa are certified professionals with formal training in massage therapy. We employ both male and female therapists and you can specify your preference when booking." },
        { question: "Can massage help with chronic back pain?", answer: "Deep tissue massage is one of the most evidence-based interventions for chronic back pain. Our therapists specialize in targeting the specific muscle groups responsible for lower and upper back pain. Many clients report significant relief after 1–3 sessions." },
      ]}
      reviews={[
        { author: "Faisal Al Zaabi", rating: 5, text: "The best massage spa in Al Qusais without question. The deep tissue therapist here found knots in my back I didn't even know existed. Left feeling 10 years younger.", service: "Deep Tissue Massage" },
        { author: "Ananya Krishnan", rating: 5, text: "I've tried several massage places in Al Qusais and the surrounding area. Diamond Key is miles ahead in terms of therapist skill and product quality.", service: "Aromatherapy Massage" },
        { author: "Carlos Rodriguez", rating: 5, text: "First time trying hot stone massage and I was blown away. The therapist used the stones as tools, not just heat sources. Absolutely therapeutic.", service: "Hot Stone Massage" },
        { author: "Hind Al Farsi", rating: 5, text: "I come here every month for my Swedish massage. The consistency is remarkable — same quality every single time. The team knows my pressure preferences now without being asked.", service: "Body Massage" },
      ]}
      breadcrumbs={[{ name: "Massage Spa Al Qusais", href: "/massage-spa-al-qusais" }]}
      schemaJson={schema}
      keywords={["massage spa al qusais", "massage al qusais dubai", "body massage al qusais"]}
    />
  );
}
