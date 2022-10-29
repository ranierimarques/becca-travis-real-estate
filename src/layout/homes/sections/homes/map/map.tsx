import { Box } from '@common'
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import { memo } from 'react'
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
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  if (!isLoaded) {
    return (
      <Box
        className={containerStyle()}
        css={{ animation: `${backgroundPulse} 1s linear infinite alternate` }}
      />
    )
  }

  return (
    <GoogleMap mapContainerClassName={containerStyle()} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <MarkerF position={center} />
    </GoogleMap>
  )
})
