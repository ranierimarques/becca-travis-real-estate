import NextLink from 'next/link'
import { styled } from 'stitches.config'

export const Link = styled(NextLink, {
  display: 'flex',
  gap: 8,

  overflow: 'hidden',
  background: '$white',

  height: '84px',
  width: '262px',

  borderRadius: '4px',
  boxShadow: '0 0 0 1px $colors$grayW9, 0 0 25px rgba($colors$blackRgb, 0.08)',

  cursor: 'pointer',

  '&:hover': {},
  '&:focus-within:not(:focus)': {},
  '&:focus-visible': {
    outline: '4px solid $colors$magenta2',
    outlineOffset: 4,
  },
})

export const Price = styled('span', {
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '21px',
  color: '$gray1',

  margin: '8px 0 6px',
})

export const Status = styled('div', {
  borderRadius: 1,

  width: 4,
  height: 4,
  position: 'absolute',

  top: 4,
  right: 4,

  variants: {
    status: {
      Active: { background: '$green1' },
      'Active Under Contract': { background: '$green1' },
      'Coming Soon': { background: '$yellow2' },
      Pending: { background: '$yellow2' },
      Hold: { background: '$yellow2' },
      Closed: { background: '$red2' },
      Expired: { background: '$red2' },
      Canceled: { background: '$red2' },
    },
  },
})

export const Info = styled('div', {
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '10px',
  color: '$gray3',

  '& span': {
    fontWeight: 400,
    color: '$gray4',
  },
})
