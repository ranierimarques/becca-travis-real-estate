import { useDebounce } from '@resources/hooks/useDebounce'
import { useFetch } from '@resources/hooks/useFetch'
import Image from 'next/image'
import Script from 'next/script'
import { FormEvent, useEffect, useLayoutEffect, useState } from 'react'
import { usePlacesWidget } from 'react-google-autocomplete'
import * as S from './hero.styles'
import { downtownHuntsville } from './images'
import { Loupe } from './svgs'

export function Hero() {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const suggestions: any[] = []

  // useLayoutEffect(() => {
  //   const displaySuggestions = function (predictions: any, status: any) {
  //     if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
  //       alert(status)
  //       return
  //     }

  //     predictions.forEach((prediction: any) => {
  //       suggestions.push(prediction)
  //     })
  //   }

  //   const service = new google.maps.places.AutocompleteService()

  //   service.getQueryPredictions({ input: 'pizza near Syd' }, displaySuggestions)
  // }, [])

  const { ref: searchRef } = usePlacesWidget({
    apiKey: 'AIzaSyAkjtR2QOQxzSixdT3RJXHI3ohZ90yIRjw',
    onPlaceSelected: place => {
      console.log(place)
      setSearchValue(place.address_components[0].long_name)
    },
    options: {
      types: ['street_address', 'neighborhood', 'locality', 'sublocality', 'postal_code'],
      componentRestrictions: { country: 'us' },
    },
  })

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const endpoint = `https://api.bridgedataoutput.com/api/v2/OData/valleymls/Property?access_token=c8c61ffc7e3cfcb91714551392eb82cd&$filter=contains(tolower(UnparsedAddress),'${searchValue}')`
    const data = await fetch(endpoint)
    const result = await data.json()
    console.log(result)
  }

  function handleMyLocation(event: FormEvent) {
    event.preventDefault()
    navigator.geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords
        const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCVaTtpBS5SweU8_yF0aL2Wm-58g8PTix8`
        const response = await fetch(endpoint)
        const data = await response.json()
        console.log(data)
      },
      err => {
        window.alert(
          'There is no location support on this device or it is disabled. Please check your settings.'
        )
      }
    )
  }

  return (
    <S.Section>
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkjtR2QOQxzSixdT3RJXHI3ohZ90yIRjw&libraries=places" />

      <S.Title>
        Find your dream <br />
        home today
      </S.Title>

      <S.InputWrapper>
        <S.SearchInput
          ref={searchRef}
          type="text"
          placeholder="Search by address, neighborhood, city or ZIP code"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <S.SearchButton onClick={handleSubmit}>
          <Loupe />
        </S.SearchButton>
        <button onClick={handleMyLocation}>My location</button>
        <div>
          {suggestions.length > 0 &&
            suggestions.map(suggestion => <span key={suggestion}>{suggestion}</span>)}
        </div>
      </S.InputWrapper>

      <S.HelperText>
        If you have any questions about the properties <br />
        listed on this page, please feel free to contact us.
      </S.HelperText>

      <S.ImageWrapper>
        <Image
          src={downtownHuntsville}
          alt="Downtown Hunstsville Lake"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 35%"
          priority
        />
        <S.ImageOverlay />
      </S.ImageWrapper>

      <S.ArrowDown />
    </S.Section>
  )
}
