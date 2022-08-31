import { HouseCard } from '@shared'
import * as S from './homes.styles'

export function Homes({ data }: any) {
  return (
    <S.Container>
      <S.Houses>
        {data.map((house: any) => (
          <HouseCard key={house.ListingId} house={house} />
        ))}
      </S.Houses>
    </S.Container>
  )
}
