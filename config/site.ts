export const siteConfig = {
  name: "Diamond Key",
  arabicName: "المفتاح الماسي",
  fullName: "المفتاح الماسي Diamond Key",
  tagline: "Oman's Trusted Key Duplication & Locksmith Experts",
  description:
    "Professional key duplication, car key programming, and locksmith services in Seeb, Muscat, Oman. Expert technicians for car keys, remote key fobs, lock rekeying, and emergency lockouts. 7+ years serving Oman.",
  shortDescription:
    "Key Duplication & Locksmith Services in Seeb, Oman — Car Keys, Fobs, Lock Rekeying & Emergency Lockouts.",
  url: "https://www.diamondkeyoman.com",
  ogImage: "/images/og/diamond-key-og.jpg",
  locale: "en_OM",
  country: "OM",
  currency: "OMR",

  contact: {
    phone: "+96890974040",
    phoneDisplay: "+968 9097 4040",
    whatsapp: "+96890974040",
    email: "info@diamondkeyoman.com",
    address: {
      street: "Al Khair Street",
      city: "Seeb",
      state: "Muscat",
      country: "Oman",
      postalCode: "522",
      plusCode: "",
      full: "Al Khair St, Seeb 522, Muscat, Oman",
    },
  },

  hours: {
    display: "Opens Daily 4:30 PM",
    weekdays: "4:30 PM – 11:00 PM",
    weekends: "4:30 PM – 11:30 PM",
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
        opens: "16:30",
        closes: "23:00",
      },
    ],
  },

  location: {
    lat: 23.5906,
    lng: 58.2009,
    googleMapsUrl:
      "https://maps.google.com/?q=Al+Miftah+Al+Almasi+Diamond+Key+Seeb+Oman",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.0!2d58.2009!3d23.5906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzI2LjIiTiA1OMKwMTInMDMuMiJF!5e0!3m2!1sen!2som!4v1234567890",
    nearbyLandmarks: [
      "Muscat International Airport",
      "Sultan Qaboos Grand Mosque",
      "Muscat City Centre Mall",
      "Seeb Roundabout",
      "Al Khuwair Business District",
    ],
    nearbyAreas: ["Bausher", "Mawaleh", "Al Khuwair", "Ghala", "Azaiba"],
    nearbyMetro: [],
    drivingFrom: {
      airport: "10 minutes from Muscat International Airport",
      downtown: "20 minutes from Muscat City Centre",
      bausher: "5 minutes from Bausher",
      mawaleh: "8 minutes from Mawaleh",
    },
  },

  rating: {
    value: 4.0,
    count: 51,
    platform: "Google",
  },

  social: {
    instagram: "https://instagram.com/diamondkeyoman",
    facebook: "https://facebook.com/diamondkeyoman",
    tiktok: "https://tiktok.com/@diamondkeyoman",
    whatsapp: "https://wa.me/96890974040",
  },

  keywords: {
    primary: [
      "key duplication Seeb",
      "locksmith Muscat",
      "car key programming Oman",
      "key cutting Seeb",
      "duplicate key Muscat",
    ],
    secondary: [
      "car key fob programming Oman",
      "lock rekeying Muscat",
      "emergency locksmith Seeb",
      "car lockout service Muscat",
      "building key copying Oman",
      "remote key programming",
      "new key fob creation",
    ],
    local: [
      "locksmith near me Seeb",
      "key maker Muscat",
      "auto locksmith Oman",
      "residential locksmith Seeb",
      "commercial locksmith Muscat",
      "key duplication Bausher",
      "car lockout Mawaleh",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
