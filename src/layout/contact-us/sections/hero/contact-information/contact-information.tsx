import { Box, Flex } from '@common'
import { Toast } from '@primitives'
import { MailSvg, PhoneSvg } from '../svgs'
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
      <Toast openToast={openToast} onOpenToast={onOpenToast} />
    </S.Card>
  )
}
