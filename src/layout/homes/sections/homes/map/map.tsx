import { Box } from '@/common'
import { useHouse } from '@/layout/homes/hooks/useHouse'
import { useGeolocationStore } from '@/layout/homes/store/geolocation'
import useDebounce from '@/resources/hooks/useDebounce'
import { HouseCard } from '@/shared'
import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api'
import type * as Stitches from '@stitches/react'
import React, { memo, useEffect, useState, useRef } from 'react'
import { css, keyframes } from 'stitches.config'

const customMarker = new URL('../svgs/mark.png', import.meta.url).href

const containerStyle = css({
  width: '100%',
  // height: 'calc(100vh - 110px)',

  variants: {
    variant: {
      1: {
        height: 500,
      },
    },
  },
})

const backgroundPulse = keyframes({
  '0%': { background: 'rgba($grayW9Rgb, 0.75)' },
  '100%': { background: 'rgba($grayW9Rgb, 0.4)' },
})

const center = {
  lat: 34.7503416,
  lng: -86.6350868,
}

const getPixelFromLatLng = (
  map: google.maps.Map,
  latLng: google.maps.LatLngLiteral | google.maps.LatLng
) => {
  const projection = map.getProjection()
  return projection?.fromLatLngToPoint(latLng)
}

const getInfowindowOffset = (
  map: google.maps.Map,
  markerLatLng: google.maps.LatLngLiteral
) => {
  const center = getPixelFromLatLng(
    map,
    map.getCenter() as google.maps.LatLng
  ) as google.maps.Point
  const point = getPixelFromLatLng(map, markerLatLng) as google.maps.Point

  let quadrant = ''
  let offset

  quadrant += point.y > center.y ? 'b' : 't'
  quadrant += point.x < center.x ? 'l' : 'r'

  if (quadrant == 'tr') {
    offset = new google.maps.Size(-140, 370)
  } else if (quadrant == 'tl') {
    offset = new google.maps.Size(140, 370)
  } else if (quadrant == 'br') {
    offset = new google.maps.Size(-140, 40)
  } else if (quadrant == 'bl') {
    offset = new google.maps.Size(140, 40)
  }

  return offset
}

type Props = Stitches.VariantProps<typeof containerStyle>

export const Map = memo(({ variant }: Props) => {
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
  const geoLocationCurrent = useGeolocationStore(state => state.geoLocation)

  useEffect(() => {
    setGeoLocation({
      ...geoLocationCurrent,
      bounds: debouncedCurrentBounds,
    })
    setActiveMarker(null)
  }, [debouncedCurrentBounds, setGeoLocation])

  const [activeMarker, setActiveMarker] = useState(null as number | null)
  const [onHoverInfoWindow, setOnHoverInfoWindow] = useState(false)
  const [onHoverMarker, setOnHoverMarker] = useState(false)
  const onHoverInfoWindowRef = useRef(onHoverInfoWindow)
  const onHoverMarkerRef = useRef(onHoverMarker)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (!onHoverInfoWindowRef.current && !onHoverMarkerRef.current) {
        setActiveMarker(null)
      }
    }, 500)

    return () => {
      clearTimeout(timeOut)
    }
  }, [onHoverInfoWindow, onHoverMarker])

  useEffect(() => {
    onHoverInfoWindowRef.current = onHoverInfoWindow
    onHoverMarkerRef.current = onHoverMarker
  }, [onHoverInfoWindow, onHoverMarker])

  if (!isLoaded) {
    return (
      <Box
        className={containerStyle({ variant })}
        css={{ animation: `${backgroundPulse} 1s linear infinite alternate` }}
      />
    )
  }

  return (
    <GoogleMap
      mapContainerClassName={containerStyle({ variant })}
      center={center}
      zoom={10}
      onBoundsChanged={onMapBoundsChanged}
      onLoad={onMapLoad}
    >
      {house.listings?.map((listing, index) => (
        <MarkerF
          icon={{
            url: customMarker,
            scaledSize: new google.maps.Size(40, 40),
          }}
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
            setOnHoverMarker(false)
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
                pixelOffset: getInfowindowOffset(map.current, {
                  lat: listing.coordinates.latitude,
                  lng: listing.coordinates.longitude,
                }),
              }}
            >
              <HouseCard
                key={index}
                listing={listing}
                variant="small"
                onMouseEnter={() => {
                  setActiveMarker(index)
                  setOnHoverInfoWindow(true)
                }}
                onMouseLeave={() => {
                  setOnHoverInfoWindow(false)
                }}
              />
            </InfoWindowF>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  )
})
