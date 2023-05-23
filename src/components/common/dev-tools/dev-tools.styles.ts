import { styled } from 'stitches.config'

export const Container = styled('div', {
  position: 'fixed',
  bottom: 8,
  right: 8,
})

export const Button = styled('button', {
  padding: '8px 12px',
  color: '$white',
  borderRadius: 4,
  fontSize: 12,
  fontWeight: 'bold',
  fontFamily: 'system-ui',
  userSelect: 'none',

  variants: {
    active: {
      true: {
        background: '$green2',
      },
      false: {
        background: '$red2',
      },
    },
  },
})
