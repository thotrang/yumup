import { apiUrl } from "@/apis";
import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import HeadlineCard from "@/components/headline/HeadlineCard";
import { IHeadline } from "@/types/headline";

const getHeadlines = async () => {
  const res = await fetch(apiUrl + `headlines?populate=*`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Headlines() {
  const headlines = await getHeadlines();
  return (
    <BaseWrapperLayout className="lg:py-[86px] sm:py-16 py-12  bg-gradient-to-r from-primary/70 to-primary/20">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {headlines?.data?.map((headline: IHeadline, index: number) => (
          <HeadlineCard headline={headline} key={index} />
        ))}
      </div>
    </BaseWrapperLayout>
  );
}
