import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { keyframes, styled } from 'stitches.config'
import * as Svg from '../svgs'

export const PropertyDetails = styled('div', {
  gridArea: 'propertyDetails',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  padding: '20px 0 23px',

  borderRadius: '8px',

  background: '$offWhite2',

  '@bp4': {
    background: 'none',
    padding: 0,

    '> :nth-child(2)': {
      order: -1,
    },
  },
  '@bp2': {
    px: 24,
  },
  '@bp1': {
    px: 16,
  },
})

export const Title = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0 20px',

  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '22px',
  color: '$gray1',

  '@bp4': {
    padding: 0,
    marginBottom: 20,

    '& svg': {
      display: 'none',
    },
  },
})

export const Hr = styled('div', {
  width: '100%',
  height: '1px',
  backgroundColor: '$grayW9',

  margin: '20px 0 19px',

  '@bp4': {
    margin: '24px 0',
  },
  '@bp2': {
    margin: '20px 0',
  },
  '@bp1': {
    margin: '24px 0',
  },
})

export const DetailItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',

  '@bp4': {
    width: 'initial',
  },
})

export const DetailText = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray2',
})

export const TooltipButton = styled('button', {
  lineHeight: 0,

  '@bp4': {
    display: 'none',
  },
})

export const MoreDetail = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  gap: 8,

  overflow: 'hidden',
})

export const DetailTitle = styled('span', {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray2',
})

export const DetailDescription = styled('span', {
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  textAlign: 'right',
  textOverflow: 'ellipsis',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
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
  width: '100%',
  display: 'none',

  '@bp3': {
    display: 'block',
  },
})

export const Item = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
})

export const Header = styled(AccordionPrimitive.Header, {
  display: 'flex',
})

export const Trigger = styled(AccordionPrimitive.Trigger, {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '12px 16px',
  marginTop: 32,
  marginBottom: 8,

  borderRadius: 4,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray2',

  backgroundColor: '$grayW10',

  transition: 'all .15s cubic-bezier(.4,0,.2,1)',

  '@bp2': {
    marginTop: 24,
  },
  '@bp1': {
    marginTop: 20,

    fontSize: '14px',
    lineHeight: '20px',
  },
})

export const Chevron = styled(Svg.Arrow, {
  transition: 'transform .15s cubic-bezier(.4,0,.2,1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
})

export const Content = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',

  border: '1px solid $colors$grayW9',
  borderRadius: 4,

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

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$grayW3',

  '@bp4': {
    fontSize: '14px',
    lineHeight: '24px',

    paddingLeft: 26,
  },
})
