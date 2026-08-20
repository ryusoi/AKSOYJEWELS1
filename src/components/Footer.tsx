import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Globe, 
  Check, 
  ArrowRight,
  Instagram,
  Facebook,
  Award
} from 'lucide-react';
import { AksoyLogo } from './AksoyLogo';
import { Language, Theme, Currency, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  currentTheme: Theme;
  onThemeToggle: () => void;
  currentCurrency: Currency;
  onCurrencyChange: (curr: Currency) => void;
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLanguage,
  onLanguageChange,
  currentTheme,
  onThemeToggle,
  currentCurrency,
  onCurrencyChange,
  onNavigate
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isLight = currentTheme === 'light';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer 
      id="aksoy-luxury-footer"
      className={`border-t border-[rgba(224,216,192,0.15)] relative pt-16 pb-12 px-4 sm:px-8 overflow-hidden ${
        isLight ? 'bg-[#f4efe6] text-zinc-900' : 'bg-[#050B14] text-[#E0D8C0]'
      }`}
    >
      {/* Top Newsletter & Privilege Club Banner */}
      <div className="max-w-7xl mx-auto pb-14 border-b border-[rgba(224,216,192,0.12)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-2 text-center lg:text-left">
          <div className="text-xs tracking-[0.3em] uppercase text-[#C5A059] font-bold flex items-center justify-center lg:justify-start gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AKSOY PRIVILEGE SOCIETY</span>
          </div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E0D8C0]">
            Receive Private Invitations & Exclusive Offerings
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-lg">
            Enjoy complimentary jewelry inspections in Marmaris, early access to limited atelier drops, and a 10% welcome privilege code.
          </p>
        </div>

        <div className="lg:col-span-6">
          {newsletterSubscribed ? (
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
              <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Welcome to Aksoy Society. Use privilege code <strong>AKSOYGOLD</strong> for 10% off your next selection.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input 
                type="email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 py-3 px-4 rounded-xl text-xs bg-black/40 border border-[rgba(224,216,192,0.2)] text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#C5A059]"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#C5A059] text-[#050B14] font-cinzel font-bold text-xs uppercase tracking-wider hover:bg-[#d8b56f] transition-all flex items-center gap-1.5"
              >
                <span>Join</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 5-Column Navigation Matrix */}
      <div className="max-w-7xl mx-auto py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 text-xs">
        {/* Col 1: Brand & Boutique */}
        <div className="col-span-2 md:col-span-1 space-y-4">
          <AksoyLogo variant="footer" theme={currentTheme} onClick={() => onNavigate('home')} />
          <p className="text-zinc-400 text-xs leading-relaxed font-light">
            Providing distinguished craftsmanship in 18k solid gold, rare diamonds, and Ceylon sapphires since 1990.
          </p>
          <div className="space-y-1.5 pt-2 text-[#E0D8C0]/85 text-xs">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
              <span>Lotus Beach Hotel, Marmaris, Muğla, Türkiye</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
              <a href="tel:+905352795176" className="hover:text-[#C5A059] transition-colors font-semibold">
                +90 535 279 51 76 (Mr. Parvin)
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Shop & Categories */}
        <div className="space-y-3">
          <div className="font-cinzel text-xs tracking-widest uppercase font-bold text-[#C5A059]">
            {t.footer?.explore || 'Explore & Shop'}
          </div>
          <ul className="space-y-2 text-zinc-400">
            <li><button onClick={() => onNavigate('shop')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.allJewelry || 'All Jewelry'}</button></li>
            <li><button onClick={() => onNavigate('new-arrivals')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.newArrivals || 'New Arrivals'}</button></li>
            <li><button onClick={() => onNavigate('best-sellers')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.bestSellers || 'Best Sellers'}</button></li>
            <li><button onClick={() => onNavigate('collections')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.collections || 'Collections'}</button></li>
            <li><button onClick={() => onNavigate('rings')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.rings || 'Rings'}</button></li>
            <li><button onClick={() => onNavigate('diamonds')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.diamonds || 'Diamonds'}</button></li>
            <li><button onClick={() => onNavigate('gold')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.gold || 'Gold'}</button></li>
            <li><button onClick={() => onNavigate('gifts')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.gifts || 'Gifts'}</button></li>
          </ul>
        </div>

        {/* Col 3: About & Heritage */}
        <div className="space-y-3">
          <div className="font-cinzel text-xs tracking-widest uppercase font-bold text-[#C5A059]">
            {t.footer?.about || 'About & Heritage'}
          </div>
          <ul className="space-y-2 text-zinc-400">
            <li><button onClick={() => onNavigate('our-story')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.ourStory || 'Our Story'}</button></li>
            <li><button onClick={() => onNavigate('mission')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.mission || 'Mission'}</button></li>
            <li><button onClick={() => onNavigate('vision')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.vision || 'Vision'}</button></li>
            <li><button onClick={() => onNavigate('marmaris')} className="hover:text-[#E0D8C0] transition-colors text-[#C5A059]">{t.nav?.marmarisExperience || 'Marmaris'}</button></li>
            <li><button onClick={() => onNavigate('guides')} className="hover:text-[#E0D8C0] transition-colors">Jewelry Guides & Care</button></li>
            <li><button onClick={() => onNavigate('blogs')} className="hover:text-[#E0D8C0] transition-colors">Atelier Journal</button></li>
            <li><button onClick={() => onNavigate('careers')} className="hover:text-[#E0D8C0] transition-colors">Careers at Aksoy</button></li>
          </ul>
        </div>

        {/* Col 4: Services & Boutiques */}
        <div className="space-y-3">
          <div className="font-cinzel text-xs tracking-widest uppercase font-bold text-[#C5A059]">
            {t.footer?.services || 'Boutique Services'}
          </div>
          <ul className="space-y-2 text-zinc-400">
            <li><button onClick={() => onNavigate('stores')} className="hover:text-[#E0D8C0] transition-colors">Lotus Beach Boutique</button></li>
            <li><button onClick={() => onNavigate('consultation')} className="hover:text-[#E0D8C0] transition-colors">Private Styling</button></li>
            <li><button onClick={() => onNavigate('piercing-studio')} className="hover:text-[#E0D8C0] transition-colors">Solid Gold Piercing</button></li>
            <li><button onClick={() => onNavigate('get-zapped')} className="hover:text-[#E0D8C0] transition-colors">Get Zapped (Permanent)</button></li>
            <li><button onClick={() => onNavigate('customized')} className="hover:text-[#E0D8C0] transition-colors">Bespoke Commissions</button></li>
            <li><a href="https://wa.me/905352795176" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline flex items-center gap-1">WhatsApp Concierge</a></li>
          </ul>
        </div>

        {/* Col 5: Customer Care & Security */}
        <div className="space-y-3">
          <div className="font-cinzel text-xs tracking-widest uppercase font-bold text-[#C5A059]">
            {t.footer?.customerCare || 'Customer Care & Security'}
          </div>
          <ul className="space-y-2 text-zinc-400">
            <li><button onClick={() => onNavigate('shipping')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.shipping || 'Shipping'}</button></li>
            <li><button onClick={() => onNavigate('returns')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.returns || 'Returns'}</button></li>
            <li><button onClick={() => onNavigate('secure-payments')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.securePayments || 'Secure Payments'}</button></li>
            <li><button onClick={() => onNavigate('faq')} className="hover:text-[#E0D8C0] transition-colors">{t.nav?.faq || 'FAQ'}</button></li>
            <li><button onClick={() => onNavigate('privacy')} className="hover:text-[#E0D8C0] transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => onNavigate('terms')} className="hover:text-[#E0D8C0] transition-colors">Terms of Service</button></li>
          </ul>

          <div className="pt-2">
            <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-[11px] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>256-Bit SSL Secured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[rgba(224,216,192,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <div className="flex items-center gap-4">
          <p>{t.footer?.copyright || '© 1990–2026 Aksoy Jewel. All Rights Reserved.'}</p>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[#C5A059]">Rashid Aksoy & Fatih Partners</span>
          <span>•</span>
          <span>Lotus Beach Hotel, Marmaris</span>
        </div>
      </div>
    </footer>
  );
};
