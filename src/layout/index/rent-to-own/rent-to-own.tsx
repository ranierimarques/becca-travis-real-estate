import { Button } from "@common"
import Image from "next/image"
import { family } from "./images"
import * as S from "./rent-to-own.styles"

export function RentToOwn() {
  return (
    <S.Section>
      <S.ImageContainer>
        <S.Svg />
        <Image src={family} alt="Happy family" />
      </S.ImageContainer>
      <div>
        <S.Title>Rent to Own</S.Title>
        <S.Paragraph>
          The Rent to Own program is a great solution for people who want to
          purchase a home but can&apos;t qualify for a home loan. We&apos;ll
          determine if you qualify for the program, find and purchase your dream
          home, lease it back to you and help you repair your credit so you can
          purchase it from us in 18 months or less.
        </S.Paragraph>
        <Button href="#" css={{ padding: "12px 24px" }}>
          Learn more
        </Button>
      </div>
    </S.Section>
  )
}
