import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Aromatherapy Massage Dubai | Essential Oil Holistic Therapy at Diamond Key Spa",
  description:
    "Experience the healing power of aromatherapy massage at Diamond Key Spa, Al Qusais Dubai. Our therapists blend pure therapeutic essential oils — lavender, eucalyptus, bergamot, frankincense — customised to your emotional and physical needs. Book from AED 200.",
  keywords: [
    "aromatherapy massage Dubai",
    "essential oil massage Dubai",
    "holistic massage Al Qusais",
    "lavender massage Dubai",
    "stress relief massage Dubai",
    "aromatherapy spa Dubai",
    "therapeutic essential oils Dubai",
    "relaxation massage Dubai",
    "anxiety relief massage Dubai",
    "holistic therapy Al Qusais",
  ],
  alternates: { canonical: `${siteConfig.url}/services/aromatherapy` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Aromatherapy Massage",
  alternateName: "Essential Oil Holistic Therapy",
  description:
    "Transformative holistic massage at Diamond Key Spa, Al Qusais Dubai, using pure therapeutic essential oils blended per client. Addresses stress, anxiety, hormonal imbalance, sleep disruption, and emotional wellbeing through olfactory and dermal delivery of active botanicals.",
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
  serviceType: "Holistic Massage",
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedIn: { "@type": "Country", name: "United Arab Emirates" },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    priceRange: "200–320",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/book-appointment`,
  },
  duration: "PT75M",
  category: "Holistic Massage",
  url: `${siteConfig.url}/services/aromatherapy`,
};

export default function AromatherapyPage() {
  return (
    <ServicePageTemplate
      name="Aromatherapy Massage"
      category="Holistic Massage"
      tagline="Transformative holistic massage using pure therapeutic essential oils for body and emotional healing"
      duration="60–90 min"
      priceFrom={200}
      priceTo={320}
      description={[
        "Aromatherapy is not simply a pleasant fragrance added to a massage — it is a rigorously studied branch of botanical medicine with a documented pharmacological basis. The science begins in the olfactory system: when you inhale the volatile aromatic compounds of a therapeutic essential oil, those molecules bind to olfactory receptors in the nasal epithelium, triggering electrical signals that travel directly to the limbic system — the most ancient and emotionally significant region of the brain, governing memory, mood, hormonal regulation, and the autonomic nervous system. Unlike other sensory inputs that are filtered through the thalamus, olfactory signals reach the amygdala and hippocampus without any intermediary processing step, which is why scent triggers emotional responses faster and more profoundly than sight or sound. Simultaneously, the active chemical constituents of essential oils — terpenes, esters, phenols, alcohols, and aldehydes — are absorbed transdermally through the skin during massage, entering the bloodstream and producing systemic physiological effects that complement their neurological impact. At Diamond Key Spa in Al Qusais, Dubai, our aromatherapy massage programme is designed to leverage both delivery pathways — inhalation and transdermal absorption — for a holistic therapeutic effect that addresses the whole person, not just the physical body.",
        "The essential oils used in Diamond Key Spa's aromatherapy programme are selected for their documented therapeutic profiles and sourced from certified pure therapeutic-grade suppliers. Lavender (Lavandula angustifolia) — the most widely researched essential oil in clinical literature — contains linalool and linalyl acetate, compounds that modulate GABA receptors in the nervous system to produce anxiolytic, sedative, and muscle-relaxant effects comparable in some studies to low-dose benzodiazepines, without dependency risk. Eucalyptus (Eucalyptus globulus) delivers 1,8-cineole, a potent anti-inflammatory and mucolytic compound that improves respiratory function and promotes cognitive alertness. Bergamot (Citrus bergamia) contains limonene and linalyl acetate that produce documented antidepressant and stress-reducing effects through modulation of serotonin and dopamine. Rosemary (Rosmarinus officinalis) — rich in camphor and borneol — stimulates circulation, improves mental focus, and has been shown to reduce cortisol in salivary studies. Ylang ylang (Cananga odorata) acts as a natural hypotensive, lowering blood pressure and heart rate while producing pronounced mood-lifting effects. Frankincense (Boswellia carterii) contains boswellic acids and alpha-pinene that have documented anti-inflammatory, grounding, and anxiolytic properties — making it particularly valued for deeply meditative or emotionally restorative sessions.",
        "At Diamond Key Spa, no two aromatherapy clients receive the same oil blend. Before every session, your therapist conducts a holistic consultation that goes beyond physical symptoms to explore your emotional state, stress profile, sleep quality, hormonal patterns, and any specific wellbeing goals for the session. Are you seeking relief from chronic anxiety? Wanting to recover from a period of emotional exhaustion? Preparing for a challenging period ahead? Looking to improve sleep quality? Or simply wanting a deeply sensory experience of pure relaxation? Based on your responses, your therapist hand-blends a personalised therapeutic oil combination, typically comprising 2–4 essential oils chosen from our dispensary and diluted to the precise concentration appropriate for your skin type in a base of sweet almond, jojoba, or fractionated coconut oil. The blend is then incorporated throughout the massage — applied warm to the body, diffused in the treatment room, and presented at the start of the session for a grounding inhalation ritual that begins the neurological work before the first touch.",
        "In Dubai, where the intersection of professional pressure, cultural transition, expatriate stress, extreme climate, and a 24-hour city culture conspire to sustain chronically elevated cortisol levels, aromatherapy massage occupies a unique position in the wellness ecosystem. The physiological consequences of chronic stress — systemic inflammation, hormonal dysregulation, immune suppression, sleep architecture disruption, and cardiovascular strain — cannot be fully addressed by massage alone or by skincare alone. Aromatherapy massage, by simultaneously addressing the nervous system through touch and the limbic system through scent, produces a combined therapeutic effect that is measurably greater than either modality in isolation. Research published in the Journal of Alternative and Complementary Medicine has demonstrated that aromatherapy massage reduces state anxiety scores significantly more than massage without essential oils. For Dubai's working population, aromatherapy massage is not an indulgence — it is one of the most evidence-supported tools available for sustainable stress management and emotional resilience.",
      ]}
      benefits={[
        "Rapid and profound reduction in stress and anxiety through direct limbic system stimulation via the olfactory pathway",
        "Natural hormonal rebalancing — essential oils such as clary sage and ylang ylang support progesterone and serotonin regulation",
        "Significantly improved sleep quality through nervous system regulation and the sedative properties of lavender and chamomile",
        "Mood elevation and relief from mild depression symptoms through serotonin and dopamine modulation",
        "Enhanced immune system function through the antimicrobial and anti-inflammatory properties of key essential oils",
        "Effective pain relief and anti-inflammatory benefits delivered both topically and systemically through transdermal absorption",
        "Deep skin nourishment — therapeutic carrier oils and essential oils hydrate, soften, and improve skin elasticity",
        "Emotional balance and a sense of centred calm that persists well beyond the treatment session itself",
      ]}
      whatToExpect={[
        "Oil Selection & Consultation: Your session begins with a meaningful 10–15 minute consultation in which your therapist explores your current physical and emotional state, stress levels, sleep patterns, and wellbeing goals. Based on your responses, a personalised essential oil blend is prepared specifically for you. You are invited to inhale the blend before the massage begins — this grounding ritual signals to your nervous system that the therapeutic process has commenced.",
        "Room Preparation & Diffusion: Your treatment room is already diffused with a gentle concentration of your chosen blend when you enter. The ambient temperature is set slightly warmer than a standard massage room to facilitate transdermal absorption of the aromatic compounds. Soft, carefully curated music supports the neurological relaxation effect of the oils.",
        "Warm Oil Application: Your therapist warms the personalised oil blend to skin temperature before application, ensuring it is absorbed efficiently rather than sitting on the surface. The massage begins with slow, broad effleurage strokes across the back, spreading the oil across the full surface of the skin and allowing your body to begin absorbing the active compounds through the dermis.",
        "The Full-Body Massage: The session progresses through a complete, unhurried full-body treatment — back, shoulders, arms, legs, feet, and scalp — using gentle to medium pressure appropriate for the meditative, nervous-system-centred intent of aromatherapy. Unlike a deep tissue session, the tempo is slower and the transitions smoother, designed to maintain the deeply relaxed and neurologically receptive state induced by the oil blend. Your therapist incorporates lymphatic drainage techniques around the neck and décolleté to enhance the systemic circulation of the absorbed botanical compounds.",
        "Closing Ritual & Rest: The session concludes with an inhalation ritual — your therapist holds a cloth infused with your blend near your face for a final deep breathing exercise that anchors the olfactory memory of the treatment. You are then left to rest on the table for as long as you wish before dressing. Your therapist will provide you with a note of the specific oil blend used, so you can seek out similar products to extend the benefits at home.",
      ]}
      whoIsItFor={[
        "Professionals experiencing chronic workplace stress, decision fatigue, or the psychological demands of a high-pressure Dubai career",
        "Individuals dealing with anxiety, low mood, emotional exhaustion, or the specific stress of expatriate life and cultural adjustment",
        "Those with disrupted sleep patterns who want a natural, non-pharmacological approach to improving sleep quality and duration",
        "People with hormonal imbalances — including PMS, menopausal symptoms, or stress-related cycle disruption — seeking supportive botanical therapy",
        "Anyone who has tried conventional massage but wants a deeper, more holistic and emotionally resonant therapeutic experience",
        "Clients recovering from periods of illness, emotional loss, or significant life transitions who need gentle, nurturing, whole-person care",
      ]}
      preparation={[
        "Arrive with an open mind and, if possible, with clear intentions for what you want the session to address — the more clearly you can articulate your emotional and physical state during the consultation, the more precisely your therapist can customise your blend",
        "Avoid wearing heavy perfume or cologne on the day of your appointment, as synthetic fragrance compounds can interfere with the olfactory impact of the therapeutic essential oils and may cause an unwanted blending effect",
        "Do not apply body lotion or oil on the morning of your session — clean, un-moisturised skin absorbs the therapeutic carrier and essential oil blend most effectively",
        "Inform your therapist of any known sensitivities or allergies to specific botanical families (for example, citrus allergies, ragweed-related sensitivities, or reactions to specific herbs), so your blend can be formulated safely and comfortably",
        "If you are pregnant, please inform us when booking — certain essential oils are contraindicated during pregnancy (particularly in the first trimester), and your therapist will formulate a safe, trimester-appropriate blend using pregnancy-cleared oils such as mandarin, chamomile, and frankincense",
      ]}
      aftercare={[
        "Avoid showering for at least 4–6 hours after your aromatherapy massage — the essential oils continue to be absorbed transdermally for several hours after application, and washing them off prematurely significantly reduces the cumulative therapeutic benefit",
        "Rest and allow yourself a quiet evening after your session — the nervous system recalibration initiated by the treatment benefits enormously from calm, unstimulating activity rather than immediately returning to a high-stimulation environment",
        "Drink water consistently throughout the rest of the day to support lymphatic clearance and the processing of mobilised metabolic waste by your kidneys",
        "Note how you feel in the 24–48 hours following your session — sleep quality, mood, anxiety levels, and energy are all good indicators of which oil blend works best for your individual neurological and physiological profile, and this feedback helps your therapist refine future blends",
        "Consider purchasing a small diffuser and a therapeutic-grade version of one of the oils from your blend for home use — even brief 10–15 minute diffusion sessions during the week can help maintain the neurological benefits of your treatment between appointments",
      ]}
      faqs={[
        {
          question: "Is aromatherapy massage scientifically proven to work?",
          answer:
            "Yes — there is a substantial and growing body of peer-reviewed clinical evidence supporting the therapeutic effects of aromatherapy. Studies published in journals including Evidence-Based Complementary and Alternative Medicine, the Journal of Clinical Nursing, and the International Journal of Neuroscience have documented significant reductions in anxiety, cortisol, blood pressure, and pain scores following aromatherapy massage compared to control groups. The mechanism of action via the olfactory-limbic pathway is well-understood neurologically, and transdermal absorption of essential oil constituents has been confirmed through blood plasma analysis in multiple studies.",
        },
        {
          question: "Will the essential oils stain my clothes after the session?",
          answer:
            "When formulated correctly at therapeutic dilution ratios in a carrier oil, the blend should absorb largely into the skin rather than remaining as a heavy residue. However, we recommend wearing loose, dark, or older clothing to your appointment as a precaution, particularly if you are not showering immediately after. Most carrier oils (sweet almond, jojoba, fractionated coconut) are light and non-staining when used at appropriate concentrations.",
        },
        {
          question: "Can I choose which essential oils are used in my massage?",
          answer:
            "Absolutely — client preference and personal scent associations are a vital part of the consultation process. While your therapist will guide you based on your therapeutic goals, your personal response to specific scents is taken into full account. Olfactory associations are deeply personal, and an oil that should theoretically address your concern but that you find unpleasant will be significantly less effective than one you find genuinely soothing. Your input is an essential ingredient in your blend.",
        },
        {
          question: "Is aromatherapy massage suitable during pregnancy?",
          answer:
            "With appropriate modifications, yes. During the first trimester, we recommend postponing the session or limiting to a focused neck, scalp, and foot treatment using only pregnancy-safe oils. From the second trimester onwards, a modified full-body aromatherapy massage is available using a specifically curated pregnancy-safe blend (mandarin, chamomile, neroli, frankincense, and lavender at reduced concentration). Oils that are contraindicated in pregnancy — including clary sage, rosemary, juniper, and citrus in high concentrations — are strictly excluded from all prenatal sessions.",
        },
        {
          question: "How is aromatherapy massage different from a regular body massage?",
          answer:
            "The primary difference is the intentional, therapeutic use of essential oils as active pharmacological agents — not as a pleasant scent added to ordinary massage oil. The consultation process is more detailed, the oil blend is personalised rather than standardised, the massage tempo and technique are calibrated to enhance neurological relaxation specifically, and the dual delivery system (olfactory and transdermal) produces benefits that extend beyond muscle relaxation into the domains of emotional health, hormonal balance, and sleep quality.",
        },
        {
          question: "How long do the effects of an aromatherapy massage last?",
          answer:
            "Immediate effects — relaxation, mood lift, reduced anxiety — are typically felt for 24–48 hours following a session. The absorbed essential oil compounds have documented half-lives in the body ranging from a few hours to several days, during which their physiological effects continue to unfold. Improved sleep quality and reduced baseline anxiety are commonly reported by clients for 3–5 days after a session. With regular fortnightly or monthly sessions, the cumulative neurological recalibration produces lasting improvements in stress resilience, sleep architecture, and emotional regulation.",
        },
      ]}
      relatedServices={[
        { name: "Body Massage", href: "/services/body-massage" },
        { name: "Hot Stone Massage", href: "/services/hot-stone-massage" },
        { name: "Deep Tissue Massage", href: "/services/deep-tissue-massage" },
        { name: "Moroccan Bath", href: "/services/moroccan-bath" },
        { name: "Facial Treatments", href: "/services/facial-treatments" },
      ]}
      breadcrumbs={[
        { name: "Services", href: "/services" },
        { name: "Aromatherapy", href: "/services/aromatherapy" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
