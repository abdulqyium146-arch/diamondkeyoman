import { MapPin, Phone, Clock, Navigation, Car, ExternalLink } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import { siteConfig } from "@/config/site";

const nearbyInfo = [
  { icon: Car, label: "From Airport", value: "Muscat Intl Airport — 10 min drive" },
  { icon: Car, label: "From Bausher", value: "Bausher — 5 min drive" },
  { icon: Navigation, label: "From Mawaleh", value: "Mawaleh — 8 min drive" },
  { icon: Navigation, label: "From Al Khuwair", value: "Al Khuwair — 12 min drive" },
];

export default function LocationSection() {
  return (
    <section
      className="section-padding bg-gray-50"
      aria-label="Diamond Key locksmith location in Seeb Muscat Oman"
      id="location"
    >
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Find Us</SectionLabel>
          <h2 className="section-heading">
            Conveniently Located in
            <span className="block text-gold-500">Seeb, Muscat, Oman</span>
          </h2>
          <p className="section-subheading mt-4">
            Our shop is on Al Khair Street in Seeb — easily accessible from across Muscat
            Governorate including Bausher, Mawaleh, Al Khuwair, and Muscat International Airport.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <AnimatedSection direction="right">
            <div className="rounded-2xl overflow-hidden shadow-luxury h-80 lg:h-96 bg-gray-200 relative">
              <iframe
                src={siteConfig.location.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Diamond Key locksmith location in Seeb Oman on Google Maps"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <a
              href={siteConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-gold-500 hover:text-gold-600 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Maps for directions
            </a>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div className="space-y-5">
              <div className="luxury-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Address</h3>
                    <address className="not-italic text-gray-600 text-sm leading-relaxed">
                      Al Khair Street<br />
                      Seeb 522, Muscat<br />
                      Sultanate of Oman
                    </address>
                  </div>
                </div>
              </div>

              <div className="luxury-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday – Wednesday</span>
                        <span className="font-medium text-gray-800">4:30 PM – 11:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Thursday – Friday</span>
                        <span className="font-medium text-gray-800">4:30 PM – 11:30 PM</span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <span className="text-xs text-green-600 font-semibold">
                          ● Open 7 days a week
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="luxury-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-gold-500 font-semibold text-lg hover:text-gold-600 transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-gray-400 mt-0.5">Call or WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="luxury-card p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-gold-500" />
                  Getting Here
                </h3>
                <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.05}>
                  {nearbyInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <AnimatedItem key={info.label}>
                        <div className="flex items-start gap-2">
                          <Icon className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-gray-700">{info.label}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{info.value}</p>
                          </div>
                        </div>
                      </AnimatedItem>
                    );
                  })}
                </AnimatedGroup>
              </div>

              <div className="flex gap-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex-1 gold-btn !py-3 text-sm text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={siteConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 ghost-btn !py-3 text-sm text-center flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
