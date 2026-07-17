import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Body Massage Dubai | Therapeutic Full-Body Massage at Diamond Key Spa",
  description:
    "Experience professional body massage in Al Qusais, Dubai at Diamond Key Spa. Our expert therapists deliver therapeutic full-body massages using effleurage, petrissage, and deep-pressure techniques to relieve muscle tension, improve circulation, and restore total body wellness. Book from AED 150.",
  keywords: [
    "body massage Dubai",
    "full body massage Dubai",
    "therapeutic massage Al Qusais",
    "professional massage Dubai",
    "relaxation massage Dubai",
    "Swedish massage Dubai",
    "muscle tension relief Dubai",
    "massage therapy Al Qusais",
    "best body massage Dubai",
    "affordable massage Dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/services/body-massage` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Body Massage",
  alternateName: "Full-Body Therapeutic Massage",
  description:
    "Professional therapeutic full-body massage at Diamond Key Spa in Al Qusais, Dubai. Techniques include effleurage, petrissage, tapotement, and friction to relieve muscle tension, improve circulation, and promote deep relaxation.",
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.lat,
      longitude: siteConfig.location.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
    },
  },
  serviceType: "Massage Therapy",
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedIn: { "@type": "Country", name: "United Arab Emirates" },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    priceRange: "150–280",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/book-appointment`,
  },
  duration: "PT60M",
  category: "Massage Therapy",
  url: `${siteConfig.url}/services/body-massage`,
};

export default function BodyMassagePage() {
  return (
    <ServicePageTemplate
      name="Body Massage"
      category="Massage Therapy"
      tagline="Expert full-body therapeutic massage for complete relaxation, pain relief, and total body renewal"
      duration="60–120 min"
      priceFrom={150}
      priceTo={280}
      description={[
        "Body massage is one of the oldest healing arts practised across civilisations for thousands of years, and for good reason — it works. At its core, a therapeutic full-body massage involves the systematic manipulation of soft tissues: muscles, connective tissue, tendons, and ligaments. This hands-on therapy stimulates the nervous system, promotes lymphatic drainage, and triggers the release of endorphins and serotonin — the body's natural mood-elevating and pain-relieving chemicals. At Diamond Key Spa in Al Qusais, Dubai, every body massage session is delivered by highly trained, licensed therapists who understand the anatomy of stress, tension, and muscular imbalance in the context of modern urban life.",
        "The techniques employed during a professional body massage are far more nuanced than simple rubbing. Our therapists draw on a repertoire of classical methods: effleurage (long, gliding strokes that warm the tissue and promote venous return), petrissage (kneading and compression movements that break up adhesions and release deep-seated knots), tapotement (rhythmic percussive tapping that invigorates muscle fibres and stimulates the nervous system), and friction (deep, concentrated circular pressure applied to specific trigger points where chronic tension accumulates). Depending on your treatment plan, therapists may also integrate passive stretching of major muscle groups and joint mobilisation, particularly for the shoulders, hips, and lower back — the three regions most commonly seized by desk-bound professionals in Dubai.",
        "What distinguishes Diamond Key Spa from generic massage studios is our individualised pre-treatment consultation. Before you lie on the table, your therapist conducts a brief but thorough assessment: identifying postural imbalances, asking about injury history, locating primary tension zones, and understanding your goals — whether that is pure relaxation, athletic recovery, chronic pain management, or a combination of all three. The session is then tailored accordingly: pressure levels, focus areas, duration, and stroke technique are all calibrated specifically for you. No two body massage sessions at Diamond Key Spa are exactly the same, because no two clients carry stress in the same way.",
        "The holistic benefits of regular body massage extend well beyond the treatment room. Studies published in peer-reviewed journals — including research from the Touch Research Institute at the University of Miami — have documented massage therapy's measurable effects on cortisol reduction, immune function, blood pressure regulation, and sleep quality. For Dubai residents contending with long commutes, high-pressure careers, extreme heat, and the physical toll of a fast-paced lifestyle, scheduled body massage is not a luxury — it is a clinically supported maintenance practice for long-term physical and mental health. We recommend sessions of 60 to 90 minutes every two to four weeks as part of a structured wellness routine.",
      ]}
      benefits={[
        "Relieves chronic muscle tension and stubborn knots in shoulders, neck, and lower back",
        "Improves blood circulation and oxygen delivery to all major muscle groups",
        "Significantly reduces cortisol levels for lasting stress and anxiety relief",
        "Effective pain management for headaches, sciatica, and repetitive strain injuries",
        "Boosts immune system function by stimulating lymphatic drainage and white blood cell activity",
        "Promotes deeper, more restorative sleep through nervous system regulation",
        "Corrects muscular imbalances that contribute to poor posture and spinal misalignment",
        "Nourishes the skin through improved micro-circulation and natural oil stimulation",
      ]}
      whatToExpect={[
        "Arrival & Welcome: You will be greeted at our reception in Al Qusais and offered herbal tea or water. Your therapist will then conduct a 5–10 minute consultation to understand your health history, areas of concern, and desired pressure level. This ensures the session is customised from the very first stroke.",
        "Changing & Preparation: You will be shown to a private, climate-controlled treatment room with soft lighting and ambient music. You will be provided with disposable undergarments and asked to lie on the heated massage table, covered with a fresh cotton sheet. Your modesty is fully maintained throughout the session.",
        "The Massage: Your therapist begins with broad effleurage strokes across the back to warm the muscles, gradually increasing pressure and working systematically through the back, shoulders, arms, legs, and feet. Focus work on tension zones identified in your consultation is integrated mid-session. You may feel light discomfort as deep-seated knots are released — this is entirely normal and a sign of effective work.",
        "Targeted Deep Work: In the final third of your session, your therapist concentrates on the specific trigger points and problem areas you identified — commonly the trapezius, lumbar region, IT band, or calf muscles. Stretching or compression techniques may be applied here for maximum release.",
        "Closing & Afterglow: The session ends with calming effleurage strokes and a gentle scalp massage to ease you into a relaxed state. Your therapist will leave the room, allowing you to rest on the table for a few minutes before dressing. You will be offered water and post-treatment advice before departure.",
      ]}
      whoIsItFor={[
        "Office workers and desk-bound professionals experiencing neck, shoulder, and lower back tension",
        "Athletes and gym-goers seeking faster muscle recovery between training sessions",
        "Chronic pain sufferers dealing with conditions such as sciatica, fibromyalgia, or tension headaches",
        "Individuals experiencing high levels of work-related stress, anxiety, or emotional burnout",
        "People with disrupted sleep patterns who want a natural, non-pharmaceutical remedy",
        "Anyone simply seeking a deeply restorative and rejuvenating full-body relaxation experience",
      ]}
      preparation={[
        "Hydrate well throughout the day before your appointment — well-hydrated muscles respond better to manipulation and release toxins more effectively post-session",
        "Avoid eating a large meal within 90 minutes of your massage to prevent discomfort when lying face-down on the table",
        "Arrive 10–15 minutes early to complete your consultation form and settle into a calm state before the session begins",
        "Inform your therapist of any medical conditions, recent injuries, surgeries, or areas of skin sensitivity so the treatment can be safely adapted",
        "Avoid alcohol consumption before your appointment, as it can amplify the sedative effect of massage and impair your body's ability to process released toxins",
      ]}
      aftercare={[
        "Drink at least 500ml of water immediately after your session and continue hydrating for the rest of the day — massage mobilises metabolic waste into the bloodstream and hydration accelerates its elimination",
        "Rest and avoid strenuous exercise for at least 6–8 hours after a deep therapeutic massage to allow your muscles time to recover and recalibrate",
        "A warm (not hot) bath with Epsom salts within a few hours of your session can further ease any residual muscular soreness and extend the relaxation effect",
        "Apply a gentle moisturiser or body oil to the treated areas — your skin's micro-circulation has been stimulated and will absorb nourishment more effectively than usual",
        "Schedule your next session before you leave — the cumulative benefits of regular massage are exponentially greater than one-off treatments, and our reception team can help you set up a wellness schedule",
      ]}
      faqs={[
        {
          question: "How often should I get a body massage in Dubai?",
          answer:
            "For general wellness and stress management, we recommend a 60–90 minute body massage every two to four weeks. If you are managing a specific condition such as chronic back pain, post-workout recovery, or a repetitive strain injury, weekly sessions may be more appropriate initially, then spaced out as improvement is achieved. Your therapist will advise you on an optimal frequency during your first consultation.",
        },
        {
          question: "What is the difference between a Swedish massage and a deep tissue massage?",
          answer:
            "A Swedish (or classic body) massage uses lighter to medium pressure with long, flowing strokes designed primarily for relaxation and improved circulation. Deep tissue massage uses slower, more intense pressure to reach the deeper layers of muscle and connective tissue, targeting chronic tension and adhesions. Our therapists can blend both approaches in a single session based on your needs and comfort level.",
        },
        {
          question: "Is a body massage safe if I have high blood pressure?",
          answer:
            "Gentle to moderate-pressure massage is generally considered safe and even beneficial for individuals with well-controlled hypertension, as it can help lower blood pressure through relaxation and improved circulation. However, if your blood pressure is currently uncontrolled or you are awaiting medication adjustment, please consult your doctor before booking. Always disclose your medical history to your therapist during the pre-treatment consultation.",
        },
        {
          question: "Will I be fully undressed during the massage?",
          answer:
            "You will be provided with disposable undergarments and are welcome to wear whatever level of clothing you are comfortable with. Your body will remain covered by a clean cotton sheet at all times — only the area being actively worked on is ever uncovered. Your privacy, comfort, and modesty are our absolute priority.",
        },
        {
          question: "I am pregnant — can I still book a body massage?",
          answer:
            "Yes, with some important modifications. Pregnancy massage (or prenatal massage) is a specialised technique that avoids certain pressure points and positions that are contraindicated during pregnancy. We offer adapted sessions for expectant mothers in their second and third trimesters. Please inform us of your pregnancy when booking so we can assign an appropriately trained therapist.",
        },
        {
          question: "How long will the relaxation effect last after a body massage?",
          answer:
            "Most clients experience noticeable relaxation and reduced muscle tension for 24–72 hours following a session. With regular treatments, the cumulative effects — including improved posture, reduced baseline stress levels, and better sleep — can last for weeks. The key is consistency: clients who commit to a regular schedule of two sessions per month report dramatically longer-lasting results.",
        },
      ]}
      relatedServices={[
        { name: "Deep Tissue Massage", href: "/services/deep-tissue-massage" },
        { name: "Aromatherapy Massage", href: "/services/aromatherapy" },
        { name: "Hot Stone Massage", href: "/services/hot-stone-massage" },
        { name: "Moroccan Bath", href: "/services/moroccan-bath" },
        { name: "Body Scrub", href: "/services/body-scrub" },
      ]}
      breadcrumbs={[
        { name: "Services", href: "/services" },
        { name: "Body Massage", href: "/services/body-massage" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
