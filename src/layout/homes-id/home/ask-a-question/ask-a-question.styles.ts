import { styled } from 'stitches.config'

export const Section = styled('section', {
  maxWidth: '1072px',
  margin: '0 auto',
})

export const Title = styled('h2', {
  marginBottom: '16px',

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$gray1',
})

export const Container = styled('div', {
  boxShadow: '0 0 0 1px $colors$grayW8',
  borderRadius: '8px',
  padding: '32px',
})
