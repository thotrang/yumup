import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import HeadlineCard from "@/components/headline/HeadlineCard";
import Headline from "@/public/images/headline.jpeg";

export default function Headlines() {
  const headlines = [
    {
      image: Headline,
      title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
    },
    {
      image: Headline,
      title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
    },
    {
      image: Headline,
      title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
    },
    {
      image: Headline,
      title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
    },
    {
      image: Headline,
      title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
    },
    {
      image: Headline,
      title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
    },
    {
      image: Headline,
      title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
    },
    {
      image: Headline,
      title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
    },
  ];
  return (
    <BaseWrapperLayout className="lg:py-[86px] sm:py-16 py-12  bg-gradient-to-r from-primary/70 to-primary/20">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {headlines.map((headline, index) => (
          <HeadlineCard headline={headline} key={index} />
        ))}
      </div>
    </BaseWrapperLayout>
  );
}
