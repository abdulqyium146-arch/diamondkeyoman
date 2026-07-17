import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Award, Users, Wrench, Star, CheckCircle } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Diamond Key | Locksmith & Key Duplication Seeb, Oman — 7+ Years",
  description:
    "Learn about Diamond Key (المفتاح الماسي) — Oman's trusted locksmith and key duplication experts in Seeb, Muscat. 7+ years in business, 51+ Google reviews, 4.0★ rating. Al Khair Street, Seeb.",
  keywords: ["about diamond key oman", "locksmith seeb history", "key duplication muscat", "trusted locksmith oman"],
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  { icon: Award, title: "7+ Years of Trusted Service", desc: "We have been serving the Seeb and wider Muscat community for over seven years, building a reputation based on honest pricing, reliable results, and professional workmanship." },
  { icon: Wrench, title: "Advanced Key-Cutting Technology", desc: "Our shop is equipped with professional-grade CNC key-cutting machines and OEM-compatible programming tools capable of handling all major vehicle and lock brands." },
  { icon: Shield, title: "Honest Pricing & No Surprises", desc: "We quote before we start. The price you hear on the phone is the price you pay. No hidden fees, no inflated dealer-style markups on key programming or fob creation." },
  { icon: Users, title: "Expert Knowledge", desc: "Our technicians have hands-on experience with hundreds of car makes and models and all standard residential and commercial lock types found in Oman." },
];

const stats = [
  { value: "7+", label: "Years in Business" },
  { value: "51+", label: "Google Reviews" },
  { value: "4.0★", label: "Google Rating" },
  { value: "7", label: "Expert Services" },
];

export default function AboutPage() {
  const breadcrumbs = [{ name: "About", href: "/about" }];
  const schema = generateBreadcrumbSchema([{ name: "Home", href: "/" }, ...breadcrumbs]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <SectionLabel centered={false}>Our Story</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 mb-4">
            About <span className="text-gold-400">Diamond Key</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Oman&apos;s trusted key duplication and locksmith experts — serving Seeb and greater Muscat for over seven years.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <SectionLabel centered={false}>Who We Are</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Oman&apos;s Key Experts <span className="text-gold-500">in the Heart of Seeb</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Diamond Key — المفتاح الماسي — was established with a straightforward mission: to give Oman&apos;s drivers and property owners a reliable, affordable, and professional alternative to expensive dealership key services and unqualified key cutters.
                </p>
                <p>
                  Located on Al Khair Street in Seeb 522, Muscat, our shop is equipped with professional CNC key-cutting machines, OEM-grade automotive programming tools, and a full locksmith toolkit. We handle everything from a simple OMR 0.5 building key copy to complex OMR 60 key fob programming for modern vehicles.
                </p>
                <p>
                  Over seven years we have served Seeb, Bausher, Al Khuwair, Mawaleh, and all areas across Muscat — earning a 4.0-star Google rating from over 51 verified reviews. Our customers return because we do what we say, charge what we quote, and get it right the first time.
                </p>
                <p>
                  We cover car key copying, building key copying, car key programming (all major brands), new key fob creation, lock rekeying, car lockouts, and building lockouts. If it involves a key or a lock in Oman, Diamond Key is your first call.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="luxury-card p-6 text-center">
                    <div className="text-4xl font-serif font-bold text-gold-500 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 rounded-2xl bg-gold-50 border border-gold-100">
                <div className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">4.0 Google Rating</h3>
                    <p className="text-sm text-gray-600">
                      Earned through {siteConfig.rating.count}+ verified reviews from real customers across Seeb and Muscat.
                      Our rating reflects consistent professionalism and honest service.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="section-heading">The Principles That <span className="text-gold-500">Guide Us</span></h2>
          </AnimatedSection>
          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <AnimatedItem key={v.title}>
                  <div className="luxury-card p-8">
                    <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-gold-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
                  </div>
                </AnimatedItem>
              );
            })}
          </AnimatedGroup>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <SectionLabel>What We Handle</SectionLabel>
            <h2 className="section-heading">All Keys & Locks <span className="text-gold-500">Covered</span></h2>
            <p className="section-subheading mt-4">
              From a basic house key duplicate to full immobiliser programming for a modern SUV — we handle it all at our Seeb shop.
            </p>
          </AnimatedSection>
          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {[
              { label: "All car key types", detail: "Standard, transponder, smart key, flip key" },
              { label: "All building keys", detail: "Standard, security, Mul-T-Lock, Abloy" },
              { label: "All major car brands", detail: "Toyota, Nissan, Honda, BMW, Hyundai + more" },
              { label: "Immobiliser programming", detail: "Chip keys, transponders, OBD pairing" },
              { label: "Remote key fobs", detail: "Creation, cloning, programming" },
              { label: "All standard lock types", detail: "Pin tumbler, deadbolt, padlock, rim lock" },
            ].map((item) => (
              <AnimatedItem key={item.label}>
                <div className="luxury-card p-5 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      <section className="py-16 bg-luxury-dark text-white text-center">
        <div className="container-custom max-w-2xl">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Need a Key or Locksmith in <span className="text-gold-400">Seeb, Oman?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Call or WhatsApp us and we&apos;ll help right away.
              Our shop is on Al Khair Street, Seeb — open daily from 4:30 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn">Call: {siteConfig.contact.phoneDisplay}</a>
              <Link href="/services" className="ghost-btn border-white/30 text-white hover:bg-white/10">Our Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
