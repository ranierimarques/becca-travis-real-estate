import Link from 'next/link'
import { styled } from 'stitches.config'

export const Header = styled('header', {
  maxWidth: 760,
  margin: '0 auto 28px',
  textAlign: 'center',
})

export const Title = styled('h2', {
  margin: '0 0 8px',
  color: '$magenta6',
  fontSize: 30,
  fontWeight: 500,
  lineHeight: 1.3,
  '@bp2': { fontSize: 24 },
})

export const Description = styled('p', {
  margin: 0,
  color: '$gray2',
  fontSize: 15,
  lineHeight: 1.6,
})

export const More = styled(Link, {
  display: 'block',
  width: 'fit-content',
  margin: '24px auto 0',
  color: '$magenta6',
  fontWeight: 600,
  textDecoration: 'underline',
})
