import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',

  '@bp4': {
    flexDirection: 'column',
    justifyContent: 'center',

    gap: 32,
  },
  '@bp3': {
    gap: 32,
  },

  '@bp2': {
    alignItems: 'center',
  },

  '@bp1': {
    alignItems: 'flex-start',
  },
})

export const TextContainer = styled('div', {
  '@bp4': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    order: 2,
  },
  '@bp2': {
    alignItems: 'flex-start',
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
    maxWidth: '444px',
    fontSize: '14px',
  },

  '@bp4': {
    maxWidth: '608px',

    fontSize: '14px',
    textAlign: 'center',
    lineHeight: '26px',
  },
  '@bp3': {
    maxWidth: '439px',
  },
  '@bp2': {
    maxWidth: '288px',

    textAlign: 'left',
  },
})

export const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: 520,
  height: 341,

  '@bp5': {
    maxWidth: 431,
    height: 282,
  },

  '@bp3': {
    maxWidth: 360,
    height: 236,
  },

  '@bp2': {
    maxWidth: 316,
    height: 208,

    marginLeft: 10,
  },

  '@bp1': {
    maxWidth: 278,
    height: 182,
  },

  borderRadius: '8px',

  '&::before': {
    content: `''`,
    position: 'absolute',
    top: '16px',
    left: '16px',
    width: '100%',
    height: '100%',
    border: '2px solid $magenta3',
    borderRadius: 'inherit',
    zIndex: -1,

    '@bp4': {
      top: '14px',
      left: '-16px',
    },

    '@bp3': {
      top: '14px',
      left: '-10px',
    },
  },
})
