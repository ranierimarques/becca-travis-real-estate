import { memo, useRef, useState } from 'react'
import { GoogleMap, MarkerF, OverlayViewF, useLoadScript } from '@react-google-maps/api'
import type * as Stitches from '@stitches/react'
import { useHouse } from '@/layout/homes/hooks/useHouse'
import { useFiltersStore } from '@/layout/homes/store/filters'
import useThrottle from '@/resources/hooks/useThrottle'
import { MapHouseCard } from '@/shared'
import * as Img from '../images'
import * as S from './map.styles'

// const getPixelFromLatLng = (
//   map: google.maps.Map,
//   latLng: google.maps.LatLngLiteral | google.maps.LatLng
// ) => {
//   return map.getProjection()?.fromLatLngToPoint(latLng) as google.maps.Point
// }

// const getInfoWindowOffset = (
//   map: google.maps.Map,
//   markerLatLng: google.maps.LatLngLiteral
// ) => {
//   const center = getPixelFromLatLng(map, map.getCenter() as google.maps.LatLng)
//   const point = getPixelFromLatLng(map, markerLatLng)

//   const width = point.x < center.x ? 140 : -140
//   const height = point.y > center.y ? 40 : 370

//   return new google.maps.Size(width, height)
// }

type MapRef = google.maps.Map

type Props = Stitches.VariantProps<typeof S.containerStyle> & {
  coords: {
    lat: number
    lng: number
  }
  zoom?: number
}

export const Map = memo(({ variant, coords, zoom = 10 }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })
  const { house } = useHouse()
  const setFilters = useFiltersStore(state => state.setFilters)
  const throttle = useThrottle(500)
  const [activeCardId, setActiveCardId] = useState<string | null>(null)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const mapRef = useRef<MapRef>()

  function onLoad(map: MapRef) {
    mapRef.current = map
  }

  function onMapBoundsChanged() {
    if (!mapRef.current || isFirstRender) {
      setIsFirstRender(false)
      return
    }

    const bounds = [
      mapRef.current.getBounds()?.getSouthWest().lng(),
      mapRef.current.getBounds()?.getSouthWest().lat(),
      mapRef.current.getBounds()?.getNorthEast().lng(),
      mapRef.current.getBounds()?.getNorthEast().lat(),
    ] as number[]

    setFilters('bounds', bounds)
    // setActiveCardId(null)
  }

  function handleActiveCardById(id: string) {
    setActiveCardId(id)
  }

  function handleHiddenCardActive() {
    setActiveCardId(null)
  }

  if (!isLoaded) {
    return <S.Skeleton variant={variant} />
  }

  return (
    <GoogleMap
      mapContainerClassName={S.containerStyle({ variant })}
      center={coords}
      zoom={zoom}
      onBoundsChanged={() => throttle(onMapBoundsChanged)}
      onLoad={onLoad}
      options={{
        mapId: 'a7274021a73cd91c', //Id from the CLoud Console to style the map
        maxZoom: zoom + 10,
        minZoom: zoom - 2,
        streetViewControl: false,
        fullscreenControl: false,
      }}
    >
      {house.listings?.map(listing => {
        const coordinates = {
          lat: listing.coordinates.latitude,
          lng: listing.coordinates.longitude,
        }

        return (
          <MarkerF
            key={listing.id}
            icon={Img.Mark.src}
            position={coordinates}
            onMouseOver={() => handleActiveCardById(listing.id)}
            onMouseOut={handleHiddenCardActive}
          >
            {activeCardId === listing.id && (
              <OverlayViewF
                mapPaneName="overlayMouseTarget" // TODO: Search
                position={coordinates}
                zIndex={10000}
              >
                <MapHouseCard
                  key={listing.id}
                  listing={listing}
                  onMouseEnter={() => handleActiveCardById(listing.id)}
                  onMouseLeave={handleHiddenCardActive}
                />
              </OverlayViewF>
            )}
          </MarkerF>
        )
      })}
    </GoogleMap>
  )
})
