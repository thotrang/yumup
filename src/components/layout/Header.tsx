"use client";

import { ERouter } from "@/types/navigate";
import BaseImage from "@/components/BaseImage";
import Logo from "@/public/images/logo.png";
import BaseTextButton from "../BaseTextButton";
import { usePathname, useRouter } from "next/navigation";
import BaseWrapperLayout from "../BaseWrapperLayout";
import Menu from "@/public/icons/Menu";
import BaseAction from "../BaseAction";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useOutSideClick from "@/hooks/useOutSideClick";
import { twJoin, twMerge } from "tailwind-merge";
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
      dataAos="fade-down"
      className="flex justify-between items-center sm:h-base90 h-base60"
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
              className={twJoin(
                "!text-l font-semibold",
                item.link === pathname && "text-t-primary"
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
        <Menu />
      </BaseAction>
      <motion.div
        className={twMerge(
          "absolute top-base80 sm:right-8 right-6",
          "border border-solid border-borderColor rounded-lg z-50 bg-white overflow-hidden"
        )}
        initial="exit"
        animate={showDropdown ? "enter" : "exit"}
        variants={subMenuAnimate}
      >
        <div className="bg-gradient-to-r from-primary/70 to-primary/20">
          {itemRoutes.map((item, index) => {
            return (
              <div
                key={index}
                className="border-0 border-solid border-borderColor border-b w-[200px] p-4 last:border-b-0"
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
