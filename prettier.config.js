module.exports = {
  endOfLine: 'auto',
  arrowParens: 'avoid',
  singleQuote: true,
  tabWidth: 2,
  semi: false,
  printWidth: 90,
  importOrder: [
    '^(next/(.*)$)|^(next$)',
    '^(react/(.*)$)|^(react$)',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]|^[..]',
    '^./(.*).styles',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
}
