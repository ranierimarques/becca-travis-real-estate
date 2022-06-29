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
  color: '#E3E5E8',
})

export const Title = styled('h1', {
  marginTop: 16,

  fontWeight: 500,
  fontSize: 40,
  lineHeight: '56px',
  textAlign: 'center',
  color: '#F6F6F8',
})

export const InputWrapper = styled('div', {
  marginTop: 32,
})

export const SearchInput = styled('input', {
  height: 60,
})

export const HelperText = styled('span', {
  margin: '32px 0 112px',

  fontWeight: 300,
  fontSize: 14,
  lineHeight: '26px',
  textAlign: 'center',
  color: '#F6F6F8',
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
  background: '#0F141A',
  opacity: 0.7,
})

export const ArrowDown = styled(ArrowDownSvg, {
  boxSizing: 'content-box',
  padding: 6,
  background: '#FFFFFF',
  boxShadow: '0px 5px 32px rgba(71, 85, 103, 0.5)',
  borderRadius: 999,

  position: 'absolute',
  bottom: -16,
})
