import { Dispatch, MutableRefObject, SetStateAction } from 'react'

export const LOCATION_VALUE = 'Current Location'

type BingSuggestions = {
  resourceSets: {
    resources: {
      value: {
        address: {
          formattedAddress: string
        }
      }[]
    }[]
  }[]
}

export function setBingSuggestions(
  value: string,
  setState: Dispatch<SetStateAction<string[]>>,
  skipFetch: MutableRefObject<boolean>
) {
  function getSearchQuery() {
    return value.trim().replaceAll(' ', '%20')
  }

  async function fetchBingSuggestions() {
    const query = getSearchQuery()
    const response = await fetch(
      `https://dev.virtualearth.net/REST/v1/Autosuggest?key=${process.env.NEXT_PUBLIC_BING_AUTOCOMPLETE_API_KEY}&query=${query}&countryFilter=US`
    )
    const data = (await response.json()) as BingSuggestions
    const suggestions = data.resourceSets[0].resources[0].value
    return suggestions.map(suggestion => suggestion.address.formattedAddress)
  }

  async function setSuggestions() {
    const addresses = await fetchBingSuggestions()
    if (skipFetch.current) return // Prevent set Addresses concurrency
    setState(addresses)
  }

  if (skipFetch.current) return

  setSuggestions()
}

type Callback = (address: string) => void

export function setAddressUsingGeoLocation(callback: Callback) {
  function error(err: GeolocationPositionError) {
    console.log(err)
    alert(
      'There is no location support on this device or it is disabled. Please check your settings.'
    )
  }

  async function success(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords
    const response = await fetch(`/api/location?lat=${latitude}&lng=${longitude}`)
    const address = (await response.json()) as string
    callback(address)
  }

  navigator.geolocation.getCurrentPosition(success, error)
}
