import { Box } from "@common"
import Image from "next/image"
import * as S from "./history.styles"
import { becca, family, ourHistory } from "./images"
import { PathSvg } from "./svgs"

export function History() {
  return (
    <S.Section>
      <S.Becca>
        <Box>
          <S.Hat>
            <Box
              css={{ width: "18px", height: "1px", background: "#9D446E" }}
            />{" "}
            MEET HUNTSVILLE
          </S.Hat>
          <S.Title>Becca Travis Real State</S.Title>
          <S.Paragraph>
            There are many reasons why Huntsville is a great place to live. The
            economy is strong and there are plenty of jobs available. The
            schools are excellent, and the living cost is very affordable.
          </S.Paragraph>
        </Box>

        <Box css={{ borderRadius: 8, overflow: "hidden" }}>
          <Image src={becca} alt="Becca Travis" />
        </Box>
      </S.Becca>

      <S.OurHistory>
        <S.Path />

        <Box css={{ borderRadius: 8, overflow: "hidden" }}>
          <Image src={ourHistory} alt="Becca Travis" />
        </Box>

        <Box>
          <S.Hat>
            <Box
              css={{ width: "18px", height: "1px", background: "#9D446E" }}
            />{" "}
            MEET HUNTSVILLE
          </S.Hat>
          <S.Title>Becca Travis Real State</S.Title>
          <S.Paragraph>
            Huntsville is home to a number of highly respected colleges and
            universities. The quality of education in Huntsville is excellent,
            and students who attend school here have the opportunity to receive
            a well-rounded education.
          </S.Paragraph>
        </Box>

        <S.Path2 />
      </S.OurHistory>

      <S.Family>
        <Box>
          <S.Hat>
            <Box
              css={{ width: "18px", height: "1px", background: "#9D446E" }}
            />{" "}
            MEET HUNTSVILLE
          </S.Hat>
          <S.Title>Becca Travis Real State</S.Title>
          <S.Paragraph>
            The Huntsville area offers an excellent real estate market.
            You&apos;ll find an amazing selection of homes for sale here, and my
            job is to make sure you have all the information needed so we can
            save time on finding what fits best with your needs!
          </S.Paragraph>
        </Box>
        <Box css={{ borderRadius: 8, overflow: "hidden" }}>
          <Image src={family} alt="Happy Family" />
        </Box>
      </S.Family>
    </S.Section>
  )
}
