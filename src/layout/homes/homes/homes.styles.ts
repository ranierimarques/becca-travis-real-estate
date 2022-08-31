import { styled } from 'stitches.config'

export const Container = styled('div', {
  maxWidth: '1072px',
  margin: '80px auto',
})

export const Houses = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 32,
})
