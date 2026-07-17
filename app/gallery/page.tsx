import type { Metadata } from "next";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Gallery | Diamond Key Oman — Key Shop & Locksmith Seeb, Muscat",
  description:
    "See Diamond Key's professional key-cutting machines, locksmith tools, and shop in Seeb, Muscat, Oman. Car key duplication, programming equipment, and locksmith services.",
  keywords: ["diamond key oman gallery", "key shop seeb photos", "locksmith equipment muscat", "key cutting machine oman"],
  alternates: { canonical: `${siteConfig.url}/gallery` },
};

const galleryItems = [
  { id: 1, category: "Key Cutting", caption: "CNC Key Cutting Machine — Precision key duplication for all car and building key profiles", gradient: "from-stone-700 to-stone-500", aspect: "col-span-2" },
  { id: 2, category: "Car Keys", caption: "Car Key Collection — Transponder keys, flip keys, and smart keys for all major brands", gradient: "from-amber-800 to-amber-600", aspect: "" },
  { id: 3, category: "Building Keys", caption: "Building Key Blanks — Standard, security, and high-security key blanks in stock", gradient: "from-slate-700 to-slate-500", aspect: "" },
  { id: 4, category: "Programming", caption: "OBD Programming Equipment — OEM-grade tools for car key and fob programming", gradient: "from-blue-800 to-blue-600", aspect: "" },
  { id: 5, category: "Key Fobs", caption: "Key Fob Range — Compatible fob shells for all major vehicle brands", gradient: "from-teal-800 to-teal-600", aspect: "" },
  { id: 6, category: "Locksmith Tools", caption: "Professional Lock Pick Set — Non-destructive entry tools for all standard lock types", gradient: "from-gray-700 to-gray-500", aspect: "col-span-2" },
  { id: 7, category: "Shop", caption: "Diamond Key Shop — Al Khair Street, Seeb 522, Muscat, Oman", gradient: "from-yellow-800 to-yellow-600", aspect: "" },
  { id: 8, category: "Car Keys", caption: "Transponder Key Programming — Pairing new keys to vehicle immobiliser systems", gradient: "from-red-900 to-red-700", aspect: "" },
  { id: 9, category: "Building Keys", caption: "Key Duplication Station — Fast and accurate duplicates ready in minutes", gradient: "from-green-800 to-green-600", aspect: "" },
  { id: 10, category: "Locksmith Tools", caption: "Car Entry Tools — Wedge sets and long-reach rods for non-destructive car lockout", gradient: "from-orange-800 to-orange-600", aspect: "" },
  { id: 11, category: "Programming", caption: "Diagnostic Interface — ECU communication tools for all supported vehicle brands", gradient: "from-purple-800 to-purple-600", aspect: "" },
  { id: 12, category: "Shop", caption: "Serving Seeb & Muscat — 7+ years as Oman&apos;s trusted key and locksmith experts", gradient: "from-indigo-800 to-indigo-600", aspect: "" },
];

const categories = ["All", "Key Cutting", "Car Keys", "Building Keys", "Programming", "Locksmith Tools", "Shop"];

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
            Our Shop & <span className="text-gold-400">Equipment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            A look inside Diamond Key — professional key-cutting machines, programming tools,
            and locksmith equipment serving Seeb and Muscat since 2017.
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
              Visit Our Shop in Seeb
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Come to Diamond Key on Al Khair Street, Seeb 522, Muscat. We open daily
              from 4:30 PM. Call ahead to confirm availability for your service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn">Call: {siteConfig.contact.phoneDisplay}</a>
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
