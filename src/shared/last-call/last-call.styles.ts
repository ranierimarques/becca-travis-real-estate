import { css, styled } from 'stitches.config'

export const Section = styled('section', {
  margin: '0 auto',
  maxWidth: '1072px',
  padding: '120px 0'
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  
  position: 'relative',

  padding: '86px 0 86px 63px',
  background: '$magenta9',
  borderRadius: '24px',
})

export const Title = styled('h3', {
  maxWidth: '262px',
  marginBottom: '16px',

  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '46px',
  color: '$offWhite2',
})

export const Paragraph = styled('p', {
  maxWidth: '237px',
  marginBottom: '56px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '30px',
  color: '#E3E5E8',
})

export const SvgStyles = css({
  display: 'block',
})