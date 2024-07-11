import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { twJoin, twMerge } from "tailwind-merge";

interface IBaseInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register?: any;
  className?: string;
  type?: "input" | "textarea";
}
export default function BaseInput({
  placeholder,
  value,
  onChange,
  name,
  register,
  className,
  type = "input",
}: IBaseInput) {
  return (
    <div className={className}>
      {type === "input" ? (
        <input
          className={twJoin(
            "py-3 px-4 text-m w-[-webkit-fill-available]",
            "border border-solid border-[#111113]/20 rounded-md"
          )}
          value={value}
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...register}
        />
      ) : (
        <textarea
          className={twJoin(
            "py-3 px-4 text-m w-[-webkit-fill-available] h-[60px]",
            "border border-solid border-[#111113]/20 rounded-md"
          )}
          value={value}
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...register}
        ></textarea>
      )}
    </div>
  );
}
