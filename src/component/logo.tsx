import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Logo = memo(({ className }: Props) => {
  return (
    <Link href="/">
      <Image
        className={className}
        src="/asset/image/logo.svg"
        alt="OceanInsights"
        width="216"
        height="32"
        priority
      />
    </Link>
  );
});

Logo.displayName = "Logo";
