import Image, { ImageProps } from "next/image";

export const ButtonIcon = ({ alt, ...rest }: ImageProps) => {
  return <Image alt={alt ?? ""} {...rest} />;
};
