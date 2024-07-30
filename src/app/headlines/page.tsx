import { getHeadlines } from "@/apis";
import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import HeadlineCard from "@/components/headline/HeadlineCard";
import { IHeadline } from "@/types/headline";

export default async function Headlines() {
  const headlines = await getHeadlines();
  return (
    <BaseWrapperLayout
      isBackground
      className="lg:pt-base60 sm:pt-12 pt-6 pb-base70 gap-8 lg:min-h-[calc(100vh-380px)]"
    >
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {headlines?.data?.map((headline: IHeadline, index: number) => (
          <HeadlineCard headline={headline} key={index} />
        ))}
      </div>
    </BaseWrapperLayout>
  );
}
