"use client";

import { PetsContext } from "@/lib/contexts";
import { PetDTO } from "@/types";
import { PropsWithChildren, useState } from "react";

export const PetsContextProvider = ({
  children,
  initialState,
}: PropsWithChildren<{
  initialState: PetDTO[];
}>) => {
  const [pets, setPets] = useState(initialState);
  const [filteredPets, setFilteredPets] = useState<PetDTO[]>([]);
  return (
    <PetsContext.Provider
      value={{ pets, setPets, filteredPets, setFilteredPets }}
    >
      {children}
    </PetsContext.Provider>
  );
};
