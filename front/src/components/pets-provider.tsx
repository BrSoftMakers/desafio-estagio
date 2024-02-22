"use client";

import { PetsContext } from "@/lib/contexts";
import { Pet } from "@/types";
import { PropsWithChildren, useState } from "react";

export const PetsContextProvider = ({
  children,
  initialState,
}: PropsWithChildren<{
  initialState: Pet[];
}>) => {
  const [pets, setPets] = useState(initialState);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  return (
    <PetsContext.Provider
      value={{ pets, setPets, filteredPets, setFilteredPets }}
    >
      {children}
    </PetsContext.Provider>
  );
};
