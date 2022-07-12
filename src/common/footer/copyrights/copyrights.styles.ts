import { styled } from 'stitches.config'
import { Heart as HeartSvg } from '../svgs'

export const MadeBy = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: 4,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '32px',
  color: '$black',
})

export const Link = styled('a', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '32px',
  color: '#F6F6F8',

  '&:hover': {
    textDecoration: 'underline',
  },
})

export const Heart = styled(HeartSvg, {
  filter: 'drop-shadow(0px 0px 10px rgba($colors$tangerine1Rgb, 0.5))',
  margin: '0 4px',
})

export const Copyright = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '32px',
  color: '#F6F6F8',
})
