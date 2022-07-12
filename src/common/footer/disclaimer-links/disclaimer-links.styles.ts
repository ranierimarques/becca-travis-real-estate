import { styled } from 'stitches.config'

export const Link = styled('a', {
  position: 'relative',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$grayW9',

  '&:hover': {
    textDecoration: 'underline',
  },

  '& + &::before': {
    content: `''`,
    display: 'block',
    left: '-16px',
    top: '2px',
    background: '$white',
    position: 'absolute',
    width: '1px',
    height: '20px',
  },
})
