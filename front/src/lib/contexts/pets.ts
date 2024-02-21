import { PetDTO } from "@/types";
import { Dispatch, SetStateAction, createContext } from "react";

export const PetsContext = createContext<{
  pets: PetDTO[];
  setPets: Dispatch<SetStateAction<PetDTO[]>>;
  filteredPets: PetDTO[];
  setFilteredPets: Dispatch<SetStateAction<PetDTO[]>>;
}>({
  pets: [],
  setPets: () => {},
  filteredPets: [],
  setFilteredPets: () => {},
});
