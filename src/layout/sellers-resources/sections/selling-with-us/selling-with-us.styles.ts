import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@bp4': {
    flexDirection: 'column',
    gap: 32,
  },
})

export const Title = styled('h1', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',

  '@bp4': {
    lineHeight: '32px',
  },
  '@bp2': {
    fontSize: '22px',
  },
  '@bp1': {
    fontSize: '20px',
  },
})

export const Paragraph = styled('p', {
  marginBottom: 40,

  maxWidth: '368px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp4': {
    maxWidth: '512px',
    lineHeight: '26px',

    textAlign: 'center',
  },
  '@bp1': {
    fontSize: '14px',
  },
})

export const ImageDescription = styled('div', {
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '18px',
  textAlign: 'right',
  color: '$gray2',
})
