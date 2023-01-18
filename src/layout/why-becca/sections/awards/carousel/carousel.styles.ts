import { keyframes, styled } from 'stitches.config'

const slide = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(-100%)',
  },
})

export const Container = styled('div', {
  width: '100%',
  background: '$tangerine10',
})

export const SliderWrapper = styled('div', {
  height: '280px',

  width: 'min(1920px, 100%)',
  margin: '0 auto',

  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',

  '@bp4': {
    height: '174px',
  },
  '@bp2': {
    height: '148px',
  },
  '@bp1': {
    height: '124px',
  },
})

export const AwardsWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 40,

  animation: `${slide} 15s linear infinite reverse`,

  padding: '0 20px',

  '@bp4': {
    gap: 24,
    padding: '0 12px',
  },
  '@bp2': {
    gap: 20,
    padding: '0 10px',
  },
  '@bp1': {
    gap: 18,
    padding: '0 9px',
  },
})

export const Award = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 200,

  padding: 36,

  background: '$white',
  borderRadius: '16px',

  '@bp4': {
    width: '124px',
    height: '124px',
    padding: 22,
  },
  '@bp2': {
    width: '104px',
    height: '104px',
    padding: 18,
  },
  '@bp1': {
    width: '88px',
    height: '88px',
    padding: 16,
  },
})

export const AwardsBackground = styled('div', {
  width: '100%',
  height: '100%',
  background: `linear-gradient(90deg, #F5DED0 -15.59%, #F5DED0 -0.13%, rgba(245, 222, 208, 0) 50.45%, #F5DED0 100.33%, #F5DED0 113.79%)`,

  position: 'absolute',
  top: 0,

  zIndex: 10,
})
