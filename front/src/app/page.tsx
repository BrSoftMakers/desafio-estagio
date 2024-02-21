import { PetsGrid } from "@/components/pets-grid";
import { PetsContextProvider } from "@/components/pets-provider";
import { RegisterDialog } from "@/components/register-dialog";
import { PetDTO } from "@/types";
import Image from "next/image";
import { SearchBar } from "../components/search-bar";

export default function Home() {
  const pets: PetDTO[] = [];

  return (
    <div className="m-20 flex flex-col gap-12">
      <PetsContextProvider initialState={pets}>
        <header className="flex flex-col gap-20">
          <Image src="/logo.svg" alt="SoftPet logo" height={48} width={182} />
          <div className="flex gap-6 w-full">
            <SearchBar />
            <RegisterDialog />
          </div>
        </header>
        <PetsGrid />
      </PetsContextProvider>
    </div>
  );
}
