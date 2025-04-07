import { ArticleJson } from "@/type/article-json";
import { formatDate } from "@/util/format-date";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

type Props = {
  className?: string;
  article: ArticleJson["relatedArticles"][number];
  imageSizes: string;
};

export const ArticlePreview = memo(
  ({
    className,
    article: {
      image: { name, alt },
      title,
      tags,
      date,
      slug,
    },
    imageSizes,
  }: Props) => {
    return (
      <div className={className}>
        <Image
          className="h-56 w-full rounded-lg object-cover"
          src={`/asset/image/article-preview/${name}`}
          alt={alt}
          sizes={imageSizes}
          width={704}
          height={384}
        />
        <div className="mt-3 flex flex-col items-start gap-2">
          <Link
            className={clsx(
              "truncate text-base leading-6 font-semibold",
              "underline decoration-transparent transition-[opacity,text-decoration-color]",
              "hover:decoration-current hover:opacity-80",
            )}
            href={`/article/${slug}`}
          >
            {title}
          </Link>
          <p className="truncate text-label-2 font-medium text-accent">
            {tags.join(", ")}
          </p>
          <p className="truncate text-label-2 text-dim">
            <time dateTime={date}>{formatDate(date)}</time>
          </p>
        </div>
      </div>
    );
  },
);

ArticlePreview.displayName = "ArticlePreview";
