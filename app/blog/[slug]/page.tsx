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
              {new Date(post.publishedAt).toLocaleDateString("en-OM", { year: "numeric", month: "long", day: "numeric" })}
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
                    At Diamond Key in Seeb, Muscat, our technicians work with customers every day who encounter the situations this article addresses. Drawing on our experience serving Oman&apos;s drivers and property owners for over 7 years, this guide provides practical, expert-level information based on real hands-on experience with keys and locks in Oman.
                  </p>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4">
                    Understanding the Basics
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The topic of {post.title.split(":")[0].toLowerCase()} is one that affects many Oman residents at some point. Whether you are dealing with a lost car key, need a spare key cut, or want to understand how modern car key programming works, the information here applies directly to the situations Muscat residents face.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Oman&apos;s car-dependent lifestyle means that key and locksmith issues have an immediate impact on daily life. Understanding your options — and knowing when to call a professional — can save significant time and money compared to going directly to an expensive dealership.
                  </p>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4">
                    What You Need to Know
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Modern vehicles and security systems have become increasingly sophisticated. Car keys now contain electronic transponder chips that must be programmed to the vehicle&apos;s immobiliser system. Building locks have evolved from simple pin tumbler designs to high-security cylinders. Understanding these systems helps you make informed decisions when you need key or locksmith services.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Specifically relevant to {post.tags[0] || "key services"}, the key principles our technicians want Oman residents to understand include the difference between mechanical key cutting and electronic key programming, when rekeying is better than replacing a lock, and what to do — and not do — in a lockout situation.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    At Diamond Key, every service we provide uses professional-grade tools and genuine OEM-compatible parts. We do not use improvised methods or low-quality key blanks — the result is a key or repair that works correctly and reliably from day one.
                  </p>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4">
                    Practical Tips for Oman Residents
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Here are the key points our technicians recommend every Muscat resident knows:
                  </p>
                  <ul className="list-none space-y-3 mb-6">
                    {[
                      "Always have at least one spare key for your home and car — a duplicate cut today costs far less than an emergency lockout service",
                      "Never try to force a key that doesn't turn smoothly — it may be worn or incorrectly cut, and forcing it can damage the lock",
                      "If you lose a key to your home or office, rekey the locks rather than replace them — it's cheaper and equally secure",
                      "For car key issues, call a professional locksmith before going to the dealer — you will typically save 70–80% on key programming",
                      "Keep our number saved: +968 9097 4040 — for any key or locksmith issue in Seeb or Muscat",
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-gold-100 text-gold-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                        <span className="text-gray-600 text-sm leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4">
                    When to Call Diamond Key
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Based on 7+ years of serving Seeb and Muscat customers, the most common situations we handle are: needing a spare car key, programming a replacement key fob, being locked out of a car or home, and rekeying locks after moving to a new property.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    In all these situations, the right first step is to call us on +968 9097 4040 and describe the situation. We can advise the correct service, confirm the price, and arrange for you to visit our Seeb shop or discuss on-site service.
                  </p>

                  <div className="bg-gold-50 border border-gold-100 rounded-2xl p-6 my-8">
                    <h3 className="font-bold text-gray-900 mb-3">Key Takeaway</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.excerpt} At Diamond Key, we combine technical expertise with honest pricing to give Oman residents the most cost-effective key and locksmith service in Seeb and Muscat.
                    </p>
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4">
                    Need Help with a Key or Lock?
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Diamond Key is on Al Khair Street, Seeb 522, Muscat, Oman. Open daily from 4:30 PM. Call or WhatsApp +968 9097 4040 for immediate assistance with any key or locksmith need across Muscat.
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
                        A key and locksmith expert with years of experience at Diamond Key, specializing in car key programming, lock rekeying, and emergency locksmith services in Oman.
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
                  <h3 className="font-bold text-gray-900 mb-4">Need a Key or Locksmith?</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    Call or WhatsApp Diamond Key in Seeb, Muscat. Open daily from 4:30 PM.
                  </p>
                  <div className="space-y-3">
                    <a href={`tel:${siteConfig.contact.phone}`} className="gold-btn !py-3 block text-center text-sm">Call Now</a>
                    <a href={`https://wa.me/96890974040?text=Hello%20Diamond%20Key!%20I%20need%20help%20with%20a%20key%20or%20lock.`} target="_blank" rel="noopener noreferrer" className="ghost-btn !py-3 block text-center text-sm">WhatsApp Us</a>
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
                      { name: "Car Key Copying", href: "/services/car-key-copying" },
                      { name: "Car Key Programming", href: "/services/car-key-programming" },
                      { name: "Key Fob Creation", href: "/services/key-fob-creation" },
                      { name: "Lock Rekeying", href: "/services/lock-rekeying" },
                      { name: "Car Lockout", href: "/services/car-lockout" },
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
