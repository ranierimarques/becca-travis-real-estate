import { Flex } from '@common'
import { Dialog } from '@primitives'
import { ReactNode } from 'react'
import * as S from './testimonial.styles'

interface ReviewProps {
  review: {
    name: string
    source: string
    text: ReactNode
  }
}

export function Testimonial({ review }: ReviewProps) {
  return (
    <S.TestimonialItem>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <S.Testimonial>
            <Flex align="start" justify="between">
              <Flex align="center" css={{ gap: 16, mb: 16 }}>
                <S.Photo>{review.name.substring(0, 1)}</S.Photo>
                <Flex direction="column" align="start">
                  <S.Name>{review.name}</S.Name>
                  <S.Source>{review.source}</S.Source>
                </Flex>
              </Flex>
              <S.LinkSvgHover />
            </Flex>

            <S.Text>{review.text}&quot;...</S.Text>
          </S.Testimonial>
        </Dialog.Trigger>

        <Dialog.Content
          title={`${review.name} review`}
          description={undefined}
          variant="2"
        >
          <S.ContentHeader>
            <S.ModalPhoto>{review.name.substring(0, 1)}</S.ModalPhoto>
            <div>
              <S.ModalName>{review.name}</S.ModalName>
              <S.ModalSource>{review.source}</S.ModalSource>
            </div>
            <S.ModalLogo />
          </S.ContentHeader>

          <S.ModalText>{review.text}</S.ModalText>
        </Dialog.Content>
      </Dialog.Root>
    </S.TestimonialItem>
  )
}
