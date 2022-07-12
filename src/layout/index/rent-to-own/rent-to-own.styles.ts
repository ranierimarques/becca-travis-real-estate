import { styled } from 'stitches.config'
import { WaveSvg } from './svgs'

export const Section = styled('section', {
  maxWidth: '1072px',
  margin: '0 auto',
  paddingBottom: '116px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ImageContainer = styled('div', {
  position: 'relative',

  '&::before': {
    content: `''`,
    position: 'absolute',
    top: '12px',
    right: '16px',
    width: '100%',
    height: '100%',
    border: '2px solid $magenta3',
    borderRadius: '8px',
    zIndex: -1,
  },
})

export const Svg = styled(WaveSvg, {
  position: 'absolute',
  top: 38,
  left: -45,
  zIndex: 5,
})

export const Title = styled('h2', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',
})

export const Paragraph = styled('p', {
  maxWidth: '458px',

  marginBottom: 24,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})
