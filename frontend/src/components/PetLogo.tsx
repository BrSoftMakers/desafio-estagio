import Image from "next/image"
import GradientCircle from "./GradientCircle"
// Icons
import CatIcon from "../../public/assets/img/icons/cat.svg"
import DogIcon from "../../public/assets/img/icons/dog.svg"

type PetLogoProps = {
  pet: "dog" | "cat"
  className?: string
}

export default function PetLogo({ pet, className }: PetLogoProps) {
  return (
    <GradientCircle className={className}>
      <Image src={pet === "dog" ? DogIcon : CatIcon} alt="pet icon" />
    </GradientCircle>
  )
}
