import { memo, useRef, useState } from 'react'
import { GoogleMap, OverlayViewF, useLoadScript } from '@react-google-maps/api'
import type * as Stitches from '@stitches/react'
import { useHouse } from '@/layout/homes/hooks/useHouse'
import { useFiltersStore } from '@/layout/homes/store/filters'
import useThrottle from '@/resources/hooks/useThrottle'
import { MapHouseCard } from '@/shared'
import * as Svg from '../svgs'
import * as S from './map.styles'

function centerMarker(width: number, height: number) {
  return {
    x: -(width / 2), // -50% width
    y: -height, // -100% height
  }
}

function onOverlayViewDraw(
  mapRef: MapType | null,
  overlayView: OverlayViewType,
  coordinates: Coords
) {
  if (!mapRef) return

  const MARKER_HALF_WIDTH = 15
  const MARKER_FULL_HEIGHT = 32
  const MAP_PADDING = 8

  const projection = overlayView.getProjection()
  const point = projection.fromLatLngToDivPixel(coordinates)
  const toContainer = projection.fromLatLngToContainerPixel(coordinates)

  if (!point || !toContainer) return

  let translateX = `calc(-50% + ${point.x}px)`
  let translateY = `${point.y}px`

  const targetRect = overlayView.container.getBoundingClientRect()
  const rootRect = mapRef.getDiv().getBoundingClientRect()

  if (toContainer.x - targetRect.width / 2 < MAP_PADDING) {
    translateX = `calc(0% + ${point.x - MARKER_HALF_WIDTH}px)`
  }

  if (toContainer.x + targetRect.width / 2 > rootRect.width - MAP_PADDING) {
    translateX = `calc(-100% + ${point.x + MARKER_HALF_WIDTH}px)`
  }

  if (toContainer.y + targetRect.height > rootRect.height - MAP_PADDING) {
    translateY = `calc(-100% + ${point.y - MARKER_FULL_HEIGHT}px)`
  }

  overlayView.container.style.transform = `translate(${translateX}, ${translateY})`
}

function onLoadCardOverlayView(mapRef: MapType | null, coordinates: Coords) {
  return (overlayView: OverlayViewType) => {
    overlayView.draw = () => {
      onOverlayViewDraw(mapRef, overlayView, coordinates)
    }
  }
}

type Coords = { lat: number; lng: number }
type OverlayViewType = google.maps.OverlayView
type MapType = google.maps.Map

type Props = Stitches.VariantProps<typeof S.containerStyle> & {
  coords: Coords
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
  const mapRef = useRef<MapType | null>(null)

  function onLoad(map: MapType) {
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

  const slicedHouses = house.listings?.slice(0, 50)

  return (
    <GoogleMap
      mapContainerClassName={S.containerStyle({ variant })}
      center={coords}
      zoom={zoom}
      onBoundsChanged={() => throttle(onMapBoundsChanged)}
      onLoad={onLoad}
      options={{
        mapId: 'a7274021a73cd91c', // Id from the Cloud Console to style the map
        maxZoom: zoom + 10,
        minZoom: zoom - 2,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControlOptions: {
          position: 3,
        },
        gestureHandling: 'greedy',
      }}
    >
      {house.total !== undefined && (
        <S.CountOverlay>
          Showing {slicedHouses?.length} of {house.total} results{' '}
          <span>in this area</span>
        </S.CountOverlay>
      )}

      {slicedHouses?.map(listing => {
        const isCardActive = activeCardId === listing.id
        const coordinates = {
          lat: listing.coordinates.latitude,
          lng: listing.coordinates.longitude,
        }

        return (
          <OverlayViewF
            key={listing.id}
            mapPaneName="overlayMouseTarget"
            position={coordinates}
            getPixelPositionOffset={centerMarker}
            zIndex={isCardActive ? 1 : 0}
          >
            <S.Wrapper active={isCardActive}>
              <Svg.Mark
                onTouchStart={() => handleActiveCardById(listing.id)}
                onMouseEnter={() => handleActiveCardById(listing.id)}
                onMouseLeave={handleHiddenCardActive}
              />
              {isCardActive && (
                <OverlayViewF
                  onLoad={onLoadCardOverlayView(mapRef.current, coordinates)}
                  mapPaneName="overlayMouseTarget"
                  zIndex={100}
                >
                  <MapHouseCard
                    key={listing.id}
                    listing={listing}
                    onMouseEnter={() => handleActiveCardById(listing.id)}
                    onMouseLeave={handleHiddenCardActive}
                  />
                </OverlayViewF>
              )}
            </S.Wrapper>
          </OverlayViewF>
        )
      })}
    </GoogleMap>
  )
})
