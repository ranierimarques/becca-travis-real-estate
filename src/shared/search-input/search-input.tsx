import useDebounce from '@resources/hooks/useDebounce'
import { useCombobox } from 'downshift'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import * as S from './search-input.styles'
import { Gps } from './svgs'
import { fetchBingSuggestions, setAddressUsingGeoLocation } from './utils'

const LOCATION_VALUE = 'Current Location'

export function SearchInput() {
  const skipFetch = useRef(false)
  const [searchValue, setSearchValue] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([LOCATION_VALUE])
  const debouncedValue = useDebounce<string>(searchValue, 500)
  const {
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    id: 'houses-search',
    items: suggestions,
    inputValue: searchValue,
    selectedItem: searchValue,
    onSelectedItemChange: ({ selectedItem }) => {
      if (!selectedItem) return
      if (selectedItem === LOCATION_VALUE) {
        skipFetch.current = true
        setAddressUsingGeoLocation(setSearchValue)
        return
      }

      skipFetch.current = true
      setSearchValue(selectedItem)
    },
  })

  useEffect(() => {
    if (skipFetch.current) return

    async function fetchSuggestions() {
      const addresses = await fetchBingSuggestions(debouncedValue)
      setSuggestions(addresses)
    }

    fetchSuggestions()
  }, [debouncedValue])

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value

    skipFetch.current = searchValue.trim() === newValue.trim()
    if (newValue.trim().length === 0) {
      skipFetch.current = true
      setSuggestions(['Current Location'])
    }
    setSearchValue(newValue)
  }

  return (
    <>
      <S.InputWrapper>
        <div {...getComboboxProps()}>
          <S.SearchInput
            type="text"
            placeholder="Search by address, neighborhood, city or ZIP code"
            {...getInputProps({ onChange })}
          />
        </div>
        <S.SearchButton>
          <S.LoupeSvg />
        </S.SearchButton>

        <S.Suggestions {...getMenuProps()}>
          {suggestions.map((item, index) => {
            return (
              <li key={`${item}${index}`} {...getItemProps({ item, index })}>
                {item === LOCATION_VALUE ? (
                  <S.CurrentLocation active={highlightedIndex === index}>
                    <Gps />
                    Current Location
                  </S.CurrentLocation>
                ) : (
                  <S.Suggestion active={highlightedIndex === index}>{item}</S.Suggestion>
                )}
              </li>
            )
          })}
        </S.Suggestions>
      </S.InputWrapper>
    </>
  )
}
