import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Diamond Key Spa",
    description: siteConfig.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#C89B3C",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    dir: "ltr",
    categories: ["health", "beauty", "lifestyle"],
    icons: [
      {
        src: "/icons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Book Appointment",
        short_name: "Book",
        description: "Book a spa appointment",
        url: "/book-appointment",
        icons: [{ src: "/icons/book-icon.png", sizes: "192x192" }],
      },
      {
        name: "Call Us",
        short_name: "Call",
        description: "Call Diamond Key Spa",
        url: "tel:+971544907283",
        icons: [{ src: "/icons/call-icon.png", sizes: "192x192" }],
      },
      {
        name: "Services",
        short_name: "Services",
        description: "Browse our spa services",
        url: "/services",
        icons: [{ src: "/icons/services-icon.png", sizes: "192x192" }],
      },
    ],
    screenshots: [
      {
        src: "/screenshots/mobile-home.jpg",
        sizes: "390x844",
        type: "image/jpeg",
      },
      {
        src: "/screenshots/desktop-home.jpg",
        sizes: "1440x900",
        type: "image/jpeg",
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
