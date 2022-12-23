import { styled } from 'stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  maxWidth: 1072,
  margin: '0 auto 120px',
})

export const Title = styled('h3', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '48px',
  color: '#58243C',

  marginBottom: 28,
})

export const Houses = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 32,
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 32,

  position: 'relative',

  scrollMarginTop: 32,

  variants: {
    resize: {
      false: {
        '& ul > li:nth-child(n+3)': {
          display: 'none',
        },
      },
    },
  },
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
