"use clinet";

import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import VideoImage from "@/public/images/div.png";
import AvatarChannel from "@/public/images/Avatar-channel.png";
import ChannelCardV2 from "@/components/our-channel/ChannelCardV2";

export default function OurChannels() {
  const listChannel = [
    {
      video: VideoImage,
      title: "Channel 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
      data: [
        "200M+ cross-platform subscribers ",
        "1B+ views on TikTok",
        "10B+ views on YouTube",
        "44M followers on Facebook",
        "Produced in 17 languages",
      ],
    },
    {
      video: VideoImage,
      title: "Channel 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
      data: [
        "200M+ cross-platform subscribers ",
        "1B+ views on TikTok",
        "10B+ views on YouTube",
        "44M followers on Facebook",
        "Produced in 17 languages",
      ],
    },
    {
      video: VideoImage,
      title: "Channel 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
      data: [
        "200M+ cross-platform subscribers ",
        "1B+ views on TikTok",
        "10B+ views on YouTube",
        "44M followers on Facebook",
        "Produced in 17 languages",
      ],
    },
    {
      video: VideoImage,
      title: "Channel 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
      data: [
        "200M+ cross-platform subscribers ",
        "1B+ views on TikTok",
        "10B+ views on YouTube",
        "44M followers on Facebook",
        "Produced in 17 languages",
      ],
    },
    {
      video: VideoImage,
      title: "Channel 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
      data: [
        "200M+ cross-platform subscribers ",
        "1B+ views on TikTok",
        "10B+ views on YouTube",
        "44M followers on Facebook",
        "Produced in 17 languages",
      ],
    },
    {
      video: VideoImage,
      title: "Channel 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero et odio.",
      avatar: AvatarChannel,
      data: [
        "200M+ cross-platform subscribers ",
        "1B+ views on TikTok",
        "10B+ views on YouTube",
        "44M followers on Facebook",
        "Produced in 17 languages",
      ],
    },
  ];
  return (
    <BaseWrapperLayout
      isBackground
      className="lg:py-16 sm:py-8 py-6 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
    >
      {listChannel.map((item, index) => {
        return <ChannelCardV2 item={item} key={index} />;
      })}
    </BaseWrapperLayout>
  );
}
