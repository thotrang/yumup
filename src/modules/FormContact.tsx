"use client";

import { apiUrl } from "@/apis";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import BaseText from "@/components/BaseText";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function FormContact() {
  const formMethods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = formMethods;
  const onSubmit = async (data: any) => {
    const response = await fetch(apiUrl + "forms", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      reset();
      toast.success("Liên hệ thành công!");
    } else {
      toast.error("Liên hệ thất bại!");
    }
  };
  return (
    <div className="w-full h-full">
      <form className="w-full grid grid-cols-2 gap-8">
        <div className="relative">
          <BaseInput
            id="firstname"
            register={{
              ...register("firstname", {
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
            id="lastname"
            register={{
              ...register("lastname", {
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
              ...register("address"),
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
                required: "Vui lòng nhập số điện thoại của bạn",
              }),
            }}
            placeholder="Phone"
            className=""
            typeInput="number"
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
                required: "Vui lòng nhập tin nhắn của bạn",
              }),
            }}
            type="textarea"
            placeholder="Message"
          ></BaseInput>
          {errors.phone && (
            <BaseText className="absolute !text-error text-xs pt-1">
              {(errors.phone as any).message}
            </BaseText>
          )}
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
