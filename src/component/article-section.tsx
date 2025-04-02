import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  className?: string;
  heading: string;
  content: string;
};

export const ArticleSection = memo(({ className, heading, content }: Props) => {
  return (
    <section className={cn("mx-auto w-180 py-12", className)}>
      <h2 className="font-display text-[1.75rem]/[2rem] font-bold -tracking-[0.035rem]">
        {heading}
      </h2>
      <p className="mt-6 text-[1.0625rem]/[1.75rem]">{content}</p>
    </section>
  );
});

ArticleSection.displayName = "ArticleSection";
