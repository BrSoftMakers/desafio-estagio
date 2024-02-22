import { LabelHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type LabelProps = {
  children: ReactNode
  disabled?: boolean
} & LabelHTMLAttributes<HTMLLabelElement>

export default function Label({ children, disabled, ...rest }: LabelProps) {
  return (
    <label
      className={twMerge(
        "flex size-full max-h-10 max-w-28 cursor-pointer items-center justify-start gap-[7px] rounded-[10px] border-4 border-grey px-2 py-[14px] text-grey has-[:checked]:border-white has-[:checked]:text-white",
        `${disabled && "cursor-default"}`
      )}
      {...rest}
    >
      {children}
    </label>
  )
}
