"use client"

import PetCard from "@/components/PetCard"
import { usePaginationContext } from "@/context/paginationContext"
import { usePetsContext } from "@/context/petsContext"
import CARD_LIMIT from "@/enums/eCardLimit"
import iPet from "@/types/iPet"
import { useEffect, useState } from "react"
import CardSkeleton from "./CardSkeleton"
import SearchNotFound from "./SearchNotFound"

type CardsProps = {
  data: iPet[]
}

export default function Cards({ data }: CardsProps) {
  const [isLoading, setIsLoading] = useState(true)

  const [pets, setPets, allPets, setAllPets] = usePetsContext((s) => [
    s.pets,
    s.setPets,
    s.allPets,
    s.setAllPets
  ])
  const currentPage = usePaginationContext((s) => s.page)

  useEffect(() => {
    if (data.length !== 0) {
      setAllPets(data)
      setPets(
        data.slice(
          (currentPage - 1) * CARD_LIMIT.DESKTOP,
          CARD_LIMIT.DESKTOP * currentPage
        )
      )
      setIsLoading(false)
    }
  }, [data, setAllPets, setPets, currentPage])

  if (isLoading && data.length !== 0) {
    return (
      <div className="inset-0 flex flex-wrap items-center justify-start gap-5 transition-all">
        {data.slice(0, CARD_LIMIT.DESKTOP).map(({ id }) => (
          <CardSkeleton key={id} />
        ))}
      </div>
    )
  } else if (pets.length === 0 && allPets.length !== 0) {
    return <SearchNotFound />
  }

  return (
    <div className="inset-0 flex flex-wrap items-center justify-start gap-5 transition-all">
      {pets.slice(0, CARD_LIMIT.DESKTOP).map((pet: iPet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  )
}
