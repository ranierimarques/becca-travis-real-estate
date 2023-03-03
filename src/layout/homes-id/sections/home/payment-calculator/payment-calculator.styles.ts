import { styled } from 'stitches.config'

export const Container = styled('div', {
  gridArea: 'calculator',

  height: 'fit-content',

  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 24,

  padding: '24px',
  boxShadow: '0 0 0 1px $colors$grayW8',
  // border: '1px solid $colors$grayW8',
  borderRadius: '8px',

  marginTop: 32,

  '@bp4': {
    marginTop: 0,
    mb: 64,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `
      'title inputs'
      'graphic inputs'
    `,
  },
  '@bp2': {
    margin: '0 24px 80px',
    gridTemplateColumns: '1fr',
    gridTemplateAreas: `
      'title'
      'graphic'
      'inputs'
    `,
    gap: 32,
  },
  '@bp1': { margin: '0 16px 64px' },
})

export const Title = styled('h4', {
  alignSelf: 'flex-start',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray1',
  whiteSpace: 'nowrap',

  '@bp4': {
    gridArea: 'title',
    fontSize: '20px',
  },
  '@bp1': {
    fontSize: '18px',
    lineHeight: '26px',
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
