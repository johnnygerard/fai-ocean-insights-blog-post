import { clsx } from "clsx";
import { memo } from "react";

type Props = {
  className?: string;
};

export const VerticalRule = memo(({ className }: Props) => {
  return (
    <svg
      role="separator"
      aria-orientation="vertical"
      className={clsx("h-8 w-0.5", className)}
      viewBox="0 0 2 32"
      fill="none"
    >
      <path
        d="M1 0V32"
        stroke="#B69791"
        strokeOpacity="0.2"
        strokeWidth="1.5"
      />
    </svg>
  );
});

VerticalRule.displayName = "VerticalRule";
