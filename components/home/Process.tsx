import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import { Phone, Search, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Call or WhatsApp Us",
    description:
      "Contact us by phone or WhatsApp to describe your key or locksmith need. Walk-ins are welcome at our Seeb shop during opening hours (4:30 PM daily).",
  },
  {
    step: "02",
    icon: Search,
    title: "We Assess Your Key",
    description:
      "Bring your original key or vehicle for our technician to assess. We identify the key type, check blank availability, and give you an upfront price quote.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Cut & Program",
    description:
      "We precision-cut your key and, where needed, program the transponder chip or remote fob to your vehicle using OEM-grade diagnostic equipment.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Test & Hand Over",
    description:
      "We test every key before handing it over — in the ignition, in the door, and all remote functions. You only leave when everything works perfectly.",
  },
];

export default function Process() {
  return (
    <section
      className="section-padding bg-luxury-dark text-white relative overflow-hidden"
      aria-label="How Diamond Key works"
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
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="section-heading text-white">
            Getting Your Key Done
            <span className="block text-gold-400">in 4 Simple Steps</span>
          </h2>
          <p className="section-subheading mt-4 text-gray-400">
            From your first call to holding a perfectly working key — our process is
            transparent, fast, and stress-free. No jargon, no hidden fees.
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
