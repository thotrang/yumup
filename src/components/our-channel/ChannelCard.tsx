import BaseImage from "../BaseImage";
import BaseText from "../BaseText";

export default function ChannelCard({ item }: any) {
  return (
    <div>
      <BaseImage src={item.video} alt="" className="w-full h-auto" />
      <div className="py-5 flex gap-3 flex-row">
        <div className="flex-none">
          <BaseImage
            src={item.avatar}
            alt=""
            className="w-[68px] aspect-square rounded-full"
          />
        </div>
        <div className="flex-initial">
          <BaseText
            className="text-l font-semibold pb-1"
            content={item.title}
          />
          <BaseText
            className="text-xm font-normal text-t-shadow line-clamp-3"
            content={item.description}
          />
        </div>
      </div>
    </div>
  );
}
