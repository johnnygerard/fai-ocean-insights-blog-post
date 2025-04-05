import { FooterNavigationList } from "@/component/footer-navigation-list";
import { Logo } from "@/component/logo";
import { SocialMediaLinks } from "@/component/social-media-links";
import { FooterNavigation } from "@/type/footer-navigation";
import { cn } from "@/util/cn";
import footerNavigation from "@data/footer-navigation.json";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Footer = memo(({ className }: Props) => {
  const navigation: FooterNavigation = footerNavigation;

  return (
    <footer
      className={cn(
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
          className={cn(
            "flex flex-col items-center justify-between gap-4",
            "sm:flex-row md:flex-col md:items-start",
          )}
        >
          <Logo />
          <SocialMediaLinks />
        </div>

        <ul
          className={cn(
            "flex flex-wrap justify-between gap-8 sm:gap-10 md:gap-12",
            "max-sm:flex-col max-sm:items-center max-sm:text-center",
          )}
        >
          {navigation.map((navigationList) => (
            <li key={navigationList.header}>
              <FooterNavigationList {...navigationList} />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
});

Footer.displayName = "Footer";
