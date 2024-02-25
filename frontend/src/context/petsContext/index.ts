import iPet from "@/types/iPet"
import { create } from "zustand"

type iPetsContext = {
  pets: iPet[]
  allPets: iPet[]
  setPets: (pets: iPet[]) => void
  setAllPets: (allPets: iPet[]) => void
}

export const usePetsContext = create<iPetsContext>()((set) => ({
  pets: [],
  allPets: [],
  setPets: (pets) => set(() => ({ pets })),
  setAllPets: (allPets) => set(() => ({ allPets }))
}))
