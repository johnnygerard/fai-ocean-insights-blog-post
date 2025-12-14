import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import type { RelatedArticle } from "~/data/related-articles";
import { formatDate } from "~/util/format-date";

type Props = {
  className?: string;
  article: RelatedArticle;
  imageSizes: string;
};

export const ArticlePreview: FC<Props> = ({
  className,
  article: {
    image: { name, alt, blurDataURL },
    title,
    tags,
    date,
    slug,
  },
  imageSizes,
}) => (
  <div className={className}>
    <Image
      className="h-56 w-full rounded-lg object-cover"
      src={`article-preview/${name}`}
      alt={alt}
      blurDataURL={blurDataURL}
      placeholder="blur"
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
        prefetch={false}
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
