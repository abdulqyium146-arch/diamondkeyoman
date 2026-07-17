export const navigation = {
  main: [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      children: [
        {
          name: "Car Key Copying",
          href: "/services/car-key-copying",
          description: "Duplicate car keys for all makes & models",
        },
        {
          name: "Building Key Copying",
          href: "/services/building-key-copying",
          description: "Home, office & security key duplication",
        },
        {
          name: "Car Key Programming",
          href: "/services/car-key-programming",
          description: "Remote & transponder key programming",
        },
        {
          name: "Key Fob Creation",
          href: "/services/key-fob-creation",
          description: "New remote key fob — lost key replacement",
        },
        {
          name: "Lock Rekeying",
          href: "/services/lock-rekeying",
          description: "Rekey locks — invalidate old keys instantly",
        },
        {
          name: "Building Lockout",
          href: "/services/building-lockout",
          description: "Locked out? Fast non-destructive entry",
        },
        {
          name: "Car Lockout",
          href: "/services/car-lockout",
          description: "Keys inside car? We open without damage",
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
      { name: "Car Key Copying", href: "/services/car-key-copying" },
      { name: "Building Key Copying", href: "/services/building-key-copying" },
      { name: "Car Key Programming", href: "/services/car-key-programming" },
      { name: "Key Fob Creation", href: "/services/key-fob-creation" },
      { name: "Lock Rekeying", href: "/services/lock-rekeying" },
      { name: "Building Lockout", href: "/services/building-lockout" },
      { name: "Car Lockout", href: "/services/car-lockout" },
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
      { name: "Key Duplication Seeb", href: "/key-duplication-seeb" },
      { name: "Locksmith Muscat", href: "/locksmith-muscat" },
      { name: "Car Key Programming Oman", href: "/car-key-programming-oman" },
      { name: "Emergency Locksmith Seeb", href: "/emergency-locksmith-seeb" },
      { name: "Car Lockout Muscat", href: "/car-lockout-muscat" },
      { name: "Key Cutting Muscat", href: "/key-cutting-muscat" },
      { name: "Locksmith Bausher", href: "/locksmith-bausher" },
    ],
  },
};
