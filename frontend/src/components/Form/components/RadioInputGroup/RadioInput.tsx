import { InputHTMLAttributes } from "react"

type RadioInputProps = InputHTMLAttributes<HTMLInputElement>

export default function RadioInput({ disabled, ...rest }: RadioInputProps) {
  return (
    <input
      type="radio"
      className="h-3 w-3 appearance-none rounded-full border-2 border-grey checked:border-white checked:bg-white"
      disabled={disabled}
      required
      {...rest}
    />
  )
}
