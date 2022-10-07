import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { keyframes, styled } from 'stitches.config'
import { ChevronSvg } from './svgs'

export const Section = styled('section', {
  maxWidth: '1072px',
  margin: '0 auto',
  padding: '160px 0 160px',

  display: 'flex',
  justifyContent: 'space-between',
})

export const Title = styled('h2', {
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta6',
})

export const Hat = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '0.03em',
  textTransform: 'uppercase',
  color: '$magenta1',
})

export const Paragraph = styled('p', {
  marginBottom: 48,
  maxWidth: '458px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

// ================== Radix ======================

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const Accordion = styled(AccordionPrimitive.Root, {
  maxWidth: 438,
})

export const Item = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 16,
  borderRadius: 8,

  '&:first-child': {
    marginTop: 0,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
  },
})

export const Header = styled(AccordionPrimitive.Header, {
  display: 'flex',
})

export const Trigger = styled(AccordionPrimitive.Trigger, {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '24px',

  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '28px',

  backgroundColor: '$offWhite2',

  transition: 'all .15s cubic-bezier(.4,0,.2,1)',

  '& .strokeWhiteGlove001': {
    transition: 'all .15s cubic-bezier(.4,0,.2,1)',
  },
  '& .strokeWhiteGlove002': {
    transition: 'all .15s cubic-bezier(.4,0,.2,1)',
  },

  '&[data-state="closed"]': {
    color: '$gray5',
    '& .strokeWhiteGlove001': {
      stroke: '$gray5',
    },
    '& .strokeWhiteGlove002': {
      stroke: '$gray5',
    },
  },
  '&[data-state="open"]': {
    color: '$magenta9',
    '& .strokeWhiteGlove001': {
      stroke: '$magenta2',
    },
    '& .strokeWhiteGlove002': {
      stroke: '$magenta9',
    },
  },
})

export const ContentTriggerWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const Chevron = styled(ChevronSvg, {
  transition: 'transform .15s cubic-bezier(.4,0,.2,1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
})

export const Content = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: '$offWhite2',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$grayW3',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

export const ContentText = styled('div', {
  position: 'relative',
  bottom: '4px',
  padding: '0 24px 20px 64px',
})
