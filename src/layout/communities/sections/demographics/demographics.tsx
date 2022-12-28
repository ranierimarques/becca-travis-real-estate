import { Flex } from '@/common'
import { formatToDollar } from '@/utils/currency'
import * as S from './demographics.styles'
import * as Svg from './svgs'

interface DemographicsProps {
  communityName: string
}

type DemographicData = {
  [key: string]: {
    medianAge: number
    income: number
    college: number
    unemployment: number
  }
}

const demographicData: DemographicData = {
  harvest: {
    medianAge: 38,
    income: 83677,
    college: 72,
    unemployment: 3,
  },
  huntsville: {
    medianAge: 37,
    income: 56758,
    college: 73,
    unemployment: 5,
  },
  athens: {
    medianAge: 41,
    income: 53165,
    college: 59,
    unemployment: 8,
  },
  meridianville: {
    medianAge: 39,
    income: 80476,
    college: 73,
    unemployment: 12,
  },
  decatur: {
    medianAge: 40,
    income: 48429,
    college: 56,
    unemployment: 6,
  },
  hamptonCove: {
    medianAge: 41,
    income: 84934,
    college: 49,
    unemployment: 4,
  },
}

export function Demographics({ communityName }: DemographicsProps) {
  const isHamptonCove = communityName === 'hampton cove'
  const statistics = [
    {
      name: 'Median age',
      value: demographicData[isHamptonCove ? 'hamptonCove' : communityName].medianAge,
      svg: <Svg.User />,
    },
    {
      name: 'Median Household Income',
      value: formatToDollar(
        demographicData[isHamptonCove ? 'hamptonCove' : communityName].income
      ),
      svg: <Svg.House />,
    },
    {
      name: 'College Educated',
      value: `${demographicData[isHamptonCove ? 'hamptonCove' : communityName].college}%`,
      svg: <Svg.Education />,
    },
    {
      name: 'Unemployment Rate',
      value: `${
        demographicData[isHamptonCove ? 'hamptonCove' : communityName].unemployment
      }%`,
      svg: <Svg.Dollar />,
    },
  ]

  return (
    <S.Section>
      <S.Title>
        <S.Community>{communityName}</S.Community> Demographics
      </S.Title>
      <S.Statistics>
        {statistics.map(stat => (
          <S.Statistic key={stat.name}>
            {stat.svg}
            <Flex direction="column" align="center" css={{ gap: 8 }}>
              <S.Number>{stat.value}</S.Number>
              <S.Name>{stat.name}</S.Name>
            </Flex>
          </S.Statistic>
        ))}
      </S.Statistics>
    </S.Section>
  )
}
