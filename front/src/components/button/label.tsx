import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const ButtonLabel = ({
  text,
  className,
  ...rest
}: HTMLAttributes<HTMLSpanElement> & { text: string }) => {
  return (
    <span className={twMerge("font-bold text-white", className)} {...rest}>
      {text}
    </span>
  );
};
