import { IHeadline } from "@/types/headline";
import BaseImage from "../BaseImage";
import BaseText from "../BaseText";
import { get } from "lodash-es";

export default function HeadlineCard({ headline }: { headline: IHeadline }) {
  return (
    <div className="flex flex-col gap-base20">
      <BaseImage
        src={get(headline, "attributes.thumbnail.data.attributes.url", "")}
        alt=""
        className="w-full h-[320px] rounded-2xl overflow-hidden object-cover"
      />
      <BaseText
        className="text-l font-bold line-clamp-2"
        content={headline.attributes.title}
      ></BaseText>
    </div>
  );
}
