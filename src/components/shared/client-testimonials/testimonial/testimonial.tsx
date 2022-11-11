import { Box, Flex } from '@/common'
import { Dialog } from '@/primitives'
import { ReactNode } from 'react'
import * as Svg from '../svgs'
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
                <Flex direction="column" align="start">
                  <S.Name>{review.name}</S.Name>
                  <Flex align="center" css={{ gap: 6 }}>
                    <S.Source>{review.source}</S.Source>
                    <Box css={{ size: 4, bg: '$grayW9', br: '50%' }} />
                    <Flex css={{ gap: 2 }}>
                      <Svg.Star />
                      <Svg.Star />
                      <Svg.Star />
                      <Svg.Star />
                      <Svg.Star />
                    </Flex>
                  </Flex>
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
            <Flex direction="column" align="start">
              <S.Name>{review.name}</S.Name>
              <Flex align="center" css={{ gap: 6 }}>
                <S.Source>{review.source}</S.Source>
                <Box css={{ size: 4, bg: '$grayW9', br: '50%' }} />
                <Flex css={{ gap: 2 }}>
                  <Svg.Star />
                  <Svg.Star />
                  <Svg.Star />
                  <Svg.Star />
                  <Svg.Star />
                </Flex>
              </Flex>
              <S.ModalLogo />
            </Flex>
          </S.ContentHeader>

          <S.ModalText>{review.text}</S.ModalText>
        </Dialog.Content>
      </Dialog.Root>
    </S.TestimonialItem>
  )
}
