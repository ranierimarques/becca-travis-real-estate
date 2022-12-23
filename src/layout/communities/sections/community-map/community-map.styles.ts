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

  marginBottom: 28,
})

export const Community = styled('span', {
  textTransform: 'capitalize',
})
