import { clsx } from "clsx";
import Image from "next/image";
import type { FC } from "react";

type Props = {
  className?: string;
  name: string;
  title: string;
};

export const Author: FC<Props> = ({ className, name, title }) => (
  <div className={clsx("flex items-center gap-3", className)}>
    <Image
      className="size-9"
      src="headshot.png"
      alt=""
      loading="eager"
      width={256}
      height={256}
    />
    <div className="flex w-60 flex-col text-label-2">
      <span className="truncate font-semibold">{name}</span>
      <span className="truncate text-dim">{title}</span>
    </div>
  </div>
);
