import { PropsWithChildren } from "react";
import { twJoin, twMerge } from "tailwind-merge";

export default function BaseWrapperLayout({
  children,
  className = "",
  isBackground = false,
  dataAos = "",
}: PropsWithChildren & {
  className?: string;
  isBackground?: boolean;
  dataAos?: string;
}) {
  return (
    <div
      data-aos={dataAos}
      className={twJoin(
        isBackground && "bg-gradient-to-r from-primary/70 to-primary/20"
      )}
    >
      <div
        className={twMerge(
          "lg:px-base80 sm:px-8 px-4 max-w-[1920px] mx-auto",

          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
