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
    <footer className={cn("border-t border-[#B6979133] p-12 pt-6", className)}>
      <nav className="flex gap-12" aria-label="Footer">
        <div className="flex flex-1 flex-col items-start justify-between">
          <Logo />
          <SocialMediaLinks />
        </div>
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
      </nav>
    </footer>
  );
});

Footer.displayName = "Footer";
