import { clsx } from "clsx";
import Image from "next/image";
import type { FC } from "react";

type Props = {
  className?: string;
};

const images = [
  {
    src: "gallery/1.png",
    alt: "A colorful coral reef teeming with diverse fish swimming among vibrant corals and sea anemones.",
  },
  {
    src: "gallery/2.png",
    alt: "A vibrant coral reef teeming with colorful fish and marine life under clear blue water.",
  },
  {
    src: "gallery/3.png",
    alt: "A colorful coral reef teeming with diverse fish swimming among the corals in clear blue water.",
  },
];

export const Gallery: FC<Props> = ({ className }) => (
  <div
    className={clsx(
      "tw_body_px my-12 flex flex-col gap-4 sm:gap-8",
      "md:relative md:h-105 md:overflow-hidden",
      className,
    )}
  >
    {images.map(({ alt, src }, index) => (
      <Image
        key={src}
        src={src}
        alt={alt}
        placeholder="blur"
        sizes="(min-width: 48em) 33.75rem, 100vw"
        className={clsx(
          "h-105 w-full rounded-2xl object-cover",
          "md:absolute md:left-1/2 md:h-full md:w-135",
          [
            "md:-translate-x-[calc(150%+3rem)]",
            "md:-translate-x-[calc(50%)]",
            "md:translate-x-[calc(50%+3rem)]",
          ][index],
        )}
      />
    ))}
  </div>
);
