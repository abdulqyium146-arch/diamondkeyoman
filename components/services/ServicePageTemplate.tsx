import Link from "next/link";
import { Clock, Check, ArrowRight, Phone, MessageCircle, Star } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { generateWhatsAppUrl, formatPriceRange } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import type { Breadcrumb } from "@/types";

interface FAQ { question: string; answer: string; }
interface RelatedService { name: string; href: string; }

interface ServicePageTemplateProps {
  name: string;
  category: string;
  tagline: string;
  description: string[];
  duration: string;
  priceFrom: number;
  priceTo?: number;
  benefits: string[];
  whatToExpect: string[];
  whoIsItFor: string[];
  preparation: string[];
  aftercare: string[];
  faqs: FAQ[];
  relatedServices: RelatedService[];
  breadcrumbs: Breadcrumb[];
  schemaJson: object;
}

export default function ServicePageTemplate({
  name, category, tagline, description, duration, priceFrom, priceTo,
  benefits, whatToExpect, whoIsItFor, preparation, aftercare,
  faqs, relatedServices, breadcrumbs, schemaJson,
}: ServicePageTemplateProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />

      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <span className="tag mb-3 inline-flex">{category}</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            {name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-8">{tagline}</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium">{duration}</span>
            </div>
            <div className="bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-2">
              <span className="text-gold-300 font-semibold text-sm">
                {formatPriceRange(priceFrom, priceTo, siteConfig.currency)}
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              {[...Array(4)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />)}
              <span className="ml-1">{siteConfig.rating.value} Rating</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection direction="right">
                <SectionLabel centered={false}>About This Service</SectionLabel>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  What Is <span className="text-gold-500">{name}?</span>
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  {description.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <h2 className="text-2xl font-serif font-bold mb-5">Key Benefits</h2>
                <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.05}>
                  {benefits.map((b) => (
                    <AnimatedItem key={b}>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-gold-50 border border-gold-100">
                        <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 font-medium">{b}</span>
                      </div>
                    </AnimatedItem>
                  ))}
                </AnimatedGroup>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.15}>
                <h2 className="text-2xl font-serif font-bold mb-5">What to Expect</h2>
                <ol className="space-y-4">
                  {whatToExpect.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-gold-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-gray-600 leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8">
                <AnimatedSection direction="right" delay={0.2}>
                  <h2 className="text-xl font-serif font-bold mb-4">Who Is This For?</h2>
                  <ul className="space-y-2">
                    {whoIsItFor.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <ArrowRight className="w-4 h-4 text-gold-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
                <AnimatedSection direction="left" delay={0.2}>
                  <h2 className="text-xl font-serif font-bold mb-4">What to Bring</h2>
                  <ul className="space-y-2">
                    {preparation.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <ArrowRight className="w-4 h-4 text-gold-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>

              <AnimatedSection direction="right" delay={0.25}>
                <h2 className="text-xl font-serif font-bold mb-4">After the Service</h2>
                <ul className="space-y-2">
                  {aftercare.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.3}>
                <h2 className="text-2xl font-serif font-bold mb-5">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <details key={i} className="border border-gray-200 rounded-2xl overflow-hidden group">
                      <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 text-sm list-none">
                        {faq.question}
                        <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 ml-4 group-open:bg-gold-500 group-open:text-white transition-colors text-xs">+</span>
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
                  <h3 className="font-bold text-gray-900 mb-4">Enquire About This Service</h3>
                  <div className="space-y-3 mb-5 text-sm text-gray-600">
                    <div className="flex justify-between"><span>Duration</span><span className="font-semibold">{duration}</span></div>
                    <div className="flex justify-between"><span>Starting from</span>
                      <span className="font-semibold text-gold-500">{siteConfig.currency} {priceFrom}</span>
                    </div>
                    <div className="flex justify-between"><span>Availability</span><span className="text-green-600 font-semibold">Opens 4:30 PM Daily</span></div>
                  </div>
                  <div className="space-y-3">
                    <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn !py-3 block text-center text-sm flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" /> Call Now
                    </a>
                    <a href={generateWhatsAppUrl(`Hi! I need ${name} service.`)}
                      target="_blank" rel="noopener noreferrer"
                      className="block text-center py-3 px-6 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" /> WhatsApp Us
                    </a>
                    <Link href="/contact" className="ghost-btn !py-3 block text-center text-sm flex items-center justify-center gap-2">
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="luxury-card p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Other Services</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold-500 transition-colors py-1">
                          <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-gold-50 border border-gold-100">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />)}
                    <span className="font-bold text-gray-900 text-sm">{siteConfig.rating.value}</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Rated {siteConfig.rating.value} by {siteConfig.rating.count} verified Google reviewers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
