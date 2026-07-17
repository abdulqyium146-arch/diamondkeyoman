import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function generateMetadata(options: GenerateMetadataOptions): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage = siteConfig.ogImage,
    ogType = "website",
    publishedAt,
    updatedAt,
    author,
    noIndex = false,
    canonical,
  } = options;

  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  const allKeywords = [
    ...siteConfig.keywords.primary,
    ...siteConfig.keywords.secondary,
    ...keywords,
  ];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: author ? [{ name: author }] : [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || undefined,
    },
    openGraph: {
      type: ogType,
      title: fullTitle,
      description,
      url: canonical || siteConfig.url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
      ...(publishedAt && { publishedTime: publishedAt }),
      ...(updatedAt && { modifiedTime: updatedAt }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@diamondkeyspa",
      site: "@diamondkeyspa",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
    category: "Health & Beauty",
    classification: "Spa & Wellness",
    other: {
      "geo.region": "AE-DU",
      "geo.placename": "Dubai, United Arab Emirates",
      "geo.position": `${siteConfig.location.lat};${siteConfig.location.lng}`,
      "ICBM": `${siteConfig.location.lat}, ${siteConfig.location.lng}`,
      "og:locale:alternate": "ar_AE",
    },
  };
}

export const homeMetadata = generateMetadata({
  title: `Diamond Key Spa Dubai | Luxury Day Spa in Al Qusais — Massage, Moroccan Bath & Facials`,
  description: `Experience Dubai's finest luxury day spa at Diamond Key Spa, Al Qusais. Expert massage therapy, authentic Moroccan hammam, advanced facials & exclusive spa packages. Open daily, book now. ⭐ 4.76 Google Rating`,
  keywords: [
    "diamond key spa",
    "luxury day spa dubai",
    "spa al qusais dubai",
    "best massage dubai",
    "moroccan bath dubai",
    "day spa near me dubai",
    "spa al qusais industrial area",
    "wellness center dubai",
    "body massage dubai",
    "facial treatment dubai",
  ],
  canonical: siteConfig.url,
});
