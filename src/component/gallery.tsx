import gallery1 from "@/asset/image/gallery/1.png";
import gallery2 from "@/asset/image/gallery/2.png";
import gallery3 from "@/asset/image/gallery/3.png";
import { clsx } from "clsx";
import Image from "next/image";
import { memo } from "react";

type Props = {
  className?: string;
};

const images = [
  {
    src: gallery1,
    alt: "A colorful coral reef teeming with diverse fish swimming among vibrant corals and sea anemones.",
  },
  {
    src: gallery2,
    alt: "A vibrant coral reef teeming with colorful fish and marine life under clear blue water.",
  },
  {
    src: gallery3,
    alt: "A colorful coral reef teeming with diverse fish swimming among the corals in clear blue water.",
  },
];

export const Gallery = memo(({ className }: Props) => {
  return (
    <div
      className={clsx(
        "tw_body_px my-12 flex flex-col gap-4 sm:gap-8",
        "md:relative md:h-105 md:overflow-hidden",
        className,
      )}
    >
      {images.map((image, index) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={image.alt}
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
});

Gallery.displayName = "Gallery";
