import { styled } from 'stitches.config'
import { ArrowDown as ArrowDownSvg } from './svgs'

export const Section = styled('section', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Hat = styled('span', {
  marginTop: 80,

  fontWeight: 400,
  fontSize: 14,
  lineHeight: '24px',
  color: '$grayW9',
})

export const Title = styled('h1', {
  marginTop: 16,

  fontWeight: 500,
  fontSize: 40,
  lineHeight: '56px',
  textAlign: 'center',
  color: '$grayW10',
})

export const InputWrapper = styled('div', {
  marginTop: 32,
  padding: '18px 16px 18px 24px',

  background: '$white',

  display: 'flex',
  alignItems: 'center',
  gap: 16,

  borderRadius: 8,
  width: 594,
})

export const SearchInput = styled('input', {
  flex: 1,

  fontWeight: 600,
  fontSize: 14,
  lineHeight: '24px',
  color: '$gray5',
  caretColor: '$magenta8',

  '&::placeholder': {
    fontWeight: 500,
    color: '$grayW5',
  },
})

export const HelperText = styled('span', {
  margin: '32px 0 112px',

  fontWeight: 300,
  fontSize: 14,
  lineHeight: '26px',
  textAlign: 'center',
  color: '$grayW10',
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
  background: '#FFFFFF',
  boxShadow: '0px 5px 32px rgba($colors$grayW2Rgb, 0.5)',
  borderRadius: 999,

  position: 'absolute',
  bottom: -16,
})
