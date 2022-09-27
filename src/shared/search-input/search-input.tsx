import useDebounce from '@resources/hooks/useDebounce'
import { useCombobox } from 'downshift'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import * as S from './search-input.styles'
import { Gps } from './svgs'
import { setAddressUsingGeoLocation, setBingSuggestions } from './utils'

const LOCATION_VALUE = 'Current Location'

export function SearchInput() {
  const skipFetch = useRef(true)
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

      skipFetch.current = true

      if (selectedItem === LOCATION_VALUE) {
        setAddressUsingGeoLocation(setSearchValue)
        return
      }

      setSearchValue(selectedItem)
    },
  })

  useEffect(() => {
    if (skipFetch.current) return

    setBingSuggestions(debouncedValue, setSuggestions)
  }, [debouncedValue])

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value

    skipFetch.current = searchValue.trim() === newValue.trim()
    setSearchValue(newValue)

    if (newValue.trim().length === 0) {
      skipFetch.current = true
      setSuggestions(['Current Location'])
    }
  }

  return (
    <>
      <S.Container>
        <S.InputWrapper {...getComboboxProps()}>
          <S.Input
            type="text"
            placeholder="Search by address, neighborhood, city or ZIP code"
            {...getInputProps({ onChange })}
          />
          <S.SearchButton aria-label="Search">
            <S.LoupeSvg />
          </S.SearchButton>
        </S.InputWrapper>

        <S.Suggestions {...getMenuProps()}>
          {suggestions.map((item, index) => {
            return (
              <S.SuggestionListItem
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item === LOCATION_VALUE ? (
                  <S.CurrentLocation active={highlightedIndex === index}>
                    <Gps />
                    Current Location
                  </S.CurrentLocation>
                ) : (
                  <S.Suggestion active={highlightedIndex === index}>{item}</S.Suggestion>
                )}
              </S.SuggestionListItem>
            )
          })}
        </S.Suggestions>
      </S.Container>
    </>
  )
}
