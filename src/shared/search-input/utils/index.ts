function getParameters(value: string) {
  return value.trim().replaceAll(' ', '%20')
}

type Suggestions = {
  suggestions: {
    street_line: string
    secondary: string
    city: string
    state: string
    zipcode: string
  }[]
}

async function fetchSuggestions(value: string) {
  const parameters = getParameters(value)
  const response = await fetch(
    `https://us-autocomplete-pro.api.smartystreets.com/lookup?key=${process.env.NEXT_PUBLIC_SMARTY_AUTOCOMPLETE_API_KEY}&search=${parameters}&include_only_states=AL&max_results=6`
  )
  const data = (await response.json()) as Suggestions
  return data.suggestions
}

export async function getSuggestions(value: string) {
  const isEmpty = value.length === 0

  if (isEmpty) return []

  const suggestions = await fetchSuggestions(value)
  const addresses = suggestions.map(suggestion => ({
    address: suggestion.street_line,
  }))

  return addresses
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
