import { styled } from 'stitches.config'

export const Title = styled('span', {
  display: 'block',

  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta1',
})

export const Description = styled('span', {
  display: 'block',

  margin: '8px 0 24px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$grayW4',
})

export const List = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 8,
  maxWidth: 'max-content',
})

export const Link = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,

  padding: '12px 28px',

  background: '$grayW10',
  boxShadow: '0 0 0 1px $colors$grayW9',
  borderRadius: '8px',

  color: '$grayW3',

  '&:hover': {
    boxShadow: '0 0 0 1px $colors$magenta1',
    color: '$magenta1',
  },
  '&:focus': {
    background: 'rgba($colors$magenta2Rgb, 0.05)',
    boxShadow: '0 0 0 4px rgba($colors$magenta1Rgb, 0.2)',
    '&:hover': {
      boxShadow: '0 0 0 1px $colors$magenta1, 0 0 0 4px rgba($colors$magenta1Rgb, 0.2)',
    },
  },

  '@bp2': {
    padding: '12px 20px',
  },

  '@bp1': {
    padding: '12px 16px',
  },
})

export const Text = styled('span', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
})
