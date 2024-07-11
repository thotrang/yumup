"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import ChannelCard from "./ChannelCard";

interface Props {
  items: any;
}
export default function SliderChannel({ items }: Props) {
  return (
    <div className="">
      <Swiper
        spaceBetween={0}
        modules={[]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {items.map((item: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className="px-4">
                <ChannelCard item={item} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
