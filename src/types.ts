export type Language = 'en' | 'es' | 'tr' | 'de' | 'ru' | 'ar' | 'fa';

export type Theme = 'dark' | 'light';

export type Currency = 'USD' | 'EUR' | 'TRY' | 'GBP' | 'AED';

export type ProductCategory = 
  | 'all'
  | 'rings'
  | 'earrings'
  | 'necklaces'
  | 'bracelets'
  | 'bangles'
  | 'charms'
  | 'diamonds'
  | 'gold'
  | 'gemstones'
  | 'bridal'
  | 'mens'
  | 'womens'
  | 'gifts'
  | 'customized';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  collection: string;
  material: string;
  stone: string;
  carat?: string;
  priceUSD: number;
  originalPriceUSD?: number;
  images: string[];
  description: string;
  story?: string;
  sizes?: string[];
  colors?: string[];
  availability: 'in_stock' | 'made_to_order' | 'limited';
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  rating?: number;
  reviewsCount?: number;
  tags?: string[];
  details?: {
    goldPurity?: string;
    gemstoneOrigin?: string;
    claspType?: string;
    dimensions?: string;
    weight?: string;
    handcraftedIn?: string;
  };
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  heroImage: string;
  subtitle: string;
  description: string;
  highlightTag: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface Promotion {
  code: string;
  active: boolean;
  discountType: 'percentage' | 'fixed';
  value: number;
  expiresAt: string;
  minimumPurchaseUSD: number;
  description: string;
  eligibleCollections?: string[];
}

export type PageRoute =
  | 'home'
  | 'shop'
  | 'new-arrivals'
  | 'best-sellers'
  | 'collections'
  | 'collection-detail'
  | 'rings'
  | 'earrings'
  | 'necklaces'
  | 'bracelets'
  | 'bangles'
  | 'diamonds'
  | 'gold'
  | 'gemstones'
  | 'bridal'
  | 'gifts'
  | 'customized'
  | 'product-detail'
  | 'about'
  | 'our-story'
  | 'mission'
  | 'vision'
  | 'craftsmanship'
  | 'marmaris'
  | 'services'
  | 'consultation'
  | 'whatsapp-concierge'
  | 'piercing-studio'
  | 'get-zapped'
  | 'gift-services'
  | 'after-sales'
  | 'guides'
  | 'guides-gold'
  | 'guides-diamonds'
  | 'guides-gemstones'
  | 'guides-jewelry-care'
  | 'guides-gifting'
  | 'stores'
  | 'contact'
  | 'faq'
  | 'shipping'
  | 'returns'
  | 'secure-payments'
  | 'privacy'
  | 'terms'
  | 'wishlist'
  | 'account'
  | 'checkout';
