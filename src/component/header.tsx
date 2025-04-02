import { Button } from "@/component/button";
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
      className={cn("flex items-center justify-between px-12 py-4", className)}
    >
      <Logo />
      <div className="flex items-center gap-8">
        <Button variant="text">Download app</Button>
        <VerticalRule />
        <Button variant="text">Log in</Button>
        <Button variant="primary">Try it free</Button>
      </div>
    </header>
  );
});

Header.displayName = "Header";
