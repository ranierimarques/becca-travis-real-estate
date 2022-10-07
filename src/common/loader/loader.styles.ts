import { keyframes, styled } from 'stitches.config'

const rotator = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(270deg)',
  },
})

const dash = keyframes({
  '0%': {
    strokeDashoffset: '187',
  },
  '50%': {
    strokeDashoffset: '46.75',
    transform: 'rotate(135deg)',
  },
  '100%': {
    strokeDashoffset: '187',
    transform: 'rotate(450deg)',
  },
})

export const LoaderSvg = styled('svg', {
  animation: `${rotator} 1.4s linear infinite`,
  width: '100%',
  height: '100%',
})

export const Circle = styled('circle', {
  strokeDasharray: '187',
  strokeDashoffset: '0',
  transformOrigin: 'center',
  animation: `${dash} 1.4s ease-in-out infinite`,
  stroke: 'white',
})
