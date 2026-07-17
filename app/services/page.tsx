import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { services, serviceCategories } from "@/config/services";
import { formatPriceRange } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Locksmith & Key Services | Diamond Key Seeb, Muscat, Oman",
  description:
    "All locksmith and key services from Diamond Key in Seeb, Muscat. Car key copying, building key copying, car key programming, key fob creation, lock rekeying, car lockout & building lockout. From OMR 0.5.",
  keywords: [
    "locksmith services Seeb", "key duplication Muscat", "car key copying Oman", "key programming Seeb",
    "key fob creation Muscat", "lock rekeying Oman", "car lockout Seeb", "building lockout Muscat",
    "emergency locksmith Oman", "key cutting Seeb",
  ],
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  const breadcrumbs = [{ name: "Services", href: "/services" }];
  const schema = generateBreadcrumbSchema([{ name: "Home", href: "/" }, ...breadcrumbs]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <SectionLabel centered={false}>All Services</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 mb-4">
            Key Duplication & <span className="text-gold-400">Locksmith Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Seven professional key and locksmith services — car keys, building keys, programming,
            fob creation, rekeying, and emergency lockout in Seeb, Muscat, Oman.
          </p>
        </div>
      </div>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <AnimatedGroup className="flex flex-wrap gap-3 justify-center" staggerDelay={0.05}>
            {serviceCategories.map((cat) => (
              <AnimatedItem key={cat.slug}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 hover:border-gold-400 hover:bg-gold-50 cursor-pointer transition-all">
                  <span className="text-sm font-medium text-gray-700">{cat.name}</span>
                  <span className="w-5 h-5 rounded-full bg-gold-100 text-gold-600 text-xs font-bold flex items-center justify-center">{cat.count}</span>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {services.map((service) => (
              <AnimatedItem key={service.id} direction="up">
                <Link href={`/services/${service.slug}`} className="service-card block h-full group">
                  <div className="relative h-52 bg-gradient-to-br from-gray-800 to-gray-600 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 border border-gold-400/30 rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 border border-gold-400/20 rounded-full" />
                      </div>
                    </div>
                    {service.popular && (
                      <div className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-white/70 text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {service.duration}
                      </div>
                      <span className="text-gold-300 font-semibold text-sm">
                        {formatPriceRange(service.priceFrom, service.priceTo, service.currency)}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-gold-500 font-semibold uppercase tracking-wider">{service.category}</span>
                    <h2 className="text-lg font-serif font-bold text-gray-900 mt-1 mb-2 group-hover:text-gold-600 transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{service.shortDescription}</p>
                    <ul className="space-y-1 mb-4">
                      {service.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-gold-500 text-sm font-semibold">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      <section className="py-16 bg-gold-50">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Call or WhatsApp us and describe your situation. We&apos;ll advise the right
              service and confirm availability at our Seeb shop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn">Call: {siteConfig.contact.phoneDisplay}</a>
              <Link href="/contact" className="ghost-btn">Contact Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
