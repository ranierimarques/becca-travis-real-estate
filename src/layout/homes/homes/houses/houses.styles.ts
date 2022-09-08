import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { styled } from 'stitches.config'

export const Houses = styled('ul', {
  // display: 'grid',
  // gridTemplateColumns: 'repeat(2, minmax(255px, 336px))',
  // gridAutoColumns: 'minmax(200px, 240px)',

  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',

  padding: '28px 16px 48px',

  '& > li': {
    flex: '1 1 255px',
    // maxWidth: '336px',
  },
})

const SCROLLBAR_SIZE = 10

export const Root = styled(ScrollAreaPrimitive.Root, {
  overflow: 'hidden',
})

export const Viewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  overscrollBehavior: 'contain',
})

export const Scrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  margin: '28px 0 48px',
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
})

export const Thumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$grayW7',
  transition: 'background 160ms ease',
  '&:hover': { filter: 'brightness(0.85)' },
  '&:active': { filter: 'brightness(0.7)' },
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
})
