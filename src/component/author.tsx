import { cn } from "@/util/cn";
import Image from "next/image";
import { memo } from "react";

type Props = {
  className?: string;
  avatarUrl: string;
  name: string;
  title: string;
};

export const Author = memo(({ avatarUrl, className, name, title }: Props) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        className="size-9"
        src={avatarUrl}
        alt=""
        width={256}
        height={256}
      />
      <div className="flex w-60 flex-col text-[0.8125rem]/[1rem]">
        <span className="truncate font-semibold">{name}</span>
        <span className="truncate text-dim">{title}</span>
      </div>
    </div>
  );
});

Author.displayName = "Author";
