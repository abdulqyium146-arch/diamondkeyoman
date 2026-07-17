import type { Metadata } from "next";
import LocalSeoTemplate from "@/components/local-seo/LocalSeoTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Relaxation Spa Dubai | Diamond Key Spa — Stress Relief & Total Unwinding",
  description:
    "Best relaxation spa in Dubai. Diamond Key Spa offers aromatherapy, Swedish massage & holistic treatments for stress relief. Al Qusais. Open daily 9AM–12:30AM.",
  keywords: [
    "relaxation spa dubai", "stress relief spa dubai", "relaxing massage dubai",
    "unwinding spa dubai", "aromatherapy dubai", "stress spa dubai", "calming spa dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/relaxation-spa-dubai` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["DaySpa", "LocalBusiness"],
  name: "Diamond Key Relaxation Spa — Dubai",
  description: "Relaxation spa in Dubai. Aromatherapy, Swedish massage and holistic treatments for stress relief in Al Qusais.",
  url: `${siteConfig.url}/relaxation-spa-dubai`,
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

export default function RelaxationSpaDubaiPage() {
  return (
    <LocalSeoTemplate
      heading="Relaxation Spa Dubai — Diamond Key Spa"
      subheading="Dubai's antidote to stress. A peaceful sanctuary designed for total unwinding — where your nervous system resets, your muscles release, and you rediscover what calm feels like."
      areaName="Dubai"
      distance="15 min from Dubai city centre"
      intro={[
        "Dubai is one of the most stimulating cities on earth — but also one of the most stressful. Long working hours, traffic, the heat, the noise, and the psychological pressure of high-achieving, fast-paced professional life creates a chronic stress burden that most Dubai residents carry 24 hours a day.",
        "Diamond Key Spa was designed as a deliberate counterpoint to this reality. Our relaxation spa in Al Qusais is a sanctuary where the pace slows down, the noise disappears, and your nervous system — often running on constant high alert — finally gets permission to rest.",
        "Our relaxation treatments are not passive luxuries. Aromatherapy massage, Swedish massage, and our guided relaxation sequences produce measurable physiological changes: reduced cortisol levels, lowered heart rate, activated parasympathetic (rest-and-digest) nervous system function, and improved sleep quality. This is science-backed relaxation, not indulgence.",
      ]}
      transitInfo={[
        "Al Qusais Metro Station (Green Line) — 5 min walk",
        "Al Nahda Metro Station — 8 min walk",
        "Taxi and Careem available from anywhere in Dubai",
        "15 minutes from Downtown, Marina, and JBR",
        "Free parking for those driving",
      ]}
      nearbyLandmarks={[
        "Al Qusais Metro Station — 5 min walk",
        "Dubai International Airport — 15 min drive",
        "Al Mamzar Beach Park — 15 min drive",
        "City Centre Deira — 10 min drive",
        "Al Nahda — adjacent area",
      ]}
      directions="Diamond Key Spa is located in Al Qusais Industrial Area 5, a 5-minute walk from Al Qusais Metro Station. We are open daily until 12:30 AM, making it easy to visit after even the longest work day."
      uniqueContent={[
        "Our most popular relaxation treatment is Aromatherapy Massage — a 60–90 minute journey using certified organic essential oil blends selected for your specific stress profile. Lavender and chamomile for anxiety-driven tension. Eucalyptus and peppermint for mental fatigue. Rose and geranium for emotional exhaustion. Our therapists are trained in aromatherapy science, not just application.",
        "The physical environment of our relaxation spa has been carefully curated to support the experience. Ambient lighting adjusted to the optimal level for nervous system relaxation. Temperature controlled for comfort. Acoustic environment designed to promote calm rather than stimulate alertness. These factors are not incidental — they are scientifically supported elements of effective relaxation therapy.",
        "Many clients tell us that their first visit to Diamond Key Spa was the first time in months they experienced true mental quiet — even briefly. Regular monthly visits, they report, create a progressively deeper state of baseline calm in their daily lives. This cumulative benefit of consistent relaxation therapy is well-documented in wellness research.",
      ]}
      faqs={[
        { question: "What is the best relaxation treatment at Diamond Key Dubai?", answer: "For pure relaxation, we recommend Aromatherapy Massage (AED 200 for 60 min). It combines the therapeutic effects of organic essential oils with flowing massage techniques to produce the deepest state of relaxation we can offer." },
        { question: "Can spa treatments really help with stress and anxiety?", answer: "Yes — this is well-documented in clinical research. Studies show that a single 45-minute massage reduces cortisol by an average of 31% and increases serotonin. Regular sessions produce cumulative benefits including improved sleep, reduced anxiety, and better emotional regulation." },
        { question: "How long should I book for a relaxation session?", answer: "We recommend a minimum of 60 minutes for effective relaxation treatment. 90 minutes allows for a deeper and more complete experience. For a full relaxation journey, our Royal Retreat Package (3 hours) delivers the most comprehensive results." },
        { question: "Is your relaxation spa quiet? I need real peace.", answer: "Absolute tranquility is our priority. Our treatment rooms are acoustically isolated. Phones are silenced in the spa. Staff communicate quietly. You will experience genuine silence and peace from the moment you enter your treatment room." },
      ]}
      reviews={[
        { author: "Nadia Aziz", rating: 5, text: "I came in completely overwhelmed — work, family, everything. Left feeling like a different person. The aromatherapy massage at Diamond Key is genuinely the most relaxing experience I've ever had.", service: "Aromatherapy Massage" },
        { author: "Robert Fischer", rating: 5, text: "As someone who works 60+ hours a week, monthly visits to Diamond Key Spa are non-negotiable. The relaxation here is profound — not just surface level. My sleep quality improved dramatically.", service: "Body Massage" },
        { author: "Yasmin Al Habsi", rating: 5, text: "The moment you enter Diamond Key, the stress melts away. The environment, the scent, the quiet — everything is designed to make you relax. Then the treatment begins and it's even better.", service: "Aromatherapy Massage" },
        { author: "Ivan Petrov", rating: 5, text: "Three hours in the Royal Retreat package and I felt like I'd had a week's holiday. This is the most effective stress relief available in Dubai. I'm absolutely convinced of it.", service: "Royal Retreat Package" },
      ]}
      breadcrumbs={[{ name: "Relaxation Spa Dubai", href: "/relaxation-spa-dubai" }]}
      schemaJson={schema}
      keywords={["relaxation spa dubai", "stress relief spa dubai", "aromatherapy dubai"]}
    />
  );
}
