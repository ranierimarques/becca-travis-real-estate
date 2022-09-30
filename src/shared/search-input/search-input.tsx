import useDebounce from '@resources/hooks/useDebounce'
import { useCombobox } from 'downshift'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import * as S from './search-input.styles'
import { Gps, Loupe } from './svgs'
import {
  LOCATION_VALUE,
  removeWhiteSpaces,
  setAddressUsingGeoLocation,
  setBingSuggestions,
} from './utils'

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
    openMenu,
    closeMenu,
    isOpen,
  } = useCombobox({
    id: 'houses-search',
    items: suggestions,
    inputValue: searchValue,
    selectedItem: searchValue,
    onSelectedItemChange: ({ selectedItem }) => {
      if (!selectedItem) return

      skipFetch.current = true

      if (selectedItem === LOCATION_VALUE) {
        setAddressUsingGeoLocation(address => setSearchValue(address))
        return
      }

      setSearchValue(selectedItem)
    },
  })

  useEffect(() => {
    if (skipFetch.current) return

    setBingSuggestions(addresses => {
      if (skipFetch.current) return

      setSuggestions(addresses)
    }, debouncedValue)
  }, [debouncedValue])

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value

    skipFetch.current = removeWhiteSpaces(searchValue) === removeWhiteSpaces(newValue)
    setSearchValue(newValue)

    if (newValue.trim().length === 0) {
      skipFetch.current = true
      setSuggestions(['Current Location'])
    }
  }

  const hasSuggestions = suggestions.length > 0
  const hasLocationSuggestion = suggestions[0] === LOCATION_VALUE

  return (
    <>
      <S.Container>
        <S.InputWrapper {...getComboboxProps({ onFocus: openMenu, onBlur: closeMenu })}>
          <S.Input
            type="text"
            placeholder="Search by address, neighborhood, city or ZIP code"
            {...getInputProps({ onChange })}
          />
          <S.SearchButton aria-label="Search">
            <Loupe />
          </S.SearchButton>
        </S.InputWrapper>

        <S.Suggestions open={isOpen} {...getMenuProps()}>
          {isOpen && (
            <>
              {!hasSuggestions && <S.Empty>No results found.</S.Empty>}

              {hasLocationSuggestion && (
                <S.Suggestion
                  key={`${LOCATION_VALUE}${0}`}
                  active={highlightedIndex === 0}
                  {...getItemProps({ item: LOCATION_VALUE, index: 0 })}
                >
                  <Gps />
                  Current Location
                </S.Suggestion>
              )}

              {!hasLocationSuggestion &&
                suggestions.map((item, index) => {
                  return (
                    <S.Suggestion
                      key={`${item}${index}`}
                      active={highlightedIndex === index}
                      {...getItemProps({ item, index })}
                    >
                      {item}
                    </S.Suggestion>
                  )
                })}
            </>
          )}
        </S.Suggestions>
      </S.Container>
    </>
  )
}
