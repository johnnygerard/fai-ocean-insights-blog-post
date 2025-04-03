import { LogoFacebook } from "@/component/svg/logo-facebook";
import { LogoInstagram } from "@/component/svg/logo-instagram";
import { LogoX } from "@/component/svg/logo-x";
import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  className?: string;
};

export const SocialMediaLinks = memo(({ className }: Props) => {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {[LogoFacebook, LogoInstagram, LogoX].map((Logo, index) => (
        <li key={index}>
          <Logo className="size-6" />
        </li>
      ))}
    </ul>
  );
});

SocialMediaLinks.displayName = "SocialMediaLinks";
