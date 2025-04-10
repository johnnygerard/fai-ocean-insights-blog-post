import { Button } from "@/component/button";
import { HeaderMenu } from "@/component/header-menu";
import { Logo } from "@/component/logo";
import { VerticalRule } from "@/component/svg/vertical-rule";
import { clsx } from "clsx";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Header = memo(({ className }: Props) => {
  return (
    <header
      className={clsx(
        "top-0 z-100 bg-canvas/90 max-md:sticky",
        "tw_body_px flex items-center justify-between py-4",
        className,
      )}
    >
      <Logo className="z-200" />
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
