export const navigation = {
  main: [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      children: [
        {
          name: "Body Massage",
          href: "/services/body-massage",
          description: "Full-body therapeutic massage",
        },
        {
          name: "Moroccan Bath",
          href: "/services/moroccan-bath",
          description: "Authentic hammam ritual",
        },
        {
          name: "Facial Treatments",
          href: "/services/facial-treatments",
          description: "Advanced skincare facials",
        },
        {
          name: "Body Scrub",
          href: "/services/body-scrub",
          description: "Natural exfoliation treatments",
        },
        {
          name: "Aromatherapy",
          href: "/services/aromatherapy",
          description: "Essential oil holistic massage",
        },
        {
          name: "Deep Tissue Massage",
          href: "/services/deep-tissue-massage",
          description: "Therapeutic muscle therapy",
        },
        {
          name: "Hot Stone Massage",
          href: "/services/hot-stone-massage",
          description: "Volcanic basalt stone therapy",
        },
        {
          name: "Foot Reflexology",
          href: "/services/foot-reflexology",
          description: "Pressure point healing",
        },
        {
          name: "Massage Spa",
          href: "/services/massage-spa",
          description: "Complete spa massage experience",
        },
      ],
    },
    {
      name: "Spa Packages",
      href: "/spa-packages",
      children: [
        {
          name: "Luxury Packages",
          href: "/spa-packages/luxury-packages",
          description: "Premium all-inclusive spa days",
        },
        {
          name: "Couples Spa",
          href: "/spa-packages/couples-spa",
          description: "Romantic spa for two",
        },
        {
          name: "VIP Experience",
          href: "/spa-packages/vip-spa",
          description: "White-glove gold treatment",
        },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  footer: {
    services: [
      { name: "Body Massage", href: "/services/body-massage" },
      { name: "Moroccan Bath", href: "/services/moroccan-bath" },
      { name: "Facial Treatments", href: "/services/facial-treatments" },
      { name: "Aromatherapy", href: "/services/aromatherapy" },
      { name: "Deep Tissue Massage", href: "/services/deep-tissue-massage" },
      { name: "Hot Stone Massage", href: "/services/hot-stone-massage" },
      { name: "Foot Reflexology", href: "/services/foot-reflexology" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Gallery", href: "/gallery" },
      { name: "Reviews", href: "/reviews" },
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    localSeo: [
      { name: "Spa in Al Qusais", href: "/spa-in-al-qusais" },
      { name: "Luxury Spa Dubai", href: "/luxury-spa-dubai" },
      { name: "Best Spa Dubai", href: "/best-spa-dubai" },
      { name: "Massage Spa Al Qusais", href: "/massage-spa-al-qusais" },
      { name: "Day Spa Dubai", href: "/day-spa-dubai" },
      { name: "Spa Deira", href: "/spa-deira" },
      { name: "Spa Al Nahda", href: "/spa-al-nahda" },
    ],
  },
};
