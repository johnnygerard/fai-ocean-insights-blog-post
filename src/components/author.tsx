import { clsx } from "clsx";
import Image from "next/image";
import type { FC } from "react";

type Props = {
  className?: string;
  headshotUrl: string;
  name: string;
  title: string;
};

export const Author: FC<Props> = ({ headshotUrl, className, name, title }) => (
  <div className={clsx("flex items-center gap-3", className)}>
    <Image
      className="size-9"
      src={headshotUrl}
      alt=""
      width={256}
      height={256}
    />
    <div className="text-label-2 flex w-60 flex-col">
      <span className="truncate font-semibold">{name}</span>
      <span className="text-dim truncate">{title}</span>
    </div>
  </div>
);
