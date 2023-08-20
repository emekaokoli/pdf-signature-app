export const formatCurrency = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
});

export const formatDate = new Intl.DateTimeFormat('en-NG', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
