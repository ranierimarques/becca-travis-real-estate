import { Box, Flex } from '@common'
import * as Toast from '@radix-ui/react-toast'
import Rive from '@rive-app/react-canvas'
import { CloseSvg, MailSvg, PhoneSvg } from '../svgs'
import * as S from './contact-information.styles'

interface ContactInformationProps {
  openToast: boolean
  onOpenToast: (open: boolean) => void
}

export function ContactInformation({ openToast, onOpenToast }: ContactInformationProps) {
  return (
    <S.Card>
      <Box css={{ p: '32px 0 0 32px' }}>
        <S.Title>Contact information</S.Title>
        <S.Description>
          I&apos;m ready to help you and take all your questions, get in touch!
        </S.Description>

        <Flex direction="column" css={{ gap: 24 }}>
          <S.Contact>
            <S.SvgBackground>
              <MailSvg />
            </S.SvgBackground>

            <Flex direction="column" align="start" css={{ gap: 4 }}>
              <S.ContactTitle>Email</S.ContactTitle>
              <S.ContactInfo>becca@beccatravis.com</S.ContactInfo>
            </Flex>
          </S.Contact>

          <S.Contact>
            <S.SvgBackground>
              <PhoneSvg />
            </S.SvgBackground>

            <Flex direction="column" align="start" css={{ gap: 4 }}>
              <S.ContactTitle>Phone number</S.ContactTitle>
              <S.ContactInfo>(256) 318-9066</S.ContactInfo>
            </Flex>
          </S.Contact>
        </Flex>

        <S.Svg />
      </Box>

      <Toast.Provider duration={10000}>
        <S.Toast open={openToast} onOpenChange={onOpenToast}>
          <S.ToastTitle>
            <Box css={{ w: 24, h: 24 }}>
              <Rive src="check.riv" />
            </Box>
            Information sent successfully
          </S.ToastTitle>
          <S.ToastDescription>i will contact you soon!</S.ToastDescription>
          <S.Action asChild altText="Close Toast">
            <S.CloseButton onClick={() => onOpenToast(false)}>
              <CloseSvg />
            </S.CloseButton>
          </S.Action>
          <Toast.Close />
        </S.Toast>

        <S.Viewport />
      </Toast.Provider>
    </S.Card>
  )
}
