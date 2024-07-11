import type { ImageProps } from "next/image";
import ImageNext from "next/image";
import { twMerge } from "tailwind-merge";
export interface BaseImageProps extends ImageProps {
  src: any;
  imageErrorDefault?: string;
}

function BaseImage({
  src = "",
  className = "",
  alt,
  imageErrorDefault,
  ...props
}: BaseImageProps) {

  return (
    <ImageNext
      {...props}
      loading="lazy"
      sizes="100vw"
      className={twMerge(`h-auto w-full block`, className)}
      alt={alt ?? ""}
      src={src}
    />
  );
}

export default BaseImage;
