"use client";

import { twJoin } from "tailwind-merge";
import { IThumbnail } from "@/types";
import BaseVideo from "../BaseVideo";
import BaseImage from "../BaseImage";
import { isImageOrVideo } from "@/helpers";
import { useDeviceType } from "@/hooks/useWindowSize";

export default function LibraryImage({ data }: { data: IThumbnail[] }) {
  const deviceType = useDeviceType();
  if (deviceType === null) return null;
  return (
    <div>
      {deviceType === "mobile" ? (
        <ListItem data={data} />
      ) : (
        <ListGridCol data={data} />
      )}
    </div>
  );
}
function ListItem({ data }: { data: IThumbnail[] }) {
  return (
    <div className="h-[500px] grid grid-cols-3 gap-1">
      {data?.map((item, index) => {
        return (
          <div className="relative overflow-hidden" key={index}>
            <CustomItem item={item} />
          </div>
        );
      })}
    </div>
  );
}
function CustomItem({ item }: { item: IThumbnail }) {
  const isVideo = isImageOrVideo(item?.attributes?.ext) === "video";
  return (
    <>
      {isVideo ? (
        <BaseVideo
          src={item?.attributes?.url}
          className="h-full w-full object-cover absolute"
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
        />
      ) : (
        <BaseImage
          src={item?.attributes?.url}
          alt={""}
          className="h-full w-full object-cover absolute"
        />
      )}
    </>
  );
}
function GridColItem({
  value,
  row,
}: {
  row?:
    | "row-span-1"
    | "row-span-2"
    | "row-span-3"
    | "row-span-4"
    | "row-span-5";
  col?:
    | "col-span-1"
    | "col-span-2"
    | "col-span-3"
    | "col-span-4"
    | "col-span-5";
  value?: IThumbnail;
}) {
  if (!value) return null;
  return (
    <div className={twJoin("relative", row)}>
      <CustomItem item={value} />
    </div>
  );
}
function ListGridCol({ data }: { data: IThumbnail[] }) {
  return (
    <div className="w-full 4xl:h-[1200px] 3xl:h-[1000px] 2xl:h-[900px] sm:h-[727px] grid grid-cols-5 gap-6">
      <div className="grid h-full grid-rows-5 gap-6">
        <GridColItem value={data[0]} row="row-span-2" />
        <GridColItem value={data[1]} row="row-span-3" />
      </div>
      <div className="grid h-full grid-rows-7 gap-6">
        <GridColItem value={data[2]} row="row-span-2" />
        <GridColItem value={data[3]} row="row-span-4" />
        <GridColItem value={data[4]} row="row-span-1" />
      </div>
      <div className="grid h-full grid-rows-5 gap-6">
        <GridColItem value={data[5]} row="row-span-2" />
        <GridColItem value={data[6]} row="row-span-3" />
      </div>
      <div className="grid h-full grid-rows-7 gap-6">
        <GridColItem value={data[7]} row="row-span-2" />
        <GridColItem value={data[8]} row="row-span-4" />
        <GridColItem value={data[9]} row="row-span-1" />
      </div>
      <div className="grid h-full grid-rows-5 gap-6">
        <GridColItem value={data[10]} row="row-span-2" />
        <GridColItem value={data[11]} row="row-span-3" />
      </div>
    </div>
  );
}
