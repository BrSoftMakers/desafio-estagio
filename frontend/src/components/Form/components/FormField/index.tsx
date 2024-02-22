import { ReactNode } from "react"

type FormFieldProps = {
  children: ReactNode
}

export default function FormField({ children }: FormFieldProps) {
  return <div className="flex flex-col gap-[14px]">{children}</div>
}
