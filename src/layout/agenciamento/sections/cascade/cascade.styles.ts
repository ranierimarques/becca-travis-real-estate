import { styled } from 'stitches.config'

export const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 96,
})

export const Title = styled('h3', {
  color: '$magenta6',
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '36px',

  marginBottom: 16,
})

export const Paragraph = styled('h3', {
  color: '$gray2',
  fontSize: '16px',
  fontWeight: '400',

  lineHeight: '28px',

  maxWidth: '460px',

  '@bp4': {
    textAlign: 'center',
    maxWidth: 'none',
  },
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@bp4': {
    flexDirection: 'column',
    gap: 32,
  },

  '@bp2': {
    gap: 40,
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@bp4': {
    alignItems: 'center',
  },
})
