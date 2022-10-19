import { styled } from 'stitches.config'

export const Title = styled('span', {
  display: 'block',

  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '16px',
  color: '$magenta6',

  marginBottom: 24,
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
