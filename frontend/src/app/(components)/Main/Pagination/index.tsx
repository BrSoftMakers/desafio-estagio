"use client"

import ArrowLeftIcon from "@/../public/assets/img/icons/white-arrow-left.svg"
import { usePaginationContext } from "@/context/paginationContext"
import { usePetsContext } from "@/context/petsContext"
import CARD_LIMIT from "@/enums/eCardLimit"
import Image from "next/image"

export default function Pagination() {
  const [page, increasePage, decreasePage] = usePaginationContext((s) => [
    s.page,
    s.inc,
    s.dec
  ])

  const allPets = usePetsContext((s) => s.allPets)
  const pageLimit = Math.ceil(allPets.length / CARD_LIMIT.DESKTOP)
  const hasNextPage = page < pageLimit
  const hasPrevPage = page > 1

  if (pageLimit === 0) {
    return null
  }

  const handleDecreasePage = () => {
    if (hasPrevPage) {
      decreasePage()
    }
  }
  const handleIncreasePage = () => {
    if (hasNextPage) {
      increasePage()
    }
  }

  return (
    <div className="absolute right-0 top-full mt-12 flex items-center gap-2">
      <button
        onClick={handleDecreasePage}
        className={hasPrevPage ? "" : "cursor-default opacity-70"}
      >
        <Image src={ArrowLeftIcon} alt="arrow left icon" />
      </button>
      <p>
        {page} de {pageLimit}
      </p>
      <button
        onClick={handleIncreasePage}
        className={hasNextPage ? "" : "cursor-default opacity-70"}
      >
        <Image
          src={ArrowLeftIcon}
          alt="arrow left icon"
          className="rotate-180"
        />
      </button>
    </div>
  )
}
