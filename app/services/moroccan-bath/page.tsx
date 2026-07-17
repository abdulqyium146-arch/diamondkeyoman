import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Moroccan Bath Dubai | Authentic Hammam Ritual at Diamond Key Spa Al Qusais",
  description:
    "Experience an authentic Moroccan hammam ritual at Diamond Key Spa, Al Qusais Dubai. Our traditional Moroccan bath includes steam therapy, beldi black soap, kessa exfoliation, ghassoul clay mask, and full-body moisturisation for deeply cleansed, radiant skin. Book from AED 200.",
  keywords: [
    "Moroccan bath Dubai",
    "hammam Dubai",
    "authentic hammam Al Qusais",
    "Moroccan hammam ritual Dubai",
    "beldi soap treatment Dubai",
    "kessa exfoliation Dubai",
    "ghassoul clay Dubai",
    "traditional hammam Dubai",
    "deep cleansing bath Dubai",
    "skin exfoliation treatment Dubai",
  ],
  alternates: { canonical: `${siteConfig.url}/services/moroccan-bath` },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Moroccan Bath (Hammam)",
  alternateName: "Authentic Hammam Ritual",
  description:
    "Traditional Moroccan hammam ritual at Diamond Key Spa in Al Qusais, Dubai. Includes steam therapy, beldi black soap application, kessa mitt exfoliation, ghassoul clay mask, and full-body moisturisation for deeply cleansed and radiant skin.",
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
    priceRange: "200–350",
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/book-appointment`,
  },
  duration: "PT75M",
  category: "Body Treatment",
  url: `${siteConfig.url}/services/moroccan-bath`,
};

export default function MoroccanBathPage() {
  return (
    <ServicePageTemplate
      name="Moroccan Bath (Hammam)"
      category="Body Treatment"
      tagline="Ancient North African hammam ritual for deep cleansing, exfoliation, and skin transformation"
      duration="60–90 min"
      priceFrom={200}
      priceTo={350}
      description={[
        "The hammam — the communal steam bath of North Africa and the Middle East — is one of humanity's oldest and most revered cleansing rituals, with a documented history spanning over a thousand years. Originating in the Islamic tradition of ritual purification, the hammam evolved across Morocco, Turkey, and the Levant into an elaborate social institution where weekly visits were woven into the fabric of community life. The Moroccan hammam in particular developed its own distinctive sequence of treatments — a choreography of heat, soap, exfoliation, clay, and water that remains virtually unchanged from medieval Fez and Marrakech to this day. At Diamond Key Spa in Al Qusais, Dubai, we preserve this authentic sequence with rigorous fidelity, using imported Moroccan ingredients and time-tested techniques passed down through generations of hammam practitioners.",
        "The full Diamond Key Moroccan bath experience follows the classical hammam progression. The session begins in our purpose-built steam room, where temperature and humidity are carefully regulated to open the pores and soften dead skin layers — a process that takes 10–15 minutes and prepares the body for what follows. Next, your therapist applies beldi black soap (savon beldi), a uniquely Moroccan preparation made from fermented olives, eucalyptus, and argan-infused botanicals. This dark, gel-like soap is massaged generously across the entire body and left to penetrate the softened skin for 5–10 minutes, releasing impurities, loosening dead cells, and delivering a concentrated dose of vitamins E and A to the skin matrix. The centrepiece of the hammam ritual then follows: exfoliation with the kessa mitt, a traditional rough-weave glove whose origin dates to 10th-century Moroccan artisan guilds. Your therapist works the kessa in firm, methodical strokes across every surface of the body, physically rolling away the dead skin — a process that is both dramatic and deeply satisfying. The ritual concludes with the application of ghassoul clay (also called rassoul), a rare mineral-rich clay mined exclusively from the Atlas Mountains of Morocco, which is left on the skin for several minutes as a final purifying mask before being rinsed away.",
        "In Dubai's unique climatic context — intense sun, dry air-conditioned interiors, and elevated sweat production — the skin accumulates dead cells and environmental pollutants at an accelerated rate compared to cooler, more temperate environments. The combination of heat, humidity, beldi soap, and mechanical kessa exfoliation in a Moroccan bath achieves a depth of cleansing that no topical skincare product can replicate. After a session, clients consistently report that their skin feels smoother, softer, and more responsive to moisturiser than it has in months. The removal of the dead cell layer also allows UV filters, serums, and other skincare actives to penetrate the skin more effectively — making the Moroccan bath an excellent foundation treatment before any facial or body-care regimen.",
        "What makes Diamond Key Spa's Moroccan bath genuinely authentic rather than a superficial imitation is the sourcing of our core materials. Our beldi black soap is imported from artisanal producers in the Marrakech Medina. Our ghassoul clay arrives in its raw mineral form from the only quarries in the world where it is found, in the Moulouya Valley of the Middle Atlas. Our kessa mitts are hand-woven by traditional Moroccan craftspeople. Beyond ingredients, authenticity is also about intention and pace — our therapists are trained not to rush the process, to allow the steam phase to fully complete its work, and to give the kessa exfoliation the time it needs to achieve the dramatically visible results our clients come to expect.",
      ]}
      benefits={[
        "Delivers the deepest full-body exfoliation achievable, far surpassing scrub products used at home",
        "Physically removes layers of accumulated dead skin cells, instantly revealing fresher, brighter skin beneath",
        "Unclogs pores across the entire body, reducing blackheads, body acne, and ingrown hairs",
        "Dramatically improves peripheral circulation through the combination of heat therapy and massage",
        "Draws out impurities and environmental toxins from deep within the skin via steam and clay detoxification",
        "Visibly brightens and evens skin tone — particularly beneficial for areas of hyperpigmentation or sun damage",
        "Induces profound stress relief and mental relaxation through warmth, skilled touch, and aromatic botanicals",
        "Restores skin texture to a silky smoothness that makes moisturisers and skincare products significantly more effective",
      ]}
      whatToExpect={[
        "Arrival & Consultation: Our team will welcome you, walk you through what to expect at each stage of the hammam, and provide you with a disposable swimsuit or wrap. Your therapist will ask brief questions about your skin type and any sensitivities to ensure the products used are appropriate.",
        "Steam Phase: You will enter the private steam room, heated to approximately 42–45°C with high humidity. This 10–15 minute phase is essential — it dilates your pores, loosens the bonds holding dead skin to the surface, and primes every centimetre of your body for the treatments that follow. Allow yourself to breathe deeply and begin to relax.",
        "Beldi Black Soap Application: Your therapist applies the imported Moroccan beldi soap across your entire body in generous, warming strokes. The soap's earthy, olive-rich scent is distinctly Moroccan and immediately transporting. You rest for 5–10 minutes as the soap penetrates, working at a cellular level to dissolve impurities and loosen the dead skin layer.",
        "Kessa Exfoliation: This is the defining moment of the hammam experience. Your therapist works the rough kessa mitt across every surface of your body in firm, methodical passes. You will visually see rolls of dead skin lifting away from the surface — entirely normal and a sign of how effectively the process is working. Clients describe the sensation as intense but deeply satisfying. By the end, your skin will feel like a different organ.",
        "Ghassoul Clay Mask: A generous application of Atlas Mountain ghassoul clay is spread across your body and left for 5–8 minutes. This rare mineral clay draws remaining impurities from the pores, mineralises the skin, and leaves a silky, refined texture upon removal. Your therapist rinses the clay away with warm water in long, sweeping motions.",
        "Rinse & Moisturise: A thorough warm rinse removes every trace of clay and loosened debris. Your therapist then applies a rich, argan oil-infused body moisturiser across your entire body, locking in hydration to the newly exposed fresh skin. You will be shown to a relaxation area to rest, rehydrate, and allow the results to fully set before dressing.",
      ]}
      whoIsItFor={[
        "Anyone with dry, dull, or congested skin looking for a dramatic and immediate transformation",
        "Dubai residents seeking a thorough seasonal skin reset after prolonged sun exposure and air-conditioning",
        "Individuals with body acne, clogged pores, or rough skin texture on the back, arms, or legs",
        "Those preparing for an important event, photoshoot, or occasion who want their skin looking its absolute best",
        "People who want to enhance the effectiveness of their regular skincare routine by clearing the dead cell barrier",
        "Anyone curious to experience one of the world's most ancient and culturally rich wellness traditions",
      ]}
      preparation={[
        "Do not shave or wax any part of your body for at least 24 hours before your hammam appointment — freshly shaved or waxed skin is too sensitive for kessa exfoliation and may react adversely to the beldi soap",
        "Avoid applying any body lotion, oil, or self-tanner on the day of your appointment, as these create a surface barrier that reduces the effectiveness of the steam and exfoliation phases",
        "Come well-hydrated — the steam phase induces perspiration and the treatment is significantly more beneficial when your body is properly hydrated from the inside",
        "Remove nail polish or jewellery before arriving if possible, as the kessa mitt works around these areas and incomplete exfoliation can leave uneven results",
        "Arrive at least 10 minutes early to allow your body temperature to acclimatise to the spa environment before the steam phase begins, which produces better results than entering the steam room immediately after arriving from outdoor heat",
      ]}
      aftercare={[
        "Drink at least 500ml–1 litre of water in the hours following your hammam to replenish fluids lost during the steam phase and support your body's detoxification process",
        "Avoid applying any harsh chemical exfoliants, AHAs, BHAs, or retinol products for at least 48 hours after your treatment — your skin has just been exfoliated at a profound depth and needs time to recover and settle",
        "Apply a gentle, fragrance-free moisturiser or pure argan oil daily for the next three to five days to lock in the hydration benefits and protect the newly revealed skin layer",
        "Avoid prolonged direct sun exposure for at least 24 hours after your hammam, and apply SPF 50 if going outdoors — fresh, newly exfoliated skin is temporarily more susceptible to UV damage",
        "Plan to return every 3–4 weeks for maintenance sessions — skin cell turnover completes a full cycle approximately every 28 days, making monthly hammam visits the ideal rhythm for maintaining consistently smooth, bright, and clear skin year-round",
      ]}
      faqs={[
        {
          question: "What is the difference between a Moroccan bath and a regular scrub?",
          answer:
            "A body scrub uses granular particles (salt, sugar, coffee) applied topically to buff the skin's surface. A Moroccan bath is a multi-stage ritual that first uses steam to open the pores and loosen dead skin at a cellular level, then applies beldi black soap to dissolve impurities, then removes dead skin with a kessa mitt through a physical rolling motion, and finally purifies with ghassoul clay. The depth of exfoliation achieved is fundamentally deeper and the skin transformation is dramatically more visible than any scrub treatment.",
        },
        {
          question: "Is the Moroccan bath suitable for sensitive skin?",
          answer:
            "Yes, with some adaptation. Our therapists adjust steam duration and kessa pressure for clients with sensitive skin, and we can use unscented alternatives to the beldi soap for those with fragrance sensitivities. We do, however, recommend that clients with active eczema, psoriasis flare-ups, open wounds, or sunburn postpone their appointment until the skin condition has fully resolved, as the mechanical exfoliation could aggravate these conditions.",
        },
        {
          question: "Will I be fully naked during the Moroccan bath?",
          answer:
            "You will be provided with a disposable swimsuit or modesty wrap that you wear throughout the entire treatment. Our hammam is conducted with full respect for your privacy and cultural preferences. Disposable undergarments are always available, and our therapists are trained to maintain your comfort and modesty at every stage.",
        },
        {
          question: "How long will the results of a Moroccan bath last?",
          answer:
            "The immediate results — dramatically smoother, brighter skin — are visible for 2–4 weeks. Skin cell turnover follows an approximate 28-day cycle, so scheduling your Moroccan bath once a month is the ideal maintenance rhythm. With consistent monthly sessions, clients report that their baseline skin texture, clarity, and luminosity steadily improve over time.",
        },
        {
          question: "Can I combine the Moroccan bath with other treatments?",
          answer:
            "Absolutely — the Moroccan bath is in fact an excellent preparatory treatment before a body wrap, body massage, or facial, as the deep exfoliation maximises the penetration of any products applied subsequently. Many clients book the Moroccan Bath & Massage combination, which follows the full hammam ritual with a 30–60 minute body massage while the skin is in its most receptive state. Ask our reception team about our combination packages.",
        },
        {
          question: "How often should I get a Moroccan bath?",
          answer:
            "We recommend once every 3–4 weeks as a regular maintenance ritual aligned with your skin's natural cell turnover cycle. For a first-time client or someone doing a seasonal skin reset, two sessions spaced two weeks apart can provide an intensive initial transformation, followed by monthly maintenance thereafter. Over-exfoliation more frequently than every three weeks is not recommended, as the skin needs time to complete its natural renewal process between treatments.",
        },
      ]}
      relatedServices={[
        { name: "Body Scrub", href: "/services/body-scrub" },
        { name: "Body Massage", href: "/services/body-massage" },
        { name: "Facial Treatments", href: "/services/facial-treatments" },
        { name: "Aromatherapy Massage", href: "/services/aromatherapy" },
        { name: "Hot Stone Massage", href: "/services/hot-stone-massage" },
      ]}
      breadcrumbs={[
        { name: "Services", href: "/services" },
        { name: "Moroccan Bath", href: "/services/moroccan-bath" },
      ]}
      schemaJson={schemaJson}
    />
  );
}
