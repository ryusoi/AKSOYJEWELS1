import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ShieldCheck, 
  ArrowRight, 
  Tag, 
  Check, 
  Sparkles,
  Phone
} from 'lucide-react';
import { CartItem, Currency, Theme, Language, Promotion } from '../types';
import { formatPrice } from '../utils/currency';
import { TRANSLATIONS } from '../data/translations';
import { verifyDiscountCode } from '../data/discounts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  theme: Theme;
  language: Language;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  activePromotion: Promotion | null;
  onApplyPromotion: (promo: Promotion | null) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  theme,
  language,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  activePromotion,
  onApplyPromotion
}) => {
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [promoError, setPromoError] = useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const isLight = theme === 'light';

  const subtotalUSD = items.reduce((sum, item) => sum + (item.product.priceUSD * item.quantity), 0);

  const discountAmountUSD = activePromotion 
    ? (activePromotion.discountType === 'percentage' 
        ? (subtotalUSD * activePromotion.value) / 100 
        : activePromotion.value)
    : 0;

  const totalUSD = Math.max(0, subtotalUSD - discountAmountUSD);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCodeInput.trim()) return;

    const result = verifyDiscountCode(promoCodeInput, subtotalUSD);
    if (result.valid && result.promotion) {
      onApplyPromotion(result.promotion);
      setPromoMessage(result.message);
      setPromoError(false);
    } else {
      setPromoMessage(result.message);
      setPromoError(true);
    }
  };

  const handleRemovePromo = () => {
    onApplyPromotion(null);
    setPromoCodeInput('');
    setPromoMessage(null);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 transition-all duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Drawer */}
      <div 
        className={`absolute top-0 right-0 bottom-0 w-full max-w-md h-full shadow-2xl flex flex-col z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-l ${
          isLight ? 'bg-[#fcfaf7] text-zinc-900 border-zinc-200' : 'bg-[#050B14] text-[#E0D8C0] border-[rgba(224,216,192,0.15)]'
        } ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[rgba(224,216,192,0.15)] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
            <h2 className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-[#E0D8C0]">
              {t.cart.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close Bag"
          >
            <X className="w-5 h-5 text-[#C5A059]" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-zinc-400">
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Sparkles className="w-8 h-8" />
              </div>
              <p className="font-neoris-primary text-base text-[#E0D8C0]/80 font-light">{t.cart.emptyText}</p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#C5A059] text-[#050B14] font-semibold text-xs tracking-wider uppercase hover:bg-[#d8b56f] transition-colors"
              >
                Discover Collections
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div 
                key={`${item.product.id}-${item.selectedSize}`}
                className="flex gap-4 p-3.5 rounded-2xl border border-[rgba(224,216,192,0.12)] bg-[#050B14]/80 hover:border-[#C5A059]/40 transition-colors"
              >
                <img 
                  src={item.product.images[0]} 
                  alt={item.product.name}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0 border border-white/10"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-xs sm:text-sm font-semibold leading-snug text-[#E0D8C0]">
                      {item.product.name}
                    </h3>
                    <div className="text-[11px] text-[#C5A059] font-medium">
                      {item.product.material} {item.selectedSize ? `• Size ${item.selectedSize}` : ''}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-[rgba(224,216,192,0.2)] rounded-lg overflow-hidden text-xs bg-black/40">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="px-2 py-0.5 hover:bg-white/10 transition-colors text-[#E0D8C0]"
                      >
                        -
                      </button>
                      <span className="px-2.5 py-0.5 font-bold text-[#E0D8C0]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="px-2 py-0.5 hover:bg-white/10 transition-colors text-[#E0D8C0]"
                      >
                        +
                      </button>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex items-center gap-3">
                      <span className="font-serif-luxury font-bold text-sm text-[#C5A059]">
                        {formatPrice(item.product.priceUSD * item.quantity, currency)}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-zinc-500 hover:text-rose-500 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[rgba(224,216,192,0.15)] bg-[#050B14]/90 space-y-4">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCodeInput}
                  onChange={(e) => setPromoCodeInput(e.target.value)}
                  placeholder={t.cart.discountCode}
                  className="flex-1 py-2 px-3 rounded-xl text-xs bg-black/50 border border-[rgba(224,216,192,0.2)] text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#C5A059]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-[#C5A059] hover:text-[#050B14] text-xs font-semibold uppercase tracking-wider transition-colors text-[#E0D8C0]"
                >
                  {t.cart.apply}
                </button>
              </div>

              {/* Active Promotion Display */}
              {activePromotion && (
                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{activePromotion.code} ({activePromotion.value}% OFF)</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemovePromo}
                    className="text-emerald-400 hover:text-rose-400 text-[11px] underline"
                  >
                    Remove
                  </button>
                </div>
              )}

              {promoMessage && !activePromotion && (
                <div className={`text-[11px] ${promoError ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {promoMessage}
                </div>
              )}
            </form>

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-[#E0D8C0]/85">
              <div className="flex justify-between">
                <span>{t.cart.subtotal}:</span>
                <span>{formatPrice(subtotalUSD, currency)}</span>
              </div>
              {discountAmountUSD > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Privilege Discount:</span>
                  <span>-{formatPrice(discountAmountUSD, currency)}</span>
                </div>
              )}
              <div className="flex justify-between font-cinzel text-base font-bold text-[#C5A059] pt-2 border-t border-[rgba(224,216,192,0.12)]">
                <span>Total Selection:</span>
                <span>{formatPrice(totalUSD, currency)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                onClose();
                onCheckout();
              }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C5A059] to-[#b38e44] text-[#050B14] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] uppercase hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <span>{t.cart.checkout}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* SSL Guarantee */}
            <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-400 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.cart.sslNotice}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
