import Logo from "@/app/(components)/Header/Logo"
import NavBar from "@/app/(components)/Header/NavBar"

export default function Header() {
  return (
    <header className="my-14 flex w-full max-w-7xl flex-col gap-14">
      <Logo />
      <NavBar />
    </header>
  )
}
