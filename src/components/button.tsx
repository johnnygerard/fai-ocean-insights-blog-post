import { clsx } from "clsx";
import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Props = ButtonProps & { variant: "primary" | "text" };

export const Button: FC<Props> = ({
  children,
  className,
  type,
  variant,
  ...props
}) => (
  <button
    type={type ?? "button"}
    className={clsx(
      "text-label-1 font-medium",
      "transition-opacity hover:opacity-90 active:opacity-80",
      {
        text: "",
        primary: "bg-accent rounded-lg px-4 py-2 text-[#050100]",
      }[variant],
      className,
    )}
    {...props}
  >
    {children}
  </button>
);
