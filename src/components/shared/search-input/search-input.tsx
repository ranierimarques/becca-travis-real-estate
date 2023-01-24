import { useGeolocationStore } from '@/layout/homes/store/geolocation'
import useDebounceTwo from '@/resources/hooks/useDebounceTwo'
import { useCombobox } from 'downshift'
import { ChangeEvent, useRef, useState } from 'react'
import * as S from './search-input.styles'
import { Gps, Loupe } from './svgs'
import {
  getAddressUsingGeoLocation,
  getBingSuggestions,
  LOCATION_VALUE,
  removeWhiteSpaces,
} from './utils'

type SearchProps = React.ComponentProps<typeof S.Container>

export function SearchInput({ ...props }: SearchProps) {
  const skip = useRef(true)
  const setGeoLocation = useGeolocationStore(state => state.setGeoLocation)
  const [searchValue, setSearchValue] = useState('')
  const [lastFetchValue, setLastFetchValue] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([LOCATION_VALUE])
  const debounce = useDebounceTwo(500, skip)
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
    onSelectedItemChange: async ({ selectedItem }) => {
      if (!selectedItem) return

      if (selectedItem === LOCATION_VALUE) {
        const address = await getAddressUsingGeoLocation()

        setSearchValue(address)
        setGeoLocation({ address })
        return
      }

      setSearchValue(selectedItem)
      setGeoLocation({ address: selectedItem })
    },
  })

  function resetStatesToInitialValue() {
    setSuggestions([LOCATION_VALUE])
    setGeoLocation({ address: '' })
    setLastFetchValue('')
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
    setSearchValue(newValue)

    skip.current = true

    // isEmpty
    if (newValue.trim().length === 0) {
      resetStatesToInitialValue()
      return
    }

    // no changes since last fetch
    if (removeWhiteSpaces(lastFetchValue) === removeWhiteSpaces(newValue)) return

    debounce(async () => {
      if (skip.current) return

      setLastFetchValue(newValue)
      const addresses = await getBingSuggestions(newValue)

      if (skip.current) return

      setSuggestions(addresses)
      setGeoLocation({ address: newValue })
    })
  }

  const hasSuggestions = suggestions.length > 0
  const hasLocationSuggestion = suggestions[0] === LOCATION_VALUE

  return (
    <S.Container {...props}>
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
  )
}
