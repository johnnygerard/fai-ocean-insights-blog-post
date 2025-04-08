import { Author } from "@/component/author";
import { formatDate } from "@/util/format-date";
import { clsx } from "clsx";
import { memo } from "react";

type Props = {
  className?: string;
  date: string;
  tags: string[] | string;
  title: string;
};

export const ArticleHeader = memo(({ className, date, tags, title }: Props) => {
  return (
    <header className="tw_body_px mx-auto max-w-180 py-6">
      <hgroup>
        <p
          className={clsx(
            "truncate text-label-1 font-medium text-accent",
            className,
          )}
        >
          {typeof tags === "string" ? tags : tags.join(", ")}
        </p>
        <h1 className="my-6 font-display text-h1 font-bold -tracking-[0.06rem]">
          {title}
        </h1>
        <p className="text-h3">
          A fascinating journey into the mysteries of the ocean, uncovering the
          unknown and the beauty beneath the waves.
        </p>
      </hgroup>
      <Author
        className="mt-6"
        headshotUrl="/asset/image/headshot.png"
        name="Jason Bialis"
        title="Product Designer"
      />
      <time className="mt-4 inline-block text-label-1" dateTime={date}>
        {formatDate(date)}
      </time>
    </header>
  );
});

ArticleHeader.displayName = "ArticleHeader";
