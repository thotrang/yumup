"use client";
import {
  DetailedHTMLProps,
  useEffect,
  useRef,
  VideoHTMLAttributes,
} from "react";
import { twJoin } from "tailwind-merge";

interface IBasseVideoProps
  extends DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  link?: string;
}
export default function BaseVideo({
  className = "",
  src,
  link,
  controls = true,
  ...prop
}: IBasseVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = ref.current;
    if (videoElement && controls === false) {
      videoElement.removeAttribute("controls");
      videoElement.controls = false;
    }
  }, [controls]);

  return (
    <video
      width="0"
      height="0"
      controls={controls}
      preload="none"
      className={twJoin(className, "block")}
      playsInline
      ref={ref}
      {...prop}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
