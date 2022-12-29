import { styled } from 'stitches.config'

export const TextContainer = styled('div', {
  '@bp4': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    textAlign: 'center',
    order: 2,
  },
  '@bp2': {
    alignItems: 'flex-start',
    textAlign: 'start',

    paddingRight: 30,
  },
  '@bp1': {
    paddingRight: 0,
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

  '@bp5': {
    fontSize: '14px',
  },
  '@bp4': {
    maxWidth: '608px',
  },
  '@bp3': {
    maxWidth: '439px',
  },
  '@bp2': {
    maxWidth: 'initial',
  },
})

export const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: 520,

  aspectRatio: '520 / 341',

  borderRadius: '8px',

  justifySelf: 'self-end',

  '&::before': {
    content: `''`,
    position: 'absolute',
    top: '4.6920%', // 16px
    left: '3.0769%', // 16px
    width: '100%',
    height: '100%',
    border: '2px solid $magenta3',
    borderRadius: 'inherit',
    zIndex: -1,

    '@bp4': {
      left: 'auto',
      right: '3.0769%', // 16px
    },
  },

  '@bp4': {
    maxWidth: '431px',
    margin: '0 auto',
  },
  '@bp3': {
    maxWidth: '360px',
  },
  '@bp2': {
    maxWidth: 'none',
    margin: 'unset',
  },
})
