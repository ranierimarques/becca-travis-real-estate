import { Box, Button } from '@common'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import * as S from './card.styles'

type cardProps = {
  data: {
    image: StaticImageData
    alt: string
    title: string
    description: string
    href: string
    buttonText: string
  }
}

export function Card({ data }: cardProps) {
  return (
    <Link href={data.href} passHref>
      <S.Link
        whileHover={{
          scale: 1.05,
          transition: { type: 'spring', stiffness: 100 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Box css={{ position: 'relative', height: 189, '& > span': { zIndex: -1 } }}>
          <Image src={data.image} alt={data.alt} layout="fill" objectFit="cover" />
        </Box>
        <S.Title>{data.title}</S.Title>
        <S.Description>{data.description}</S.Description>
        <Button as="span" outlined css={{ margin: '24px auto 32px' }}>
          {data.buttonText}
        </Button>
      </S.Link>
    </Link>
  )
}
