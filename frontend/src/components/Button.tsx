import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = {
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>
export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex h-10 w-full items-center justify-center gap-1 rounded",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
