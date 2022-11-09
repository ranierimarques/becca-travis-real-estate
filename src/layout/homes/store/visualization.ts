import create from 'zustand'

interface VisualizationState {
  visualization: 'map' | 'gallery'
  setVisualization: (visualization: 'map' | 'gallery') => void
}

export const useVisualizationStore = create<VisualizationState>(set => ({
  visualization: 'map',
  setVisualization: visualization => set({ visualization }),
}))
