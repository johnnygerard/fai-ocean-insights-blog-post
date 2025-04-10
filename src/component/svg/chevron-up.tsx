import { clsx } from "clsx";
import { memo } from "react";

type Props = {
  className?: string;
};

export const ChevronUp = memo(({ className }: Props) => {
  return (
    <svg
      aria-hidden
      className={clsx("size-4", className)}
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
});

ChevronUp.displayName = "ChevronUp";
