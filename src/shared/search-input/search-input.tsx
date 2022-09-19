import { ChangeEvent, FormEvent, useState } from 'react'
import * as S from './search-input.styles'
import { Gps } from './svgs'
import { getSuggestions, setAddressUsingGeoLocation } from './utils'

type Suggestions = {
  address: string
}[]

export function SearchInput() {
  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState<Suggestions>([])

  async function handleInputSearch(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    setSearch(value)

    const addresses = await getSuggestions(value)

    setSuggestions(addresses)
  }

  function handleMyLocation(event: FormEvent) {
    event.preventDefault()

    setAddressUsingGeoLocation(setSearch)
  }

  return (
    <>
      <S.InputWrapper>
        <S.SearchInput
          type="text"
          placeholder="Search by address, neighborhood, city or ZIP code"
          onChange={handleInputSearch}
          value={search}
        />
        <S.SearchButton>
          <S.LoupeSvg />
        </S.SearchButton>

        <S.Suggestions>
          {!search.trim() && (
            <S.CurrentLocation onClick={handleMyLocation}>
              <Gps />
              Current Location
            </S.CurrentLocation>
          )}
          {suggestions?.map((suggestion, index) => (
            <S.Suggestion key={index}>{suggestion.address}</S.Suggestion>
          ))}
        </S.Suggestions>
      </S.InputWrapper>
    </>
  )
}
