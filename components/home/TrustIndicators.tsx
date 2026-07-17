import { Star, Shield, Award, Clock, Users, MapPin } from "lucide-react";
import { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { siteConfig } from "@/config/site";

const indicators = [
  {
    icon: Star,
    value: "4.76★",
    label: "Google Rating",
    sublabel: `${siteConfig.rating.count}+ Verified Reviews`,
    color: "text-gold-500",
    bg: "bg-gold-50",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Clients",
    sublabel: "Since our opening",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Award,
    value: "9+",
    label: "Expert Services",
    sublabel: "Premium treatments",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Certified Therapists",
    sublabel: "Internationally trained",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Clock,
    value: "Open Daily",
    label: "Until 12:30 AM",
    sublabel: "7 days a week",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: MapPin,
    value: "Al Qusais",
    label: "Dubai, UAE",
    sublabel: "Easy to find",
    color: "text-red-500",
    bg: "bg-red-50",
  },
];

export default function TrustIndicators() {
  return (
    <section
      className="py-12 bg-white border-b border-gray-100"
      aria-label="Why choose Diamond Key Spa"
    >
      <div className="container-custom">
        <AnimatedGroup
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          staggerDelay={0.1}
        >
          {indicators.map((item) => {
            const Icon = item.icon;
            return (
              <AnimatedItem key={item.label} direction="up">
                <div className="flex flex-col items-center text-center p-4 rounded-2xl hover:shadow-md transition-shadow duration-300 group">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className={`text-xl font-bold ${item.color} font-serif`}>
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-800 mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.sublabel}</div>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedGroup>
      </div>
    </section>
  );
}
