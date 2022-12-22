import { styled } from 'stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  maxWidth: 1072,
  margin: '0 auto 120px',
})

export const Title = styled('h3', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '48px',
  color: '#58243C',

  marginBottom: 12,
})

export const Description = styled('span', {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '32px',
  textAlign: 'center',
  color: '#4E4B59',
})
