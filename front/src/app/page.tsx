import { ItemPopover } from "@/components/item-popover";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SearchBar } from "../components/search-bar";

export default function Home() {
  const pets = Array.from({ length: 16 }, (_, i) => ({
    name: `Pet ${i + 1}`,
    type: i % 2 === 0 ? "cat" : "dog",
    owner: `Owner ${i + 1}`,
    breed: i % 2 === 0 ? "Siamese" : "Golden Retriever",
    birthdate: "2020-01-01",
  }));
  return (
    <div className="m-20 flex flex-col gap-12">
      <header className="flex flex-col gap-20">
        <Image src="/logo.svg" alt="SoftPet logo" height={48} width={182} />
        <div className="flex gap-6 w-full">
          <SearchBar />
          <Button className="bg-gradient-to-r from-[#00CAFC] to-[#0056E2] py-4 px-10 h-full">
            <Image
              src="/add-icon.svg"
              alt=""
              height={20}
              width={20}
              className="mr-2"
            />
            Cadastrar
          </Button>
        </div>
      </header>
      <main className="grid grid-cols-4 grid-rows-4 gap-4">
        {pets.map((pet, index) => (
          <ItemPopover
            name={pet.name}
            type={pet.type as "cat" | "dog"}
            birthdate={pet.birthdate}
            breed={pet.breed}
            owner={pet.owner}
            key={index}
          />
        ))}
      </main>
    </div>
  );
}
