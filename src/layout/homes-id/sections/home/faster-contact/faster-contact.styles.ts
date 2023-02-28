import { styled } from 'stitches.config'

export const Container = styled('div', {
  gridArea: 'contact',

  marginTop: 32,

  width: '100%',
  height: 'fit-content',
  padding: 24,
  boxShadow: '0 0 0 1px $colors$grayW8',
  borderRadius: '8px',

  '@bp4': {
    boxShadow: 'none',
    marginTop: 0,
    padding: 0,
  },
  '@bp2': {
    px: 24,
  },
  '@bp1': {
    px: 16,
  },
})

export const Title = styled('h4', {
  marginBottom: '8px',

  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray1',

  '@bp4': {
    display: 'none',
  },
})

export const Paragraph = styled('p', {
  maxWidth: '215px',
  marginBottom: 24,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '20px',
  color: '$grayW4',

  '@bp4': {
    display: 'none',
  },
})
