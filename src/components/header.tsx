import { clsx } from "clsx";
import type { FC } from "react";
import { Button } from "~/components/button";
import { HeaderMenu } from "~/components/header-menu";
import { Logo } from "~/components/logo";
import { VerticalRule } from "~/components/svg/vertical-rule";

type Props = {
  className?: string;
};

export const Header: FC<Props> = ({ className }) => (
  <header
    className={clsx(
      "bg-canvas/90 top-0 z-100 max-md:sticky",
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
