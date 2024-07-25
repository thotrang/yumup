import { IChannel } from "@/types/channel";
import BaseImage from "../BaseImage";
import BaseText from "../BaseText";
import BaseVideo from "../BaseVideo";
import { get } from "lodash-es";

export default function ChannelCard({ item }: { item: IChannel }) {
  const avatar = get(item, "attributes.avatar.data.attributes.url", "");
  const video =
    get(
      item,
      "attributes.thumbnail.data.attributes.formats.thumbnail.url",
      null
    ) ?? get(item, "attributes.thumbnail.data.attributes.url", "");
  const isImg = [".jpg", ".png"].includes(
    get(item, "attributes.thumbnail.data.attributes.ext", "")
  );
  return (
    <div>
      {isImg ? (
        <BaseImage src={video} alt="" className="w-full h-auto aspect-video" />
      ) : (
        <BaseVideo
          className="w-full aspect-video h-auto"
          autoPlay
          muted
          loop
          src={video}
          controls={true}
          link={item.attributes.link ?? ""}
        />
      )}

      <div className="py-5 flex gap-3 flex-row">
        <div className="flex-none">
          <BaseImage
            src={avatar}
            alt=""
            className="w-[68px] aspect-square rounded-full object-cover"
          />
        </div>
        <div className="flex-initial">
          <BaseText
            className="text-l font-semibold pb-1"
            content={item.attributes.name}
          />
          <BaseText
            className="leading-[24px] font-normal !text-t-shadow line-clamp-3 text-xm"
            content={item.attributes.shortDescription}
          />
        </div>
      </div>
    </div>
  );
}
