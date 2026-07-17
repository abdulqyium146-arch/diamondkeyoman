import { siteConfig } from "@/config/site";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "HealthAndBeautyBusiness", "DaySpa"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: "Diamond Key Spa LLC",
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/logo/diamond-key-spa-logo.png`,
      width: 200,
      height: 60,
    },
    image: [
      `${siteConfig.url}/images/og/diamond-key-spa-og.jpg`,
      `${siteConfig.url}/images/gallery/spa-interior-1.jpg`,
      `${siteConfig.url}/images/gallery/spa-interior-2.jpg`,
    ],
    description: siteConfig.description,
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
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    openingHoursSpecification: siteConfig.hours.schema,
    priceRange: "AED 130 – AED 1200",
    currenciesAccepted: "AED, USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
    hasMap: siteConfig.location.googleMapsUrl,
    servesCuisine: undefined,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private Treatment Rooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Steam Room", value: true },
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
    ],
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "AdministrativeArea", name: "Al Qusais" },
      { "@type": "AdministrativeArea", name: "Al Nahda" },
      { "@type": "AdministrativeArea", name: "Deira" },
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-AE",
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image: string;
  priceFrom: number;
  priceTo?: number;
  duration: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    image: `${siteConfig.url}${service.image}`,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    serviceType: service.category,
    category: "Health and Beauty",
    areaServed: {
      "@type": "City",
      name: "Dubai, United Arab Emirates",
    },
    offers: {
      "@type": "Offer",
      price: service.priceFrom,
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Options`,
    },
  };
}

export function generateBreadcrumbSchema(breadcrumbs: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readTime: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: `${siteConfig.url}${article.url}`,
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${article.image}`,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${article.url}`,
    },
    timeRequired: `PT${article.readTime}M`,
    inLanguage: "en-AE",
  };
}

export function generateReviewSchema(reviews: { author: string; rating: number; text: string; date: string }[]) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    datePublished: review.date,
    itemReviewed: {
      "@id": `${siteConfig.url}/#organization`,
    },
  }));
}

export function generateLocalBusinessSchema(overrides?: Partial<Record<string, unknown>>) {
  const base = generateOrganizationSchema();
  return { ...base, ...overrides };
}
