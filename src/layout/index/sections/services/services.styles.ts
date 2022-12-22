import { styled } from 'stitches.config'

export const Title = styled('h2', {
  marginTop: '8px',

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const Description = styled('p', {
  marginTop: '16px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const Cards = styled('div', {
  marginTop: '48px',

  display: 'flex',
  gap: '32px',
})
