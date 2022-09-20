import { useCombobox } from 'downshift'
import { FormEvent, useRef, useState } from 'react'
import * as S from './search-input.styles'
import { Gps } from './svgs'
import { getSuggestions, setAddressUsingGeoLocation } from './utils'

export function SearchInput() {
  const debouncedInterval = useRef<ReturnType<typeof setTimeout>>(null)
  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState([''])
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: suggestions,
    onInputValueChange: async ({ inputValue = '' }) => {
      setSearch(inputValue)

      if (search.trim() === inputValue.trim()) return

      const timeoutID = debouncedInterval.current
      const addresses = await getSuggestions(inputValue, timeoutID, 1000)
      setSuggestions(addresses)
    },
    id: 'houses-search',
  })

  function handleMyLocation(event: FormEvent) {
    event.preventDefault()

    setAddressUsingGeoLocation(setSearch)
  }

  return (
    <>
      <S.InputWrapper>
        <div {...getComboboxProps()}>
          <S.SearchInput
            type="text"
            placeholder="Search by address, neighborhood, city or ZIP code"
            {...getInputProps()}
          />
        </div>
        <S.SearchButton>
          <S.LoupeSvg />
        </S.SearchButton>

        <S.Suggestions {...getMenuProps()}>
          {!search.trim() && (
            <S.CurrentLocation onClick={handleMyLocation}>
              <Gps />
              Current Location
            </S.CurrentLocation>
          )}
          {isOpen &&
            suggestions.map((item, index) => (
              <li key={`${item}${index}`} {...getItemProps({ item, index })}>
                <S.Suggestion active={highlightedIndex === index}>{item}</S.Suggestion>
              </li>
            ))}
        </S.Suggestions>
      </S.InputWrapper>
    </>
  )
}
