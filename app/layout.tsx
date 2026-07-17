import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import FloatingCall from "@/components/shared/FloatingCall";
import StickyCTA from "@/components/shared/StickyCTA";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | Key Duplication & Locksmith in Seeb, Oman`,
    template: `%s | ${siteConfig.name} — Seeb, Oman`,
  },
  description: siteConfig.description,
  keywords: [
    ...siteConfig.keywords.primary,
    ...siteConfig.keywords.secondary,
    ...siteConfig.keywords.local,
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  robots: {
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
  openGraph: {
    type: "website",
    locale: "en_OM",
    url: siteConfig.url,
    title: `${siteConfig.fullName} | Key Duplication & Locksmith — Seeb, Oman`,
    description: siteConfig.description,
    siteName: siteConfig.fullName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | Key Duplication & Locksmith — Oman`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@diamondkeyoman",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icons/icon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "OM-MA",
    "geo.placename": "Seeb, Muscat, Oman",
    "geo.position": `${siteConfig.location.lat};${siteConfig.location.lng}`,
    "ICBM": `${siteConfig.location.lat}, ${siteConfig.location.lng}`,
    "business:contact_data:street_address": siteConfig.contact.address.street,
    "business:contact_data:locality": "Seeb",
    "business:contact_data:country_name": "Oman",
    "business:contact_data:phone_number": siteConfig.contact.phoneDisplay,
    "og:locale:alternate": "ar_OM",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#C89B3C" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const webSchema = generateWebsiteSchema();

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingCall />
        <StickyCTA />
      </body>
    </html>
  );
}
