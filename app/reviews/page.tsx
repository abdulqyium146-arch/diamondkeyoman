import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ExternalLink, ThumbsUp } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Client Reviews | Diamond Key Spa Dubai — 200+ Verified Google Reviews ⭐ 4.76",
  description:
    "Read 200+ verified Google reviews for Diamond Key Spa in Al Qusais, Dubai. Real testimonials about massage therapy, Moroccan hammam, facial treatments & spa packages. Rated 4.76/5.",
  keywords: [
    "diamond key spa reviews", "spa reviews dubai", "massage reviews dubai al qusais",
    "best rated spa dubai", "verified spa reviews", "google reviews diamond key spa",
  ],
  alternates: { canonical: `${siteConfig.url}/reviews` },
};

const reviews = [
  { id: "1", author: "Sarah Al Mansouri", initials: "S", rating: 5, service: "Moroccan Bath", date: "November 2024", text: "Absolutely the best spa experience I've had in Dubai. The Moroccan Bath was extraordinary — my skin felt like velvet for days afterwards. The therapist was incredibly professional and explained each step beautifully. The steam room was perfectly heated, the black soap smelled divine. I left glowing. Will be returning every single month without question." },
  { id: "2", author: "Mohammed Al Rashid", initials: "M", rating: 5, service: "Deep Tissue Massage", date: "November 2024", text: "I came in with severe lower back pain that had been troubling me for weeks. Left feeling 10 years younger. The deep tissue massage therapist was exceptional — she knew exactly where to apply pressure and the intensity was perfect. First time in months I've had a pain-free day. Diamond Key Spa is genuinely one of the best therapeutic massage centers in the UAE." },
  { id: "3", author: "Priya Sharma", initials: "P", rating: 5, service: "Royal Retreat Package", date: "October 2024", text: "A hidden gem in Al Qusais! The Royal Retreat Package was absolutely worth every dirham. Four hours of pure bliss — the hammam, full-body massage, facial all rolled into one incredible journey. The facility is immaculate, the atmosphere peaceful, and the therapists clearly love what they do. I've recommended Diamond Key to every friend and colleague in Dubai." },
  { id: "4", author: "Elena Petrov", initials: "E", rating: 5, service: "Couples Spa Package", date: "October 2024", text: "My husband and I did the Couples Bliss Package for our 5th anniversary and it was truly magical. The private suite was beautifully decorated with rose petals, the synchronized massage was deeply relaxing, and the champagne afterwards was a perfect touch. Staff were attentive without being intrusive. Perfect luxury experience for two." },
  { id: "5", author: "Tariq Al Zaabi", initials: "T", rating: 5, service: "Aromatherapy Massage", date: "October 2024", text: "I've tried many spas across Dubai and Abu Dhabi over the years, and Diamond Key consistently delivers the best aromatherapy experience I've found. The essential oil blends they use are genuinely therapeutic — my therapist chose a eucalyptus and rosemary blend for my stress and it worked wonders. Great location, great team, great value." },
  { id: "6", author: "Fatima Al Nuaimi", initials: "F", rating: 5, service: "Facial Treatment", date: "September 2024", text: "The facial treatment I received completely transformed my skin. The esthetician analyzed my skin type thoroughly before starting and customized the entire treatment for my specific concerns — dehydration and sun damage from Dubai's heat. Two weeks later, people keep asking what I've done differently! The quality of knowledge and skill here is exceptional." },
  { id: "7", author: "Rahul Mehta", initials: "R", rating: 5, service: "Hot Stone Massage", date: "September 2024", text: "First time trying hot stone massage and I was blown away. The heat from the basalt stones penetrated my tight shoulders in a way regular massage never has. The therapist used the stones as tools in such a skilled way — not just placing them on you but actually massaging with them. One of the most relaxing 90 minutes of my life." },
  { id: "8", author: "Aisha Al Dhaheri", initials: "A", rating: 5, service: "Body Scrub + Massage", date: "September 2024", text: "Visited for a body scrub followed by a Swedish massage. The combination was incredible — my skin has never felt so smooth in my life. The coffee scrub they used smelled amazing and the massage pressure was exactly right. The therapist remembered my preferences even though it was only my second visit. That personal touch makes all the difference." },
  { id: "9", author: "James Mitchell", initials: "J", rating: 5, service: "Deep Tissue Massage", date: "August 2024", text: "As someone who works 12-hour days in an office and has chronic neck and shoulder tension, regular massage is non-negotiable for me. Diamond Key Spa has been my go-to for the past 6 months. The deep tissue therapist here is exceptional — she understands musculature and targeting tension at the source, not just the surface. Highly recommend." },
  { id: "10", author: "Lina Saad", initials: "L", rating: 5, service: "VIP Gold Experience", date: "August 2024", text: "Treated myself to the VIP Gold Experience for my 40th birthday and it was the most luxurious experience I've ever had at any spa, in Dubai or anywhere else. The gold facial left my skin glowing for two weeks. The personal concierge made everything effortless. Worth every dirham and I'm already planning my next VIP visit." },
  { id: "11", author: "Omar Al Farsi", initials: "O", rating: 5, service: "Foot Reflexology", date: "July 2024", text: "I was skeptical about reflexology — how can pressing on your feet heal your whole body? After one session at Diamond Key Spa, I'm a complete convert. The therapist explained every zone as she worked and I felt the effects in my back, my sinuses, and my digestion within 24 hours. Remarkable. Will be coming monthly." },
  { id: "12", author: "Nour Khalil", initials: "N", rating: 5, service: "Moroccan Bath + Facial", date: "July 2024", text: "Combining the Moroccan Bath with the facial is absolutely the way to go — the hammam opens your pores so the facial products work so much deeper. Diamond Key's hammam is the most authentic I've experienced outside of Morocco itself. The kessa exfoliation removed a remarkable amount of dead skin and my skin has been glowing for two weeks." },
];

const aggregateSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Diamond Key Spa",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.76,
    reviewCount: 200,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
    datePublished: r.date,
  })),
};

export default function ReviewsPage() {
  const breadcrumbs = [{ name: "Reviews", href: "/reviews" }];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }} />

      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <SectionLabel centered={false}>Client Reviews</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 mb-6">
            What Our Clients <span className="text-gold-400">Say About Us</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />)}
              </div>
              <span className="text-4xl font-serif font-bold text-gold-300">{siteConfig.rating.value}</span>
            </div>
            <div className="text-gray-400">
              <span className="text-white font-semibold">{siteConfig.rating.count}+ Verified Reviews</span>
              <br />
              <span className="text-sm">on Google Business Profile</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {["All Reviews", "Massage", "Moroccan Bath", "Facial", "Packages", "Reflexology"].map((cat) => (
              <div key={cat} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-gold-400 hover:bg-gold-50 cursor-pointer transition-all">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
            {reviews.map((review) => (
              <AnimatedItem key={review.id} direction="up">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-luxury transition-shadow duration-300 flex flex-col h-full">
                  <Quote className="w-7 h-7 text-gold-200 mb-3 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center font-bold text-gold-600 text-sm flex-shrink-0">
                      {review.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900 truncate">{review.author}</p>
                      <p className="text-xs text-gray-400">{review.service} · {review.date}</p>
                    </div>
                    <div className="flex items-center gap-0.5 flex-shrink-0">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />)}
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom text-center max-w-xl">
          <AnimatedSection>
            <ThumbsUp className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold mb-4">
              Had a Great Experience?
            </h2>
            <p className="text-gray-600 mb-8">
              Your review helps other Dubai residents discover Diamond Key Spa.
              We read every review and truly appreciate your feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="gold-btn flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" /> Leave a Google Review
              </a>
              <Link href="/book-appointment" className="ghost-btn">Book Your Visit</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
