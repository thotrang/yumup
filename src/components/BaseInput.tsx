import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";

interface IBaseInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register?: any;
  className?: string;
  type?: "input" | "textarea";
  typeInput?: string;
}
export default function BaseInput({
  placeholder,
  value,
  onChange,
  name,
  register,
  className,
  type = "input",
  typeInput = "text",
}: IBaseInput) {
  return (
    <div className={className}>
      {type === "input" ? (
        <input
          className={twJoin(
            "py-3 px-4 text-m w-[-webkit-fill-available]",
            "border border-solid border-[#111113]/20 rounded-md placeholder-custom"
          )}
          value={value}
          type={typeInput}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...register}
        />
      ) : (
        <textarea
          className={twJoin(
            "py-3 px-4 !text-m w-[-webkit-fill-available] h-[60px] placeholder-custom",
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
