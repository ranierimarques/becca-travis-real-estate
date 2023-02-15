import { Box, Button, Flex } from '@/common'
import {
  Filters as FiltersType,
  SetFilters,
  useFiltersStore,
} from '@/layout/homes/store/filters'
import { Dialog } from '@/primitives'
import { ReplaceAll } from '@/types/helpers'
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

const filtersOptions = {
  checkboxes: {
    PropertyType: [
      'Residential',
      'Residential Income',
      'Residential Lease',
      'Business Opportunity',
      'Commercial Lease',
      'Land',
    ],
    PropertySubType: [
      'Single Family Residence',
      'Townhouse',
      'Manufactured Home',
      'Farm w/Home',
      'Condominium',
      'Deeded RV',
    ],
    StandardStatus: [
      'Active',
      'Active Under Contract',
      'Coming Soon',
      'Closed',
      'Pending',
      'Expired',
      'Hold',
      'Canceled',
    ],
    City: [
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
  selects: {
    BedroomsTotal: {
      gte: [
        { value: 'default', text: 'Any' },
        ...Array.from(Array(8), (_, i) => ({ value: `${i + 1}`, text: `${i + 1}` })),
      ],
      lte: [
        { value: 'default', text: 'Any' },
        ...Array.from(Array(8), (_, i) => ({ value: `${i + 1}`, text: `${i + 1}` })),
      ],
    },
    BathroomsTotalInteger: {
      gte: [
        { value: 'default', text: 'Any' },
        ...Array.from(Array(8), (_, i) => ({ value: `${i + 1}`, text: `${i + 1}` })),
      ],
      lte: [
        { value: 'default', text: 'Any' },
        ...Array.from(Array(8), (_, i) => ({ value: `${i + 1}`, text: `${i + 1}` })),
      ],
    },
    LivingArea: {
      gte: [
        { value: 'default', text: 'No min' },
        ...Array.from(Array(20), (_, i) => ({
          value: `${(i + 1) * 500}`,
          text: `${((i + 1) * 500).toLocaleString('en-US')} ft²`,
        })),
      ],
      lte: [
        { value: 'default', text: 'No max' },
        ...Array.from(Array(20), (_, i) => ({
          value: `${(i + 1) * 500}`,
          text: `${((i + 1) * 500).toLocaleString('en-US')} ft²`,
        })),
      ],
    },
    LotSizeAcres: {
      gte: [
        { value: 'default', text: 'No min' },
        { value: '0.25', text: '1/4 acre' },
        { value: '0.5', text: '1/2 acre' },
        { value: '1', text: '1 acre' },
        { value: '1.5', text: '1 1/2 acre' },
        { value: '2', text: '2 acre' },
        { value: '2.5', text: '2 1/2 acre' },
        { value: '3', text: '3 acre' },
        { value: '5', text: '5 acre' },
        { value: '10', text: '10 acre' },
        { value: '15', text: '15 acre' },
        { value: '20', text: '20 acre' },
        { value: '25', text: '25 acre' },
        { value: '30', text: '30 acre' },
        { value: '40', text: '40 acre' },
        { value: '50', text: '50 acre' },
        { value: '100', text: '100 acre' },
      ],
      lte: [
        { value: 'default', text: 'No min' },
        { value: '0.25', text: '1/4 acre' },
        { value: '0.5', text: '1/2 acre' },
        { value: '1', text: '1 acre' },
        { value: '1.5', text: '1 1/2 acre' },
        { value: '2', text: '2 acre' },
        { value: '2.5', text: '2 1/2 acre' },
        { value: '3', text: '3 acre' },
        { value: '5', text: '5 acre' },
        { value: '10', text: '10 acre' },
        { value: '15', text: '15 acre' },
        { value: '20', text: '20 acre' },
        { value: '25', text: '25 acre' },
        { value: '30', text: '30 acre' },
        { value: '40', text: '40 acre' },
        { value: '50', text: '50 acre' },
        { value: '100', text: '100 acre' },
      ],
    },
  },
  inputs: {
    ListPrice: {},
    YearBuilt: {},
  },
} as const

type CheckboxesProps = {
  param: keyof typeof filtersOptions['checkboxes']
  setFilters: SetFilters
  filters: FiltersType
}

function Checkboxes({ param, filters, setFilters }: CheckboxesProps) {
  return (
    <S.CheckboxesContainer>
      {filtersOptions.checkboxes[param].map(item => {
        const noSpaceItem = removeSpaces(item)
        return (
          <Checkbox
            key={item}
            label={item}
            checked={filters[param]?.[noSpaceItem as never] === item}
            onCheckedChange={value =>
              setFilters(param, {
                [noSpaceItem]: value === true ? item : undefined,
              })
            }
          />
        )
      })}
    </S.CheckboxesContainer>
  )
}

type SelectsProps = {
  param: keyof typeof filtersOptions['selects']
  setFilters: SetFilters
  filters: FiltersType
}

function Selects({ param, filters, setFilters }: SelectsProps) {
  return (
    <S.InputsContainer>
      <Select.Root
        placeholder="Min"
        value={filters[param]['gte']}
        onValueChange={value => setFilters(param, { ['gte']: value })}
      >
        {filtersOptions.selects[param]['gte'].map(item => (
          <Select.Item key={item.value} value={item.value}>
            {item.text}
          </Select.Item>
        ))}
      </Select.Root>
      <S.InputsText small>to</S.InputsText>
      <Select.Root
        placeholder="Max"
        value={filters[param]['lte']}
        onValueChange={value => setFilters(param, { ['lte']: value })}
      >
        {filtersOptions.selects[param]['lte'].map(item => (
          <Select.Item key={item.value} value={item.value}>
            {item.text}
          </Select.Item>
        ))}
      </Select.Root>
    </S.InputsContainer>
  )
}

type InputsProps = {
  param: keyof typeof filtersOptions['inputs']
  setFilters: SetFilters
  filters: FiltersType
}

function Inputs({ param, filters, setFilters }: InputsProps) {
  return (
    <S.InputsContainer>
      <S.Input
        type="number"
        min="0"
        placeholder="Min"
        value={filters[param]['gte']}
        onChange={event => setFilters(param, { gte: event.target.value })}
      />
      <S.InputsText>to</S.InputsText>
      <S.Input
        type="number"
        min="0"
        placeholder="Max"
        value={filters[param]['lte']}
        onChange={event => setFilters(param, { lte: event.target.value })}
      />
    </S.InputsContainer>
  )
}

export function Filters() {
  const [filters, setFilters, resetFilters] = useFiltersStore(
    state => [state.filters, state.setFilters, state.resetFilters],
    shallow
  )

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
            <Checkboxes param="PropertyType" filters={filters} setFilters={setFilters} />
          </div>
          <div>
            <Title title="Property sub-type" />
            <Checkboxes
              param="PropertySubType"
              filters={filters}
              setFilters={setFilters}
            />
          </div>
          <div>
            <Title title="Price range" />
            <Inputs param="ListPrice" filters={filters} setFilters={setFilters} />
          </div>
          <S.MultiColumnContainer>
            <div>
              <Title title="Bedrooms" />
              <Selects param="BedroomsTotal" filters={filters} setFilters={setFilters} />
            </div>
            <div>
              <Title title="Bathrooms" />
              <Selects
                param="BathroomsTotalInteger"
                filters={filters}
                setFilters={setFilters}
              />
            </div>
            <div>
              <Title title="Property size" />
              <Selects param="LivingArea" filters={filters} setFilters={setFilters} />
            </div>
            <div>
              <Title title="Lot size" />
              <Selects param="LotSizeAcres" filters={filters} setFilters={setFilters} />
            </div>
          </S.MultiColumnContainer>
          <div>
            <Title title="Listing status" />
            <Checkboxes
              param="StandardStatus"
              filters={filters}
              setFilters={setFilters}
            />
          </div>
          <S.Disabled>
            <Title title="Open houses" />
            <S.CheckboxesContainer>
              <Checkbox disabled label="Search Open Houses" />
            </S.CheckboxesContainer>
          </S.Disabled>
          <div>
            <Title title="Year built" />
            <Inputs param="YearBuilt" filters={filters} setFilters={setFilters} />
          </div>
          <S.Disabled>
            <Title title="Stories" />
            <S.CheckboxesContainer>
              <Checkbox label="Multi/split" />
              <Checkbox label="One" />
              <Checkbox label="One and One Half" />
              <Checkbox label="Two" />
              <Checkbox label="Tri-Level" />
              <Checkbox label="Three Or More" />
            </S.CheckboxesContainer>
          </S.Disabled>
          <S.MultiColumnContainer>
            <div>
              <Title title="Elementary school" />
              <S.Input
                type="text"
                value={filters.ElementarySchool}
                onChange={event => setFilters('ElementarySchool', event.target.value)}
              />
            </div>
            <div>
              <Title title="Middle school" />
              <S.Input
                type="text"
                value={filters.MiddleOrJuniorSchool}
                onChange={event => setFilters('MiddleOrJuniorSchool', event.target.value)}
              />
            </div>
            <div>
              <Title title="High school" />
              <S.Input
                type="text"
                value={filters.HighSchool}
                onChange={event => setFilters('HighSchool', event.target.value)}
              />
            </div>
          </S.MultiColumnContainer>
          <div>
            <Title title="City" />
            <Checkboxes param="City" filters={filters} setFilters={setFilters} />
          </div>
          <S.MultiColumnContainer>
            <div>
              <Title title="Zip code" />
              <S.Input
                type="text"
                value={filters.PostalCode}
                onChange={event => setFilters('PostalCode', event.target.value)}
              />
            </div>
            <S.Disabled>
              <Title title="Foreclosures" />
              <Select.Root placeholder="No preference">
                <Select.Item value="default">No preference</Select.Item>
                <Select.Item value="search-foreclosures">Search foreclosures</Select.Item>
                <Select.Item value="exclude-foreclosures">
                  Exclude foreclosures
                </Select.Item>
              </Select.Root>
            </S.Disabled>
            <S.Disabled>
              <Title title="Short Sales" />
              <Select.Root placeholder="No preference">
                <Select.Item value="default">No preference</Select.Item>
                <Select.Item value="Search-short-sales">Search short sales</Select.Item>
                <Select.Item value="Exclude-short-sales">Exclude short sales</Select.Item>
              </Select.Root>
            </S.Disabled>
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
