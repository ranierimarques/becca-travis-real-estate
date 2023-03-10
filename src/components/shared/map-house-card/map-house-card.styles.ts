import NextLink from 'next/link'
import { keyframes, styled } from 'stitches.config'

const scaleIn = keyframes({
  from: {
    transform: 'scale(1)',
    boxShadow: '0 0 0 1px $colors$grayW9, 0 0 25px rgba($colors$blackRgb, 0.08)',
  },
  to: {
    transform: 'scale(1.02)',
    boxShadow: '0 0 0 1px $colors$grayW8, 0 0 25px rgba($colors$blackRgb, 0.15)',
  },
})

const scaleOut = keyframes({
  from: {
    transform: 'scale(1.02)',
    boxShadow: '0 0 0 1px $colors$grayW8, 0 0 25px rgba($colors$blackRgb, 0.15)',
  },
  to: {
    transform: 'scale(1)',
    boxShadow: '0 0 0 1px $colors$grayW9, 0 0 25px rgba($colors$blackRgb, 0.08)',
  },
})

const sharedAnimation = {
  animation: `${scaleIn} 250ms ease forwards`,
}

export const Container = styled('div', {})

export const Link = styled(NextLink, {
  display: 'flex',
  gap: 8,
  position: 'relative',

  overflow: 'hidden',
  background: '$white',
  zIndex: 1,

  height: '84px',
  width: '262px',

  borderRadius: '4px',
  boxShadow: '0 0 0 1px $colors$grayW9, 0 0 25px rgba($colors$blackRgb, 0.08)',

  animation: `${scaleOut} 250ms ease forwards`,

  '&:hover': {
    ...sharedAnimation,
  },
  '&:focus-within:not(:focus)': {
    ...sharedAnimation,
  },
  '&:focus-visible': {
    outline: '4px solid $colors$magenta2',
    outlineOffset: 4,
    ...sharedAnimation,
  },
})

export const Price = styled('span', {
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '21px',
  color: '$gray1',

  margin: '8px 0 6px',
})

export const Status = styled('div', {
  borderRadius: 1,

  width: 4,
  height: 4,
  position: 'absolute',

  top: 4,
  right: 4,

  variants: {
    status: {
      Active: { background: '$green1' },
      'Active Under Contract': { background: '$green1' },
      'Coming Soon': { background: '$yellow2' },
      Pending: { background: '$yellow2' },
      Hold: { background: '$yellow2' },
      Closed: { background: '$red2' },
      Expired: { background: '$red2' },
      Canceled: { background: '$red2' },
    },
  },
})

export const Info = styled('div', {
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '10px',
  color: '$gray3',

  '& span': {
    fontWeight: 400,
    color: '$gray4',
  },
})
