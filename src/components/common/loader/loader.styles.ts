import { keyframes, styled } from 'stitches.config'

const bblFadInOut = keyframes({
  '0%, 80%, 100%': {
    boxShadow: '0 2.5em 0 -1.3em',
  },

  '40%': {
    boxShadow: '0 2.5em 0 0',
  },
})

export const Loader = styled('span', {
  borderRadius: '50%',
  width: '2em',
  height: '2em',

  color: '#FFF',
  fontSize: '5px',
  position: 'relative',
  textIndent: '-9999em',
  transform: 'translateZ(0)',

  animation: `-0.16s ${bblFadInOut} 1.5s infinite ease-in-out`,
  animationFillMode: 'both',

  '&::before': {
    content: '',
    position: 'absolute',
    top: '0',

    left: '-3.5em',

    borderRadius: '50%',
    width: '2em',
    height: '2em',

    animation: `-0.32s ${bblFadInOut} 1.5s infinite ease-in-out`,
    animationFillMode: 'both',
  },

  '&::after': {
    content: '',
    position: 'absolute',
    top: '0',

    left: '3.5em',

    borderRadius: '50%',
    width: '2em',
    height: '2em',

    animation: `${bblFadInOut} 1.5s infinite ease-in-out`,
    animationFillMode: 'both',
  },
})
