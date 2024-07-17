"use client";

import BaseText from "@/components/BaseText";
import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import OpeningStatement from "@/components/home/OpeningStatement";
import Facebook from "@/public/icons/Facebook";
import TikTok from "@/public/icons/Tiktok";
import Youtube from "@/public/icons/Youtube";
import { ISection } from "@/types";
import { useMemo } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import useAos from "@/hooks/useAos";

function GrirdInfo({ item, dataAos }: any) {
  const { title, description, color, icon, isFullSize } = item;
  return (
    <div
      data-aos={dataAos}
      className={twMerge(
        "bg-white/80 rounded-full border-1 border-solid border-white content-center overflow-hidden",
        !isFullSize && "aspect-square flex justify-center items-center"
      )}
    >
      <div
        className={twMerge(
          "flex flex-col justify-center xl:gap-4 sm:gap-3 gap-2",
          color,
          !isFullSize && " w-[70%]"
        )}
      >
        {icon && <div>{icon}</div>}
        <BaseText
          className={twMerge(
            "font-black",
            color,
            !isFullSize && "xl:text-5xl sm:text-xl-2 text-xl",
            isFullSize && "xl:text-max-3 sm:text-max-2 text-max"
          )}
        >
          {description}
        </BaseText>
        <BaseText
          className={twMerge(
            "font-medium",
            color,
            !isFullSize && "xl:text-xl-2 text-m sm:text-xm",
            isFullSize && "font-black sm:text-2xl text-l"
          )}
        >
          {title}
        </BaseText>
      </div>
    </div>
  );
}
export default function InfomationStatistic({
  section,
}: {
  section: ISection;
}) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "youtube":
        return <Youtube className="sm:w-base60 sm:h-base60 w-9 h-9" />;
      case "facebook":
        return <Facebook className="sm:w-base60 sm:h-base60 w-9 h-9" />;
      case "tiktok":
        return <TikTok className="sm:w-base60 sm:h-base60 w-9 h-9" />;
      default:
        return null;
    }
  };
  const getTextColor = (index: number) => {
    switch (index) {
      case 0:
      case 2:
      case 4:
        return "text-t-primary";
      default:
        return "text-t-secondary";
    }
  };
  const listInfo = useMemo(() => {
    return section?.attributes?.ListStatistic.map((item, index) => {
      return {
        title: item.title,
        description: item.value,
        color: getTextColor(index),
        icon: getIcon(item.icon),
        isFullSize: index === 0,
      };
    });
  }, [section?.attributes?.ListStatistic]);

  useAos({});

  return (
    <BaseWrapperLayout className="lg:py-base110 sm:py-16 py-12" isBackground>
      <OpeningStatement />
      <div
        className={twJoin(
          "grid sm:grid-cols-3 max-sm:grid-rows-3 xl:gap-base106 sm:gap-base60 gap-6 ",
          "lg:pt-base80 pt-12 text-center"
        )}
      >
        <GrirdInfo dataAos={"fade-right"} item={listInfo[0]} />
        <div className="grid sm:grid-rows-2 max-sm:grid-cols-2 xl:gap-12 sm:gap-7 gap-6">
          <GrirdInfo dataAos={"fade-up"} item={listInfo[1]} />
          <GrirdInfo dataAos={"fade-up"} item={listInfo[2]} />
        </div>
        <div className="grid sm:grid-rows-2 max-sm:grid-cols-2 xl:gap-12 sm:gap-7 gap-6">
          <GrirdInfo dataAos={"fade-up"} item={listInfo[3]} />
          <GrirdInfo dataAos={"fade-up"} item={listInfo[4]} />
        </div>
      </div>
    </BaseWrapperLayout>
  );
}
