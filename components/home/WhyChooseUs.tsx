import { Shield, Clock, Wrench, Users, Award, Zap } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";

const reasons = [
  {
    icon: Award,
    title: "7+ Years of Trusted Service",
    description:
      "Diamond Key has been serving Seeb and Muscat since 2017. Our longevity speaks for itself — customers return because they trust our workmanship and fair pricing.",
  },
  {
    icon: Wrench,
    title: "Advanced Key-Cutting Technology",
    description:
      "We use professional-grade CNC key-cutting machines and OEM-quality transponder programmers to handle modern vehicle keys with precision accuracy.",
  },
  {
    icon: Zap,
    title: "Same-Day Service — While You Wait",
    description:
      "Most standard car and building key duplications are completed in under 15 minutes. Car key programming typically takes 30–60 minutes on-site.",
  },
  {
    icon: Shield,
    title: "All Brands & Models",
    description:
      "From basic door keys to Toyota, Nissan, Honda, BMW, and Land Rover transponder keys — we have the equipment and expertise to handle them all.",
  },
  {
    icon: Users,
    title: "Honest Pricing — No Hidden Fees",
    description:
      "We quote upfront before we start any work. No surprises. Our prices are significantly lower than dealerships for the same quality of service.",
  },
  {
    icon: Clock,
    title: "Emergency Lockout Support",
    description:
      "Locked out of your car or home? Call us. We respond quickly and use non-destructive techniques to open locks without damage to your property.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section-padding bg-luxury-dark text-white relative overflow-hidden"
      aria-label="Why choose Diamond Key locksmith Seeb Oman"
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
              The Trusted Choice
              <span className="block text-gold-400">for Keys & Locksmith</span>
              <span className="block text-white">in Seeb, Oman</span>
            </h2>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              At Diamond Key (المفتاح الماسي), we combine 7+ years of hands-on
              experience with professional-grade equipment to deliver key
              duplication and locksmith services that you can count on — every
              time.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Whether you need a simple spare key for your home, a transponder
              key programmed for your car, or you&apos;re locked out and need fast
              help — we have the skills, tools, and track record to solve it
              quickly and affordably.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { value: "4.0★", label: "Google Rating" },
                { value: "51+", label: "Reviews" },
                { value: "7+", label: "Years in Oman" },
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
