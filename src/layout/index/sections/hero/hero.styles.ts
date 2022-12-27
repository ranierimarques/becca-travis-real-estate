import { styled } from 'stitches.config'
import { ArrowDown as ArrowDownSvg } from './svgs'

export const Title = styled('h1', {
  fontWeight: 500,
  fontSize: 40,
  lineHeight: '56px',
  textAlign: 'center',
  color: '$grayW10',

  '@bp5': {
    lineHeight: '48px',
  },
  '@bp2': {
    fontSize: 30,
    lineHeight: '42px',
  },
  '@bp1': {
    fontSize: 28,
    lineHeight: '40px',
  },
})

export const HelperText = styled('span', {
  margin: '24px 0 0',

  fontSize: 14,
  fontWeight: 400,
  lineHeight: '26px',
  textAlign: 'center',
  color: '$grayW10',

  '@bp5': {
    fontSize: 16,
    fontWeight: 300,
  },
  '@bp2': {
    fontSize: 14,
  },
  '@bp1': {
    lineHeight: '24px',
    margin: '24px 16px 0',

    '& > br': {
      display: 'none',
    },
  },
})

export const ImageWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  userSelect: 'none',
  pointerEvents: 'none',
})

export const ImageOverlay = styled('div', {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  background: '$details1',
  opacity: 0.7,
})

export const ArrowDown = styled(ArrowDownSvg, {
  boxSizing: 'content-box',
  padding: 6,
  background: '$white',
  boxShadow: '0px 5px 32px rgba($colors$grayW2Rgb, 0.5)',
  borderRadius: 999,

  position: 'absolute',
  bottom: -16,
})
