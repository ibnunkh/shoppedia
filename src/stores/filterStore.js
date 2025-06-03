import { create } from 'zustand'

const useFilterStore = create(set => ({
  selectedCategory: null,
  setCategory: (category) => set({ selectedCategory: category }),
}))

export default useFilterStore
