"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ubuntu } from "@/fonts/ubuntu";
import { PetsContext } from "@/lib/contexts";
import Image from "next/image";
import { useContext, useState } from "react";

export const SearchBar = () => {
  const { pets, setFilteredPets } = useContext(PetsContext);
  const [name, setName] = useState("");
  return (
    <div className="flex border-2 border-[#404a5c] border-solid rounded-lg w-full">
      <button className="flex justify-center items-center p-2 rounded-tl rounded-bl bg-[#404a5c]">
        <Image src="/search-icon.svg" alt="" width={20} height={20} />
      </button>
      <div className="p-1 flex w-full">
        <Input
          type="text"
          className={`bg-transparent border-none outline-none text-white ${ubuntu.className}`}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          className={`bg-[#404a5c] py-0 ${ubuntu.className}`}
          onClick={() => {
            setFilteredPets(
              pets.filter((pet) =>
                pet.name.toLowerCase().includes(name.toLowerCase())
              )
            );
          }}
        >
          Pesquisar
        </Button>
      </div>
    </div>
  );
};
