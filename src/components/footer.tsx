import { clsx } from "clsx";
import type { FC } from "react";
import { FooterNavigationList } from "~/components/footer-navigation-list";
import { Logo } from "~/components/logo";
import { SocialMediaLinks } from "~/components/social-media-links";
import { footerNavigation } from "~/data/footer-navigation";

type Props = {
  className?: string;
};

export const Footer: FC<Props> = ({ className }) => (
  <footer
    className={clsx(
      "border-t border-[#B6979133]",
      "tw_body_px py-4 sm:pt-4 sm:pb-6 md:pt-4 md:pb-8 lg:pt-6 lg:pb-12",
      className,
    )}
  >
    <nav
      className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:justify-between"
      aria-label="Footer"
    >
      <div
        className={clsx(
          "flex flex-col items-center justify-between gap-4",
          "sm:flex-row md:flex-col md:items-start",
        )}
      >
        <Logo />
        <SocialMediaLinks />
      </div>

      <ul
        className={clsx(
          "flex flex-wrap justify-between gap-8 sm:gap-10 md:gap-12",
          "max-sm:flex-col max-sm:items-center max-sm:text-center",
        )}
      >
        {footerNavigation.map((navigationList) => (
          <li key={navigationList.header}>
            <FooterNavigationList {...navigationList} />
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);
