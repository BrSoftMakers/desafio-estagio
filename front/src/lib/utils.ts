import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatToPhone = (text: string) => {
  const numbers = text.replace(/\D/g, "");
  console.log(numbers);
  if (numbers.length === 1) return `(${numbers}`;
  if (numbers.length === 2) return `(${numbers.slice(0, 2)})`;
  if (numbers.length === 3)
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)}`;
  if (numbers.length === 7)
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(
      3,
      7
    )}`;
  if (numbers.length === 11)
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(
      3,
      7
    )}-${numbers.slice(7, 11)}`;
  return text;
};
