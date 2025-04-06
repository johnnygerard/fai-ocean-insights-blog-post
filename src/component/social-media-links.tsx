import { LogoFacebook } from "@/component/svg/logo-facebook";
import { LogoInstagram } from "@/component/svg/logo-instagram";
import { LogoX } from "@/component/svg/logo-x";
import { clsx } from "clsx";
import Link from "next/link";
import { memo } from "react";

type Props = {
  className?: string;
};

export const SocialMediaLinks = memo(({ className }: Props) => {
  return (
    <ul
      aria-label="Social Media Links"
      className={clsx("flex items-center gap-3", className)}
    >
      {[
        { Logo: LogoFacebook, href: "https://www.facebook.com/" },
        { Logo: LogoInstagram, href: "https://www.instagram.com/" },
        { Logo: LogoX, href: "https://x.com/" },
      ].map(({ Logo, href }, index) => (
        <li key={index}>
          <Link className="transition-[opacity] hover:opacity-80" href={href}>
            <Logo className="size-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
});

SocialMediaLinks.displayName = "SocialMediaLinks";
