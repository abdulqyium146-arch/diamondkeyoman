import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  Instagram,
  Facebook,
  Mail,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { generateWhatsAppUrl } from "@/lib/utils";

const LOGO_WHITE_SVG = (
  <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
    <path d="M8 25 L18 10 L28 25 L18 40 Z" fill="#C89B3C" opacity="0.9" />
    <path d="M13 25 L18 16 L23 25 L18 34 Z" fill="#f9f0d5" />
    <text x="36" y="22" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" fill="#ffffff" letterSpacing="1">DIAMOND KEY</text>
    <text x="36" y="38" fontFamily="Georgia, serif" fontSize="9" fontWeight="400" fill="#C89B3C" letterSpacing="3">SPA · DUBAI</text>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-luxury-dark text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            {LOGO_WHITE_SVG}
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Dubai&apos;s premier luxury day spa in Al Qusais. Experience world-class massage therapy,
              authentic Moroccan hammam, and advanced facial treatments in an atmosphere of
              unparalleled elegance.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
              ))}
              <span className="text-gold-400 font-bold text-sm ml-1">4.76</span>
              <span className="text-gray-500 text-sm">on Google</span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold-400 mb-5">
              Our Services
            </h3>
            <ul className="space-y-2">
              {navigation.footer.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-400 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold-500/50 group-hover:text-gold-500 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.footer.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-400 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold-500/50 group-hover:text-gold-500 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-gold-400 mb-5 mt-8">
              Local Areas
            </h3>
            <ul className="space-y-2">
              {navigation.footer.localSeo.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-400 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold-500/50 group-hover:text-gold-500 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold-400 mb-5">
              Contact & Hours
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">
                    Al Qusais Industrial Area 5
                  </p>
                  <p className="text-sm text-gray-400">Dubai, UAE</p>
                  <a
                    href={siteConfig.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold-400 hover:text-gold-300 transition-colors mt-1 block"
                  >
                    Get Directions →
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Open Daily</p>
                  <p className="text-sm text-gray-400">9:00 AM – 12:30 AM</p>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 group"
                >
                  <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300 group-hover:text-gold-400 transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 group"
                >
                  <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300 group-hover:text-gold-400 transition-colors">
                    {siteConfig.contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <span className="text-sm text-gray-300 group-hover:text-[#25D366] transition-colors">
                    Chat on WhatsApp
                  </span>
                </a>
              </li>
            </ul>

            <Link
              href="/book-appointment"
              className="mt-6 gold-btn !py-3 !px-6 text-sm block text-center"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            {navigation.footer.legal.map((item, i) => (
              <span key={item.href} className="flex items-center gap-4">
                {i > 0 && <span>·</span>}
                <Link href={item.href} className="hover:text-gold-400 transition-colors">
                  {item.name}
                </Link>
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-600">
            Luxury Day Spa · Dubai, UAE 🇦🇪
          </p>
        </div>
      </div>
    </footer>
  );
}
