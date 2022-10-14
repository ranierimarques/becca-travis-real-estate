import { styled } from 'stitches.config'

export const Container = styled('div', {
  margin: '20px 16px',
})

export const HomesForSale = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.02em',
  color: '$magenta6',
})

export const LastUpdate = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '-0.02em',
  color: '$grayW5',
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$grayW4',

  borderRadius: '5px',
  padding: '10px 16px',
  boxShadow: 'inset 0 0 0 1px $colors$grayW4',

  variants: {
    active: {
      true: {
        background: '$grayW3',
        boxShadow: 'inset 0 0 0 1px $colors$grayW3',
        color: '$white',
      },
    },
    borderDirection: {
      left: {
        borderRadius: '5px 0 0 5px',
      },
      right: {
        borderRadius: '0 5px 5px 0',
      },
    },
  },
})
