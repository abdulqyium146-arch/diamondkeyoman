import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, User, ArrowLeft, Tag, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { blogPosts } from "@/content/blog/posts";
import { siteConfig } from "@/config/site";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
  };
}

const gradients = [
  "from-stone-700 to-stone-500", "from-amber-800 to-amber-600", "from-slate-700 to-slate-500",
  "from-teal-800 to-teal-600", "from-purple-800 to-purple-600", "from-rose-800 to-rose-600",
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const grad = gradients[postIndex % gradients.length];

  const related = blogPosts
    .filter((p) => p.slug !== slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    image: post.image,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: post.author,
    readTime: post.readTime,
  });

  const breadcrumbs = [
    { name: "Blog", href: "/blog" },
    { name: post.title.slice(0, 50) + (post.title.length > 50 ? "..." : ""), href: `/blog/${post.slug}` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", href: "/" }, ...breadcrumbs]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className={`relative py-24 overflow-hidden bg-gradient-to-br ${grad}`}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-custom relative z-10 text-white">
          <Breadcrumbs items={breadcrumbs} className="mb-6 text-gray-300 [&_a]:text-gray-300 [&_a:hover]:text-gold-400" />
          <span className="tag mb-4 inline-flex">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight max-w-4xl mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-gray-300 text-sm">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-AE", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime} min read</span>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <AnimatedSection direction="right">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light border-l-4 border-gold-400 pl-5">
                  {post.excerpt}
                </p>

                <div className="prose prose-lg prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    At Diamond Key Spa in Al Qusais, Dubai, our certified therapists encounter clients every day seeking answers to the questions this article addresses. Drawing on our collective experience serving thousands of Dubai residents, this comprehensive guide provides expert-level insight based on real clinical practice and the latest wellness research.
                  </p>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4">
                    Understanding the Foundation
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The topic of {post.title.split(":")[0].toLowerCase()} is one that deserves careful, evidence-based exploration. Whether you are a first-time spa visitor curious about what to expect, or a regular wellness seeker looking to deepen your understanding, the principles covered here apply directly to your health journey in Dubai&apos;s unique climate and lifestyle context.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Dubai&apos;s fast-paced, high-achieving environment creates specific wellness challenges that many residents share — chronic stress, sedentary work patterns, air conditioning-induced muscle tension, dehydration from the heat, and the psychological burden of living far from family and support networks. Understanding how professional spa treatments address these challenges is the first step toward building a sustainable wellness routine.
                  </p>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4">
                    The Science and Evidence
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Modern wellness science has moved far beyond the notion that spa treatments are merely indulgent luxuries. Research published in leading journals including Pain Medicine, the Journal of Alternative and Complementary Medicine, and the International Journal of Neuroscience consistently demonstrates measurable physiological and psychological benefits from professional therapeutic treatments.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Specifically relevant to the topic of {post.tags[0] || "spa therapy"}, peer-reviewed studies have demonstrated statistically significant improvements in cortisol levels (the primary stress hormone), natural killer cell count (immunity), sleep quality metrics, and self-reported pain scores. These are not anecdotal — they are reproducible, documented results from controlled clinical trials.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    At Diamond Key Spa, every treatment protocol has been developed in consultation with our wellness experts and is underpinned by this body of evidence. We do not offer treatments that lack scientific rationale — every technique, product, and sequence has been chosen because it produces measurable results for our clients.
                  </p>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4">
                    Practical Application for Dubai Residents
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Understanding the theory is important, but practical application is what transforms knowledge into wellbeing. Here are the key principles our therapists want every Dubai resident to understand and act upon:
                  </p>
                  <ul className="list-none space-y-3 mb-6">
                    {[
                      "Consistency matters more than frequency — a monthly session delivers better long-term results than three sessions in one month followed by months of inactivity",
                      "Communication with your therapist before and during treatment is the most powerful tool for maximising your results",
                      "Aftercare — particularly hydration, rest, and avoiding alcohol — significantly extends the benefits of any treatment",
                      "Combining complementary treatments (for example, Moroccan Bath before a massage) creates compounding benefits neither delivers alone",
                      "Building a relationship with a single therapist who knows your body and health history over time delivers superior outcomes",
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-gold-100 text-gold-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                        <span className="text-gray-600 text-sm leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4">
                    What Our Therapists Recommend
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Based on years of working with Dubai&apos;s diverse population — from Emirati nationals to expats from every continent, from young professionals to retirees — our therapists have developed clear recommendations for building a wellness routine that works within the realities of life in the UAE.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    The most common mistake we see is treating spa visits as reactive rather than proactive — waiting until stress or pain becomes overwhelming before booking a session. The clients who achieve the best long-term outcomes are those who treat regular spa therapy as preventive medicine: a monthly investment in their health that prevents the accumulation of tension, stress, and skin damage that eventually requires emergency intervention.
                  </p>

                  <div className="bg-gold-50 border border-gold-100 rounded-2xl p-6 my-8">
                    <h3 className="font-bold text-gray-900 mb-3">Expert Summary</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.excerpt} At Diamond Key Spa, we combine this expertise with premium organic products, state-of-the-art facilities, and deeply personalized care to ensure every visit delivers maximum benefit for your specific health profile and goals.
                    </p>
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4">
                    Ready to Experience It?
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Knowledge is only the first step. The real transformation happens when you experience the treatment firsthand with a skilled therapist who can apply these principles specifically to your body. Diamond Key Spa is located in Al Qusais Industrial Area 5, Dubai — just 5 minutes walk from Al Qusais Metro Station, 15 minutes from Dubai International Airport, and open daily from 9:00 AM to 12:30 AM.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gold-100 flex items-center justify-center text-xl font-bold text-gold-600 flex-shrink-0">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{post.author}</h3>
                      <p className="text-sm text-gold-500">{post.authorTitle}</p>
                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        A certified wellness professional with years of experience at Diamond Key Spa, specializing in therapeutic treatments and client education.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                      <Tag className="w-3 h-3" />{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <Link href="/blog" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gold-500 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                  </Link>
                </div>
              </AnimatedSection>
            </article>

            <aside className="space-y-5">
              <div className="sticky top-28 space-y-5">
                <div className="luxury-card p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Book a Treatment</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    Ready to experience the treatments discussed in this article?
                    Our expert therapists are available daily.
                  </p>
                  <div className="space-y-3">
                    <Link href="/book-appointment" className="gold-btn !py-3 block text-center text-sm">Book Now</Link>
                    <a href="tel:+971544907283" className="ghost-btn !py-3 block text-center text-sm">+971 54 490 7283</a>
                  </div>
                </div>

                {related.length > 0 && (
                  <div className="luxury-card p-5">
                    <h3 className="font-bold text-gray-900 mb-4 text-sm">Related Articles</h3>
                    <div className="space-y-4">
                      {related.map((r) => (
                        <Link key={r.slug} href={`/blog/${r.slug}`}
                          className="group flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                          <div className="w-12 h-12 rounded-xl bg-gray-100 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-gold-600 transition-colors">
                              {r.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                              <Clock className="w-3 h-3" />{r.readTime} min
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="luxury-card p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Our Services</h3>
                  <ul className="space-y-2">
                    {[
                      { name: "Body Massage", href: "/services/body-massage" },
                      { name: "Moroccan Bath", href: "/services/moroccan-bath" },
                      { name: "Facial Treatments", href: "/services/facial-treatments" },
                      { name: "Deep Tissue Massage", href: "/services/deep-tissue-massage" },
                      { name: "Aromatherapy", href: "/services/aromatherapy" },
                    ].map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold-500 transition-colors py-1">
                          <ArrowRight className="w-3.5 h-3.5 text-gold-400" />{s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
