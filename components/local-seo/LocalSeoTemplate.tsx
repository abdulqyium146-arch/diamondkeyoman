import Link from "next/link";
import { MapPin, Phone, Clock, Car, Navigation, Check, Star } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/utils";
import type { Breadcrumb } from "@/types";

interface LocalFAQ { question: string; answer: string; }
interface LocalReview { author: string; rating: number; text: string; service: string; }

interface LocalSeoTemplateProps {
  heading: string;
  subheading: string;
  areaName: string;
  intro: string[];
  distance?: string;
  transitInfo: string[];
  nearbyLandmarks: string[];
  directions: string;
  uniqueContent: string[];
  faqs: LocalFAQ[];
  reviews: LocalReview[];
  breadcrumbs: Breadcrumb[];
  schemaJson: object;
  keywords: string[];
}

export default function LocalSeoTemplate({
  heading, subheading, areaName, intro, distance,
  nearbyLandmarks, directions, uniqueContent, faqs, reviews,
  breadcrumbs, schemaJson,
}: LocalSeoTemplateProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />

      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium">{areaName}, Muscat, Oman</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">{heading}</h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-8">{subheading}</p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn text-base flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href={generateWhatsAppUrl()} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/20 text-white font-semibold hover:border-gold-400 transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gold-500 py-3">
        <div className="container-custom flex flex-wrap items-center justify-center gap-6 text-white text-sm">
          <span className="flex items-center gap-2"><Star className="w-4 h-4 fill-white" /> 4.0 Google Rating</span>
          <span>·</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Opens 4:30 PM Daily</span>
          <span>·</span>
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Al Khair Street, Seeb 522, Muscat</span>
          {distance && <><span>·</span><span>{distance} from {areaName}</span></>}
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <AnimatedSection direction="right">
                <SectionLabel centered={false}>{areaName} Locksmith</SectionLabel>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Diamond Key — <span className="text-gold-500">Your Local Key & Locksmith Expert</span>
                </h2>
                <div className="space-y-4">
                  {intro.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <h2 className="text-2xl font-serif font-bold mb-5">Our Services</h2>
                <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.05}>
                  {[
                    { name: "Car Key Copying", href: "/services/car-key-copying", price: "From OMR 2" },
                    { name: "Building Key Copying", href: "/services/building-key-copying", price: "From OMR 0.5" },
                    { name: "Car Key Programming", href: "/services/car-key-programming", price: "From OMR 15" },
                    { name: "New Key Fob Creation", href: "/services/key-fob-creation", price: "From OMR 20" },
                    { name: "Lock Rekeying", href: "/services/lock-rekeying", price: "From OMR 10" },
                    { name: "Building Lockout", href: "/services/building-lockout", price: "From OMR 10" },
                    { name: "Car Lockout", href: "/services/car-lockout", price: "From OMR 15" },
                  ].map((svc) => (
                    <AnimatedItem key={svc.href}>
                      <Link href={svc.href} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-gold-400 hover:bg-gold-50 group transition-all">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-gold-500" />
                          <span className="text-sm font-medium text-gray-800 group-hover:text-gold-600">{svc.name}</span>
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-gold-500">{svc.price}</span>
                      </Link>
                    </AnimatedItem>
                  ))}
                </AnimatedGroup>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.15}>
                <h2 className="text-2xl font-serif font-bold mb-4">Serving {areaName}</h2>
                <div className="space-y-4">
                  {uniqueContent.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <h2 className="text-2xl font-serif font-bold mb-5">Getting to Diamond Key from {areaName}</h2>
                <div className="bg-gray-50 rounded-2xl p-6 mb-4">
                  <p className="text-gray-600 leading-relaxed mb-4">{directions}</p>
                  <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.05}>
                    {nearbyLandmarks.map((info) => (
                      <AnimatedItem key={info}>
                        <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-gray-100">
                          <Car className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{info}</span>
                        </div>
                      </AnimatedItem>
                    ))}
                  </AnimatedGroup>
                </div>
                <div className="h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 text-sm">
                  <MapPin className="w-5 h-5 mr-2" />
                  Al Khair Street, Seeb 522, Muscat — Google Maps
                </div>
                <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-gold-500 hover:text-gold-600 font-medium">
                  <Navigation className="w-4 h-4" /> Open in Google Maps
                </a>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.25}>
                <h2 className="text-2xl font-serif font-bold mb-5">Customer Reviews</h2>
                <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.07}>
                  {reviews.map((review, idx) => (
                    <AnimatedItem key={idx}>
                      <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                        <div className="flex items-center gap-0.5 mb-3">
                          {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />)}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">&ldquo;{review.text}&rdquo;</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-800">{review.author}</span>
                          <span className="text-xs text-gray-400">{review.service}</span>
                        </div>
                      </div>
                    </AnimatedItem>
                  ))}
                </AnimatedGroup>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.3}>
                <h2 className="text-2xl font-serif font-bold mb-5">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <details key={i} className="border border-gray-200 rounded-2xl overflow-hidden group">
                      <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 text-sm list-none">
                        {faq.question}
                        <span className="w-6 h-6 rounded-full bg-gray-100 group-open:bg-gold-500 group-open:text-white flex items-center justify-center flex-shrink-0 ml-4 transition-colors text-xs">+</span>
                      </summary>
                      <p className="px-5 pb-5 pt-2 text-sm text-gray-500 leading-relaxed border-t border-gray-100">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="space-y-5">
              <div className="sticky top-28 space-y-5">
                <div className="luxury-card p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Contact Diamond Key</h3>
                  <div className="space-y-4">
                    <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn !py-3 block text-center text-sm">
                      Call: {siteConfig.contact.phoneDisplay}
                    </a>
                    <a href={generateWhatsAppUrl()} target="_blank" rel="noopener noreferrer"
                      className="block text-center py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/20 transition-all">
                      WhatsApp Us
                    </a>
                    <Link href="/contact" className="ghost-btn !py-3 block text-center text-sm">View Contact Page</Link>
                  </div>
                </div>

                <div className="luxury-card p-5">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-500" /> Opening Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day) => (
                      <div key={day} className="flex justify-between">
                        <span className="text-gray-600">{day}</span>
                        <span className="font-medium text-gray-800">4:30 PM – late</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="luxury-card p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Our Location</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                      Al Khair Street, Seeb 522, Muscat, Oman
                    </li>
                    {distance && (
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <Car className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                        {distance} from {areaName}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-luxury-dark text-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-4 text-white">
            Need a Key or Locksmith in <span className="text-gold-400">{areaName}?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Diamond Key is {distance ? `${distance} from ${areaName}` : `your nearest locksmith and key expert`} on Al Khair Street, Seeb. Open daily from 4:30 PM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn">Call: {siteConfig.contact.phoneDisplay}</a>
            <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:border-gold-400 transition-all">
              <MapPin className="w-5 h-5" /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
