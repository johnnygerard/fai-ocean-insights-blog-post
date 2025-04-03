import { ArticleJson } from "@/type/article-json";
import { formatDate } from "@/util/format-date";
import Image from "next/image";
import { memo } from "react";

type Props = {
  className?: string;
  article: ArticleJson["relatedArticles"][number];
};

export const ArticlePreview = memo(
  ({
    className,
    article: {
      image: { name, alt },
      title,
      tags,
      date,
    },
  }: Props) => {
    return (
      <div className={className}>
        <Image
          className="h-56 w-full rounded-lg object-cover"
          src={`/asset/image/article-preview/${name}`}
          alt={alt}
          width={704}
          height={384}
        />
        <hgroup className="mt-3 flex flex-col gap-2">
          <h2 className="truncate text-[1.0625rem]/[1.5rem] font-semibold">
            {title}
          </h2>
          <p className="truncate text-[0.8125rem]/[1rem] font-medium text-accent">
            {tags.join(", ")}
          </p>
          <time
            className="truncate text-[0.8125rem]/[1rem] text-dim"
            dateTime={date}
          >
            {formatDate(date)}
          </time>
        </hgroup>
      </div>
    );
  },
);

ArticlePreview.displayName = "ArticlePreview";
