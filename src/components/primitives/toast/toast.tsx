import Head from 'next/head'
import * as ToastPrimitive from '@radix-ui/react-toast'
import Rive from '@rive-app/react-canvas'
import { riveWasmUrl } from 'src/pages/_document'
import { Box } from '@/common'
import * as Svg from './svgs'
import * as S from './toast.styles'

interface ContactInformationProps {
  openToast: boolean
  onOpenToast: (open: boolean) => void
  form?: boolean
}

export function Toast({ openToast, onOpenToast, form }: ContactInformationProps) {
  if (form) {
    return (
      <>
        <Head>
          <link rel="preload" href={riveWasmUrl} as="fetch" crossOrigin="anonymous" />
          <link rel="preload" href="/check.riv" as="fetch" crossOrigin="anonymous" />
        </Head>
        <ToastPrimitive.Provider duration={5000} swipeDirection="down">
          <S.Root open={openToast} onOpenChange={onOpenToast}>
            <S.ToastTitle>
              <Box css={{ w: 24, h: 24 }}>
                <Rive src="/check.riv" />
              </Box>
              Information sent successfully
            </S.ToastTitle>
            <S.ToastDescription>i will contact you soon!</S.ToastDescription>
            <S.Action asChild altText="Close Toast">
              <S.CloseButton onClick={() => onOpenToast(false)}>
                <Svg.Close />
              </S.CloseButton>
            </S.Action>
            <ToastPrimitive.Close />
          </S.Root>

          <S.Viewport variant={2} />
        </ToastPrimitive.Provider>
      </>
    )
  } else {
    return (
      <ToastPrimitive.Provider duration={5000} swipeDirection="down">
        <S.Root open={openToast} onOpenChange={onOpenToast} variant={1}>
          <S.ToastTitle variant={1}>
            <Svg.Check />
            <S.SpanToastTitle>Link copied to clipboard</S.SpanToastTitle>
          </S.ToastTitle>
          <S.ArrowSvg />
        </S.Root>

        <S.Viewport variant={1} />
      </ToastPrimitive.Provider>
    )
  }
}
