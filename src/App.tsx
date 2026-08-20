import React, { useState, useEffect } from 'react';
import { 
  PageRoute, 
  Language, 
  Theme, 
  Currency, 
  Product, 
  CartItem, 
  Promotion 
} from './types';
import { TRANSLATIONS } from './data/translations';
import { PRODUCTS_DATA } from './data/products';
import { Header } from './components/Header';
import { LuxurySidebar } from './components/LuxurySidebar';
import { HeroScene } from './components/HeroScene';
import { StorySection } from './components/StorySection';
import { MarmarisScene } from './components/MarmarisScene';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { AIJewelryAssistant } from './components/AIJewelryAssistant';
import { ParallaxVideoBanner } from './components/ParallaxVideoBanner';
import { Footer } from './components/Footer';
import { Subpages } from './components/Subpages';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  ArrowRight, 
  Gem, 
  ShieldCheck, 
  Anchor, 
  Phone, 
  MessageCircle,
  Search,
  X
} from 'lucide-react';

export function App() {
  // Global States
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark');
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('USD');

  // UI Modals & Drawers
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [externalAIQuery, setExternalAIQuery] = useState<string | undefined>(undefined);

  // Commerce States (Persisted in localStorage)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aksoy_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aksoy_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activePromotion, setActivePromotion] = useState<Promotion | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('aksoy_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('aksoy_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  // Set RTL direction if Arabic or Farsi
  useEffect(() => {
    const isRtl = currentLanguage === 'ar' || currentLanguage === 'fa';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  // Theme Body Class Sync
  useEffect(() => {
    if (currentTheme === 'light') {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      document.body.style.backgroundColor = '#faf8f5';
      document.body.style.color = '#19191a';
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      document.body.style.backgroundColor = '#0c0d10';
      document.body.style.color = '#f4ede4';
    }
  }, [currentTheme]);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, size?: string, color?: string) => {
    const chosenSize = size || product.sizes?.[0] || 'Standard';
    const chosenColor = color || product.colors?.[0] || product.material;

    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedSize === chosenSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, quantity: 1, selectedSize: chosenSize, selectedColor: chosenColor }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist(prev => {
      if (prev.includes(product.id)) {
        return prev.filter(id => id !== product.id);
      }
      return [...prev, product.id];
    });
  };

  const handleOpenConsultation = () => {
    handleNavigate('consultation');
  };

  const handleApplyPromotion = (promo: Promotion | null) => {
    setActivePromotion(promo);
    if (promo) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#d4af37', '#ffffff', '#ffd700']
      });
    }
  };

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isLight = currentTheme === 'light';

  // Search Results
  const searchResults = searchQuery.trim() 
    ? PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.stone.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${
      isLight ? 'bg-[#faf8f5] text-[#19191a]' : 'bg-[#0c0d10] text-[#f4ede4]'
    }`}>
      {/* 1. Ultra-Luxury Header */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        currentTheme={currentTheme}
        onThemeToggle={() => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenSidebar={() => setIsSidebarOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        wishlistCount={wishlist.length}
      />

      {/* 2. Ultra-Luxury Sidebar */}
      <LuxurySidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        currentTheme={currentTheme}
        onThemeToggle={() => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onNavigate={handleNavigate}
      />

      {/* 3. Main Content Router */}
      <main className="flex-1">
        {currentRoute === 'home' ? (
          <div className="space-y-16 sm:space-y-24">
            {/* Cinematic 3D Hero Scene */}
            <HeroScene
              currentLanguage={currentLanguage}
              currentTheme={currentTheme}
              onNavigate={handleNavigate}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* Featured Best Sellers Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#d4af37]/20 pb-4">
                <div>
                  <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#d4af37] font-bold">
                    ATELIER HIGHLIGHTS
                  </div>
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold mt-1">
                    {t.nav.bestSellers}
                  </h2>
                </div>

                <button
                  onClick={() => handleNavigate('shop')}
                  className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold tracking-widest uppercase text-[#d4af37] hover:translate-x-1 transition-transform"
                >
                  <span>View All 18k Creations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS_DATA.filter(p => p.bestSeller).slice(0, 4).map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    currency={currentCurrency}
                    theme={currentTheme}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                    onQuickView={setSelectedProduct}
                    isWishlisted={wishlist.includes(product.id)}
                  />
                ))}
              </div>
            </section>

            {/* Marmaris Destination Experience Highlight */}
            <MarmarisScene
              currentLanguage={currentLanguage}
              currentTheme={currentTheme}
              onNavigate={handleNavigate}
            />

            {/* Rich History & Story Section */}
            <StorySection
              currentLanguage={currentLanguage}
              currentTheme={currentTheme}
              onNavigate={handleNavigate}
            />

            {/* Fullscreen Video Background above New Arrivals (Unfiltered, Muted, Looping, Parallax) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8">
              <ParallaxVideoBanner
                videoLocal="/videos/blue_ring_aksoy.mp4"
                videoRemote="https://raw.githubusercontent.com/ryusoi/aksoy-jewelry-media/main/VIDEO/BLUE%20RING%20AKSOY.mp4"
                ariaLabel="Blue Ring Aksoy Showcase"
              />
            </section>

            {/* New Arrivals Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#d4af37]/20 pb-4">
                <div>
                  <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#d4af37] font-bold">
                    JUST ARRIVED IN MARMARIS
                  </div>
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold mt-1">
                    {t.nav.newArrivals}
                  </h2>
                </div>

                <button
                  onClick={() => handleNavigate('new-arrivals')}
                  className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold tracking-widest uppercase text-[#d4af37] hover:translate-x-1 transition-transform"
                >
                  <span>Explore New In</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS_DATA.filter(p => p.newArrival).slice(0, 4).map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    currency={currentCurrency}
                    theme={currentTheme}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                    onQuickView={setSelectedProduct}
                    isWishlisted={wishlist.includes(product.id)}
                  />
                ))}
              </div>
            </section>

            {/* Private Concierge Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-8">
              <div className="p-8 sm:p-12 rounded-3xl border border-[#d4af37]/40 bg-gradient-to-r from-black/80 via-[#d4af37]/15 to-black/80 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <div className="text-xs tracking-[0.3em] uppercase text-[#d4af37] font-bold">
                    BESPOKE MARMARIS CONCIERGE
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Need Personalized Curation or Ring Sizing?
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300">
                    Connect directly with Manager Mr. Parvin for private consultations or wedding parures.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://wa.me/905352795176"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Concierge</span>
                  </a>

                  <button
                    onClick={() => handleNavigate('consultation')}
                    className="px-6 py-3 rounded-full bg-[#d4af37] text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#ebd06a] transition-all"
                  >
                    Book Private Viewing
                  </button>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <Subpages
            currentRoute={currentRoute}
            currentLanguage={currentLanguage}
            currentTheme={currentTheme}
            currentCurrency={currentCurrency}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={setSelectedProduct}
            wishlist={wishlist}
            cart={cart}
            onOpenCart={() => setIsCartOpen(true)}
            onAskAI={(query) => setExternalAIQuery(query)}
            activePromotion={activePromotion}
            onApplyPromotion={handleApplyPromotion}
          />
        )}
      </main>

      {/* 4. Luxury Footer */}
      <Footer
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        currentTheme={currentTheme}
        onThemeToggle={() => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onNavigate={handleNavigate}
      />

      {/* 5. Product Detail Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        currency={currentCurrency}
        theme={currentTheme}
        language={currentLanguage}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        onAskAI={(query) => setExternalAIQuery(query)}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
      />

      {/* 6. Jewelry Selection Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currency={currentCurrency}
        theme={currentTheme}
        language={currentLanguage}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => handleNavigate('checkout')}
        activePromotion={activePromotion}
        onApplyPromotion={handleApplyPromotion}
      />

      {/* 7. Quick Search Overlay Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
          <div 
            onClick={() => setIsSearchOpen(false)} 
            className="fixed inset-0 bg-black/80 backdrop-blur-md" 
          />
          <div className={`relative w-full max-w-2xl rounded-3xl p-6 shadow-2xl z-10 border ${
            isLight ? 'bg-white border-zinc-200 text-zinc-900' : 'bg-[#101117] border-[#d4af37]/40 text-zinc-100'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-zinc-700">
              <div className="flex items-center gap-2 flex-1">
                <Search className="w-5 h-5 text-[#d4af37]" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 18k solid gold, diamond solitaires, Marmaris..."
                  className="w-full bg-transparent text-sm sm:text-base focus:outline-none placeholder-zinc-500 font-cinzel"
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-full hover:bg-zinc-700/40 text-zinc-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results preview */}
            <div className="mt-4 max-h-80 overflow-y-auto space-y-2">
              {searchResults.length > 0 ? (
                searchResults.map(p => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setSelectedProduct(p);
                      setIsSearchOpen(false);
                    }}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#d4af37]/10 cursor-pointer transition-colors"
                  >
                    <img src={p.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="font-cinzel text-xs font-bold text-zinc-200">{p.name}</div>
                      <div className="text-[10px] text-[#d4af37]">{p.material} • {p.stone}</div>
                    </div>
                  </div>
                ))
              ) : searchQuery ? (
                <div className="text-center py-6 text-xs text-zinc-400">No matching creations found.</div>
              ) : (
                <div className="text-center py-6 text-xs text-zinc-500">Type a keyword to discover jewels.</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 
        8. PERMANENT FLOATING ROTATING DIAMOND JEWEL AI ASSISTANT
        Fixed to bottom-right, non-moving on scroll, rotating diamond icon
      */}
      <AIJewelryAssistant
        currentLanguage={currentLanguage}
        currentTheme={currentTheme}
        currentCurrency={currentCurrency}
        onOpenProduct={(p) => setSelectedProduct(p)}
        externalQuery={externalAIQuery}
        onClearExternalQuery={() => setExternalAIQuery(undefined)}
      />
    </div>
  );
}

export default App;
