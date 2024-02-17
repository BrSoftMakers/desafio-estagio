import Image from "next/image"
import AddIcon from "../../public/assets/img/icons/add.svg"
import SearchBar from "./SearchBar"

export default function NavBar() {
  return (
    <nav className="flex h-11 w-full items-center gap-6">
      <SearchBar />
      <button className="from-light_blue to-default_blue flex h-full w-[9.75rem] items-center justify-center rounded-[0.625rem] bg-gradient-to-r font-bold">
        <Image src={AddIcon} alt="add icon" className="mr-2" />
        Cadastrar
      </button>
    </nav>
  )
}
