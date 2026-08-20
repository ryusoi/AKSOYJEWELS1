import { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'aksoy-001',
    slug: 'marmaris-royal-sapphire-solitaire-ring',
    name: 'Marmaris Royal Sapphire & Pavé Diamond Ring',
    category: 'rings',
    collection: 'mediterranean-gems',
    material: '18k Solid Yellow Gold',
    stone: 'Natural Blue Sapphire & Pavé Diamonds',
    carat: '1.85 ct Sapphire, 0.42 ct Diamonds',
    priceUSD: 1450,
    originalPriceUSD: 1680,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'An iconic tribute to the Marmaris coastline. A radiant-cut Ceylon blue sapphire cradled in four 18k solid gold prongs, shoulder-set with micro-pavé diamonds.',
    sizes: ['5', '6', '7', '8', '9', 'Custom Resizing'],
    colors: ['18k Yellow Gold', '18k White Gold', 'Platinum'],
    availability: 'in_stock',
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 5.0,
    reviewsCount: 48,
    tags: ['Signature', 'Handcrafted Marmaris', 'Solid Gold 18k'],
    details: {
      goldPurity: '18 Karat Solid Gold (750/1000)',
      gemstoneOrigin: 'Ethically Sourced Royal Blue Sapphire',
      weight: '4.8 grams',
      dimensions: 'Band width 2.2mm, Center Stone 8x6mm',
      handcraftedIn: 'Aksoy Jewel Atelier, Marmaris'
    }
  },
  {
    id: 'aksoy-002',
    slug: 'lotus-embrace-tube-huggie-hoops',
    name: 'Lotus Embrace Bold Tube Huggies',
    category: 'earrings',
    collection: 'everyday-luxury',
    material: '18k Gold Vermeil & Solid 14k Post',
    stone: 'High Polish Mirror Finish',
    priceUSD: 128,
    originalPriceUSD: 148,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Effortless everyday sculpture. Lightweight, hollow-form curved huggie hoops with an ultra-secure clicker clasp. Perfect for single wear or building an ear stack.',
    sizes: ['12mm Huggie', '16mm Medium', '20mm Statement'],
    colors: ['18k Yellow Gold', 'Sterling Silver 925'],
    availability: 'in_stock',
    featured: true,
    bestSeller: true,
    newArrival: true,
    rating: 4.9,
    reviewsCount: 86,
    tags: ['Best Seller', 'Everyday Essential'],
    details: {
      goldPurity: 'Thick 2.5 Micron 18k Gold over 925 Sterling Silver',
      weight: '3.1 grams pair',
      claspType: 'Clicker Snap Closure',
      handcraftedIn: 'Aksoy Jewel Atelier, Marmaris'
    }
  },
  {
    id: 'aksoy-003',
    slug: 'mediterranean-sun-radiance-necklace',
    name: 'Mediterranean Sunburst Diamond Pendant',
    category: 'necklaces',
    collection: 'diamond-signature',
    material: '18k Solid Yellow Gold',
    stone: 'Brilliant Round Cut Diamond (VS1, F Color)',
    carat: '0.65 ct Solitaire Diamond',
    priceUSD: 1280,
    originalPriceUSD: 1450,
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Suspended like golden light reflecting upon the Aegean Sea. An exquisite brilliant diamond held in an architectural sunburst gold bezel.',
    sizes: ['16 inch (40cm)', '18 inch (45cm)', '20 inch (50cm)'],
    colors: ['18k Yellow Gold', '18k White Gold', '18k Rose Gold'],
    availability: 'in_stock',
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 5.0,
    reviewsCount: 32,
    tags: ['Diamond Signature', 'Certified Diamond'],
    details: {
      goldPurity: '18K Solid Gold',
      gemstoneOrigin: 'Conflict-Free Natural Diamond with Certificate',
      claspType: 'Lobster Clasp with 2-inch extender',
      handcraftedIn: 'Aksoy Jewel Atelier, Marmaris'
    }
  },
  {
    id: 'aksoy-004',
    slug: 'aegean-mariner-solid-gold-chain-bracelet',
    name: 'Aegean Mariner Solid Gold Chain Bracelet',
    category: 'bracelets',
    collection: 'timeless-gold',
    material: '14k Solid Yellow Gold',
    stone: 'Subtle Bezel White Diamond Charm',
    carat: '0.08 ct Accent Diamond',
    priceUSD: 490,
    originalPriceUSD: 560,
    images: [
      'https://images.unsplash.com/photo-1611591475152-473549216a4b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'A classic marine link bracelet inspired by the yachts anchored in Marmaris Bay. Crafted with solid 14k links that catch every flicker of sun.',
    sizes: ['6.5 inch', '7.0 inch', '7.5 inch', '8.0 inch'],
    colors: ['14k Yellow Gold', '14k White Gold'],
    availability: 'in_stock',
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.9,
    reviewsCount: 54,
    tags: ['Solid Gold Always', 'Permanent Style'],
    details: {
      goldPurity: '14k Solid Gold (585/1000)',
      claspType: 'Custom Aksoy Logo Engraved Clasp',
      weight: '6.4 grams',
      handcraftedIn: 'Aksoy Jewel Atelier, Marmaris'
    }
  },
  {
    id: 'aksoy-005',
    slug: 'grand-cygnet-solid-gold-signet-ring',
    name: 'Grand Cygnet 18k Gold Signet Ring',
    category: 'rings',
    collection: 'timeless-gold',
    material: '18k Solid Yellow Gold',
    stone: 'Mirror-Polished Gold Face (Custom Monogram Ready)',
    priceUSD: 780,
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'A weighty heirloom signet ring forged from solid 18k gold. Its smooth face can be hand-engraved with family crests, dates, or initials at our Marmaris atelier.',
    sizes: ['5', '6', '7', '8', '9', '10', '11', '12'],
    colors: ['18k Yellow Gold', '18k Rose Gold', '18k White Gold'],
    availability: 'in_stock',
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 5.0,
    reviewsCount: 41,
    tags: ['Custom Engravable', 'Heirloom'],
    details: {
      goldPurity: '18K Solid Gold',
      weight: '8.2 grams (Solid back)',
      handcraftedIn: 'Aksoy Jewel Atelier, Marmaris'
    }
  },
  {
    id: 'aksoy-006',
    slug: 'pave-lab-grown-white-sapphire-hoops',
    name: 'Pavé White Sapphire Sparkle Hoops',
    category: 'earrings',
    collection: 'everyday-luxury',
    material: '18k Gold Vermeil',
    stone: 'Pavé-Set Brilliant White Sapphires',
    priceUSD: 188,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Intricately micro-paved with hand-selected brilliant white sapphires that refract light like crystalline Aegean waves.',
    sizes: ['14mm Medium', '18mm Large'],
    colors: ['18k Yellow Gold Vermeil', 'Sterling Silver 925'],
    availability: 'in_stock',
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.8,
    reviewsCount: 63,
    tags: ['Best Seller', 'Top Rated'],
    details: {
      goldPurity: '18k Gold Vermeil',
      claspType: 'Secure Clicker Closure',
      handcraftedIn: 'Aksoy Jewel Atelier, Marmaris'
    }
  },
  {
    id: 'aksoy-007',
    slug: 'lotus-emerald-cuff-bangle',
    name: 'Lotus Coastline Emerald & Diamond Bangle',
    category: 'bangles',
    collection: 'mediterranean-gems',
    material: '18k Solid Yellow Gold',
    stone: 'Natural Colombian Emeralds & Diamonds',
    carat: '1.20 ct Emeralds, 0.50 ct Diamonds',
    priceUSD: 2450,
    originalPriceUSD: 2750,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591475152-473549216a4b?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'An architectural oval hinged bangle set with alternating vivid green emeralds and round brilliant diamonds. Seamless safety clasp.',
    sizes: ['Small (15-16cm)', 'Medium (17-18cm)', 'Large (19-20cm)'],
    colors: ['18k Yellow Gold', '18k White Gold'],
    availability: 'limited',
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 5.0,
    reviewsCount: 19,
    tags: ['High Jewelry', 'Limited Edition'],
    details: {
      goldPurity: '18 Karat Solid Gold',
      claspType: 'Hidden Box Clasp with Dual Safety Latches',
      weight: '14.5 grams',
      handcraftedIn: 'Aksoy Jewel Atelier, Marmaris'
    }
  },
  {
    id: 'aksoy-008',
    slug: 'eternal-solitaire-bridal-engagement-ring',
    name: 'The Marmaris Solitaire Diamond Engagement Ring',
    category: 'bridal',
    collection: 'bridal',
    material: 'Platinum 950 & 18k Gold Prongs',
    stone: 'Round Brilliant Diamond (VS1, E Color, Excellent Cut)',
    carat: '1.50 ct Solitaire with GIA / HRD Certificate',
    priceUSD: 4800,
    originalPriceUSD: 5200,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'An ode to lifelong devotion. High-set platinum basket with ultra-slender tapered knife-edge band to emphasize the diamond’s monumental fire.',
    sizes: ['4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', 'Bespoke Size'],
    colors: ['Platinum 950', '18k Yellow Gold', '18k Rose Gold'],
    availability: 'made_to_order',
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 5.0,
    reviewsCount: 37,
    tags: ['Bridal', 'GIA Certified', 'Bespoke'],
    details: {
      goldPurity: 'Solid Platinum 950',
      gemstoneOrigin: 'GIA / HRD Certified Natural Diamond',
      handcraftedIn: 'Aksoy Jewel Atelier, Marmaris'
    }
  },
  {
    id: 'aksoy-009',
    slug: 'tiniest-alphabet-zodiac-charm-solid-gold',
    name: 'Tiniest Alphabet & Celestial Charm in 14k Gold',
    category: 'charms',
    collection: 'timeless-gold',
    material: '14k Solid Gold',
    stone: 'Natural Micro Diamond Dot',
    priceUSD: 98,
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591475152-473549216a4b?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Delicately sculpted initial letter charms and zodiac talismans. Designed to slide seamlessly onto necklaces, huggies, or your permanent bracelet.',
    sizes: ['Letter A-Z', 'Zodiac Aries-Pisces', 'Marmaris Anchor'],
    colors: ['14k Yellow Gold', '14k White Gold'],
    availability: 'in_stock',
    featured: false,
    bestSeller: true,
    newArrival: true,
    rating: 4.9,
    reviewsCount: 112,
    tags: ['Personalized', 'Solid Gold', 'Gift Favorite'],
    details: {
      goldPurity: '14K Solid Gold',
      dimensions: '8mm height x 5mm width',
      handcraftedIn: 'Aksoy Jewel Atelier, Marmaris'
    }
  },
  {
    id: 'aksoy-010',
    slug: 'mens-black-onyx-architectural-cuff',
    name: "Men's Black Onyx & Solid Gold Signet",
    category: 'mens',
    collection: 'mens',
    material: '18k Solid Yellow Gold & Natural Black Onyx',
    stone: 'Flat-Polished Natural Black Onyx Gemstone',
    priceUSD: 920,
    images: [
      'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Commanding geometry and refined balance. A deep black onyx stone flush-set inside a sculpted 18k solid gold bezel with satin-brushed flank finishes.',
    sizes: ['8', '9', '10', '11', '12', '13'],
    colors: ['18k Yellow Gold', '18k White Gold'],
    availability: 'in_stock',
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.9,
    reviewsCount: 28,
    tags: ["Men's Atelier", "Solid 18k Gold"],
    details: {
      goldPurity: '18K Solid Gold (750)',
      weight: '11.2 grams',
      handcraftedIn: 'Aksoy Jewel Atelier, Marmaris'
    }
  }
];
