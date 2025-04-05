import { Button } from "@/component/button";
import { HeaderMenu } from "@/component/header-menu";
import { Logo } from "@/component/logo";
import { VerticalRule } from "@/component/svg/vertical-rule";
import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Header = memo(({ className }: Props) => {
  return (
    <header
      className={cn(
        "top-0 z-10 bg-canvas/90 max-md:sticky",
        "tw_body_px flex items-center justify-between py-4",
        className,
      )}
    >
      <Logo className="z-20" />
      <HeaderMenu>
        <Button variant="text">Download app</Button>
        <VerticalRule className="max-md:hidden" />
        <Button variant="text">Log in</Button>
        <Button variant="primary">Try it free</Button>
      </HeaderMenu>
    </header>
  );
});

Header.displayName = "Header";
