import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { LabelHTMLAttributes, ReactNode } from "react"

type LabelWithIconProps = {
  src: StaticImport
  alt: string
  children: ReactNode
} & LabelHTMLAttributes<HTMLLabelElement>
export default function LabelWithIcon({
  src,
  alt,
  children,
  ...rest
}: LabelWithIconProps) {
  return (
    <label className="mb-2 flex items-center gap-2" {...rest}>
      <Image src={src} alt={alt} />
      {children}
    </label>
  )
}
