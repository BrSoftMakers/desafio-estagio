"use client"

import PetCard from "@/components/PetCard"
import { usePaginationContext } from "@/context/paginationContext"
import { usePetsContext } from "@/context/petsContext"
import CARD_LIMIT from "@/enums/eCardLimit"
import iPet from "@/types/iPet"
import { useEffect } from "react"

export default function Cards() {
  const [pets, setPets, setAllPets] = usePetsContext((s) => [
    s.pets,
    s.setPets,
    s.setAllPets
  ])
  const currentPage = usePaginationContext((s) => s.page)

  useEffect(() => {
    const fetchPets = async () => {
      const res = await fetch("http://localhost:8000/api/v1/pets")
      const data = (await res.json()).data

      setAllPets(data)
      setPets(
        data.slice(
          (currentPage - 1) * CARD_LIMIT.DESKTOP,
          CARD_LIMIT.DESKTOP * currentPage
        )
      )
    }
    fetchPets()
  }, [setAllPets, setPets, currentPage])

  return (
    <div className="inset-0 grid grid-cols-4 grid-rows-4 gap-5 transition-all">
      {pets.slice(0, CARD_LIMIT.DESKTOP).map((pet: iPet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  )
}
