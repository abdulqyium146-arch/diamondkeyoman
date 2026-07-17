import Link from "next/link";
import { ArrowRight, Key, Cpu, RefreshCw, AlertTriangle } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import { cn } from "@/lib/utils";

const pricingCards = [
  {
    icon: Key,
    category: "Key Duplication",
    tagline: "Fastest service",
    priceDisplay: "OMR 0.5 – 5",
    description: "Precision-cut duplicates for car keys, home keys, office keys, padlocks, and more. Ready in minutes.",
    items: ["Car key copying", "Building/home key copying", "Padlock & cabinet keys", "High-security keys"],
    href: "/services/car-key-copying",
    tag: "Most Popular",
    highlight: true,
  },
  {
    icon: Cpu,
    category: "Key Programming",
    tagline: "OEM-grade equipment",
    priceDisplay: "OMR 15 – 60",
    description: "Digital transponder key programming and remote key fob creation for all major vehicle brands.",
    items: ["Car key programming", "New key fob creation", "Remote central locking", "Immobiliser pairing"],
    href: "/services/car-key-programming",
    tag: null,
    highlight: false,
  },
  {
    icon: RefreshCw,
    category: "Lock Rekeying",
    tagline: "Security upgrade",
    priceDisplay: "OMR 10 – 25",
    description: "Rekey your home or office locks so old keys are instantly deactivated — without replacing the lock.",
    items: ["Residential lock rekeying", "Commercial lock rekeying", "All lock brands", "New keys provided"],
    href: "/services/lock-rekeying",
    tag: null,
    highlight: false,
  },
  {
    icon: AlertTriangle,
    category: "Emergency Lockout",
    tagline: "Fast response",
    priceDisplay: "OMR 10 – 30",
    description: "Locked out of your car or home? We open locks without damage using professional entry tools.",
    items: ["Car lockout service", "Building lockout service", "Non-destructive entry", "All car brands & locks"],
    href: "/services/car-lockout",
    tag: null,
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section className="section-padding bg-gray-50" aria-label="Diamond Key service pricing Seeb Oman">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Pricing Overview</SectionLabel>
          <h2 className="section-heading">
            Transparent Pricing
            <span className="block text-gold-500">No Hidden Fees</span>
          </h2>
          <p className="section-subheading mt-4">
            We quote upfront before starting any work. All prices are in Omani Rials (OMR).
            Final cost depends on key type and vehicle model — call us for an exact quote.
          </p>
        </AnimatedSection>

        <AnimatedGroup
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {pricingCards.map((card) => {
            const Icon = card.icon;
            return (
              <AnimatedItem key={card.category} direction="up">
                <div
                  className={cn(
                    "relative rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col",
                    card.highlight
                      ? "bg-luxury-dark text-white shadow-gold-lg border border-gold-500/30"
                      : "bg-white shadow-luxury border border-gray-100 hover:shadow-luxury-lg hover:-translate-y-1"
                  )}
                >
                  {card.tag && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      {card.tag}
                    </div>
                  )}

                  <div className={cn("p-6 pb-4", card.highlight ? "bg-gradient-to-br from-gold-500/10 to-transparent" : "")}>
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", card.highlight ? "bg-gold-500/20" : "bg-gold-50")}>
                      <Icon className={cn("w-6 h-6", card.highlight ? "text-gold-300" : "text-gold-500")} />
                    </div>
                    <h3 className={cn("text-xl font-serif font-bold mb-1", card.highlight ? "text-white" : "text-gray-900")}>
                      {card.category}
                    </h3>
                    <p className={cn("text-xs uppercase tracking-widest mb-3", card.highlight ? "text-gold-400" : "text-gold-500")}>
                      {card.tagline}
                    </p>
                    <p className={cn("text-sm leading-relaxed mb-4", card.highlight ? "text-gray-400" : "text-gray-500")}>
                      {card.description}
                    </p>
                    <div className={cn("text-2xl font-serif font-bold mb-1", card.highlight ? "text-gold-300" : "text-gold-500")}>
                      {card.priceDisplay}
                    </div>
                    <p className={cn("text-xs", card.highlight ? "text-gray-500" : "text-gray-400")}>
                      Price range — quoted upfront
                    </p>
                  </div>

                  <div className={cn("px-6 py-4 flex-1", card.highlight ? "border-t border-white/10" : "border-t border-gray-100")}>
                    <ul className="space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <div className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", card.highlight ? "bg-gold-400" : "bg-gold-400")} />
                          <span className={cn("text-sm", card.highlight ? "text-gray-300" : "text-gray-600")}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 pt-4">
                    <Link
                      href={card.href}
                      className={cn(
                        "block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-300",
                        card.highlight
                          ? "bg-gold-500 text-white hover:bg-gold-400 shadow-gold"
                          : "border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white"
                      )}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedGroup>

        <AnimatedSection className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Not sure what you need? Call us and describe the issue — we&apos;ll advise you for free.
          </p>
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
