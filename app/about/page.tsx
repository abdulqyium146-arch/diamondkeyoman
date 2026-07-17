import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Award, Users, Heart, Star, CheckCircle } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Diamond Key Spa | Dubai's Trusted Luxury Day Spa Since Opening",
  description:
    "Learn about Diamond Key Spa — Dubai's premier luxury day spa in Al Qusais. Our story, values, certified therapists, and commitment to delivering the finest spa experiences in the UAE.",
  keywords: ["about diamond key spa", "dubai luxury spa history", "spa therapists dubai", "certified spa dubai"],
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  { icon: Award, title: "Excellence in Every Detail", desc: "We obsess over every element of your experience — from the quality of our oils to the temperature of your room." },
  { icon: Heart, title: "Genuine Care", desc: "Our team genuinely cares about your wellbeing. Every consultation, every treatment, every aftercare recommendation comes from a place of authentic concern." },
  { icon: Shield, title: "Trust & Transparency", desc: "We use only certified products, maintain the highest hygiene standards, and are always honest about what's right for your skin and body." },
  { icon: Users, title: "Expert Knowledge", desc: "Our therapists hold international certifications and continuously update their skills with the latest therapeutic techniques and wellness science." },
];

const stats = [
  { value: "10+", label: "Years of Expertise" },
  { value: "5,000+", label: "Clients Served" },
  { value: "4.76★", label: "Google Rating" },
  { value: "9+", label: "Premium Services" },
];

const team = [
  { name: "Amira Hassan", title: "Head Wellness Therapist", spec: "Deep Tissue · Hot Stone · Aromatherapy", exp: "12 years" },
  { name: "Fatima Al Zaabi", title: "Senior Hammam Specialist", spec: "Moroccan Bath · Body Scrub · Clay Treatments", exp: "9 years" },
  { name: "Marco Vitale", title: "Sports & Rehabilitation Therapist", spec: "Deep Tissue · Sports · Trigger Point", exp: "11 years" },
  { name: "Nadia Al Khatib", title: "Holistic Wellness Practitioner", spec: "Aromatherapy · Reflexology · Energy Work", exp: "8 years" },
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
            About <span className="text-gold-400">Diamond Key Spa</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Dubai&apos;s most trusted luxury day spa — delivering world-class therapeutic experiences in the heart of Al Qusais.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <SectionLabel centered={false}>Who We Are</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                A Sanctuary of Wellness <span className="text-gold-500">in the Heart of Dubai</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Diamond Key Spa was founded on a singular vision: to create a space where the demands of Dubai&apos;s fast-paced life dissolve, and genuine therapeutic healing takes over. Located in Al Qusais Industrial Area 5, we have built a reputation as Dubai&apos;s most trusted luxury day spa — earning a 4.76-star Google rating through consistently exceptional service.
                </p>
                <p>
                  Our spa brings together the world&apos;s finest wellness traditions under one roof. From the ancient Moroccan hammam ritual — practiced across North Africa for centuries — to cutting-edge deep tissue therapy, Swedish relaxation massage, and precision-engineered facial treatments, every service we offer is rooted in both tradition and science.
                </p>
                <p>
                  We believe that luxury should be accessible without compromising quality. Our pricing reflects our commitment to offering genuine premium experiences at values that respect our clients. This philosophy has made us the first-choice spa for Dubai residents, UAE nationals, and international visitors alike.
                </p>
                <p>
                  Every member of our team is internationally certified, continuously trained, and deeply passionate about their craft. When you visit Diamond Key Spa, you are not simply receiving a service — you are entering a relationship with wellness practitioners who genuinely care about your health and happiness.
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
                    <h3 className="font-bold text-gray-900 mb-1">4.76 Google Rating</h3>
                    <p className="text-sm text-gray-600">
                      Earned through over {siteConfig.rating.count} verified reviews from real clients.
                      Our rating reflects our unwavering commitment to excellence in every treatment.
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
            <SectionLabel>Meet the Team</SectionLabel>
            <h2 className="section-heading">Expert Therapists <span className="text-gold-500">Who Care</span></h2>
            <p className="section-subheading mt-4">
              Every therapist at Diamond Key Spa holds international certifications and brings years of
              specialized expertise to your treatment.
            </p>
          </AnimatedSection>
          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {team.map((member) => (
              <AnimatedItem key={member.name}>
                <div className="luxury-card p-6 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gold-500 text-sm font-medium mt-1">{member.title}</p>
                  <p className="text-xs text-gray-500 mt-2">{member.spec}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    {member.exp} experience
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
              Ready to Experience <span className="text-gold-400">Diamond Key Spa?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of satisfied clients. Book your appointment today and discover
              why we&apos;re Dubai&apos;s most trusted luxury day spa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-appointment" className="gold-btn">Book Appointment</Link>
              <Link href="/services" className="ghost-btn border-white/30 text-white hover:bg-white/10">Our Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
