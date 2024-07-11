import { twMerge } from "tailwind-merge";

export default function BaseDivider({ className }: { className?: string }) {
  return <div className={twMerge("w-full h-1 bg-t-primary my-5", className)} />;
}
