"use client"

import AddIcon from "@/../public/assets/img/icons/add.svg"
import Button from "@/components/presentation/Button"
import { useModalContext } from "@/context/modalContext"
import Image from "next/image"
import SearchBar from "./SearchBar"

export default function NavBar() {
  const openCreateModal = useModalContext((s) => s.openCreateModal)

  return (
    <nav className="flex h-11 w-full items-center gap-6">
      <SearchBar />
      <Button
        onClick={openCreateModal}
        width="md"
        height="lg"
        variant="info"
        className="gap-2 rounded-[10px]"
      >
        <Image src={AddIcon} alt="add icon" />
        Cadastrar
      </Button>
    </nav>
  )
}
