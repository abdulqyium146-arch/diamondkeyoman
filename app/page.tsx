import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustIndicators from "@/components/home/TrustIndicators";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Packages from "@/components/home/Packages";
import Process from "@/components/home/Process";
import Reviews from "@/components/home/Reviews";
import LocationSection from "@/components/home/LocationSection";
import HomeFAQ from "@/components/home/HomeFAQ";
import LatestBlogs from "@/components/home/LatestBlogs";
import HomeCTA from "@/components/home/HomeCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Diamond Key | Key Duplication & Locksmith in Seeb, Oman — المفتاح الماسي",
  description:
    "Diamond Key (المفتاح الماسي) — Oman's trusted key duplication and locksmith experts in Seeb, Muscat. Car key copying, programming, key fob creation, lock rekeying & lockout services. 4.0★ Google Rating. From OMR 0.5.",
  keywords: [
    "key duplication Seeb",
    "locksmith Muscat",
    "car key copying Oman",
    "car key programming Seeb",
    "key fob creation Oman",
    "lock rekeying Muscat",
    "building lockout Seeb",
    "car lockout Oman",
    "diamond key oman",
    "المفتاح الماسي",
    "locksmith Seeb",
    "key cutting Muscat",
  ],
  openGraph: {
    title: "Diamond Key — Key Duplication & Locksmith | Seeb, Muscat, Oman",
    description:
      "Oman's trusted key duplication and locksmith service in Seeb, Muscat. Car keys, building keys, key programming, fob creation, rekeying & emergency lockout. 4.0★ Google Rating.",
    url: siteConfig.url,
    images: [{ url: "/images/og/diamond-key-og.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ServicesGrid />
      <WhyChooseUs />
      <Packages />
      <Process />
      <Reviews />
      <LocationSection />
      <HomeFAQ />
      <LatestBlogs />
      <HomeCTA />
    </>
  );
}
