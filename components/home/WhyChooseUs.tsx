import { Shield, Heart, Leaf, Users, Award, Star } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";

const reasons = [
  {
    icon: Award,
    title: "Internationally Certified Therapists",
    description:
      "Every therapist at Diamond Key Spa holds international certifications and undergoes continuous training to deliver treatments that meet the highest global standards of therapeutic excellence.",
  },
  {
    icon: Leaf,
    title: "Premium Organic Products",
    description:
      "We use only the finest certified organic oils, botanical extracts, and mineral-rich ingredients sourced from Morocco, Europe, and Asia — gentle on your skin, powerful in results.",
  },
  {
    icon: Heart,
    title: "Personalized Treatment Plans",
    description:
      "Before every session, we conduct a thorough consultation to understand your specific needs, preferences, and health considerations, then customize each treatment exclusively for you.",
  },
  {
    icon: Shield,
    title: "Pristine Hygiene Standards",
    description:
      "Your safety is our highest priority. We maintain hospital-grade cleanliness protocols, use single-use disposables where required, and sterilize all equipment between each client.",
  },
  {
    icon: Users,
    title: "Dedicated to Your Wellness",
    description:
      "From the moment you arrive to the moment you leave, our team is focused entirely on making your spa experience seamless, comfortable, and truly transformative.",
  },
  {
    icon: Star,
    title: "Luxury at Every Level",
    description:
      "4.76-star Google rating earned through consistently exceptional service. Over 5,000 satisfied clients trust Diamond Key Spa as Dubai's premier destination for luxury wellness.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section-padding bg-luxury-dark text-white relative overflow-hidden"
      aria-label="Why choose Diamond Key Spa"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-blob w-96 h-96 bg-gold-500 -top-20 -right-20 opacity-[0.05]" />
        <div className="floating-blob w-80 h-80 bg-gold-300 bottom-0 -left-20 opacity-[0.05]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(200,155,60,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <SectionLabel centered={false}>Why Diamond Key</SectionLabel>
            <h2 className="section-heading text-white">
              The Definitive Choice
              <span className="block text-gold-400">for Luxury Wellness</span>
              <span className="block text-white">in Dubai</span>
            </h2>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              At Diamond Key Spa, luxury isn&apos;t just an aesthetic — it&apos;s a philosophy
              embedded in every aspect of your experience. From our carefully curated treatment
              menu to our meticulously designed interiors, every detail is crafted to exceed your
              expectations.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Our spa has earned recognition as one of Dubai&apos;s top wellness destinations,
              trusted by residents and visitors alike. Whether you&apos;re seeking relief from
              chronic pain, rejuvenation after a demanding schedule, or simply a moment of
              pure luxury — Diamond Key Spa delivers an experience unmatched in the region.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { value: "4.76★", label: "Google Rating" },
                { value: "5K+", label: "Happy Clients" },
                { value: "10+", label: "Years of Excellence" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-serif font-bold text-gold-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedGroup
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            staggerDelay={0.08}
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <AnimatedItem key={reason.title} direction="left">
                  <div className="dark-card p-5 rounded-2xl group hover:border-gold-500/30">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </AnimatedItem>
              );
            })}
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
