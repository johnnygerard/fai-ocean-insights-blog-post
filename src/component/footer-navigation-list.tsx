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

export const FooterNavigationList = memo(
  ({ className, header, links }: Props) => {
    return (
      <ul
        aria-label={header}
        className={cn(
          "space-y-2 text-[0.9375rem]/[1.25rem] font-medium sm:w-40 xl:w-50",
          className,
        )}
      >
        <li>{header}</li>
        {links.map(({ href, text }) => (
          <li key={href}>
            <Link
              className="text-dim transition-[opacity] hover:opacity-80"
              href={href}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    );
  },
);

FooterNavigationList.displayName = "FooterNavigationList";
