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

function getSearchQuery(value: string) {
  return removeWhiteSpaces(value).replaceAll(' ', '%20')
}

export async function getBingSuggestions(value: string): Promise<string[]> {
  const query = getSearchQuery(value)
  const response = await fetch(
    `https://dev.virtualearth.net/REST/v1/Autosuggest?key=${process.env.NEXT_PUBLIC_BING_AUTOCOMPLETE_API_KEY}&query=${query}&countryFilter=US`
  )
  const data = (await response.json()) as BingSuggestions
  const suggestions = data.resourceSets[0].resources[0].value
  return suggestions.map(suggestion => suggestion.address.formattedAddress)
}

export function getAddressUsingGeoLocation(): Promise<string> {
  return new Promise((resolve, reject) => {
    async function success(position: GeolocationPosition) {
      const { latitude, longitude } = position.coords
      const response = await fetch(`/api/location?lat=${latitude}&lng=${longitude}`)
      const address = (await response.json()) as string
      resolve(address)
    }

    function error(err: GeolocationPositionError) {
      alert(
        'There is no location support on this device or it is disabled. Please check your settings.'
      )
      reject(err)
    }

    navigator.geolocation.getCurrentPosition(success, error)
  })
}

export function removeWhiteSpaces(string: string) {
  return string.trim().replace(/\s+/g, ' ')
}
