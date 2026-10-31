import { styled } from 'stitches.config'

export const Overlay = styled('div', {
  position: 'fixed',
  zIndex: 1000,
  inset: 0,
  background: 'rgba(28, 22, 34, 0.48)',
  display: 'flex',
  justifyContent: 'flex-end',
})
export const Drawer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  width: 'min(1120px, 100%)',
  height: '100dvh',
  background: '$white',
  boxShadow: '-18px 0 48px rgba(24, 19, 30, 0.16)',
  '@bp2': { width: '100%' },
})
export const Toolbar = styled('header', {
  position: 'sticky',
  zIndex: 2,
  top: 0,
  display: 'grid',
  gridTemplateColumns: 'minmax(150px, 0.8fr) minmax(260px, 1.4fr) auto',
  alignItems: 'center',
  gap: 20,
  padding: '14px 22px',
  borderBottom: '1px solid $colors$grayW8',
  background: '$white',
  '@bp3': { gridTemplateColumns: '1fr auto', gap: 10 },
  '@bp2': { gridTemplateColumns: '1fr auto', padding: '12px 14px' },
})
export const BrandBlock = styled('div', { minWidth: 0 })
export const DrawerTitle = styled('p', {
  margin: 0,
  color: '$magenta6',
  fontSize: 15,
  fontWeight: 700,
})
export const DrawerSub = styled('p', {
  margin: '3px 0 0',
  color: '$gray3',
  fontSize: 12,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})
export const ContactForm = styled('form', {
  display: 'grid',
  gap: 5,
  '& label': { color: '$gray2', fontSize: 11, fontWeight: 600 },
  '& > div': { display: 'flex', gap: 6 },
  '& input': {
    minWidth: 0,
    flex: 1,
    minHeight: 38,
    padding: '0 10px',
    border: '1px solid $colors$grayW7',
    borderRadius: 5,
    fontFamily: 'inherit',
    fontSize: 13,
  },
  '& button': {
    minHeight: 38,
    padding: '0 12px',
    border: 0,
    borderRadius: 5,
    background: '$magenta6',
    color: '$white',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 12,
    fontWeight: 600,
  },
  '@bp3': { gridColumn: '1 / -1', gridRow: 2 },
})
export const Actions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  '@bp2': { justifyContent: 'flex-end' },
})
export const PopOut = styled('a', {
  color: '$magenta6',
  fontSize: 12,
  fontWeight: 600,
  whiteSpace: 'nowrap',
  textDecoration: 'underline',
  '@bp2': { display: 'none' },
})
export const CloseButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 7,
  minHeight: 38,
  padding: '0 11px',
  border: '1px solid $colors$grayW7',
  borderRadius: 5,
  background: '$white',
  color: '$gray1',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 12,
  fontWeight: 600,
  whiteSpace: 'nowrap',
})
export const FrameTitle = styled('h2', {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
})
export const Frame = styled('div', {
  display: 'grid',
  flex: 1,
  alignContent: 'center',
  justifyItems: 'center',
  gap: 12,
  minHeight: 0,
  padding: 32,
  background: '$grayW9',
  textAlign: 'center',
})
export const FrameMessage = styled('h3', {
  margin: 0,
  color: '$gray1',
  fontSize: 22,
  fontWeight: 500,
  lineHeight: 1.35,
})
export const FrameCopy = styled('p', {
  maxWidth: 460,
  margin: 0,
  color: '$gray2',
  fontSize: 14,
  lineHeight: 1.65,
})
export const FrameLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  minHeight: 44,
  marginTop: 6,
  padding: '0 18px',
  borderRadius: 5,
  background: '$magenta6',
  color: '$white',
  fontSize: 13,
  fontWeight: 600,
  textDecoration: 'none',
})
