import { ReactNode } from "react"

type BodyProps = {
  children: ReactNode
}

export default function Body({ children }: BodyProps) {
  return <div className="size-full bg-red-600">{children}</div>
}
