import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '80px 0',

  '@bp5': {
    flexDirection: 'column',
    gap: 48,

    paddingTop: 24,
    paddingBottom: 0,
  },

  '@bp4': {
    paddingTop: 64,
  },
  '@bp2': {
    paddingTop: 40,
  },
})

export const Title = styled('h1', {
  marginBottom: 24,

  maxWidth: '428px',

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp5': {
    textAlign: 'center',

    maxWidth: '756px',
  },
  '@bp2': {
    fontSize: '30px',
    lineHeight: '42px',

    maxWidth: 'initial',
  },
  '@bp1': {
    fontSize: '28px',
    lineHeight: '40px',
    maxWidth: '288px',
  },
})

export const Paragraph = styled('p', {
  marginBottom: 48,
  maxWidth: '380px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp5': {
    textAlign: 'center',

    maxWidth: '598px',

    marginBottom: 32,
  },
  '@bp2': {
    lineHeight: '26px',

    marginBottom: 24,

    maxWidth: 'initial',
  },
  '@bp1': {
    fontSize: '14px',

    marginBottom: 32,

    maxWidth: '288px',
  },
})

export const KeepExploring = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 8,

  padding: 0,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$magenta6',

  opacity: '60%',

  backgroundColor: 'transparent',

  '&:hover': {
    opacity: '100%',
  },
})
