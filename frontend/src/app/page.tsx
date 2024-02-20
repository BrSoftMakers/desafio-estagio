import Cards from "@/app/(components)/Cards"
import Modals from "@/components/CRUDModals"
import Header from "./(components)/Header"
import Pagination from "./(components)/Pagination"

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-14 max-w-7xl">
        <Cards />
        <Pagination />
      </main>
      <Modals />
    </>
  )
}
