import { Button } from "@common"
import Image from "next/image"
import * as S from "./about-huntsville.styles"
import { huntsville } from "./images"

export function AboutHuntsville() {
  return (
    <S.Section>
      <div>
        <S.Title>About Huntsville</S.Title>
        <S.Paragraph>
          Huntsville, the city where waves of history wash over you as soon as
          it rains. Whether you&apos;re moving across town or relocating from
          another state there are plenty reasons to choose Huntsville: more than
          any website can portray and all without leaving this place!
        </S.Paragraph>
        <Button href="#" css={{ padding: "12px 24px" }}>
          Learn more
        </Button>
      </div>
      <S.ImageContainer>
        <Image src={huntsville} alt="Huntsville drone shoot" />
      </S.ImageContainer>
    </S.Section>
  )
}
