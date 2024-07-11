import BaseText from "@/components/BaseText";
import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import OpeningStatement from "@/components/home/OpeningStatement";
import Facebook from "@/public/icons/Facebook";
import TikTok from "@/public/icons/Tiktok";
import Youtube from "@/public/icons/Youtube";
import { twJoin, twMerge } from "tailwind-merge";
function GrirdInfo({ item }: any) {
  const { title, description, color, icon, isFullSize } = item;
  return (
    <div
      className={twMerge(
        "bg-white/80 rounded-full border-1 border-solid border-white content-center overflow-hidden",
        !isFullSize && "aspect-square"
      )}
    >
      <div className={twMerge("flex flex-col justify-center gap-4 p-3", color)}>
        {icon && <div>{icon}</div>}
        <BaseText
          className={twMerge(
            "font-black",
            color,
            !isFullSize && "lg:text-5xl sm:text-xl-2 text-xl",
            isFullSize && "lg:text-max-3 sm:text-max-2 text-max"
          )}
        >
          {title}
        </BaseText>
        <BaseText
          className={twMerge(
            "font-medium",
            color,
            !isFullSize && "lg:text-xl-2 text-m sm:text-xm",
            isFullSize && "font-black sm:text-2xl text-l"
          )}
        >
          {description}
        </BaseText>
      </div>
    </div>
  );
}
export default function InfomationStatistic() {
  const listInfo = [
    {
      title: "60",
      description: "MILLION+ FOLLOWER",
      color: "text-t-primary",
      icon: "",
      isFullSize: true,
    },
    {
      title: "600M+",
      description: "Monthly views",
      color: "text-t-secondary",
      icon: "",
    },
    {
      title: "25M+",
      description: "Youtube Subscribers",
      color: "text-t-primary",
      icon: <Youtube />,
    },
    {
      title: "10M+",
      description: "Facebook",
      color: "text-t-secondary",
      icon: <Facebook />,
    },
    {
      title: "25M+",
      description: "Tiktok Subscribers",
      color: "text-t-primary",
      icon: <TikTok />,
    },
  ];
  return (
    <BaseWrapperLayout className="lg:py-base110 sm:py-16 py-12" isBackground>
      <OpeningStatement />
      <div
        className={twJoin(
          "grid sm:grid-cols-3 max-sm:grid-rows-3 lg:gap-base106 sm:gap-base60 gap-6 ",
          "lg:pt-base80 pt-12 text-center"
        )}
      >
        <GrirdInfo item={listInfo[0]} />
        <div className="grid sm:grid-rows-2 max-sm:grid-cols-2 lg:gap-12 sm:gap-7 gap-6">
          <GrirdInfo item={listInfo[1]} />
          <GrirdInfo item={listInfo[2]} />
        </div>
        <div className="grid sm:grid-rows-2 max-sm:grid-cols-2 lg:gap-12 sm:gap-7 gap-6">
          <GrirdInfo item={listInfo[3]} />
          <GrirdInfo item={listInfo[4]} />
        </div>
      </div>
    </BaseWrapperLayout>
  );
}
