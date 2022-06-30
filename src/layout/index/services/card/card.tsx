import Image, { StaticImageData } from 'next/image'
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
    <S.Container>
      <Image
        src={data.image}
        alt={data.alt}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 35%"
      />
      <S.Title>{data.title}</S.Title>
      <S.Description>{data.description}</S.Description>
      <a href={data.href}>{data.buttonText}</a>
    </S.Container>
  )
}
