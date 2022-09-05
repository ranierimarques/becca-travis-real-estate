import { styled } from 'stitches.config'
import { ArrowDown as ArrowDownSvg } from './svgs'

export const Section = styled('section', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Title = styled('h1', {
  marginTop: 120,

  fontWeight: 500,
  fontSize: 40,
  lineHeight: '56px',
  textAlign: 'center',
  color: '$grayW10',
})

export const InputWrapper = styled('div', {
  marginTop: 32,
  paddingLeft: '24px',

  background: '$offWhite2',

  display: 'flex',
  alignItems: 'center',
  gap: 16,

  borderRadius: 8,
  width: 527,
})

export const SearchInput = styled('input', {
  flex: 1,

  fontWeight: 600,
  fontSize: 14,
  lineHeight: '18px',
  color: '$gray5',
  caretColor: '$magenta8',

  '&::placeholder': {
    fontWeight: 400,
    color: '$grayW5',
  },
})

export const SearchButton = styled('button', {
  padding: '20px 15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$grayW9',
  borderRadius: '0px 8px 8px 0px',
})

export const HelperText = styled('span', {
  margin: '24px 0 116px',

  fontWeight: 400,
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
  background: '$white',
  boxShadow: '0px 5px 32px rgba($colors$grayW2Rgb, 0.5)',
  borderRadius: 999,

  position: 'absolute',
  bottom: -16,
})
