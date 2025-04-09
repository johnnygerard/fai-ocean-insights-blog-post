"use client";
import { clsx } from "clsx";
import { memo, useEffect, useState } from "react";

type Props = {
  className?: string;
};

export const BackToTop = memo(({ className }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = window.innerHeight;

    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    visible && (
      <button
        aria-label="Back to top"
        type="button"
        onClick={() => window.scrollTo({ top: 0 })}
        className={clsx(
          "fixed right-4 bottom-4 z-50 rounded-full bg-amber-400 p-3",
          "transition-[background-color] duration-300 hover:bg-amber-300",
          "shadow-[0_0_15px_rgba(251,191,36,0.5)]",
          className,
        )}
      >
        {/* Chevron Up Icon */}
        <svg
          aria-hidden
          className="size-4"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    )
  );
});

BackToTop.displayName = "BackToTop";
