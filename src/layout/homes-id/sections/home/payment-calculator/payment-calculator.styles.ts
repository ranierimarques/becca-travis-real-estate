import { styled } from 'stitches.config'

export const Container = styled('div', {
  gridArea: 'calculator',

  height: 'fit-content',

  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 24,

  padding: '24px',
  boxShadow: '0 0 0 1px $colors$grayW8',
  borderRadius: '8px',

  marginTop: 32,

  '@bp4': {
    marginTop: 0,
    mb: 64,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `
      'graphic inputs'
      'graphic inputs'
    `,
  },
  '@bp2': {
    margin: '0 24px 80px',
    gridTemplateColumns: '1fr',
    gridTemplateAreas: `
      'graphic'
      'inputs'
    `,
    gap: 32,
  },
  '@bp1': { margin: '0 16px 64px' },
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@bp4': {
    alignItems: 'flex-start',
  },
  '@bp2': {
    alignItems: 'center',
  },
})

export const Title = styled('h4', {
  alignSelf: 'flex-start',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray1',
  whiteSpace: 'nowrap',

  marginBottom: 24,

  '@bp4': {
    gridArea: 'graphic',
    fontSize: '20px',
  },
  '@bp1': {
    fontSize: '18px',
    lineHeight: '26px',
    marginBottom: 32,
  },
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  width: '100%',

  '@bp4': {
    gridArea: 'inputs',
  },
})
