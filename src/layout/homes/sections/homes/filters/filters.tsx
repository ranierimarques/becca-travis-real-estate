import { useGeolocationStore } from '@/layout/homes/store/geolocation'
import { Dialog } from '@/primitives'
import { useState } from 'react'
import * as Svg from '../svgs'
import * as S from './filters.styles'

export default function Contact() {
  const [bedroomLte, setBedroomLte] = useState('')
  const [bedroomGte, setBedroomGte] = useState('')
  const [bathroomLte, setBathroomLte] = useState('')
  const [bathroomGte, setBathroomGte] = useState('')

  const setGeoLocation = useGeolocationStore(state => state.setGeoLocation)

  const currentGeoLocation = useGeolocationStore(state => state.geoLocation)

  const removeFiltersInGeolocation = async () => {
    const newGeoLocation = { ...currentGeoLocation }
    delete newGeoLocation.filter
    setBedroomLte('')
    setBedroomGte('')
    setBathroomLte('')
    setBathroomGte('')
    setGeoLocation(newGeoLocation)
  }

  const searchGeolocation = async () => {
    setGeoLocation({
      filter: {
        BedroomsTotal: {
          lte: Number(bedroomLte),
          gte: Number(bedroomGte),
        },
        BathroomsTotalInteger: {
          lte: Number(bathroomLte),
          gte: Number(bathroomGte),
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
          placeholder="Min"
          value={bedroomGte}
          onChange={e => setBedroomGte(e.target.value)}
          style={{ maxWidth: 100 }}
        />
        to
        <S.Input
          type="number"
          placeholder="Max"
          value={bedroomLte}
          onChange={e => setBedroomLte(e.target.value)}
          style={{ maxWidth: 100 }}
        />
        BATHROOMS
        <S.Input
          type="number"
          placeholder="Min"
          value={bathroomGte}
          onChange={e => setBathroomGte(e.target.value)}
          style={{ maxWidth: 100 }}
        />
        to
        <S.Input
          type="number"
          placeholder="Max"
          value={bathroomLte}
          onChange={e => setBathroomLte(e.target.value)}
          style={{ maxWidth: 100 }}
        />
        <S.Button css={{ marginLeft: 16 }} onClick={removeFiltersInGeolocation}>
          Clear filters
        </S.Button>
        <S.Button css={{ marginLeft: 16 }} onClick={searchGeolocation}>
          Save filters
        </S.Button>
      </Dialog.Content>
    </Dialog.Root>
  )
}
