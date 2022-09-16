import { ChangeEvent, FormEvent, useState } from 'react'
import * as S from './search-input.styles'
import { Gps } from './svgs'

async function fetchSuggestions(parameters: string) {
  const response = await fetch(
    `https://us-autocomplete-pro.api.smartystreets.com/lookup?key=${process.env.NEXT_PUBLIC_SMARTY_AUTOCOMPLETE_API_KEY}&search=${parameters}&include_only_states=AL&max_results=6`
  )
  const autoComplete = await response.json()
  return autoComplete.suggestions
}

async function getLocationSuccess(position: GeolocationPosition) {
  const { latitude, longitude } = position.coords
  const response = await fetch(`/api/location?lat=${latitude}&lng=${longitude}`)
  const data = await response.json()
  console.log(data)
}

function getLocationError(err: GeolocationPositionError) {
  alert(
    'There is no location support on this device or it is disabled. Please check your settings.'
  )
}

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

      const suggestions = await fetchSuggestions(parameters)

      setSuggestions(suggestions)
    }
  }

  function handleMyLocation(event: FormEvent) {
    event.preventDefault()
    navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError)
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
