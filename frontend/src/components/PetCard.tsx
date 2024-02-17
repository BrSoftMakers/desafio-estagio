"use client"

import Image from "next/image"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
// Icons
import ArrowdownIcon from "../../public/assets/img/icons/arrow-down.svg"
import PetIcon from "../../public/assets/img/icons/pet.svg"
import UserIcon from "../../public/assets/img/icons/user.svg"
// Components
import PetCardModal from "./PetCardModal"
import PetLogo from "./PetLogo"

type PetCardProps = {
  pet: "dog" | "cat"
  className?: string
}

export default function PetCard({ pet }: PetCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen((prev) => !prev)

  return (
    <>
      <div
        className={twMerge(
          `flex h-24 w-[300px] cursor-pointer items-center justify-start rounded-[10px] bg-gradient-to-r from-dark to-dark_blue p-[3px] hover:from-light_blue hover:to-default_blue`,
          `${isOpen && "from-light_blue to-default_blue"}`
        )}
        onClick={handleToggle}
      >
        <div className="flex size-full items-center rounded-[10px] bg-gradient-to-r from-dark to-dark_blue">
          <PetLogo pet="dog" className="ml-3 size-[65px]" />
          <div className="ml-[1.1rem] flex grow flex-col gap-2 text-white">
            <p className="flex items-center gap-3">
              <Image src={PetIcon} alt="icon for pet" />
              Simba Farias
            </p>
            <p className="flex items-center gap-3">
              <Image src={UserIcon} alt="user icon" />
              Emannuel Farias
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
      {isOpen && <PetCardModal />}
    </>
  )
}
