import { styled } from 'stitches.config'

export const Section = styled('section', {
  maxWidth: 1072,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('h2', {
  marginBottom: 48,

  fontWeight: 500,
  fontSize: 36,
  lineHeight: '50px',
  color: '#58243C'
})

export const Heading = styled('div', {
  width: 'fit-content',
  
  marginBottom: 8,
  padding: '8px 16px',

  background: 'rgba(157, 68, 110, 0.1)',
  borderRadius: 999,

  fontWeight: 500,
  fontSize: 14,
  lineHeight: '24px',
  color: '#CF84A7',
})

export const CommunitiesList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 32,

  '& li': {
    position: 'relative',
    width: '336px',
    height: '229px',
    background: 'linear-gradient(180deg, rgba(78, 75, 89, 0) 50%, rgba(0, 0, 0, 0.6) 100%)',
    borderRadius: 8,
    overflow: 'hidden'
  },

  '& span': {
    position: 'absolute',
    bottom: 20,
    left: 20,

    fontWeight: 600,
    fontSize: 20,
    lineHeight: '30px',
    color: '#FFFFFF',
  }
})
