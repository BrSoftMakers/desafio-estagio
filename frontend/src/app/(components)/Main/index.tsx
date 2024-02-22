import PetService from "@/services/pet"
import Cards from "./Cards"
import Pagination from "./Pagination"

export default async function Main() {
  const data = (await PetService.getAll()).data
  return (
    <main className="relative mx-14 max-w-7xl">
      <Cards data={data} />
      <Pagination />
    </main>
  )
}
