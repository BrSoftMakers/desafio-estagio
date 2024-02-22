import { PetsGrid } from "@/components/pets-grid";
import { PetsContextProvider } from "@/components/pets-provider";
import { RegisterDialog } from "@/components/register-dialog";
import { getPagesNumber, getPets } from "@/lib/data";
import { Pet } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "../components/search-bar";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string | undefined };
}) {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;

  const totalPages = await getPagesNumber();
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
        <div className="absolute bottom-16 right-16 flex justify-center items-center gap-4">
          <Link
            href={`?page=${currentPage - 1}`}
            aria-disabled={currentPage === 1}
            className={clsx({
              "opacity-50 cursor-not-allowed": currentPage === 1,
            })}
          >
            <Image src="/nav-arrow.svg" alt="" height={22} width={22} />
          </Link>
          <span className="text-white">
            {currentPage} de {totalPages === 0 ? 1 : totalPages}
          </span>
          <Link
            href={`?page=${currentPage + 1}`}
            className={clsx({
              "opacity-50 cursor-not-allowed": currentPage === totalPages,
            })}
            aria-disabled={currentPage === totalPages}
          >
            <Image
              src="/nav-arrow.svg"
              alt=""
              height={22}
              width={22}
              className="rotate-180"
            />
          </Link>
        </div>
      </PetsContextProvider>
    </div>
  );
}
