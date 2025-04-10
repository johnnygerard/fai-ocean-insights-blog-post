"use client";
import { ChevronUp } from "@/component/svg/chevron-up";
import { clsx } from "clsx";
import { memo, useEffect, useRef, useState } from "react";

export const ScrollToTop = memo(() => {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const ariaLabel = "Back to top";
  const className = clsx(
    "fixed right-4 bottom-4 z-50 rounded-full bg-amber-400 p-3",
    "transition-[background-color] duration-300 hover:bg-amber-300",
    "shadow-[0_0_15px_rgba(251,191,36,0.5)] animate-fade-in",
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting);
    });

    const sentinel = sentinelRef.current!;
    observer.observe(sentinel);

    return () => {
      observer.unobserve(sentinel);
    };
  }, []);

  return (
    <>
      <div aria-hidden className="absolute top-full" ref={sentinelRef} />
      {visible && (
        <button
          aria-label={ariaLabel}
          className={className}
          onClick={() => window.scrollTo({ top: 0 })}
          type="button"
        >
          <ChevronUp />
        </button>
      )}
      <noscript>
        <a aria-label={ariaLabel} className={className} href="#">
          <ChevronUp />
        </a>
      </noscript>
    </>
  );
});

ScrollToTop.displayName = "ScrollToTop";
