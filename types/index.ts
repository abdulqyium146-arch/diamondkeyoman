export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  text: string;
  date: string;
  platform: "Google" | "TripAdvisor" | "Facebook";
  verified: boolean;
  service?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  authorTitle: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
  experience: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: string;
  width: number;
  height: number;
}

export interface LocalSeoPage {
  slug: string;
  title: string;
  heading: string;
  subheading: string;
  description: string;
  area: string;
  nearbyLandmarks: string[];
  nearbyMetro: string[];
  drivingDirection: string;
  distanceFromCenter: string;
  uniqueContent: string;
  faqs: FAQ[];
  reviews: Review[];
}

export interface Breadcrumb {
  name: string;
  href: string;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}
