import { clsx } from "clsx";
import Link from "next/link";
import type { FC } from "react";
import { LogoFacebook } from "~/components/svg/logo-facebook";
import { LogoInstagram } from "~/components/svg/logo-instagram";
import { LogoX } from "~/components/svg/logo-x";

type Props = {
  className?: string;
};

export const SocialMediaLinks: FC<Props> = ({ className }) => (
  <ul
    aria-label="Social Media Links"
    className={clsx("flex items-center gap-3", className)}
  >
    {[
      { Logo: LogoFacebook, href: "https://facebook.com/facebook" },
      { Logo: LogoInstagram, href: "https://instagram.com/instagram" },
      { Logo: LogoX, href: "https://x.com/x" },
    ].map(({ Logo, href }, index) => (
      <li key={index}>
        <Link
          className="transition-opacity hover:opacity-80"
          href={href}
          rel="external noopener noreferrer"
          target="_blank"
        >
          <Logo className="size-6" />
        </Link>
      </li>
    ))}
  </ul>
);
