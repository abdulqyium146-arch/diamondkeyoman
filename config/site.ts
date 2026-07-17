export const siteConfig = {
  name: "Diamond Key Spa",
  tagline: "Dubai's Premier Luxury Day Spa",
  description:
    "Experience ultimate relaxation at Diamond Key Spa, Dubai's premier luxury day spa in Al Qusais. Professional massage therapy, Moroccan bath, facial treatments, aromatherapy, and exclusive spa packages. Book your appointment today.",
  shortDescription:
    "Luxury Day Spa in Al Qusais, Dubai — Massage, Moroccan Bath, Facial Treatments & More.",
  url: "https://www.diamondkeyspa.com",
  ogImage: "/images/og/diamond-key-spa-og.jpg",
  locale: "en_AE",
  country: "AE",
  currency: "AED",

  contact: {
    phone: "+971544907283",
    phoneDisplay: "+971 54 490 7283",
    whatsapp: "+971544907283",
    email: "info@diamondkeyspa.com",
    address: {
      street: "Al Qusais Industrial Area 5",
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      postalCode: "",
      plusCode: "7CR3+MXV",
      full: "Al Qusais Industrial Area 5, Dubai, United Arab Emirates",
    },
  },

  hours: {
    display: "Open Daily · Closes 12:30 AM",
    weekdays: "09:00 AM – 12:30 AM",
    weekends: "09:00 AM – 12:30 AM",
    note: "Open 7 days a week",
    schema: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "00:30",
      },
    ],
  },

  location: {
    lat: 25.2648,
    lng: 55.3708,
    googleMapsUrl:
      "https://maps.google.com/?q=Diamond+Key+Spa+Al+Qusais+Dubai",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0!2d55.3708!3d25.2648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzUzLjMiTiA1NcKwMjInMTQuOSJF!5e0!3m2!1sen!2sae!4v1234567890",
    nearbyLandmarks: [
      "Al Qusais Metro Station",
      "Al Nahda Metro Station",
      "City Centre Deira",
      "Al Mamzar Beach Park",
      "Dubai Frame",
    ],
    nearbyAreas: [
      "Al Nahda",
      "Muhaisnah",
      "Al Twar",
      "Deira",
      "Al Mamzar",
      "Al Qusais",
    ],
    nearbyMetro: ["Al Qusais Metro (Green Line)", "Al Nahda Metro (Green Line)"],
    drivingFrom: {
      downtown: "20 minutes from Downtown Dubai",
      airport: "15 minutes from Dubai International Airport",
      deira: "10 minutes from Deira",
      sharjah: "10 minutes from Sharjah border",
    },
  },

  rating: {
    value: 4.76,
    count: 200,
    platform: "Google",
  },

  social: {
    instagram: "https://instagram.com/diamondkeyspa",
    facebook: "https://facebook.com/diamondkeyspa",
    tiktok: "https://tiktok.com/@diamondkeyspa",
  },

  keywords: {
    primary: [
      "luxury spa Dubai",
      "day spa Dubai",
      "spa Al Qusais",
      "massage spa Dubai",
      "best spa Dubai",
    ],
    secondary: [
      "Moroccan bath Dubai",
      "body massage Dubai",
      "facial treatment Dubai",
      "aromatherapy spa Dubai",
      "deep tissue massage Dubai",
      "hot stone massage Dubai",
      "foot reflexology Dubai",
    ],
    local: [
      "spa near me Dubai",
      "massage near me Al Qusais",
      "spa Al Nahda",
      "spa Deira",
      "spa Muhaisnah",
      "spa Al Mamzar",
      "wellness center Dubai",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
