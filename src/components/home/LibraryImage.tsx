"use client";

import ImgLib from "@/public/images/img_lib.png";
import BaseImage from "../BaseImage";
import { twJoin } from "tailwind-merge";
import { useWindowSize } from "@/hooks/useWindowSize";
function GridColItem({
  image,
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
  image: any;
}) {
  return (
    <div className={twJoin("relative", row)}>
      <BaseImage
        src={image}
        alt={""}
        className="h-full w-full object-cover absolute"
      />
    </div>
  );
}
export default function LibraryImage() {
  const listImages = [ImgLib, ImgLib, ImgLib, ImgLib, ImgLib];
  const { width } = useWindowSize();
  if (width < 640)
    return (
      <div>
        {listImages.map((image, index) => (
          <GridColItem key={index} image={image} row="row-span-2" />
        ))}
      </div>
    );
  return (
    <div className="w-full h-[727px] grid grid-cols-5 gap-6">
      <div className="grid h-full grid-rows-5 gap-6">
        <GridColItem image={listImages[0]} row="row-span-2" />
        <GridColItem image={listImages[0]} row="row-span-3" />
      </div>
      <div className="grid h-full grid-rows-7 gap-6">
        <GridColItem image={listImages[0]} row="row-span-2" />
        <GridColItem image={listImages[0]} row="row-span-4" />
        <GridColItem image={listImages[0]} row="row-span-1" />
      </div>
      <div className="grid h-full grid-rows-5 gap-6">
        <GridColItem image={listImages[0]} row="row-span-2" />
        <GridColItem image={listImages[0]} row="row-span-3" />
      </div>
      <div className="grid h-full grid-rows-7 gap-6">
        <GridColItem image={listImages[0]} row="row-span-2" />
        <GridColItem image={listImages[0]} row="row-span-4" />
        <GridColItem image={listImages[0]} row="row-span-1" />
      </div>
      <div className="grid h-full grid-rows-5 gap-6">
        <GridColItem image={listImages[0]} row="row-span-2" />
        <GridColItem image={listImages[0]} row="row-span-3" />
      </div>
    </div>
  );
}
