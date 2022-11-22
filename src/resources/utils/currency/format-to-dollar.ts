export function formatToDollar(amount: number, cents = 0) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: cents,
  }).format(amount)
}
