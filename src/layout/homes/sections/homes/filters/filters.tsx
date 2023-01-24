import { Box, Button, Flex } from '@/common'
import { useGeolocationStore } from '@/layout/homes/store/geolocation'
import { Dialog } from '@/primitives'
import { useState } from 'react'
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

function Checkbox({ label }: { label: string }) {
  return (
    <Flex css={{ alignItems: 'center', gap: 8 }}>
      <S.CheckBoxRoot id={label}>
        <S.CheckBoxIndicator>
          <Svg.Check />
        </S.CheckBoxIndicator>
      </S.CheckBoxRoot>
      <S.Label htmlFor={label}>{label}</S.Label>
    </Flex>
  )
}

export function Filters() {
  const [bedroomLte, setBedroomLte] = useState('')
  const [bedroomGte, setBedroomGte] = useState('')
  const [bathroomLte, setBathroomLte] = useState('')
  const [bathroomGte, setBathroomGte] = useState('')

  const setGeoLocation = useGeolocationStore(state => state.setGeoLocation)
  const geoLocation = useGeolocationStore(state => state.geoLocation)

  const removeFiltersInGeolocation = () => {
    const newGeoLocation = { ...geoLocation }
    delete newGeoLocation.filter
    setBedroomLte('')
    setBedroomGte('')
    setBathroomLte('')
    setBathroomGte('')
    setGeoLocation(newGeoLocation)
  }

  const searchGeolocation = () => {
    setGeoLocation({
      filter: {
        BedroomsTotal: {
          lte: Number(bedroomLte),
          gte: Number(bedroomGte),
        },
        BathroomsTotalInteger: {
          lte: Number(bathroomLte),
          gte: Number(bathroomGte),
        },
      },
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
              <Checkbox label="Residential" />
              <Checkbox label="Business Opportunity" />
              <Checkbox label="Land" />
              <Checkbox label="Residential Income" />
            </S.CheckboxesContainer>
          </div>
          <div>
            <Title title="Property sub-type" />
            <S.CheckboxesContainer>
              <Checkbox label="Single Family Residence" />
              <Checkbox label="Townhouse" />
              <Checkbox label="Manufactured Home" />
              <Checkbox label="Farm W/home" />
              <Checkbox label="Condominium" />
              <Checkbox label="Single Family Detached" />
              <Checkbox label="Deeded Rv" />
            </S.CheckboxesContainer>
          </div>
          <div>
            <Title title="Price range" />
            <S.InputsContainer>
              <S.Input type="number" min="0" placeholder="Min" />
              <S.InputsText>to</S.InputsText>
              <S.Input type="number" min="0" placeholder="Max" />
            </S.InputsContainer>
          </div>
          <S.MultiColumnContainer>
            <div>
              <Title title="Bedrooms" />
              <S.InputsContainer>
                <Select.Root placeholder="Min">
                  <Select.Item value="any">Any</Select.Item>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Select.Item key={index} value={`${index + 1}`}>
                      {index + 1}
                    </Select.Item>
                  ))}
                </Select.Root>
                <S.InputsText small>to</S.InputsText>
                <Select.Root placeholder="Max">
                  <Select.Item value="any">Any</Select.Item>
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
                <Select.Root placeholder="Min">
                  <Select.Item value="any">Any</Select.Item>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Select.Item key={index} value={`${index + 1}`}>
                      {index + 1}
                    </Select.Item>
                  ))}
                </Select.Root>
                <S.InputsText small>to</S.InputsText>
                <Select.Root placeholder="Max">
                  <Select.Item value="any">Any</Select.Item>
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
                <Select.Root placeholder="Min">
                  <Select.Item value="no-min">No min</Select.Item>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <Select.Item key={index} value={`${(index + 1) * 500}`}>
                      {((index + 1) * 500).toLocaleString('en-US')} ft²
                    </Select.Item>
                  ))}
                </Select.Root>
                <S.InputsText small>to</S.InputsText>
                <Select.Root placeholder="Max">
                  <Select.Item value="no-max">No max</Select.Item>
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
                <Select.Root placeholder="Min">
                  <Select.Item value="no-min">No min</Select.Item>
                  <Select.Item value="1/4-acre">1/4 acre</Select.Item>
                  <Select.Item value="1/2-acre">1/2 acre</Select.Item>
                  <Select.Item value="1 acre">1 acre</Select.Item>
                  <Select.Item value="1-1/2-acre">1 1/2 acre</Select.Item>
                  <Select.Item value="2-acres">2 acres</Select.Item>
                  <Select.Item value="2-1/2-acres">2 1/2 acres</Select.Item>
                  <Select.Item value="3-acres">3 acres</Select.Item>
                  <Select.Item value="5-acres">5 acres</Select.Item>
                  <Select.Item value="10-acres">10 acres</Select.Item>
                  <Select.Item value="15-acres">15 acres</Select.Item>
                  <Select.Item value="20-acres">20 acres</Select.Item>
                  <Select.Item value="25-acres">25 acres</Select.Item>
                  <Select.Item value="30-acres">30 acres</Select.Item>
                  <Select.Item value="40-acres">40 acres</Select.Item>
                  <Select.Item value="50-acres">50 acres</Select.Item>
                  <Select.Item value="100-acres">100 acres</Select.Item>
                </Select.Root>
                <S.InputsText small>to</S.InputsText>
                <Select.Root placeholder="Max">
                  <Select.Item value="no-max">No max</Select.Item>
                  <Select.Item value="1/4-acre">1/4 acre</Select.Item>
                  <Select.Item value="1/2-acre">1/2 acre</Select.Item>
                  <Select.Item value="1 acre">1 acre</Select.Item>
                  <Select.Item value="1-1/2-acre">1 1/2 acre</Select.Item>
                  <Select.Item value="2-acres">2 acres</Select.Item>
                  <Select.Item value="2-1/2-acres">2 1/2 acres</Select.Item>
                  <Select.Item value="3-acres">3 acres</Select.Item>
                  <Select.Item value="5-acres">5 acres</Select.Item>
                  <Select.Item value="10-acres">10 acres</Select.Item>
                  <Select.Item value="15-acres">15 acres</Select.Item>
                  <Select.Item value="20-acres">20 acres</Select.Item>
                  <Select.Item value="25-acres">25 acres</Select.Item>
                  <Select.Item value="30-acres">30 acres</Select.Item>
                  <Select.Item value="40-acres">40 acres</Select.Item>
                  <Select.Item value="50-acres">50 acres</Select.Item>
                  <Select.Item value="100-acres">100 acres</Select.Item>
                </Select.Root>
              </S.InputsContainer>
            </div>
          </S.MultiColumnContainer>
          <div>
            <Title title="Listing status" />
            <S.CheckboxesContainer>
              <Checkbox label="Active" />
              <Checkbox label="Active Under Contract" />
              <Checkbox label="Coming Soon" />
              <Checkbox label="Sold" />
              <Checkbox label="Pending" />
            </S.CheckboxesContainer>
          </div>
          <div>
            <Title title="Open houses" />
            <S.CheckboxesContainer>
              <Checkbox label="Search Open Houses" />
            </S.CheckboxesContainer>
          </div>
          <div>
            <Title title="Year built" />
            <S.InputsContainer>
              <S.Input type="number" min="0" placeholder="Min" />
              <S.InputsText>to</S.InputsText>
              <S.Input type="number" min="0" placeholder="Max" />
            </S.InputsContainer>
          </div>
          <div>
            <Title title="Stories" />
            <S.CheckboxesContainer>
              <Checkbox label="Multi/split" />
              <Checkbox label="One" />
              <Checkbox label="One and One Half" />
              <Checkbox label="Two" />
              <Checkbox label="Tri-Level" />
              <Checkbox label="Three Or More" />
            </S.CheckboxesContainer>
          </div>
          <S.MultiColumnContainer>
            <div>
              <Title title="Elementary school" />
              <S.Input />
            </div>
            <div>
              <Title title="Middle school" />
              <S.Input />
            </div>
            <div>
              <Title title="High school" />
              <S.Input />
            </div>
          </S.MultiColumnContainer>
          <div>
            <Title title="City" />
            <S.CheckboxesContainer>
              <Checkbox label="Addison" />
              <Checkbox label="Albertville" />
              <Checkbox label="Alexandria" />
              <Checkbox label="Altoona" />
              <Checkbox label="Anderson" />
              <Checkbox label="Anniston" />
              <Checkbox label="Arab" />
              <Checkbox label="Ardmore" />
              <Checkbox label="Arley" />
              <Checkbox label="Ashville" />
            </S.CheckboxesContainer>
          </div>
          <S.MultiColumnContainer>
            <div>
              <Title title="Zip code" />
              <S.Input />
            </div>
            <div>
              <Title title="Foreclosures" />
              <Select.Root placeholder="No preference">
                <Select.Item value="no-preference">No preference</Select.Item>
                <Select.Item value="search-foreclosures">Search foreclosures</Select.Item>
                <Select.Item value="exclude-foreclosures">
                  Exclude foreclosures
                </Select.Item>
              </Select.Root>
            </div>
            <div>
              <Title title="Short Sales" />
              <Select.Root placeholder="No preference">
                <Select.Item value="no-preference">No preference</Select.Item>
                <Select.Item value="Search-short-sales">Search short sales</Select.Item>
                <Select.Item value="Exclude-short-sales">Exclude short sales</Select.Item>
              </Select.Root>
            </div>
          </S.MultiColumnContainer>
        </S.Container>

        <Flex
          justify="between"
          css={{ p: 14, bg: '$grayW10', boxShadow: '0 0 0 1px $colors$grayW8' }}
        >
          <Button size="2" outlined onClick={removeFiltersInGeolocation}>
            Clear filters
          </Button>
          <Button size="2" onClick={searchGeolocation}>
            Save filters
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
