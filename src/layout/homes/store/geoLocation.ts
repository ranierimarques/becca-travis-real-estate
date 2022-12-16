import create from 'zustand'

interface GeoLocation {
  address?: string
  bounds: number[]
  filter: {
    BedroomsTotal?: {
      gte: number
      lte: number
    }
  }
}

export interface GeoLocationState {
  geoLocation: GeoLocation
  setGeoLocation: (geoLocation: GeoLocation) => void
}

export const useGeolocationStore = create<GeoLocationState>(set => ({
  geoLocation: {
    address: '',
    bounds: [],
    filter: {},
  },
  setGeoLocation: geoLocation => set({ geoLocation }),
}))
