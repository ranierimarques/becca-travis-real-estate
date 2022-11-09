type variantOptionsType = {
  short: Intl.DateTimeFormatOptions
  long: Intl.DateTimeFormatOptions
  full: Intl.DateTimeFormatOptions
}

const variantOptions: variantOptionsType = {
  short: { year: 'numeric', month: 'short', day: 'numeric' },
  long: { year: 'numeric', month: 'long', day: 'numeric' },
  full: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: '2-digit',
  },
}

export function getDate(
  ISOString: string,
  locale: Intl.LocalesArgument,
  options: Intl.DateTimeFormatOptions | 'short' | 'long' | 'full'
) {
  const dateOptions = typeof options === 'string' ? variantOptions[options] : options

  return new Date(ISOString).toLocaleDateString(locale, dateOptions)
}
