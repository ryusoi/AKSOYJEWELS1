import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Filter, 
  Search, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Heart, 
  Award, 
  Check, 
  Calendar,
  Gem,
  ArrowRight,
  Anchor,
  HelpCircle,
  Scissors
} from 'lucide-react';
import { 
  PageRoute, 
  Product, 
  Collection, 
  Currency, 
  Theme, 
  Language, 
  Promotion, 
  CartItem 
} from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { COLLECTIONS_DATA } from '../data/collections';
import { TRANSLATIONS } from '../data/translations';
import { formatPrice } from '../utils/currency';
import { ProductCard } from './ProductCard';
import { StorySection } from './StorySection';
import { MarmarisScene } from './MarmarisScene';
import { PROMOTIONS_DATABASE, verifyDiscountCode } from '../data/discounts';

interface SubpagesProps {
  currentRoute: PageRoute;
  currentLanguage: Language;
  currentTheme: Theme;
  currentCurrency: Currency;
  onNavigate: (route: PageRoute) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  wishlist: string[];
  cart: CartItem[];
  onOpenCart: () => void;
  onAskAI: (prompt: string) => void;
  activePromotion: Promotion | null;
  onApplyPromotion: (promo: Promotion | null) => void;
}

export const Subpages: React.FC<SubpagesProps> = ({
  currentRoute,
  currentLanguage,
  currentTheme,
  currentCurrency,
  onNavigate,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  wishlist,
  cart,
  onOpenCart,
  onAskAI,
  activePromotion,
  onApplyPromotion
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isLight = currentTheme === 'light';

  // Filters & State for Catalog
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedStone, setSelectedStone] = useState<string>('all');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured');

  // Checkout Form State
  const [checkoutStep, setCheckoutStep] = useState<1 | 2 | 3>(1);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Turkey',
    postalCode: '',
    paymentMethod: 'credit-card',
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvc: '•••'
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Appointment Form State
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: 'Private Jewelry Styling Salon',
    guests: '1',
    hotelStay: 'Lotus Beach Hotel'
  });
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  // Filtered Products Calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Route based filter
      if (currentRoute === 'new-arrivals' && !product.newArrival) return false;
      if (currentRoute === 'best-sellers' && !product.bestSeller) return false;
      if (currentRoute === 'rings' && product.category !== 'rings') return false;
      if (currentRoute === 'earrings' && product.category !== 'earrings') return false;
      if (currentRoute === 'necklaces' && product.category !== 'necklaces') return false;
      if (currentRoute === 'bracelets' && product.category !== 'bracelets') return false;
      if (currentRoute === 'bangles' && product.category !== 'bangles') return false;
      if (currentRoute === 'diamonds' && !product.stone.toLowerCase().includes('diamond')) return false;
      if (currentRoute === 'gold' && !product.material.toLowerCase().includes('gold')) return false;
      if (currentRoute === 'gemstones' && (product.stone.toLowerCase().includes('none') || product.stone.toLowerCase().includes('diamond'))) return false;
      if (currentRoute === 'bridal' && product.category !== 'rings' && product.collection !== 'lotus-embrace') return false;
      if (currentRoute === 'gifts' && product.priceUSD > 500) return false;

      // Custom in-page filters
      if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
      if (selectedMaterial !== 'all' && !product.material.includes(selectedMaterial)) return false;
      if (selectedStone !== 'all' && !product.stone.includes(selectedStone)) return false;
      if (selectedCollection !== 'all' && product.collection !== selectedCollection) return false;

      // Search Query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesMaterial = product.material.toLowerCase().includes(q);
        const matchesStone = product.stone.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesMaterial && !matchesStone) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
      if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
      if (sortBy === 'newest') return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [currentRoute, selectedCategory, selectedMaterial, selectedStone, selectedCollection, searchQuery, sortBy]);

  // Handle Appointment Submit
  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentBooked(true);
  };

  // Handle Checkout Submit
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 animate-fadeIn min-h-[70vh]">
      {/* 
        1. SHOP / CATALOG / CATEGORY VIEWS
      */}
      {(currentRoute === 'shop' || 
        currentRoute === 'new-arrivals' || 
        currentRoute === 'best-sellers' || 
        currentRoute === 'rings' || 
        currentRoute === 'earrings' || 
        currentRoute === 'necklaces' || 
        currentRoute === 'bracelets' || 
        currentRoute === 'bangles' || 
        currentRoute === 'diamonds' || 
        currentRoute === 'gold' || 
        currentRoute === 'gemstones' || 
        currentRoute === 'bridal' || 
        currentRoute === 'gifts' ||
        currentRoute === 'customized') && (
        <div className="space-y-8">
          {/* Header Banner */}
          <div className="text-center space-y-3 max-w-2xl mx-auto pt-4">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
              {currentRoute === 'new-arrivals' && 'Fresh From Marmaris Atelier'}
              {currentRoute === 'best-sellers' && 'Most Revered Icons'}
              {currentRoute === 'diamonds' && 'Conflict-Free Natural Diamonds'}
              {currentRoute === 'gold' && '18k & 14k Solid Gold'}
              {currentRoute === 'shop' && 'Fine Jewelry Collection'}
              {currentRoute === 'gifts' && 'Thoughtful Fine Jewelry Under $500'}
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold uppercase text-[#E0D8C0]">
              {currentRoute === 'shop' && t.nav.allJewelry}
              {currentRoute === 'new-arrivals' && t.nav.newArrivals}
              {currentRoute === 'best-sellers' && t.nav.bestSellers}
              {currentRoute === 'rings' && t.nav.rings}
              {currentRoute === 'earrings' && t.nav.earrings}
              {currentRoute === 'necklaces' && t.nav.necklaces}
              {currentRoute === 'bracelets' && t.nav.bracelets}
              {currentRoute === 'bangles' && t.nav.bangles}
              {currentRoute === 'diamonds' && t.nav.diamonds}
              {currentRoute === 'gold' && t.nav.gold}
              {currentRoute === 'gemstones' && t.nav.gemstones}
              {currentRoute === 'bridal' && t.nav.bridal}
              {currentRoute === 'gifts' && t.nav.gifts}
              {currentRoute === 'customized' && t.nav.customized}
            </h1>
            <p className="font-neoris-primary text-sm sm:text-base text-[#E0D8C0]/80 font-light">
              Every creation is meticulously finished by master jewelers inside Lotus Beach Hotel, Marmaris.
            </p>
          </div>

          {/* Filter and Search Bar */}
          <div className="p-4 rounded-2xl border border-[rgba(224,216,192,0.18)] bg-[#050B14]/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 shadow-xl">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jewels, 18k gold, sapphires, diamonds..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-black/50 border border-[rgba(224,216,192,0.2)] text-[#E0D8C0] placeholder-zinc-500 focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="text-xs px-3 py-2 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
              >
                <option value="all">All Materials</option>
                <option value="18k">18k Solid Gold</option>
                <option value="14k">14k Solid Gold</option>
                <option value="Platinum">Platinum 950</option>
              </select>

              <select
                value={selectedStone}
                onChange={(e) => setSelectedStone(e.target.value)}
                className="text-xs px-3 py-2 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
              >
                <option value="all">All Gemstones</option>
                <option value="Diamond">Natural Diamonds</option>
                <option value="Sapphire">Ceylon Sapphires</option>
                <option value="Emerald">Colombian Emeralds</option>
                <option value="Pearl">South Sea Pearls</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs px-3 py-2 rounded-xl bg-black/50 border border-[#C5A059]/50 text-[#C5A059] font-semibold focus:outline-none"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">New Arrivals First</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Sparkles className="w-8 h-8 text-[#C5A059] mx-auto" />
              <div className="font-cinzel text-lg font-semibold text-[#E0D8C0]">No jewelry found matching criteria</div>
              <p className="text-xs text-[#E0D8C0]/70">Try adjusting your filters or ask our AI Concierge for recommendations.</p>
              <button
                onClick={() => {
                  setSelectedMaterial('all');
                  setSelectedStone('all');
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-[#C5A059] text-[#050B14] text-xs font-semibold uppercase hover:bg-[#d8b56f] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={currentCurrency}
                  theme={currentTheme}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  onQuickView={onQuickView}
                  isWishlisted={wishlist.includes(product.id)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* 
        2. COLLECTIONS SHOWCASE VIEW
      */}
      {currentRoute === 'collections' && (
        <div className="space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto pt-4">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
              SIGNATURE CODES
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold uppercase text-[#E0D8C0]">
              {t.nav.collections}
            </h1>
            <p className="font-neoris-primary text-sm sm:text-base text-[#E0D8C0]/80 font-light">
              Distinct architectural worlds inspired by the Aegean sun and classical goldworking traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COLLECTIONS_DATA.map((col) => (
              <div 
                key={col.id}
                onClick={() => {
                  setSelectedCollection(col.id);
                  onNavigate('shop');
                }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer border border-[rgba(224,216,192,0.25)] shadow-2xl h-96 flex flex-col justify-end p-8"
              >
                <img 
                  src={col.heroImage} 
                  alt={col.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/95 via-[#050B14]/40 to-transparent" />

                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
                    ATELIER EDITION
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E0D8C0] group-hover:text-[#C5A059] transition-colors">
                    {col.name}
                  </h3>
                  <p className="text-xs text-[#E0D8C0]/85 font-light line-clamp-2">
                    {col.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5A059] pt-2">
                    <span>Explore Creations</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 
        3. OUR STORY / HERITAGE VIEW
      */}
      {currentRoute === 'our-story' && (
        <StorySection 
          currentLanguage={currentLanguage} 
          currentTheme={currentTheme} 
          onNavigate={onNavigate} 
        />
      )}

      {/* 
        4. MISSION & VISION VIEW
      */}
      {(currentRoute === 'mission' || currentRoute === 'vision') && (
        <div className="space-y-8 max-w-4xl mx-auto pt-4">
          <div className="text-center space-y-3">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
              FOUNDATIONAL PILLARS
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#E0D8C0]">
              {currentRoute === 'mission' ? t.story.missionTitle : t.story.visionTitle}
            </h1>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl border border-[rgba(224,216,192,0.2)] bg-[#050B14]/85 backdrop-blur-md space-y-6 shadow-2xl">
            <p className="text-sm sm:text-base text-[#E0D8C0]/85 leading-relaxed font-light">
              {currentRoute === 'mission' ? t.story.missionText : t.story.visionText}
            </p>
            <div className="p-6 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-start gap-4">
              <Award className="w-8 h-8 text-[#C5A059] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-cinzel text-base font-bold text-[#E0D8C0] mb-1">
                  Guaranteed Quality & Customer Respect
                </h4>
                <p className="text-xs text-[#E0D8C0]/80 leading-relaxed">
                  Every gold carat and gemstone weight sold at Aksoy Jewel is accompanied by an international certificate of warranty, backed by over three decades of uninterrupted service in Marmaris.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 
        5. MARMARIS EXPERIENCE VIEW
      */}
      {currentRoute === 'marmaris' && (
        <MarmarisScene 
          currentLanguage={currentLanguage} 
          currentTheme={currentTheme} 
          onNavigate={onNavigate} 
        />
      )}

      {/* 
        6. STORES & BOUTIQUES VIEW
      */}
      {currentRoute === 'stores' && (
        <div className="space-y-8 max-w-5xl mx-auto pt-4">
          <div className="text-center space-y-3">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
              AEGEAN DESTINATION
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#E0D8C0]">
              Lotus Beach Hotel Boutique, Marmaris
            </h1>
            <p className="font-neoris-primary text-sm sm:text-base text-[#E0D8C0]/80 font-light">
              Direct oceanfront jewelry showroom, private VIP viewing salon & consultation terrace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden border border-[rgba(224,216,192,0.25)] shadow-2xl h-80">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop" 
                alt="Lotus Beach Hotel Marmaris" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 p-6 sm:p-8 rounded-3xl border border-[rgba(224,216,192,0.18)] bg-[#050B14]/85 shadow-xl">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-cinzel text-base font-bold text-[#E0D8C0]">Address & Location</h3>
                  <p className="text-xs text-[#E0D8C0]/80 mt-0.5">
                    Inside Lotus Beach Hotel, Marmaris Bay, Muğla 48700, Türkiye
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-cinzel text-base font-bold text-[#E0D8C0]">Opening Hours</h3>
                  <p className="text-xs text-[#E0D8C0]/80 mt-0.5">
                    Monday – Sunday: 10:00 AM – 11:30 PM (Private appointments after hours available)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-cinzel text-base font-bold text-[#E0D8C0]">Direct Line</h3>
                  <a href="tel:+905352795176" className="text-xs text-[#C5A059] font-semibold hover:underline">
                    +90 535 279 51 76 (Mr. Parvin)
                  </a>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href="https://wa.me/905352795176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs text-center flex items-center justify-center gap-2 hover:bg-emerald-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
                <button
                  onClick={() => onNavigate('consultation')}
                  className="flex-1 py-3 rounded-xl bg-[#C5A059] text-[#050B14] font-semibold text-xs text-center hover:bg-[#d8b56f] transition-colors font-cinzel"
                >
                  Book Private Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 
        7. PRIVATE STYLING & CONSULTATION BOOKING
      */}
      {currentRoute === 'consultation' && (
        <div className="max-w-3xl mx-auto space-y-8 pt-4">
          <div className="text-center space-y-3">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
              BESPOKE APPOINTMENTS
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#E0D8C0]">
              Private Jewelry Styling & Consultation
            </h1>
            <p className="font-neoris-primary text-sm sm:text-base text-[#E0D8C0]/80 font-light">
              Enjoy a dedicated private styling salon with champagne or Turkish tea inside Lotus Beach Hotel.
            </p>
          </div>

          {appointmentBooked ? (
            <div className="p-8 rounded-3xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-center space-y-4 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h2 className="font-cinzel text-2xl font-bold text-[#E0D8C0]">
                Appointment Requested Successfully
              </h2>
              <p className="text-xs sm:text-sm text-emerald-200 max-w-md mx-auto">
                Thank you, {appointmentData.name}. Mr. Parvin will confirm your private viewing time via WhatsApp at {appointmentData.phone}.
              </p>
              <button
                onClick={() => setAppointmentBooked(false)}
                className="px-6 py-2.5 rounded-full bg-[#C5A059] text-[#050B14] font-semibold text-xs uppercase"
              >
                Book Another Time
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookAppointment} className="p-6 sm:p-8 rounded-3xl border border-[rgba(224,216,192,0.2)] bg-[#050B14]/85 backdrop-blur-md space-y-4 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#E0D8C0]/90 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={appointmentData.name}
                    onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                    placeholder="Lady / Sir Name"
                    className="w-full p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E0D8C0]/90 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={appointmentData.phone}
                    onChange={(e) => setAppointmentData({ ...appointmentData, phone: e.target.value })}
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#E0D8C0]/90 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={appointmentData.date}
                    onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E0D8C0]/90 mb-1">Preferred Time</label>
                  <select
                    value={appointmentData.time}
                    onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="11:00 AM">11:00 AM – Morning Glow</option>
                    <option value="03:00 PM">03:00 PM – Afternoon Salon</option>
                    <option value="07:00 PM">07:00 PM – Sunset Champagne</option>
                    <option value="09:30 PM">09:30 PM – Midnight Private Viewing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E0D8C0]/90 mb-1">Consultation Focus</label>
                <select
                  value={appointmentData.serviceType}
                  onChange={(e) => setAppointmentData({ ...appointmentData, serviceType: e.target.value })}
                  className="w-full p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="Private Jewelry Styling Salon">Private Jewelry Styling Salon</option>
                  <option value="Custom Solitaire & Bridal Commission">Custom Solitaire & Bridal Commission</option>
                  <option value="Solid Gold Piercing & Ear Stack">Solid Gold Piercing & Ear Stack</option>
                  <option value="Get Zapped! Permanent Welded Bracelet">Get Zapped! Permanent Welded Bracelet</option>
                  <option value="Yacht / In-Suite Viewing Service">Yacht / In-Suite Viewing Service</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C5A059] to-[#b38e44] text-[#050B14] font-cinzel font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] transition-all"
              >
                Confirm Appointment Request
              </button>
            </form>
          )}
        </div>
      )}

      {/* 
        8. PIERCING STUDIO & GET ZAPPED
      */}
      {(currentRoute === 'piercing-studio' || currentRoute === 'get-zapped') && (
        <div className="max-w-4xl mx-auto space-y-8 pt-4">
          <div className="text-center space-y-3">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
              EXCLUSIVE ATELIER EXPERIENCES
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#E0D8C0]">
              {currentRoute === 'piercing-studio' ? 'Aksoy Solid Gold Piercing Studio' : 'Get Zapped! Permanent Welded Jewelry'}
            </h1>
            <p className="font-neoris-primary text-sm sm:text-base text-[#E0D8C0]/80 font-light">
              Available at our boutique inside Lotus Beach Hotel, Marmaris.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-3xl overflow-hidden border border-[rgba(224,216,192,0.25)] h-72 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop" 
                alt="Fine Jewelry Experience" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-cinzel text-xl font-bold text-[#C5A059]">
                {currentRoute === 'piercing-studio' ? '14k & 18k Solid Gold Piercings' : 'Custom Sized • Welded Seamlessly'}
              </h3>
              <p className="text-xs sm:text-sm text-[#E0D8C0]/85 leading-relaxed font-light">
                {currentRoute === 'piercing-studio'
                  ? 'Our professional piercing technicians use sterile, single-use titanium needles and certified hypoallergenic solid gold studs. Designed to never irritate or discolor in Aegean seawater.'
                  : 'Choose from our 14k and 18k solid gold chains. We measure your wrist or ankle with micro-precision and gently weld the link with an instantaneous spark for a claspless, eternal jewel.'
                }
              </p>
              <button
                onClick={() => onNavigate('consultation')}
                className="px-6 py-3 rounded-full bg-[#C5A059] text-[#050B14] font-semibold text-xs uppercase tracking-wider hover:bg-[#d8b56f] transition-all font-cinzel"
              >
                Book Session in Marmaris
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 
        9. JEWELRY GUIDES & EDUCATION
      */}
      {currentRoute === 'guides' && (
        <div className="max-w-5xl mx-auto space-y-12 pt-4">
          <div className="text-center space-y-3">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
              THE CONNOISSEUR'S COMPASS
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#E0D8C0]">
              Fine Jewelry Knowledge & Care Guides
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl border border-[rgba(224,216,192,0.2)] bg-[#050B14]/85 space-y-3 shadow-xl">
              <Gem className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-cinzel text-base font-bold text-[#E0D8C0]">Diamond 4Cs Guide</h3>
              <p className="text-xs text-[#E0D8C0]/80 leading-relaxed font-light">
                Understanding Cut, Color, Clarity, and Carat weight. All Aksoy diamonds are VVS/VS clarity with excellent brilliance.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-[rgba(224,216,192,0.2)] bg-[#050B14]/85 space-y-3 shadow-xl">
              <Award className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-cinzel text-base font-bold text-[#E0D8C0]">18k vs 14k Solid Gold</h3>
              <p className="text-xs text-[#E0D8C0]/80 leading-relaxed font-light">
                Why solid gold is supreme: 18k contains 75% pure gold for rich color, while 14k contains 58.5% for maximum everyday tensile durability.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-[rgba(224,216,192,0.2)] bg-[#050B14]/85 space-y-3 shadow-xl">
              <Sparkles className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-cinzel text-base font-bold text-[#E0D8C0]">Preserving Your Jewels</h3>
              <p className="text-xs text-[#E0D8C0]/80 leading-relaxed font-light">
                Cleaning instructions with warm soapy water and soft brush. Complimentary ultrasonic cleaning for life at our Lotus Beach boutique.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 
        10. SECURE PAYMENTS (256-Bit SSL) & POLICIES
      */}
      {(currentRoute === 'secure-payments' || currentRoute === 'shipping' || currentRoute === 'returns' || currentRoute === 'faq') && (
        <div className="max-w-4xl mx-auto space-y-8 pt-4">
          <div className="text-center space-y-3">
            <div className="text-[11px] tracking-[0.3em] uppercase text-emerald-400 font-bold flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>GUARANTEED TRUST & INTEGRITY</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#E0D8C0]">
              {currentRoute === 'secure-payments' && '256-Bit SSL Secure Payments'}
              {currentRoute === 'shipping' && 'Insured Worldwide Shipping'}
              {currentRoute === 'returns' && '30-Day Privilege Return Policy'}
              {currentRoute === 'faq' && 'Frequently Asked Questions'}
            </h1>
          </div>

          <div className="p-8 rounded-3xl border border-emerald-500/30 bg-[#050B14]/90 space-y-6 shadow-2xl">
            {currentRoute === 'secure-payments' && (
              <div className="space-y-4 text-xs sm:text-sm text-[#E0D8C0]/85 leading-relaxed font-light">
                <p>
                  At Aksoy Jewel, your privacy and financial security are protected with industry-standard <strong>256-bit SSL (Secure Socket Layer) cryptographic encryption</strong>. Every transaction processed through our digital salon is verified with 3D-Secure protocols.
                </p>
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs">
                  We accept Visa, Mastercard, American Express, Apple Pay, Wire Transfer, and cryptocurrency payments upon concierge request.
                </div>
              </div>
            )}

            {currentRoute === 'shipping' && (
              <div className="space-y-4 text-xs sm:text-sm text-[#E0D8C0]/85 leading-relaxed font-light">
                <p>
                  Every Aksoy jewelry order is shipped via <strong>fully insured DHL Express / FedEx Priority</strong> with signature-required handover.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#E0D8C0]/70">
                  <li>Domestic Turkey delivery: 1–2 business days.</li>
                  <li>European Union & UK delivery: 2–3 business days.</li>
                  <li>USA & Middle East delivery: 3–4 business days.</li>
                </ul>
              </div>
            )}

            {currentRoute === 'returns' && (
              <div className="space-y-4 text-xs sm:text-sm text-[#E0D8C0]/85 leading-relaxed font-light">
                <p>
                  We offer 30-day complimentary returns and exchanges for all unworn pieces in their original presentation box with intact security tags. Bespoke customized engravings are final sale.
                </p>
              </div>
            )}

            {currentRoute === 'faq' && (
              <div className="space-y-4">
                {[
                  { q: 'Where is your boutique located in Turkey?', a: 'Inside Lotus Beach Hotel in Marmaris, Muğla, overlooking the Aegean coast.' },
                  { q: 'Is your gold solid or plated?', a: 'We exclusively work in solid 18k (750) and 14k (585) gold. We do not sell plated metals.' },
                  { q: 'Can I speak with a sales advisor before ordering?', a: 'Yes! Contact Mr. Parvin directly on WhatsApp at +90 535 279 51 76 anytime.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-[rgba(224,216,192,0.15)] bg-[#050B14]/60 space-y-1">
                    <div className="font-cinzel text-xs sm:text-sm font-bold text-[#C5A059]">{item.q}</div>
                    <div className="text-xs text-[#E0D8C0]/80 font-light">{item.a}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 
        11. WISHLIST VIEW
      */}
      {currentRoute === 'wishlist' && (
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-3">
            <div className="text-[11px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
              SAVED PIECES
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#E0D8C0]">
              {t.nav.wishlist} ({wishlist.length})
            </h1>
          </div>

          {wishlist.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <Heart className="w-10 h-10 text-zinc-600 mx-auto" />
              <p className="font-neoris-primary text-base text-[#E0D8C0]/70 font-light">Your wishlist is currently empty.</p>
              <button
                onClick={() => onNavigate('shop')}
                className="px-6 py-2.5 rounded-full bg-[#C5A059] text-[#050B14] font-semibold text-xs uppercase tracking-wider hover:bg-[#d8b56f] transition-colors"
              >
                Explore Jewelry
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS_DATA.filter(p => wishlist.includes(p.id)).map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={currentCurrency}
                  theme={currentTheme}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  onQuickView={onQuickView}
                  isWishlisted={true}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* 
        12. CHECKOUT VIEW WITH 256-BIT SSL
      */}
      {currentRoute === 'checkout' && (
        <div className="max-w-4xl mx-auto space-y-8 pt-4">
          <div className="text-center space-y-2">
            <div className="text-[11px] tracking-[0.3em] uppercase text-emerald-400 font-bold flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>256-BIT SSL ENCRYPTED CHECKOUT</span>
            </div>
            <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E0D8C0]">
              Complete Your Selection
            </h1>
          </div>

          {orderPlaced ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-center space-y-4 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E0D8C0]">
                Thank You For Your Acquisition
              </h2>
              <p className="text-xs sm:text-sm text-emerald-200 max-w-md mx-auto">
                Your order #AKSOY-{Math.floor(100000 + Math.random() * 900000)} has been received. Our Marmaris atelier is preparing your insured parcel with luxury box and certificate of authenticity.
              </p>
              <button
                onClick={() => onNavigate('home')}
                className="px-8 py-3 rounded-full bg-[#C5A059] text-[#050B14] font-cinzel font-bold text-xs uppercase"
              >
                Return to Salon
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Form */}
              <form onSubmit={handlePlaceOrder} className="lg:col-span-7 space-y-4 p-6 sm:p-8 rounded-3xl border border-[rgba(224,216,192,0.18)] bg-[#050B14]/85 backdrop-blur-md shadow-2xl">
                <h3 className="font-cinzel text-sm font-bold text-[#C5A059] tracking-wider uppercase">
                  Shipping & Recipient Details
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    value={customerInfo.firstName}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, firstName: e.target.value })}
                    className="p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    value={customerInfo.lastName}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, lastName: e.target.value })}
                    className="p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone (WhatsApp)"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <input
                  type="text"
                  required
                  placeholder="Delivery Street Address"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                  className="w-full p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                />

                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="City"
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                    className="p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Country"
                    value={customerInfo.country}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, country: e.target.value })}
                    className="p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Postal Code"
                    value={customerInfo.postalCode}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, postalCode: e.target.value })}
                    className="p-3 rounded-xl bg-black/50 border border-[rgba(224,216,192,0.2)] text-xs text-[#E0D8C0] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="pt-3 border-t border-[rgba(224,216,192,0.15)] space-y-3">
                  <h3 className="font-cinzel text-sm font-bold text-[#C5A059] tracking-wider uppercase">
                    Encrypted Payment
                  </h3>
                  <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-xs flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>256-Bit SSL Encrypted & 3D Secure Protection Active</span>
                  </div>

                  <input
                    type="text"
                    disabled
                    value={customerInfo.cardNumber}
                    className="w-full p-3 rounded-xl bg-black/60 border border-[rgba(224,216,192,0.2)] text-xs text-zinc-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C5A059] to-[#b38e44] text-[#050B14] font-cinzel font-bold text-xs sm:text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] transition-all"
                >
                  Authorize & Place Acquisition
                </button>
              </form>

              {/* Order Summary */}
              <div className="lg:col-span-5 p-6 rounded-3xl border border-[rgba(224,216,192,0.18)] bg-[#050B14]/85 backdrop-blur-md space-y-4 h-fit shadow-2xl">
                <h3 className="font-cinzel text-sm font-bold text-[#E0D8C0] uppercase tracking-wider">
                  Selection Summary
                </h3>

                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3 text-xs">
                      <img src={item.product.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover border border-white/10" />
                      <div className="flex-1 min-w-0">
                        <div className="font-cinzel font-semibold truncate text-[#E0D8C0]">{item.product.name}</div>
                        <div className="text-[10px] text-[#E0D8C0]/60">Qty: {item.quantity} • {item.product.material}</div>
                      </div>
                      <div className="font-serif-luxury font-bold text-[#C5A059]">
                        {formatPrice(item.product.priceUSD * item.quantity, currentCurrency)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[rgba(224,216,192,0.15)] space-y-1 text-xs">
                  <div className="flex justify-between text-[#E0D8C0]/70">
                    <span>Shipping:</span>
                    <span className="text-emerald-400 font-semibold">Complimentary (Insured)</span>
                  </div>
                  <div className="flex justify-between font-cinzel text-base font-bold text-[#C5A059] pt-2 border-t border-[rgba(224,216,192,0.12)]">
                    <span>Total:</span>
                    <span>
                      {formatPrice(
                        cart.reduce((sum, i) => sum + (i.product.priceUSD * i.quantity), 0),
                        currentCurrency
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
