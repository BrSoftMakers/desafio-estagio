import Modals from "@/components/CRUDModals"
import Cards from "@/components/Cards"
import Header from "./(components)/Header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-14 max-w-7xl">
        <Cards />
      </main>
      <Modals />
    </>
  )
}
