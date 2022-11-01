import { styled } from 'stitches.config'

export const Section = styled('section', {
  background: 'rgba($colors$tangerine5Rgb, 0.3)',
})

export const Container = styled('div', {
  maxWidth: '1072px',
  margin: '0 auto',
  padding: '80px 0 114px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Title = styled('h1', {
  margin: '8px 0 32px',

  maxWidth: '345px',
  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const Skills = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: 24,

  marginBottom: '24px',
})

export const Skill = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: 10,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$green4',
})

export const Span = styled('span', {
  display: 'block',
  maxWidth: '300px',

  marginTop: '20px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const ImageContainer = styled('div', {
  position: 'relative',
  lineHeight: 0,

  zIndex: 0,
})

export const ImageDescription = styled('span', {
  display: 'inline-block',

  position: 'absolute',
  bottom: -34,
  right: 0,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '18px',
  color: '$gray2',
})
