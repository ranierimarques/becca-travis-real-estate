import * as S from './market-trends.styles'

interface MarketTrendsProps {
  communityName: string
}

export function MarketTrends({ communityName }: MarketTrendsProps) {
  return (
    <S.Section>
      <S.Title>
        <S.Community>{communityName}</S.Community> Market Trends
      </S.Title>
      <S.Description>
        Athens market trends indicate an increase of $16 (11%) in the average price per
        square foot over the past 6 months. The average sales price fell to $319,445 from
        $331,160 six months ago. The average time on market for properties in Athens is 2
        days. Buyers can expect to pay 100% of the seller’s asking price.
      </S.Description>
    </S.Section>
  )
}
