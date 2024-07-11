import BaseImage from "../BaseImage";
import BaseText from "../BaseText";

export default function HeadlineCard({ headline }: any) {
  return (
    <div className="flex flex-col gap-base20">
      <BaseImage
        src={headline.image}
        alt=""
        className="w-full h-[320px] rounded-2xl overflow-hidden object-cover"
      />
      <BaseText
        className="text-l font-bold line-clamp-2"
        content={headline.title}
      ></BaseText>
    </div>
  );
}
