"use clinet";

import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import ChannelCardV2 from "@/components/our-channel/ChannelCardV2";
import { getChannels } from "@/apis";
import { IChannel } from "@/types/channel";

export default async function OurChannels() {
  const channels = await getChannels();
  
  return (
    <BaseWrapperLayout
      isBackground
      className="lg:py-16 sm:py-8 py-6 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
    >
      {channels?.data?.map((item: IChannel, index: number) => {
        return <ChannelCardV2 item={item} key={index} />;
      })}
    </BaseWrapperLayout>
  );
}
