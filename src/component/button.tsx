import { cn } from "@/util/cn";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { memo } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = memo(({ children, className, ...props }: Props) => {
  return (
    <button
      className={cn(
        "text-[0.9375rem]/[1.25rem] font-medium text-[#050100]",
        "rounded-lg bg-[#FF5733] px-4 py-2",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
