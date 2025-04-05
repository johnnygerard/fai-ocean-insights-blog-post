import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  className?: string;
  heading: string;
  content: string;
};

export const ArticleSection = memo(({ className, heading, content }: Props) => {
  return (
    <section
      className={cn(
        "tw_body_px mx-auto w-full max-w-180",
        "py-6 sm:py-8 md:py-10 lg:py-12",
        className,
      )}
    >
      <h2
        className={cn(
          "font-display font-bold -tracking-[0.025rem] lg:-tracking-[0.035rem]",
          "text-[1.25rem]/[1.5rem] sm:text-[1.5rem]/[1.75rem]",
          "md:text-[1.625rem]/[1.875rem] lg:text-[1.75rem]/[2rem]",
        )}
      >
        {heading}
      </h2>
      <p
        className={cn(
          "mt-4 text-[0.9375rem]/[1.5rem] sm:mt-5 md:mt-6",
          "sm:text-[1rem]/[1.625rem] md:text-[1.0625rem]/[1.75rem]",
        )}
      >
        {content}
      </p>
    </section>
  );
});

ArticleSection.displayName = "ArticleSection";
