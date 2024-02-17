import Logo from "@/components/Logo"
import NavBar from "@/components/NavBar"
import PetCard from "@/components/PetCard"

export default function Home() {
  return (
    <>
      <header className="m-14 flex w-full max-w-7xl flex-col gap-14">
        <Logo />
        <NavBar />
      </header>
      <main className="mx-14 flex max-w-7xl flex-wrap items-center gap-5">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </main>
    </>
  )
}
