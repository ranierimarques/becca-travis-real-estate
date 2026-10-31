import { styled } from 'stitches.config'

export const FaqSection = styled('section', { maxWidth: 900, margin: '0 auto' })
export const SearchWrap = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'end',
  gap: '8px 16px',
  margin: '0 auto 28px',
  '& label': { gridColumn: '1 / -1', color: '$gray1', fontSize: 13, fontWeight: 600 },
  '@bp2': { gridTemplateColumns: '1fr' },
})
export const SearchInput = styled('input', {
  width: '100%',
  minHeight: 48,
  padding: '0 16px',
  border: '1px solid $colors$grayW7',
  borderRadius: 8,
  background: '$white',
  color: '$gray1',
  fontFamily: 'inherit',
  fontSize: 15,
  '&:focus-visible': { outline: '2px solid $colors$magenta6', outlineOffset: 2 },
})
export const ResultCount = styled('p', {
  margin: 0,
  color: '$gray3',
  fontSize: 13,
  whiteSpace: 'nowrap',
})
export const List = styled('div', { borderTop: '1px solid $colors$grayW8' })
export const Item = styled('details', {
  borderBottom: '1px solid $colors$grayW8',
  '&[open] summary': { color: '$magenta6' },
  '&[open] > div': { animation: 'faqReveal 180ms ease-out' },
  '@media (prefers-reduced-motion: reduce)': { '&[open] > div': { animation: 'none' } },
  '@global': {
    '@keyframes faqReveal': {
      from: { opacity: 0, transform: 'translateY(-4px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
  },
})
export const Question = styled('summary', {
  position: 'relative',
  padding: '20px 38px 20px 0',
  color: '$gray1',
  cursor: 'pointer',
  fontSize: 17,
  fontWeight: 600,
  lineHeight: 1.45,
  listStyle: 'none',
  '&::-webkit-details-marker': { display: 'none' },
  '&::after': {
    content: '＋',
    position: 'absolute',
    right: 4,
    top: 18,
    color: '$magenta6',
    fontSize: 22,
    fontWeight: 400,
  },
  'details[open] &::after': { content: '−' },
  '&:focus-visible': {
    outline: '2px solid $colors$magenta6',
    outlineOffset: 2,
    borderRadius: 4,
  },
})
export const Answer = styled('div', {
  padding: '0 28px 22px 0',
  color: '$gray2',
  fontSize: 15,
  lineHeight: 1.7,
  '& p': { margin: 0 },
})
export const Sources = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px 18px',
  marginTop: 14,
  '& a': {
    color: '$magenta6',
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1.45,
    textDecoration: 'underline',
    textUnderlineOffset: 3,
  },
})
export const Empty = styled('p', { padding: 20, color: '$gray2', textAlign: 'center' })
