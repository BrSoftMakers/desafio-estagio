import { create } from "zustand"

type iPaginationContext = {
  page: number
  inc: () => void
  dec: () => void
}

export const usePaginationContext = create<iPaginationContext>()((set) => ({
  page: 1,
  inc: () => set((state) => ({ page: state.page + 1 })),
  dec: () => set((state) => ({ page: state.page - 1 }))
}))
