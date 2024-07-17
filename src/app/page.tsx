import { getSettingHome } from "@/apis";
import HomeSection from "@/modules/HomeSection";
import { ISection } from "@/types";

export default async function Home() {
  const res = await getSettingHome();
  return (
    <div className="w-full">
      {res?.data?.map((section: ISection, index: number) => {
        return <HomeSection section={section} key={index} />;
      })}
    </div>
  );
}
