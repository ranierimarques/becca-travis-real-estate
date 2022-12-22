import { Box } from '@/common'
import { useHouse } from '@/layout/homes/hooks/useHouse'
import { useGeolocationStore } from '@/layout/homes/store/geolocation'
import useDebounce from '@/resources/hooks/useDebounce'
import { HouseCard } from '@/shared'
import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api'
import React, { memo, useEffect, useState } from 'react'
import { css, keyframes } from 'stitches.config'

const containerStyle = css({
  width: '100%',
  // height: 'calc(100vh - 110px)',
})

const backgroundPulse = keyframes({
  '0%': { background: 'rgba($grayW9Rgb, 0.75)' },
  '100%': { background: 'rgba($grayW9Rgb, 0.4)' },
})

const center = {
  lat: 34.7503416,
  lng: -86.6350868,
}

export const Map = memo(() => {
  const { house } = useHouse()

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  const [currentBounds, setCurrentBounds] = useState({} as number[] | undefined)

  const debouncedCurrentBounds = useDebounce(currentBounds, 500)

  const map = React.useRef() as React.MutableRefObject<google.maps.Map>

  const onMapLoad = React.useCallback((mapRef: google.maps.Map) => {
    map.current = mapRef
  }, [])

  const onMapBoundsChanged = React.useCallback(() => {
    const bounds = [
      map?.current?.getBounds()?.getSouthWest()?.lng() as number,
      map?.current?.getBounds()?.getSouthWest()?.lat() as number,
      map?.current?.getBounds()?.getNorthEast()?.lng() as number,
      map?.current?.getBounds()?.getNorthEast()?.lat() as number,
    ]
    setCurrentBounds(bounds)
  }, [])

  const setGeoLocation = useGeolocationStore(state => state.setGeoLocation)

  useEffect(() => {
    setGeoLocation({
      bounds: debouncedCurrentBounds,
    })
    setActiveMarker(null)
  }, [debouncedCurrentBounds, setGeoLocation])

  const [activeMarker, setActiveMarker] = useState(null as number | null)
  const [onHoverInfoWindow, setOnHoverInfoWindow] = useState(false)
  const [onHoverMarker, setOnHoverMarker] = useState(false)

  useEffect(() => {
    if (!onHoverMarker && !onHoverInfoWindow) {
      setActiveMarker(null)
    }
  }, [onHoverMarker, onHoverInfoWindow])

  if (!isLoaded) {
    return (
      <Box
        className={containerStyle()}
        css={{ animation: `${backgroundPulse} 1s linear infinite alternate` }}
      />
    )
  }

  return (
    <GoogleMap
      mapContainerClassName={containerStyle()}
      center={center}
      zoom={10}
      onBoundsChanged={onMapBoundsChanged}
      onLoad={onMapLoad}
    >
      {house.listings?.map((listing, index) => (
        <MarkerF
          position={{
            lat: listing.coordinates.latitude,
            lng: listing.coordinates.longitude,
          }}
          key={index}
          onMouseOver={() => {
            setActiveMarker(index)
            setOnHoverMarker(true)
          }}
          onMouseOut={() => {
            setTimeout(() => {
              setOnHoverMarker(false)
            }, 1000)
          }}
        >
          {activeMarker === index ? (
            <InfoWindowF
              position={{
                lat: listing.coordinates.latitude,
                lng: listing.coordinates.longitude,
              }}
              options={{
                disableAutoPan: true,
                maxWidth: 250,
              }}
            >
              <HouseCard
                key={index}
                listing={listing}
                variant="small"
                onMouseEnter={() => setOnHoverInfoWindow(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setOnHoverInfoWindow(false)
                  }, 500)
                }}
              />
            </InfoWindowF>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  )
})
