import BaseText from "@/components/BaseText";
import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import StarChannel from "@/public/icons/StarChannel";
import { IChannel } from "@/types/channel";
import ListChannel from "@/components/our-channel/ListChannel";

export default function InfomationOurChannel({
  channels,
}: {
  channels: IChannel[];
}) {
  return (
    <div className="sm:py-16 py-9">
      <BaseWrapperLayout>
        <div className="flex items-center flex-row">
          <BaseText
            data-aos="fade-right"
            tag="h1"
            className="font-black !text-t-primary sm:text-5xl text-3xl-2 tracking-tighter whitespace-nowrap"
          >
            Our Channel
          </BaseText>
          <div data-aos="fade-up">
            <StarChannel className="h-[156px] w-auto" />
          </div>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-3 lg:gap-base80 gap-8 text-t-primary sm:py-12 py-6 content-center ">
          <BaseText
            data-aos="fade-right"
            className="text-xl-2 leading-[48px] font-bold lg:col-span-5 sm:col-span-2 col-span-3 tracking-[-1px]"
            content="YumUp's content channels offer everything you crave!"
          ></BaseText>
          <div className="text-l leading-8 font-normal lg:col-span-7 col-span-3 flex items-center">
            <BaseText
              data-aos="fade-left"
              className="text-t-primary"
              content={`"Explore our delightful range of content, from Beauty tips and Sweet treats to Miniatures, DIY projects, and Satisfying videos, plus so much more!"`}
            ></BaseText>
          </div>
        </div>
      </BaseWrapperLayout>
      <ListChannel channels={channels} />
    </div>
  );
}
