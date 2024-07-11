"use client";

import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import BaseText from "@/components/BaseText";
import { useForm } from "react-hook-form";

export default function FormContact() {
  const formMethods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = formMethods;
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="w-full h-full">
      <form className="w-full grid grid-cols-2 gap-8">
        <div className="relative">
          <BaseInput
            id="firstName"
            register={{
              ...register("firstName", {
                required: "Vui lòng nhập tên của bạn",
              }),
            }}
            placeholder="First name"
            className=""
          ></BaseInput>
          {errors.firstName && (
            <BaseText className="absolute !text-error text-xs pt-1">
              {(errors.firstName as any).message}
            </BaseText>
          )}
        </div>
        <div className="relative">
          <BaseInput
            id="lastName"
            register={{
              ...register("lastName", {
                required: "Vui lòng nhập tên của bạn",
              }),
            }}
            placeholder="Last name"
            className=""
          ></BaseInput>
          {errors.lastName && (
            <BaseText className="absolute !text-error text-xs pt-1">
              {(errors.lastName as any).message}
            </BaseText>
          )}
        </div>
        <div className="relative">
          <BaseInput
            id="address"
            register={{
              ...register("address", {
                required: "Vui lòng nhập tên của bạn",
              }),
            }}
            placeholder="Address"
            className=""
          ></BaseInput>
        </div>
        <div className="relative">
          <BaseInput
            id="phone"
            register={{
              ...register("phone", {
                required: "Vui lòng nhập tên của bạn",
              }),
            }}
            placeholder="Phone"
            className=""
          ></BaseInput>
          {errors.phone && (
            <BaseText className="absolute !text-error text-xs pt-1">
              {(errors.phone as any).message}
            </BaseText>
          )}
        </div>
        <div className="col-span-2">
          <BaseInput
            id="message"
            register={{
              ...register("message", {
                required: "Vui lòng nhập tên của bạn",
              }),
            }}
            type="textarea"
            placeholder="Message"
          ></BaseInput>
        </div>
        <div className="col-span-2">
          <BaseButton className="w-full" onClick={handleSubmit(onSubmit)}>
            Send
          </BaseButton>
        </div>
      </form>
    </div>
  );
}