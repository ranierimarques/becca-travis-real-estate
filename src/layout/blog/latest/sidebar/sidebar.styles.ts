import { styled } from 'stitches.config'

export const Title = styled('span', {
  display: 'block',

  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '16px',
  color: '$magenta6',

  marginBottom: 24,
})

export const DropdownWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,

  padding: '8px 20px',

  width: 276,

  background: '$grayW10',
  borderRadius: 8,
  boxShadow: '0 0 0 1px $colors$grayW9',

  cursor: 'pointer',
})

// TODO: Interactive, font color and states...
export const DropdownInput = styled('input', {
  flex: 1,

  fontWeight: 600,
  fontSize: 14,
  lineHeight: '30px',
  color: '$gray5',
  caretColor: '$magenta8',
  letterSpacing: '-2%',

  cursor: 'pointer',

  '&::placeholder': {
    fontWeight: 500,
    color: '$grayW5',
  },
})

export const List = styled('li', {
  '& + &': {
    marginTop: 8,
  },
})

export const CategoryButton = styled('button', {
  width: '100%',

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$gray5',
  textAlign: 'start',

  padding: '12px 16px',

  borderRadius: '8px',
  cursor: 'pointer',

  variants: {
    active: {
      true: {
        color: '$magenta1',
        background: 'rgba($colors$tangerine5Rgb, 0.6)',
        cursor: 'initial',
      },
    },
  },
})
