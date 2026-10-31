import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from 'stitches.config'

const overlayIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const drawerIn = keyframes({
  from: { opacity: 0, transform: 'translateX(24px)' },
  to: { opacity: 1, transform: 'translateX(0)' },
})

const sheetIn = keyframes({
  from: { opacity: 0, transform: 'translateY(24px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

export const Launcher = styled('button', {
  position: 'fixed',
  right: 22,
  bottom: 22,
  zIndex: 1190,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 9,
  minHeight: 48,
  padding: '0 19px',
  color: '$white',
  background: '$magenta1',
  border: '1px solid rgba($colors$whiteRgb, 0.3)',
  borderRadius: 999,
  boxShadow: '0 12px 32px rgba($colors$magenta6Rgb, 0.26)',
  fontSize: 14,
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: '-0.01em',
  transition: 'transform 150ms ease, background 150ms ease, box-shadow 150ms ease',

  '&:hover': {
    background: '$magenta6',
    transform: 'translateY(-2px)',
    boxShadow: '0 15px 36px rgba($colors$magenta6Rgb, 0.31)',
  },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.62)',
    outlineOffset: 3,
  },
  '& svg': { width: 17, height: 17 },

  '@bp2': {
    right: 14,
    bottom: 14,
    minHeight: 46,
    padding: '0 16px',
  },
})

export const LauncherFull = styled('span', {
  '@bp2': { display: 'none' },
})

export const LauncherShort = styled('span', {
  display: 'none',
  '@bp2': { display: 'inline' },
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  zIndex: 1200,
  background: 'rgba(30, 22, 27, 0.56)',
  backdropFilter: 'blur(2px)',
  animation: `${overlayIn} 180ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 1201,
  width: 420,
  maxWidth: '100vw',
  overflowY: 'auto',
  color: '$gray1',
  background: '$white',
  borderLeft: '1px solid $grayW9',
  boxShadow: '-18px 0 48px rgba(28, 20, 24, 0.18)',
  animation: `${drawerIn} 220ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': { outline: 'none' },

  '@bp3': {
    top: 'auto',
    left: 0,
    width: '100%',
    maxHeight: '92dvh',
    borderTop: '1px solid $grayW9',
    borderLeft: 0,
    borderRadius: '24px 24px 0 0',
    boxShadow: '0 -18px 48px rgba(28, 20, 24, 0.2)',
    animation: `${sheetIn} 220ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

export const Shell = styled('div', {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const Topbar = styled('div', {
  position: 'sticky',
  top: 0,
  zIndex: 2,
  display: 'grid',
  gridTemplateColumns: '40px 1fr 40px',
  alignItems: 'center',
  minHeight: 64,
  padding: '10px 20px 7px',
  background: 'rgba($colors$whiteRgb, 0.96)',
  borderBottom: '1px solid $grayW9',
  backdropFilter: 'blur(10px)',

  '@bp2': { minHeight: 58, padding: '8px 16px 6px' },
})

export const IconButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38,
  color: '$magenta6',
  borderRadius: 999,
  transition: 'background 130ms ease',

  '&:hover': { background: '$offWhite2' },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.42)',
    outlineOffset: 1,
  },
  '& svg': { width: 18, height: 18 },
})

export const TopbarLabel = styled('span', {
  justifySelf: 'center',
  color: '$gray3',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
})

export const EmptyTopbarSlot = styled('span', { width: 38, height: 38 })

export const Progress = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 5,
  padding: '0 20px 12px',
  background: '$white',

  '@bp2': { padding: '0 16px 10px' },
})

export const ProgressSegment = styled('span', {
  height: 3,
  background: '$grayW9',
  borderRadius: 999,
  transition: 'background 160ms ease',

  variants: {
    complete: {
      true: { background: '$magenta1' },
    },
  },
})

export const Body = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '34px 32px 30px',

  '@bp2': { padding: '27px 22px 26px' },
  '@bp1': { padding: '24px 18px 22px' },
})

export const Eyebrow = styled('p', {
  margin: '0 0 10px',
  color: '$magenta1',
  fontSize: 11,
  fontWeight: 750,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
})

export const Title = styled(Dialog.Title, {
  margin: 0,
  color: '$magenta6',
  fontSize: 31,
  fontWeight: 500,
  letterSpacing: '-0.025em',
  lineHeight: 1.13,

  '@bp2': { fontSize: 27 },
})

export const Description = styled(Dialog.Description, {
  margin: '11px 0 0',
  color: '$gray3',
  fontSize: 14,
  lineHeight: 1.6,
})

export const ChoiceList = styled('div', {
  display: 'grid',
  gap: 10,
  marginTop: 27,
})

export const Choice = styled('button', {
  display: 'grid',
  gridTemplateColumns: '38px 1fr 18px',
  alignItems: 'center',
  gap: 12,
  width: '100%',
  minHeight: 62,
  padding: '10px 13px',
  color: '$gray1',
  textAlign: 'left',
  background: '$white',
  border: '1px solid $grayW8',
  borderRadius: 11,
  transition: 'border-color 130ms ease, background 130ms ease, transform 130ms ease',

  '&:hover': {
    background: '$offWhite2',
    borderColor: '$magenta3',
    transform: 'translateY(-1px)',
  },
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.4)',
    outlineOffset: 2,
  },
  '&[data-selected="true"]': {
    background: 'rgba($colors$magenta5Rgb, 0.19)',
    borderColor: '$magenta1',
  },

  '@bp2': { minHeight: 58, padding: '9px 11px' },
})

export const ChoiceIcon = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38,
  color: '$magenta1',
  background: 'rgba($colors$magenta5Rgb, 0.24)',
  borderRadius: 9,

  '& svg': { width: 19, height: 19 },
})

export const ChoiceLabel = styled('span', {
  fontSize: 14,
  fontWeight: 680,
  lineHeight: 1.35,
})

export const Chevron = styled('span', {
  color: '$grayW6',
  '& svg': { width: 18, height: 18 },
})

export const Microcopy = styled('p', {
  display: 'flex',
  alignItems: 'center',
  gap: 7,
  margin: '22px 0 0',
  color: '$gray4',
  fontSize: 12,
  lineHeight: 1.45,

  '& svg': { flexShrink: 0, width: 14, height: 14, color: '$magenta1' },
})

export const Field = styled('label', {
  display: 'grid',
  gap: 8,
  marginTop: 27,
  color: '$gray2',
  fontSize: 13,
  fontWeight: 680,
})

export const Input = styled('input', {
  width: '100%',
  height: 48,
  padding: '0 14px',
  color: '$gray1',
  background: '$white',
  border: '1px solid $grayW8',
  borderRadius: 10,
  fontSize: 15,
  fontWeight: 450,

  '&::placeholder': { color: '$grayW5' },
  '&:hover': { borderColor: '$grayW6' },
  '&:focus': {
    borderColor: '$magenta1',
    boxShadow: '0 0 0 3px rgba($colors$magenta3Rgb, 0.18)',
  },
  '&[aria-invalid="true"]': {
    borderColor: '$red3',
    boxShadow: '0 0 0 3px rgba($colors$red1Rgb, 0.18)',
  },
})

const buttonBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 48,
  padding: '0 18px',
  borderRadius: 10,
  fontSize: 14,
  fontWeight: 720,
  lineHeight: 1.2,
  transition: 'background 140ms ease, border-color 140ms ease, transform 140ms ease',
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.48)',
    outlineOffset: 2,
  },
  '&:disabled': { cursor: 'wait', opacity: 0.7 },
} as const

export const PrimaryButton = styled('button', {
  ...buttonBase,
  width: '100%',
  marginTop: 20,
  color: '$white',
  background: '$magenta1',
  border: '1px solid $magenta1',
  '&:hover:not(:disabled)': { background: '$magenta6', borderColor: '$magenta6' },
})

export const SecondaryButton = styled('button', {
  ...buttonBase,
  width: '100%',
  marginTop: 10,
  color: '$magenta6',
  background: '$white',
  border: '1px solid $grayW8',
  '&:hover': { background: '$offWhite2', borderColor: '$magenta3' },
})

export const TextButton = styled('button', {
  alignSelf: 'center',
  marginTop: 17,
  padding: '6px 9px',
  color: '$magenta1',
  borderRadius: 6,
  fontSize: 13,
  fontWeight: 700,
  textDecoration: 'underline',
  textUnderlineOffset: 4,
  '&:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.4)',
    outlineOffset: 2,
  },
})

export const SummaryLine = styled('p', {
  margin: '14px 0 0',
  color: '$gray3',
  fontSize: 12,
  fontWeight: 650,
  lineHeight: 1.5,
})

export const PlanList = styled('ol', {
  display: 'grid',
  margin: '28px 0 0',
  borderTop: '1px solid $grayW9',
})

export const PlanItem = styled('li', {
  display: 'grid',
  gridTemplateColumns: '34px 1fr',
  gap: 12,
  padding: '19px 0',
  borderBottom: '1px solid $grayW9',

  '& > span': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 31,
    height: 31,
    color: '$magenta1',
    background: 'rgba($colors$magenta5Rgb, 0.24)',
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 760,
  },
  '& h3': {
    margin: 0,
    color: '$magenta6',
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 1.25,
  },
  '& p': {
    margin: '5px 0 0',
    color: '$gray3',
    fontSize: 12.5,
    lineHeight: 1.55,
  },
})

export const ContactChoice = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 5,
  marginTop: 25,
  padding: 4,
  background: '$offWhite2',
  borderRadius: 10,

  '& button': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    minHeight: 43,
    padding: '0 9px',
    color: '$gray3',
    border: '1px solid transparent',
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 700,
  },
  '& button[data-selected="true"]': {
    color: '$magenta6',
    background: '$white',
    borderColor: '$grayW9',
    boxShadow: '0 3px 10px rgba(25, 20, 23, 0.07)',
  },
  '& button:focus-visible': {
    outline: '3px solid rgba($colors$tangerine1Rgb, 0.4)',
    outlineOffset: 1,
  },
  '& svg': { width: 15, height: 15 },
})

export const ContactForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
})

export const Consent = styled('p', {
  margin: '15px 0 0',
  color: '$gray4',
  fontSize: 11,
  lineHeight: 1.55,

  '& a': {
    color: '$magenta1',
    fontWeight: 700,
    textDecoration: 'underline',
    textUnderlineOffset: 3,
  },
})

export const Error = styled('p', {
  margin: '7px 0 0',
  color: '$red3',
  fontSize: 12,
  fontWeight: 650,
  lineHeight: 1.45,

  '& a': { color: 'inherit', textDecoration: 'underline' },
})

export const Success = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  minHeight: 430,

  '& > svg': {
    width: 42,
    height: 42,
    marginBottom: 20,
    color: '$magenta1',
  },
})

export const Honeypot = styled('input', {
  position: 'absolute',
  left: -9999,
  width: 1,
  height: 1,
  opacity: 0,
  pointerEvents: 'none',
})
