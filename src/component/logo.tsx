import { cn } from "@/util/cn";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Logo = memo(({ className }: Props) => {
  return (
    <Link
      className={cn(
        "transition-[opacity] hover:opacity-80 max-md:w-40",
        className,
      )}
      href="/"
    >
      <Image
        src="/asset/image/logo.svg"
        alt="OceanInsights"
        width={216}
        height={32}
        priority
      />
    </Link>
  );
});

Logo.displayName = "Logo";
