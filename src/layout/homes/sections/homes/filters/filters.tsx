import { Box, Button, Flex } from '@/common'
import {
  SetFiltersSection,
  SetFiltersSection2,
  useGeolocationStore,
} from '@/layout/homes/store/geolocation'
import { Dialog } from '@/primitives'
import { ReplaceAll } from '@/types/helpers'
import { CheckedState } from '@radix-ui/react-checkbox'
import { ComponentProps } from 'react'
import shallow from 'zustand/shallow'
import { Select } from '..'
import * as Svg from '../svgs'
import * as S from './filters.styles'

function Title({ title }: { title: string }) {
  return (
    <Flex align="center" css={{ gap: 16, mb: 8 }}>
      <S.Title>{title}</S.Title>
      <Box css={{ bg: '$grayW9', w: '100%', h: 1 }} />
    </Flex>
  )
}

type CheckboxProps = ComponentProps<typeof S.CheckBoxRoot> & {
  label: string
}

function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <Flex css={{ alignItems: 'center', gap: 8 }}>
      <S.CheckBoxRoot id={label} {...props}>
        <S.CheckBoxIndicator>
          <Svg.Check />
        </S.CheckBoxIndicator>
      </S.CheckBoxRoot>
      <S.Label htmlFor={label}>{label}</S.Label>
    </Flex>
  )
}

function removeSpaces<T extends string>(string: T) {
  return string.replaceAll(' ', '') as ReplaceAll<T, ' ', ''>
}

const filters = {
  checkboxes: {
    propertyType: {
      title: 'PropertyType',
      items: [
        'Residential',
        'Residential Income',
        'Residential Lease',
        'Business Opportunity',
        'Commercial Lease',
        'Land',
      ],
    },
    propertySubType: {
      title: 'PropertySubType',
      items: [
        'Single Family Residence',
        'Townhouse',
        'Manufactured Home',
        'Farm w/Home',
        'Condominium',
        'Deeded RV',
      ],
    },
    standardStatus: {
      title: 'StandardStatus',
      items: [
        'Active',
        'Active Under Contract',
        'Coming Soon',
        'Closed',
        'Pending',
        'Expired',
        'Hold',
        'Canceled',
      ],
    },
    city: {
      title: 'City',
      items: [
        'Addison',
        'Albertville',
        'Alexandria',
        'Altoona',
        'Anderson',
        'Anniston',
        'Arab',
        'Ardmore',
        'Arley',
        'Ashville',
      ],
    },
  },
} as const

export function Filters() {
  const [geoLocation, setFilters, setFilters2, resetFilters] = useGeolocationStore(
    state => [state.geoLocation, state.setFilters, state.setFilters2, state.resetFilters],
    shallow
  )

  function handleCheckboxChange(
    section: SetFiltersSection,
    checked: CheckedState,
    key: string
  ) {
    setFilters(section, {
      [removeSpaces(key)]: checked === true ? key : undefined,
    })
  }

  function handleInputChange(section: SetFiltersSection, value: string, key: string) {
    setFilters(section, {
      [key]: value,
    })
  }

  function handleInput2Change(section: SetFiltersSection2, value: string) {
    setFilters2(section, value)
  }

  function handleSelectChange(section: SetFiltersSection, value: string, key: string) {
    console.log(value)

    setFilters(section, {
      [key]: value,
    })
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <S.Button css={{ marginLeft: 16 }}>
          <Svg.Filter /> Filters
        </S.Button>
      </Dialog.Trigger>
      <Dialog.Content
        title="Filters"
        description="You can filter your searches"
        variant="3"
      >
        <S.TopBar>Filter</S.TopBar>
        <S.Container>
          <div>
            <Title title="Property type" />
            <S.CheckboxesContainer>
              {filters.checkboxes.propertyType.items.map(item => {
                const section = filters.checkboxes.propertyType.title
                return (
                  <Checkbox
                    key={item}
                    label={item}
                    checked={geoLocation.filter?.[section]?.[removeSpaces(item)] === item}
                    onCheckedChange={value => handleCheckboxChange(section, value, item)}
                  />
                )
              })}
            </S.CheckboxesContainer>
          </div>
          <div>
            <Title title="Property sub-type" />
            <S.CheckboxesContainer>
              {filters.checkboxes.propertySubType.items.map(item => {
                const section = filters.checkboxes.propertySubType.title
                return (
                  <Checkbox
                    key={item}
                    label={item}
                    checked={geoLocation.filter?.[section]?.[removeSpaces(item)] === item}
                    onCheckedChange={value => handleCheckboxChange(section, value, item)}
                  />
                )
              })}
            </S.CheckboxesContainer>
          </div>
          <div>
            <Title title="Price range" />
            <S.InputsContainer>
              <S.Input
                type="number"
                min="0"
                placeholder="Min"
                value={geoLocation.filter?.ListPrice?.['gte'] ?? ''}
                onChange={event =>
                  handleInputChange('ListPrice', event.target.value, 'gte')
                }
              />
              <S.InputsText>to</S.InputsText>
              <S.Input
                type="number"
                min="0"
                placeholder="Max"
                value={geoLocation.filter?.ListPrice?.['lte'] ?? ''}
                onChange={event =>
                  handleInputChange('ListPrice', event.target.value, 'lte')
                }
              />
            </S.InputsContainer>
          </div>
          <S.MultiColumnContainer>
            <div>
              <Title title="Bedrooms" />
              <S.InputsContainer>
                <Select.Root
                  placeholder="Min"
                  value={geoLocation.filter?.BedroomsTotal?.['gte']}
                  onValueChange={value =>
                    handleSelectChange('BedroomsTotal', value, 'gte')
                  }
                >
                  <Select.Item value="default">Any</Select.Item>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Select.Item key={index} value={`${index + 1}`}>
                      {index + 1}
                    </Select.Item>
                  ))}
                </Select.Root>
                <S.InputsText small>to</S.InputsText>
                <Select.Root
                  placeholder="Max"
                  value={geoLocation.filter?.BedroomsTotal?.['lte']}
                  onValueChange={value =>
                    handleSelectChange('BedroomsTotal', value, 'lte')
                  }
                >
                  <Select.Item value="default">Any</Select.Item>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Select.Item key={index} value={`${index + 1}`}>
                      {index + 1}
                    </Select.Item>
                  ))}
                </Select.Root>
              </S.InputsContainer>
            </div>
            <div>
              <Title title="Bathrooms" />
              <S.InputsContainer>
                <Select.Root
                  placeholder="Min"
                  value={geoLocation.filter?.BathroomsTotalInteger?.['gte']}
                  onValueChange={value =>
                    handleSelectChange('BathroomsTotalInteger', value, 'gte')
                  }
                >
                  <Select.Item value="default">Any</Select.Item>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Select.Item key={index} value={`${index + 1}`}>
                      {index + 1}
                    </Select.Item>
                  ))}
                </Select.Root>
                <S.InputsText small>to</S.InputsText>
                <Select.Root
                  placeholder="Max"
                  value={geoLocation.filter?.BathroomsTotalInteger?.['lte']}
                  onValueChange={value =>
                    handleSelectChange('BathroomsTotalInteger', value, 'lte')
                  }
                >
                  <Select.Item value="default">Any</Select.Item>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Select.Item key={index} value={`${index + 1}`}>
                      {index + 1}
                    </Select.Item>
                  ))}
                </Select.Root>
              </S.InputsContainer>
            </div>
            <div>
              <Title title="Property size" />
              <S.InputsContainer>
                <Select.Root
                  placeholder="Min"
                  value={geoLocation.filter?.LivingArea?.['gte']}
                  onValueChange={value => handleSelectChange('LivingArea', value, 'gte')}
                >
                  <Select.Item value="default">No min</Select.Item>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <Select.Item key={index} value={`${(index + 1) * 500}`}>
                      {((index + 1) * 500).toLocaleString('en-US')} ft²
                    </Select.Item>
                  ))}
                </Select.Root>
                <S.InputsText small>to</S.InputsText>
                <Select.Root
                  placeholder="Max"
                  value={geoLocation.filter?.LivingArea?.['lte']}
                  onValueChange={value => handleSelectChange('LivingArea', value, 'lte')}
                >
                  <Select.Item value="default">No max</Select.Item>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <Select.Item key={index} value={`${(index + 1) * 500}`}>
                      {((index + 1) * 500).toLocaleString('en-US')} ft²
                    </Select.Item>
                  ))}
                </Select.Root>
              </S.InputsContainer>
            </div>
            <div>
              <Title title="Lot size" />
              <S.InputsContainer>
                <Select.Root
                  placeholder="Min"
                  value={geoLocation.filter?.LotSizeAcres?.['gte']}
                  onValueChange={value =>
                    handleSelectChange('LotSizeAcres', value, 'gte')
                  }
                >
                  <Select.Item value="default">No min</Select.Item>
                  <Select.Item value="0.25">1/4 acre</Select.Item>
                  <Select.Item value="0.50">1/2 acre</Select.Item>
                  <Select.Item value="1">1 acre</Select.Item>
                  <Select.Item value="1.5">1 1/2 acre</Select.Item>
                  <Select.Item value="2">2 acres</Select.Item>
                  <Select.Item value="2.5">2 1/2 acres</Select.Item>
                  <Select.Item value="3">3 acres</Select.Item>
                  <Select.Item value="5">5 acres</Select.Item>
                  <Select.Item value="10">10 acres</Select.Item>
                  <Select.Item value="15">15 acres</Select.Item>
                  <Select.Item value="20">20 acres</Select.Item>
                  <Select.Item value="25">25 acres</Select.Item>
                  <Select.Item value="30">30 acres</Select.Item>
                  <Select.Item value="40">40 acres</Select.Item>
                  <Select.Item value="50">50 acres</Select.Item>
                  <Select.Item value="100">100 acres</Select.Item>
                </Select.Root>
                <S.InputsText small>to</S.InputsText>
                <Select.Root
                  placeholder="Max"
                  value={geoLocation.filter?.LotSizeAcres?.['lte']}
                  onValueChange={value =>
                    handleSelectChange('LotSizeAcres', value, 'lte')
                  }
                >
                  <Select.Item value="default">No min</Select.Item>
                  <Select.Item value="0.25">1/4 acre</Select.Item>
                  <Select.Item value="0.50">1/2 acre</Select.Item>
                  <Select.Item value="1">1 acre</Select.Item>
                  <Select.Item value="1.5">1 1/2 acre</Select.Item>
                  <Select.Item value="2">2 acres</Select.Item>
                  <Select.Item value="2.5">2 1/2 acres</Select.Item>
                  <Select.Item value="3">3 acres</Select.Item>
                  <Select.Item value="5">5 acres</Select.Item>
                  <Select.Item value="10">10 acres</Select.Item>
                  <Select.Item value="15">15 acres</Select.Item>
                  <Select.Item value="20">20 acres</Select.Item>
                  <Select.Item value="25">25 acres</Select.Item>
                  <Select.Item value="30">30 acres</Select.Item>
                  <Select.Item value="40">40 acres</Select.Item>
                  <Select.Item value="50">50 acres</Select.Item>
                  <Select.Item value="100">100 acres</Select.Item>
                </Select.Root>
              </S.InputsContainer>
            </div>
          </S.MultiColumnContainer>
          <div>
            <Title title="Listing status" />
            <S.CheckboxesContainer>
              {filters.checkboxes.standardStatus.items.map(item => {
                const section = filters.checkboxes.standardStatus.title
                return (
                  <Checkbox
                    key={item}
                    label={item}
                    checked={geoLocation.filter?.[section]?.[removeSpaces(item)] === item}
                    onCheckedChange={value => handleCheckboxChange(section, value, item)}
                  />
                )
              })}
            </S.CheckboxesContainer>
          </div>
          <Box css={{ opacity: 0.33, pointerEvents: 'none', userSelect: 'none' }}>
            <Title title="Open houses" />
            <S.CheckboxesContainer>
              <Checkbox disabled label="Search Open Houses" />
            </S.CheckboxesContainer>
          </Box>
          <div>
            <Title title="Year built" />
            <S.InputsContainer>
              <S.Input
                type="number"
                min="0"
                placeholder="Min"
                value={geoLocation.filter?.YearBuilt?.['gte'] ?? ''}
                onChange={event =>
                  handleInputChange('YearBuilt', event.target.value, 'gte')
                }
              />
              <S.InputsText>to</S.InputsText>
              <S.Input
                type="number"
                min="0"
                placeholder="Max"
                value={geoLocation.filter?.YearBuilt?.['lte'] ?? ''}
                onChange={event =>
                  handleInputChange('YearBuilt', event.target.value, 'lte')
                }
              />
            </S.InputsContainer>
          </div>
          <Box css={{ opacity: 0.33, pointerEvents: 'none', userSelect: 'none' }}>
            <Title title="Stories" />
            <S.CheckboxesContainer>
              <Checkbox label="Multi/split" />
              <Checkbox label="One" />
              <Checkbox label="One and One Half" />
              <Checkbox label="Two" />
              <Checkbox label="Tri-Level" />
              <Checkbox label="Three Or More" />
            </S.CheckboxesContainer>
          </Box>
          <S.MultiColumnContainer>
            <div>
              <Title title="Elementary school" />
              <S.Input
                type="text"
                value={geoLocation.filter?.ElementarySchool}
                onChange={event =>
                  handleInput2Change('ElementarySchool', event.target.value)
                }
              />
            </div>
            <div>
              <Title title="Middle school" />
              <S.Input
                type="text"
                value={geoLocation.filter?.MiddleOrJuniorSchool}
                onChange={event =>
                  handleInput2Change('MiddleOrJuniorSchool', event.target.value)
                }
              />
            </div>
            <div>
              <Title title="High school" />
              <S.Input
                type="text"
                value={geoLocation.filter?.HighSchool}
                onChange={event => handleInput2Change('HighSchool', event.target.value)}
              />
            </div>
          </S.MultiColumnContainer>
          <div>
            <Title title="City" />
            <S.CheckboxesContainer>
              {filters.checkboxes.city.items.map(item => {
                const section = filters.checkboxes.city.title
                return (
                  <Checkbox
                    key={item}
                    label={item}
                    checked={geoLocation.filter?.[section]?.[removeSpaces(item)] === item}
                    onCheckedChange={value => handleCheckboxChange(section, value, item)}
                  />
                )
              })}
            </S.CheckboxesContainer>
          </div>
          <S.MultiColumnContainer>
            <div>
              <Title title="Zip code" />
              <S.Input
                type="text"
                value={geoLocation.filter?.PostalCode ?? ''}
                onChange={event => handleInput2Change('PostalCode', event.target.value)}
              />
            </div>
            <Box css={{ opacity: 0.33, pointerEvents: 'none', userSelect: 'none' }}>
              <Title title="Foreclosures" />
              <Select.Root placeholder="No preference">
                <Select.Item value="default">No preference</Select.Item>
                <Select.Item value="search-foreclosures">Search foreclosures</Select.Item>
                <Select.Item value="exclude-foreclosures">
                  Exclude foreclosures
                </Select.Item>
              </Select.Root>
            </Box>
            <Box css={{ opacity: 0.33, pointerEvents: 'none', userSelect: 'none' }}>
              <Title title="Short Sales" />
              <Select.Root placeholder="No preference">
                <Select.Item value="default">No preference</Select.Item>
                <Select.Item value="Search-short-sales">Search short sales</Select.Item>
                <Select.Item value="Exclude-short-sales">Exclude short sales</Select.Item>
              </Select.Root>
            </Box>
          </S.MultiColumnContainer>
        </S.Container>

        <Flex
          justify="between"
          css={{ p: 14, bg: '$grayW10', boxShadow: '0 0 0 1px $colors$grayW8' }}
        >
          <Button size="2" outlined onClick={resetFilters}>
            Clear filters
          </Button>
          <Button size="2">Save filters</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
