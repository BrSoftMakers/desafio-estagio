"use client"

import Image from "next/image"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
// Icons
import ArrowdownIcon from "@/../public/assets/img/icons/arrow-down.svg"
import PetIcon from "@/../public/assets/img/icons/pet.svg"
import UserIcon from "@/../public/assets/img/icons/user.svg"
// Components
import iPet from "@/types/iPet"
import PetCardModal from "./PetCardModal"
import PetLogo from "./PetLogo"

type PetCardProps = {
  pet: iPet
}

export default function PetCard({ pet }: PetCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen((prev) => !prev)
  return (
    <div className="relative">
      <div
        className={twMerge(
          "z-20 flex h-24 w-[300px] cursor-pointer items-center justify-start rounded-[10px] bg-gradient-to-r from-dark to-dark_blue p-[3px] hover:from-light_blue hover:to-default_blue",
          `${isOpen && "from-light_blue to-default_blue"}`
        )}
        onClick={handleToggle}
      >
        <div className="flex size-full items-center rounded-[10px] bg-gradient-to-r from-dark to-dark_blue">
          <PetLogo role={pet.animal} />
          <div className="ml-[1.1rem] flex grow flex-col gap-2 text-white">
            <p className="flex items-center gap-3">
              <Image src={PetIcon} alt="icon for pet" />
              {pet.name}
            </p>
            <p className="flex items-center gap-3">
              <Image src={UserIcon} alt="user icon" />
              {pet.ownerName}
            </p>
          </div>
          <Image
            className={twMerge(
              "mr-5 transition-all",
              `${isOpen && "[transform:rotateX(180deg)]"}`
            )}
            src={ArrowdownIcon}
            alt="arrowdown"
          />
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen((state) => !state)}
          ></div>
          <PetCardModal pet={pet} />
        </>
      )}
    </div>
  )
}
