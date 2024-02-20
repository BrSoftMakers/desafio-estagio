"use client"

import AddIcon from "@/../public/assets/img/icons/add.svg"
import Button from "@/components/presentation/Button"
import { useModalContext } from "@/context/modalContext"
import Image from "next/image"
import SearchBar from "./SearchBar"

export default function NavBar() {
  const toggleCreateModal = useModalContext((s) => s.toggleCreateModal)

  return (
    <nav className="flex h-11 w-full items-center gap-6">
      <SearchBar />
      <Button
        onClick={toggleCreateModal}
        width="md"
        height="lg"
        variant="info"
        className="gap-2 rounded-[10px]"
      >
        <Image src={AddIcon} alt="add icon" />
        Cadastrar
      </Button>
      {/* <button className="flex h-full w-[9.75rem] items-center justify-center rounded-[0.625rem] bg-gradient-to-r from-light_blue to-default_blue font-bold transition-colors">
        
        Cadastrar
      </button> */}
    </nav>
  )
}
