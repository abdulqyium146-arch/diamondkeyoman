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

export interface Package {
  id: string;
  name: string;
  slug: string;
  description: string;
  duration: string;
  price: number;
  currency: string;
  includes: string[];
  image: string;
  tag?: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: "body-massage",
    name: "Body Massage",
    slug: "body-massage",
    shortDescription:
      "Full-body therapeutic massage to release tension, improve circulation, and restore balance.",
    description:
      "Our signature body massage combines traditional techniques with modern therapeutic approaches to deliver deep relaxation and healing. Using premium organic oils, our expert therapists customize each session to your specific needs.",
    duration: "60–120 min",
    priceFrom: 150,
    priceTo: 280,
    currency: "AED",
    category: "Massage",
    icon: "Hand",
    image: "/images/services/body-massage.jpg",
    benefits: [
      "Relieves muscle tension",
      "Improves blood circulation",
      "Reduces stress and anxiety",
      "Boosts immune system",
      "Enhances sleep quality",
    ],
    featured: true,
    popular: true,
  },
  {
    id: "moroccan-bath",
    name: "Moroccan Bath (Hammam)",
    slug: "moroccan-bath",
    shortDescription:
      "Authentic Moroccan hammam ritual with black soap, kessa glove exfoliation, and mineral-rich ghassoul clay.",
    description:
      "Experience the ancient Moroccan hammam ritual as practiced for centuries across North Africa. Our Moroccan Bath begins with a deep steam to open pores, followed by a traditional black soap (beldi) application and vigorous kessa glove exfoliation that removes layers of dead skin cells, revealing a radiant complexion.",
    duration: "60–90 min",
    priceFrom: 200,
    priceTo: 350,
    currency: "AED",
    category: "Body Treatment",
    icon: "Droplets",
    image: "/images/services/moroccan-bath.jpg",
    benefits: [
      "Deep skin exfoliation",
      "Removes dead skin cells",
      "Improves skin texture",
      "Detoxifies the body",
      "Leaves skin radiant",
    ],
    featured: true,
    popular: true,
  },
  {
    id: "facial-treatments",
    name: "Facial Treatments",
    slug: "facial-treatments",
    shortDescription:
      "Advanced skincare facials tailored for Dubai's climate — hydrating, brightening, anti-aging, and purifying options.",
    description:
      "Our medical-grade facial treatments are specifically designed for the unique demands of Dubai's hot, arid climate. Each facial begins with a thorough skin analysis to identify your skin type and concerns before customizing a treatment protocol.",
    duration: "45–90 min",
    priceFrom: 180,
    priceTo: 400,
    currency: "AED",
    category: "Facial",
    icon: "Sparkles",
    image: "/images/services/facial-treatments.jpg",
    benefits: [
      "Deep pore cleansing",
      "Anti-aging effects",
      "Hydration boost",
      "Brightening and glow",
      "Acne and blemish treatment",
    ],
    featured: true,
    popular: false,
  },
  {
    id: "body-scrub",
    name: "Body Scrub",
    slug: "body-scrub",
    shortDescription:
      "Luxurious full-body exfoliation using natural sea salt, sugar, coffee, or oatmeal scrubs to reveal soft, glowing skin.",
    description:
      "Our body scrub treatments use carefully selected natural exfoliants — from coarse sea salt and volcanic rock to gentle sugar and oatmeal — blended with nourishing botanical oils and butters. The treatment removes dull, dead skin cells, unclogs pores, and stimulates circulation.",
    duration: "45–60 min",
    priceFrom: 160,
    priceTo: 300,
    currency: "AED",
    category: "Body Treatment",
    icon: "Leaf",
    image: "/images/services/body-scrub.jpg",
    benefits: [
      "Exfoliates dead skin",
      "Reveals smooth skin",
      "Boosts circulation",
      "Reduces ingrown hairs",
      "Improves skin texture",
    ],
    featured: false,
    popular: false,
  },
  {
    id: "aromatherapy",
    name: "Aromatherapy Massage",
    slug: "aromatherapy",
    shortDescription:
      "Holistic massage with therapeutic essential oils for emotional balance, stress relief, and physical healing.",
    description:
      "Aromatherapy massage merges the healing power of therapeutic touch with the profound benefits of pure, undiluted essential oils. Our certified aromatherapists create bespoke oil blends chosen specifically for your emotional and physical needs.",
    duration: "60–90 min",
    priceFrom: 200,
    priceTo: 320,
    currency: "AED",
    category: "Massage",
    icon: "Wind",
    image: "/images/services/aromatherapy.jpg",
    benefits: [
      "Emotional balance",
      "Anxiety relief",
      "Hormonal harmony",
      "Improved sleep",
      "Mood elevation",
    ],
    featured: true,
    popular: false,
  },
  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    slug: "deep-tissue-massage",
    shortDescription:
      "Intense therapeutic massage targeting chronic muscle tension, sports injuries, and deep fascia knots.",
    description:
      "Deep tissue massage is a powerful therapeutic technique that goes beyond surface relaxation to address chronic pain, muscle tension, and postural problems at their source. Our therapists use firm, sustained pressure and slow, deliberate strokes to reach the deepest layers of muscle and connective tissue.",
    duration: "60–90 min",
    priceFrom: 220,
    priceTo: 380,
    currency: "AED",
    category: "Massage",
    icon: "Zap",
    image: "/images/services/deep-tissue-massage.jpg",
    benefits: [
      "Chronic pain relief",
      "Muscle knot release",
      "Improved posture",
      "Sports injury recovery",
      "Reduced inflammation",
    ],
    featured: true,
    popular: true,
  },
  {
    id: "hot-stone-massage",
    name: "Hot Stone Massage",
    slug: "hot-stone-massage",
    shortDescription:
      "Thermotherapy massage using heated basalt volcanic stones to penetrate deep muscle tissue and melt away tension.",
    description:
      "Hot stone massage is one of the most luxurious and deeply therapeutic massage modalities available. Smooth basalt lava stones, heated to the perfect temperature of 50–55°C, are strategically placed along energy meridian points and used as massage tools by our skilled therapists.",
    duration: "75–90 min",
    priceFrom: 250,
    priceTo: 400,
    currency: "AED",
    category: "Massage",
    icon: "Flame",
    image: "/images/services/hot-stone-massage.jpg",
    benefits: [
      "Deep muscle relaxation",
      "Improved circulation",
      "Pain relief",
      "Stress reduction",
      "Energetic balancing",
    ],
    featured: true,
    popular: true,
  },
  {
    id: "foot-reflexology",
    name: "Foot Reflexology",
    slug: "foot-reflexology",
    shortDescription:
      "Ancient Chinese reflexology targeting pressure points in the feet to heal organs and systems throughout the body.",
    description:
      "Foot reflexology is a precise science and healing art based on the principle that specific points on the feet correspond to every organ, gland, and system in the body. By applying targeted pressure to these reflex zones, our certified reflexologists stimulate the body's natural healing response.",
    duration: "45–60 min",
    priceFrom: 130,
    priceTo: 220,
    currency: "AED",
    category: "Massage",
    icon: "FootprintsIcon",
    image: "/images/services/foot-reflexology.jpg",
    benefits: [
      "Organ stimulation",
      "Stress relief",
      "Better sleep",
      "Pain reduction",
      "Energy restoration",
    ],
    featured: false,
    popular: false,
  },
  {
    id: "massage-spa",
    name: "Massage Spa",
    slug: "massage-spa",
    shortDescription:
      "Comprehensive massage spa experience combining multiple massage techniques in one luxurious session.",
    description:
      "Our Massage Spa experience is the ultimate in therapeutic luxury — a comprehensive treatment that combines the best of multiple massage modalities into one cohesive, deeply healing session.",
    duration: "90–120 min",
    priceFrom: 280,
    priceTo: 450,
    currency: "AED",
    category: "Massage",
    icon: "Star",
    image: "/images/services/massage-spa.jpg",
    benefits: [
      "Complete relaxation",
      "Multiple techniques",
      "Full-body treatment",
      "Stress elimination",
      "Luxury experience",
    ],
    featured: true,
    popular: true,
  },
];

export const packages: Package[] = [
  {
    id: "royal-retreat",
    name: "Royal Retreat Package",
    slug: "luxury-packages",
    description:
      "The ultimate luxury spa experience — a full day of pampering combining our signature treatments for total mind, body, and soul transformation.",
    duration: "3.5 hours",
    price: 750,
    currency: "AED",
    includes: [
      "Moroccan Hammam Bath (60 min)",
      "Full Body Aromatherapy Massage (75 min)",
      "Luxury Facial Treatment (60 min)",
      "Herbal Foot Ritual (30 min)",
      "Welcome refreshments & dates",
      "Bathrobe & slippers",
      "Complimentary steam room access",
    ],
    image: "/images/packages/royal-retreat.jpg",
    tag: "Most Popular",
    popular: true,
  },
  {
    id: "couples-bliss",
    name: "Couples Bliss Package",
    slug: "couples-spa",
    description:
      "Share an unforgettable spa journey with your partner in our private couple's suite. Reconnect, relax, and rekindle in luxurious surroundings.",
    duration: "2.5 hours",
    price: 1100,
    currency: "AED",
    includes: [
      "Synchronized couple's massage (90 min)",
      "Rose petal Moroccan Bath (60 min)",
      "Champagne & strawberries",
      "Private couple's suite",
      "His & her bathrobes",
      "Couple's foot ritual",
      "Personalized aromatherapy selection",
    ],
    image: "/images/packages/couples-bliss.jpg",
    tag: "For Two",
  },
  {
    id: "vip-gold",
    name: "VIP Gold Experience",
    slug: "vip-spa",
    description:
      "Our most exclusive spa experience, featuring gold-infused treatments and white-glove service from arrival to departure.",
    duration: "4 hours",
    price: 1200,
    currency: "AED",
    includes: [
      "24K Gold Body Treatment",
      "Diamond Facial Rejuvenation",
      "Deep Tissue Therapy (90 min)",
      "Moroccan Hammam with Rose Gold Clay",
      "Hot Stone Therapy",
      "Personal spa concierge",
      "Premium refreshments",
      "Priority booking & valet",
    ],
    image: "/images/packages/vip-gold.jpg",
    tag: "VIP Exclusive",
  },
];

export const serviceCategories = [
  {
    name: "Massage Therapy",
    slug: "massage",
    description: "Expert therapeutic massage for body and mind",
    count: 5,
  },
  {
    name: "Body Treatments",
    slug: "body",
    description: "Luxurious body rituals and skin transformation",
    count: 2,
  },
  {
    name: "Facial Treatments",
    slug: "facial",
    description: "Advanced skincare for radiant, youthful skin",
    count: 1,
  },
  {
    name: "Spa Packages",
    slug: "packages",
    description: "Complete spa journeys combining multiple treatments",
    count: 3,
  },
];
