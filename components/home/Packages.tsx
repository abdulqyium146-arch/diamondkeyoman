import Link from "next/link";
import { Check, ArrowRight, Crown, Heart, Star } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import { packages } from "@/config/services";
import { cn } from "@/lib/utils";

const packageIcons = [Crown, Heart, Star];

export default function Packages() {
  return (
    <section className="section-padding bg-gray-50" aria-label="Spa packages at Diamond Key Spa">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Spa Packages</SectionLabel>
          <h2 className="section-heading">
            Complete Spa Journeys
            <span className="block text-gold-500">For Every Occasion</span>
          </h2>
          <p className="section-subheading mt-4">
            Curated spa packages that combine our finest treatments into one seamless, deeply
            restorative experience. Perfect for special occasions, gifting, or simply treating
            yourself to the ultimate luxury.
          </p>
        </AnimatedSection>

        <AnimatedGroup
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {packages.map((pkg, idx) => {
            const Icon = packageIcons[idx];
            const isPopular = pkg.popular;
            return (
              <AnimatedItem key={pkg.id} direction="up">
                <div
                  className={cn(
                    "relative rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col",
                    isPopular
                      ? "bg-luxury-dark text-white shadow-gold-lg scale-[1.02] border border-gold-500/30"
                      : "bg-white shadow-luxury border border-gray-100 hover:shadow-luxury-lg hover:-translate-y-1"
                  )}
                >
                  {pkg.tag && (
                    <div className="absolute top-5 right-5 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      {pkg.tag}
                    </div>
                  )}

                  <div
                    className={cn(
                      "p-6 pb-4",
                      isPopular ? "bg-gradient-to-br from-gold-500/10 to-transparent" : ""
                    )}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                        isPopular ? "bg-gold-500/20" : "bg-gold-50"
                      )}
                    >
                      <Icon className={cn("w-6 h-6", isPopular ? "text-gold-300" : "text-gold-500")} />
                    </div>
                    <h3
                      className={cn(
                        "text-xl font-serif font-bold mb-2",
                        isPopular ? "text-white" : "text-gray-900"
                      )}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-relaxed mb-4",
                        isPopular ? "text-gray-400" : "text-gray-500"
                      )}
                    >
                      {pkg.description}
                    </p>

                    <div className="flex items-baseline gap-2 mb-1">
                      <span
                        className={cn(
                          "text-3xl font-serif font-bold",
                          isPopular ? "text-gold-300" : "text-gold-500"
                        )}
                      >
                        AED {pkg.price.toLocaleString()}
                      </span>
                    </div>
                    <p className={cn("text-xs", isPopular ? "text-gray-500" : "text-gray-400")}>
                      {pkg.duration} · All inclusive
                    </p>
                  </div>

                  <div className={cn("px-6 py-4 flex-1", isPopular ? "border-t border-white/10" : "border-t border-gray-100")}>
                    <p className={cn("text-xs font-bold uppercase tracking-widest mb-3", isPopular ? "text-gold-400" : "text-gray-400")}>
                      Includes
                    </p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check
                            className={cn(
                              "w-4 h-4 mt-0.5 flex-shrink-0",
                              isPopular ? "text-gold-400" : "text-gold-500"
                            )}
                          />
                          <span
                            className={cn(
                              "text-sm",
                              isPopular ? "text-gray-300" : "text-gray-600"
                            )}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 pt-4">
                    <Link
                      href={`/spa-packages/${pkg.slug}`}
                      className={cn(
                        "block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-300",
                        isPopular
                          ? "bg-gold-500 text-white hover:bg-gold-400 shadow-gold"
                          : "border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white"
                      )}
                    >
                      Book This Package
                    </Link>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedGroup>

        <AnimatedSection className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Looking for something more specific? We create custom packages tailored to your needs.
          </p>
          <Link
            href="/spa-packages"
            className="ghost-btn inline-flex items-center gap-2"
          >
            View All Packages
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
