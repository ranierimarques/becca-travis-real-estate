import { Box } from '@common'
import * as ToastPrimitive from '@radix-ui/react-toast'
import Rive from '@rive-app/react-canvas'
import { CloseSvg } from './svgs'
import * as S from './toast.styles'

interface ContactInformationProps {
  openToast: boolean
  onOpenToast: (open: boolean) => void
}

export function Toast({ openToast, onOpenToast }: ContactInformationProps) {
  return (
    <ToastPrimitive.Provider duration={10000}>
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
            <CloseSvg />
          </S.CloseButton>
        </S.Action>
        <ToastPrimitive.Close />
      </S.Root>

      <S.Viewport />
    </ToastPrimitive.Provider>
  )
}
