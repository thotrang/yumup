"use client";

import { ERouter } from "@/types/navigate";
import BaseImage from "../BaseImage";
import Logo from "@/public/icons/Logo.svg";
import BaseTextButton from "../BaseTextButton";
import Mail from "@/public/icons/Mail";
import Phone from "@/public/icons/Phone";
import Facebook from "@/public/icons/Facebook";
import { useRouter } from "next/navigation";
import BaseWrapperLayout from "../BaseWrapperLayout";

export default function Footer() {
  const itemRoutes_1 = [
    { title: "About", link: ERouter.ABOUT_US },
    { title: "Our Channels", link: ERouter.OUR_CHANNELS },
    { title: "Headlines", link: ERouter.HEADLINES },
  ];
  const itemRoutes_2 = [
    { title: "Contact Us", link: ERouter.CONTACT },
    { title: "Parter", link: ERouter.PARTER },
  ];
  const itemRoutes_3 = [
    { title: "@email.com", link: ERouter.CONTACT, icon: <Mail /> },
    { title: "xxxxxxxxxxxxx", link: ERouter.PARTER, icon: <Phone /> },
    { title: "yumup", link: ERouter.PARTER, icon: <Facebook className="h-6 w-6"/> },
  ];
  const router = useRouter();
  return (
    <BaseWrapperLayout className="flex sm:justify-between sm:flex-row max-sm:gap-8 flex-col py-8">
      <div className="cursor-pointer" onClick={() => router.push('/')}>
        <BaseImage src={Logo} alt={""} className="h-base60 w-auto" />
      </div>
      <div className="flex flex-col gap-4">
        {itemRoutes_1.map((item, index) => {
          return (
            <BaseTextButton
              key={index}
              tag="span"
              className="text-xm font-medium px-3"
              onClick={() => router.push(item.link)}
            >
              {item.title}
            </BaseTextButton>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        {itemRoutes_2.map((item, index) => {
          return (
            <BaseTextButton
              key={index}
              tag="span"
              className="text-xm font-medium px-3"
              onClick={() => router.push(item.link)}
            >
              {item.title}
            </BaseTextButton>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        {itemRoutes_3.map((item, index) => {
          return (
            <BaseTextButton
              key={index}
              tag="span"
              className="text-xm font-medium flex gap-2 items-center px-3"
              onClick={() => router.push(item.link)}
            >
              {item.icon}
              {item.title}
            </BaseTextButton>
          );
        })}
      </div>
    </BaseWrapperLayout>
  );
}
