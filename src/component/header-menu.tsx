"use client";
import { clsx } from "clsx";
import { memo, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export const HeaderMenu = memo(({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Menu Disclosure Trigger */}
      <button
        aria-controls="menu-sidebar"
        aria-expanded={isMenuOpen}
        className="z-20 md:hidden"
        onClick={() => setIsMenuOpen((value) => !value)}
        title={`${isMenuOpen ? "Close" : "Open"} Menu`}
        type="button"
      >
        <svg className="size-6" viewBox="0 0 24 24" fill="none">
          <path
            d={isMenuOpen ? "M18 6L6 18M6 6L18 18" : "M4 6H20M4 12H20M4 18H20"}
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Menu Sidebar */}
      <div
        id="menu-sidebar"
        className={clsx(
          "fixed inset-0 z-10 flex flex-col items-center justify-center gap-6",
          "bg-canvas/90 backdrop-blur-md transition-[translate] duration-300 md:hidden",
          isMenuOpen || "translate-x-full",
        )}
      >
        {children}
      </div>

      {/* Menu Bar */}
      <div className="hidden items-center gap-8 md:flex">{children}</div>
    </>
  );
});

HeaderMenu.displayName = "HeaderMenu";
