import { styled } from 'stitches.config'

export const Section = styled('section', {
  maxWidth: '1072px',
  margin: '0 auto',
  padding: '120px 0 40px',
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Title = styled('h1', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',
})

export const Paragraph = styled('p', {
  marginBottom: 40,

  maxWidth: '368px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
})

export const ImageDescription = styled('div', {
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '18px',
  textAlign: 'right',
  color: '#4E4B59',
})