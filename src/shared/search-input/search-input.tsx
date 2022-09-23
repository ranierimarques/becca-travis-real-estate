import useDebounce from '@resources/hooks/useDebounce'
import { useCombobox } from 'downshift'
import { FormEvent, useEffect, useRef, useState } from 'react'
import * as S from './search-input.styles'
import { Gps } from './svgs'
import { getSuggestions, setAddressUsingGeoLocation } from './utils'

export function SearchInput() {
  const skipFetch = useRef(false)
  const [searchValue, setSearchValue] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const debouncedValue = useDebounce<string>(searchValue, 1000)
  const {
    // isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    id: 'houses-search',
    items: suggestions,
    inputValue: searchValue,
    onInputValueChange: ({ inputValue: newValue = '' }) => {
      skipFetch.current = searchValue.trim() === newValue.trim()
      setSearchValue(newValue)
    },
  })

  function handleMyLocation(event: FormEvent) {
    event.preventDefault()

    skipFetch.current = true
    setAddressUsingGeoLocation(setSearchValue)
  }

  useEffect(() => {
    if (skipFetch.current) return

    async function fetchData() {
      const addresses = await getSuggestions(debouncedValue)
      setSuggestions(addresses)
    }

    fetchData()
  }, [debouncedValue])

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
          {!searchValue.trim() && !suggestions.length && (
            <S.CurrentLocation onClick={handleMyLocation}>
              <Gps />
              Current Location
            </S.CurrentLocation>
          )}
          {suggestions.map((item, index) => (
            <li key={`${item}${index}`} {...getItemProps({ item, index })}>
              <S.Suggestion active={highlightedIndex === index}>{item}</S.Suggestion>
            </li>
          ))}
        </S.Suggestions>
      </S.InputWrapper>
    </>
  )
}
