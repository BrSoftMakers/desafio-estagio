import Image from "next/image"
import { twMerge } from "tailwind-merge"
import LogoImage from "../../public/assets/img/logo.png"

type LogoProps = {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <div
      className={twMerge(
        "flex h-12 w-[182px] items-center justify-center",
        className
      )}
    >
      <Image src={LogoImage} alt="logo" />
      <h1 className="ml-3.5 font-medium">SoftPet</h1>
    </div>
  )
}
