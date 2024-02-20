"use client"

import SearchIcon from "@/../public/assets/img/icons/search.svg"
import Button from "@/components/presentation/Button"
import { usePetsContext } from "@/context/petsContext"
import CARD_LIMIT from "@/enums/eCardLimit"
import Fuse from "fuse.js"
import Image from "next/image"
import { useMemo, useRef } from "react"

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [allPets, setPets] = usePetsContext((s) => [s.allPets, s.setPets])

  const fuse = useMemo(
    () =>
      new Fuse(allPets, {
        keys: ["name", "ownerName", "breed"]
      }),
    [allPets]
  )

  const handleSearch = async () => {
    const searchTerm = inputRef.current?.value
    if (searchTerm) {
      const results = await fuse
        .search(searchTerm, { limit: CARD_LIMIT.DESKTOP })
        .map((result) => result.item)
      console.log(results)
      setPets(results)
    }
  }
  return (
    <div className="flex h-full grow items-center rounded outline outline-grey">
      <label
        htmlFor="search"
        className="float-start flex h-full w-11 items-center justify-center rounded-l bg-grey text-dark_blue"
      >
        <Image src={SearchIcon} alt="search icon" />
      </label>
      <input
        ref={inputRef}
        type="text"
        id="search"
        className="size-full bg-transparent p-2 text-2xl outline-none"
        onChange={handleSearch}
      />
      <Button
        width="sm"
        height="sm"
        variant="mono"
        className="m-[3px]"
        onClick={handleSearch}
      >
        Pesquisar
      </Button>
    </div>
  )
}
