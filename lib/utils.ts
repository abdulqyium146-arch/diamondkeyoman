import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, currency = "OMR"): string {
  return `${currency} ${amount.toLocaleString()}`;
}

export function formatPriceRange(from: number, to?: number, currency = "OMR"): string {
  if (to) {
    return `${currency} ${from}–${to}`;
  }
  return `From ${currency} ${from}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).replace(/\s+\S*$/, "") + "...";
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-OM", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function getStarRating(rating: number): string {
  return "★".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "½" : "");
}

export function generateWhatsAppUrl(message?: string): string {
  const phone = "96890974040";
  const defaultMessage =
    "Hello Diamond Key! I need key duplication or locksmith service.";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function generateCallUrl(): string {
  return "tel:+96890974040";
}

export function absoluteUrl(path: string): string {
  return `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.diamondkeyoman.com"}${path}`;
}

export const TRANSITION_EASE = [0.25, 0.1, 0.25, 1] as const;
export const TRANSITION_SPRING = { type: "spring", stiffness: 300, damping: 30 };
