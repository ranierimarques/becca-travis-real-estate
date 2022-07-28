import { Box, Button, Hat } from "@common"
import * as S from "./contact-us.styles"
import { MailSvg, PhoneSvg } from "./svgs"

export function ContactUs() {
  return (
    <S.Section>
      <S.Container>
        <div>
          <Hat css={{ marginBottom: 8 }}>Talk to me</Hat>
          <S.Title>Need help? Send us a message</S.Title>
          <S.Paragraph>
            Our support goes all the way. We love hearing from customers and
            visitors.
          </S.Paragraph>

          <Box
            css={{ display: "flex", fd: "column", gap: 16, marginBottom: 24 }}
          >
            <S.Card>
              <S.SvgBackground>
                <MailSvg />
              </S.SvgBackground>

              <Box css={{ display: "flex", fd: "column", ai: "flex-start" }}>
                <S.CardTitle>Email</S.CardTitle>
                <S.CardInfo>contact@designroom.com</S.CardInfo>
              </Box>
            </S.Card>

            <S.Card>
              <S.SvgBackground>
                <PhoneSvg />
              </S.SvgBackground>

              <Box css={{ display: "flex", fd: "column", ai: "flex-start" }}>
                <S.CardTitle>Phone number</S.CardTitle>
                <S.CardInfo>+1 (414) 840 - 1109</S.CardInfo>
              </Box>
            </S.Card>
          </Box>

          <Box
            css={{
              width: "100px",
              height: "4px",
              background: "$magenta1",
              borderRadius: "999px",
            }}
          />
        </div>
        <S.Form>
          <Box
            css={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: 40,
              rowGap: 24,
            }}
          >
            <S.Label>
              First name
              <S.Input type="text" />
            </S.Label>
            <S.Label>
              Last Name
              <S.Input type="text" />
            </S.Label>
            <S.Label>
              Email Address
              <S.Input type="email" />
            </S.Label>
            <S.Label>
              Number
              <S.Input type="tel" />
            </S.Label>
          </Box>

          <S.Label>
            Your message
            <S.TextArea rows={6} cols={60}></S.TextArea>
          </S.Label>

          <Box
            css={{
              display: "flex",
              ai: "center",
              gap: 40,
              alignSelf: "flex-end",
            }}
          >
            <S.CheckboxLabel>
              <S.Input type="checkbox" />I agree to the privacy policy
            </S.CheckboxLabel>

            <Button>Submit</Button>
          </Box>
        </S.Form>
      </S.Container>
    </S.Section>
  )
}
