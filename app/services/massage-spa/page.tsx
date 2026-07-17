import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Massage Spa Dubai | Complete Luxury Spa Massage Experience at Diamond Key Spa Al Qusais",
  description:
    "Diamond Key Spa's signature Massage Spa Experience in Al Qusais, Dubai. A 90–120 minute journey combining Swedish, deep tissue, aromatherapy, and acupressure into one comprehensive wellness protocol. The most complete massage experience in Dubai. From AED 280.",
  keywords: [
    "massage spa Dubai",
    "luxury spa massage Dubai",
    "signature massage Dubai",
    "best massage Dubai",
    "full body spa experience Dubai",
    "spa treatment Al Qusais",
    "comprehensive massage Dubai",
    "combined massage therapy Dubai",
    "massage spa Al Qusais",
    "ultimate spa experience Dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/services/massage-spa` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Massage Spa Experience",
  alternateName: "Diamond Key Signature Full-Body Spa Massage",
  description:
    "Diamond Key Spa's signature 90–120 minute Massage Spa Experience in Al Qusais, Dubai. A comprehensive wellness protocol integrating Swedish, deep tissue, aromatherapy, and acupressure modalities in a seamless sequence — delivering complete relaxation, pain relief, skin nourishment, and emotional restoration in a single transformative session.",
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
  serviceType: "Signature Massage Treatment",
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedIn: { "@type": "Country", name: "United Arab Emirates" },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    priceRange: "280–450",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/book-appointment`,
  },
  duration: "PT105M",
  category: "Signature Treatment",
  url: `${siteConfig.url}/services/massage-spa`,
};

export default function MassageSpaPage() {
  return (
    <ServicePageTemplate
      name="Massage Spa Experience"
      category="Signature Treatment"
      tagline="Diamond Key's signature all-encompassing spa massage — the ultimate fusion of techniques for total body and mind transformation"
      duration="90–120 min"
      priceFrom={280}
      priceTo={450}
      description={[
        "The Diamond Key Massage Spa Experience is our signature treatment — the culmination of everything our spa represents and the most comprehensive therapeutic and sensory journey we offer. Unlike individual massage services, each of which is defined by a single technique and a specific therapeutic intention, the Massage Spa Experience is a masterfully orchestrated, 90 to 120 minute full-body wellness protocol that integrates four distinct therapeutic modalities — Swedish relaxation massage, targeted deep tissue therapy, personalised aromatherapy, and classical acupressure point stimulation — into one seamless, continuously flowing experience. Every element of the session is designed to complement the elements around it: the Swedish component opens and warms the body in preparation for deep tissue work; the deep tissue releases the structural tension that would otherwise limit the effect of the relaxation phases; the aromatherapy adds a biochemical and neurological dimension that amplifies the physical work being done; and the acupressure activates the body's own self-healing and energy-regulating systems at points the massage strokes alone cannot access. The result is a treatment that simultaneously addresses the physical, neurological, biochemical, and energetic dimensions of wellbeing in a single session — making it not merely a premium version of a single massage, but a categorically different and more complete therapeutic experience. At Diamond Key Spa in Al Qusais, Dubai, this treatment is delivered by our most experienced therapists, each of whom is trained and proficient across all four constituent modalities and can navigate between them with the fluid fluency of a conductor moving through a symphony.",
        "The technique sequence within the Massage Spa Experience is not arbitrary — it follows a physiologically logical progression in which each modality prepares the body for the next. The treatment begins with a 20 to 25 minute Swedish warming phase: broad, rhythmic effleurage strokes applied with moderate pressure across the full back surface, shoulders, and posterior legs progressively warm the superficial and intermediate muscle layers, dilate the local blood vessels, and — critically — begin the process of parasympathetic nervous system activation that sets the neurological tone for everything that follows. A body that has been warmed and neurologically relaxed by Swedish strokes is radically more receptive to the deeper work that comes next. The second phase, lasting approximately 25 to 30 minutes, introduces targeted deep tissue techniques — cross-fiber friction, trigger point compression, and stripping — applied specifically to the tension zones identified in the pre-treatment consultation. Because the tissues have already been warmed and the nervous system already partially switched into its parasympathetic mode, the deep tissue work in this context achieves greater depth with less discomfort than when applied cold; clients consistently report that the deep work within the Massage Spa Experience feels more productive and less intense than in a standalone deep tissue session. The aromatherapy dimension runs as a continuum throughout — a personalised essential oil blend, selected during the pre-treatment consultation, is applied from the session's opening strokes and diffused in the treatment room simultaneously. The acupressure component is woven into the session's final phase: following the deep tissue work, your therapist applies sustained thumb pressure to specific meridian points — GB21 in the trapezius, BL10 at the skull base, LI4 in the hand, KD1 on the sole — that in Traditional Chinese Medicine regulate the flow of Qi through the body's energy channels, producing an additional layer of systemic balancing that the Western massage techniques do not address. A 10 to 15 minute scalp and facial massage completes the treatment, addressing the head and face — body areas that no other massage technique in the sequence covers — and leaving clients in a state of total, head-to-toe release.",
        "The superiority of integrated multi-modality massage protocols over single-technique treatments is not merely anecdotal — it has meaningful research support from a growing body of comparative clinical literature. A study published in Pain Medicine compared single-modality massage (Swedish only) with an integrated massage protocol combining Swedish, trigger point therapy, and myofascial release for chronic low back pain, finding that the integrated approach produced significantly greater pain reduction and functional improvement at both four-week and twelve-week follow-up. A systematic review in the International Journal of Therapeutic Massage and Bodywork examined the effects of multi-modal massage on workplace stress, finding that integrated protocols combining relaxation and targeted techniques outperformed single-technique interventions on both subjective stress scores and physiological stress markers including cortisol and heart rate variability. The mechanism is intuitive: different massage modalities work on different physiological systems and through different mechanisms. Swedish massage works primarily through the parasympathetic nervous system and superficial circulatory stimulation. Deep tissue massage works through mechanical disruption of fascial adhesions and trigger point neurological reset. Aromatherapy works through the olfactory-limbic pathway and transdermal pharmacology. Acupressure works through the stimulation of specific somatosensory points with known neurological and hormonal correlates. By layering these mechanisms in the correct sequence, each building on the work of the last, the Massage Spa Experience creates a compounding therapeutic effect that is measurably greater than the sum of its parts — not merely because it includes more techniques, but because the integration of those techniques in the correct order creates physiological conditions that each individual technique, applied alone, cannot create.",
        "The Diamond Key Massage Spa Experience is designed for clients across three distinct categories, each of whom finds something essential in this treatment that a single-modality service cannot fully provide. The first is the client who has multiple concurrent concerns — they are stressed, they have a painful shoulder, their skin is dry from Dubai's harsh climate, and they want to feel genuinely well-rested for the first time in months. The Massage Spa Experience addresses all of these concerns simultaneously in a single appointment, rather than requiring four separate bookings across different specialists. The second is the client who is new to massage therapy or exploring different styles for the first time — for this client, the Massage Spa Experience is the ideal introduction, offering a curated tour through the most effective modalities of therapeutic and relaxation massage within the safety and guidance of a single skilled therapist who can calibrate the depth and intensity of each component to exactly what is comfortable and beneficial for a first-time client. The third is the client who simply wants the best — the most comprehensive, most luxurious, most completely satisfying spa massage experience available in Dubai. This is the client who has tried individual services elsewhere and knows exactly what quality feels like, and who is ready to invest in a treatment that justifies every dirham. For all three, the Massage Spa Experience at Diamond Key Spa delivers not merely a service but a genuine, lasting transformation — of physical tension, emotional state, and the client's sense of their own wellbeing. This is not hyperbole; it is what consistently brings our clients back.",
      ]}
      benefits={[
        "Complete, total-body relaxation achieved through the compounding effect of four complementary therapeutic modalities",
        "All the benefits of Swedish, deep tissue, aromatherapy, and acupressure delivered in a single comprehensive session",
        "Full-body coverage from scalp to feet — no area of the body is left unaddressed in this 90–120 minute protocol",
        "Complete stress elimination through simultaneous parasympathetic activation, cortisol reduction, and limbic system calming",
        "Effective pain management across multiple areas through the combination of deep tissue release and acupressure",
        "Significant mood elevation and emotional restoration through endorphin release and aromatherapy's serotonin support",
        "Deep skin nourishment from therapeutic aromatherapy carrier and essential oils absorbed throughout the session",
        "Full energy restoration by addressing both the physical depletion of muscle tension and the energetic depletion of chronic stress",
      ]}
      whatToExpect={[
        "Extended Consultation & Personalisation: Your Massage Spa Experience begins with a 15-minute in-depth consultation — longer than any other service we offer, because this treatment requires understanding your complete picture. Your therapist assesses your postural patterns, palpates key tension zones, discusses your stress levels and emotional state, enquires about sleep, skin condition, and energy, and selects your personalised aromatherapy blend based on this holistic assessment. This consultation is where your specific 90–120 minute journey is custom-designed, ensuring that every minute of the session is purposefully allocated to what your body and mind most need today.",
        "Aromatherapy Inhalation Ritual & Room Entry: Before you lie on the table, your therapist presents your personalised essential oil blend in a warm compress for an intentional 60-second inhalation ritual — a grounding practice that signals to the limbic system and nervous system that the therapeutic process has begun. Your treatment room has been diffusing the same blend since your appointment was confirmed; entering it, your olfactory system immediately begins the neurological shift toward parasympathetic dominance. The room temperature, lighting, and music have all been specifically set for the Massage Spa Experience protocol.",
        "Swedish Warming Phase (20–25 minutes): You lie face-down on the heated table. Your therapist begins with long, flowing Swedish effleurage strokes across your full back, shoulders, and the backs of your legs, progressively deepening pressure over the first five minutes. This phase thoroughly warms every muscle group, activates the vasodilatory response, and establishes the deeply relaxed neurological state that makes everything that follows more effective and more comfortable. Many clients begin to enter a meditative, near-sleep state during this phase — this is the correct response and is encouraged.",
        "Deep Tissue Targeted Phase (25–30 minutes): Seamlessly transitioning from the warming phase without interruption, your therapist shifts to the specific deep tissue techniques for your identified tension zones. Cross-fiber friction, trigger point compression, and stripping techniques are applied precisely, benefiting enormously from the tissue preparation done in the warming phase. You remain in a deeply relaxed state throughout — the combination of pre-warmed tissue and sustained parasympathetic nervous system activation means this deep work reaches further with less discomfort than in a standalone deep tissue session.",
        "Acupressure Integration (10–15 minutes): As the deep tissue work reaches its natural completion, your therapist transitions to acupressure point stimulation — working key meridian points on the back, shoulders, hands, and feet with sustained, specific thumb pressure. You may notice sensations of release, tingling, or deep warmth radiating from the pressure points, which in Traditional Chinese Medicine indicates the stimulation and release of Qi through the meridian pathways. This phase adds a dimension of systemic energetic balancing that the previous phases, for all their physiological depth, do not address.",
        "Scalp, Face & Closing (15–20 minutes): You turn face-up for the session's final and uniquely complete phase — a luxurious facial scalp massage using gentle effleurage and pressure point techniques on the scalp, temples, forehead, and facial muscles, followed by broad integrating strokes across the décolleté and upper chest. The session closes with a final solar plexus breathing technique — both hands held over the centre of your chest as you take three slow, deep breaths — anchoring the entire treatment's effect before your therapist quietly withdraws. You rest for as long as you need before rising, and are offered warm water, herbal tea, and personalised post-treatment guidance before departing.",
      ]}
      whoIsItFor={[
        "Clients with multiple concurrent concerns — stress, muscle pain, dry skin, poor sleep, and low energy — who want all of them addressed in a single comprehensive session",
        "First-time spa visitors wanting an expertly guided introduction to the most effective massage modalities in one coherent, safe, and beautifully sequenced experience",
        "Experienced massage clients who have tried individual treatments and are ready for the most complete and sophisticated experience available",
        "Professionals experiencing the convergence of physical tension, mental fatigue, and emotional depletion that characterises a demanding Dubai career",
        "Clients celebrating a special occasion — a birthday, anniversary, or personal milestone — who want the most memorable and transformative spa experience possible",
        "Anyone seeking a treatment that genuinely justifies the investment of time and cost by delivering measurably more than any single-modality alternative could provide",
      ]}
      preparation={[
        "Arrive 15–20 minutes before your appointment time — the extended consultation for this treatment benefits greatly from a client who is not rushed, and settling into the spa's environment for a few minutes before your therapist calls you dramatically enhances the quality of the consultation and the early stages of the session",
        "Hydrate generously throughout the day before your appointment — the combination of deep tissue massage, thermotherapy from warm oil, and the metabolic stimulation of acupressure all require well-hydrated tissues to reach their full potential",
        "Think in advance about what you most want from the session — the consultation works best when clients have a clear sense of their primary concerns, whether that is a specific painful area, an emotional goal, a skin concern, or simply a desire for a particular quality of experience",
        "Avoid heavy meals within 90 minutes of your appointment, alcohol for 12 hours prior, and any strenuous exercise on the day of your session — arrive to your Massage Spa Experience as physically and mentally unburdened as possible",
        "If you have any medical conditions, recent injuries, allergies to botanicals or carrier oils, or are pregnant, disclose these when booking rather than waiting until the consultation — this allows us to confirm the appropriateness of the treatment and prepare any necessary adaptations in advance",
      ]}
      aftercare={[
        "Drink at least 500ml of water immediately on leaving and aim for 2 litres of total fluid intake for the rest of the day — the combination of deep tissue work, aromatherapy oil absorption, and acupressure stimulation produces a higher-than-usual metabolic waste clearance load, and adequate hydration is essential for its effective processing",
        "Plan a quiet evening — the Massage Spa Experience is designed to produce a profound and lasting state of physical and neurological restoration, and this state is most fully realised when it is not immediately followed by high-stimulation environments, demanding social obligations, or strenuous activity",
        "A warm bath in the evening using a few drops of a similar essential oil to your treatment blend (lavender is universally appropriate) extends the aromatherapy dimension of the session and supports the sleep-improving effects that most clients experience on the night of their treatment",
        "Avoid strenuous physical exercise for 24 hours after the session — your muscles have been worked therapeutically and benefit most from gentle movement (walking, light stretching) rather than loading during this recovery window",
        "Book your follow-up session before you leave the spa — the Massage Spa Experience produces its most lasting and profound results when repeated at regular intervals of three to four weeks, and having your next appointment confirmed removes the friction that so often allows wellness commitments to lapse",
      ]}
      faqs={[
        {
          question: "How is the Massage Spa Experience different from your other massage services?",
          answer:
            "Every other massage service at Diamond Key Spa is a single-modality treatment focused on a specific technique and therapeutic intention — deep tissue for structural pain, aromatherapy for neurological and emotional wellbeing, hot stone for thermotherapy, and so on. The Massage Spa Experience is unique in integrating four distinct modalities — Swedish, deep tissue, aromatherapy, and acupressure — into a single 90–120 minute session, each building on the last in a physiologically logical sequence. It is also the only service that includes facial scalp massage as a standard component. The result is a categorically more complete experience than any single modality can provide.",
        },
        {
          question: "Is 90–120 minutes too long? Will I get bored or uncomfortable?",
          answer:
            "Almost universally, clients completing the Massage Spa Experience for the first time remark that it felt shorter than expected — the session's variety of techniques and sensory dimensions keeps the experience dynamic and engaging rather than monotonous, and the progressive deepening of relaxation means most clients enter a pleasantly timeless state by the midpoint of the session. The table is heated and padded for comfort across the full duration, and your position is changed at least once during the session. If genuine fatigue or discomfort arises at any point, simply communicate this and your therapist will adapt accordingly.",
        },
        {
          question: "Can I customise which techniques are emphasised in my session?",
          answer:
            "Absolutely — the pre-treatment consultation exists precisely for this purpose. If you have a specific area of chronic pain that you want deep tissue work to prioritise, your therapist will allocate additional time to that phase. If you are in a predominantly relaxed physical state but emotionally depleted, they may extend the Swedish and aromatherapy phases and abbreviate the deep tissue component. The session outline described is a framework, not a rigid script, and our therapists have the experience and training to flex each component within that framework to serve your specific needs on the day.",
        },
        {
          question: "Is the Massage Spa Experience suitable for someone who has never had a professional massage before?",
          answer:
            "It is an excellent choice for first-time massage clients, precisely because the treatment's variety gives you informed exposure to four different modalities in a single, safely supervised session. Many clients new to massage use the Massage Spa Experience as a discovery session and then use its findings to decide which individual treatments to prioritise in their subsequent appointments. Your therapist will work conservatively on pressure levels for all first-time clients and will check in more frequently during the deep tissue phase to ensure your comfort throughout.",
        },
        {
          question: "What aromatherapy oil will be used in my session?",
          answer:
            "Your aromatherapy blend is entirely personalised — it is hand-selected by your therapist during the pre-treatment consultation based on your emotional and physical state, your therapeutic goals, and your scent preferences. Common base blends include lavender and frankincense for stress and sleep, eucalyptus and peppermint for muscle pain and mental clarity, ylang ylang and bergamot for mood elevation, and rose and sandalwood for deep nurturing and emotional restoration. If you have known allergies or sensitivities to any botanical families, simply disclose these during booking and your therapist will formulate your blend accordingly.",
        },
        {
          question: "What is the price of the Massage Spa Experience and is it worth it?",
          answer:
            "The Massage Spa Experience is priced from AED 280 for 90 minutes to AED 450 for 120 minutes — positioning it as our premium signature treatment. The value proposition is genuinely different from our other services: you receive the equivalent of four specialist treatments in a single seamlessly integrated session, delivered by our most experienced therapists, in a 90 to 120 minute time investment rather than the four or more separate appointments you would need to achieve the same therapeutic coverage independently. For clients who can commit only occasional time to self-care, this makes the Massage Spa Experience not merely a luxury but a highly efficient and complete approach to comprehensive wellness.",
        },
      ]}
      relatedServices={[
        { name: "Body Massage", href: "/services/body-massage" },
        { name: "Deep Tissue Massage", href: "/services/deep-tissue-massage" },
        { name: "Aromatherapy Massage", href: "/services/aromatherapy" },
        { name: "Hot Stone Massage", href: "/services/hot-stone-massage" },
        { name: "Foot Reflexology", href: "/services/foot-reflexology" },
      ]}
      breadcrumbs={[
        { name: "Services", href: "/services" },
        { name: "Massage Spa", href: "/services/massage-spa" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
