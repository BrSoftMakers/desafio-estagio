"use client";

import { PetsContext } from "@/lib/contexts";
import { Pet } from "@/types";
import { PropsWithChildren, useState } from "react";

export const PetsContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  return (
    <PetsContext.Provider
      value={{ pets, setPets, filteredPets, setFilteredPets }}
    >
      {children}
    </PetsContext.Provider>
  );
};
