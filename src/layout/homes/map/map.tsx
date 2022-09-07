/* eslint-disable react/display-name */
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { memo } from 'react'

const containerStyle = {
  width: '400px',
  height: '400px',
}

export const Map = memo(() => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  const center = {
    lat: 34.7503416,
    lng: -86.6350868,
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} />
    </GoogleMap>
  )
})
