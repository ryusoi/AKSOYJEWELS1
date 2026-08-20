import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Sparkles, Check } from 'lucide-react';
import { Product, Currency, Theme } from '../types';
import { formatPrice } from '../utils/currency';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  theme: Theme;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  theme,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  isWishlisted
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAddedRecently, setIsAddedRecently] = useState(false);
  const isLight = theme === 'light';

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 2000);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(product);
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border artistic-glass-card ${
        isLight 
          ? 'bg-white border-zinc-200 hover:border-[#C5A059] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(197,160,89,0.15)]' 
          : 'bg-[#050B14]/80 border-[rgba(224,216,192,0.12)] hover:border-[#C5A059] shadow-[0_4px_20px_rgba(5,11,20,0.6)] hover:shadow-[0_12px_30px_rgba(197,160,89,0.25)]'
      }`}
      id={`product-card-${product.id}`}
    >
      {/* Image Container with Hover Alternate Angle */}
      <div 
        className="relative aspect-square w-full overflow-hidden bg-zinc-950/40"
        onMouseEnter={() => {
          if (product.images.length > 1) setCurrentImageIndex(1);
        }}
        onMouseLeave={() => setCurrentImageIndex(0)}
      >
        <img 
          src={product.images[currentImageIndex] || product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Luxury Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.bestSeller && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059] text-[#050B14] text-[9px] font-bold tracking-widest uppercase shadow-sm">
              Best Seller
            </span>
          )}
          {product.newArrival && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#050B14]/90 text-[#E0D8C0] border border-[rgba(224,216,192,0.3)] text-[9px] font-semibold tracking-widest uppercase backdrop-blur-md">
              New In
            </span>
          )}
          {product.featured && !product.bestSeller && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#1A3C5A]/90 text-[#E0D8C0] border border-[#1E4D6B] text-[9px] font-semibold tracking-widest uppercase backdrop-blur-md">
              Signature
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
            isWishlisted
              ? 'bg-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.6)]'
              : 'bg-[#050B14]/60 text-white/80 hover:text-white hover:bg-[#050B14]/90 border border-white/10'
          }`}
          title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button Hover Reveal */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 py-2 px-3 rounded-xl bg-[#050B14]/85 backdrop-blur-md text-[#E0D8C0] text-xs font-semibold tracking-wider uppercase border border-[rgba(224,216,192,0.2)] hover:border-[#C5A059] hover:text-[#C5A059] transition-all flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          <button
            onClick={handleAdd}
            className={`p-2 rounded-xl backdrop-blur-md transition-all ${
              isAddedRecently 
                ? 'bg-emerald-600 text-white' 
                : 'bg-[#C5A059] text-[#050B14] hover:bg-[#d8b56f]'
            }`}
            title="Add to jewelry bag"
          >
            {isAddedRecently ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex flex-col justify-between">
        <div>
          {/* Material & Stone Subtext */}
          <div className="text-[11px] text-[#C5A059] font-medium tracking-wider uppercase mb-1">
            {product.material}
          </div>

          {/* Product Title */}
          <h3 className={`font-cinzel text-sm sm:text-base font-semibold leading-snug line-clamp-2 transition-colors ${
            isLight ? 'text-zinc-900 group-hover:text-[#996515]' : 'text-[#E0D8C0] group-hover:text-[#C5A059]'
          }`}>
            {product.name}
          </h3>

          {/* Stone / Gemstone spec */}
          <p className="text-xs text-zinc-400 font-light mt-1 truncate">
            {product.stone} {product.carat ? `• ${product.carat}` : ''}
          </p>
        </div>

        {/* Pricing & Add Trigger */}
        <div className="mt-4 pt-3 border-t border-[rgba(224,216,192,0.1)] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className={`font-serif-luxury text-lg sm:text-xl font-bold ${
              isLight ? 'text-zinc-900' : 'text-[#E0D8C0]'
            }`}>
              {formatPrice(product.priceUSD, currency)}
            </span>

            {product.originalPriceUSD && (
              <span className="text-xs text-zinc-500 line-through font-light">
                {formatPrice(product.originalPriceUSD, currency)}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full transition-all flex items-center gap-1 ${
              isAddedRecently 
                ? 'bg-emerald-500/20 text-emerald-400' 
                : 'text-[#C5A059] hover:bg-[#C5A059]/10'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Added</span>
              </>
            ) : (
              <span>+ Add</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
