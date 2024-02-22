import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({ disabled, ...rest }: InputProps) {
  return (
    <input
      className={twMerge(
        "border-3 size-full max-h-10 max-w-[321px] rounded-[10px] border-grey bg-transparent p-[10px] outline-none",
        disabled && "bg-grey text-white"
      )}
      disabled={disabled}
      autoComplete="off"
      required
      {...rest}
    />
  )
}
