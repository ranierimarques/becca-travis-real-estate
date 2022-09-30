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
  callback: (addresses: string[]) => void,
  value: string
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
    callback(addresses)
  }

  setSuggestions()
}

export function setAddressUsingGeoLocation(callback: (address: string) => void) {
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

export function removeWhiteSpaces(string: string) {
  return string.replace(/\s+/g, '')
}
