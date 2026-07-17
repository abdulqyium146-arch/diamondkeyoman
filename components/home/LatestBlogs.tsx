import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import AnimatedSection, { AnimatedGroup, AnimatedItem } from "@/components/shared/AnimatedSection";
import { SectionLabel } from "@/components/shared/GoldDivider";
import { blogPosts } from "@/content/blog/posts";

export default function LatestBlogs() {
  const featured = blogPosts.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      className="section-padding bg-gray-50"
      aria-label="Latest articles from Diamond Key locksmith Seeb Oman"
    >
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Our Blog</SectionLabel>
          <h2 className="section-heading">
            Keys, Locks &amp; Locksmith
            <span className="block text-gold-500">Tips & Guides</span>
          </h2>
          <p className="section-subheading mt-4">
            Practical advice on car key care, home security, lock maintenance, and what to do
            when you&apos;re locked out — from our experienced team in Seeb, Oman.
          </p>
        </AnimatedSection>

        <AnimatedGroup
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {featured.map((post) => (
            <AnimatedItem key={post.slug} direction="up">
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-luxury hover:-translate-y-1 transition-all duration-400 h-full"
              >
                <div className="h-44 bg-gradient-to-br from-gray-800 to-gray-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="tag text-xs">{post.category}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime} min read</span>
                    <span>·</span>
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-AE", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-gray-900 leading-snug mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-gold-500 text-sm font-semibold">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedGroup>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/blog"
            className="ghost-btn inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
