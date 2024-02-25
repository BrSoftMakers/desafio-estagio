import Image from "next/image"
import GradientCircle from "../presentation/GradientCircle"
// Icons
import CatIcon from "@/../public/assets/img/icons/cat.svg"
import DogIcon from "@/../public/assets/img/icons/dog.svg"
import PetRole from "@/enums/ePetRole"

type PetLogoProps = {
  role: PetRole
}

export default function PetLogo({ role }: PetLogoProps) {
  return (
    <GradientCircle className="ml-3 size-[65px]">
      <Image src={role === PetRole.DOG ? DogIcon : CatIcon} alt="pet icon" />
    </GradientCircle>
  )
}
