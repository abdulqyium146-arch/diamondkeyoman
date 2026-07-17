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
  title: "Diamond Key Spa Dubai | Luxury Day Spa in Al Qusais — Massage, Moroccan Bath & Facials",
  description:
    "Experience Dubai's finest luxury day spa at Diamond Key Spa, Al Qusais. Expert massage therapy, authentic Moroccan hammam, advanced facials & exclusive spa packages. ⭐ 4.76 Google Rating. Open daily until 12:30 AM.",
  keywords: [
    "diamond key spa",
    "luxury day spa dubai",
    "spa al qusais dubai",
    "best massage dubai",
    "moroccan bath dubai",
    "day spa near me dubai",
    "body massage dubai",
    "facial treatment dubai",
    "aromatherapy dubai",
    "deep tissue massage dubai",
    "spa packages dubai",
    "wellness center dubai",
  ],
  openGraph: {
    title: "Diamond Key Spa | Dubai's Premier Luxury Day Spa — Al Qusais",
    description:
      "Surrender to luxury at Diamond Key Spa in Al Qusais, Dubai. Authentic Moroccan hammam, expert massage therapy, advanced facials, and exclusive spa packages. ⭐ 4.76/5 Google Rating.",
    url: siteConfig.url,
    images: [{ url: "/images/og/diamond-key-spa-og.jpg", width: 1200, height: 630 }],
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
