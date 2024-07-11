import BaseImage from "@/components/BaseImage";
import InfomationHeadlines from "@/modules/InfomationHeadlines";
import InfomationOurChannel from "@/modules/InfomationOurChannel";
import InfomationStatistic from "@/modules/InfomationStatistic";
import Banner from "@/public/images/banner.png";
export default function Home() {
  return (
    <div className="w-full">
      <BaseImage src={Banner} alt="" />
      <InfomationStatistic />
      <InfomationOurChannel />
      <InfomationHeadlines />
    </div>
  );
}
