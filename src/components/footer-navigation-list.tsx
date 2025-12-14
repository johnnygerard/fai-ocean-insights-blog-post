import { clsx } from "clsx";
import Link from "next/link";
import type { FC } from "react";
import type { FooterNavigation } from "~/data/footer-navigation";

type Props = {
  className?: string;
  navigation: FooterNavigation;
};

export const FooterNavigationList: FC<Props> = ({
  className,
  navigation: { header, links },
}) => (
  <ul
    aria-label={header}
    className={clsx(
      "space-y-2 text-label-1 font-medium sm:w-40 xl:w-50",
      className,
    )}
  >
    <li>{header}</li>
    {links.map(({ href, text }) => (
      <li key={href}>
        <Link
          className="text-dim transition-opacity hover:opacity-80"
          href={href}
          prefetch={false}
        >
          {text}
        </Link>
      </li>
    ))}
  </ul>
);
