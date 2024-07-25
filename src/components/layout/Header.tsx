"use client";

import { ERouter } from "@/types/navigate";
import BaseImage from "@/components/BaseImage";
import Logo from "@/public/icons/Logo.svg";
import BaseTextButton from "../BaseTextButton";
import { usePathname, useRouter } from "next/navigation";
import BaseWrapperLayout from "../BaseWrapperLayout";
import Menu from "@/public/icons/Menu";
import BaseAction from "../BaseAction";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useOutSideClick from "@/hooks/useOutSideClick";
import { twMerge } from "tailwind-merge";
import useAos from "@/hooks/useAos";

export default function Header() {
  const itemRoutes = [
    { title: "About", link: ERouter.ABOUT_US },
    { title: "Our Channels", link: ERouter.OUR_CHANNELS },
    { title: "Headlines", link: ERouter.HEADLINES },
    { title: "Contact", link: ERouter.CONTACT },
  ];
  const [showDropdown, setShowDropdown] = useState(false);
  const menuRef = useRef<any>();
  const router = useRouter();
  const pathname = usePathname();

  useOutSideClick(() => {
    setShowDropdown(false);
  }, menuRef);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  useAos({});

  return (
    <BaseWrapperLayout
      // dataAos="fade-down"
      className="flex justify-between items-center 2xl:h-base90 sm:h-base70 h-base60"
    >
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <BaseImage
          src={Logo}
          alt={""}
          className="sm:h-base60 h-base50 w-auto"
        />
      </div>
      <div className="gap-12 lg:flex hidden">
        {itemRoutes.map((item, index) => {
          return (
            <BaseTextButton
              onClick={() => {
                router.push(item.link);
              }}
              key={index}
              tag="span"
              className={twMerge(
                item.link === pathname && "text-t-primary",
                "text-l max-2xl:text-xm font-semibold"
              )}
            >
              {item.title}
            </BaseTextButton>
          );
        })}
      </div>
      <BaseAction
        className="lg:hidden block"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <Menu className="h-10 w-10"/>
      </BaseAction>
      <motion.div
        className={twMerge(
          "absolute top-base80 sm:right-8 right-6",
          "border border-solid border-black/50 rounded-lg z-50 bg-white overflow-hidden"
        )}
        initial="exit"
        animate={showDropdown ? "enter" : "exit"}
        variants={subMenuAnimate}
      >
        <div className="bg-white">
          {itemRoutes.map((item, index) => {
            return (
              <div
                key={index}
                className="border-0 border-solid border-black/50 border-b w-[200px] px-4 py-6 last:border-b-0"
              >
                <BaseTextButton
                  className="whitespace-nowrap text-textColorSecond font-medium"
                  tag="p"
                  size="XS"
                  onClick={() => {
                    router.push(item.link);
                    setShowDropdown(!showDropdown);
                  }}
                >
                  {item.title}
                </BaseTextButton>
              </div>
            );
          })}
        </div>
      </motion.div>
    </BaseWrapperLayout>
  );
}
