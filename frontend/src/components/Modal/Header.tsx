"use client"

import CloseIcon from "@/../public/assets/img/icons/close.svg"
import Image from "next/image"
import { ImgHTMLAttributes, ReactNode } from "react"
import GradientCircle from "../presentation/GradientCircle"

type HeaderProps = {
  src: File
  alt: string
  children?: ReactNode
  onClose: () => void
} & ImgHTMLAttributes<HTMLImageElement>

export default function Header({
  src,
  alt,
  children,
  onClose,
  ...rest
}: HeaderProps) {
  return (
    <div className="mb-14 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <GradientCircle className="size-[72px]">
          <Image
            src={src}
            alt={alt}
            {...rest}
            className="text-white"
            width={39}
            height={39}
          />
        </GradientCircle>
        <h1>{children}</h1>
      </div>
      <button onClick={onClose}>
        <Image src={CloseIcon} alt="close icon" />
      </button>
    </div>
  )
}
