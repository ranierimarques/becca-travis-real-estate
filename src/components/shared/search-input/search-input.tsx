import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useCombobox } from 'downshift'
import shallow from 'zustand/shallow'
import { useFiltersStore } from '@/layout/homes/store/filters'
import useDebounceTwo from '@/resources/hooks/useDebounceTwo'
import * as S from './search-input.styles'
import { Gps, Loupe } from './svgs'
import {
  LOCATION_VALUE,
  getAddressUsingGeoLocation,
  getBingSuggestions,
  removeWhiteSpaces,
} from './utils'

type SearchProps = React.ComponentProps<typeof S.Form> & {
  navigate?: boolean
}

export function SearchInput({ navigate, ...props }: SearchProps) {
  const router = useRouter()
  const skip = useRef(true)
  const [filters, setFilters] = useFiltersStore(
    state => [state.filters, state.setFilters],
    shallow
  )
  const [searchValue, setSearchValue] = useState(filters.address)
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
        setFilters('address', address)
      } else {
        setSearchValue(selectedItem)
        setFilters('address', selectedItem)
      }

      handleNavigate()
    },
  })

  function resetStatesToInitialValue() {
    setSuggestions([LOCATION_VALUE])
    setFilters('address', '')
    setLastFetchValue('')
  }

  function handleInputTyping(event: ChangeEvent<HTMLInputElement>) {
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
      setFilters('address', newValue)
    })
  }

  function handleNavigate() {
    if (navigate) {
      router.push('/homes?view=map', undefined, { shallow: true })
    }
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (searchValue !== '') {
      setFilters('address', searchValue)
      handleNavigate()
    }
  }

  const hasSuggestions = suggestions.length > 0
  const hasLocationSuggestion = suggestions[0] === LOCATION_VALUE

  return (
    <S.Form onSubmit={handleSearch} {...props}>
      <S.InputWrapper {...getComboboxProps({ onFocus: openMenu, onBlur: closeMenu })}>
        <S.Input
          type="text"
          placeholder="Search by address, neighborhood, city or ZIP code"
          {...getInputProps({ onChange: handleInputTyping })}
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
    </S.Form>
  )
}
