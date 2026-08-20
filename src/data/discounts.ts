import { Promotion } from '../types';

export const PROMOTIONS_DATABASE: Promotion[] = [
  {
    code: 'MARMARIS2026',
    active: true,
    discountType: 'percentage',
    value: 20,
    expiresAt: '2026-12-31',
    minimumPurchaseUSD: 200,
    description: 'Exclusive 20% privilege savings for Mediterranean visitors & online patrons.'
  },
  {
    code: 'LOTUS15',
    active: true,
    discountType: 'percentage',
    value: 15,
    expiresAt: '2026-10-31',
    minimumPurchaseUSD: 100,
    description: '15% courtesy savings in celebration of Lotus Beach Hotel Marmaris partnership.'
  },
  {
    code: 'AKSOYGOLD',
    active: true,
    discountType: 'percentage',
    value: 10,
    expiresAt: '2026-12-31',
    minimumPurchaseUSD: 0,
    description: '10% welcome privilege across all 18k Solid Gold & Diamond collections.'
  }
];

export function verifyDiscountCode(code: string, cartTotalUSD: number): { valid: boolean; promotion?: Promotion; message: string; discountAmountUSD: number } {
  const cleanCode = code.trim().toUpperCase();
  const found = PROMOTIONS_DATABASE.find(p => p.code.toUpperCase() === cleanCode);

  if (!found) {
    return {
      valid: false,
      message: 'No verified active discount code found with this name.',
      discountAmountUSD: 0
    };
  }

  if (!found.active) {
    return {
      valid: false,
      message: 'This promotional code has expired.',
      discountAmountUSD: 0
    };
  }

  if (cartTotalUSD < found.minimumPurchaseUSD) {
    return {
      valid: false,
      promotion: found,
      message: `Minimum purchase of $${found.minimumPurchaseUSD} required to apply ${found.code}.`,
      discountAmountUSD: 0
    };
  }

  const discountAmount = found.discountType === 'percentage' 
    ? (cartTotalUSD * found.value) / 100 
    : found.value;

  return {
    valid: true,
    promotion: found,
    message: `${found.code} applied: ${found.description}`,
    discountAmountUSD: discountAmount
  };
}
