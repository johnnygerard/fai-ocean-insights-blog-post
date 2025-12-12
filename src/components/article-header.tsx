import { clsx } from "clsx";
import type { FC } from "react";
import { Author } from "~/components/author";
import { formatDate } from "~/util/format-date";

type Props = {
  className?: string;
  date: string;
  tags: string[] | string;
  title: string;
};

export const ArticleHeader: FC<Props> = ({ className, date, tags, title }) => (
  <header className="tw_body_px mx-auto max-w-180 py-6">
    <hgroup>
      <p
        className={clsx(
          "text-label-1 text-accent truncate font-medium",
          className,
        )}
      >
        {typeof tags === "string" ? tags : tags.join(", ")}
      </p>
      <h1 className="font-display text-h1 my-6 font-bold -tracking-[0.06rem]">
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
    <time className="text-label-1 mt-4 inline-block" dateTime={date}>
      {formatDate(date)}
    </time>
  </header>
);
