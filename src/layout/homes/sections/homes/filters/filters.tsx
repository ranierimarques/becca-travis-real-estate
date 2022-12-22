import { useGeolocationStore } from '@/layout/homes/store/geolocation'
import { Dialog } from '@/primitives'
import { useState } from 'react'
import * as Svg from '../svgs'
import * as S from './filters.styles'

export default function Contact() {
  const [bedroomLte, setBedroomLte] = useState('')
  const [bedroomGte, setBedroomGte] = useState('')

  const setGeoLocation = useGeolocationStore(state => state.setGeoLocation)

  const searchGeolocation = async () => {
    setGeoLocation({
      filter: {
        BedroomsTotal: {
          lte: Number(bedroomLte),
          gte: Number(bedroomGte),
        },
      },
    })
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <S.Button css={{ marginLeft: 16 }}>
          <Svg.Filter /> Filters
        </S.Button>
      </Dialog.Trigger>
      <Dialog.Content title="Let's chat" description="You can reach me at:">
        BEDROOMS
        <S.Input
          type="number"
          placeholder="Bedrooms"
          value={bedroomGte}
          onChange={e => setBedroomGte(e.target.value)}
          style={{ maxWidth: 100 }}
        />
        to
        <S.Input
          type="number"
          placeholder="Bedrooms"
          value={bedroomLte}
          onChange={e => setBedroomLte(e.target.value)}
          style={{ maxWidth: 100 }}
        />
        <S.Button css={{ marginLeft: 16 }} onClick={searchGeolocation}>
          Search
        </S.Button>
      </Dialog.Content>
    </Dialog.Root>
  )
}
