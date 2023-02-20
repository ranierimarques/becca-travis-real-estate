export function formatToPercent(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumSignificantDigits: 4,
  }).format(amount)
}
