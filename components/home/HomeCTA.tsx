import { Phone, MessageCircle, Star } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/utils";

export default function HomeCTA() {
  return (
    <section
      className="relative py-24 overflow-hidden bg-luxury-dark"
      aria-label="Contact Diamond Key locksmith Seeb Oman"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-blob w-[500px] h-[500px] bg-gold-500 -top-40 -left-40 opacity-[0.08]" />
        <div className="floating-blob w-[400px] h-[400px] bg-gold-300 -bottom-40 -right-40 opacity-[0.06]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(200,155,60,0.5) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-center">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
            ))}
            <span className="ml-2 text-gold-300 font-semibold">
              {siteConfig.rating.value} — Trusted by {siteConfig.rating.count}+ Customers in Oman
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Need a Key or
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300">
              Locksmith in Seeb?
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Call us or send a WhatsApp message — we will assess your need and give you
            a free quote. Car key duplication, programming, lock rekeying, or emergency
            lockout: we handle it all.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="gold-btn flex items-center gap-2 text-base shadow-gold-lg animate-glow-pulse"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phoneDisplay}
            </a>

            <a
              href={generateWhatsAppUrl("Hi! I need key duplication or locksmith service.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366]/10 border-2 border-[#25D366]/30 text-[#25D366] font-semibold hover:bg-[#25D366]/20 transition-all duration-300 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            Opens daily 4:30 PM · Al Khair St, Seeb 522, Oman · Walk-ins welcome
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
