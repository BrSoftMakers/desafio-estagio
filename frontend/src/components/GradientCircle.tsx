import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type GradientCircleProps = {
  children: ReactNode
  className?: string
}

export default function GradientCircle({
  children,
  className
}: GradientCircleProps) {
  return (
    <div
      className={twMerge(
        "from-light_blue to-default_blue flex size-full items-center justify-center rounded-full bg-gradient-to-r",
        className
      )}
    >
      {children}
    </div>
  )
}
