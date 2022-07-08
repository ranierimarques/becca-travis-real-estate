import { Box, Hat } from '@common'
import Image from 'next/image'
import Link from 'next/link'
import { house1, house2, house3 } from './images'
import * as S from './new-to-market.styles'
import { BedSvg, FavoriteSvg, ShowerSvg, SquareSvg } from './svgs'

const houses = [
  {
    image: house1,
    value: '875,000',
    address: '100 Leshawn Cove, Harvest',
    bedrooms: 4,
    bathrooms: 5,
    squareFeet: '4,058',
  },
  {
    image: house2,
    value: '280,000',
    address: '826 Crestview Drive, Madison',
    bedrooms: 3,
    bathrooms: 4,
    squareFeet: '2,072',
  },
  {
    image: house3,
    value: '575,000',
    address: '27855 Cricket Lane, Harvest',
    bedrooms: 4,
    bathrooms: 5,
    squareFeet: '5,030',
  },
]

export function NewToMarket() {
  return (
    <S.Section>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 8,
          marginBottom: 40,
        }}
      >
        <Hat>NEW PROPERTIES</Hat>
        <Box
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <S.Title>New to Market</S.Title>
          <Link href="#" passHref>
            <S.ViewAll>VIEW ALL</S.ViewAll>
          </Link>
        </Box>
      </Box>
      <S.Houses>
        {houses.map(house => {
          return (
            <S.House key={house.address}>
              <Link href="#">
                <a>
                  <Box css={{ position: 'relative' }}>
                    <S.New>New</S.New>
                    <Image src={house.image} alt="house" />
                    <Box css={{ position: 'absolute', top: '16px', right: '16px' }}>
                      <FavoriteSvg />
                    </Box>
                  </Box>
                  <S.HouseInfo>
                    <S.Value>${house.value}</S.Value>
                    <S.Address>{house.address}</S.Address>
                    <Box
                      css={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 24,
                        marginBottom: 18,
                      }}
                    >
                      <S.Bedrooms>
                        <BedSvg /> {house.bedrooms}
                      </S.Bedrooms>
                      <S.Bathrooms>
                        <ShowerSvg /> {house.bathrooms}
                      </S.Bathrooms>
                      <S.SquareFeet>
                        <SquareSvg /> {house.squareFeet}
                      </S.SquareFeet>
                    </Box>
                    <S.VAMLS>2022 VAMLS, Inc.</S.VAMLS>
                  </S.HouseInfo>
                </a>
              </Link>
            </S.House>
          )
        })}
      </S.Houses>
    </S.Section>
  )
}
