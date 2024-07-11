"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export interface IBaseButton extends PropsWithChildren {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  type?: any;
}
export default function BaseButtonViewmore({
  className,
  onClick = () => {},
  children,
  disabled = false,
  type,
  ...props
}: IBaseButton) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={
        !disabled
          ? {
              scale: 1.03,
              opacity: 0.9,
              backgroundColor: "#EC273A",
              color: "white",
              transition: { duration: 0.2 },
            }
          : {}
      }
      whileTap={!disabled ? { scale: 0.95, opacity: 0.3 } : {}}
      className={twMerge(
        "bg-white border-2 font-medium text-l border-solid border-b_primary rounded-full py-5 px-10"
      )}
      //   onClick={onClick}
      {...props}
    >
      View more
    </motion.button>
  );
}