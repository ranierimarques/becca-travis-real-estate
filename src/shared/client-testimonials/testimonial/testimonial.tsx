import { Flex } from '@common'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { useRef } from 'react'
import { CloseSvg } from '../svgs'
import * as S from './testimonial.styles'

interface TestimonialProps {
  review: {
    name: string
    source: string
    text: string
  }
}

export function Testimonial({ review }: TestimonialProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  function onOpenAutoFocus(event: Event) {
    event.preventDefault()
    contentRef.current?.focus()
  }

  return (
    <li>
      <DialogPrimitive.Root>
        <S.TestimonialCard>
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

          <blockquote>
            <S.Text>&quot;{review.text + '...'}&quot;</S.Text>
          </blockquote>
        </S.TestimonialCard>

        <DialogPrimitive.Portal>
          <S.Overlay />
          <S.Content onOpenAutoFocus={onOpenAutoFocus}>
            <S.ContentHeader>
              <S.ModalPhoto>{review.name.substring(0, 1)}</S.ModalPhoto>
              <div>
                <S.ModalName>{review.name}</S.ModalName>
                <S.ModalSource>{review.source}</S.ModalSource>
              </div>
              <S.ModalLogo />
            </S.ContentHeader>

            <S.ModalText>{review.text}</S.ModalText>

            <DialogPrimitive.Close asChild>
              <S.IconButton aria-label="Close">
                <CloseSvg />
              </S.IconButton>
            </DialogPrimitive.Close>
          </S.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </li>
  )
}
