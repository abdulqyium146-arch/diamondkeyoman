import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, Car, ExternalLink } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Diamond Key | Locksmith & Key Duplication Seeb, Muscat — +968 9097 4040",
  description:
    "Contact Diamond Key (المفتاح الماسي) in Seeb, Muscat, Oman. Call +968 9097 4040 or WhatsApp. Al Khair Street, Seeb 522. Opens 4:30 PM daily. Car keys, building keys, locksmith services.",
  keywords: [
    "contact diamond key oman", "locksmith phone seeb", "key duplication muscat contact",
    "diamond key location seeb", "al khair street seeb locksmith", "call locksmith muscat",
  ],
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const contactCards = [
  {
    icon: Phone,
    title: "Call or WhatsApp",
    detail: siteConfig.contact.phoneDisplay,
    sub: "Available from 4:30 PM daily",
    href: `tel:${siteConfig.contact.phone}`,
    label: "Call Now",
    color: "bg-gold-50 border-gold-200",
    iconColor: "text-gold-500",
  },
  {
    icon: MapPin,
    title: "Visit Our Shop",
    detail: "Al Khair Street, Seeb 522",
    sub: "Muscat, Sultanate of Oman",
    href: siteConfig.location.googleMapsUrl,
    label: "Get Directions",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-500",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    detail: "Opens 4:30 PM",
    sub: "Open daily — call to confirm availability",
    href: `tel:${siteConfig.contact.phone}`,
    label: "Call to Confirm",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-500",
  },
];

const landmarks = [
  { icon: Car, text: "Seeb city centre — 5 min drive" },
  { icon: Car, text: "Muscat International Airport — 20 min drive" },
  { icon: Car, text: "Bausher — 15 min drive" },
  { icon: Car, text: "Al Khuwair — 20 min drive" },
  { icon: Car, text: "Mawaleh — 10 min drive" },
];

export default function ContactPage() {
  const breadcrumbs = [{ name: "Contact", href: "/contact" }];
  const bcSchema = generateBreadcrumbSchema([{ name: "Home", href: "/" }, ...breadcrumbs]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <SectionLabel centered={false}>Get In Touch</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 mb-4">
            Contact <span className="text-gold-400">Diamond Key</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Call or WhatsApp us on <span className="text-gold-300 font-semibold">+968 9097 4040</span> or visit our shop on Al Khair Street, Seeb. We open daily from 4:30 PM.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" staggerDelay={0.1}>
            {contactCards.map((card) => (
              <AnimatedItem key={card.title} direction="up">
                <div className={`rounded-2xl border-2 p-7 h-full flex flex-col ${card.color}`}>
                  <card.icon className={`w-8 h-8 ${card.iconColor} mb-4`} />
                  <h2 className="font-bold text-gray-900 text-lg mb-1">{card.title}</h2>
                  <p className="font-semibold text-gray-800 text-base mb-1">{card.detail}</p>
                  <p className="text-sm text-gray-500 mb-5 flex-1">{card.sub}</p>
                  <a href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="gold-btn text-sm text-center flex items-center justify-center gap-2">
                    {card.href.startsWith("http") && <ExternalLink className="w-3.5 h-3.5" />}
                    {card.label}
                  </a>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>

          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="right">
              <h2 className="text-2xl font-serif font-bold mb-6">Find Us</h2>
              <div className="h-72 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-sm mb-4 border border-gray-200">
                <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                Al Khair Street, Seeb 522, Muscat, Oman
              </div>
              <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold-500 hover:text-gold-600 font-semibold transition-colors">
                <ExternalLink className="w-4 h-4" /> Open in Google Maps
              </a>

              <div className="mt-8 space-y-3">
                <h3 className="font-bold text-gray-900 mb-4">Distances from Diamond Key</h3>
                {landmarks.map((lm, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <lm.icon className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    {lm.text}
                  </div>
                ))}
                <div className="mt-4 p-4 bg-gold-50 rounded-xl border border-gold-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Parking:</span> Parking available directly outside the shop on Al Khair Street.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <h2 className="text-2xl font-serif font-bold mb-6">Opening Hours</h2>
              <div className="luxury-card p-6 mb-6">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-5 h-5 text-gold-500" />
                  <span className="font-semibold text-gray-800">Open Every Day</span>
                </div>
                <div className="space-y-2.5">
                  {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day) => (
                    <div key={day} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600 text-sm">{day}</span>
                      <span className="font-semibold text-gray-800 text-sm">4:30 PM – late</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-gold-50 rounded-xl border border-gold-100">
                  <p className="text-xs text-gray-600 text-center">
                    Call ahead to confirm availability — <span className="font-semibold">+968 9097 4040</span>
                  </p>
                </div>
              </div>

              <div className="luxury-card p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn block text-center">
                    Call: {siteConfig.contact.phoneDisplay}
                  </a>
                  <a href={`https://wa.me/96890974040?text=Hello%20Diamond%20Key!%20I%20need%20key%20duplication%20or%20locksmith%20service.`}
                    target="_blank" rel="noopener noreferrer"
                    className="block text-center py-3.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold text-sm hover:bg-[#25D366]/20 transition-all">
                    WhatsApp Us
                  </a>
                  <Link href="/services" className="ghost-btn block text-center">View All Services</Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-10">
              <SectionLabel>Send a Message</SectionLabel>
              <h2 className="text-3xl font-serif font-bold">Send Us a Message</h2>
              <p className="text-gray-500 mt-2 text-sm">For fastest response, call or WhatsApp us directly on +968 9097 4040.</p>
            </div>
            <form className="luxury-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                  <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone / WhatsApp</label>
                  <input type="tel" placeholder="+968 XXXX XXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all text-gray-600">
                  <option value="">Select a service...</option>
                  <option>Car Key Copying</option>
                  <option>Building Key Copying</option>
                  <option>Car Key Programming</option>
                  <option>New Key Fob Creation</option>
                  <option>Lock Rekeying</option>
                  <option>Building Lockout</option>
                  <option>Car Lockout</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea rows={4} placeholder="Describe your car make/model, lock type, or any details that will help us assist you..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all resize-none" />
              </div>
              <button type="submit" className="gold-btn w-full">Send Message</button>
              <p className="text-xs text-gray-400 text-center">
                For fastest response, call or WhatsApp us at {siteConfig.contact.phoneDisplay}
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
