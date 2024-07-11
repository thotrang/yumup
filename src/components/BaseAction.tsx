"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
export interface IBaseAction extends PropsWithChildren {
  className?: string;
  onClick: (data: any) => void;
  disabled?: boolean;
}
export default function BaseAction({
  className,
  onClick,
  children,
  ...props
}: IBaseAction) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, opacity: 0.9, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95, opacity: 0.3 }}
      className={twMerge("cursor-pointer overflow-hidden", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
}
