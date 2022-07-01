import { Button } from "@common"
import Image from "next/image"
import { family } from "./images"
import * as S from "./rent-to-own.styles"

export function RentToOwn() {
  return (
    <S.Section>
      <S.ImageContainer>
        <S.Svg />
        <S.Svg2 />
        <Image src={family} alt="Happy family" />
      </S.ImageContainer>
      <S.ContentContainer>
        <h2>Rent to Own</h2>
        <p>
          The Rent to Own program is a great solution for people who want to
          purchase a home but can&apos;t qualify for a home loan. We&apos;ll
          determine if you qualify for the program, find and purchase your dream
          home, lease it back to you and help you repair your credit so you can
          purchase it from us in 18 months or less.
        </p>
        <Button href="#" css={{ padding: "12px 24px" }}>
          Learn more
        </Button>
      </S.ContentContainer>
    </S.Section>
  )
}
