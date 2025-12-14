import { clsx } from "clsx";
import type { FC } from "react";
import { ArticlePreview } from "~/components/article-preview";
import type { RelatedArticle } from "~/data/related-articles";

type Props = {
  articles: RelatedArticle[];
  className?: string;
};

export const RelatedArticles: FC<Props> = ({ articles, className }) => (
  <aside className={clsx("tw_body_px py-6 md:py-7 lg:py-8", className)}>
    <nav aria-label="Related Articles">
      <h2
        className={clsx(
          "border-t-[1.5px] border-[#B6979133]",
          "py-3 font-display text-h2 font-bold -tracking-[0.035rem] md:py-4",
        )}
      >
        Related Articles
      </h2>
      <ul className="grid gap-8 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {articles.map((article) => (
          <li key={article.title}>
            <ArticlePreview
              article={article}
              imageSizes="(min-width: 90em) 33vw, (min-width: 48em) 50vw, 100vw"
            />
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);
