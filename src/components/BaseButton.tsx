"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface IBaseButton extends PropsWithChildren {
  className?: string;
  onClick: (data: any) => void;
  disabled?: boolean;
  type?: any;
}
export default function BaseButton({
  className,
  onClick,
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
          ? { scale: 1.01, opacity: 0.9, transition: { duration: 0.2 } }
          : {}
      }
      whileTap={!disabled ? { scale: 0.99, opacity: 0.3 } : {}}
      className={twMerge(
        "!text-white cursor-pointer bg-t-primary py-4 px-6 rounded-md border-0 text-m font-medium",
        className,
        disabled && "cursor-not-allowed !opacity-50 "
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}