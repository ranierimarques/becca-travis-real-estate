import { styled } from 'stitches.config'

export const FirstNav = styled('div', {
  padding: '12px 0',
  background: 'rgba(229, 172, 138, 0.4)',
})

export const NavContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: 1072,
  margin: '0 auto',
})

export const Language = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 6,


  color: '#9D446E',
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 400
})

export const OptionsList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: 32,
  
  '& a': {
    display: 'flex',
    alignItems: 'center',
    gap: 8,

    color: '#9D446E',
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 400
  }
})