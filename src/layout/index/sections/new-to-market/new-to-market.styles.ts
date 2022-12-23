import NextLink from 'next/link'
import { styled } from 'stitches.config'

export const Title = styled('h2', {
  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const ViewAll = styled(NextLink, {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$magenta9',

  '&:hover': {
    textDecorationLine: 'underline',
    textUnderlineOffset: '3px',
  },
  '&:focus': {
    textDecoration: 'none',
    outline: '2px solid rgba($colors$magenta9Rgb, 0.5)',
    outlineOffset: 2,
  },
})

export const Houses = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 32,
})
