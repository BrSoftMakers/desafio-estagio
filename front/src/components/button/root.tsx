import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const ButtonRoot = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button className={twMerge("flex items-center gap-1", className)} {...rest}>
      {children}
    </Button>
  );
};
