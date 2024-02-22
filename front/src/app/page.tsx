import { PetsGrid } from "@/components/pets-grid";
import { PetsContextProvider } from "@/components/pets-provider";
import { RegisterDialog } from "@/components/register-dialog";
import { getPagesNumber, getPets } from "@/lib/data";
import { Pet } from "@/types";
import Image from "next/image";
import { Pagination } from "../components/pagination";
import { SearchBar } from "../components/search-bar";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string | undefined };
}) {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;

  const fetchedPages = await getPagesNumber();
  const totalPages = fetchedPages === 0 ? 1 : fetchedPages;
  const pets: Pet[] = await getPets(currentPage);

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
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </PetsContextProvider>
    </div>
  );
}
