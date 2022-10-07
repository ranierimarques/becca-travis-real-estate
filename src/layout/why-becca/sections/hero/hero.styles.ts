import { styled } from 'stitches.config'

export const Section = styled('section', {
  background: 'rgba($colors$tangerine5Rgb, 0.3)',
  padding: '80px 0 104px',
})

export const Container = styled('div', {
  maxWidth: '1072px',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Title = styled('h1', {
  marginBottom: 24,
  maxWidth: '337px',

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const Paragraph = styled('p', {
  marginBottom: 48,
  maxWidth: '368px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})
