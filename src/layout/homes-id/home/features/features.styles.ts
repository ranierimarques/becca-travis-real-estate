import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 60,

  margin: '64px 0 120px',
})

export const Title = styled('h3', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '#33303E',
})

export const Feature = styled('span', {
  maxWidth: '90px',

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#586474',
})

export const Value = styled('span', {
  maxWidth: '82px',
  textAlign: 'end',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#586474',
})
