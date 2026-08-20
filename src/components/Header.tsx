import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Search, 
  Heart, 
  ShoppingBag, 
  Sun, 
  Moon, 
  Globe, 
  Phone, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { AksoyLogo } from './AksoyLogo';
import { Language, Theme, Currency, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CURRENCY_RATES } from '../utils/currency';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  currentTheme: Theme;
  onThemeToggle: () => void;
  currentCurrency: Currency;
  onCurrencyChange: (curr: Currency) => void;
  onOpenSidebar: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onNavigate: (route: PageRoute) => void;
  cartCount: number;
  wishlistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  currentTheme,
  onThemeToggle,
  currentCurrency,
  onCurrencyChange,
  onOpenSidebar,
  onOpenSearch,
  onOpenCart,
  onNavigate,
  cartCount,
  wishlistCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isCurrDropdownOpen, setIsCurrDropdownOpen] = useState(false);

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isLight = currentTheme === 'light';

  const languagesList: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'fa', label: 'فارسی', flag: '🇮🇷' }
  ];

  const currenciesList: Currency[] = ['USD', 'EUR', 'TRY', 'GBP', 'AED'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex(prev => (prev + 1) % (t.announcement?.length || 4));
    }, 4500);
    return () => clearInterval(interval);
  }, [t.announcement]);

  return (
    <header 
      id="aksoy-luxury-header"
      className="fixed top-0 left-0 w-full z-40 transition-all duration-500"
    >
      {/* Top Announcement Bar */}
      <div className="bg-[#050B14] text-[#E0D8C0] border-b border-[rgba(224,216,192,0.1)] text-[11px] sm:text-xs py-1.5 px-4 font-medium overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-3 text-zinc-400 text-[10px] tracking-widest uppercase">
            <span className="flex items-center gap-1 text-[#C5A059]">
              <Sparkles className="w-3 h-3" />
              <span>LOTUS BEACH HOTEL • MARMARIS</span>
            </span>
          </div>

          <div className="flex-1 text-center truncate px-2 font-serif-luxury tracking-wide text-[#E0D8C0]">
            {t.announcement[announcementIndex] || t.announcement[0]}
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px]">
            <a 
              href="https://wa.me/905352795176" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#C5A059] hover:text-white transition-colors"
              title="Mr. Parvin Concierge"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+90 535 279 51 76</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <div 
        className={`w-full px-4 sm:px-8 py-2.5 sm:py-3.5 transition-all duration-500 ${
          isScrolled 
            ? (isLight 
                ? 'artistic-glass-light shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-b border-[rgba(197,160,89,0.2)] text-[#1a1918]' 
                : 'artistic-glass shadow-[0_8px_30px_rgba(0,0,0,0.7)] border-b border-[rgba(224,216,192,0.1)] text-[#E0D8C0]')
            : (isLight 
                ? 'bg-transparent text-[#1a1918]' 
                : 'bg-gradient-to-b from-[#050B14]/90 via-[#050B14]/40 to-transparent text-[#E0D8C0]')
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Sidebar Button & Aksoy Video Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onOpenSidebar}
              id="sidebar-toggle-button"
              className={`p-2 rounded-full transition-colors flex items-center gap-2 group ${
                isLight ? 'hover:bg-[#f4eedc]' : 'hover:bg-white/10'
              }`}
              aria-label="Open Luxury Navigation Menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A059] group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline text-xs tracking-[0.2em] uppercase font-semibold text-[#C5A059]">
                Menu
              </span>
            </button>

            {/* Logo positioned directly next to sidebar toggle */}
            <AksoyLogo 
              variant="header" 
              theme={currentTheme}
              onClick={() => onNavigate('home')} 
            />
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-[11px] uppercase tracking-widest font-medium">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#C5A059] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('shop')} 
              className="hover:text-[#C5A059] transition-colors"
            >
              {t.nav.allJewelry}
            </button>
            <button 
              onClick={() => onNavigate('collections')} 
              className="hover:text-[#C5A059] transition-colors"
            >
              {t.nav.collections}
            </button>
            <button 
              onClick={() => onNavigate('marmaris')} 
              className="hover:text-white transition-colors text-[#C5A059]"
            >
              Marmaris
            </button>
            <button 
              onClick={() => onNavigate('our-story')} 
              className="hover:text-[#C5A059] transition-colors"
            >
              {t.nav.ourStory}
            </button>
          </nav>

          {/* Right: Actions (Search, Lang, Curr, Theme, Wishlist, Bag) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full transition-colors ${
                isLight ? 'hover:bg-[#f4eedc]' : 'hover:bg-white/10'
              }`}
              aria-label="Search Fine Jewelry"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300 hover:text-[#C5A059] transition-colors" />
            </button>

            {/* Currency Selector */}
            <div className="relative hidden md:block">
              <button
                onClick={() => {
                  setIsCurrDropdownOpen(!isCurrDropdownOpen);
                  setIsLangDropdownOpen(false);
                }}
                className={`flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full border border-[rgba(224,216,192,0.2)] font-medium ${
                  isLight ? 'bg-white/70 text-zinc-800' : 'bg-[#050B14]/60 text-[#E0D8C0]'
                }`}
                aria-label="Select Currency"
              >
                <span>{currentCurrency}</span>
                <ChevronDown className="w-3 h-3 text-[#C5A059]" />
              </button>

              {isCurrDropdownOpen && (
                <div 
                  className={`absolute right-0 mt-2 w-28 py-1 rounded-xl shadow-2xl z-50 border border-[rgba(197,160,89,0.3)] ${
                    isLight ? 'bg-white text-zinc-800' : 'bg-[#050B14] text-[#E0D8C0]'
                  }`}
                >
                  {currenciesList.map(curr => (
                    <button
                      key={curr}
                      onClick={() => {
                        onCurrencyChange(curr);
                        setIsCurrDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-1.5 text-left text-xs flex items-center justify-between hover:bg-[#C5A059]/15 ${
                        currentCurrency === curr ? 'text-[#C5A059] font-bold' : ''
                      }`}
                    >
                      <span>{curr}</span>
                      <span className="text-[10px] text-zinc-400">
                        {CURRENCY_RATES[curr].symbol}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector (7 languages) */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLangDropdownOpen(!isLangDropdownOpen);
                  setIsCurrDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border border-[rgba(224,216,192,0.25)] font-medium uppercase tracking-wider ${
                  isLight ? 'bg-white/70 text-zinc-800' : 'bg-[#050B14]/70 text-[#E0D8C0]'
                }`}
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{currentLanguage}</span>
                <ChevronDown className="w-3 h-3 text-zinc-400" />
              </button>

              {isLangDropdownOpen && (
                <div 
                  className={`absolute right-0 mt-2 w-44 py-2 rounded-xl shadow-2xl z-50 border border-[rgba(197,160,89,0.3)] ${
                    isLight ? 'bg-white text-zinc-800' : 'bg-[#050B14] text-[#E0D8C0]'
                  }`}
                >
                  <div className="px-3 py-1 text-[10px] tracking-widest uppercase text-[#C5A059] font-semibold border-b border-white/10">
                    Select Language
                  </div>
                  {languagesList.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs flex items-center gap-2.5 hover:bg-[#C5A059]/15 transition-colors ${
                        currentLanguage === lang.code ? 'text-[#C5A059] font-bold bg-[#C5A059]/10' : ''
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className={lang.code === 'ar' || lang.code === 'fa' ? 'font-arabic-calligraphy text-sm' : ''}>
                        {lang.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-full transition-all ${
                isLight ? 'hover:bg-[#f4eedc] text-amber-600' : 'hover:bg-white/10 text-amber-300'
              }`}
              title={`Switch to ${isLight ? 'Dark Luxury' : 'Light Luxury'}`}
              aria-label="Toggle visual theme"
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Wishlist */}
            <button
              onClick={() => onNavigate('wishlist')}
              className={`relative p-2 rounded-full transition-colors ${
                isLight ? 'hover:bg-[#f4eedc]' : 'hover:bg-white/10'
              }`}
              aria-label="View Wishlist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300 hover:text-rose-400 transition-colors" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart / Selection Bag */}
            <button
              onClick={onOpenCart}
              id="header-bag-button"
              className="relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C5A059] text-[#050B14] font-semibold text-xs tracking-wider uppercase hover:bg-[#d8b56f] hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] transition-all transform active:scale-95"
              aria-label="View Jewelry Selection Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-cinzel">{t.nav.cart}</span>
              <span className="w-4 h-4 rounded-full bg-[#050B14] text-[#C5A059] text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
