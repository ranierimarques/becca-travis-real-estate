import { Flex } from "@common"
import { LastCall } from "@shared"
import { Slider } from "../"
import { AskAQuestion } from "./ask-a-question/ask-a-question"
import * as S from "./home.styles"
import { PropertyDetails } from "./property-details/property-details"
import { HeartSvg, PriceSvg, ShareSvg } from "./svgs"

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
        <Flex align="center" justify="between" css={{ mb: 16 }}>
          <S.HouseName>{data.UnparsedAddress}</S.HouseName>
          <S.ShareAndSave>
            <S.ShareButton>
              <ShareSvg />
            </S.ShareButton>
            <S.SaveButton>
              <HeartSvg />
            </S.SaveButton>
          </S.ShareAndSave>
        </Flex>

        <Flex css={{ mb: 30 }}>
          <S.HousePrice>
            <PriceSvg />
            <span>{formatToDollar(data.ListPrice)}</span>
          </S.HousePrice>
          <Flex align="center" css={{ gap: 46 }}>
            <S.HouseStatus>
              Status:
              <S.Status>{data.StandardStatus}</S.Status>
            </S.HouseStatus>
            <S.HouseOnSite>
              On site:
              <S.Status>{data.DaysOnMarket}</S.Status>
            </S.HouseOnSite>
            <S.HouseId>
              MLS#:
              <S.Status>{data.ListOfficeMlsId}</S.Status>
            </S.HouseId>
            <S.HouseUpdated>
              Updated:
              <S.Status>{data.BridgeModificationTimestamp}</S.Status>
            </S.HouseUpdated>
          </Flex>
        </Flex>

        <Flex justify="between">
          <Slider data={data} />
          <PropertyDetails data={data} />
        </Flex>

        <AskAQuestion />

        <div></div>
      </div>

      <LastCall />
    </S.Section>
  )
}
