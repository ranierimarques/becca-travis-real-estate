import { Button } from '@common'
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
      <S.Link draggable="false">
        <S.TopWrapper>
          <S.Circles />
          <S.ImageWrapper>
            <Image
              src={data.image}
              alt={data.alt}
              objectFit="fill"
              quality="100"
              style={{ pointerEvents: 'none' }}
            />
          </S.ImageWrapper>
        </S.TopWrapper>
        <S.BottomWrapper>
          <S.Title>{data.title}</S.Title>
          <S.Description>{data.description}</S.Description>
          <Button as="span" outlined size="2" css={{ mt: 16, pointerEvents: 'none' }}>
            {data.buttonText}
          </Button>
        </S.BottomWrapper>
      </S.Link>
    </Link>
  )
}
