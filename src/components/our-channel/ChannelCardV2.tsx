import BaseDivider from "../BaseDivider";
import BaseImage from "../BaseImage";
import BaseText from "../BaseText";

export default function ChannelCardV2({ item }: any) {
  return (
    <div className="bg-white overflow-hidden rounded-lg">
      <div>
        <BaseImage src={item.video} alt="" className="w-full h-auto" />
      </div>
      <div className="relative p-6 flex gap-3 flex-row">
        <div className="flex-none absolute top-0 translate-y-[-50%]">
          <BaseImage
            src={item.avatar}
            alt=""
            className="w-base100 aspect-square rounded-full"
          />
        </div>
        <div className="flex-initial pt-10">
          <BaseText
            className="text-xl-2 font-semibold pb-2 leading-7"
            content={item.title}
          />
          <BaseText
            className="!text-xm font-normal text-t-shadow !leading-7"
            content={item.description}
          />
          <BaseDivider className="w-1/3" />
          <ul className="m-0 pl-8">
            {item.data.map((data: string, index: number) => {
              return (
                <li key={index} className="text-xm font-normal text-t-shadow leading-7">
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
