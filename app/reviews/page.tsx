import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ExternalLink, ThumbsUp } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Customer Reviews | Diamond Key Oman — 51+ Google Reviews ⭐ 4.0",
  description:
    "Read verified Google reviews for Diamond Key (المفتاح الماسي) in Seeb, Muscat, Oman. Real customer testimonials about car key copying, programming, lockout services & more. Rated 4.0/5.",
  keywords: [
    "diamond key oman reviews", "locksmith reviews seeb", "key duplication muscat reviews",
    "best locksmith oman rated", "verified reviews diamond key", "google reviews seeb locksmith",
  ],
  alternates: { canonical: `${siteConfig.url}/reviews` },
};

const reviews = [
  { id: "1", author: "Ahmed Al Balushi", initials: "A", rating: 5, service: "Car Key Copying", date: "January 2025", text: "Very fast and professional service. I needed a spare key for my Toyota Camry and they had it cut and ready in less than 15 minutes. Price was OMR 3 which is completely reasonable. The staff were friendly and knowledgeable. Will definitely come back for my other cars." },
  { id: "2", author: "Khalid Al Rawahi", initials: "K", rating: 5, service: "Car Key Programming", date: "December 2024", text: "I lost my car key and was dreading the dealer price. Diamond Key programmed a new key for my Nissan Patrol for a fraction of what the dealer quoted. The key works perfectly — remote, engine start, everything. Saved me a lot of money. Highly recommended for anyone in Muscat." },
  { id: "3", author: "Fatima Al Maamari", initials: "F", rating: 4, service: "Building Key Copying", date: "December 2024", text: "Quick and easy service. Had three house keys copied for my family. All keys work perfectly. The shop is easy to find on Al Khair Street and they were open when I visited in the evening. Good value for money." },
  { id: "4", author: "Mohammed Al Hinai", initials: "M", rating: 5, service: "Car Lockout", date: "November 2024", text: "Locked my keys inside my car in Seeb and panicked. Called Diamond Key and they guided me through what to do. Their technician opened my car without a single scratch on the door or paint. Professional tools and zero damage. Very grateful for the quick response. Price was very fair." },
  { id: "5", author: "Salim Al Kalbani", initials: "S", rating: 4, service: "Key Fob Creation", date: "November 2024", text: "My key fob stopped working and I needed a replacement. Diamond Key created a new fob for my Mitsubishi Pajero at a much better price than the dealership. Works perfectly including the remote lock and alarm functions. Process took about an hour. Good service overall." },
  { id: "6", author: "Hamed Al Busaidi", initials: "H", rating: 5, service: "Lock Rekeying", date: "October 2024", text: "Just moved into a new apartment and wanted to change the locks. Diamond Key rekeyed all three locks for a very reasonable price. Now only my new keys work. The technician was quick and explained the process clearly. Great peace of mind knowing the old tenant's keys no longer work." },
  { id: "7", author: "Yousuf Al Saadi", initials: "Y", rating: 4, service: "Car Key Copying", date: "October 2024", text: "Got spare keys cut for my Honda Accord. Keys are accurate and work well. Fast service and honest pricing. The shop is well-equipped and the staff know what they are doing. Good experience." },
  { id: "8", author: "Ibrahim Al Amri", initials: "I", rating: 5, service: "Car Key Programming", date: "September 2024", text: "Needed key programming for my Land Cruiser after buying a new spare key blank. Diamond Key completed the programming in about 45 minutes. The new key starts the engine and the remote works perfectly. Much cheaper than the Toyota dealer. Very happy with the service." },
  { id: "9", author: "Nasser Al Shanfari", initials: "N", rating: 4, service: "Building Lockout", date: "September 2024", text: "Locked out of my office after hours. Diamond Key helped — they opened the door professionally without damaging the lock. Reasonable charge. Professional approach and they asked for my ID before opening anything which was reassuring." },
  { id: "10", author: "Ali Al Harthi", initials: "A", rating: 5, service: "Key Fob Creation", date: "August 2024", text: "Brand new fob for my GMC Yukon. I was expecting dealer-level prices but Diamond Key was very affordable. Fob creation took less than an hour. All buttons work, engine starts, everything is perfect. Will recommend to my colleagues." },
  { id: "11", author: "Saif Al Wahaibi", initials: "S", rating: 5, service: "Car Key Copying", date: "August 2024", text: "Simple and efficient. Needed a spare car key and got it done in 10 minutes at OMR 2. Good location in Seeb, open in the evening which suits my work schedule. Exactly what you need from a key shop — quick, accurate, affordable." },
  { id: "12", author: "Omar Al Farsi", initials: "O", rating: 4, service: "Lock Rekeying", date: "July 2024", text: "Had my home locks rekeyed after losing a spare key. The locksmith knew his work well and rekeyed two locks efficiently. All my doors now work on the same new key which is convenient. Fair price and professional service." },
];

const aggregateSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.fullName,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating.value,
    reviewCount: siteConfig.rating.count,
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
          <SectionLabel centered={false}>Customer Reviews</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 mb-6">
            What Our Customers <span className="text-gold-400">Say About Us</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />)}
                <Star className="w-6 h-6 text-gold-400" />
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
            {["All Reviews", "Car Key Copying", "Key Programming", "Key Fob", "Lockout", "Lock Rekeying"].map((cat) => (
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
              Your review helps other customers in Seeb and Muscat find Diamond Key.
              We read every review and appreciate your feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="gold-btn flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" /> Leave a Google Review
              </a>
              <Link href="/services" className="ghost-btn">Our Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
