import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  marginTop: 120,
})

export const Title = styled('h3', {
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$gray1',
})

export const Properties = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 32,
})
