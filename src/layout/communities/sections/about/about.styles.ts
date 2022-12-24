import { styled } from 'stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,

  maxWidth: '1072px',
  margin: '0 auto 160px',

  scrollMarginTop: 32,
})

export const Title = styled('h3', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '48px',
  textAlign: 'center',
  color: '#58243C',
})

export const Community = styled('span', {
  textTransform: 'capitalize',
})

export const Paragraph = styled('p', {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '32px',
  color: '#4E4B59',
})
