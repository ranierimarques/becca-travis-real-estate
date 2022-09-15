import { Flex } from '@common'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ReactNode, useRef } from 'react'
import { CloseSvg } from '../svgs'
import * as S from './testimonial.styles'

interface ReviewProps {
  review: {
    name: string
    source: string
    text: ReactNode | string
  }
}

export function Testimonial({ review }: ReviewProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  function onOpenAutoFocus(event: Event) {
    event.preventDefault()
    contentRef.current?.focus()
  }

  return (
    <S.TestimonialItem>
      <DialogPrimitive.Root>
        <S.Trigger>
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
        </S.Trigger>

        <DialogPrimitive.Portal>
          <S.Overlay />
          <S.Content onOpenAutoFocus={onOpenAutoFocus} ref={contentRef}>
            <S.ContentHeader>
              <S.ModalPhoto>{review.name.substring(0, 1)}</S.ModalPhoto>
              <div>
                <S.ModalName>{review.name}</S.ModalName>
                <S.ModalSource>{review.source}</S.ModalSource>
              </div>
              <S.ModalLogo />
            </S.ContentHeader>

            <S.ModalText>{review.text}</S.ModalText>

            <S.Close aria-label="Close">
              <CloseSvg />
            </S.Close>
          </S.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </S.TestimonialItem>
  )
}
