import { Flex } from '@common'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { useRef } from 'react'
import { CloseSvg } from '../svgs'
import * as S from './testimonial.styles'

interface TestimonialProps {
  testimonial: {
    name: string
    source: string
    text: string
  }
}

export function Testimonial({ testimonial }: TestimonialProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  function onOpenAutoFocus(event: Event) {
    event.preventDefault()
    contentRef.current?.focus()
  }

  return (
    <DialogPrimitive.Root>
      <S.TestimonialCard>
        <Flex align="start" justify="between">
          <Flex align="center" css={{ gap: 16, mb: 16 }}>
            <S.Photo>{testimonial.name.substring(0, 1)}</S.Photo>
            <Flex direction="column" align="start">
              <S.Name>{testimonial.name}</S.Name>
              <S.Source>{testimonial.source}</S.Source>
            </Flex>
          </Flex>
          <S.LinkSvgHover />
        </Flex>

        <S.Text>&quot;{testimonial.text + '...'}&quot;</S.Text>
      </S.TestimonialCard>

      <DialogPrimitive.Portal>
        <S.Overlay />
        <S.Content onOpenAutoFocus={onOpenAutoFocus}>
          <S.ContentHeader>
            <S.ModalPhoto>{testimonial.name.substring(0, 1)}</S.ModalPhoto>
            <div>
              <S.ModalName>{testimonial.name}</S.ModalName>
              <S.ModalSource>{testimonial.source}</S.ModalSource>
            </div>
            <S.ModalLogo />
          </S.ContentHeader>

          <S.ModalText>{testimonial.text}</S.ModalText>

          <DialogPrimitive.Close asChild>
            <S.IconButton aria-label="Close">
              <CloseSvg />
            </S.IconButton>
          </DialogPrimitive.Close>
        </S.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
