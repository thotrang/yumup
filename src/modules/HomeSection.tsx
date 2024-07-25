import BaseImage from "@/components/BaseImage";
import InfomationStatistic from "./InfomationStatistic";
import InfomationOurChannel from "./InfomationOurChannel";
import InfomationHeadlines from "./InfomationHeadlines";
import { ISection } from "@/types";
import { getChannels, getHeadlines } from "@/apis";
import get from "lodash-es/get";
import BaseVideo from "@/components/BaseVideo";

export default async function HomeSection({ section }: { section: ISection }) {
  switch (section.attributes.section) {
    case "banner": {
      const url = get(section, "attributes.background.data.attributes.url", "");

      const isImg = [".jpg", ".png", ".jpng"].includes(
        get(section, "attributes.background.data.attributes.ext", "")
      );
      if (isImg) return <BaseImage alt={""} src={url} />;
      return (
        <BaseVideo
          className="w-full aspect-video h-auto disable-controls"
          autoPlay
          muted
          loop
          controls={false}
          src={url}
        />
      );
    }
    case "statistic":
      return <InfomationStatistic section={section} />;
    case "channel": {
      const channels = await getChannels();
      return <InfomationOurChannel channels={channels.data} />;
    }
    case "headline": {
      const headlines = await getHeadlines();
      return <InfomationHeadlines headlines={headlines.data} />;
    }
    default:
      return <div></div>;
  }
}
