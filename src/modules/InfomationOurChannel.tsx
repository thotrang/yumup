"use client";

import BaseText from "@/components/BaseText";
import VideoImage from "@/public/images/div.png";
import AvatarChannel from "@/public/images/Avatar-channel.png";
import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import StartChannel from "@/public/icons/StartChannel";
import ChannelCard from "@/components/our-channel/ChannelCard";
import { twJoin } from "tailwind-merge";
import { useWindowSize } from "@/hooks/useWindowSize";
import SliderChannel from "@/components/our-channel/SlideChannel";

export default function InfomationOurChannel() {
  const listChannel = [
    {
      video: VideoImage,
      title: "Channel 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
    },
    {
      video: VideoImage,
      title: "Channel 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
    },
    {
      video: VideoImage,
      title: "Channel 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
    },
    {
      video: VideoImage,
      title: "Channel 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
    },
    {
      video: VideoImage,
      title: "Channel 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
    },
    {
      video: VideoImage,
      title: "Channel 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
    },
  ];
  const { width } = useWindowSize();
  return (
    <div className="sm:py-16 py-9">
      <BaseWrapperLayout>
        <div className="flex items-center flex-row">
          <BaseText
            tag="h1"
            className="font-black !text-t-primary sm:text-5xl text-3xl-2 tracking-tighter whitespace-nowrap"
          >
            Our Channel
          </BaseText>
          <StartChannel className="h-[156px] w-auto" />
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-3 lg:gap-base80 gap-8 text-t-primary sm:py-12 py-6 content-center ">
          <BaseText
            className="text-xl-2 leading-[48px] font-bold lg:col-span-5 sm:col-span-2 col-span-3 tracking-[-1px]"
            content="YumUp's content channels offer everything you crave!"
          ></BaseText>
          <div className="text-l leading-6 font-normal lg:col-span-7 col-span-3 flex items-center">
            <BaseText
              className="text-t-primary"
              content={`"Explore our delightful range of content, from Beauty tips and Sweet treats to Miniatures, DIY projects, and Satisfying videos, plus so much more!"`}
            ></BaseText>
          </div>
        </div>
      </BaseWrapperLayout>
      {width >= 640 ? (
        <BaseWrapperLayout>
          <div className={twJoin("grid lg:grid-cols-3 grid-cols-2 gap-8", "")}>
            {listChannel.map((item, index) => {
              return <ChannelCard item={item} key={index} />;
            })}
          </div>
        </BaseWrapperLayout>
      ) : (
        <SliderChannel items={listChannel} />
      )}
    </div>
  );
}
