type variantOptionsType = {
  short: Intl.DateTimeFormatOptions
  long: Intl.DateTimeFormatOptions
}

const variantOptions = {
  short: { year: 'numeric', month: 'short', day: 'numeric' },
  long: { year: 'numeric', month: 'long', day: 'numeric' },
} as variantOptionsType

export function getDate(
  ISOString: string,
  locale: Intl.LocalesArgument,
  options: Intl.DateTimeFormatOptions | 'short' | 'long'
) {
  const dateOptions = typeof options === 'string' ? variantOptions[options] : options

  return new Date(ISOString).toLocaleDateString(locale, dateOptions)
}
