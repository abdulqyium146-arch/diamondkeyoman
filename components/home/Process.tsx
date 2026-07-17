import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import { Calendar, ClipboardList, Sparkles, Star } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Calendar,
    title: "Book Your Session",
    description:
      "Choose your treatment and preferred time slot through our website, WhatsApp, or by calling directly. Walk-ins are welcome based on availability.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Personal Consultation",
    description:
      "Arrive 10 minutes early for a private consultation. Your therapist reviews your health profile, preferences, and goals to customize your treatment.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Your Luxury Treatment",
    description:
      "Surrender to expert hands in our serene, beautifully appointed treatment rooms. Premium products, tailored techniques, and pure therapeutic bliss.",
  },
  {
    step: "04",
    icon: Star,
    title: "Aftercare & Wellness",
    description:
      "Receive personalized aftercare advice, complimentary refreshments, and guidance on maintaining your results at home. We're here for your long-term wellness.",
  },
];

export default function Process() {
  return (
    <section
      className="section-padding bg-luxury-dark text-white relative overflow-hidden"
      aria-label="How Diamond Key Spa works"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(200,155,60,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Your Journey</SectionLabel>
          <h2 className="section-heading text-white">
            Your Spa Experience
            <span className="block text-gold-400">Step by Step</span>
          </h2>
          <p className="section-subheading mt-4 text-gray-400">
            From the moment you book to the moment you leave glowing — every step of your Diamond
            Key Spa journey is thoughtfully designed for maximum comfort and results.
          </p>
        </AnimatedSection>

        <AnimatedGroup
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          staggerDelay={0.12}
        >
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent pointer-events-none" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <AnimatedItem key={step.step} direction="up">
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300 z-10">
                    <Icon className="w-7 h-7 text-gold-400" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold-500 text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedGroup>
      </div>
    </section>
  );
}
