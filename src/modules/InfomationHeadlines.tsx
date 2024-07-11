"use client";

import BaseButtonViewmore from "@/components/BaseButtonViewmore";
import BaseText from "@/components/BaseText";
import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import HeadlineCard from "@/components/headline/HeadlineCard";
import Headline from "@/public/images/headline.jpeg";

export default function InfomationHeadlines() {
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
  ];
  return (
    <BaseWrapperLayout isBackground className="py-4 max-sm:pt-0">
      <BaseText
        tag="h1"
        className="text-t-primary font-bold text-[68px] text-center py-12 "
      >
        Headlines
      </BaseText>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-y-12">
        {headlines.map((headline, index) => (
          <HeadlineCard headline={headline} key={index} />
        ))}
      </div>
      <div className="text-center py-8">
        <BaseButtonViewmore onClick={() => {}}></BaseButtonViewmore>
      </div>
    </BaseWrapperLayout>
  );
}
