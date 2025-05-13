export const formatPrice = (price: number, currency: string = 'USD'): string => {
  if (price === 0) {
    return 'Free';
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatDistance = (distance: number): string => {
  return `${distance} mi`;
};