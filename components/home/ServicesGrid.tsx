import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import { services } from "@/config/services";
import { formatPriceRange } from "@/lib/utils";

export default function ServicesGrid() {
  const featured = services.filter((s) => s.featured);

  return (
    <section
      className="section-padding bg-white"
      aria-label="Diamond Key Spa services"
      id="services"
    >
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="section-heading">
            Luxury Spa Treatments
            <span className="block text-gold-500">Crafted for You</span>
          </h2>
          <p className="section-subheading mt-4">
            From authentic Moroccan hammam rituals to advanced therapeutic massage and premium
            skincare — every treatment at Diamond Key Spa is designed to rejuvenate your body,
            calm your mind, and restore your spirit.
          </p>
        </AnimatedSection>

        <AnimatedGroup
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {featured.map((service) => (
            <AnimatedItem key={service.id} direction="up">
              <Link
                href={`/services/${service.slug}`}
                className="service-card block h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="w-24 h-24 border-2 border-gold-400 rounded-full" />
                    </div>
                  </div>

                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      Popular
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                      <span className="ml-auto font-semibold text-gold-300 text-sm">
                        {formatPriceRange(service.priceFrom, service.priceTo, service.currency)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-1 mb-5">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-xs text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-gold-500 text-sm font-semibold group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedGroup>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/services"
            className="ghost-btn inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
