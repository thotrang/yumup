import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface IBaseText
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    PropsWithChildren {
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
  size?: "S" | "XS" | "M" | "XM" | "XXM" | "L" | "XL";
  content?: string;
}
export default function BaseText({
  tag,
  content,
  className,
  children,
  size,
  ...props
}: IBaseText) {
  const Tag = tag ?? "p";
  return (
    <Tag {...props} className={twMerge(`text-t-color m-0`, className)}>
      {content ?? children}
    </Tag>
  );
}
