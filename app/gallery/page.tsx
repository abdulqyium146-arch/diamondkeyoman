import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Gallery | Diamond Key Spa Dubai — Treatment Rooms, Hammam & Facilities",
  description:
    "Explore Diamond Key Spa's luxurious facilities in Al Qusais, Dubai. View our premium treatment rooms, authentic Moroccan hammam, relaxation lounges, and spa amenities.",
  keywords: ["diamond key spa gallery", "spa interior dubai", "hammam dubai photos", "spa facilities dubai", "luxury spa interior al qusais"],
  alternates: { canonical: `${siteConfig.url}/gallery` },
};

const galleryItems = [
  { id: 1, category: "Treatment Rooms", caption: "Private Massage Suite — Serene, climate-controlled rooms with heated treatment beds", gradient: "from-stone-700 to-stone-500", aspect: "col-span-2" },
  { id: 2, category: "Moroccan Hammam", caption: "Authentic Moroccan Hammam — Traditional black marble and mosaic tilework", gradient: "from-amber-800 to-amber-600", aspect: "" },
  { id: 3, category: "Relaxation Area", caption: "Post-Treatment Lounge — Complimentary refreshments and calm recovery space", gradient: "from-slate-700 to-slate-500", aspect: "" },
  { id: 4, category: "Treatment Rooms", caption: "Couples Suite — Private suite with side-by-side treatment beds for two", gradient: "from-rose-800 to-rose-600", aspect: "" },
  { id: 5, category: "Moroccan Hammam", caption: "Steam Room — Traditional hammam steam chamber for pore-opening preparation", gradient: "from-teal-800 to-teal-600", aspect: "" },
  { id: 6, category: "Treatment Rooms", caption: "Facial Studio — Advanced esthetic equipment and premium skincare products", gradient: "from-purple-800 to-purple-600", aspect: "col-span-2" },
  { id: 7, category: "Relaxation Area", caption: "VIP Waiting Lounge — Gold-accented décor with complimentary herbal teas", gradient: "from-yellow-800 to-yellow-600", aspect: "" },
  { id: 8, category: "Exterior", caption: "Spa Entrance — Welcoming reception with luxury fragrance and ambient music", gradient: "from-gray-700 to-gray-500", aspect: "" },
  { id: 9, category: "Treatment Rooms", caption: "Hot Stone Therapy Room — Dedicated room with basalt stone heating unit", gradient: "from-red-900 to-red-700", aspect: "" },
  { id: 10, category: "Moroccan Hammam", caption: "Hammam Scrub Area — Kessa exfoliation platform with traditional marble bench", gradient: "from-orange-800 to-orange-600", aspect: "" },
  { id: 11, category: "Relaxation Area", caption: "Herbal Tea Corner — Premium blends and mineral water for post-treatment hydration", gradient: "from-green-800 to-green-600", aspect: "" },
  { id: 12, category: "Exterior", caption: "Al Qusais Industrial Area 5 — Easily accessible location with ample parking", gradient: "from-blue-800 to-blue-600", aspect: "" },
];

const categories = ["All", "Treatment Rooms", "Moroccan Hammam", "Relaxation Area", "Exterior"];

export default function GalleryPage() {
  const breadcrumbs = [{ name: "Gallery", href: "/gallery" }];

  return (
    <>
      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <SectionLabel centered={false}>Gallery</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 mb-4">
            Explore Our <span className="text-gold-400">Luxury Spa</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            A glimpse inside Diamond Key Spa — premium treatment rooms, authentic Moroccan hammam,
            relaxation lounges, and every detail crafted for your comfort.
          </p>
        </div>
      </div>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <div key={cat}
                className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-gold-400 hover:text-gold-600 hover:bg-gold-50 cursor-pointer transition-all">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.07}>
            {galleryItems.map((item) => (
              <AnimatedItem key={item.id} direction="up">
                <div className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.aspect === "col-span-2" ? "sm:col-span-2" : ""}`}>
                  <div className={`h-56 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="w-20 h-20 border-2 border-white rounded-full" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-xs font-medium leading-tight">{item.caption}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <span className="text-xs text-gold-500 font-semibold uppercase tracking-wider">{item.category}</span>
                    <p className="text-sm text-gray-600 mt-1 leading-snug">{item.caption}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      <section className="py-16 bg-gold-50">
        <div className="container-custom text-center">
          <AnimatedSection>
            <SectionLabel>Visit Us</SectionLabel>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Experience It in Person
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Photos don&apos;t do justice to the Diamond Key Spa experience. Book your visit
              and discover the full luxury in Al Qusais, Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-appointment" className="gold-btn">Book an Appointment</Link>
              <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="ghost-btn flex items-center justify-center gap-2">
                Get Directions
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
