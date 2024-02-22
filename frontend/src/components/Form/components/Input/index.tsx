import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({ disabled, ...rest }: InputProps) {
  return (
    <input
      className={twMerge(
        "size-full max-h-10 max-w-[321px] rounded-[10px] border-3 border-grey bg-transparent p-[10px] outline-none placeholder:text-grey",
        disabled && "bg-grey text-white"
      )}
      disabled={disabled}
      autoComplete="off"
      required
      {...rest}
    />
  )
}
