import { Logo } from "@/component/logo";
import { NavigationList } from "@/component/navigation-list";
import { SocialMediaLinks } from "@/component/social-media-links";
import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Footer = memo(({ className }: Props) => {
  return (
    <footer
      className={cn(
        "border-t border-[#B6979133] p-4 sm:p-6 sm:pt-4 md:p-8 md:pt-4 lg:p-12 lg:pt-6",
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

        <div
          className={cn(
            "flex flex-wrap justify-between gap-8 sm:gap-10 md:gap-12",
            "max-sm:flex-col max-sm:items-center max-sm:text-center",
          )}
        >
          <NavigationList
            header="Explore"
            links={[
              {
                href: "/explore/deep-sea",
                text: "Deep Sea",
              },
              {
                href: "/explore/marine-life",
                text: "Marine Life",
              },
              {
                href: "/explore/coral-reefs",
                text: "Coral Reefs",
              },
            ]}
          />
          <NavigationList
            header="Conservation"
            links={[
              {
                href: "/conservation/initiatives",
                text: "Initiatives",
              },
              {
                href: "/conservation/research",
                text: "Research",
              },
              {
                href: "/conservation/get-involved",
                text: "Get Involved",
              },
            ]}
          />
          <NavigationList
            header="About Us"
            links={[
              {
                href: "/about/our-mission",
                text: "Our Mission",
              },
              {
                href: "/about/team",
                text: "Team",
              },
              {
                href: "/about/contact",
                text: "Contact",
              },
            ]}
          />
        </div>
      </nav>
    </footer>
  );
});

Footer.displayName = "Footer";
