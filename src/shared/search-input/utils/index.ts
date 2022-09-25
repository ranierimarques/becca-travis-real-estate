function getSearchQuery(value: string) {
  return value.trim().replaceAll(' ', '%20')
}

type SmartySuggestion = {
  street_line: string
  secondary: string
  city: string
  state: string
  zipcode: string
  entries: number
}

type SmartySuggestions = {
  suggestions: SmartySuggestion[]
}

function smartyBuildAddress(suggestion: SmartySuggestion) {
  const { city, entries, secondary, state, street_line, zipcode } = suggestion
  let secondaryAndEntries = ''
  let whiteSpace = ''

  if (secondary) whiteSpace = ' '
  if (secondary && entries > 1) secondaryAndEntries = `${secondary} (${entries} entries)`

  return `${street_line}${whiteSpace}${secondaryAndEntries} ${city}, ${state} ${zipcode}`
}

async function fetchSmartySuggestions(value: string) {
  const searchQuery = getSearchQuery(value)
  const response = await fetch(
    `https://us-autocomplete-pro.api.smartystreets.com/lookup?key=${process.env.NEXT_PUBLIC_SMARTY_AUTOCOMPLETE_API_KEY}&search=${searchQuery}&max_results=6`
  )
  const data = (await response.json()) as SmartySuggestions
  return data.suggestions.map(suggestion => smartyBuildAddress(suggestion))
}

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

async function fetchBingSuggestions(value: string) {
  const searchQuery = getSearchQuery(value)
  const response = await fetch(
    `https://dev.virtualearth.net/REST/v1/Autosuggest?key=${process.env.NEXT_PUBLIC_BING_AUTOCOMPLETE_API_KEY}&query=${searchQuery}&countryFilter=US`
  )
  const data = (await response.json()) as BingSuggestions
  return data.resourceSets[0].resources[0].value.map(
    suggestion => suggestion.address.formattedAddress
  )
}

export async function getSuggestions(value: string) {
  if (value.length === 0) return []

  return fetchBingSuggestions(value)
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
