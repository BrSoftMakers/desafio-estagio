"use client"

import PetCard from "@/components/PetCard"
import { usePaginationContext } from "@/context/paginationContext"
import { usePetsContext } from "@/context/petsContext"
import CARD_LIMIT from "@/enums/eCardLimit"
import iPet from "@/types/iPet"
import { useEffect } from "react"
import CardSkeleton from "./CardSkeleton"

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
    setAllPets(data)
    setPets(
      data.slice(
        (currentPage - 1) * CARD_LIMIT.DESKTOP,
        CARD_LIMIT.DESKTOP * currentPage
      )
    )
  }, [data, setAllPets, setPets, currentPage])

  if (pets.length === 0) {
    return (
      <div className="inset-0 flex flex-wrap items-center justify-start gap-5 transition-all">
        {data.slice(0, CARD_LIMIT.DESKTOP).map(({ id }) => (
          <CardSkeleton key={id} />
        ))}
      </div>
    )
  }

  return (
    <div className="inset-0 flex flex-wrap items-center justify-start gap-5 transition-all">
      {pets.slice(0, CARD_LIMIT.DESKTOP).map((pet: iPet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  )
}
