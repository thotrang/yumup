import type { ImageProps } from "next/image";
import ImageNext from "next/image";
import { twMerge } from "tailwind-merge";
import { get } from "lodash-es";
import { IThumbnail } from "@/types";
export interface BaseImageProps extends ImageProps {
  thumbnail?: IThumbnail;
  imageErrorDefault?: string;
  className?: string;
}

function BaseImage({
  thumbnail,
  className = "",
  alt,
  imageErrorDefault,
  src,
  ...props
}: BaseImageProps) {
  const url = get(thumbnail, "attributes.formats.large.url", src);
  return (
    <ImageNext
      {...props}
      loading="lazy"
      sizes="100vw"
      className={twMerge(`h-auto w-full block`, className)}
      alt={alt ?? ""}
      src={url}
      width={get(thumbnail, "attributes.formats.large.width", 0)}
      height={get(thumbnail, "attributes.formats.large.height", 0)}
    />
  );
}

export default BaseImage;
