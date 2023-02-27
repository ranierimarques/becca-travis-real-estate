export function formatToPercent(amount: number) {
  return `${amount.toString().match(/^-?\d+(?:\.\d{0,2})?/)?.[0] ?? '0'}%`
}
