import { FormattedHouseCardsWithAdditionalInfo } from '@/services/house-listings/types'
import create from 'zustand'

export interface HousesListState {
  housesList: FormattedHouseCardsWithAdditionalInfo
  setHousesList: (housesList: FormattedHouseCardsWithAdditionalInfo) => void
}

export const useHousesListStore = create<HousesListState>(set => ({
  housesList: {
    listings: [],
    timestamp: '',
    total: 0,
  },
  setHousesList: housesList => set({ housesList }),
}))
