import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Facial Treatments Dubai | Advanced Skincare at Diamond Key Spa Al Qusais",
  description:
    "Discover advanced, medical-grade facial treatments at Diamond Key Spa in Al Qusais, Dubai. From hydrating and anti-aging to deep cleansing and brightening facials — each treatment is customised to your skin type and Dubai's climate. Book from AED 180.",
  keywords: [
    "facial treatment Dubai",
    "advanced facial Al Qusais",
    "anti-aging facial Dubai",
    "hydrating facial Dubai",
    "brightening facial Dubai",
    "deep cleansing facial Dubai",
    "acne facial Dubai",
    "skin rejuvenation Dubai",
    "medical-grade facial Dubai",
    "best facial spa Al Qusais",
  ],
  alternates: { canonical: `${siteConfig.url}/services/facial-treatments` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Facial Treatments",
  alternateName: "Advanced Skincare Facials",
  description:
    "Advanced medical-grade facial treatments at Diamond Key Spa, Al Qusais Dubai. Treatments include hydrating, anti-aging, brightening, deep cleansing, and acne control facials — each customised via skin consultation to address Dubai's climate challenges.",
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
  serviceType: "Facial & Skincare",
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedIn: { "@type": "Country", name: "United Arab Emirates" },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    priceRange: "180–400",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/book-appointment`,
  },
  duration: "PT60M",
  category: "Facial & Skincare",
  url: `${siteConfig.url}/services/facial-treatments`,
};

export default function FacialTreatmentsPage() {
  return (
    <ServicePageTemplate
      name="Facial Treatments"
      category="Facial & Skincare"
      tagline="Advanced medical-grade facials customized for Dubai's climate and your unique skin needs"
      duration="45–90 min"
      priceFrom={180}
      priceTo={400}
      description={[
        "Dubai's environment presents a uniquely demanding challenge for skin health. The combination of year-round UV intensity that ranks among the highest in the world, extreme transitions between outdoor heat exceeding 45°C and heavily air-conditioned interiors, dust and particulate matter carried on the Shamal winds, and hard municipal water with elevated mineral content creates a perfect storm of dermatological stressors that affects residents regardless of their natural skin type. Over time, this environment accelerates the depletion of the skin's moisture barrier, promotes uneven pigmentation, clogs pores with environmental debris, and accelerates the visible signs of premature ageing. Off-the-shelf skincare products sold in pharmacies are formulated for average global conditions — not for the specific and intensified stressors of life in the UAE. This is precisely why the professional facial treatments offered at Diamond Key Spa in Al Qusais are designed not as generic spa indulgences but as targeted, clinically informed interventions for skin living under Dubai's conditions.",
        "Diamond Key Spa's facial menu encompasses five core treatment categories, each addressing a distinct set of skin concerns. Our Hydration Intensive facial is built around hyaluronic acid-based serums, peptide complexes, and osmotic moisture-locking masks to restore the moisture barrier depleted by air-conditioning and arid heat — the most commonly requested treatment among Dubai residents. Our Brightening & Pigmentation facial uses a combination of vitamin C derivatives, kojic acid, niacinamide, and controlled enzyme exfoliants to address sun-induced hyperpigmentation, uneven tone, and the dullness caused by accumulated dead cells and oxidative stress. Our Anti-Ageing Lift facial deploys medical-grade retinol analogues, collagen-stimulating peptides, growth factor serums, and microcurrent-adjacent massage techniques to visibly firm, plump, and refine the appearance of fine lines and loss of elasticity. Our Deep Cleansing & Pore Refinement facial combines steam, manual extraction, salicylic acid-based chemical exfoliation, and zinc-infused purifying masks to address oiliness, enlarged pores, and congestion. Finally, our Acne Control facial integrates antibacterial botanicals, benzoyl peroxide or tea tree-based spot treatments, and LED-light-inspired calming serums to reduce active breakouts and prevent recurrence.",
        "The foundation of every facial treatment at Diamond Key Spa is a comprehensive pre-treatment skin consultation conducted by your therapist before a single product touches your face. Using a skin analysis protocol that evaluates hydration levels, sebum activity, pore size, pigmentation distribution, sensitivity indicators, and existing product usage, your therapist maps a personalised treatment plan for the session. Products are selected specifically for your skin on that day — not based on a pre-packaged protocol assigned to all clients in the same category. This bespoke approach is particularly important in Dubai, where a client's skin can change dramatically between seasons, and where factors such as diet, travel, stress levels, and prescription medications all intersect with environmental stressors to produce highly individual skin states.",
        "The ingredients and technologies employed in our facial treatments are sourced exclusively from professional-grade skincare lines that use rigorously tested active ingredient concentrations above the levels found in consumer products. Our core ingredient palette includes hyaluronic acid in multiple molecular weights for layered hydration at different skin depths, L-ascorbic acid (vitamin C) at professionally formulated concentrations for antioxidant protection and collagen synthesis, encapsulated retinoids for controlled anti-ageing activity without irritation, mandelic and lactic acids for gentle chemical exfoliation suited to sensitive Dubai skin, niacinamide for barrier repair and pigmentation control, and botanical extracts including centella asiatica, sea buckthorn, and bakuchiol for their documented anti-inflammatory and regenerative properties. Our therapists also incorporate advanced manual techniques — lymphatic drainage massage of the décolleté and neck, gua sha-inspired sculpting strokes, and fascia-releasing pressure point work — that significantly enhance product penetration and produce the visible lifting and contouring effect our clients associate with a Diamond Key facial.",
      ]}
      benefits={[
        "Deep cleansing removes makeup residue, SPF, pollution particles, and sebum from pores that daily cleansing cannot reach",
        "Targeted active ingredients reverse UV-induced pigmentation, fine lines, and moisture loss at a cellular level",
        "Professional exfoliation removes the dead skin layer and dramatically accelerates the penetration of your daily skincare products",
        "Personalised treatment addresses your specific skin concerns rather than a generic one-size-fits-all protocol",
        "Lymphatic drainage facial massage reduces puffiness, sculpts jawline contours, and improves skin clarity",
        "Immediate and visible brightening, firming, and radiance effect that lasts well beyond the treatment day",
        "Expert advice on the most effective daily skincare routine and products for your skin type and Dubai's climate",
        "Preventive anti-ageing benefits — regular professional facials consistently outperform topical products alone in clinical studies",
      ]}
      whatToExpect={[
        "Skin Consultation: Your therapist begins with a detailed skin analysis using professional observation and targeted questions about your skin history, current concerns, lifestyle factors, and existing skincare products. Based on this consultation, your specific facial treatment is selected and the product protocol is customised. This step takes 10–15 minutes and is the foundation of an effective, results-driven session.",
        "Cleanse & Preparation: A double-cleanse removes all traces of SPF, makeup, and surface impurities. A gentle toner appropriate to your skin type is then applied to balance the skin's pH and prepare it for active ingredient absorption. Steam may be introduced at this stage to gently open the pores and soften congestion ahead of exfoliation.",
        "Exfoliation & Extraction: Depending on your skin type, your therapist applies either a mechanical exfoliant (enzyme or scrub) or a chemical exfoliant (AHA/BHA solution) to accelerate cell turnover and clear the follicles. Manual extraction of blackheads and congestion is performed under steam for clients with oily or combination skin, using precise technique that avoids skin damage or post-extraction marks.",
        "Active Treatment Serums & Mask: The core of your facial — the treatment phase — involves the targeted application of concentrated serums selected to address your specific concerns (hydration, brightening, firming, or clarifying). These are followed by a treatment mask appropriate to your skin state, which is left on for 10–20 minutes to allow maximum ingredient penetration. During the mask phase, your therapist performs a scalp, shoulder, and hand massage to enhance your relaxation.",
        "Moisturisation, SPF & Finishing: The mask is removed and your skin is assessed before a hydrating serum, barrier-repair moisturiser, and broad-spectrum SPF 50 are applied in sequence. Your therapist provides verbal aftercare advice and product recommendations tailored to your skin profile. You will leave with skin that looks immediately healthier, brighter, and more refined — and that is primed to continue improving over the 48–72 hours following the session.",
      ]}
      whoIsItFor={[
        "Those with acne-prone or congested skin seeking professional deep cleansing and evidence-based breakout control",
        "Individuals with signs of premature ageing including fine lines, loss of firmness, and reduced skin elasticity",
        "Dubai residents experiencing chronic skin dehydration caused by air-conditioning and the desert climate",
        "Those with sun damage, uneven pigmentation, or post-inflammatory hyperpigmentation from acne scarring",
        "First-time facial clients who want a professional skin consultation to understand their skin type and build an effective routine",
        "Anyone seeking an immediate, visible improvement in skin radiance, luminosity, and overall glow for an event or occasion",
      ]}
      preparation={[
        "Arrive with a clean face — remove all makeup and SPF before your appointment if possible, or arrive slightly early so your therapist can perform the cleanse in a relaxed manner rather than rushing into treatment time",
        "Avoid using any retinol, AHA, BHA, or other active exfoliating products for 48 hours before your facial to prevent over-sensitisation and ensure your skin responds optimally to the professional-grade actives used in the treatment",
        "Disclose any prescription topical medications (such as tretinoin, antibiotics, or steroid creams) to your therapist during consultation, as these affect which professional actives can safely be used on your skin",
        "Do not schedule a facial within 2 weeks of any professional chemical peel, laser treatment, or dermal filler appointment, and always inform your therapist if you have had any recent cosmetic procedures",
        "Come without expectations of a specific pressure or massage intensity — your therapist's primary goal is the health and results of your skin, not relaxation, though the two are often compatible and both will be prioritised",
      ]}
      aftercare={[
        "Apply SPF 50 every morning for at least one week after your facial — freshly exfoliated skin has reduced melanin defence and is more susceptible to UV-induced pigmentation, which is counterproductive after a brightening or anti-ageing treatment",
        "Avoid touching your face with your hands for at least 12 hours after the treatment, particularly after extractions, to prevent bacterial transfer to open follicles",
        "Do not apply retinol, acids, or other active exfoliants for at least 48 hours after your facial to avoid over-exfoliation and potential barrier disruption",
        "Use only the gentle, hydrating products recommended by your therapist for the first 24–48 hours — your skin is in an optimal receiving state and will benefit most from simple, nourishing ingredients rather than active compounds",
        "Book your next facial within 4–6 weeks — professional facials are most effective as a regular programme rather than one-off events, and your therapist can track the progress of your skin concerns and adapt the protocol with each successive session",
      ]}
      faqs={[
        {
          question: "How often should I get a professional facial in Dubai?",
          answer:
            "For most skin types living in Dubai's climate, we recommend a professional facial every 4–6 weeks, aligned with the skin's natural cell turnover cycle of approximately 28 days. If you are undergoing a targeted programme for acne, pigmentation correction, or anti-ageing, your therapist may recommend more frequent initial sessions (every 2–3 weeks) to achieve a treatment threshold before spacing out to monthly maintenance. Consistency is the most important factor in achieving lasting results.",
        },
        {
          question: "Which facial treatment is best for Dubai's heat and humidity?",
          answer:
            "For most Dubai residents, the Hydration Intensive facial is the most foundational treatment, as chronic dehydration caused by air-conditioning and dry heat is the most prevalent underlying skin concern — even in clients with oily or combination skin. We also strongly recommend periodic Brightening facials due to the high UV index, which drives melanin overproduction year-round. During your consultation, your therapist will assess your specific skin state and recommend the most beneficial treatment for your current condition.",
        },
        {
          question: "Is it normal for my skin to purge or breakout after a facial?",
          answer:
            "A minor breakout response within 24–72 hours of a deep-cleansing facial is relatively common and is sometimes referred to as a purge. This occurs when the treatment accelerates the emergence of congestion that was already forming beneath the surface. This is not a negative reaction — it indicates the treatment has effectively cleared the follicles. True adverse reactions (significant swelling, sustained redness, or hives) are rare and typically related to a product sensitivity that your therapist should be informed of immediately.",
        },
        {
          question: "Can I get a facial if I have active acne or a skin condition?",
          answer:
            "Yes — in fact, a professional facial is often the most effective intervention for active acne when performed correctly by a trained therapist. Our Acne Control facial uses ingredients and techniques specifically designed for inflamed, breakout-prone skin. However, conditions such as active cystic acne, severe rosacea, active eczema, or psoriasis may require modified protocols. Always inform your therapist of any diagnosed skin conditions so the treatment can be adapted safely.",
        },
        {
          question: "Will I see results immediately after one facial?",
          answer:
            "Yes — most clients see a visible improvement in skin radiance, hydration, and clarity immediately after a single session. The skin continues to improve for 48–72 hours as the actives complete their work and cellular processes stimulated by the treatment unfold. However, for addressing chronic concerns such as hyperpigmentation, deep lines, or persistent acne, a programme of 4–6 monthly sessions is required to achieve the full intended result.",
        },
        {
          question: "Are your facial products safe for all skin tones including darker skin types?",
          answer:
            "Yes. All products and protocols used at Diamond Key Spa are selected with the full spectrum of Fitzpatrick skin types in mind, including the rich melanin-dense skin tones common among our diverse Dubai clientele. Certain brightening actives that carry a risk of post-inflammatory hyperpigmentation in deeper skin tones (such as high-concentration AHAs or aggressive peels) are used with modified concentrations and timings when treating Fitzpatrick IV–VI skin. Your therapist will always adjust the protocol to maximise safety and results for your specific skin tone.",
        },
      ]}
      relatedServices={[
        { name: "Body Massage", href: "/services/body-massage" },
        { name: "Moroccan Bath", href: "/services/moroccan-bath" },
        { name: "Aromatherapy Massage", href: "/services/aromatherapy" },
        { name: "Body Scrub", href: "/services/body-scrub" },
        { name: "Hot Stone Massage", href: "/services/hot-stone-massage" },
      ]}
      breadcrumbs={[
        { name: "Services", href: "/services" },
        { name: "Facial Treatments", href: "/services/facial-treatments" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
