import gallery1 from "@/asset/image/gallery/1.png";
import gallery2 from "@/asset/image/gallery/2.png";
import gallery3 from "@/asset/image/gallery/3.png";
import { cn } from "@/util/cn";
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
    <div className={cn("relative my-12 h-105 overflow-hidden", className)}>
      {images.map((image, index) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={image.alt}
          width={576}
          height={448}
          className={cn(
            "absolute left-1/2 h-full w-135 rounded-2xl object-cover",
            [
              "-translate-x-[calc(150%+3rem)]",
              "-translate-x-[calc(50%)]",
              "translate-x-[calc(50%+3rem)]",
            ][index],
          )}
        />
      ))}
    </div>
  );
});

Gallery.displayName = "Gallery";
