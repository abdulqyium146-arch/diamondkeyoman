import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Train, Car, ExternalLink } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Diamond Key Spa Dubai | Call, WhatsApp & Directions — Al Qusais",
  description:
    "Contact Diamond Key Spa in Al Qusais Industrial Area 5, Dubai. Call +971 54 490 7283, WhatsApp, or email. 5 min from Al Qusais Metro. Free parking. Open daily 9AM–12:30AM.",
  keywords: [
    "contact diamond key spa", "diamond key spa phone number", "diamond key spa location",
    "spa al qusais directions", "book massage dubai", "spa dubai contact",
  ],
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const contactCards = [
  {
    icon: Phone,
    title: "Call or WhatsApp",
    detail: siteConfig.contact.phoneDisplay,
    sub: "Available daily 9:00 AM – 12:30 AM",
    href: `tel:${siteConfig.contact.phone}`,
    label: "Call Now",
    color: "bg-gold-50 border-gold-200",
    iconColor: "text-gold-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: siteConfig.contact.email,
    sub: "We reply within 2–4 hours during business hours",
    href: `mailto:${siteConfig.contact.email}`,
    label: "Send Email",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Al Qusais Industrial Area 5",
    sub: "Dubai, United Arab Emirates · Plus Code: 7CR3+MXV",
    href: siteConfig.location.googleMapsUrl,
    label: "Get Directions",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-500",
  },
];

const hours = [
  { day: "Monday", time: "9:00 AM – 12:30 AM" },
  { day: "Tuesday", time: "9:00 AM – 12:30 AM" },
  { day: "Wednesday", time: "9:00 AM – 12:30 AM" },
  { day: "Thursday", time: "9:00 AM – 12:30 AM" },
  { day: "Friday", time: "9:00 AM – 12:30 AM" },
  { day: "Saturday", time: "9:00 AM – 12:30 AM" },
  { day: "Sunday", time: "9:00 AM – 12:30 AM" },
];

const landmarks = [
  { icon: Train, text: "Al Qusais Metro Station (Green Line) — 5 min walk" },
  { icon: Train, text: "Al Nahda Metro Station (Green Line) — 8 min walk" },
  { icon: Car, text: "Dubai International Airport — 15 min drive" },
  { icon: Car, text: "City Centre Deira — 10 min drive" },
  { icon: Car, text: "Sharjah Border — 10 min drive" },
  { icon: Car, text: "Downtown Dubai — 20 min drive" },
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
            Contact <span className="text-gold-400">Diamond Key Spa</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Ready to book or have a question? Our team is available daily from 9:00 AM to 12:30 AM.
            Call, WhatsApp, or visit us in Al Qusais, Dubai.
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
                Al Qusais Industrial Area 5, Dubai
              </div>
              <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold-500 hover:text-gold-600 font-semibold transition-colors">
                <ExternalLink className="w-4 h-4" /> Open in Google Maps
              </a>

              <div className="mt-8 space-y-3">
                <h3 className="font-bold text-gray-900 mb-4">How to Reach Us</h3>
                {landmarks.map((lm, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <lm.icon className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    {lm.text}
                  </div>
                ))}
                <div className="mt-4 p-4 bg-gold-50 rounded-xl border border-gold-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Free Parking Available:</span> Ample parking directly adjacent to our premises in the industrial area car park.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <h2 className="text-2xl font-serif font-bold mb-6">Opening Hours</h2>
              <div className="luxury-card p-6 mb-6">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-5 h-5 text-gold-500" />
                  <span className="font-semibold text-gray-800">Open Every Day of the Year</span>
                </div>
                <div className="space-y-2.5">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600 text-sm">{h.day}</span>
                      <span className="font-semibold text-gray-800 text-sm">{h.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-gold-50 rounded-xl border border-gold-100">
                  <p className="text-xs text-gray-600 text-center">
                    Last treatment bookings accepted <span className="font-semibold">30 minutes before closing</span>
                  </p>
                </div>
              </div>

              <div className="luxury-card p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <Link href="/book-appointment" className="gold-btn block text-center">Book an Appointment</Link>
                  <a href={`tel:${siteConfig.contact.phone}`} className="ghost-btn block text-center">
                    Call: {siteConfig.contact.phoneDisplay}
                  </a>
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace("+", "")}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Diamond%20Key%20Spa.`}
                    target="_blank" rel="noopener noreferrer"
                    className="block text-center py-3.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold text-sm hover:bg-[#25D366]/20 transition-all">
                    WhatsApp Us
                  </a>
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
              <p className="text-gray-500 mt-2 text-sm">For quick responses, WhatsApp or phone is fastest. We reply to emails within 2–4 hours.</p>
            </div>
            <form className="luxury-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                  <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone / WhatsApp</label>
                  <input type="tel" placeholder="+971 XX XXX XXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Treatment of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all text-gray-600">
                  <option value="">Select a treatment...</option>
                  <option>Body Massage</option>
                  <option>Moroccan Bath</option>
                  <option>Facial Treatment</option>
                  <option>Aromatherapy Massage</option>
                  <option>Deep Tissue Massage</option>
                  <option>Hot Stone Massage</option>
                  <option>Foot Reflexology</option>
                  <option>Body Scrub</option>
                  <option>Royal Retreat Package</option>
                  <option>Couples Bliss Package</option>
                  <option>VIP Gold Experience</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea rows={4} placeholder="Tell us about your preferred dates, times, or any questions you have..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all resize-none" />
              </div>
              <button type="submit" className="gold-btn w-full">Send Message</button>
              <p className="text-xs text-gray-400 text-center">
                For fastest response, please WhatsApp or call us directly at {siteConfig.contact.phoneDisplay}
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
