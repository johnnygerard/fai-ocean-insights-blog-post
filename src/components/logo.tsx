import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type Props = {
  className?: string;
};

export const Logo: FC<Props> = ({ className }) => (
  <Link
    className={clsx(
      "transition-opacity hover:opacity-80 max-md:w-40",
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
