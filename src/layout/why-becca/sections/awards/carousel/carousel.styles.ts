import { keyframes, styled } from 'stitches.config'

const slide = keyframes({
  '0%': {
    transform: 'translate3d(0, 0, 0)',
  },
  '100%': {
    transform: 'translate3d(-100%, 0, 0)',
  },
})

export const Container = styled('div', {
  height: '280px',
  background: '$tangerine10',

  display: 'flex',
  alignItems: 'center',

  overflow: 'hidden',

  position: 'relative',
})

export const AwardsWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 64,

  animation: `${slide} 40s linear infinite reverse`,

  padding: '0 20px',
})

export const Award = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '200px',
  height: '200px',

  background: '$white',
  borderRadius: '16px',
})

export const AwardsBackground = styled('div', {
  width: '100%',
  height: '100%',
  background: `linear-gradient(90deg, #F5DED0 -15.59%, #F5DED0 -0.13%, rgba(245, 222, 208, 0) 50.45%, #F5DED0 100.33%, #F5DED0 113.79%)`,

  position: 'absolute',
  top: 0,

  zIndex: 10,
})
