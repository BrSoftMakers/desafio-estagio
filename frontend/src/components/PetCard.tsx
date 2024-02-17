import Image from "next/image"
import ArrowdownIcon from "../../public/assets/img/icons/arrow-down.svg"
import CatIcon from "../../public/assets/img/icons/cat.svg"
import DogIcon from "../../public/assets/img/icons/dog.svg"
import PetIcon from "../../public/assets/img/icons/pet.svg"
import UserIcon from "../../public/assets/img/icons/user.svg"
import GradientCircle from "./GradientCircle"

type PetCardProps = {
  pet: "dog" | "cat"
}

export default function PetCard({ pet }: PetCardProps) {
  return (
    <div className="from-dark to-dark_blue hover:from-light_blue hover:to-default_blue flex h-24 w-[300px] items-center justify-start rounded-[10px] bg-gradient-to-r p-[3px]">
      <div className="from-dark to-dark_blue flex size-full items-center rounded-[10px] bg-gradient-to-r">
        <div className="m-2 size-[65px]">
          <GradientCircle>
            <Image src={pet === "dog" ? DogIcon : CatIcon} alt="icon" />
          </GradientCircle>
        </div>
        <div className="m-2 flex grow flex-col gap-2 text-white">
          <p className="flex items-center gap-3">
            <Image src={PetIcon} alt="icon for pet" />
            Simba Farias
          </p>
          <p className="flex items-center gap-3">
            <Image src={UserIcon} alt="icon for pet" />
            Emannuel Farias
          </p>
        </div>
        <Image className="mr-4" src={ArrowdownIcon} alt="arrowdown" />
      </div>
    </div>
  )
}
