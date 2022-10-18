import { styled } from 'stitches.config'
import { BackgroundSvg } from '../svgs'

export const Card = styled('div', {
  position: 'relative',

  minWidth: '366px',

  boxShadow: '0 0 0 1px rgba(227, 229, 232, 1)',

  borderRadius: '8px',

  overflow: 'hidden',

  background: 'linear-gradient(180deg, #FFFFFF 0%, #F6F6F8 100%)',
})

export const Svg = styled(BackgroundSvg, {
  position: 'absolute',
  left: 0,
  bottom: 0,
})

export const Title = styled('h4', {
  marginBottom: 8,

  fontWeight: '600',
  fontSize: '22px',
  lineHeight: '32px',
  color: '$grayW2',
})

export const Description = styled('p', {
  marginBottom: 32,
  maxWidth: '251px',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  color: '$grayW4',
})

export const Contact = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const ContactTitle = styled('h4', {
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '18px',
  color: '$gray3',
})

export const ContactInfo = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray4',
})

export const SvgBackground = styled('div', {
  padding: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$grayW10',
  borderRadius: '4px',
})
