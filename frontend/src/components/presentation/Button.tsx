import { ButtonHTMLAttributes, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants"

const buttonVariants = tv({
  base: "flex items-center justify-center rounded font-bold w-full gap-1 bg-white",
  variants: {
    height: {
      sm: "h-9",
      md: "h-10",
      lg: "h-[50px]"
    },
    width: {
      sm: "max-w-[106px]",
      md: "max-w-[156px]",
      lg: "max-w-[231px]",
      xl: "max-w-[270px]"
    },
    variant: {
      danger: "bg-[#ed254e]",
      info: "bg-gradient-to-r from-light_blue to-default_blue",
      mono: "bg-grey hover:bg-grey/90"
    }
  }
})

type ButtonProps = {
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>
export default function Button({
  height,
  width,
  variant,
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ height, width, variant, className })}
      {...rest}
    >
      {children}
    </button>
  )
}
