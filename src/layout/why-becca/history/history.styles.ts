import { styled } from 'stitches.config'
import { PathSvg } from './svgs'

export const Section = styled('section', {
  maxWidth: '1072px',
  margin: '0 auto',
  padding: '155px 0 160px',
})

export const Hat = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  marginBottom: 8,

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '0.03em',
  color: '$magenta1',
})

export const Title = styled('h1', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',
})

export const Paragraph = styled('p', {
  maxWidth: '458px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const Becca = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const OurHistory = styled('div', {
  position: 'relative',

  padding: '160px 0 160px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Family = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Path = styled(PathSvg, {
  position: 'absolute',
  top: -16,
  left: 60,

  zIndex: 1,
})

export const Path2 = styled(PathSvg, {
  position: 'absolute',
  bottom: -9,
  right: 60,

  transform: 'scaleX(-1)',
  zIndex: 1,
})

export const Line = styled('div', {
  width: '16px',
  height: '1px',
  background: '$magenta1',
})
