import { cn } from "@/util/cn";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { memo } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Props = ButtonProps & { variant: "primary" | "text" };

export const Button = memo(
  ({ children, className, type, variant, ...props }: Props) => {
    return (
      <button
        type={type ?? "button"}
        className={cn(
          "text-[0.9375rem]/[1.25rem] font-medium",
          "transition-[opacity] hover:opacity-90 active:opacity-80",
          {
            text: "",
            primary: "rounded-lg bg-accent px-4 py-2 text-[#050100]",
          }[variant],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
