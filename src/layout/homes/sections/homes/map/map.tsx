import { Box } from '@common'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { memo } from 'react'

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 110px)',
}

const center = {
  lat: 34.7503416,
  lng: -86.6350868,
}

export const Map = memo(() => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  if (!isLoaded) {
    return <Box css={containerStyle}>Loading...</Box>
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} />
    </GoogleMap>
  )
})
