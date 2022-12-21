import { styled } from 'stitches.config'

export const ImageContainer = styled('div', {
  position: 'relative',
  width: 520,
  height: 341,

  borderRadius: '8px',

  '&::before': {
    content: `''`,
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '100%',
    height: '100%',
    border: '2px solid $magenta3',
    borderRadius: 'inherit',
    zIndex: -1,
  },
})

export const Title = styled('h2', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',
})

export const Paragraph = styled('p', {
  maxWidth: '458px',

  marginBottom: 24,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})
