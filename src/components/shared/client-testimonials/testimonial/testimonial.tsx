import { ReactNode } from 'react'
import { Flex } from '@/common'
import { Dialog } from '@/primitives'
import * as S from './testimonial.styles'

interface ReviewProps {
  review: {
    name: string
    source: string
    text: ReactNode
  }
  resize: boolean
}

export function Testimonial({ review, resize }: ReviewProps) {
  return (
    <S.TestimonialItem>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <S.Testimonial tabIndex={resize ? 0 : -1}>
            <Flex align="start" justify="between">
              <Flex
                direction="column"
                align="start"
                css={{ mb: 16, '@bp4': { mb: 20 }, '@bp1': { mb: 16 } }}
              >
                <S.Name>{review.name}</S.Name>
                <Flex align="center" css={{ gap: 6 }}>
                  <S.Source>{review.source}</S.Source>
                </Flex>
              </Flex>

              <S.LinkSvgHover />
            </Flex>

            <S.Text>{review.text}</S.Text>
          </S.Testimonial>
        </Dialog.Trigger>

        <Dialog.Content
          title={`${review.name} review`}
          description={undefined}
          variant="2"
          onCloseAutoFocus={event => !resize && event.preventDefault()}
        >
          <S.ContentHeader>
            <S.ModalName>{review.name}</S.ModalName>
            <Flex align="center" css={{ gap: 6 }}>
              <S.ModalSource>{review.source}</S.ModalSource>
            </Flex>

            <S.ModalLogo />
          </S.ContentHeader>

          <S.ModalText>{review.text}</S.ModalText>
        </Dialog.Content>
      </Dialog.Root>
    </S.TestimonialItem>
  )
}
