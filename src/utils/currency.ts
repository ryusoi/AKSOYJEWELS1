import { Currency } from '../types';

export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number; name: string }> = {
  USD: { symbol: '$', rate: 1.0, name: 'US Dollar' },
  EUR: { symbol: '€', rate: 0.92, name: 'Euro' },
  TRY: { symbol: '₺', rate: 38.5, name: 'Turkish Lira' },
  GBP: { symbol: '£', rate: 0.78, name: 'British Pound' },
  AED: { symbol: 'AED ', rate: 3.67, name: 'UAE Dirham' },
};

export function formatPrice(priceUSD: number, currency: Currency): string {
  const info = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const converted = priceUSD * info.rate;
  
  if (currency === 'TRY') {
    return `${info.symbol}${Math.round(converted).toLocaleString()}`;
  }
  if (currency === 'AED') {
    return `${info.symbol} ${Math.round(converted).toLocaleString()}`;
  }
  return `${info.symbol}${Math.round(converted).toLocaleString()}`;
}
