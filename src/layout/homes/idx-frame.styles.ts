import Link from 'next/link'
import { styled } from 'stitches.config'

export const Page = styled('main', {
  minHeight: '70vh',
  color: '$gray2',
  background: '$white',
})

export const Header = styled('section', {
  width: '100%',
  maxWidth: 1440,
  margin: '0 auto',
  padding: '52px 32px 34px',
  '@bp2': { padding: '36px 20px 26px' },
})

export const Eyebrow = styled('p', {
  color: '$magenta6',
  fontSize: 12,
  fontWeight: 600,
  textTransform: 'uppercase',
  marginBottom: 12,
})

export const Title = styled('h1', {
  color: '$magenta6',
  fontSize: 48,
  fontWeight: 500,
  lineHeight: 1.15,
  '@bp2': { fontSize: 34 },
})

export const Intro = styled('p', {
  maxWidth: 720,
  marginTop: 14,
  fontSize: 17,
  lineHeight: '28px',
})

export const Frame = styled('iframe', {
  display: 'block',
  width: '100%',
  height: 'calc(100vh - 250px)',
  minHeight: 720,
  border: 0,
  borderTop: '1px solid rgba($colors$magenta1Rgb, 0.15)',
  background: '$white',
  '@bp2': { height: 'calc(100vh - 210px)', minHeight: 640 },
})

export const Pending = styled('section', {
  width: 'calc(100% - 40px)',
  maxWidth: 1120,
  minHeight: 420,
  margin: '0 auto 80px',
  padding: '64px 32px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  background: 'rgba($colors$tangerine5Rgb, 0.2)',
  borderTop: '4px solid $magenta6',
  '@bp2': { padding: '48px 20px' },
})

export const PendingTitle = styled('h2', {
  color: '$magenta6',
  fontSize: 34,
  fontWeight: 500,
  lineHeight: 1.25,
  '@bp2': { fontSize: 28 },
})

export const PendingText = styled('p', {
  maxWidth: 650,
  marginTop: 18,
  fontSize: 17,
  lineHeight: '28px',
})

export const Actions = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 12,
  marginTop: 28,
})

const actionStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 48,
  padding: '12px 20px',
  borderRadius: 4,
  fontSize: 15,
  fontWeight: 600,
  '&:focus-visible': { outline: '2px solid $magenta6', outlineOffset: 3 },
}

export const PrimaryAction = styled(Link, {
  ...actionStyles,
  color: '$white',
  background: '$magenta6',
})

export const SecondaryAction = styled(Link, {
  ...actionStyles,
  color: '$magenta6',
  border: '1px solid $magenta6',
})
