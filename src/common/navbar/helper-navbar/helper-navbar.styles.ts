import { styled } from 'stitches.config'

export const FirstNav = styled('nav', {
  padding: '12px 0',
  background: 'rgba(229, 172, 138, 0.4)',
})

export const NavContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1072px',
  margin: '0 auto',
})

export const Language = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',


  color: '#9D446E',
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: '400'
})

export const OptionsList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
  
  '& a': {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',

    color: '#9D446E',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400'
  }
})