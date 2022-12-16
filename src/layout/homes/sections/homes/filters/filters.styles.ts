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
})

export const Text = styled('span', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
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

  transition: 'filter 150ms ease, box-shadow 150ms ease',

  '&:focus': {
    zIndex: 2,
    boxShadow: 'inset 0 0 0 1px $colors$magenta3, 0 0 0 1px $colors$magenta3',
  },

  variants: {
    active: {
      true: {
        background: '$grayW3',
        boxShadow: 'inset 0 0 0 1px $colors$grayW3',
        color: '$white',

        '&:hover': {
          filter: 'brightness(0.85)',
        },
      },
      false: {
        '&:hover': {
          background: 'rgba($grayW9Rgb, 0.5)',
        },
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

export const Input = styled('input', {
  flex: 1,

  width: 280,
  height: 48,

  padding: '0 16px 0 20px',

  fontWeight: 500,
  fontSize: 14,
  lineHeight: '18px',
  color: '$gray1',
  caretColor: '$magenta8',

  '&::placeholder': {
    fontWeight: 400,
    color: '$gray3',
  },
})