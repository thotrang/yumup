"use client";

import { twJoin } from "tailwind-merge";
import { IThumbnail } from "@/types";
import BaseVideo from "../BaseVideo";
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
  return (
    <div className={twJoin("relative", row)}>
      <BaseVideo
        src={value?.attributes?.url}
        poster={value?.attributes?.url}
        className="h-full w-full object-cover absolute disable-controls"
        controls={false}
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </div>
  );
}
export default function LibraryImage({ data }: { data: IThumbnail[] }) {
  return (
    <div className="sm:px-6">
      <div className="h-[500px] max-sm:grid hidden grid-cols-3 gap-1">
        {data?.map((item, index) => (
          <div className="relative overflow-hidden" key={index}>
            <BaseVideo
              src={item?.attributes?.url}
              poster={item?.attributes?.url}
              className="h-full w-full object-cover absolute"
              controls={false}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
        ))}
      </div>
      <div className="w-full sm:h-[727px] sm:grid hidden grid-cols-5 gap-6">
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
    </div>
  );
}
