import { ChangeEvent, FormEvent, useState } from 'react'
import * as S from './search-input.styles'
import { Gps } from './svgs'

export function SearchInput() {
  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState([{ street_line: '' }])

  async function handleInputSearch(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    console.log(value)
    setSearch(value)

    if (value.length === 0) {
      setSuggestions([{ street_line: '' }])
    }

    if (value.trim().length > 0) {
      const parameters = value.trim().replaceAll(' ', '%20')
      console.log(parameters)

      const response = await fetch(
        `https://us-autocomplete-pro.api.smartystreets.com/lookup?key=${process.env.NEXT_PUBLIC_SMARTY_AUTOCOMPLETE_API_KEY}&search=${parameters}&include_only_states=AL&max_results=6`
      )
      const data = await response.json()
      console.log(data)

      setSuggestions(data.suggestions)
    }
  }

  function handleMyLocation(event: FormEvent) {
    event.preventDefault()
    navigator.geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords
        const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
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
          onChange={handleInputSearch}
        />
        <S.SearchButton>
          <S.LoupeSvg />
        </S.SearchButton>

        <S.Suggestions>
          {search.length > 0 ? (
            suggestions.map(suggestion => {
              return (
                <S.Suggestion key={suggestion.street_line}>
                  {suggestion.street_line}
                </S.Suggestion>
              )
            })
          ) : (
            <S.CurrentLocation onClick={handleMyLocation}>
              <Gps />
              Current Location
            </S.CurrentLocation>
          )}
        </S.Suggestions>
      </S.InputWrapper>
    </>
  )
}
