import { styled } from 'stitches.config'

export const Title = styled('h3', {
  maxWidth: '520px',

  color: '$magenta6',
  fontSize: '36px',
  fontWeight: '500',
  lineHeight: '50px',

  marginBottom: 16,
})

export const Paragraph = styled('h3', {
  maxWidth: '450px',

  color: '$gray2',
  fontSize: '16px',
  fontWeight: '400',

  lineHeight: '28px',
})

export const Cards = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 32,

  paddingBottom: 180,
})

export const Card = styled('div', {
  width: 244,
  height: 316,

  padding: 32,

  background: '$white',
  borderRadius: 14,

  boxShadow: '0px 24px 112px 0px rgba(29, 22, 18, 0.05)',
})

export const CardTitle = styled('h5', {
  margin: '24px 0 8px',

  color: '$gray2',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '30px',
})

export const CardParagraph = styled('p', {
  color: '$gray4',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '24px',
})

export const Skip = styled('button', {
  padding: 4,

  borderRadius: 999,
  border: '1.5px solid $magenta2',

  color: '$magenta2',

  '&:disabled': {
    borderColor: '$grayW9',
    color: '$grayW9',
  },

  variants: {
    direction: {
      left: {
        transform: 'rotate(180deg)',
      },
    },
  },
})
