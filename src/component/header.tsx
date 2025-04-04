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
        "flex items-center justify-between px-4 py-4 sm:px-8 md:px-12",
        className,
      )}
    >
      <Logo className="z-20 max-md:w-40" />
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
