"use client";

import { PetsContext } from "@/lib/contexts";
import { useContext } from "react";
import { ItemPopover } from "./item-popover";

export const PetsGrid = () => {
  const { pets, filteredPets } = useContext(PetsContext);
  if (filteredPets.length > 0) {
    return (
      <main className="grid grid-cols-4 grid-rows-4 gap-4">
        {filteredPets.map((pet, index) => (
          <ItemPopover {...pet} key={index} />
        ))}
      </main>
    );
  }
  return (
    <main className="grid grid-cols-4 grid-rows-4 gap-4">
      {pets.map((pet, index) => (
        <ItemPopover {...pet} key={index} />
      ))}
    </main>
  );
};
