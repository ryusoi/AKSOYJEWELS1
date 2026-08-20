import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  Share2,
  Check
} from 'lucide-react';
import { Product, Currency, Theme, Language } from '../types';
import { formatPrice } from '../utils/currency';
import { TRANSLATIONS } from '../data/translations';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  theme: Theme;
  language: Language;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  onToggleWishlist: (product: Product) => void;
  onAskAI: (query: string) => void;
  isWishlisted: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  currency,
  theme,
  language,
  onAddToCart,
  onToggleWishlist,
  onAskAI,
  isWishlisted
}) => {
  if (!isOpen || !product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || product.material);
  const [isAdded, setIsAdded] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const isLight = theme === 'light';

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2200);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Container */}
      <div className={`relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl z-10 border my-auto transition-all backdrop-blur-2xl ${
        isLight ? 'bg-[#fcfaf6] border-zinc-200 text-zinc-900' : 'bg-[#050B14]/95 border-[rgba(224,216,192,0.2)] text-[#E0D8C0]'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#050B14]/60 text-white/80 hover:text-white hover:bg-[#050B14]/90 transition-colors backdrop-blur-md border border-[rgba(224,216,192,0.2)]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[85vh] overflow-y-auto">
          {/* Left: High-Resolution Product Imagery & Thumbnails */}
          <div className="p-6 flex flex-col justify-between bg-zinc-950/40 border-b md:border-b-0 md:border-r border-[rgba(224,216,192,0.12)]">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black/50 mb-4 flex items-center justify-center border border-[rgba(224,216,192,0.15)] group">
              <img 
                src={product.images[activeImageIndex] || product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#C5A059]/30 text-[#C5A059] text-[10px] tracking-wider uppercase font-semibold">
                Lotus Beach Atelier
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImageIndex === i ? 'border-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.5)]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Purchase Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Collection */}
              <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#C5A059] font-semibold">
                <span>{product.material}</span>
                <span>{product.collection.replace('-', ' ')}</span>
              </div>

              {/* Title */}
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold leading-tight text-[#E0D8C0]">
                {product.name}
              </h2>

              {/* Price & Guarantee */}
              <div className="flex items-baseline gap-3">
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#C5A059]">
                  {formatPrice(product.priceUSD, currency)}
                </span>
                {product.originalPriceUSD && (
                  <span className="text-sm text-zinc-500 line-through">
                    {formatPrice(product.originalPriceUSD, currency)}
                  </span>
                )}
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-medium">
                  {t.product.inStock}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#E0D8C0]/85 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-zinc-300">{t.product.selectSize}</span>
                    <button 
                      onClick={() => onAskAI(`What is the sizing recommendation for ${product.name}?`)} 
                      className="text-[11px] text-[#C5A059] underline"
                    >
                      Sizing Guide & Assistance
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          selectedSize === size
                            ? 'border-[#C5A059] bg-[#C5A059] text-[#050B14] font-bold shadow-[0_0_10px_rgba(197,160,89,0.4)]'
                            : 'border-[rgba(224,216,192,0.15)] bg-black/30 text-[#E0D8C0]/80 hover:border-zinc-500'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Precious Metal Option */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-medium text-zinc-300">{t.product.selectColor}</div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(col => (
                      <button
                        key={col}
                        onClick={() => setSelectedColor(col)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          selectedColor === col
                            ? 'border-[#C5A059] bg-[#C5A059]/20 text-[#C5A059] font-semibold'
                            : 'border-[rgba(224,216,192,0.15)] bg-black/30 text-zinc-400 hover:border-zinc-500'
                        }`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Artisan Specs */}
              {product.details && (
                <div className="p-3.5 rounded-xl border border-[rgba(224,216,192,0.15)] bg-[#050B14]/60 space-y-1.5 text-xs">
                  <div className="text-[10px] tracking-widest uppercase font-bold text-[#C5A059]">
                    {t.product.detailsTitle}
                  </div>
                  {product.details.goldPurity && (
                    <div className="flex justify-between text-zinc-400">
                      <span>Gold Purity:</span>
                      <span className="text-[#E0D8C0]">{product.details.goldPurity}</span>
                    </div>
                  )}
                  {product.details.gemstoneOrigin && (
                    <div className="flex justify-between text-zinc-400">
                      <span>Gemstone Origin:</span>
                      <span className="text-[#E0D8C0]">{product.details.gemstoneOrigin}</span>
                    </div>
                  )}
                  {product.details.weight && (
                    <div className="flex justify-between text-zinc-400">
                      <span>Crafted Weight:</span>
                      <span className="text-[#E0D8C0]">{product.details.weight}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-zinc-400">
                    <span>Atelier:</span>
                    <span className="text-[#E0D8C0]">Lotus Beach Hotel, Marmaris</span>
                  </div>
                </div>
              )}
            </div>

            {/* Actions: Add to Bag, Wishlist, WhatsApp Inquiry */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-[#C5A059] text-[#050B14] font-cinzel font-bold text-xs uppercase tracking-widest hover:bg-[#d8b56f] hover:shadow-[0_0_25px_rgba(197,160,89,0.5)] transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-950" />
                      <span>{t.product.addedToBag}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t.product.addToBag}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3.5 rounded-xl border transition-colors flex items-center justify-center ${
                    isWishlisted 
                      ? 'border-rose-500 bg-rose-500/20 text-rose-400' 
                      : 'border-[rgba(224,216,192,0.2)] bg-black/30 hover:border-[#C5A059] text-zinc-400'
                  }`}
                  aria-label="Toggle Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={handleShare}
                  className="p-3.5 rounded-xl border border-[rgba(224,216,192,0.2)] bg-black/30 hover:border-[#C5A059] text-zinc-400 hover:text-white transition-colors"
                  aria-label="Share Piece"
                >
                  {copiedShare ? <Check className="w-5 h-5 text-emerald-400" /> : <Share2 className="w-5 h-5" />}
                </button>
              </div>

              {/* Direct WhatsApp Consultation */}
              <a
                href={`https://wa.me/905352795176?text=${encodeURIComponent(`Hello Mr. Parvin, I am interested in inquiring about ${product.name} (Ref: ${product.id}) at Aksoy Jewels Marmaris.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-emerald-600/40 bg-emerald-950/30 hover:bg-emerald-950/60 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Inquire via WhatsApp with Master Jeweler</span>
              </a>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-zinc-400 text-center">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Certificate of Authenticity</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-[#C5A059]" />
                  <span>Insured Global Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RefreshCw className="w-4 h-4 text-[#C5A059]" />
                  <span>Lifetime Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
