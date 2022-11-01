import { Button, Image } from '@common'
import { StaticImageData } from 'next/image'
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
              quality="100"
              css={{ pointerEvents: 'none', objectFit: 'contain', objectPosition: 'top' }}
              skeletonBackground="rgba($colors$magenta5Rgb, 0.4)"
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
