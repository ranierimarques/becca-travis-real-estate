import { styled } from 'stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,

  marginBottom: 160,
})

export const Title = styled('h3', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '48px',
  color: '#58243C',
})

export const Community = styled('span', {
  textTransform: 'capitalize',
})

export const Statistics = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: 72,
})

export const Statistic = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
})

export const Number = styled('span', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '36px',
  color: '#33303E',
})

export const Name = styled('span', {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '26px',
  color: '#4E4B59',
})
