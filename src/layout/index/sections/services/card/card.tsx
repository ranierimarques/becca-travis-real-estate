import Image from 'next/image'
import { Button } from '@/common'
import * as S from './card.styles'

type cardProps = {
  data: {
    image: string
    alt: string
    title: string
    description: string
    href: string
    buttonText: string
  }
}

export function Card({ data }: cardProps) {
  return (
    <S.Link href={data.href} draggable="false">
      <S.TopWrapper>
        <Image
          src={data.image}
          alt={data.alt}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1184px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.Title>{data.title}</S.Title>
        <S.Description>{data.description}</S.Description>
        <Button
          as="span"
          outlined
          size="2"
          css={{
            mt: 16,
            pointerEvents: 'none',
            '@bp5': {
              mt: 24,
            },
          }}
        >
          {data.buttonText}
        </Button>
      </S.BottomWrapper>
    </S.Link>
  )
}
