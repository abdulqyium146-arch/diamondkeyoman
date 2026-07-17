import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { blogPosts } from "@/content/blog/posts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Key & Locksmith Blog | Expert Guides from Diamond Key Oman",
  description:
    "Expert articles on car key duplication, key programming, lock rekeying, lockout tips, and locksmith guides for Oman. From Diamond Key, your trusted locksmith in Seeb, Muscat.",
  keywords: [
    "key duplication guide Oman", "car key programming guide", "locksmith tips Muscat",
    "lock rekeying guide Oman", "key fob guide Seeb", "lockout tips Oman",
  ],
  alternates: { canonical: `${siteConfig.url}/blog` },
};

const categories = ["All", "Key Duplication", "Key Programming", "Locksmith", "Emergency", "Car Keys", "Building Keys", "Guide", "Tips", "Oman"];

const categoryColors: Record<string, string> = {
  Wellness: "bg-green-100 text-green-700",
  Treatments: "bg-gold-100 text-gold-700",
  "Dubai Guide": "bg-blue-100 text-blue-700",
  Health: "bg-red-100 text-red-700",
  Skincare: "bg-pink-100 text-pink-700",
  Education: "bg-purple-100 text-purple-700",
  Holistic: "bg-teal-100 text-teal-700",
  Experiences: "bg-orange-100 text-orange-700",
  Luxury: "bg-amber-100 text-amber-700",
  Sports: "bg-cyan-100 text-cyan-700",
  "Mental Health": "bg-violet-100 text-violet-700",
  "Local Guide": "bg-lime-100 text-lime-700",
  Seasonal: "bg-sky-100 text-sky-700",
  DEFAULT: "bg-gray-100 text-gray-700",
};

const gradients = [
  "from-stone-700 to-stone-500", "from-amber-800 to-amber-600", "from-slate-700 to-slate-500",
  "from-teal-800 to-teal-600", "from-purple-800 to-purple-600", "from-rose-800 to-rose-600",
  "from-emerald-800 to-emerald-600", "from-indigo-800 to-indigo-600", "from-orange-800 to-orange-600",
];

export default function BlogPage() {
  const breadcrumbs = [{ name: "Blog", href: "/blog" }];
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <div className="bg-luxury-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(200,155,60,0.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-400 [&_a]:text-gray-400 [&_a:hover]:text-gold-400" />
          <SectionLabel centered={false}>Key & Locksmith Blog</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 mb-4">
            Expert Key & Locksmith <span className="text-gold-400">Guides</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Practical guides on car key duplication, key programming, lock rekeying, emergency
            lockout tips, and everything you need to know about keys and locks in Oman.
          </p>
        </div>
      </div>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-1">
            {categories.map((cat) => (
              <div key={cat}
                className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-gold-400 hover:bg-gold-50 cursor-pointer transition-all whitespace-nowrap flex-shrink-0">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <AnimatedSection className="mb-10">
              <SectionLabel centered={false}>Featured</SectionLabel>
              <h2 className="text-2xl font-serif font-bold">Editor&apos;s Picks</h2>
            </AnimatedSection>
            <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {featured.map((post, i) => {
                const grad = gradients[i % gradients.length];
                const catColor = categoryColors[post.category] || categoryColors.DEFAULT;
                return (
                  <AnimatedItem key={post.slug} direction="up">
                    <Link href={`/blog/${post.slug}`}
                      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-luxury hover:-translate-y-1 transition-all duration-400 h-full">
                      <div className={`h-48 bg-gradient-to-br ${grad} relative`}>
                        <div className="absolute top-4 left-4">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${catColor}`}>{post.category}</span>
                        </div>
                        <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-full">Featured</div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime} min</span>
                          <span>·</span>
                          <span>{new Date(post.publishedAt).toLocaleDateString("en-OM", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </div>
                        <h2 className="text-base font-serif font-bold text-gray-900 leading-snug mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-gray-700">{post.author}</p>
                            <p className="text-xs text-gray-400">{post.authorTitle}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </AnimatedItem>
                );
              })}
            </AnimatedGroup>
          </div>
        </section>
      )}

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="mb-10">
            <h2 className="text-2xl font-serif font-bold">All Articles</h2>
            <p className="text-gray-500 text-sm mt-1">{blogPosts.length} expert articles on keys and locksmith services</p>
          </AnimatedSection>
          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.05}>
            {rest.map((post, i) => {
              const grad = gradients[i % gradients.length];
              const catColor = categoryColors[post.category] || categoryColors.DEFAULT;
              return (
                <AnimatedItem key={post.slug} direction="up">
                  <Link href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                    <div className={`h-40 bg-gradient-to-br ${grad} relative`}>
                      <div className="absolute top-3 left-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${catColor}`}>{post.category}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime} min</span>
                        <span>·</span>
                        <span>{new Date(post.publishedAt).toLocaleDateString("en-OM", { month: "short", year: "numeric" })}</span>
                      </div>
                      <h3 className="text-sm font-serif font-bold text-gray-900 leading-snug mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Link>
                </AnimatedItem>
              );
            })}
          </AnimatedGroup>
        </div>
      </section>
    </>
  );
}
