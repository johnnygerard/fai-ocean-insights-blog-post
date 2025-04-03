import { Author } from "@/component/author";
import { cn } from "@/util/cn";
import { formatDate } from "@/util/format-date";
import { memo } from "react";

type Props = {
  className?: string;
  date: string;
  tags: string[] | string;
  title: string;
};

export const ArticleHeader = memo(({ className, date, tags, title }: Props) => {
  return (
    <header className="mx-auto max-w-180 py-6">
      <hgroup>
        <p
          className={cn(
            "truncate text-[0.9375rem]/[1.25rem] font-medium text-accent",
            className,
          )}
        >
          {typeof tags === "string" ? tags : tags.join(", ")}
        </p>
        <h1
          className={cn(
            "my-6",
            "font-display text-[3rem]/[3.25rem] font-bold -tracking-[0.06rem]",
          )}
        >
          {title}
        </h1>
        <p className="text-[1.25rem]/[1.5rem]">
          A fascinating journey into the mysteries of the ocean, uncovering the
          unknown and the beauty beneath the waves.
        </p>
      </hgroup>
      <Author
        className="mt-6"
        avatarUrl="/asset/image/avatar.png"
        name="Jason Bialis"
        title="Product Designer"
      />
      <time
        className="mt-4 inline-block text-[0.9375rem]/[1.25rem]"
        dateTime={date}
      >
        {formatDate(date)}
      </time>
    </header>
  );
});

ArticleHeader.displayName = "ArticleHeader";
