import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '336px',
  padding: 24,
  boxShadow: '0 0 0 1px $colors$grayW8',
  borderRadius: '8px',
})

export const Title = styled('h4', {
  marginBottom: '8px',

  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray1',
})

export const Paragraph = styled('p', {
  maxWidth: '215px',
  marginBottom: 24,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '20px',
  color: '$grayW4',
})
