"use client"

import PetCard from "@/components/PetCard"
import { usePaginationContext } from "@/context/paginationContext"
import { usePetsContext } from "@/context/petsContext"
import CARD_LIMIT from "@/enums/eCardLimit"
import iPet from "@/types/iPet"
import { useEffect } from "react"

type CardsProps = {
  data: iPet[]
}

export default function Cards({ data }: CardsProps) {
  const [pets, setPets, setAllPets] = usePetsContext((s) => [
    s.pets,
    s.setPets,
    s.setAllPets
  ])
  const currentPage = usePaginationContext((s) => s.page)

  useEffect(() => {
    const fetchPets = async () => {
      setAllPets(data)
      setPets(
        data.slice(
          (currentPage - 1) * CARD_LIMIT.DESKTOP,
          CARD_LIMIT.DESKTOP * currentPage
        )
      )
    }
    fetchPets()
  }, [data, setAllPets, setPets, currentPage])

  return (
    <div className="inset-0 flex flex-wrap items-center justify-start gap-5 transition-all">
      {pets.slice(0, CARD_LIMIT.DESKTOP).map((pet: iPet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  )
}
