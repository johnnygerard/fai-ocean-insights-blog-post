import { clsx } from "clsx";
import Image from "next/image";
import { memo } from "react";

type Props = {
  className?: string;
  headshotUrl: string;
  name: string;
  title: string;
};

export const Author = memo(({ headshotUrl, className, name, title }: Props) => {
  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <Image
        className="size-9"
        src={headshotUrl}
        alt=""
        width={256}
        height={256}
      />
      <div className="flex w-60 flex-col text-label-2">
        <span className="truncate font-semibold">{name}</span>
        <span className="truncate text-dim">{title}</span>
      </div>
    </div>
  );
});

Author.displayName = "Author";
