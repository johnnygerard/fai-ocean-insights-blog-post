import { cn } from "@/util/cn";
import Link from "next/link";
import { memo } from "react";

type Props = {
  className?: string;
  header: string;
  links: {
    href: string;
    text: string;
  }[];
};

export const NavigationList = memo(({ className, header, links }: Props) => {
  return (
    <ul
      aria-label={header}
      className={cn(
        "w-50 space-y-2 text-[0.9375rem]/[1.25rem] font-medium",
        className,
      )}
    >
      <li>{header}</li>
      {links.map(({ href, text }) => (
        <li key={href}>
          <Link className="text-dim" href={href}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
});

NavigationList.displayName = "NavigationList";
