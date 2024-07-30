import { IChannel } from "@/types/channel";
import BaseDivider from "../BaseDivider";
import BaseImage from "../BaseImage";
import BaseText from "../BaseText";
import { get } from "lodash-es";
import BaseVideo from "../BaseVideo";

export default function ChannelCardV2({ item }: { item: IChannel }) {
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
    <div className="bg-white overflow-hidden rounded-lg h-fit">
      <div>
        {isImg ? (
          <BaseImage
            src={video}
            alt=""
            className="w-full h-auto aspect-video"
          />
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
      </div>
      <div className="relative p-6 flex gap-3 flex-row">
        <div className="flex-none absolute top-0 translate-y-[-50%]">
          <BaseImage
            src={avatar}
            alt=""
            className="!w-base100 aspect-square rounded-full object-cover"
          />
        </div>
        <div className="flex-initial pt-10">
          <BaseText
            className="text-xl-2 font-semibold pb-2 leading-7"
            content={item.attributes.name}
          />
          <BaseText
            className="!text-xm font-normal text-t-shadow !leading-7 line-clamp-3"
            content={item.attributes.shortDescription}
          />
          <BaseDivider className="w-1/3" />
          <div className="text-xm font-normal text-t-shadow leading-7 break-words overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: item.attributes?.description ?? "",
            }}
          ></div>
          {/* <ul className="m-0 pl-8">
            {item?.data?.map((data: string, index: number) => {
              return (
                <li
                  key={index}
                  className="text-xm font-normal text-t-shadow leading-7"
                >
                  {data}
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
