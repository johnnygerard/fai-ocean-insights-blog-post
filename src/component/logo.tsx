import Image from "next/image";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Logo = memo(({ className }: Props) => {
  return (
    <Image
      className={className}
      src="/asset/image/logo.svg"
      alt="OceanInsights"
      width="216"
      height="32"
      priority
    />
  );
});

Logo.displayName = "Logo";
