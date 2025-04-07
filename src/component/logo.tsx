import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Logo = memo(({ className }: Props) => {
  return (
    <Link
      className={clsx(
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
      />
    </Link>
  );
});

Logo.displayName = "Logo";
