import { Box, Flex } from "@common"
import { LastCall } from "@shared"
import { Slider } from "../"
import { AskAQuestion } from "./ask-a-question/ask-a-question"
import * as S from "./home.styles"
import { PropertyDetails } from "./property-details/property-details"
import { HeartSvg, ShareSvg } from "./svgs"

// endereço - UnparsedAddress
// preço - ListPrice
// status - StandardStatus
// onSite - DaysOnMarket
// MLSId - ListingId - ListOfficeMlsId
// last updated - BridgeModificationTimestamp
// quartos - BedroomsTotal
// banheiros - BathroomsTotalInteger
// family total - PropertySubType
// metros quadrados - LotSizeSquareFeet
// description - LotFeatures - InteriorFeatures - ExteriorFeatures-
// foundation details - FoundationDetails
// levels - Levels
// building total area - BuildingAreaTotal
// city limits - *
// mobile home allowed - *
// new construction - NewConstructionYN
// property condition - PropertyCondition
// property sub type - PropertyType
// sewer - Sewer
// water source - WaterSource
// elementary school - ElementarySchool
// middle school - MiddleOrJuniorSchool
// high school - HighSchool

export function Home({ data }: any) {
  function formatToDollar(amount: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  console.log(data)
  return (
    <S.Section>
      <div>
        <S.Header>
          <Flex align="center" justify="between" css={{ mb: 16 }}>
            <S.HouseName>{data.UnparsedAddress}</S.HouseName>
            <S.ShareAndSave>
              <S.Button>
                <ShareSvg />
              </S.Button>

              <S.Button>
                <HeartSvg />
              </S.Button>
            </S.ShareAndSave>
          </Flex>

          <Flex align="center" css={{ gap: 16 }}>
            <S.HousePrice>{formatToDollar(data.ListPrice)}</S.HousePrice>
            <Box
              css={{ h: 16, w: 2, background: "rgba($colors$gray5Rgb, .5)" }}
            />
            <S.HouseStatus>
              Status: {""}
              <S.Status>{data.StandardStatus}</S.Status>
            </S.HouseStatus>

            <S.Dot />

            <S.HouseStatus>
              On site: {""}
              <S.Status>
                {data.DaysOnMarket}
                10 days
              </S.Status>
            </S.HouseStatus>

            <S.Dot />

            <S.HouseStatus>
              Updated: {""}
              <S.Status>{data.BridgeModificationTimestamp}</S.Status>
            </S.HouseStatus>
          </Flex>
        </S.Header>

        <Flex justify="between" css={{ mb: 32 }}>
          <Slider data={data} />
          <PropertyDetails data={data} />
        </Flex>
      </div>

      <AskAQuestion />

      <LastCall />
    </S.Section>
  )
}
