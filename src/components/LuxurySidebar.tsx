import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  Phone, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  MessageCircle, 
  Globe, 
  Sun, 
  Moon,
  Instagram,
  Facebook,
  Send
} from 'lucide-react';
import { AksoyLogo } from './AksoyLogo';
import { Language, Theme, PageRoute, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface LuxurySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  currentTheme: Theme;
  onThemeToggle: () => void;
  currentCurrency: Currency;
  onCurrencyChange: (curr: Currency) => void;
  onNavigate: (route: PageRoute) => void;
}

export const LuxurySidebar: React.FC<LuxurySidebarProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  onLanguageChange,
  currentTheme,
  onThemeToggle,
  currentCurrency,
  onCurrencyChange,
  onNavigate
}) => {
  const [activeSection, setActiveSection] = useState<'discover' | 'experience' | 'services' | 'info'>('discover');
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isLight = currentTheme === 'light';

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    onClose();
  };

  const languagesList: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'fa', label: 'فارسی', flag: '🇮🇷' }
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 transition-all duration-700 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Dark Ambient Backdrop with Yacht & Mediterranean Blur */}
      <div 
        onClick={onClose}
        className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-700 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Main Drawer Panel */}
      <div 
        id="luxury-sidebar-panel"
        className={`absolute top-0 left-0 bottom-0 w-full max-w-xl sm:max-w-2xl h-full shadow-2xl flex flex-col z-10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          isLight ? 'bg-[#fbf9f4] text-[#19191a]' : 'bg-[#050B14] text-[#E0D8C0]'
        } ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Subtle Luxury Atmospheric Background */}
        <div className="absolute inset-0 pointer-events-none opacity-15 med-bg" />

        {/* Sidebar Header */}
        <div className="relative z-10 px-6 sm:px-8 py-5 border-b border-[rgba(224,216,192,0.1)] flex items-center justify-between">
          <AksoyLogo 
            variant="sidebar" 
            theme={currentTheme}
            onClick={() => handleNavClick('home')} 
          />
          
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-[rgba(197,160,89,0.3)] hover:bg-[#C5A059]/10 hover:border-[#C5A059] transition-all group"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-[#C5A059] group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="relative z-10 grid grid-cols-4 border-b border-[rgba(224,216,192,0.1)] bg-black/10 text-center text-xs tracking-widest uppercase font-semibold">
          <button
            onClick={() => setActiveSection('discover')}
            className={`py-3 transition-colors border-b-2 ${
              activeSection === 'discover'
                ? 'border-[#C5A059] text-[#C5A059] bg-[#C5A059]/10'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Discover
          </button>
          <button
            onClick={() => setActiveSection('experience')}
            className={`py-3 transition-colors border-b-2 ${
              activeSection === 'experience'
                ? 'border-[#C5A059] text-[#C5A059] bg-[#C5A059]/10'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveSection('services')}
            className={`py-3 transition-colors border-b-2 ${
              activeSection === 'services'
                ? 'border-[#C5A059] text-[#C5A059] bg-[#C5A059]/10'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveSection('info')}
            className={`py-3 transition-colors border-b-2 ${
              activeSection === 'info'
                ? 'border-[#C5A059] text-[#C5A059] bg-[#C5A059]/10'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Info
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="relative z-10 flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6">
          {activeSection === 'discover' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
                FINE JEWELRY & COLLECTIONS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { label: t.nav.allJewelry, route: 'shop' as PageRoute, highlight: true },
                  { label: t.nav.newArrivals, route: 'new-arrivals' as PageRoute },
                  { label: t.nav.bestSellers, route: 'best-sellers' as PageRoute },
                  { label: t.nav.collections, route: 'collections' as PageRoute },
                  { label: t.nav.rings, route: 'rings' as PageRoute },
                  { label: t.nav.earrings, route: 'earrings' as PageRoute },
                  { label: t.nav.necklaces, route: 'necklaces' as PageRoute },
                  { label: t.nav.bracelets, route: 'bracelets' as PageRoute },
                  { label: t.nav.bangles, route: 'bangles' as PageRoute },
                  { label: t.nav.diamonds, route: 'diamonds' as PageRoute },
                  { label: t.nav.gold, route: 'gold' as PageRoute },
                  { label: t.nav.gemstones, route: 'gemstones' as PageRoute },
                  { label: t.nav.bridal, route: 'bridal' as PageRoute },
                  { label: t.nav.mens, route: 'customized' as PageRoute },
                  { label: t.nav.gifts, route: 'gifts' as PageRoute },
                  { label: t.nav.customized, route: 'customized' as PageRoute }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavClick(item.route)}
                    className={`flex items-center justify-between p-3 rounded-lg text-left text-sm font-medium tracking-wide transition-all group artistic-nav-item ${
                      item.highlight 
                        ? 'bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059]' 
                        : isLight ? 'hover:bg-[#f0ebd9]' : 'hover:bg-white/5 text-[#E0D8C0] hover:text-white'
                    }`}
                  >
                    <span className="font-cinzel">{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A059] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
                THE AKSOY HERITAGE
              </div>
              <div className="space-y-2">
                {[
                  { label: t.nav.ourStory, route: 'our-story' as PageRoute, desc: 'Established in 1990 by Mr. Rashid Aksoy & Mr. Fatih' },
                  { label: t.nav.mission, route: 'mission' as PageRoute, desc: 'Customer-focused mastery in fine jewelry' },
                  { label: t.nav.vision, route: 'vision' as PageRoute, desc: 'Pioneering Mediterranean luxury internationally' },
                  { label: t.nav.marmarisExperience, route: 'marmaris' as PageRoute, desc: 'Lotus Beach Hotel, Marmaris Bay & the Aegean Coast' },
                  { label: 'Jewelry Education & Guides', route: 'guides' as PageRoute, desc: 'Solid Gold, Diamond 4Cs & Gemstone Care' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavClick(item.route)}
                    className={`w-full p-4 rounded-xl text-left border transition-all group artistic-glass-card ${
                      isLight 
                        ? 'border-zinc-200 hover:border-[#C5A059] bg-white' 
                        : 'border-white/10 hover:border-[#C5A059] bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-cinzel text-base font-semibold text-[#C5A059]">
                        {item.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-zinc-400 font-light">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'services' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
                BESPOKE SALON & CONCIERGE
              </div>
              <div className="space-y-2.5">
                {[
                  { title: 'Visit Our Marmaris Boutique', route: 'stores' as PageRoute, desc: 'Inside Lotus Beach Hotel, Marmaris, Türkiye' },
                  { title: 'WhatsApp Direct Concierge', route: 'whatsapp-concierge' as PageRoute, desc: 'Instant consultation with Mr. Parvin' },
                  { title: 'Private Jewelry Styling', route: 'consultation' as PageRoute, desc: '1-on-1 personalized curation & bridal parures' },
                  { title: 'Piercing Studio & Aftercare', route: 'piercing-studio' as PageRoute, desc: 'Expert ear stacks & solid gold piercing' },
                  { title: 'Get Zapped! (Permanent Jewelry)', route: 'get-zapped' as PageRoute, desc: 'Welded solid gold custom chains' }
                ].map((svc, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavClick(svc.route)}
                    className={`w-full p-3.5 rounded-xl text-left border transition-all artistic-glass-card ${
                      isLight 
                        ? 'border-zinc-200 hover:border-[#C5A059] bg-white' 
                        : 'border-white/10 hover:border-[#C5A059] bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-cinzel text-sm font-semibold text-zinc-200 group-hover:text-[#C5A059]">
                        {svc.title}
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-1">{svc.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'info' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
                CUSTOMER CARE & POLICIES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { label: t.nav.shipping, route: 'shipping' as PageRoute },
                  { label: t.nav.returns, route: 'returns' as PageRoute },
                  { label: t.nav.securePayments, route: 'secure-payments' as PageRoute },
                  { label: t.nav.faq, route: 'faq' as PageRoute },
                  { label: 'Privacy Policy', route: 'privacy' as PageRoute },
                  { label: 'Terms & Conditions', route: 'terms' as PageRoute }
                ].map((info, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavClick(info.route)}
                    className={`p-3 rounded-lg text-left text-xs font-medium border border-transparent transition-all ${
                      isLight 
                        ? 'hover:border-[#C5A059]/40 hover:bg-[#f0ebd9]' 
                        : 'hover:border-[#C5A059]/40 hover:bg-white/5 text-zinc-300'
                    }`}
                  >
                    {info.label}
                  </button>
                ))}
              </div>

              {/* 256-Bit SSL Badge */}
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-xs flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-0.5">256-Bit SSL Encrypted Guarantee</div>
                  <div className="text-[11px] text-emerald-200/80 leading-relaxed">
                    All payment processing and customer information are encrypted with 256-bit SSL protocols.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Manager & Sales Consultant Contact Card */}
          <div className="p-4 rounded-2xl border border-[rgba(197,160,89,0.3)] bg-gradient-to-br from-[#1A3C5A]/30 via-[#050B14]/70 to-[#050B14]/90 text-zinc-200">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
                DEDICATED CONCIERGE
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="text-sm font-neoris-display text-[#C5A059] mb-0.5 font-light">
              Mr. Parvin
            </div>
            <div className="text-xs text-zinc-400 mb-3">
              Manager & Sales Consultant • Aksoy Jewel
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="tel:+905352795176"
                className="flex-1 min-w-[120px] py-2 px-3 rounded-lg bg-[#C5A059] text-[#050B14] font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-[#d8b56f] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+90 535 279 51 76</span>
              </a>
              <a
                href="https://wa.me/905352795176"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] py-2 px-3 rounded-lg bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="relative z-10 px-6 sm:px-8 py-4 border-t border-[rgba(224,216,192,0.1)] bg-black/40 flex flex-col gap-3">
          {/* Languages Selector */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Language:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {languagesList.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`px-2 py-0.5 rounded text-[11px] uppercase transition-all ${
                    currentLanguage === lang.code
                      ? 'bg-[#C5A059] text-black font-bold'
                      : 'text-zinc-400 hover:text-white bg-white/5'
                  }`}
                >
                  {lang.flag} {lang.code}
                </button>
              ))}
            </div>
          </div>

          {/* Theme & Socials */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-zinc-400">
            <button
              onClick={onThemeToggle}
              className="flex items-center gap-1.5 text-[#C5A059] hover:text-white transition-colors"
            >
              {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              <span>{isLight ? 'Switch to Dark Luxury' : 'Switch to Light Luxury'}</span>
            </button>

            <div className="flex items-center gap-3 text-zinc-400">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
