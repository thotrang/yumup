"use client";
import SliderChannel from "./SlideChannel";
import BaseWrapperLayout from "../BaseWrapperLayout";
import ChannelCard from "./ChannelCard";
import { IChannel } from "@/types/channel";
import { twJoin } from "tailwind-merge";
import { useDeviceType } from "@/hooks/useWindowSize";

export default function ListChannel({ channels }: { channels: IChannel[] }) {
  const deviceType = useDeviceType();
  if (deviceType === null) return null;
  if (deviceType === "desktop")
    return (
      <BaseWrapperLayout>
        <div className={twJoin("grid lg:grid-cols-3 grid-cols-2 gap-8", "")}>
          {channels.map((item, index) => {
            return <ChannelCard item={item} key={index} />;
          })}
        </div>
      </BaseWrapperLayout>
    );
  return <SliderChannel items={channels} />;
}
