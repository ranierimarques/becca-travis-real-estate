import { styled } from 'stitches.config'
import { CirclesSvg } from './svgs'

export const MissOut = styled('li', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$offWhite2',
  overflow: 'hidden',

  border: '1px solid $grayW8',
  borderRadius: '8px',

  padding: '32px 24px',

  zIndex: 0,
})

export const Circles = styled(CirclesSvg, {
  position: 'absolute',
  inset: 0,
  zIndex: -1,
})

export const MissTitle = styled('h4', {
  marginBottom: 24,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$gray1',
})

export const MissDescription = styled('p', {
  marginBottom: 32,
  maxWidth: '254px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  textAlign: 'center',
  color: '$gray5',
})
