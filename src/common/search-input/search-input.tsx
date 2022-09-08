import { useFetch } from '@resources/hooks/useFetch'
import { FormEvent, useState } from 'react'
import * as S from './search-input.styles'
import { Loupe } from './svgs'

export function SearchInput() {
  const [value, setValue] = useState('')

  const data = useFetch(
    `https://us-autocomplete-pro.api.smartystreets.com/lookup?key=134363983004847383&search=29073&include_only_cities=HUNSTVILLE&include_only_states=AL`
  )
  console.log(data)

  function handleMyLocation(event: FormEvent) {
    event.preventDefault()
    navigator.geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords
        const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCVaTtpBS5SweU8_yF0aL2Wm-58g8PTix8`
        const response = await fetch(endpoint)
        const data = await response.json()
        console.log(data)
      },
      err => {
        window.alert(
          'There is no location support on this device or it is disabled. Please check your settings.'
        )
      }
    )
  }

  return (
    <>
      <S.InputWrapper>
        <S.SearchInput
          type="text"
          placeholder="Search by address, neighborhood, city or ZIP code"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <S.SearchButton>
          <Loupe />
        </S.SearchButton>
        <button onClick={handleMyLocation}>My location</button>
      </S.InputWrapper>
    </>
  )
}
