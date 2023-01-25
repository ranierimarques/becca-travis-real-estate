import { styled } from 'stitches.config'

export const Title = styled('h3', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '48px',
  color: '$magenta6',

  textAlign: 'center',

  marginBottom: 28,

  '@bp4': {
    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp2': {
    fontSize: '22px',
    lineHeight: '32px',
  },
  '@bp1': {
    fontSize: '20px',
  },
})

export const Community = styled('span', {
  textTransform: 'capitalize',
})

export const Houses = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 32,

  '@bp5': {
    gap: 24,
  },
  '@bp4': {
    gridTemplateColumns: '1fr 1fr',
    gap: 32,
    width: '100%',
  },
  '@bp2': {
    gridTemplateColumns: '1fr',
    gap: 24,
  },

  variants: {
    loadedMore: {
      false: {
        '@bp4': {
          '& > li:nth-child(n+5)': {
            display: 'none',
          },
        },
        '@bp2': {
          '& > li:nth-child(n+4)': {
            display: 'none',
          },
        },
      },
    },
  },
})

export const Container = styled('div', {
  width: '100%',

  position: 'relative',
})

export const OverlayWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',

  width: '100%',

  padding: '197px 0px 112px',

  position: 'absolute',
  bottom: '-15px', // Testimonial Box Shadow Spread + 8px for safe zone

  pointerEvents: 'none',

  zIndex: 1,
})

export const Overlay = styled('div', {
  width: '100vw',
  height: '100%',

  position: 'absolute',
  top: 0,

  background: `linear-gradient(180deg,
    rgba(255, 255, 255, 0) 47.4%,
    rgba(255, 255, 255, 0.7) 75.52%,
    rgba(255, 255, 255, 1) 90%,
    rgba(255, 255, 255, 1) 100%)`,
})
