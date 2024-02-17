import { ReactNode } from "react"

type GradientCircleProps = {
  children: ReactNode
}

export default function GradientCircle({ children }: GradientCircleProps) {
  return (
    <div className="from-light_blue to-default_blue flex size-full items-center justify-center rounded-full bg-gradient-to-r">
      {children}
    </div>
  )
}
