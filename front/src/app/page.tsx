import { PetsGrid } from "@/components/pets-grid";
import { PetsContextProvider } from "@/components/pets-provider";
import { RegisterDialog } from "@/components/register-dialog";
import Image from "next/image";
import { Pagination } from "../components/pagination";
import { QueryProvider } from "../components/query-provider";
import { SearchBar } from "../components/search-bar";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string | undefined };
}) {
  return (
    <div className="m-20 flex flex-col gap-12">
      <QueryProvider>
        <PetsContextProvider>
          <header className="flex flex-col gap-20">
            <Image src="/logo.svg" alt="SoftPet logo" height={48} width={182} />
            <div className="flex gap-6 w-full">
              <SearchBar />
              <RegisterDialog />
            </div>
          </header>
          <PetsGrid />
          <Pagination />
        </PetsContextProvider>
      </QueryProvider>
    </div>
  );
}
