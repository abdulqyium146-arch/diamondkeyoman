import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Body Scrub Dubai | Natural Exfoliation Treatments at Diamond Key Spa Al Qusais",
  description:
    "Reveal radiant, silky-smooth skin with a luxurious body scrub at Diamond Key Spa in Al Qusais, Dubai. Choose from natural sea salt, coffee, sugar, and botanical scrubs for full-body exfoliation that unclogs pores, boosts circulation, and transforms skin texture. Book from AED 160.",
  keywords: [
    "body scrub Dubai",
    "exfoliation treatment Dubai",
    "sea salt scrub Dubai",
    "coffee body scrub Dubai",
    "full body exfoliation Al Qusais",
    "natural body scrub Dubai",
    "skin polishing Dubai",
    "body exfoliation treatment Dubai",
    "scrub and massage Dubai",
    "smooth skin treatment Dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/services/body-scrub` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Body Scrub",
  alternateName: "Full-Body Exfoliation Treatment",
  description:
    "Luxurious full-body exfoliation treatment at Diamond Key Spa, Al Qusais Dubai. Using natural sea salt, coffee, sugar, and botanical scrubs to remove dead skin cells, unclog pores, improve circulation, and reveal smooth, radiant skin.",
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
  serviceType: "Body Treatment",
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedIn: { "@type": "Country", name: "United Arab Emirates" },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    priceRange: "160–300",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/book-appointment`,
  },
  duration: "PT50M",
  category: "Body Treatment",
  url: `${siteConfig.url}/services/body-scrub`,
};

export default function BodyScrubPage() {
  return (
    <ServicePageTemplate
      name="Body Scrub"
      category="Body Treatment"
      tagline="Luxurious full-body exfoliation using natural sea salt, coffee, and botanical scrubs for radiant skin"
      duration="45–60 min"
      priceFrom={160}
      priceTo={300}
      description={[
        "The human body sheds approximately 30,000 to 40,000 dead skin cells every hour — over 600,000 cells per day — as part of the continuous process of epidermal cell turnover known as desquamation. Under ideal conditions, this natural shedding process keeps pace with the production of new skin cells from the basal layer, maintaining smooth, clear, and radiant skin. In practice, however, particularly in a city like Dubai, this process is frequently impaired. The combination of extreme heat that drives prolonged and intense sweating, fine desert dust and atmospheric particulates that adhere to skin moisture, ubiquitous air-conditioning that strips the skin's lipid barrier and causes surface cells to harden and cling rather than shed, and the chlorinated water present in swimming pools and municipal supplies all conspire to cause an accelerated accumulation of dead cells on the skin's surface. The result is the characteristic dull, rough, clogged, and congested skin that is so prevalent among Dubai residents — and that no amount of daily shower gel or home loofah can adequately address. A professional body scrub treatment, performed with the correct tools, techniques, and formulations at the appropriate frequency, is the most effective solution to this ubiquitous urban skin problem.",
        "Diamond Key Spa offers a curated selection of body scrub formulations, each using natural exfoliating agents with distinct particle sizes, compositions, and secondary benefits suited to different skin types and desired outcomes. Our Mediterranean Sea Salt Scrub uses coarse crystalline sea salt — harvested from high-salinity salt pans and rich in magnesium, potassium, and calcium — as its primary exfoliant. The angular salt crystals physically dislodge dead skin with each stroke while simultaneously delivering a concentrated mineral bath that firms the skin, supports collagen synthesis, and leaves a distinctive mineral-fresh sensation. Our Arabica Coffee Scrub uses coarsely ground Arabica coffee beans in a base of sweet almond oil and brown sugar. The caffeine in coffee is a documented vasoconstrictor that temporarily reduces the appearance of cellulite by tightening the skin's surface microvascular network, while the physical coffee grounds provide firm, aromatic exfoliation and the antioxidant polyphenols in coffee protect against free radical damage. Our Coconut Sugar Scrub uses fine granulated cane sugar — a gentler abrasive than salt — combined with cold-pressed coconut oil and vanilla extract for a deeply nourishing treatment suited to sensitive or dry skin that requires exfoliation without friction-induced irritation. Finally, our Golden Turmeric & Oatmeal Scrub uses finely milled colloidal oatmeal combined with turmeric, honey, and jojoba oil for a soothing yet effective exfoliation treatment particularly suited to clients with reactive, inflamed, or eczema-prone skin.",
        "The application technique used at Diamond Key Spa transforms what might otherwise be a simple buffing exercise into a genuinely therapeutic body treatment. Your therapist applies the scrub in firm, deliberate, overlapping circular motions that work with the skin's dermal circulation rather than against it — always directing strokes towards the heart to support venous return and lymphatic drainage. Particular attention is paid to the body's chronically neglected zones: the elbows and knees, where skin is naturally thicker and rougher; the heels and the soles of the feet, which accumulate significant keratin build-up; the upper arms and décolleté, where keratosis pilaris (the rough, goosebump-like skin texture caused by blocked hair follicles) is extremely common; and the back, which most people cannot reach adequately during self-care. The scrub is then left on the skin for several minutes to allow its active ingredients to penetrate beyond the surface layer before being removed with warm towels or a warm water rinse, depending on the formulation.",
        "The body scrub at Diamond Key Spa is designed to be effective as a standalone treatment and even more powerful as part of a combination protocol. Many clients book the Body Scrub followed immediately by a body massage, capitalising on the fact that freshly exfoliated skin absorbs massage oil and its botanical actives at a dramatically higher rate than unexfoliated skin — producing noticeably deeper moisturisation and a more luminous post-massage glow. The Body Scrub is also regularly booked as a preparatory treatment before our Moroccan Bath (for clients who want the hammam experience but first want to remove the surface layer of accumulated buildup), or as a follow-up to our Moroccan Bath for clients whose skin requires additional targeted exfoliation in specific areas. For clients using self-tanning products, a professional body scrub 48 hours before application creates the even, smooth base that produces streak-free and longer-lasting results that home preparation cannot match.",
      ]}
      benefits={[
        "Thoroughly removes the accumulated dead skin cell layer, immediately revealing the fresh, younger skin cells beneath",
        "Unclogs pores across the full body, reducing blackheads, body acne, and the rough texture of keratosis pilaris",
        "Transforms skin texture to a noticeably smoother, softer surface that responds dramatically to touch",
        "Stimulates peripheral circulation and lymphatic drainage, reducing puffiness and the appearance of cellulite",
        "Significantly reduces ingrown hairs by clearing the follicular opening and allowing hair to break through the surface naturally",
        "Restores skin luminosity and brightens dull, sun-damaged, or uneven-toned body skin",
        "Maximises the penetration of moisturisers, body oils, and skincare actives applied after the treatment",
        "Reduces body odour by eliminating the bacteria-harbouring dead skin layer where odour-causing microorganisms colonise",
      ]}
      whatToExpect={[
        "Arrival & Scrub Selection: Your therapist begins with a brief consultation to assess your skin type, sensitivity level, and primary concerns, then guides you in selecting the most appropriate scrub formulation from our menu. Whether you need the intensive mineral reset of sea salt, the stimulating caffeine effect of coffee, the gentle nourishment of coconut sugar, or the soothing anti-inflammatory properties of oatmeal and turmeric — your choice is matched to your skin's needs.",
        "Preparation & Positioning: You will be shown to a treatment room equipped with a heated massage table and will be provided with disposable underwear. Your therapist will warm the scrub formulation and ensure the room temperature is comfortable for lying still with product on the skin. A towel is used to protect your modesty throughout the session.",
        "Scrub Application: Your therapist applies the scrub generously across your entire body — back, shoulders, arms, legs, feet, décolleté, and all the hard-to-reach areas you manage imperfectly at home — using firm circular motions that maximise exfoliation while directing circulation towards the lymphatic drainage pathways. You will feel the satisfying physical sensation of the scrub working against your skin and may notice the characteristic effect of dead skin rolling away from the surface.",
        "Dwell Time: After full-body application, the scrub is left in contact with the skin for 5–10 minutes to allow the secondary botanical actives (minerals, caffeine, coconut oil, or oatmeal compounds) to penetrate and deliver their specific treatment benefits beyond the surface exfoliation.",
        "Removal & Moisturisation: The scrub is removed with warm, damp towels or a warm shower rinse, leaving your skin immediately visibly smoother and brighter. Your therapist then applies a generous layer of a rich, skin-appropriate body butter or oil across your entire body, locking intensive hydration into the freshly cleared skin. You will leave with skin that feels genuinely different — softer, silkier, and more radiant than when you arrived.",
      ]}
      whoIsItFor={[
        "Dubai residents with dull, rough, or congested skin caused by heat, sweat, dust, and air-conditioning",
        "Those with keratosis pilaris (rough, bumpy skin on arms, thighs, or back) seeking effective professional treatment",
        "People who frequently get ingrown hairs and want to reduce their occurrence through regular follicular clearing",
        "Anyone preparing for an event, beach holiday, photoshoot, or occasion who wants their skin looking and feeling its very best",
        "Clients who use self-tanning products and want a professionally prepared, even-textured base for flawless application",
        "Those combining the body scrub with a massage, Moroccan bath, or body wrap for maximum treatment efficacy",
      ]}
      preparation={[
        "Do not shave or wax any part of your body for at least 24 hours before your body scrub appointment — freshly shaved skin has microscopic abrasions that make physical exfoliation painfully irritating, and waxed skin is acutely sensitive for 12–24 hours post-treatment",
        "Avoid applying any body lotion, oil, or self-tanner on the day of your appointment — these create a barrier on the skin's surface that prevents the scrub from making direct contact with the dead cell layer",
        "Come well-hydrated — skin that is properly hydrated from the inside contains more moisture in the stratum corneum, which paradoxically makes exfoliation more effective as it softens the bonds between dead cells",
        "Inform your therapist if you have any areas of broken skin, active dermatitis, sunburn, or open wounds — these areas will be avoided during the treatment to prevent irritation or infection",
        "If you are planning to combine your body scrub with a self-tanning application, do so no sooner than 24 hours after your treatment to allow your skin to fully settle and its natural pH to normalise, which is important for even, long-lasting tan development",
      ]}
      aftercare={[
        "Moisturise your entire body daily with a rich, nourishing body butter or pure oil for at least five days after your scrub — the fresh skin cells revealed by the treatment are younger and more moisture-responsive than usual and will absorb hydration far more effectively than your pre-treatment skin",
        "Apply SPF 50 to all exposed areas for the week following your treatment — newly exfoliated skin has a temporarily reduced melanin density and is more vulnerable to UV-induced pigmentation and burning than skin with an intact dead cell layer",
        "Avoid hot baths or long showers for 24 hours after your session — extremely hot water strips the natural oils that your freshly exfoliated skin is particularly dependent on in the immediate post-treatment period",
        "Do not apply any chemical exfoliants (AHAs, BHAs, retinol, or similar actives) at home for at least 48 hours after your professional body scrub to avoid over-exfoliation, which can lead to barrier disruption, sensitivity, and redness",
        "Schedule your next body scrub every 3–4 weeks — regular monthly exfoliation aligned with the skin's natural cell turnover cycle is the most effective way to maintain smooth, clear, and radiant skin year-round, with the results of each session building cumulatively on the last",
      ]}
      faqs={[
        {
          question: "How is a professional body scrub different from using a loofah or scrub at home?",
          answer:
            "Home exfoliation tools and products are formulated for safe, unsupervised consumer use — which means the particle size, abrasiveness, and active ingredient concentrations are deliberately moderated. A professional body scrub at Diamond Key Spa uses clinical-grade formulations with precisely calibrated particle sizes, secondary actives at therapeutic concentrations, and application techniques (including specific pressure, stroke direction, and dwell time) that together achieve a level of exfoliation depth and consistency that home products and loofahs simply cannot replicate. Additionally, a professional therapist can reach and adequately treat every surface of your body — including your back, the backs of your arms, and the soles of your feet — in ways that are anatomically impossible during self-care.",
        },
        {
          question: "Which body scrub is best for my skin type?",
          answer:
            "We match scrub formulations to skin type during your consultation. The Sea Salt Scrub is ideal for normal to oily skin, those wanting a detoxifying mineral treatment, or clients without surface sensitivity. The Coffee Scrub is best for clients concerned about cellulite, those wanting stimulating, invigorating exfoliation, or anyone who loves a rich aromatic experience. The Coconut Sugar Scrub is the gentlest option and is recommended for dry, sensitive, or dehydrated skin. The Turmeric & Oatmeal Scrub is specifically suited to reactive, rosacea-prone, or inflamed skin that needs exfoliation but cannot tolerate abrasive particles.",
        },
        {
          question: "Can a body scrub help with keratosis pilaris?",
          answer:
            "Yes — regular professional body scrubs are one of the most effective treatments for keratosis pilaris (the rough, bumpy skin texture caused by keratin plugs in hair follicles, typically appearing on the upper arms, thighs, and back). Physical exfoliation with an appropriately sized particle removes the keratin plugs that block the follicles, allowing hair to grow through normally and immediately reducing the rough texture. For optimal results with keratosis pilaris, we recommend a monthly professional scrub combined with daily application of a urea or lactic acid-based body lotion at home.",
        },
        {
          question: "Is a body scrub suitable during pregnancy?",
          answer:
            "Gentle body scrubs are generally considered safe during pregnancy, with some modifications. We recommend the Coconut Sugar Scrub or Oatmeal Scrub (rather than the more stimulating salt or coffee options) for pregnant clients, particularly in the first trimester. We avoid the abdomen and lower back during pregnancy, and our therapists adapt the pressure and positioning throughout. Please inform our team of your pregnancy when booking so the correct adaptations can be made.",
        },
        {
          question: "Can I get a body scrub and massage in the same session?",
          answer:
            "Yes — and this is in fact one of our most popular combinations. Receiving a body scrub immediately before a massage allows the massage oils to penetrate freshly exfoliated skin at a significantly higher rate, producing deeper moisturisation, more pronounced skin nourishment, and a noticeably longer-lasting post-treatment glow. Many clients book a 45-minute body scrub followed immediately by a 60–90 minute body massage as a single extended session. Our team can arrange this combination and apply a package price — ask at reception or when booking online.",
        },
        {
          question: "How often should I get a professional body scrub?",
          answer:
            "We recommend every 3–4 weeks as a maintenance rhythm, aligned with the approximate 28-day skin cell turnover cycle. This frequency ensures that each session removes the complete build-up of dead cells from the most recent cycle without over-exfoliating healthy, productive skin cells. For clients with specific concerns (keratosis pilaris, self-tanning prep, post-summer skin reset), two sessions spaced two weeks apart may be recommended initially before transitioning to monthly maintenance. More frequent than every three weeks is not advisable for most skin types.",
        },
      ]}
      relatedServices={[
        { name: "Moroccan Bath", href: "/services/moroccan-bath" },
        { name: "Body Massage", href: "/services/body-massage" },
        { name: "Aromatherapy Massage", href: "/services/aromatherapy" },
        { name: "Facial Treatments", href: "/services/facial-treatments" },
        { name: "Hot Stone Massage", href: "/services/hot-stone-massage" },
      ]}
      breadcrumbs={[
        { name: "Services", href: "/services" },
        { name: "Body Scrub", href: "/services/body-scrub" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
