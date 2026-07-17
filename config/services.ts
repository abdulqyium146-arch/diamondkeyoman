export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  duration: string;
  priceFrom: number;
  priceTo?: number;
  currency: string;
  category: string;
  icon: string;
  image: string;
  benefits: string[];
  featured: boolean;
  popular: boolean;
}

export const services: Service[] = [
  {
    id: "car-key-copying",
    name: "Car Key Copying",
    slug: "car-key-copying",
    shortDescription:
      "Fast, precision-cut duplicate car keys for all makes and models. Get a spare key today.",
    description:
      "Our car key copying service provides precision-cut duplicate keys for all major vehicle makes and models. Using advanced key-cutting machinery, we ensure your duplicate key fits perfectly and functions exactly like the original. Whether you need a spare for a family member or a backup in case of emergencies, we cut car keys while you wait.",
    duration: "10–20 min",
    priceFrom: 2,
    priceTo: 5,
    currency: "OMR",
    category: "Key Duplication",
    icon: "Key",
    image: "/images/services/car-key-copying.jpg",
    benefits: [
      "All makes & models supported",
      "Precision CNC cutting",
      "Ready in minutes",
      "Affordable pricing",
      "Spare key for emergencies",
    ],
    featured: true,
    popular: true,
  },
  {
    id: "building-key-copying",
    name: "Building Key Copying",
    slug: "building-key-copying",
    shortDescription:
      "Duplicate home, office, and building keys for all standard and security lock types.",
    description:
      "We duplicate home, office, commercial, and building keys of all types — from standard door keys to high-security Mul-T-Lock and Abloy keys. Our key-cutting machines handle brass, nickel, steel, and aluminum blanks with sub-millimetre accuracy. Bring in your original key and walk out with an identical duplicate in minutes.",
    duration: "5–10 min",
    priceFrom: 0.5,
    priceTo: 2,
    currency: "OMR",
    category: "Key Duplication",
    icon: "Home",
    image: "/images/services/building-key-copying.jpg",
    benefits: [
      "Home & office keys",
      "Security key types",
      "Fast turnaround",
      "High precision cut",
      "Multiple copies available",
    ],
    featured: true,
    popular: true,
  },
  {
    id: "car-key-programming",
    name: "Car Key Programming",
    slug: "car-key-programming",
    shortDescription:
      "Digital and remote car key reprogramming for all modern vehicles with immobiliser systems.",
    description:
      "Modern vehicles use immobiliser chips and encrypted transponders to prevent theft. Our car key programming service covers all major brands including Toyota, Nissan, Honda, Hyundai, Kia, Land Rover, BMW, and more. We use OEM-grade diagnostic equipment to pair new keys with your vehicle's ECU, restoring full functionality including central locking and engine start.",
    duration: "30–60 min",
    priceFrom: 15,
    priceTo: 50,
    currency: "OMR",
    category: "Key Programming",
    icon: "Cpu",
    image: "/images/services/car-key-programming.jpg",
    benefits: [
      "All major car brands",
      "Immobiliser programming",
      "OEM diagnostic tools",
      "Engine start guaranteed",
      "Central locking restored",
    ],
    featured: true,
    popular: true,
  },
  {
    id: "key-fob-creation",
    name: "New Key Fob Creation",
    slug: "key-fob-creation",
    shortDescription:
      "Create a brand-new remote key fob for your vehicle — lost fob replacement without dealer prices.",
    description:
      "Lost your car remote key fob? We create brand-new key fobs and program them to your vehicle, saving you significant money compared to dealership prices. Our fob creation service covers a wide range of vehicles and includes full programming, central locking, and boot/trunk release functions. We source quality OEM-compatible fob shells and blades.",
    duration: "45–90 min",
    priceFrom: 20,
    priceTo: 60,
    currency: "OMR",
    category: "Key Programming",
    icon: "Radio",
    image: "/images/services/key-fob-creation.jpg",
    benefits: [
      "Lost key replacement",
      "Full remote functions",
      "80% cheaper than dealers",
      "OEM-compatible parts",
      "Same-day service",
    ],
    featured: true,
    popular: false,
  },
  {
    id: "lock-rekeying",
    name: "Lock Rekeying",
    slug: "lock-rekeying",
    shortDescription:
      "Rekey your locks so old keys no longer work — ideal after moving or losing a key.",
    description:
      "Lock rekeying is the smart solution when you want to change who has access to your property without replacing the entire lock. We reconfigure the internal pins of your existing lock so that only new keys will work — old copies are instantly obsolete. This is the recommended approach when moving into a new home, after a break-in, or when an employee leaves with a key.",
    duration: "20–45 min",
    priceFrom: 10,
    priceTo: 25,
    currency: "OMR",
    category: "Locksmith",
    icon: "RefreshCw",
    image: "/images/services/lock-rekeying.jpg",
    benefits: [
      "Old keys deactivated",
      "No lock replacement needed",
      "Cost-effective security",
      "All lock brands",
      "New keys provided",
    ],
    featured: false,
    popular: false,
  },
  {
    id: "building-lockout",
    name: "Building Lockout",
    slug: "building-lockout",
    shortDescription:
      "Locked out of your home or office? We open your lock without damage — fast response in Seeb.",
    description:
      "Locked out of your home, apartment, or office? Our experienced locksmiths use professional non-destructive techniques to open your door quickly and safely. We carry specialized picking tools, bump keys, and bypass equipment to handle all standard and high-security residential and commercial locks. No damage to your door or lock frame.",
    duration: "15–30 min",
    priceFrom: 10,
    priceTo: 20,
    currency: "OMR",
    category: "Emergency",
    icon: "DoorOpen",
    image: "/images/services/building-lockout.jpg",
    benefits: [
      "Non-destructive entry",
      "Fast response time",
      "All lock types",
      "Home & commercial",
      "No door damage",
    ],
    featured: false,
    popular: false,
  },
  {
    id: "car-lockout",
    name: "Car Lockout",
    slug: "car-lockout",
    shortDescription:
      "Keys locked inside your car? We open your vehicle safely without damage to paint or glass.",
    description:
      "Keys locked inside your car? Don't break a window — call Diamond Key. Our technicians use professional auto-entry tools including slim jims, wedge sets, and long-reach tools to open vehicle doors without causing any damage to paint, weatherstrips, or glass. We handle all vehicle types including sedans, SUVs, vans, and pickups from any manufacturer.",
    duration: "15–30 min",
    priceFrom: 15,
    priceTo: 30,
    currency: "OMR",
    category: "Emergency",
    icon: "Car",
    image: "/images/services/car-lockout.jpg",
    benefits: [
      "Zero vehicle damage",
      "All car brands",
      "Professional tools",
      "Quick response",
      "Sedans, SUVs & vans",
    ],
    featured: false,
    popular: false,
  },
];

export const serviceCategories = [
  {
    name: "Key Duplication",
    slug: "duplication",
    description: "Precision-cut duplicate keys for cars and buildings",
    count: 2,
  },
  {
    name: "Key Programming",
    slug: "programming",
    description: "Digital car key and remote fob programming",
    count: 2,
  },
  {
    name: "Locksmith",
    slug: "locksmith",
    description: "Lock rekeying and security upgrades",
    count: 1,
  },
  {
    name: "Emergency",
    slug: "emergency",
    description: "Fast lockout solutions for cars and buildings",
    count: 2,
  },
];
