import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  Tag, 
  MapPin, 
  ShieldCheck, 
  ShoppingBag,
  Bot,
  User,
  ExternalLink
} from 'lucide-react';
import { Language, Theme, Currency, Product } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PRODUCTS_DATA } from '../data/products';
import { PROMOTIONS_DATABASE, verifyDiscountCode } from '../data/discounts';
import { formatPrice } from '../utils/currency';

interface AIJewelryAssistantProps {
  currentLanguage: Language;
  currentTheme: Theme;
  currentCurrency: Currency;
  onOpenProduct: (product: Product) => void;
  externalQuery?: string;
  onClearExternalQuery?: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  recommendedProducts?: Product[];
  actionType?: 'whatsapp' | 'discount' | 'store' | 'product';
  actionData?: any;
}

export const AIJewelryAssistant: React.FC<AIJewelryAssistantProps> = ({
  currentLanguage,
  currentTheme,
  currentCurrency,
  onOpenProduct,
  externalQuery,
  onClearExternalQuery
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      sender: 'ai',
      text: `Welcome to Aksoy Jewel Concierge. I am your personal digital jewelry advisor at our Lotus Beach Hotel boutique in Marmaris. How may I assist your discovery today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isLight = currentTheme === 'light';

  useEffect(() => {
    if (chatEndRef.current && isOpen) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (externalQuery) {
      setIsOpen(true);
      handleSendMessage(externalQuery);
      if (onClearExternalQuery) onClearExternalQuery();
    }
  }, [externalQuery]);

  // Intelligent Luxury AI Reasoning Engine with verified discount database checking
  const generateAIResponse = async (userText: string): Promise<{ text: string; recommended?: Product[]; actionType?: any; actionData?: any }> => {
    const textLower = userText.toLowerCase();

    // 1. Check for Discount Code Queries
    if (textLower.includes('discount') || textLower.includes('coupon') || textLower.includes('promo') || textLower.includes('indirim') || textLower.includes('descuento') || textLower.includes('rabatt') || textLower.includes('скидк') || textLower.includes('خصم') || textLower.includes('تخفیف')) {
      const activePromos = PROMOTIONS_DATABASE.filter(p => p.active);
      if (activePromos.length > 0) {
        const promoList = activePromos.map(p => `• **${p.code}**: ${p.description} (Min. purchase: $${p.minimumPurchaseUSD})`).join('\n');
        return {
          text: `We are pleased to share our currently verified privilege codes for Aksoy Jewel patrons:\n\n${promoList}\n\nYou can enter these codes during checkout in your Jewelry Selection bag.`,
          actionType: 'discount',
          actionData: activePromos[0]
        };
      } else {
        return {
          text: `At this moment, no verified active discount codes are listed. Please consult Mr. Parvin directly for VIP complimentary privileges or wedding package arrangements.`,
          actionType: 'whatsapp'
        };
      }
    }

    // 2. Location & Store Queries
    if (textLower.includes('location') || textLower.includes('where') || textLower.includes('hotel') || textLower.includes('marmaris') || textLower.includes('nerede') || textLower.includes('dónde') || textLower.includes('wo') || textLower.includes('где') || textLower.includes('أين') || textLower.includes('کجا')) {
      return {
        text: `Aksoy Jewel is located inside the prestigious **Lotus Beach Hotel** in **Marmaris, Muğla, Türkiye**.\n\nEstablished in 1990, our boutique provides a private, oceanfront salon for fine jewelry viewings. You are warmly welcomed to visit or arrange a private chauffeur/concierge arrival with Mr. Parvin.`,
        actionType: 'store'
      };
    }

    // 3. Mr. Parvin & Direct Contact Queries
    if (textLower.includes('parvin') || textLower.includes('contact') || textLower.includes('call') || textLower.includes('phone') || textLower.includes('manager') || textLower.includes('iletişim') || textLower.includes('telefon') || textLower.includes('whatsapp')) {
      return {
        text: `You can reach **Mr. Parvin**, our Manager & Senior Sales Consultant directly at:\n\n📞 **Telephone:** +90 535 279 51 76\n💬 **WhatsApp:** Available 24/7 for bespoke video consultations and jewelry requests.`,
        actionType: 'whatsapp'
      };
    }

    // 4. Diamonds & Gemstones Recommendations
    if (textLower.includes('diamond') || textLower.includes('sapphire') || textLower.includes('emerald') || textLower.includes('pırlanta') || textLower.includes('safir') || textLower.includes('elmas') || textLower.includes('diamante') || textLower.includes('бриллиант')) {
      const diamondProducts = PRODUCTS_DATA.filter(p => p.stone.toLowerCase().includes('diamond') || p.stone.toLowerCase().includes('sapphire'));
      return {
        text: `Here are our most revered natural diamond and royal sapphire creations, handcrafted in our Marmaris atelier from solid 18k gold and platinum:`,
        recommended: diamondProducts.slice(0, 3)
      };
    }

    // 5. Gifts & Budget
    if (textLower.includes('gift') || textLower.includes('budget') || textLower.includes('under') || textLower.includes('hediye') || textLower.includes('regalo') || textLower.includes('geschenk') || textLower.includes('подарок') || textLower.includes('هدية')) {
      const giftItems = PRODUCTS_DATA.filter(p => p.priceUSD < 500);
      return {
        text: `For a memorable gift, here are timeless handcrafted solid gold and gemstone treasures under $500, delivered in our signature velvet packaging with certificate of authenticity:`,
        recommended: giftItems.slice(0, 3)
      };
    }

    // 6. Solid Gold vs Plated / Materials
    if (textLower.includes('gold') || textLower.includes('solid') || textLower.includes('18k') || textLower.includes('14k') || textLower.includes('altın') || textLower.includes('oro') || textLower.includes('золото')) {
      return {
        text: `At Aksoy Jewel, we believe jewelry is crafted for living. We specialize in **18k and 14k Solid Gold**, which never tarnishes, flakes, or degrades in water or sunshine. Every piece is stamped with international assay hallmarks (750 / 585).`
      };
    }

    // Default Fallback
    const bestSellers = PRODUCTS_DATA.filter(p => p.bestSeller);
    return {
      text: `Thank you for your inquiry. At Aksoy Jewel, we have been crafting bespoke gold and diamond jewelry in Marmaris since 1990 under the leadership of Mr. Rashid Aksoy and Mr. Fatih. May I present our signature Mediterranean best sellers?`,
      recommended: bestSellers.slice(0, 2)
    };
  };

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputMessage;
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Send query to server AI endpoint or fall back to internal reasoning
      let replyData;
      try {
        const res = await fetch('/api/concierge', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: textToSend,
            language: currentLanguage,
            currency: currentCurrency
          })
        });
        if (res.ok) {
          const json = await res.json();
          if (json.reply) {
            replyData = { text: json.reply, recommended: json.recommendedProducts };
          }
        }
      } catch {
        // Fallback to internal reasoning
      }

      if (!replyData) {
        replyData = await generateAIResponse(textToSend);
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyData.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendedProducts: replyData.recommended,
        actionType: replyData.actionType,
        actionData: replyData.actionData
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: 'Our concierge is momentarily connecting with the Marmaris atelier. Feel free to message Mr. Parvin directly on WhatsApp at +90 535 279 51 76.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          actionType: 'whatsapp'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 
        PERMANENT FLOATING ROTATING DIAMOND JEWEL ICON
        Fixed at bottom-right of screen, non-moving when scrolling, rotating diamond jewel icon with Artistic Flair
      */}
      <div 
        id="floating-diamond-ai-trigger"
        className="fixed bottom-6 right-6 z-40 select-none animate-artistic-float"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-1 flex items-center justify-center focus:outline-none"
          aria-label="Open Aksoy Jewel AI Concierge"
          title="Aksoy Jewel AI Concierge"
        >
          {/* Ambient Glow Aura */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C5A059] via-[#E0D8C0] to-[#1A3C5A] blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />

          {/* Rotating Diamond Jewel Container */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#050B14] border-2 border-[#C5A059] shadow-[0_0_25px_rgba(197,160,89,0.7)] flex items-center justify-center overflow-hidden transition-transform transform group-hover:scale-110 active:scale-95">
            {/* Spinning Light Rays Behind Gem */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(197,160,89,0.3)_0%,transparent_70%)]" />

            {/* Rotating 3D Diamond Gemstone SVG */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 animate-jewel-spin">
              <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_0_6px_rgba(224,216,192,0.9)]">
                <defs>
                  <linearGradient id="floatingDiamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="30%" stopColor="#e0f2fe" />
                    <stop offset="70%" stopColor="#93c5fd" />
                    <stop offset="100%" stopColor="#dbeafe" />
                  </linearGradient>
                </defs>
                {/* Brilliant Octahedron Diamond Facets */}
                <polygon points="50,10 78,35 50,90 22,35" fill="url(#floatingDiamondGrad)" stroke="#C5A059" strokeWidth="2" />
                <line x1="22" y1="35" x2="78" y2="35" stroke="#C5A059" strokeWidth="1.5" />
                <line x1="50" y1="10" x2="50" y2="90" stroke="#C5A059" strokeWidth="1" />
                <polygon points="50,10 65,35 50,60 35,35" fill="#ffffff" opacity="0.6" />
                <circle cx="50" cy="35" r="3" fill="#ffffff" />
              </svg>
            </div>

            {/* Tiny Golden Sparkle Badge */}
            <div className="absolute -top-0.5 -right-0.5 p-1 rounded-full bg-[#C5A059] text-black">
              <Sparkles className="w-2.5 h-2.5" />
            </div>
          </div>

          {/* Tooltip on Desktop */}
          <div className="hidden md:flex absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#050B14]/90 backdrop-blur-md border border-[rgba(197,160,89,0.4)] text-[#E0D8C0] text-xs font-cinzel tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>AI Luxury Concierge</span>
          </div>
        </button>
      </div>

      {/* 
        EXPANDED LUXURY AI CONCIERGE CHAT WINDOW
      */}
      {isOpen && (
        <div 
          id="aksoy-ai-concierge-panel"
          className={`fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 max-w-md h-[550px] max-h-[80vh] rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border backdrop-blur-2xl transition-all duration-300 animate-fadeIn ${
            isLight 
              ? 'bg-white/95 border-[rgba(197,160,89,0.4)] text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]' 
              : 'bg-[#050B14]/95 border-[rgba(197,160,89,0.4)] text-[#E0D8C0] shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
          }`}
        >
          {/* Header */}
          <div className="p-4 border-b border-[rgba(224,216,192,0.15)] bg-gradient-to-r from-[#C5A059]/20 via-[#1A3C5A]/20 to-black/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C5A059] text-black flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-cinzel text-xs sm:text-sm font-bold tracking-wider text-[#C5A059]">
                  {t.concierge.title}
                </h3>
                <div className="text-[10px] text-zinc-400">
                  Lotus Beach Hotel, Marmaris
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-zinc-500/20 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close Concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div className={`max-w-[82%] space-y-2`}>
                  <div
                    className={`p-3 rounded-2xl leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-[#d4af37] text-black font-medium rounded-tr-none'
                        : isLight 
                            ? 'bg-zinc-100 text-zinc-800 border border-zinc-200 rounded-tl-none' 
                            : 'bg-zinc-900/90 text-zinc-200 border border-zinc-700/50 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Recommended Products Carousel Cards */}
                  {msg.recommendedProducts && msg.recommendedProducts.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      {msg.recommendedProducts.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => onOpenProduct(p)}
                          className="flex items-center gap-2.5 p-2 rounded-xl border border-[#d4af37]/30 bg-black/30 hover:border-[#d4af37] cursor-pointer transition-all"
                        >
                          <img 
                            src={p.images[0]} 
                            alt={p.name}
                            className="w-10 h-10 rounded-lg object-cover" 
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-cinzel text-[11px] font-semibold truncate text-zinc-100">
                              {p.name}
                            </div>
                            <div className="text-[10px] text-[#d4af37] font-serif-luxury font-bold">
                              {formatPrice(p.priceUSD, currentCurrency)}
                            </div>
                          </div>
                          <span className="text-[10px] text-[#d4af37] px-2 py-0.5 rounded bg-[#d4af37]/10">
                            View
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Link Buttons */}
                  {msg.actionType === 'whatsapp' && (
                    <a
                      href="https://wa.me/905352795176?text=Hello%20Mr.%20Parvin,%20I%20am%20chatting%20with%20your%20Aksoy%20Jewel%20AI%20Concierge."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold text-[11px] hover:bg-emerald-500 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat with Mr. Parvin on WhatsApp</span>
                    </a>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-zinc-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-light p-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-spin" />
                <span>Consulting the Marmaris atelier...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 border-t border-zinc-500/15 flex gap-1.5 overflow-x-auto text-[10px] bg-black/10">
            <button
              onClick={() => handleSendMessage(t.concierge.quickPrompts.discount)}
              className="px-2.5 py-1 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37] whitespace-nowrap hover:bg-[#d4af37]/20 transition-colors flex items-center gap-1"
            >
              <Tag className="w-2.5 h-2.5" />
              <span>Discount Codes</span>
            </button>
            <button
              onClick={() => handleSendMessage(t.concierge.quickPrompts.diamonds)}
              className="px-2.5 py-1 rounded-full border border-zinc-600 bg-black/20 text-zinc-300 whitespace-nowrap hover:border-[#d4af37] transition-colors"
            >
              Diamonds & Sapphires
            </button>
            <button
              onClick={() => handleSendMessage(t.concierge.quickPrompts.location)}
              className="px-2.5 py-1 rounded-full border border-zinc-600 bg-black/20 text-zinc-300 whitespace-nowrap hover:border-[#d4af37] transition-colors flex items-center gap-1"
            >
              <MapPin className="w-2.5 h-2.5" />
              <span>Marmaris Location</span>
            </button>
            <button
              onClick={() => handleSendMessage(t.concierge.quickPrompts.contactParvin)}
              className="px-2.5 py-1 rounded-full border border-emerald-600/40 bg-emerald-950/20 text-emerald-300 whitespace-nowrap hover:bg-emerald-900/40 transition-colors flex items-center gap-1"
            >
              <Phone className="w-2.5 h-2.5" />
              <span>Mr. Parvin</span>
            </button>
          </div>

          {/* Chat Input Bar */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 border-t border-[#d4af37]/20 bg-black/30 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={t.concierge.askPlaceholder}
              className="flex-1 py-2 px-3 rounded-xl bg-black/40 border border-zinc-700 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="p-2 rounded-xl bg-[#d4af37] text-black disabled:opacity-40 hover:bg-[#ebd06a] transition-all"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
