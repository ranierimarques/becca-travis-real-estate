import { Flex } from '@/common'
import { formatToDollar } from '@/utils/currency'
import * as S from './demographics.styles'
import * as Svg from './svgs'

interface DemographicsProps {
  communityName: string
}

export function Demographics({ communityName }: DemographicsProps) {
  const statistics = [
    {
      name: 'Median age',
      number: 41,
      svg: <Svg.User />,
    },
    {
      name: 'Median Household Income',
      number: formatToDollar(53165),
      svg: <Svg.House />,
    },
    {
      name: 'College Educated',
      number: '59%',
      svg: <Svg.Education />,
    },
    {
      name: 'Unemployment Rate',
      number: '59%',
      svg: <Svg.Dollar />,
    },
  ]
  return (
    <S.Section>
      <S.Title>{communityName} Demographics</S.Title>
      <S.Statistics>
        {statistics.map(stat => (
          <S.Statistic key={stat.name}>
            {stat.svg}
            <Flex direction="column" align="center" css={{ gap: 8 }}>
              <S.Number>{stat.number}</S.Number>
              <S.Name>{stat.name}</S.Name>
            </Flex>
          </S.Statistic>
        ))}
      </S.Statistics>
    </S.Section>
  )
}
