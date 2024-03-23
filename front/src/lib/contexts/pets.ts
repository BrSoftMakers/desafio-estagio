import { Pet } from "@/types";
import { Dispatch, SetStateAction, createContext } from "react";

export const PetsContext = createContext<{
  pets: Pet[];
  setPets: Dispatch<SetStateAction<Pet[]>>;
  filteredPets: Pet[];
  setFilteredPets: Dispatch<SetStateAction<Pet[]>>;
}>({
  pets: [],
  setPets: () => {},
  filteredPets: [],
  setFilteredPets: () => {},
});
