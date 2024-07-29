import { getSettingAboutUs } from "@/apis";
import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import LibraryImage from "@/components/home/LibraryImage";
import OpeningStatement from "@/components/home/OpeningStatement";
import { IAboutUs } from "@/types/about-us";
import { get } from "lodash-es";

export default async function AboutUs() {
  const contents: IAboutUs[] = (await getSettingAboutUs()).data ?? [];
  return (
    <div>
      <div className="relative">
        {/* background */}
        <BaseImage
          src={get(
            contents[0],
            "attributes.background.data.attributes.formats.large.url",
            ""
          )}
          alt={""}
          className="w-full h-auto absolute z-[-10]"
        />
        <div className="w-full aspect-[834/378]"></div>
        {/* opening statement */}
        <BaseWrapperLayout
          isBackground
          className="font-bold sm:py-12 py-8 text-center relative"
        >
          <OpeningStatement />
          <div className="w-full h-full bg-white absolute top-0 z-[-1] left-0"></div>
        </BaseWrapperLayout>
      </div>
      {/* job */}
      <BaseWrapperLayout>
        <div className="lg:mx-6 py-12 flex flex-col sm:gap-8 gap-6">
          <BaseText
            className="font-bold text-xl-2 leading-[48px] tracking-tighter text-t-primary"
            tag="h1"
          >
            {contents[1]?.attributes?.title}
          </BaseText>
          <div
            className="font-medium leading-[32px] text-l"
            dangerouslySetInnerHTML={{
              __html: contents[1]?.attributes?.description ?? "",
            }}
          ></div>
        </div>
      </BaseWrapperLayout>
      {/* library */}
      <LibraryImage data={contents[4]?.attributes.gallery?.data ?? []} />
      <BaseWrapperLayout>
        <div className="lg:mx-6 grid lg:grid-cols-2 grid-cols-1 gap-9 lg:pt-[80px] sm:pt-12 pt-8 pb-12">
          {/* history */}
          <div className="flex flex-col sm:gap-8 gap-6">
            <BaseText className="!text-t-primary font-bold text-xl-2 tracking-tighter">
              {contents[2]?.attributes?.title}
            </BaseText>
            <div
              className="font-medium leading-[32px] text-l"
              dangerouslySetInnerHTML={{
                __html: contents[2]?.attributes?.description ?? "",
              }}
            ></div>
          </div>
          {/* our team */}
          <div className="flex flex-col sm:gap-8 gap-6">
            <BaseText className="!text-t-primary font-bold text-xl-2 tracking-tighter">
              {contents[3]?.attributes?.title}
            </BaseText>
            <div
              className="font-medium leading-[32px] text-l"
              dangerouslySetInnerHTML={{
                __html: contents[3]?.attributes?.description ?? "",
              }}
            ></div>
          </div>
        </div>
      </BaseWrapperLayout>
    </div>
  );
}
